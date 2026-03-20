import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from '@uidotdev/usehooks';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';

interface ConfirmDialogProps {
	open: boolean;
	title: string;
	description: string;
	/** Small muted line below the description */
	hint?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	onConfirm: () => void;
	onCancel: () => void;
}

export function ConfirmDialog({
	open,
	title,
	description,
	hint,
	confirmLabel = 'Leave',
	cancelLabel = 'Stay',
	onConfirm,
	onCancel,
}: ConfirmDialogProps) {
	// Close on Escape
	useEffect(() => {
		if (!open) return;
		function handler(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				e.preventDefault();
				onCancel();
			}
		}
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [open, onCancel]);

	const ref = useClickAway<HTMLDivElement>(() => {
		if (open) onCancel();
	});

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.15 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 backdrop-blur-sm"
				>
					<motion.div
						ref={ref}
						initial={{ opacity: 0, scale: 0.95, y: 8 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 8 }}
						transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
						className="w-full max-w-sm rounded-xl border border-border bg-surface-alt p-6 shadow-xl"
					>
						<p className="text-base font-semibold">{title}</p>
						<p className="mt-2 text-sm leading-relaxed text-text-muted">
							{description}
						</p>
						{hint && <Muted className="mt-1.5 text-xs">{hint}</Muted>}

						<div className="mt-6 flex justify-end gap-3">
							<Button variant="outline" size="sm" onClick={onCancel}>
								{cancelLabel}
							</Button>
							<Button size="sm" onClick={onConfirm}>
								{confirmLabel}
							</Button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
