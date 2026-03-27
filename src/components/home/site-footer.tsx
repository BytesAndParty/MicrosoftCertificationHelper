import { Coffee } from 'lucide-react';
import { Muted } from '@/components/ui/typography';
import { useCertStore } from '@/store/cert-store';

export function SiteFooter() {
	const certCode = useCertStore((s) => s.current().code);

	return (
		<footer
			className="border-t border-border px-4 py-6 sm:px-6 sm:py-8 md:px-10"
			style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 72px' }}
		>
			<div className="flex items-center justify-between">
				<Muted className="text-sm">{certCode} Study Helper</Muted>
				<a
					href="https://buymeacoffee.com/robertstickler"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
				>
					<Coffee className="h-4 w-4" />
					Buy me a coffee
				</a>
			</div>
		</footer>
	);
}
