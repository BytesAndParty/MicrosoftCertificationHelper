import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { Button } from './button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './dropdown-menu';
import { cn } from '../../lib/utils';
import { useStudyStore } from '../../lib/study/store';

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

type AccentPalette = 'amber' | 'emerald' | 'cobalt' | 'raspberry';
type ThemeMode = 'light' | 'dark';

const THEME_KEY = 'ai900_theme_pref';

const accents: Record<AccentPalette, { label: string; labelDe: string; oklch: string }> = {
	amber: { label: 'Amber', labelDe: 'Amber', oklch: 'oklch(0.555 0.146 49)' },
	emerald: { label: 'Emerald', labelDe: 'Smaragd', oklch: 'oklch(0.511 0.086 186.4)' },
	cobalt: { label: 'Cobalt', labelDe: 'Kobalt', oklch: 'oklch(0.488 0.217 264.4)' },
	raspberry: { label: 'Raspberry', labelDe: 'Himbeere', oklch: 'oklch(0.525 0.199 4)' },
};

const VALID_PALETTES = new Set<AccentPalette>(Object.keys(accents) as AccentPalette[]);

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function readTheme(): ThemeMode {
	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === 'dark' || stored === 'light') return stored;
	} catch {}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(mode: ThemeMode) {
	document.documentElement.dataset.theme = mode;
	document.documentElement.classList.toggle('dark', mode === 'dark');
	try {
		localStorage.setItem(THEME_KEY, mode);
	} catch {}
}

function applyAccent(palette: AccentPalette) {
	document.documentElement.dataset.accent = palette;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface AccentSwitcherProps {
	lang?: 'en' | 'de';
	className?: string;
}

export function AccentSwitcher({ lang = 'en', className }: AccentSwitcherProps) {
	const [theme, setTheme] = useState<ThemeMode>(() => readTheme());
	const updateSettings = useStudyStore((s) => s.updateSettings);
	const accent = useStudyStore((s) => s.settings?.accentPalette) as AccentPalette | undefined;

	const currentAccent: AccentPalette = accent && VALID_PALETTES.has(accent) ? accent : 'amber';

	// Sync initial theme on mount
	useEffect(() => {
		const initial = readTheme();
		setTheme(initial);
		applyTheme(initial);
	}, []);

	// Listen for system preference changes
	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (e: MediaQueryListEvent) => {
			try {
				if (localStorage.getItem(THEME_KEY)) return;
			} catch {}
			const next: ThemeMode = e.matches ? 'dark' : 'light';
			setTheme(next);
			applyTheme(next);
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next: ThemeMode = prev === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			return next;
		});
	}, []);

	const selectAccent = useCallback(
		(palette: AccentPalette) => {
			applyAccent(palette);
			updateSettings({ accentPalette: palette });
		},
		[updateSettings]
	);

	const isDark = theme === 'dark';
	const themeLabel =
		lang === 'de'
			? isDark
				? 'Auf Light Mode wechseln'
				: 'Auf Dark Mode wechseln'
			: isDark
				? 'Switch to light mode'
				: 'Switch to dark mode';

	return (
		<div className={cn('flex items-center gap-1', className)}>
			{/* Theme mode toggle */}
			<Button
				variant="ghost"
				size="icon"
				onClick={toggleTheme}
				aria-label={themeLabel}
				title={themeLabel}
				className="relative overflow-hidden"
			>
				<Sun
					className={cn(
						'h-[1.125rem] w-[1.125rem] transition-transform duration-200',
						isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
					)}
					style={{ position: isDark ? 'relative' : 'absolute' }}
				/>
				<Moon
					className={cn(
						'h-[1.125rem] w-[1.125rem] transition-transform duration-200',
						isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
					)}
					style={{ position: isDark ? 'absolute' : 'relative' }}
				/>
			</Button>

			{/* Accent palette picker */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						title={lang === 'de' ? 'Akzentfarbe' : 'Accent color'}
						aria-label={lang === 'de' ? 'Akzentfarbe wählen' : 'Choose accent color'}
					>
						<Palette className="h-[1.125rem] w-[1.125rem]" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-44">
					<DropdownMenuLabel>{lang === 'de' ? 'Akzentfarbe' : 'Accent color'}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{(Object.entries(accents) as [AccentPalette, (typeof accents)[AccentPalette]][]).map(
						([key, { label, labelDe, oklch }]) => (
							<DropdownMenuItem
								key={key}
								onClick={() => selectAccent(key)}
								className="flex cursor-pointer items-center gap-3"
							>
								<span
									className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-border"
									style={{ backgroundColor: oklch }}
								/>
								<span>{lang === 'de' ? labelDe : label}</span>
								{currentAccent === key && <span className="ml-auto text-xs text-accent-primary">✓</span>}
							</DropdownMenuItem>
						)
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
