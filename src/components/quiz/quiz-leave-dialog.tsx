import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useClickAway } from '@uidotdev/usehooks';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';

interface QuizLeaveDialogProps {
	correct: number;
	incorrect: number;
	total: number;
	onConfirm: () => void;
	onCancel: () => void;
}

export function QuizLeaveDialog({
	correct,
	incorrect,
	total,
	onConfirm,
	onCancel,
}: QuizLeaveDialogProps) {
	const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				onCancel();
			}
			if (e.key === 'Enter') {
				e.preventDefault();
				onConfirm();
			}
		},
		[onCancel, onConfirm],
	);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	const ref = useClickAway<HTMLDivElement>(() => onCancel());

	return (
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
				<p className="text-base font-semibold">Leave the quiz?</p>
				<p className="mt-2 text-sm leading-relaxed text-text-muted">
					Your progress is saved automatically.
				</p>

				{/* Score summary */}
				<div className="mt-4 flex items-center gap-4 rounded-lg border border-border bg-surface/60 px-4 py-3">
					<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400">
						<CheckCircle2 className="h-4 w-4" />
						<span>{correct} correct</span>
					</div>
					<div className="flex items-center gap-1.5 text-sm font-medium text-red-400">
						<XCircle className="h-4 w-4" />
						<span>{incorrect} wrong</span>
					</div>
					<div className="ml-auto font-tech text-sm font-bold text-accent">
						{pct}%
					</div>
				</div>

				<Muted className="mt-2 text-xs">
					{total} question{total !== 1 ? 's' : ''} answered this session.
				</Muted>

				<div className="mt-5 flex justify-end gap-3">
					<Button variant="outline" size="sm" onClick={onCancel}>
						Keep going
					</Button>
					<Button size="sm" onClick={onConfirm}>
						Leave quiz
					</Button>
				</div>

				<Muted className="mt-3 text-center text-[11px]">
					Enter to leave &middot; Esc to stay
				</Muted>
			</motion.div>
		</motion.div>
	);
}
