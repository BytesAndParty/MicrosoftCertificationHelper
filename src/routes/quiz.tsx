import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useHotkeys } from '@/lib/hotkeys';
import type { Shortcut } from '@/lib/hotkeys';
import { AnimatePresence, motion } from 'framer-motion';
import {
	Lightbulb,
	ExternalLink,
	ChevronRight,
	Brain,
	Trophy,
	RotateCcw,
	Home,
	MessageSquare,
	Heart,
} from 'lucide-react';
import { db } from '@/db/schema';
import type { QuizQuestion, QuizOption } from '@/types/quiz';
import { useQuizStore } from '@/store/quiz-store';
import { OptionButton } from '@/components/quiz/option-button';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';
import { cn, shuffle } from '@/lib/utils';
import { FloatingChat } from '@/components/chat/floating-chat';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

export const Route = createFileRoute('/quiz')({
	component: QuizPage,
});

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

/** Build a text context string for the AI chat from the current question */
function buildQuestionContext(question: QuizQuestion, displayedOptions: QuizOption[]): string {
	const optionLines = displayedOptions
		.map((o, i) => `  ${i + 1}. ${o.text}${o.isCorrect ? ' (correct)' : ''}`)
		.join('\n');
	return `Topic: ${question.topic}\nQuestion: ${question.prompt}\nOptions:\n${optionLines}\nHint: ${question.hint}\nExplanation: ${question.explanation}`;
}

function QuizPage() {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayedOptions, setDisplayedOptions] = useState<QuizOption[]>([]);
	const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
	const [isRevealed, setIsRevealed] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [showSummary, setShowSummary] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);

	// Session tracking
	const [sessionCorrect, setSessionCorrect] = useState(0);
	const [sessionTotal, setSessionTotal] = useState(0);

	// Auto-hide nav on scroll
	useEffect(() => {
		let lastY = 0;
		function onScroll() {
			const header = document.querySelector('header');
			if (!header) return;
			const y = window.scrollY;
			if (y > 60 && y > lastY) {
				header.style.transform = 'translateY(-100%)';
				header.style.transition = 'transform 0.3s ease';
			} else {
				header.style.transform = 'translateY(0)';
			}
			lastY = y;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			// Reset on unmount
			const header = document.querySelector('header');
			if (header) header.style.transform = '';
		};
	}, []);

	// Restore existing session or start a new one
	useEffect(() => {
		const saved = useQuizStore.getState().session;
		db.questions.toArray().then((allQs) => {
			if (saved && saved.questionIds.length > 0) {
				// Rebuild question array in the saved order
				const byId = new Map(allQs.map((q) => [q.id, q]));
				const restored = saved.questionIds.flatMap((id) => {
					const q = byId.get(id);
					return q ? [q] : [];
				});
				if (restored.length > 0) {
					setQuestions(restored);
					setCurrentIndex(saved.index);
					setSessionCorrect(saved.correct);
					setSessionTotal(saved.total);
					return;
				}
			}
			// No valid session — start fresh
			setQuestions(shuffle([...allQs]));
		});
	}, []);

	// Persist session snapshot on every meaningful change
	useEffect(() => {
		if (questions.length === 0) return;
		useQuizStore.setState({
			session: {
				questionIds: questions.map((q) => q.id),
				index: currentIndex,
				correct: sessionCorrect,
				total: sessionTotal,
			},
		});
	}, [questions, currentIndex, sessionCorrect, sessionTotal]);

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

	// Double-click: select + check in one go (for single-choice/true-false)
	const handleSelectAndCheck = useCallback(
		(id: string) => {
			if (isRevealed || !question) return;
			if (question.type === 'multi-choice') return; // multi-choice needs explicit check

			const newSelectedIds = new Set([id]);
			setSelectedIds(newSelectedIds);

			const correctOpts = displayedOptions.filter((o) => o.isCorrect);
			const isCorrect =
				correctOpts.length === newSelectedIds.size &&
				correctOpts.every((o) => newSelectedIds.has(o.id));

			useQuizStore.setState((prev) => ({
				answers: {
					...prev.answers,
					[question.id]: {
						selectedOptionIds: [...newSelectedIds],
						correct: isCorrect,
						timestamp: Date.now(),
					},
				},
			}));

			setSessionTotal((t) => t + 1);
			if (isCorrect) setSessionCorrect((c) => c + 1);
			setIsRevealed(true);
		},
		[isRevealed, question, displayedOptions],
	);

	const handleCheck = useCallback(() => {
		if (selectedIds.size === 0 || !question) return;

		const correctOpts = displayedOptions.filter((o) => o.isCorrect);
		const isCorrect =
			correctOpts.length === selectedIds.size &&
			correctOpts.every((o) => selectedIds.has(o.id));

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

		setSessionTotal((t) => t + 1);
		if (isCorrect) setSessionCorrect((c) => c + 1);
		setIsRevealed(true);
	}, [selectedIds, question, displayedOptions]);

	const handleNext = useCallback(() => {
		setCurrentIndex((i) => i + 1);
		// Scroll back to top for next question
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const [showLeaveDialog, setShowLeaveDialog] = useState(false);
	const confirmLeave = useCallback(() => {
		// Clear persisted session when leaving from summary (quiz completed)
		if (showSummary) useQuizStore.setState({ session: null });
		navigate({ to: '/' });
	}, [navigate, showSummary]);
	const requestLeave = useCallback(() => {
		// If on summary screen or no answers given yet, leave immediately
		if (showSummary || sessionTotal === 0) { confirmLeave(); return; }
		setShowLeaveDialog(true);
	}, [showSummary, sessionTotal, confirmLeave]);
	const isLast = currentIndex >= questions.length - 1;

	const handleCheckOrNext = useCallback(() => {
		if (showSummary) { requestLeave(); return; }
		if (!isRevealed && selectedIds.size > 0) handleCheck();
		else if (isRevealed) isLast ? setShowSummary(true) : handleNext();
	}, [showSummary, requestLeave, isRevealed, selectedIds.size, handleCheck, isLast, handleNext]);

	// Keyboard shortcuts — registered under 'quiz' scope (pushed by useHotkeyScope in root)
	const quizShortcuts = useMemo<Shortcut[]>(() => [
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
					if (!opt) return;
					// Single-choice / true-false: select + confirm in one go
					if (question?.type !== 'multi-choice') {
						handleSelectAndCheck(opt.id);
					} else {
						handleSelect(opt.id);
					}
					return;
				}
				handleCheckOrNext();
			},
		},
		{
			key: 'Enter',
			label: 'Check / Next',
			action: () => {
				// If focused on an option and nothing selected yet, select + confirm
				if (!isRevealed && focusedIndex >= 0 && selectedIds.size === 0) {
					const opt = displayedOptions[focusedIndex];
					if (opt) {
						if (question?.type !== 'multi-choice') {
							handleSelectAndCheck(opt.id);
						} else {
							handleSelect(opt.id);
						}
						return;
					}
				}
				handleCheckOrNext();
			},
		},
		{ key: 'Escape', label: 'Go home', action: () => requestLeave() },
	], [displayedOptions, isRevealed, focusedIndex, handleSelect, handleCheckOrNext, requestLeave]);

	useHotkeys('quiz', quizShortcuts);

	const isCorrectAnswer =
		isRevealed &&
		displayedOptions.filter((o) => o.isCorrect).every((o) => selectedIds.has(o.id)) &&
		displayedOptions.filter((o) => selectedIds.has(o.id)).every((o) => o.isCorrect);

	const progress = questions.length > 0 ? Math.round((currentIndex / questions.length) * 100) : 0;

	const isFavorite = useQuizStore((s) => question ? s.favorites.has(question.id) : false);

	// Context for the AI chat
	const questionContext = question ? buildQuestionContext(question, displayedOptions) : undefined;

	return (
		<>
			<div className="mx-auto flex min-h-0 flex-1 w-full max-w-3xl flex-col px-4 sm:px-6">
				{/* Quiz header — compact inline bar */}
				<div className="flex shrink-0 items-center justify-between gap-2 py-4">
					<div className="flex min-w-0 items-center gap-2 sm:gap-3">
						<div className="vt-quiz-hero flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim">
							<Brain className="h-4 w-4 text-accent" />
						</div>
						<span className="shrink-0 text-sm font-semibold">Quiz</span>
						{question && (
							<span className="truncate rounded-md bg-border/50 px-2 py-0.5 font-tech text-xs text-text-muted">
								{question.topic}
							</span>
						)}
					</div>
					<div className="flex shrink-0 items-center gap-2 sm:gap-3">
						{questions.length > 0 && (
							<span className="font-tech text-xs tabular-nums text-text-muted">
								{currentIndex + 1}/{questions.length}
							</span>
						)}
						<Button variant="ghost" size="sm" onClick={requestLeave} className="h-7 gap-1 px-2 text-xs">
							<Home className="h-3 w-3" />
							<span className="hidden sm:inline">Home</span>
						</Button>
					</div>
				</div>

				{/* Progress bar */}
				<div className="h-px shrink-0 bg-border">
					<div
						className="h-full bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
						style={{ width: `${progress}%` }}
					/>
				</div>

				{/* Content */}
				{showSummary ? (
					<div className="flex flex-1 flex-col items-center justify-center space-y-5 py-16">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
							className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10"
						>
							{sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 80 ? (
								<Trophy className="h-7 w-7 text-accent" />
							) : (
								<span className="font-tech text-xl font-bold text-accent">
									{sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%
								</span>
							)}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
							className="text-center"
						>
							<p className="font-semibold">
								{sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 80
									? 'Great job!'
									: sessionTotal > 0 && Math.round((sessionCorrect / sessionTotal) * 100) >= 50
										? 'Good effort'
										: 'Keep practicing'}
							</p>
							<Muted className="mt-1">
								{sessionCorrect} of {sessionTotal} correct
							</Muted>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
							className="flex gap-3 pt-2"
						>
							<Button variant="outline" size="sm" onClick={requestLeave} className="gap-1">
								<Home className="h-3 w-3" />
								Home
							</Button>
							<Button
								size="sm"
								className="gap-1"
								onClick={() => {
									useQuizStore.setState({ session: null });
									setShowSummary(false);
									setCurrentIndex(0);
									setSessionCorrect(0);
									setSessionTotal(0);
									db.questions.toArray().then((qs) => setQuestions(shuffle([...qs])));
								}}
							>
								<RotateCcw className="h-3 w-3" />
								Try again
							</Button>
						</motion.div>
					</div>
				) : !question ? (
					<div className="flex flex-1 items-center justify-center py-20">
						<Muted>Loading questions...</Muted>
					</div>
				) : (
					<>
						<div className="min-h-0 flex-1 space-y-5 overflow-y-auto py-6">
							{/* Multi-choice badge */}
							{question.type === 'multi-choice' && (
								<span className="inline-block rounded border border-accent/30 bg-accent-dim px-2 py-0.5 font-tech text-xs text-accent">
									Multiple correct answers
								</span>
							)}

							{/* Prompt */}
							<motion.p
								key={question.id}
								initial={{ opacity: 0, x: 8 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.25 }}
								className="text-lg font-medium leading-relaxed"
							>
								{question.prompt}
							</motion.p>

							{/* Hint + Favorite + Discuss with AI */}
							<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
								<button
									type="button"
									onClick={() => setShowHint((h) => !h)}
									className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
								>
									<Lightbulb className="h-3.5 w-3.5" />
									{showHint ? 'Hide hint' : 'Show hint'}
									<kbd className="ml-0.5 hidden rounded border border-border px-1 py-0.5 font-tech text-[10px] text-text-muted sm:inline">
										P
									</kbd>
								</button>
								<span className="hidden text-border sm:inline">|</span>
								<button
									type="button"
									onClick={() => useQuizStore.getState().toggleFavorite(question.id)}
									className={cn(
										'flex items-center gap-1.5 text-sm transition-colors',
										isFavorite
											? 'text-red-500 hover:text-red-400'
											: 'text-text-muted hover:text-red-500',
									)}
								>
									<motion.span
										key={isFavorite ? 'saved' : 'unsaved'}
										initial={{ scale: 0.5 }}
										animate={{ scale: 1 }}
										transition={{ type: 'spring', stiffness: 500, damping: 15 }}
										className="flex"
									>
										<Heart className={cn('h-3.5 w-3.5', isFavorite && 'fill-current')} />
									</motion.span>
									{isFavorite ? 'Saved' : 'Save'}
								</button>
								<span className="hidden text-border sm:inline">|</span>
								<button
									type="button"
									onClick={() => {
										const fab = document.querySelector<HTMLButtonElement>('.floating-chat-fab');
										if (fab) fab.click();
									}}
									className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
								>
									<MessageSquare className="h-3.5 w-3.5" />
									<span className="hidden sm:inline">Discuss with</span> AI
								</button>
							</div>

							<AnimatePresence>
								{showHint && (
									<motion.p
										key="hint"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-text-muted"
									>
										{question.hint}
									</motion.p>
								)}
							</AnimatePresence>

							{/* Options — staggered entrance per question */}
							<div className="-mx-1 space-y-3 px-1">
								{displayedOptions.map((opt, i) => (
									<motion.div
										key={`${question.id}-${opt.id}`}
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.25,
											delay: i * 0.05,
											ease: [0.25, 1, 0.5, 1],
										}}
									>
										<OptionButton
											index={i + 1}
											label={opt.text}
											explanation={opt.explanation}
											isSelected={selectedIds.has(opt.id)}
											isFocused={focusedIndex === i}
											isRevealed={isRevealed}
											isCorrect={opt.isCorrect}
											onSelect={() => handleSelect(opt.id)}
											onDoubleClick={() => handleSelectAndCheck(opt.id)}
										/>
									</motion.div>
								))}
							</div>

							{/* Explanation */}
							<AnimatePresence>
								{isRevealed && (
									<motion.div
										key="explanation"
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2 }}
										className={cn(
											'space-y-2 rounded-lg border p-4',
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
											{isCorrectAnswer ? '\u2713 Correct!' : '\u2717 Not quite'}
										</p>
										<p className="text-sm leading-relaxed text-text-muted">
											{question.explanation}
										</p>
										<a
											href={question.learnRef.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
										>
											{question.learnRef.title}
											<ExternalLink className="h-3 w-3" />
										</a>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* Footer — minimal */}
						<div className="flex shrink-0 items-center justify-between border-t border-border py-3">
							<button
								type="button"
								className="hidden items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent sm:flex"
								onClick={() => {
									window.dispatchEvent(new KeyboardEvent('keydown', { key: '?', shiftKey: true, bubbles: true }));
								}}
							>
								<kbd className="rounded border border-border px-1 py-0.5 font-tech text-[10px]">?</kbd>
								Shortcuts
							</button>

							{/* Action button — crossfade between states */}
							<AnimatePresence mode="wait">
								{!isRevealed ? (
									<motion.div
										key="check"
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.95 }}
										transition={{ duration: 0.15 }}
									>
										<Button
											size="sm"
											disabled={selectedIds.size === 0}
											onClick={handleCheck}
											className="h-8 bg-accent text-accent-fg hover:bg-accent/90"
										>
											Check Answer
										</Button>
									</motion.div>
								) : (
									<motion.div
										key="next"
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.95 }}
										transition={{ duration: 0.15 }}
									>
										<Button
											size="sm"
											onClick={isLast ? () => setShowSummary(true) : handleNext}
											className="h-8 gap-1 bg-accent text-accent-fg hover:bg-accent/90"
										>
											{isLast ? 'Finish' : 'Next'}
											<ChevronRight className="h-3.5 w-3.5" />
										</Button>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</>
				)}
			</div>

			{/* Floating AI chat widget */}
			<FloatingChat questionContext={questionContext} />

			<ConfirmDialog
				open={showLeaveDialog}
				title="Leave the quiz?"
				description="Your progress is saved automatically — you can pick up right where you left off anytime."
				hint={`${sessionCorrect}/${sessionTotal} answered correctly this session.`}
				confirmLabel="Leave quiz"
				cancelLabel="Keep going"
				onConfirm={confirmLeave}
				onCancel={() => setShowLeaveDialog(false)}
			/>
		</>
	);
}
