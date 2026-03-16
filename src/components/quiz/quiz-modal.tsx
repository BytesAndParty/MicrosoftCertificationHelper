import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Lightbulb, ExternalLink, ChevronRight, Brain } from 'lucide-react';
import { useClickAway } from '@uidotdev/usehooks';
import { db } from '@/db/schema';
import type { QuizQuestion, QuizOption } from '@/types/quiz';
import { OptionButton } from '@/components/quiz/option-button';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';
import { cn, shuffle } from '@/lib/utils';

interface QuizModalProps {
	onClose: () => void;
}

function pickDisplayOptions(question: QuizQuestion): QuizOption[] {
	if (question.type === 'true-false') return question.options;
	if (question.type === 'multi-choice') {
		const correct = question.options.filter((o) => o.isCorrect);
		const wrong = shuffle(question.options.filter((o) => !o.isCorrect));
		return shuffle([...correct, ...wrong.slice(0, Math.max(2, 4 - correct.length))]);
	}
	const correct = question.options.filter((o) => o.isCorrect);
	const wrong = shuffle(question.options.filter((o) => !o.isCorrect));
	return shuffle([correct[0]!, ...wrong.slice(0, 3)]);
}

export function QuizModal({ onClose }: QuizModalProps) {
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayedOptions, setDisplayedOptions] = useState<QuizOption[]>([]);
	const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
	const [isRevealed, setIsRevealed] = useState(false);
	const [showHint, setShowHint] = useState(false);

	const ref = useClickAway<HTMLDivElement>(onClose);

	useEffect(() => {
		db.questions.toArray().then((qs) => setQuestions(shuffle([...qs])));
	}, []);

	const question = questions[currentIndex];

	useEffect(() => {
		if (!question) return;
		setDisplayedOptions(pickDisplayOptions(question));
		setSelectedIds(new Set());
		setIsRevealed(false);
		setShowHint(false);
	}, [question?.id]);

	const handleSelect = useCallback(
		(id: string) => {
			if (isRevealed) return;
			if (question?.type === 'multi-choice') {
				setSelectedIds((prev) => {
					const next = new Set(prev);
					if (next.has(id)) next.delete(id);
					else next.add(id);
					return next;
				});
			} else {
				setSelectedIds(new Set([id]));
			}
		},
		[isRevealed, question?.type],
	);

	const handleCheck = useCallback(() => {
		if (selectedIds.size === 0) return;
		setIsRevealed(true);
	}, [selectedIds.size]);

	const handleNext = useCallback(() => {
		setCurrentIndex((i) => i + 1);
	}, []);

	const isLast = currentIndex >= questions.length - 1;

	// Keyboard shortcuts
	useEffect(() => {
		function handler(e: KeyboardEvent) {
			const tag = (e.target as HTMLElement)?.tagName;
			if (tag === 'INPUT' || tag === 'TEXTAREA') return;

			const num = parseInt(e.key, 10);
			if (num >= 1 && num <= 4) {
				const opt = displayedOptions[num - 1];
				if (opt && !isRevealed) {
					e.preventDefault();
					handleSelect(opt.id);
				}
				return;
			}

			if (e.key === 'p' || e.key === 'P') {
				e.preventDefault();
				setShowHint((h) => !h);
				return;
			}

			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				if (!isRevealed && selectedIds.size > 0) handleCheck();
				else if (isRevealed) isLast ? onClose() : handleNext();
				return;
			}

			if (e.key === 'Escape') {
				e.preventDefault();
				onClose();
			}
		}

		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [displayedOptions, isRevealed, selectedIds, handleSelect, handleCheck, handleNext, onClose, isLast]);

	const isCorrectAnswer =
		isRevealed &&
		displayedOptions.filter((o) => o.isCorrect).every((o) => selectedIds.has(o.id)) &&
		displayedOptions.filter((o) => selectedIds.has(o.id)).every((o) => o.isCorrect);

	const progress = questions.length > 0 ? Math.round((currentIndex / questions.length) * 100) : 0;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 p-6 backdrop-blur-sm">
			<div
				ref={ref}
				className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-2xl"
			>
				{/* Header */}
				<div className="flex shrink-0 items-center justify-between border-b border-border px-8 py-5">
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-dim">
							<Brain className="h-5 w-5 text-accent" />
						</div>
						<span className="text-base font-semibold">Quiz</span>
						{question && (
							<span className="rounded-md bg-border/50 px-2.5 py-1 font-tech text-xs text-text-muted">
								{question.topic}
							</span>
						)}
					</div>
					<div className="flex items-center gap-5">
						{questions.length > 0 && (
							<span className="font-tech text-sm tabular-nums text-text-muted">
								{currentIndex + 1} / {questions.length}
							</span>
						)}
						<Button variant="ghost" size="icon" onClick={onClose}>
							<X className="h-4 w-4" />
						</Button>
					</div>
				</div>

				{/* Progress bar */}
				<div className="h-0.5 shrink-0 bg-border">
					<div
						className="h-full bg-accent transition-all duration-500"
						style={{ width: `${progress}%` }}
					/>
				</div>

				{/* Content */}
				{!question ? (
					<div className="flex flex-1 items-center justify-center py-20">
						<Muted>Loading questions…</Muted>
					</div>
				) : (
					<>
						<div className="flex-1 space-y-7 overflow-y-auto px-8 py-8">
							{/* Multi-choice badge */}
							{question.type === 'multi-choice' && (
								<span className="inline-block rounded border border-accent/30 bg-accent-dim px-2.5 py-1 font-tech text-xs text-accent">
									Multiple correct answers
								</span>
							)}

							{/* Prompt */}
							<p className="text-xl font-medium leading-relaxed">{question.prompt}</p>

							{/* Hint */}
							<div>
								<button
									type="button"
									onClick={() => setShowHint((h) => !h)}
									className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
								>
									<Lightbulb className="h-4 w-4" />
									{showHint ? 'Hide hint' : 'Show hint'}
									<kbd className="ml-1 rounded border border-border px-1.5 py-0.5 font-tech text-xs text-text-muted">
										P
									</kbd>
								</button>
								<AnimatePresence>
									{showHint && (
										<motion.p
											key="hint"
											initial={{ opacity: 0, height: 0, marginTop: 0 }}
											animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
											exit={{ opacity: 0, height: 0, marginTop: 0 }}
											className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-text-muted"
										>
											{question.hint}
										</motion.p>
									)}
								</AnimatePresence>
							</div>

							{/* Options */}
							<div className="space-y-3">
								{displayedOptions.map((opt, i) => (
									<OptionButton
										key={opt.id}
										index={i + 1}
										label={opt.text}
										explanation={opt.explanation}
										isSelected={selectedIds.has(opt.id)}
										isRevealed={isRevealed}
										isCorrect={opt.isCorrect}
										onSelect={() => handleSelect(opt.id)}
									/>
								))}
							</div>

							{/* Explanation */}
							<AnimatePresence>
								{isRevealed && (
									<motion.div
										key="explanation"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.25 }}
										className={cn(
											'space-y-3 rounded-xl border p-5',
											isCorrectAnswer
												? 'border-emerald-500/40 bg-emerald-500/5'
												: 'border-red-500/40 bg-red-500/5',
										)}
									>
										<p
											className={cn(
												'text-sm font-semibold',
												isCorrectAnswer
													? 'text-emerald-600 dark:text-emerald-400'
													: 'text-red-600 dark:text-red-400',
											)}
										>
											{isCorrectAnswer ? '✓ Correct!' : '✗ Not quite'}
										</p>
										<p className="text-sm leading-relaxed text-text-muted">
											{question.explanation}
										</p>
										<a
											href={question.learnRef.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
										>
											{question.learnRef.title}
											<ExternalLink className="h-3 w-3" />
										</a>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Footer */}
						<div className="flex shrink-0 items-center justify-between border-t border-border px-8 py-5">
							{/* Keyboard hints */}
							<div className="flex items-center gap-3 text-xs text-text-muted">
								<span className="flex items-center gap-1">
									<kbd className="rounded border border-border px-1.5 py-0.5 font-tech">1–4</kbd>
									select
								</span>
								<span className="flex items-center gap-1">
									<kbd className="rounded border border-border px-1.5 py-0.5 font-tech">Enter</kbd>
									{isRevealed ? 'next' : 'check'}
								</span>
							</div>

							{/* Action button */}
							{!isRevealed ? (
								<Button
									size="sm"
									disabled={selectedIds.size === 0}
									onClick={handleCheck}
									className="bg-accent text-accent-fg hover:bg-accent/90"
								>
									Check Answer
								</Button>
							) : (
								<Button
									size="sm"
									onClick={isLast ? onClose : handleNext}
									className="gap-1.5 bg-accent text-accent-fg hover:bg-accent/90"
								>
									{isLast ? 'Finish' : 'Next question'}
									<ChevronRight className="h-3.5 w-3.5" />
								</Button>
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
