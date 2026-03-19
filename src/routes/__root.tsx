import { createRootRoute, Link, Outlet, useNavigate, useMatches } from '@tanstack/react-router';
import { useState, useMemo, useCallback } from 'react';
import { AccentSwitcher } from '@/components/ui/accent-switcher';
import { Play, X, Keyboard, BarChart3, Settings, ChevronRight, Home } from 'lucide-react';
import { H2, Label, Body, Muted, Code } from '@/components/ui/typography';
import { useClickAway } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import { useHotkeys, useHotkeyScope, getHotkeyManager } from '@/lib/hotkeys';
import type { Shortcut } from '@/lib/hotkeys';

const palettes = {
	amber: { label: 'Amber', oklch: 'oklch(0.555 0.146 49)' },
	emerald: { label: 'Emerald', oklch: 'oklch(0.511 0.086 186.4)' },
	cobalt: { label: 'Cobalt', oklch: 'oklch(0.488 0.095 264)' },
	raspberry: { label: 'Raspberry', oklch: 'oklch(0.488 0.146 349)' },
};

/* Map route paths to shortcut scopes */
function routeToScope(pathname: string): string | undefined {
	if (pathname.startsWith('/quiz')) return 'quiz';
	if (pathname.startsWith('/flashcards')) return 'flashcards';
	if (pathname.startsWith('/glossary')) return 'glossary';
	if (pathname.startsWith('/exam')) return 'exam';
	return undefined;
}

export const Route = createRootRoute({
	component: RootLayout,
});

/* Placeholder progress — will be driven by real data later */
const readinessPercent = 0;

function ReadinessBar({ percent }: { percent: number }) {
	return (
		<div className="flex items-center justify-center gap-3">
			<div className="h-1.5 w-lg overflow-hidden rounded-full bg-surface-alt">
				<div
					className="h-full rounded-full bg-accent transition-all duration-500"
					style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
				/>
			</div>
			<span className="shrink-0 text-xs tabular-nums text-text-muted">{percent}%</span>
		</div>
	);
}

function ShortcutsOverlay({ onClose }: { onClose: () => void }) {
	const groups = getHotkeyManager().getDisplayGroups();
	const ref = useClickAway<HTMLDivElement>(onClose);

	// Escape closes the overlay — pushed as highest-priority scope
	useHotkeys('shortcuts-overlay', [
		{ key: 'Escape', label: 'Close', action: () => onClose() },
	], { push: true });

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 backdrop-blur-sm">
			<div ref={ref} className="w-full max-w-2xl rounded-xl border border-border bg-surface-alt p-10">
				<div className="flex items-center justify-between">
					<H2>Keyboard Shortcuts</H2>
					<Button variant="ghost" size="icon" onClick={onClose}>
						<X className="h-5 w-5" />
					</Button>
				</div>

				<div className={`mt-8 grid gap-x-10 gap-y-8 ${groups.length > 1 ? 'grid-cols-2' : 'mx-auto max-w-sm'}`}>
					{groups.map(({ scope: groupLabel, shortcuts: items }) => (
						<div key={groupLabel}>
							<Label>{groupLabel}</Label>
							<div className="mt-3 space-y-3">
								{items.map((s) => (
									<div
										key={s.key + s.label}
										className="flex items-center justify-between"
									>
										<Body className={s.highlight ? 'font-bold text-accent' : 'text-text-muted'}>
											{s.label}
										</Body>
										<Code className={s.highlight ? 'font-bold text-accent' : undefined}>
											{s.key.toUpperCase()}
										</Code>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<Muted className="mt-8 text-center">
					Press <Code>?</Code> / <Code>ß</Code> or <Code>ESC</Code> to close
				</Muted>
			</div>
		</div>
	);
}

/** Route label map — add entries here when new routes are created */
const routeLabels: Record<string, string> = {
	'/quiz': 'Quiz',
	'/settings': 'Settings',
	'/flashcards': 'Flashcards',
	'/glossary': 'Glossary',
	'/roadmap': 'Roadmap',
	'/exam': 'Exam',
};

function Breadcrumbs() {
	const matches = useMatches();
	const lastMatch = matches[matches.length - 1];
	const pathname = lastMatch?.pathname ?? '/';

	// Don't render on home page
	if (pathname === '/') return null;

	// Build breadcrumb segments from pathname
	const segments = pathname.split('/').filter(Boolean);

	return (
		<div className="border-b border-border bg-surface/95 px-6 py-2 backdrop-blur">
			<nav className="flex items-center gap-1.5 text-sm">
				<Link to="/" className="text-text-muted transition-colors hover:text-text">
					<Home className="h-3.5 w-3.5" />
				</Link>
				{segments.map((segment, i) => {
					const path = '/' + segments.slice(0, i + 1).join('/');
					const label = routeLabels[path] ?? segment.charAt(0).toUpperCase() + segment.slice(1);
					const isLast = i === segments.length - 1;
					return (
						<span key={path} className="flex items-center gap-1.5">
							<ChevronRight className="h-3 w-3 text-text-muted" />
							{isLast ? (
								<span className="font-medium text-text">{label}</span>
							) : (
								<Link to={path} className="text-text-muted transition-colors hover:text-text">
									{label}
								</Link>
							)}
						</span>
					);
				})}
			</nav>
		</div>
	);
}

function RootLayout() {
	const navigate = useNavigate();
	const matches = useMatches();
	const [showShortcuts, setShowShortcuts] = useState(false);

	// Determine active scope from current route
	const activeScope = useMemo(() => {
		const lastMatch = matches[matches.length - 1];
		return lastMatch ? routeToScope(lastMatch.pathname) : undefined;
	}, [matches]);

	const toggleShortcuts = useCallback(() => {
		setShowShortcuts((prev) => !prev);
	}, []);

	const closeShortcuts = useCallback(() => {
		setShowShortcuts(false);
	}, []);

	// Global shortcuts — scope-specific shortcuts are registered by each page/modal
	const globalShortcuts = useMemo<Shortcut[]>(
		() => [
			{ key: '?', label: 'Toggle shortcuts', action: () => toggleShortcuts(), mod: { shift: true }, highlight: true },
			{ key: 'ß', label: 'Toggle shortcuts', action: () => toggleShortcuts() },
			{ key: 'q', label: 'Go to Quiz', action: () => navigate({ to: '/quiz' }) },
			{ key: 'h', label: 'Go Home', action: () => navigate({ to: '/' }) },
		],
		[navigate, toggleShortcuts],
	);

	useHotkeys('global', globalShortcuts);
	useHotkeyScope(activeScope);

	return (
		<div className="min-h-screen bg-surface text-text">
			<header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-backdrop-filter:bg-surface/60">
				<nav className="grid h-14 grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
					<Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
						<img src="/favicon.svg" alt="" className="h-5 w-5" />
						AI-900
					</Link>

					<ReadinessBar percent={readinessPercent} />

					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="sm"
							className="gap-1.5 border-accent bg-accent-dim font-semibold text-accent"
						>
							<Play className="h-3.5 w-3.5" />
							Start Exam
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => navigate({ to: '/' })}
							aria-label="Progress stats"
						>
							<BarChart3 className="h-4.5 w-4.5" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleShortcuts}
							aria-label="Keyboard shortcuts"
						>
							<Keyboard className="h-4.5 w-4.5" />
						</Button>
						<Link to="/settings">
							<Button variant="ghost" size="icon" aria-label="Settings">
								<Settings className="h-4.5 w-4.5" />
							</Button>
						</Link>
						<AccentSwitcher palettes={palettes} defaultPalette="amber" />
					</div>
				</nav>
			</header>

			<Breadcrumbs />

			<main>
				<Outlet />
			</main>

			{showShortcuts && (
				<ShortcutsOverlay onClose={closeShortcuts} />
			)}

		</div>
	);
}
