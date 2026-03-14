import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { AccentSwitcher } from '@/components/ui/accent-switcher';

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

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<div className="min-h-screen bg-surface text-text">
			<header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
				<nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
					<Link to="/" className="text-lg font-semibold tracking-tight">
						AI-900 Study Helper
					</Link>
					<AccentSwitcher palettes={palettes} defaultPalette="amber" />
				</nav>
			</header>

			<main className="mx-auto max-w-5xl px-4 py-8">
				<Outlet />
			</main>

			<Suspense>
				<TanStackRouterDevtools position="bottom-right" />
			</Suspense>
		</div>
	);
}
