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

interface ReviewRow {
	question: RuntimeQuestion;
	isCorrect: boolean;
	selectedText: string | null;
	correctText: string;
}

interface TopicStats {
	[topic: string]: { total: number; correct: number };
}

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const EXAM_SECONDS = 20 * 60;
const EXAM_MINUTES = Math.round(EXAM_SECONDS / 60);
const EXAM_QUESTION_COUNT = 10;

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Exam mode',
		meta: '10 questions, 20 minutes, mixed question types, and a detailed review.',
		start: 'Start exam',
		startConfirm: (total: number, minutes: number) =>
			`You are about to start the exam (${total} questions, about ${minutes} minutes). Leaving early will score this attempt as 0%. Continue?`,
		leaveConfirm: 'Leave exam now? This attempt will be scored as 0%.',
		questionProgress: (current: number, total: number, typeLabel: string) =>
			`Question ${current} / ${total} | ${typeLabel}`,
		nextQuestion: 'Next question',
		finish: 'Finish exam',
		result: (score: number, correct: number, total: number) =>
			`Result: ${score}% (${correct}/${total})`,
		abortedPenalty: 'Exam ended early. This attempt was scored as 0%.',
		topicBreakdown: 'Topic breakdown',
		bestSaved: (best: number, savedAt: string) => `Best score: ${best}% | Saved: ${savedAt}`,
		reviewTitle: 'Exam Review',
		reviewLabel: (index: number, topic: string, typeLabel: string) =>
			`Question ${index} | ${topic} | ${typeLabel}`,
		reviewBadgeCorrect: 'Correct',
		reviewBadgeWrong: 'Wrong',
		reviewYourAnswerNone: 'Your answer: No answer',
		reviewYourAnswer: (answer: string) => `Your answer: ${answer}`,
		reviewCorrectAnswer: (answer: string) => `Correct answer: ${answer}`,
		reviewExplanation: (explanation: string) => `Explanation: ${explanation}`,
		shortcuts: 'S start | 1-4 answer | N/Enter next | ESC close',
		typeMultipleChoice: 'Multiple choice',
		typeTrueFalse: 'True / False',
	},
	de: {
		title: 'Prüfungsmodus',
		meta: '10 Fragen, 20 Minuten, gemischte Fragetypen und eine detaillierte Auswertung.',
		start: 'Prüfung starten',
		startConfirm: (total: number, minutes: number) =>
			`Du startest jetzt die Prüfung (${total} Fragen, ca. ${minutes} Minuten). Frühzeitiges Verlassen wird als 0% gewertet. Fortfahren?`,
		leaveConfirm: 'Prüfung jetzt verlassen? Dieser Versuch wird als 0% gewertet.',
		questionProgress: (current: number, total: number, typeLabel: string) =>
			`Frage ${current} / ${total} | ${typeLabel}`,
		nextQuestion: 'Nächste Frage',
		finish: 'Prüfung beenden',
		result: (score: number, correct: number, total: number) =>
			`Ergebnis: ${score}% (${correct}/${total})`,
		abortedPenalty: 'Prüfung vorzeitig beendet. Dieser Versuch wurde als 0% gewertet.',
		topicBreakdown: 'Themenaufschlüsselung',
		bestSaved: (best: number, savedAt: string) => `Bestwertung: ${best}% | Gespeichert: ${savedAt}`,
		reviewTitle: 'Prüfungsauswertung',
		reviewLabel: (index: number, topic: string, typeLabel: string) =>
			`Frage ${index} | ${topic} | ${typeLabel}`,
		reviewBadgeCorrect: 'Korrekt',
		reviewBadgeWrong: 'Falsch',
		reviewYourAnswerNone: 'Deine Antwort: Keine Antwort',
		reviewYourAnswer: (answer: string) => `Deine Antwort: ${answer}`,
		reviewCorrectAnswer: (answer: string) => `Richtige Antwort: ${answer}`,
		reviewExplanation: (explanation: string) => `Erklärung: ${explanation}`,
		shortcuts: 'S Start | 1-4 Antwort | N/Enter Weiter | ESC Schließen',
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

function createRuntimeQuestion(
	baseQuestion: BaseQuestion,
	lang: string,
	optionPools: ReturnType<typeof buildOptionPools> & { de?: any; en?: any },
): RuntimeQuestion {
	const rq = buildRuntimeQuestion(baseQuestion, {
		language: lang,
		optionPoolsByLanguage: optionPools,
		getTypeLabel: (type: string) => getTypeLabel(type, lang),
		trueLabel: lang === 'de' ? 'Wahr' : 'True',
		falseLabel: lang === 'de' ? 'Falsch' : 'False',
	});
	return rq as RuntimeQuestion;
}

function pickExamQuestions(allQuestions: BaseQuestion[], count: number): BaseQuestion[] {
	const grouped: Record<string, BaseQuestion[]> = {};
	allQuestions.forEach((q) => {
		if (!grouped[q.topic]) grouped[q.topic] = [];
		grouped[q.topic].push(q);
	});

	const selected: BaseQuestion[] = [];
	const usedIds = new Set<string>();

	for (const topic of shuffle(Object.keys(grouped))) {
		const candidate = shuffle(grouped[topic])[0];
		if (!candidate || usedIds.has(candidate.id)) continue;
		selected.push(candidate);
		usedIds.add(candidate.id);
		if (selected.length >= count) return selected;
	}

	for (const candidate of shuffle(allQuestions)) {
		if (selected.length >= count) break;
		if (usedIds.has(candidate.id)) continue;
		selected.push(candidate);
		usedIds.add(candidate.id);
	}

	return selected;
}

function formatClock(endsAt: number): string {
	const remaining = Math.max(0, Math.floor((endsAt - Date.now()) / 1000));
	const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
	const ss = String(remaining % 60).padStart(2, '0');
	return `${mm}:${ss}`;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface ExamDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ExamDialog({ open, onOpenChange }: ExamDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const recordExamResult = useStudyStore((s) => s.recordExamResult);
	const recordExamFinish = useStudyStore((s) => s.recordExamFinish);

	// Question pool
	const [allQuestions, setAllQuestions] = useState<BaseQuestion[]>([]);
	const [loading, setLoading] = useState(false);
	const optionPoolsRef = useRef<Record<string, any>>({});

	// Exam session state
	const [phase, setPhase] = useState<'start' | 'running' | 'result'>('start');
	const [questions, setQuestions] = useState<RuntimeQuestion[]>([]);
	const [answers, setAnswers] = useState<(number | null)[]>([]);
	const [index, setIndex] = useState(0);
	const [endsAt, setEndsAt] = useState(0);
	const [clockText, setClockText] = useState(`${EXAM_MINUTES}:00`);

	// Result state
	const [reviewRows, setReviewRows] = useState<ReviewRow[]>([]);
	const [topicStats, setTopicStats] = useState<TopicStats>({});
	const [score, setScore] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const [aborted, setAborted] = useState(false);

	// Refs
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const resultRef = useRef<HTMLDivElement>(null);
	const examActiveRef = useRef(false);

	// Lazy-load questions
	useEffect(() => {
		if (!open || allQuestions.length) return;
		setLoading(true);
		import('../../data/quiz-questions.js')
			.then((mod) => {
				const qs: BaseQuestion[] = Array.isArray(mod.quizQuestions) ? mod.quizQuestions : [];
				setAllQuestions(qs);
				optionPoolsRef.current = {
					en: buildOptionPools(qs, 'en'),
					de: buildOptionPools(qs, 'de'),
				};
			})
			.catch(() => setAllQuestions([]))
			.finally(() => setLoading(false));
	}, [open, allQuestions.length]);

	// Timer tick
	useEffect(() => {
		if (phase !== 'running' || !endsAt) return;

		const tick = () => {
			const now = Date.now();
			setClockText(formatClock(endsAt));
			if (now >= endsAt) {
				finishExam(false, false);
			}
		};

		tick();
		timerRef.current = setInterval(tick, 1000);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [phase, endsAt]); // eslint-disable-line react-hooks/exhaustive-deps

	// Cleanup timer on unmount
	useEffect(() => {
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, []);

	// Track whether exam is active for close confirmation
	useEffect(() => {
		examActiveRef.current = phase === 'running';
	}, [phase]);

	// Start exam
	const startExam = useCallback(() => {
		if (!allQuestions.length) return;
		const count = Math.min(EXAM_QUESTION_COUNT, allQuestions.length);

		if (!confirm(t.startConfirm(count, EXAM_MINUTES))) return;

		const picked = pickExamQuestions(allQuestions, count);
		const runtimeQs = picked.map((q) => createRuntimeQuestion(q, lang, optionPoolsRef.current));
		const emptyAnswers = Array.from({ length: runtimeQs.length }, () => null);

		setQuestions(runtimeQs);
		setAnswers(emptyAnswers);
		setIndex(0);
		setEndsAt(Date.now() + EXAM_SECONDS * 1000);
		setClockText(`${EXAM_MINUTES}:00`);
		setReviewRows([]);
		setTopicStats({});
		setScore(0);
		setCorrectCount(0);
		setAborted(false);
		setPhase('running');
	}, [allQuestions, lang, t]);

	// Select answer
	const selectAnswer = useCallback((optIdx: number) => {
		setAnswers((prev) => {
			const next = [...prev];
			next[index] = optIdx;
			return next;
		});
	}, [index]);

	// Next question
	const nextQuestion = useCallback(() => {
		if (answers[index] === null) return;
		if (index >= questions.length - 1) {
			finishExam(false, false);
			return;
		}
		setIndex((prev) => prev + 1);
	}, [index, answers, questions.length]); // eslint-disable-line react-hooks/exhaustive-deps

	// Finish exam
	const finishExam = useCallback((forceFail = false, wasAborted = false) => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}

		const stats: TopicStats = {};
		const rows: ReviewRow[] = questions.map((question, i) => {
			const selectedIndex = answers[i];
			let isCorrect = selectedIndex === question.correctIndex;
			if (forceFail) isCorrect = false;

			if (!stats[question.topic]) stats[question.topic] = { total: 0, correct: 0 };
			stats[question.topic].total += 1;
			if (isCorrect) stats[question.topic].correct += 1;

			return {
				question,
				isCorrect,
				selectedText: selectedIndex !== null && selectedIndex !== undefined
					? question.options[selectedIndex]
					: null,
				correctText: question.correctText,
			};
		});

		const correct = rows.filter((r) => r.isCorrect).length;
		const pct = Math.round((correct / questions.length) * 100);

		setReviewRows(rows);
		setTopicStats(stats);
		setScore(pct);
		setCorrectCount(correct);
		setAborted(wasAborted);
		setPhase('result');

		// Persist to store
		recordExamResult(pct, correct, questions.length);

		// Track daily history + wrong journal via Zustand
		recordExamFinish({
			answered: questions.length,
			correct,
			wrongRows: rows.filter((r) => !r.isCorrect).map((r) => ({
				questionId: r.question.id,
			})),
		});

		setTimeout(() => resultRef.current?.focus(), 100);
	}, [questions, answers, recordExamResult, recordExamFinish]);

	// Handle dialog close with confirmation
	const handleOpenChange = useCallback((value: boolean) => {
		if (!value && examActiveRef.current) {
			if (!confirm(t.leaveConfirm)) return;
			finishExam(true, true);
		}
		onOpenChange(value);
		if (!value) {
			// Reset to start phase for next open
			setPhase('start');
			setClockText(`${EXAM_MINUTES}:00`);
		}
	}, [onOpenChange, finishExam, t.leaveConfirm]);

	// Current question
	const currentQuestion = phase === 'running' ? questions[index] : null;
	const currentAnswer = phase === 'running' ? answers[index] : null;
	const isLastQuestion = index === questions.length - 1;

	// Sorted topic stats for result display
	const sortedTopics = useMemo(() => {
		return Object.entries(topicStats)
			.map(([topic, s]) => ({ topic, ...s }))
			.sort((a, b) => a.topic.localeCompare(b.topic));
	}, [topicStats]);

	// Best score info
	const examBest = useStudyStore((s) => s.examBest);
	const examHistory = useStudyStore((s) => s.examHistory);
	const bestInfo = useMemo(() => {
		if (!examHistory?.length) return null;
		const bestEntry = examHistory.reduce((best: any, entry: any) =>
			(entry.score > (best?.score ?? -1)) ? entry : best, null);
		if (!bestEntry) return null;
		const date = new Date(bestEntry.at);
		const savedAt = date.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
			day: '2-digit', month: '2-digit', year: 'numeric',
			hour: '2-digit', minute: '2-digit',
		});
		return { best: examBest, savedAt };
	}, [examBest, examHistory, lang]);

	// Keyboard shortcuts
	useHotkeys(
		[
			{ key: 's', handler: () => { if (phase === 'start') startExam(); } },
			{ key: 'Enter', handler: () => {
				if (phase === 'start') startExam();
				else if (phase === 'running' && currentAnswer !== null) nextQuestion();
			}},
			{ key: '1', handler: () => { if (phase === 'running' && currentQuestion?.options[0]) selectAnswer(0); } },
			{ key: '2', handler: () => { if (phase === 'running' && currentQuestion?.options[1]) selectAnswer(1); } },
			{ key: '3', handler: () => { if (phase === 'running' && currentQuestion?.options[2]) selectAnswer(2); } },
			{ key: '4', handler: () => { if (phase === 'running' && currentQuestion?.options[3]) selectAnswer(3); } },
			{ key: 'n', handler: () => { if (phase === 'running' && currentAnswer !== null) nextQuestion(); } },
		],
		open,
	);

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t.title}</DialogTitle>
					<DialogDescription className="text-sm text-muted-foreground">
						{t.meta}
					</DialogDescription>
				</DialogHeader>

				{loading && (
					<div className="space-y-3">
						<div className="animate-pulse rounded-md bg-accent h-5 w-1/2" />
						<div className="animate-pulse rounded-md bg-accent h-9 w-32 rounded-lg" />
						<div className="animate-pulse rounded-md bg-accent h-4 w-3/4" />
					</div>
				)}

				{/* Start Phase */}
				{!loading && phase === 'start' && (
					<div className="flex items-center justify-between gap-4">
						<Button onClick={startExam} disabled={!allQuestions.length}>
							{t.start}
						</Button>
						<span className="font-mono text-lg text-muted-foreground" role="timer" aria-label={`${EXAM_MINUTES}:00`}>
							{EXAM_MINUTES}:00
						</span>
					</div>
				)}

				{/* Running Phase */}
				{!loading && phase === 'running' && currentQuestion && (
					<>
						{/* Timer + Progress */}
						<div className="flex items-center justify-between gap-4">
							<p className="text-xs text-muted-foreground">
								{t.questionProgress(index + 1, questions.length, currentQuestion.typeLabel)}
							</p>
							<span
								className={cn(
									'font-mono text-lg tabular-nums',
									endsAt - Date.now() < 60000 ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground',
								)}
								role="timer"
								aria-label={clockText}
							>
								{clockText}
							</span>
						</div>

						{/* Topic badge */}
						<Badge variant="secondary">
							{currentQuestion.topic} · {currentQuestion.typeLabel}
						</Badge>

						{/* Question */}
						<h4 className="text-base font-semibold">{currentQuestion.prompt}</h4>

						{/* Options */}
						<div className="grid gap-2">
							{currentQuestion.options.map((option, idx) => (
								<button
									key={idx}
									type="button"
									onClick={() => selectAnswer(idx)}
									className={cn(
										'text-left rounded-lg border px-3 py-2.5 text-sm transition-all',
										'hover:border-primary/40 hover:translate-x-1 hover:shadow-sm cursor-pointer',
										currentAnswer === idx
											? 'border-primary bg-primary/10 ring-1 ring-primary/30'
											: 'border-input bg-card',
									)}
								>
									<span className="block font-medium">
										{idx + 1}. {option}
									</span>
								</button>
							))}
						</div>

						{/* Next / Finish button */}
						<Button
							disabled={currentAnswer === null}
							onClick={nextQuestion}
						>
							{isLastQuestion ? t.finish : t.nextQuestion}
						</Button>
					</>
				)}

				{/* Result Phase */}
				{!loading && phase === 'result' && (
					<div
						ref={resultRef}
						tabIndex={-1}
						className="space-y-4 outline-none"
						aria-live="polite"
					>
						{/* Score */}
						<div className="space-y-2">
							<p className="text-lg font-bold">
								{t.result(score, correctCount, questions.length)}
							</p>
							{aborted && (
								<p className="text-sm text-red-600 dark:text-red-400">{t.abortedPenalty}</p>
							)}
						</div>

						{/* Topic breakdown */}
						{sortedTopics.length > 0 && (
							<div className="space-y-1">
								<p className="text-sm font-semibold">{t.topicBreakdown}</p>
								<ul className="text-sm text-muted-foreground list-disc pl-5 space-y-0.5">
									{sortedTopics.map((s) => (
										<li key={s.topic}>
											{s.topic}: {s.correct}/{s.total}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Best score */}
						{bestInfo && (
							<p className="text-xs text-muted-foreground">
								{t.bestSaved(bestInfo.best, bestInfo.savedAt)}
							</p>
						)}

						{/* Review */}
						{reviewRows.length > 0 && (
							<div className="space-y-3">
								<h4 className="text-sm font-semibold">{t.reviewTitle}</h4>
								{reviewRows.map((row, i) => (
									<Card
										key={i}
										className={cn(
											'p-3 space-y-1.5',
											row.isCorrect
												? 'border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20'
												: 'border-red-500/30 bg-red-50/50 dark:bg-red-950/20',
										)}
									>
										<div className="flex items-center justify-between gap-2">
											<p className="text-xs text-muted-foreground">
												{t.reviewLabel(i + 1, row.question.topic, row.question.typeLabel)}
											</p>
											<Badge
												variant={row.isCorrect ? 'secondary' : 'destructive'}
												className="text-xs"
											>
												{row.isCorrect ? t.reviewBadgeCorrect : t.reviewBadgeWrong}
											</Badge>
										</div>
										<p className="text-sm font-medium">{row.question.prompt}</p>
										<p className={cn(
											'text-xs',
											row.isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400',
										)}>
											{row.selectedText
												? t.reviewYourAnswer(row.selectedText)
												: t.reviewYourAnswerNone}
										</p>
										{!row.isCorrect && (
											<p className="text-xs text-emerald-700 dark:text-emerald-400">
												{t.reviewCorrectAnswer(row.correctText)}
											</p>
										)}
										{row.question.explanation && (
											<p className="text-xs text-muted-foreground">
												{t.reviewExplanation(row.question.explanation)}
											</p>
										)}
									</Card>
								))}
							</div>
						)}

						{/* Restart button */}
						<Button onClick={() => setPhase('start')}>{t.start}</Button>
					</div>
				)}

				{/* Shortcut hint */}
				<p className="text-[0.7rem] text-muted-foreground/70">{t.shortcuts}</p>
			</DialogContent>
		</Dialog>
	);
}
