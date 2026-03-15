import { Muted } from '@/components/ui/typography';

export function SiteFooter() {
	return (
		<footer className="border-t border-border px-10 py-8">
			<div className="flex items-center justify-between">
				<Muted className="text-sm">AI-900 Study Helper</Muted>
				<Muted className="text-sm">Built for learning, not for profit.</Muted>
			</div>
		</footer>
	);
}
