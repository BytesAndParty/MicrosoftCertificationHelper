import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { cn } from '../../lib/utils';
import { useStudyStore } from '../../lib/study/store';
import {
	buildOptionPools,
	createRuntimeQuestion as buildRuntimeQuestion,
	getQuestionType,
	localizeQuestionData,
	shuffle,
} from '../../lib/study/quiz';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface BaseQuestion {
	id: string;
	topic: string;
	prompt: string;
	promptDe?: string;
	hint?: string;
	hintDe?: string;
	explanation?: string;
	explanationDe?: string;
	options?: string[];
	optionsDe?: string[];
	optionExplanations?: string[] | Record<string, string>;
	optionExplanationsDe?: string[] | Record<string, string>;
	answerIndex?: number;
	correctAnswer?: string;
	wrongOptions?: string[];
	wrongOptionsDe?: string[];
	learnRef?: { url: string; title?: string };
	learnRefDe?: { url: string; title?: string };
	type?: string;
	displayOptionCount?: number;
	[key: string]: unknown;
}

interface RuntimeQuestion extends BaseQuestion {
	typeLabel: string;
	correctIndex: number;
	correctText: string;
	optionExplanationsByOption: Record<string, string>;
	answerPoolCount: number;
}

interface QuizSession {
	category: string;
	effectiveTopic: string;
	total: number;
	answered: number;
	correct: number;
	byTopic: Record<string, { total: number; correct: number }>;
	completed: boolean;
}

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Quiz with instant feedback',
		showHint: 'Show hint',
		skip: 'Skip',
		nextQuestion: 'Next question',
		restart: 'Start new quiz',
		focusAll: 'All topics',
		focusWeakest: 'Weakest topic',
		focusWeakestWith: (topic: string, acc: number) => `Weakest topic (${topic}, ${acc}%)`,
		category: 'Quiz category',
		progress: (answered: number, correct: number, pool: string) =>
			`Answered: ${answered} | Correct: ${correct}${pool}`,
		pool: (count: number) => ` | Pool: ${count} options`,
		feedbackCorrect: 'Correct.',
		feedbackWrong: 'Not correct.',
		summaryTitle: 'Quiz overview',
		summaryMeta: (answered: number, correct: number, accuracy: number) =>
			`Completed ${answered} questions | Correct ${correct} | Accuracy ${accuracy}%`,
		summaryTopic: (topic: string, correct: number, total: number, accuracy: number) =>
			`${topic}: ${correct}/${total} correct (${accuracy}%)`,
		learnMore: 'Learn more:',
		bookmarkSave: 'Save question',
		discuss: 'AI chat',
		pickTitle: 'Choose your quiz',
		pickAll: 'All topics',
		pickWeakest: 'Weakest topic',
		pickStart: 'Start quiz',
		shortcuts: '1-4 answer | H hint | S skip | N/Enter next | B bookmark',
		trueLabel: 'True',
		falseLabel: 'False',
		typeMultipleChoice: 'Multiple choice',
		typeTrueFalse: 'True / False',
	},
	de: {
		title: 'Quiz mit Sofort-Feedback',
		showHint: 'Hinweis anzeigen',
		skip: 'Überspringen',
		nextQuestion: 'Nächste Frage',
		restart: 'Neues Quiz starten',
		focusAll: 'Alle Themen',
		focusWeakest: 'Schwächstes Thema',
		focusWeakestWith: (topic: string, acc: number) => `Schwächstes Thema (${topic}, ${acc}%)`,
		category: 'Quiz-Kategorie',
		progress: (answered: number, correct: number, pool: string) =>
			`Beantwortet: ${answered} | Korrekt: ${correct}${pool}`,
		pool: (count: number) => ` | Pool: ${count} Optionen`,
		feedbackCorrect: 'Korrekt.',
		feedbackWrong: 'Nicht korrekt.',
		summaryTitle: 'Quiz-Übersicht',
		summaryMeta: (answered: number, correct: number, accuracy: number) =>
			`${answered} Fragen beantwortet | Korrekt ${correct} | Genauigkeit ${accuracy}%`,
		summaryTopic: (topic: string, correct: number, total: number, accuracy: number) =>
			`${topic}: ${correct}/${total} korrekt (${accuracy}%)`,
		learnMore: 'Mehr erfahren:',
		bookmarkSave: 'Frage speichern',
		discuss: 'KI-Chat',
		pickTitle: 'Wähle dein Quiz',
		pickAll: 'Alle Themen',
		pickWeakest: 'Schwächstes Thema',
		pickStart: 'Quiz starten',
		shortcuts: '1-4 Antwort | H Hinweis | S Überspringen | N/Enter Weiter | B Merken',
		trueLabel: 'Wahr',
		falseLabel: 'Falsch',
		typeMultipleChoice: 'Multiple Choice',
		typeTrueFalse: 'Wahr / Falsch',
	},
} as const;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function getTypeLabel(type: string, lang: string) {
	const t = i18n[lang as 'en' | 'de'] || i18n.en;
	return type === 'true-false' ? t.typeTrueFalse : t.typeMultipleChoice;
}

function buildOptionRationaleMap(questions: BaseQuestion[], language: string) {
	const map: Record<string, string> = {};
	questions.forEach((question) => {
		const localized = localizeQuestionData(question, language);
		const options = Array.isArray(localized.options) ? localized.options : [];
		const explanations = localized.optionExplanations;
		if (Array.isArray(explanations)) {
			explanations.forEach((explanation: string, index: number) => {
				const text = options[index];
				if (text && typeof explanation === 'string' && explanation.trim()) {
					map[text] = explanation.trim();
				}
			});
		} else if (explanations && typeof explanations === 'object') {
			Object.entries(explanations).forEach(([text, explanation]) => {
				if (typeof explanation === 'string' && explanation.trim()) {
					map[text] = explanation.trim();
				}
			});
		}
		const correctOption = options[localized.answerIndex];
		if (correctOption && typeof localized.explanation === 'string' && localized.explanation.trim() && !map[correctOption]) {
			map[correctOption] = localized.explanation.trim();
		}
	});
	return map;
}

function buildDisplayedOptionExplanationMap(
	localizedQuestion: any,
	runtimeOptions: string[]
): Record<string, string> {
	const map: Record<string, string> = {};
	if (!localizedQuestion || !Array.isArray(runtimeOptions)) return map;
	const { optionExplanations } = localizedQuestion;
	const baseOptions = Array.isArray(localizedQuestion.options) ? localizedQuestion.options : [];

	if (Array.isArray(optionExplanations)) {
		optionExplanations.forEach((explanation: string, index: number) => {
			const optionText = baseOptions[index];
			if (typeof explanation === 'string' && explanation.trim() && optionText && runtimeOptions.includes(optionText)) {
				map[optionText] = explanation.trim();
			}
		});
		return map;
	}

	if (optionExplanations && typeof optionExplanations === 'object') {
		Object.entries(optionExplanations).forEach(([optionText, explanation]) => {
			if (runtimeOptions.includes(optionText) && typeof explanation === 'string' && (explanation as string).trim()) {
				map[optionText] = (explanation as string).trim();
			}
		});
	}

	return map;
}

function createRuntimeQuestion(
	baseQuestion: BaseQuestion,
	lang: string,
	optionPools: ReturnType<typeof buildOptionPools> & { de?: any; en?: any }
): RuntimeQuestion {
	const runtimeQuestion = buildRuntimeQuestion(baseQuestion, {
		language: lang,
		optionPoolsByLanguage: optionPools,
		getTypeLabel: (type: string) => getTypeLabel(type, lang),
		trueLabel: lang === 'de' ? 'Wahr' : 'True',
		falseLabel: lang === 'de' ? 'Falsch' : 'False',
	});
	const localizedBase = localizeQuestionData(baseQuestion, lang);
	runtimeQuestion.optionExplanationsByOption = {
		...(runtimeQuestion.optionExplanationsByOption || {}),
		...buildDisplayedOptionExplanationMap(localizedBase, runtimeQuestion.options),
	};
	return runtimeQuestion as RuntimeQuestion;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface QuizDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	forcedQuestionId?: string | null;
}

export function QuizDialog({ open, onOpenChange, forcedQuestionId }: QuizDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const quizStats = useStudyStore((s) => s.quiz);
	const savedQuestions = useStudyStore((s) => s.savedQuestions);
	const settings = useStudyStore((s) => s.settings);
	const recordQuizAnswer = useStudyStore((s) => s.recordQuizAnswer);
	const toggleBookmarkAction = useStudyStore((s) => s.toggleBookmark);

	// Loaded question pool
	const [questions, setQuestions] = useState<BaseQuestion[]>([]);
	const [loading, setLoading] = useState(false);
	const optionPoolsRef = useRef<Record<string, any>>({});
	const optionRationaleRef = useRef<Record<string, Record<string, string>>>({ en: {}, de: {} });
	const questionByIdRef = useRef<Map<string, BaseQuestion>>(new Map());

	// Quiz session state (local)
	const [phase, setPhase] = useState<'pick' | 'quiz'>('pick');
	const [activeQuestion, setActiveQuestion] = useState<RuntimeQuestion | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [locked, setLocked] = useState(false);
	const [hintShown, setHintShown] = useState(false);
	const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
	const [session, setSession] = useState<QuizSession | null>(null);
	const [showSummary, setShowSummary] = useState(false);
	const [category, setCategory] = useState('all');

	const deckRef = useRef<BaseQuestion[]>([]);

	// Lazy-load questions
	useEffect(() => {
		if (!open || questions.length) return;
		setLoading(true);
		import('../../data/quiz-questions.js')
			.then((mod) => {
				const qs: BaseQuestion[] = Array.isArray(mod.quizQuestions) ? mod.quizQuestions : [];
				setQuestions(qs);
				const byId = new Map<string, BaseQuestion>();
				qs.forEach((q) => byId.set(q.id, q));
				questionByIdRef.current = byId;
				optionPoolsRef.current = {
					en: buildOptionPools(qs, 'en'),
					de: buildOptionPools(qs, 'de'),
				};
				optionRationaleRef.current = {
					en: buildOptionRationaleMap(qs, 'en'),
					de: buildOptionRationaleMap(qs, 'de'),
				};
			})
			.catch(() => setQuestions([]))
			.finally(() => setLoading(false));
	}, [open, questions.length]);

	// Topic list for category filter
	const topics = useMemo(() => {
		const set = new Set<string>();
		questions.forEach((q) => { if (q.topic) set.add(q.topic); });
		return [...set].sort((a, b) => a.localeCompare(b, lang === 'de' ? 'de' : 'en'));
	}, [questions, lang]);

	// Weakest topic
	const weakestTopic = useMemo(() => {
		const byTopic = quizStats?.byTopic || {};
		let worst: { topic: string; accuracy: number; total: number } | null = null;
		Object.entries(byTopic).forEach(([topic, v]: [string, any]) => {
			const total = Number(v.total) || 0;
			if (total < 1) return;
			const correct = Number(v.correct) || 0;
			const accuracy = Math.round((correct / total) * 100);
			if (!worst || accuracy < worst.accuracy || (accuracy === worst.accuracy && total > worst.total)) {
				worst = { topic, accuracy, total };
			}
		});
		return worst;
	}, [quizStats?.byTopic]);

	// Get scoped questions based on category
	const getScopedQuestions = useCallback((cat: string) => {
		if (cat === 'weakest') {
			const wt = weakestTopic?.topic;
			return wt ? questions.filter((q) => q.topic === wt) : [...questions];
		}
		if (cat !== 'all') {
			const filtered = questions.filter((q) => q.topic === cat);
			return filtered.length ? filtered : [...questions];
		}
		return [...questions];
	}, [questions, weakestTopic]);

	const startSession = useCallback((cat: string) => {
		const scoped = getScopedQuestions(cat);
		deckRef.current = shuffle([...scoped]);
		const effectiveTopic = cat === 'all' ? '' : cat === 'weakest' ? (weakestTopic?.topic || '') : cat;
		setSession({
			category: cat,
			effectiveTopic,
			total: scoped.length,
			answered: 0,
			correct: 0,
			byTopic: {},
			completed: false,
		});
		setShowSummary(false);
	}, [getScopedQuestions, weakestTopic]);

	const showNextQuestion = useCallback((forceId?: string | null) => {
		if (!questions.length) return;

		let base: BaseQuestion | null = null;
		if (forceId && questionByIdRef.current.has(forceId)) {
			base = questionByIdRef.current.get(forceId)!;
			setSession(null);
		} else {
			// Start new session if needed
			if (!session || session.completed) {
				startSession(category);
			}
			if (!deckRef.current.length) {
				deckRef.current = shuffle([...getScopedQuestions(category)]);
			}
			if (!deckRef.current.length) return;
			base = deckRef.current.pop()!;
		}

		if (!base) return;
		const rq = createRuntimeQuestion(base, lang, optionPoolsRef.current);
		setActiveQuestion(rq);
		setSelectedIndex(null);
		setLocked(false);
		setHintShown(false);
		setFeedback(null);
		setShowSummary(false);
	}, [questions, session, category, lang, startSession, getScopedQuestions]);

	// Initialize on open
	useEffect(() => {
		if (!open || !questions.length) return;
		if (forcedQuestionId) {
			setPhase('quiz');
			showNextQuestion(forcedQuestionId);
		} else {
			setPhase('pick');
			setShowSummary(false);
			setActiveQuestion(null);
		}
	}, [open, questions.length]); // eslint-disable-line react-hooks/exhaustive-deps

	// Start quiz from topic picker
	const handleStartQuiz = useCallback((cat: string) => {
		setCategory(cat);
		startSession(cat);
		setPhase('quiz');
		const scoped = getScopedQuestions(cat);
		deckRef.current = shuffle([...scoped]);
		if (deckRef.current.length) {
			const base = deckRef.current.pop()!;
			const rq = createRuntimeQuestion(base, lang, optionPoolsRef.current);
			setActiveQuestion(rq);
			setSelectedIndex(null);
			setLocked(false);
			setHintShown(false);
			setFeedback(null);
			setShowSummary(false);
		}
	}, [startSession, getScopedQuestions, lang]);

	// Handle answer submission
	const submitAnswer = useCallback((optIdx: number) => {
		if (locked || !activeQuestion) return;
		setLocked(true);
		setSelectedIndex(optIdx);

		const isCorrect = optIdx === activeQuestion.correctIndex;

		// Record in Zustand store (updates quiz stats, wrong journal, daily history)
		recordQuizAnswer(activeQuestion.id, activeQuestion.topic, isCorrect);

		setFeedback({
			correct: isCorrect,
			text: `${isCorrect ? t.feedbackCorrect : t.feedbackWrong} ${activeQuestion.explanation || ''}`,
		});

		// Update local session
		setSession((prev) => {
			if (!prev || prev.completed) return prev;
			const topicStats = prev.byTopic[activeQuestion.topic] || { total: 0, correct: 0 };
			topicStats.total += 1;
			if (isCorrect) topicStats.correct += 1;
			const updated = {
				...prev,
				answered: prev.answered + 1,
				correct: prev.correct + (isCorrect ? 1 : 0),
				byTopic: { ...prev.byTopic, [activeQuestion.topic]: topicStats },
			};
			// Check completion
			if (updated.answered >= updated.total && deckRef.current.length === 0) {
				updated.completed = true;
			}
			return updated;
		});
	}, [locked, activeQuestion, t, recordQuizAnswer]);

	// Handle next question / completion
	const handleNext = useCallback(() => {
		if (session?.completed && deckRef.current.length === 0 && !showSummary) {
			setShowSummary(true);
			setActiveQuestion(null);
			return;
		}
		if (showSummary) {
			// Go back to topic picker
			setPhase('pick');
			setShowSummary(false);
			setActiveQuestion(null);
			return;
		}
		showNextQuestion();
	}, [session, showSummary, category, startSession, showNextQuestion, getScopedQuestions, lang]);

	// Bookmark
	const isSaved = activeQuestion ? Boolean(savedQuestions?.[activeQuestion.id]) : false;
	const toggleBookmark = useCallback(() => {
		if (!activeQuestion) return;
		toggleBookmarkAction(activeQuestion.id);
	}, [activeQuestion, toggleBookmarkAction]);

	// AI chat
	const handleDiscuss = useCallback(() => {
		if (!activeQuestion) return;
		window.dispatchEvent(new CustomEvent('quiz-discuss', {
			detail: { question: activeQuestion, language: lang },
		}));
	}, [activeQuestion, lang]);

	// Category change
	const handleCategoryChange = useCallback((value: string) => {
		setCategory(value);
		startSession(value);
		const scoped = getScopedQuestions(value);
		deckRef.current = shuffle([...scoped]);
		if (deckRef.current.length) {
			const base = deckRef.current.pop()!;
			const rq = createRuntimeQuestion(base, lang, optionPoolsRef.current);
			setActiveQuestion(rq);
			setSelectedIndex(null);
			setLocked(false);
			setHintShown(false);
			setFeedback(null);
			setShowSummary(false);
		}
	}, [startSession, getScopedQuestions, lang]);

	// Option explanation builder
	const getOptionReason = useCallback((optIdx: number) => {
		if (!activeQuestion) return '';
		const optionText = activeQuestion.options[optIdx] || '';
		const explicitReason = activeQuestion.optionExplanationsByOption?.[optionText];
		const globalReason = optionRationaleRef.current[lang]?.[optionText];
		return explicitReason || globalReason || activeQuestion.explanation || '';
	}, [activeQuestion, lang]);

	// Derived progress text
	const progressText = useMemo(() => {
		if (!activeQuestion) return '';
		const answered = session ? session.answered : (quizStats?.answered || 0);
		const correct = session ? session.correct : (quizStats?.correct || 0);
		const poolHint = activeQuestion.type === 'single-choice'
			? t.pool(activeQuestion.answerPoolCount)
			: '';
		return t.progress(answered, correct, poolHint);
	}, [activeQuestion, session, quizStats, t]);

	// Summary data
	const summaryRows = useMemo(() => {
		if (!session) return [];
		return Object.entries(session.byTopic)
			.map(([topic, v]) => {
				const total = v.total || 0;
				const correct = v.correct || 0;
				const accuracy = total ? Math.round((correct / total) * 100) : 0;
				return { topic, total, correct, accuracy };
			})
			.sort((a, b) => b.total - a.total || b.accuracy - a.accuracy);
	}, [session]);

	// Keyboard shortcuts
	useHotkeys(
		[
			{ key: '1', handler: () => { if (!locked && activeQuestion?.options[0]) submitAnswer(0); } },
			{ key: '2', handler: () => { if (!locked && activeQuestion?.options[1]) submitAnswer(1); } },
			{ key: '3', handler: () => { if (!locked && activeQuestion?.options[2]) submitAnswer(2); } },
			{ key: '4', handler: () => { if (!locked && activeQuestion?.options[3]) submitAnswer(3); } },
			{ key: 'h', handler: () => { if (!hintShown && activeQuestion?.hint) setHintShown(true); } },
			{ key: 's', handler: () => { if (!locked) showNextQuestion(); } },
			{ key: 'n', handler: () => { if (locked || showSummary) handleNext(); } },
			{ key: 'Enter', handler: () => { if (locked || showSummary) handleNext(); } },
			{ key: 'b', handler: () => toggleBookmark() },
		],
		open
	);

	// Category options for dropdown
	const categoryOptions = useMemo(() => {
		const opts = [
			{ value: 'all', label: t.focusAll },
			{
				value: 'weakest',
				label: weakestTopic
					? t.focusWeakestWith(weakestTopic.topic, weakestTopic.accuracy)
					: t.focusWeakest,
			},
			...topics.map((topic) => ({ value: topic, label: topic })),
		];
		return opts;
	}, [t, weakestTopic, topics]);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t.title}</DialogTitle>
					<DialogDescription className="sr-only">{t.title}</DialogDescription>
				</DialogHeader>

				{loading && (
					<div className="space-y-3">
						<div className="animate-pulse rounded-md bg-accent h-5 w-2/3" />
						<div className="animate-pulse rounded-md bg-accent h-4 w-full" />
						<div className="animate-pulse rounded-md bg-accent h-10 w-full rounded-lg" />
						<div className="animate-pulse rounded-md bg-accent h-10 w-full rounded-lg" />
						<div className="animate-pulse rounded-md bg-accent h-10 w-full rounded-lg" />
					</div>
				)}

				{/* Topic Picker Phase */}
				{!loading && phase === 'pick' && !showSummary && (
					<div className="space-y-4">
						<h3 className="text-base font-semibold">{t.pickTitle}</h3>
						<div className="grid gap-2">
							<button
								type="button"
								onClick={() => handleStartQuiz('all')}
								className={cn(
									'text-left rounded-lg border border-input px-4 py-3 text-sm transition-all',
									'hover:border-primary/40 hover:bg-accent/50 cursor-pointer',
								)}
							>
								<span className="block font-medium">{t.pickAll}</span>
								<span className="block text-xs text-muted-foreground mt-0.5">
									{questions.length} {lang === 'de' ? 'Fragen' : 'questions'}
								</span>
							</button>
							{weakestTopic && (
								<button
									type="button"
									onClick={() => handleStartQuiz('weakest')}
									className={cn(
										'text-left rounded-lg border border-input px-4 py-3 text-sm transition-all',
										'hover:border-primary/40 hover:bg-accent/50 cursor-pointer',
										'border-destructive/30 bg-destructive/5',
									)}
								>
									<span className="block font-medium">{t.pickWeakest}</span>
									<span className="block text-xs text-muted-foreground mt-0.5">
										{weakestTopic.topic} — {weakestTopic.accuracy}%
									</span>
								</button>
							)}
							{topics.map((topic) => {
								const stats = quizStats?.byTopic?.[topic];
								const total = Number(stats?.total) || 0;
								const correct = Number(stats?.correct) || 0;
								const accuracy = total ? Math.round((correct / total) * 100) : 0;
								const count = questions.filter((q) => q.topic === topic).length;
								return (
									<button
										key={topic}
										type="button"
										onClick={() => handleStartQuiz(topic)}
										className={cn(
											'text-left rounded-lg border border-input px-4 py-3 text-sm transition-all',
											'hover:border-primary/40 hover:bg-accent/50 cursor-pointer',
										)}
									>
										<div className="flex items-center justify-between gap-2">
											<span className="font-medium">{topic}</span>
											{total > 0 && (
												<Badge variant={accuracy >= 80 ? 'secondary' : 'destructive'} className="text-xs">
													{accuracy}%
												</Badge>
											)}
										</div>
										<span className="block text-xs text-muted-foreground mt-0.5">
											{count} {lang === 'de' ? 'Fragen' : 'questions'}
											{total > 0 ? ` · ${correct}/${total}` : ''}
										</span>
									</button>
								);
							})}
						</div>
					</div>
				)}

				{/* Quiz Phase */}
				{!loading && phase === 'quiz' && !showSummary && (
					<>
						{/* Progress */}
						{progressText && (
							<p className="text-xs text-muted-foreground">{progressText}</p>
						)}

						{activeQuestion && (
							<>
								{/* Topic + inline actions */}
								<div className="flex items-center justify-between gap-2">
									<Badge variant="secondary">
										{activeQuestion.topic} · {activeQuestion.typeLabel}
									</Badge>
									<div className="flex items-center gap-1">
										<Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDiscuss} title={t.discuss}>
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
												<path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H7l-4 3 1.2-4.8A8.5 8.5 0 1 1 21 12z" />
											</svg>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											className={cn('h-8 w-8 text-lg', isSaved && 'text-destructive')}
											onClick={toggleBookmark}
											title={t.bookmarkSave}
										>
											{isSaved ? '♥' : '♡'}
										</Button>
									</div>
								</div>

								{/* Question */}
								<h4 className="text-base font-semibold">{activeQuestion.prompt}</h4>

								{/* Options */}
								<div className="grid gap-2">
									{activeQuestion.options.map((option, idx) => {
										const isCorrectOpt = locked && idx === activeQuestion.correctIndex;
										const isWrongSel = locked && selectedIndex !== activeQuestion.correctIndex && idx === selectedIndex;
										const marker = isCorrectOpt ? '✓ ' : isWrongSel ? '✗ ' : '';

										return (
											<button
												key={idx}
												type="button"
												disabled={locked}
												onClick={() => submitAnswer(idx)}
												className={cn(
													'text-left rounded-lg border px-3 py-2.5 text-sm transition-all',
													'hover:border-primary/40 hover:translate-x-1 hover:shadow-sm',
													!locked && 'cursor-pointer border-input bg-card',
													isCorrectOpt && 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
													isWrongSel && 'border-red-500 bg-red-50 dark:bg-red-950/30 animate-[shake_0.4s_ease]',
													locked && !isCorrectOpt && !isWrongSel && 'opacity-60',
												)}
											>
												<span className="block font-medium">
													{marker}{idx + 1}. {option}
												</span>
												{locked && (
													<span className={cn(
														'block mt-1 text-xs leading-relaxed',
														isCorrectOpt ? 'text-emerald-700 dark:text-emerald-400' : 'text-muted-foreground',
														isWrongSel && 'text-red-700 dark:text-red-400',
													)}>
														{getOptionReason(idx)}
													</span>
												)}
											</button>
										);
									})}
								</div>

								{/* Actions */}
								<div className="flex flex-wrap items-center gap-2">
									{!locked && activeQuestion.hint && !hintShown && (
										<Button variant="outline" size="sm" onClick={() => setHintShown(true)}>
											{t.showHint}
										</Button>
									)}
									{!locked && (
										<Button variant="outline" size="sm" onClick={() => showNextQuestion()}>
											{t.skip}
										</Button>
									)}
								</div>

								{/* Hint */}
								{hintShown && activeQuestion.hint && (
									<p className="text-sm bg-muted/50 border-l-4 border-primary/40 rounded-md px-3 py-2">
										{activeQuestion.hint}
									</p>
								)}

								{/* Feedback */}
								{feedback && (
									<p className={cn(
										'text-sm font-medium',
										feedback.correct ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400',
									)}>
										{feedback.text}
									</p>
								)}

								{/* Learn ref */}
								{locked && activeQuestion.learnRef?.url && (
									<p className="text-xs text-muted-foreground">
										{t.learnMore}{' '}
										<a
											href={activeQuestion.learnRef.url}
											target="_blank"
											rel="noopener noreferrer"
											className="underline underline-offset-2 font-semibold hover:text-primary"
										>
											{activeQuestion.learnRef.title || activeQuestion.learnRef.url}
										</a>
									</p>
								)}

								{/* Next button */}
								<Button
									disabled={!locked}
									onClick={handleNext}
								>
									{session?.completed && deckRef.current.length === 0 && !showSummary
										? t.restart
										: t.nextQuestion}
								</Button>
							</>
						)}
					</>
				)}

				{/* Summary */}
				{showSummary && session && (
					<Card className="p-4 space-y-3">
						<h4 className="font-semibold">{t.summaryTitle}</h4>
						<p className="text-sm text-muted-foreground">
							{t.summaryMeta(session.answered, session.correct,
								session.answered ? Math.round((session.correct / session.answered) * 100) : 0)}
						</p>
						<div className="grid gap-1">
							{summaryRows.map((row) => (
								<p key={row.topic} className="text-xs text-muted-foreground">
									{t.summaryTopic(row.topic, row.correct, row.total, row.accuracy)}
								</p>
							))}
						</div>
						<Button onClick={handleNext}>{t.pickStart}</Button>
					</Card>
				)}

				{/* Shortcut hint */}
				<p className="text-[0.7rem] text-muted-foreground/70">{t.shortcuts}</p>
			</DialogContent>
		</Dialog>
	);
}
