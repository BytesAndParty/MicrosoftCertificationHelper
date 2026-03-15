/**
 * AccentSwitcher - Theme Mode & Accent Color Picker
 *
 * Persists both theme mode and accent to localStorage.
 * Works with the inline FOUC-prevention script in index.html
 * that reads the same keys before React mounts.
 */

import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export interface PaletteConfig {
	label: string;
	oklch: string;
}

export type ThemeMode = 'light' | 'dark';

export interface AccentSwitcherProps {
	palettes: Record<string, PaletteConfig>;
	defaultPalette?: string;
	className?: string;
	onThemeChange?: (mode: ThemeMode) => void;
	onAccentChange?: (key: string) => void;
}

const THEME_KEY = 'theme_pref';
const ACCENT_KEY = 'accent_pref';

function readStoredTheme(): ThemeMode {
	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === 'dark' || stored === 'light') return stored;
	} catch {}
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredAccent(fallback: string): string {
	try {
		const stored = localStorage.getItem(ACCENT_KEY);
		if (stored) return stored;
	} catch {}
	return fallback;
}

export function AccentSwitcher({
	palettes,
	defaultPalette,
	className,
	onThemeChange,
	onAccentChange,
}: AccentSwitcherProps) {
	const paletteKeys = Object.keys(palettes);
	const fallbackKey = defaultPalette && palettes[defaultPalette] ? defaultPalette : (paletteKeys[0] ?? '');

	const [theme, setTheme] = useState<ThemeMode>(() => readStoredTheme());
	const [accent, setAccent] = useState<string>(() => readStoredAccent(fallbackKey));

	// Apply theme to DOM
	const applyTheme = useCallback((mode: ThemeMode) => {
		document.documentElement.setAttribute('data-theme', mode);
		document.documentElement.classList.toggle('dark', mode === 'dark');
		try { localStorage.setItem(THEME_KEY, mode); } catch {}
	}, []);

	// Apply accent to DOM
	const applyAccent = useCallback((key: string) => {
		document.documentElement.setAttribute('data-accent', key);
		try { localStorage.setItem(ACCENT_KEY, key); } catch {}
	}, []);

	// Sync DOM on mount (in case inline script didn't run or values changed)
	useEffect(() => {
		applyTheme(theme);
		applyAccent(accent);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// System preference listener
	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = (e: MediaQueryListEvent) => {
			try { if (localStorage.getItem(THEME_KEY)) return; } catch {}
			const next: ThemeMode = e.matches ? 'dark' : 'light';
			setTheme(next);
			applyTheme(next);
			onThemeChange?.(next);
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, [applyTheme, onThemeChange]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next: ThemeMode = prev === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			onThemeChange?.(next);
			return next;
		});
	}, [applyTheme, onThemeChange]);

	const selectAccent = useCallback(
		(key: string) => {
			setAccent(key);
			applyAccent(key);
			onAccentChange?.(key);
		},
		[applyAccent, onAccentChange],
	);

	const isDark = theme === 'dark';

	return (
		<div className={cn('flex items-center gap-1', className)}>
			<Button
				variant="ghost"
				size="icon"
				onClick={toggleTheme}
				aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
				className="relative overflow-hidden"
			>
				<Sun
					className={cn(
						'h-[1.125rem] w-[1.125rem] transition-transform duration-200',
						isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0',
					)}
					style={{ position: isDark ? 'relative' : 'absolute' }}
				/>
				<Moon
					className={cn(
						'h-[1.125rem] w-[1.125rem] transition-transform duration-200',
						isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100',
					)}
					style={{ position: isDark ? 'absolute' : 'relative' }}
				/>
			</Button>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" aria-label="Accent color">
						<Palette className="h-[1.125rem] w-[1.125rem]" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-44">
					<DropdownMenuLabel>Accent color</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{paletteKeys.map((key) => {
						const palette = palettes[key];
						if (!palette) return null;
						const { label, oklch } = palette;
						return (
							<DropdownMenuItem
								key={key}
								onClick={() => selectAccent(key)}
								className="flex cursor-pointer items-center gap-3"
							>
								<span
									className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-border"
									style={{ backgroundColor: oklch }}
								/>
								<span>{label}</span>
								{accent === key && (
									<span className="ml-auto text-xs opacity-70">&#10003;</span>
								)}
							</DropdownMenuItem>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
