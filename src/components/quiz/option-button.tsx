import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface OptionButtonProps {
	/** Display index (1-based) for keyboard hint */
	index: number;
	label: string;
	explanation?: string;
	isSelected: boolean;
	isFocused: boolean;
	isRevealed: boolean;
	isCorrect: boolean;
	onSelect: () => void;
	onDoubleClick?: () => void;
}

export function OptionButton({
	index,
	label,
	explanation,
	isSelected,
	isFocused,
	isRevealed,
	isCorrect,
	onSelect,
	onDoubleClick,
}: OptionButtonProps) {
	const showCorrectMark = isRevealed && isCorrect;
	const showWrongMark = isRevealed && isSelected && !isCorrect;

	return (
		<button
			type="button"
			onClick={onSelect}
			onDoubleClick={onDoubleClick}
			disabled={isRevealed}
			className={cn(
				'group/opt flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-[border-color,background-color,box-shadow,opacity] duration-200',
				!isRevealed && 'hover:border-accent hover:bg-accent/5 active:scale-[0.98] cursor-pointer',
				!isRevealed && isSelected && 'border-accent bg-accent/10',
				!isRevealed && !isSelected && 'border-border bg-surface-alt',
				!isRevealed && isFocused && 'ring-2 ring-accent/50 border-accent/60',
				isRevealed && isCorrect && 'border-emerald-500/60 bg-emerald-500/10',
				isRevealed && showWrongMark && 'border-red-500/60 bg-red-500/10',
				isRevealed && !isCorrect && !isSelected && 'border-border/50 bg-surface-alt/50 opacity-60',
			)}
		>
			{/* Number badge — scale transition on reveal */}
			<motion.span
				animate={
					showCorrectMark || showWrongMark
						? { scale: [1, 1.25, 1] }
						: { scale: 1 }
				}
				transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
				className={cn(
					'flex h-6 w-6 shrink-0 items-center justify-center rounded font-tech text-xs font-medium transition-colors duration-200',
					!isRevealed && isSelected && 'bg-accent text-accent-fg',
					!isRevealed && !isSelected && 'bg-border/50 text-text-muted',
					showCorrectMark && 'bg-emerald-500 text-white',
					showWrongMark && 'bg-red-500 text-white',
					isRevealed && !isCorrect && !isSelected && 'bg-border/30 text-text-muted',
				)}
			>
				{showCorrectMark ? <Check className="h-3.5 w-3.5" /> : showWrongMark ? <X className="h-3.5 w-3.5" /> : index}
			</motion.span>

			<div className="flex-1 space-y-1">
				<span className="text-sm leading-relaxed">{label}</span>
				{isRevealed && explanation && (
					<p
						className={cn(
							'text-xs leading-relaxed',
							isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-text-muted',
						)}
					>
						{explanation}
					</p>
				)}
			</div>
		</button>
	);
}
