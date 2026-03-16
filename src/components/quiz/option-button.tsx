import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface OptionButtonProps {
	/** Display index (1-based) for keyboard hint */
	index: number;
	label: string;
	explanation?: string;
	isSelected: boolean;
	isRevealed: boolean;
	isCorrect: boolean;
	onSelect: () => void;
}

export function OptionButton({
	index,
	label,
	explanation,
	isSelected,
	isRevealed,
	isCorrect,
	onSelect,
}: OptionButtonProps) {
	const showCorrectMark = isRevealed && isCorrect;
	const showWrongMark = isRevealed && isSelected && !isCorrect;

	return (
		<button
			type="button"
			onClick={onSelect}
			disabled={isRevealed}
			className={cn(
				'group/opt flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-all duration-200',
				!isRevealed && 'hover:border-accent hover:bg-accent/5 cursor-pointer',
				!isRevealed && isSelected && 'border-accent bg-accent/10',
				!isRevealed && !isSelected && 'border-border bg-surface-alt',
				isRevealed && isCorrect && 'border-emerald-500/60 bg-emerald-500/10',
				isRevealed && showWrongMark && 'border-red-500/60 bg-red-500/10',
				isRevealed && !isCorrect && !isSelected && 'border-border/50 bg-surface-alt/50 opacity-60',
			)}
		>
			{/* Number badge */}
			<span
				className={cn(
					'flex h-6 w-6 shrink-0 items-center justify-center rounded font-tech text-xs font-medium',
					!isRevealed && isSelected && 'bg-accent text-accent-fg',
					!isRevealed && !isSelected && 'bg-border/50 text-text-muted',
					showCorrectMark && 'bg-emerald-500 text-white',
					showWrongMark && 'bg-red-500 text-white',
					isRevealed && !isCorrect && !isSelected && 'bg-border/30 text-text-muted',
				)}
			>
				{showCorrectMark ? <Check className="h-3.5 w-3.5" /> : showWrongMark ? <X className="h-3.5 w-3.5" /> : index}
			</span>

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
