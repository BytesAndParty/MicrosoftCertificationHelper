import { createRootRoute, Link, Outlet, useNavigate, useMatches } from '@tanstack/react-router';
import { lazy, Suspense, useState, useMemo, useCallback } from 'react';
import { AccentSwitcher } from '@/components/ui/accent-switcher';
import { Play, X, Keyboard, BarChart3 } from 'lucide-react';
import { H2, Label, Body, Muted, Code } from '@/components/ui/typography';
import { useClickAway } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import { useHotkeys, getActiveShortcuts } from '@/lib/hotkeys';
import type { ShortcutMap, ShortcutScope } from '@/lib/hotkeys';

const TanStackRouterDevtools = import.meta.env.DEV
	? lazy(() =>
			import('@tanstack/router-devtools').then((m) => ({
				default: m.TanStackRouterDevtools,
			})),
		)
	: () => null;

const palettes = {
	amber: { label: 'Amber', oklch: 'oklch(0.555 0.146 49)' },
	emerald: { label: 'Emerald', oklch: 'oklch(0.511 0.086 186.4)' },
	cobalt: { label: 'Cobalt', oklch: 'oklch(0.488 0.095 264)' },
	raspberry: { label: 'Raspberry', oklch: 'oklch(0.488 0.146 349)' },
};

/* Map route paths to shortcut scopes */
function routeToScope(pathname: string): ShortcutScope | undefined {
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

function ShortcutsOverlay({
	shortcuts,
	scope,
	onClose,
}: {
	shortcuts: ShortcutMap;
	scope?: ShortcutScope;
	onClose: () => void;
}) {
	const groups = getActiveShortcuts(shortcuts, scope);
	const ref = useClickAway<HTMLDivElement>(onClose);

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
					Press <Code>?</Code> or <Code>ESC</Code> to close
				</Muted>
			</div>
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

	// Central shortcut config — all shortcuts in one place
	const shortcuts = useMemo<ShortcutMap>(
		() => ({
			global: [
				{ key: '?', label: 'Show shortcuts', action: toggleShortcuts, mod: { shift: true }, highlight: true },
				{ key: 'Escape', label: 'Close overlay', action: closeShortcuts },
				{ key: 'q', label: 'Go to Quiz', action: () => navigate({ to: '/' }) },
				{ key: 'f', label: 'Go to Flashcards', action: () => navigate({ to: '/' }) },
				{ key: 'g', label: 'Go to Glossary', action: () => navigate({ to: '/' }) },
				{ key: 'r', label: 'Go to Roadmap', action: () => navigate({ to: '/' }) },
				{ key: 'e', label: 'Start Exam', action: () => navigate({ to: '/' }) },
				{ key: 'h', label: 'Go Home', action: () => navigate({ to: '/' }) },
			],
			quiz: [
				{ key: '1-4', label: 'Select answer', action: () => {} },
				{ key: 'n', label: 'Next question', action: () => {} },
				{ key: 'p', label: 'Show hint', action: () => {} },
			],
			flashcards: [
				{ key: 'Space', label: 'Flip card', action: () => {} },
				{ key: 'a', label: 'Rate: Again', action: () => {} },
				{ key: 's', label: 'Rate: Good', action: () => {} },
				{ key: 'd', label: 'Rate: Easy', action: () => {} },
			],
			glossary: [
				{ key: '/', label: 'Focus search', action: () => {} },
			],
			exam: [
				{ key: '1-4', label: 'Select answer', action: () => {} },
				{ key: 'n', label: 'Next question', action: () => {} },
				{ key: 'b', label: 'Previous question', action: () => {} },
				{ key: 'm', label: 'Flag question', action: () => {} },
			],
		}),
		[navigate, toggleShortcuts, closeShortcuts],
	);

	useHotkeys(shortcuts, activeScope);

	return (
		<div className="min-h-screen bg-surface text-text">
			<header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
				<nav className="grid h-14 grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
					<Link to="/" className="text-lg font-semibold tracking-tight">
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
						<AccentSwitcher palettes={palettes} defaultPalette="amber" />
					</div>
				</nav>
			</header>

			<main className="px-6 py-8">
				<Outlet />
			</main>

			{showShortcuts && (
				<ShortcutsOverlay
					shortcuts={shortcuts}
					scope={activeScope}
					onClose={closeShortcuts}
				/>
			)}

			<Suspense>
				<TanStackRouterDevtools position="bottom-right" />
			</Suspense>
		</div>
	);
}
