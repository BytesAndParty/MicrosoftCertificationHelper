import { useState, useEffect, useCallback, useMemo } from 'react';
import { X, Lightbulb, ExternalLink, ChevronRight, Brain, Trophy, RotateCcw } from 'lucide-react';
import { useClickAway } from '@uidotdev/usehooks';
import { db } from '@/db/schema';
import type { QuizQuestion, QuizOption } from '@/types/quiz';
import { useQuizStore } from '@/store/quiz-store';
import { OptionButton } from '@/components/quiz/option-button';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';
import { cn, shuffle } from '@/lib/utils';
import { useHotkeys } from '@/lib/hotkeys';
import type { Shortcut } from '@/lib/hotkeys';

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
	const [showSummary, setShowSummary] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);

	// Session tracking for results
	const [sessionCorrect, setSessionCorrect] = useState(0);
	const [sessionTotal, setSessionTotal] = useState(0);

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
		setFocusedIndex(-1);
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
		if (selectedIds.size === 0 || !question) return;

		const correctOpts = displayedOptions.filter((o) => o.isCorrect);
		const isCorrect =
			correctOpts.length === selectedIds.size &&
			correctOpts.every((o) => selectedIds.has(o.id));

		// Persist to Zustand store
		useQuizStore.setState((prev) => ({
			answers: {
				...prev.answers,
				[question.id]: {
					selectedOptionIds: [...selectedIds],
					correct: isCorrect,
					timestamp: Date.now(),
				},
			},
		}));

		// Track session stats
		setSessionTotal((t) => t + 1);
		if (isCorrect) setSessionCorrect((c) => c + 1);

		setIsRevealed(true);
	}, [selectedIds, question, displayedOptions]);

	const handleNext = useCallback(() => {
		setCurrentIndex((i) => i + 1);
	}, []);

	const isLast = currentIndex >= questions.length - 1;

	const handleCheckOrNext = useCallback(() => {
		if (showSummary) { onClose(); return; }
		if (!isRevealed && selectedIds.size > 0) handleCheck();
		else if (isRevealed) isLast ? setShowSummary(true) : handleNext();
	}, [showSummary, onClose, isRevealed, selectedIds.size, handleCheck, isLast, handleNext]);

	// Keyboard shortcuts — pushed as 'quiz-modal' scope (sits above 'quiz' in the stack)
	const modalShortcuts = useMemo<Shortcut[]>(() => [
		{
			key: 'arrowdown',
			label: 'Next option',
			action: () => {
				if (isRevealed || displayedOptions.length === 0) return;
				setFocusedIndex((prev) => (prev < displayedOptions.length - 1 ? prev + 1 : 0));
			},
		},
		{
			key: 'arrowup',
			label: 'Previous option',
			action: () => {
				if (isRevealed || displayedOptions.length === 0) return;
				setFocusedIndex((prev) => (prev > 0 ? prev - 1 : displayedOptions.length - 1));
			},
		},
		{
			key: '1-4',
			label: 'Select answer',
			action: (key) => {
				if (isRevealed) return;
				const num = parseInt(key, 10);
				const opt = displayedOptions[num - 1];
				if (opt) {
					setFocusedIndex(num - 1);
					handleSelect(opt.id);
				}
			},
		},
		{ key: 'p', label: 'Toggle hint', action: () => setShowHint((h) => !h) },
		{
			key: 'Space',
			label: 'Select / Confirm',
			action: () => {
				if (!isRevealed && focusedIndex >= 0) {
					const opt = displayedOptions[focusedIndex];
					if (opt) handleSelect(opt.id);
					return;
				}
				handleCheckOrNext();
			},
		},
		{ key: 'Enter', label: 'Check / Next', action: () => handleCheckOrNext() },
		{ key: 'Escape', label: 'Close', action: () => onClose() },
	], [displayedOptions, isRevealed, focusedIndex, handleSelect, handleCheckOrNext, onClose]);

	useHotkeys('quiz-modal', modalShortcuts, { push: true });

	const isCorrectAnswer =
		isRevealed &&
		displayedOptions.filter((o) => o.isCorrect).every((o) => selectedIds.has(o.id)) &&
		displayedOptions.filter((o) => selectedIds.has(o.id)).every((o) => o.isCorrect);

	const progress = questions.length > 0 ? Math.round((currentIndex / questions.length) * 100) : 0;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 p-6 backdrop-blur-sm transition-opacity duration-300 starting:opacity-0">
			<div
				ref={ref}
				className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-2xl transition-[opacity,transform] duration-300 starting:scale-95 starting:opacity-0"
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
				{showSummary ? (
					<div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 py-16">
						<div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
							{sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 80 ? (
								<Trophy className="h-8 w-8 text-accent" />
							) : (
								<span className="font-tech text-2xl font-bold text-accent">
									{sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%
								</span>
							)}
						</div>
						<div className="text-center">
							<p className="text-lg font-semibold">
								{sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 80
									? 'Great job!'
									: sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 50
										? 'Good effort'
										: 'Keep practicing'}
							</p>
							<Muted className="mt-1">
								{sessionCorrect} of {sessionTotal} correct
							</Muted>
						</div>
						<div className="flex gap-3 pt-2">
							<Button variant="outline" size="sm" onClick={onClose}>
								Close
							</Button>
							<Button
								size="sm"
								onClick={() => {
									setShowSummary(false);
									setCurrentIndex(0);
									setSessionCorrect(0);
									setSessionTotal(0);
									db.questions.toArray().then((qs) => setQuestions(shuffle([...qs])));
								}}
							>
								<RotateCcw className="h-3.5 w-3.5" />
								Try again
							</Button>
						</div>
					</div>
				) : !question ? (
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

							{/* Hint — CSS grid trick for height:auto animation */}
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
								<div
									className={cn(
										'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
										showHint ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
									)}
								>
									<div className="overflow-hidden">
										<p className="mt-3 border-l-2 border-accent pl-4 text-sm leading-relaxed text-text-muted">
											{question.hint}
										</p>
									</div>
								</div>
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
										isFocused={focusedIndex === i}
										isRevealed={isRevealed}
										isCorrect={opt.isCorrect}
										onSelect={() => handleSelect(opt.id)}
									/>
								))}
							</div>

							{/* Explanation — @starting-style entry via Tailwind starting: variant */}
							{isRevealed && (
								<div
									className={cn(
										'space-y-3 rounded-xl border p-5 transition-[opacity,transform] duration-250 starting:translate-y-2.5 starting:opacity-0',
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
								</div>
							)}
						</div>

						{/* Footer */}
						<div className="flex shrink-0 items-center justify-between border-t border-border px-8 py-5">
							{/* Keyboard hints */}
							<div className="flex items-center gap-3 text-xs text-text-muted">
								<span className="flex items-center gap-1">
									<kbd className="rounded border border-border px-1.5 py-0.5 font-tech">↑↓</kbd>
									navigate
								</span>
								<span className="flex items-center gap-1">
									<kbd className="rounded border border-border px-1.5 py-0.5 font-tech">Space</kbd>
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
									onClick={isLast ? () => setShowSummary(true) : handleNext}
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
