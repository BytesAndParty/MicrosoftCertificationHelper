import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useStudyStore } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { buildOptionPools, createRuntimeQuestion, shuffle } from '../../lib/study/quiz';
import { formatDate } from '../../lib/format';

const EXAM_SECONDS = 20 * 60;
const EXAM_QUESTION_COUNT = 10;

const i18n = {
	en: {
		title: 'Exam mode',
		meta: '10 questions, 20 minutes, mixed question types, and a detailed review.',
		start: 'Start exam',
		startConfirm: 'Start exam with {total} questions and {minutes} minutes?',
		nextQuestion: 'Next question',
		finish: 'Finish exam',
		progress: 'Question {current} / {total} · {typeLabel}',
		result: 'Score: {score}% ({correct}/{total} correct)',
		topicBreakdown: 'Topic breakdown:',
		bestSaved: 'Best score: {best}% (saved {savedAt})',
		reviewTitle: 'Review',
		reviewCorrect: 'Correct',
		reviewWrong: 'Wrong',
		reviewYourAnswer: 'Your answer: {answer}',
		reviewYourAnswerNone: 'Your answer: (none)',
		reviewCorrectAnswer: 'Correct answer: {answer}',
		reviewExplanation: '{explanation}',
		shortcutTip: 'Shortcuts: 1-4 answer | N/Enter next | ESC close',
		typeLabel: { 'single-choice': 'Single choice', 'true-false': 'True / False' },
		trueLabel: 'True',
		falseLabel: 'False',
	},
	de: {
		title: 'Prüfungsmodus',
		meta: '10 Fragen, 20 Minuten, gemischte Fragetypen und eine detaillierte Auswertung.',
		start: 'Prüfung starten',
		startConfirm: 'Prüfung mit {total} Fragen und {minutes} Minuten starten?',
		nextQuestion: 'Nächste Frage',
		finish: 'Prüfung beenden',
		progress: 'Frage {current} / {total} · {typeLabel}',
		result: 'Ergebnis: {score}% ({correct}/{total} richtig)',
		topicBreakdown: 'Themen-Aufschlüsselung:',
		bestSaved: 'Bester Score: {best}% (gespeichert {savedAt})',
		reviewTitle: 'Auswertung',
		reviewCorrect: 'Richtig',
		reviewWrong: 'Falsch',
		reviewYourAnswer: 'Deine Antwort: {answer}',
		reviewYourAnswerNone: 'Deine Antwort: (keine)',
		reviewCorrectAnswer: 'Richtige Antwort: {answer}',
		reviewExplanation: '{explanation}',
		shortcutTip: 'Shortcuts: 1-4 Antwort | N/Enter Weiter | ESC Schließen',
		typeLabel: { 'single-choice': 'Single Choice', 'true-false': 'Wahr / Falsch' },
		trueLabel: 'Wahr',
		falseLabel: 'Falsch',
	},
} as const;

interface ExamState {
	questions: any[];
	answers: (number | null)[];
	index: number;
	endsAt: number;
}

interface ReviewRow {
	question: any;
	isCorrect: boolean;
	selectedText: string | null;
	correctText: string;
}

interface ExamDialogProps {
	open: boolean;
	onClose: () => void;
}

export default function ExamDialog({ open, onClose }: ExamDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];
	const recordExamResult = useStudyStore(s => s.recordExamResult);
	const recordExamFinish = useStudyStore(s => s.recordExamFinish);
	const examBest = useStudyStore(s => s.examBest);

	const [allQuestions, setAllQuestions] = useState<any[]>([]);
	const [optionPools, setOptionPools] = useState<Record<string, any>>({});
	const [exam, setExam] = useState<ExamState | null>(null);
	const [timeText, setTimeText] = useState('20:00');
	const [result, setResult] = useState<{ score: number; correct: number; total: number; topicStats: Record<string, { total: number; correct: number }>; reviewRows: ReviewRow[] } | null>(null);
	const timerRef = useRef<number>();

	useEffect(() => {
		if (!open) return;
		import('../../data/quiz-questions.js').then(mod => {
			const qs = Array.isArray(mod.quizQuestions) ? mod.quizQuestions : [];
			setAllQuestions(qs);
			setOptionPools({ en: buildOptionPools(qs, 'en'), de: buildOptionPools(qs, 'de') });
		});
	}, [open]);

	const buildQuestion = useCallback((raw: any) => createRuntimeQuestion(raw, {
		language: lang,
		optionPoolsByLanguage: optionPools,
		getTypeLabel: (type: string) => (t.typeLabel as any)[type] || type,
		trueLabel: t.trueLabel,
		falseLabel: t.falseLabel,
		shuffleFn: shuffle,
	}), [lang, optionPools, t]);

	const startExam = useCallback(() => {
		if (!allQuestions.length) return;
		const count = Math.min(EXAM_QUESTION_COUNT, allQuestions.length);
		if (!confirm(t.startConfirm.replace('{total}', String(count)).replace('{minutes}', '20'))) return;
		const picked = shuffle([...allQuestions]).slice(0, count).map(q => buildQuestion(q));
		setExam({ questions: picked, answers: Array(count).fill(null), index: 0, endsAt: Date.now() + EXAM_SECONDS * 1000 });
		setResult(null);
	}, [allQuestions, buildQuestion, t]);

	// Timer
	useEffect(() => {
		if (!exam) return;
		const tick = () => {
			const remaining = Math.max(0, Math.floor((exam.endsAt - Date.now()) / 1000));
			const m = Math.floor(remaining / 60);
			const s = remaining % 60;
			setTimeText(`${m}:${String(s).padStart(2, '0')}`);
			if (remaining <= 0) finishExam();
		};
		tick();
		timerRef.current = window.setInterval(tick, 1000);
		return () => clearInterval(timerRef.current);
	}, [exam?.endsAt]);

	const selectAnswer = useCallback((optionIndex: number) => {
		if (!exam) return;
		setExam(prev => {
			if (!prev) return prev;
			const answers = [...prev.answers];
			answers[prev.index] = optionIndex;
			return { ...prev, answers };
		});
	}, [exam]);

	const finishExam = useCallback(() => {
		if (!exam) return;
		clearInterval(timerRef.current);
		const topicStats: Record<string, { total: number; correct: number }> = {};
		const reviewRows: ReviewRow[] = exam.questions.map((q, i) => {
			const sel = exam.answers[i];
			const isCorrect = sel === q.correctIndex;
			if (!topicStats[q.topic]) topicStats[q.topic] = { total: 0, correct: 0 };
			topicStats[q.topic].total += 1;
			if (isCorrect) topicStats[q.topic].correct += 1;
			return { question: q, isCorrect, selectedText: sel !== null ? q.options[sel] : null, correctText: q.correctText };
		});
		const correctCount = reviewRows.filter(r => r.isCorrect).length;
		const score = Math.round((correctCount / exam.questions.length) * 100);
		recordExamResult(score, correctCount, exam.questions.length);
		const wrongRows = reviewRows.filter(r => !r.isCorrect).map(r => ({ questionId: r.question.id }));
		recordExamFinish({ answered: exam.questions.length, correct: correctCount, wrongRows });
		setResult({ score, correct: correctCount, total: exam.questions.length, topicStats, reviewRows });
		setExam(null);
	}, [exam, recordExamResult, recordExamFinish]);

	const nextQuestion = useCallback(() => {
		if (!exam) return;
		if (exam.answers[exam.index] === null) return;
		if (exam.index >= exam.questions.length - 1) { finishExam(); return; }
		setExam(prev => prev ? { ...prev, index: prev.index + 1 } : prev);
	}, [exam, finishExam]);

	const keyMap = useMemo(() => ({
		'1': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); selectAnswer(0); } },
		'2': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); selectAnswer(1); } },
		'3': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); selectAnswer(2); } },
		'4': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); selectAnswer(3); } },
		'n': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); nextQuestion(); } },
		'Enter': (e: KeyboardEvent) => { if (exam) { e.preventDefault(); nextQuestion(); } },
		's': (e: KeyboardEvent) => { if (!exam && !result) { e.preventDefault(); startExam(); } },
		'Escape': (e: KeyboardEvent) => { e.preventDefault(); if (exam) { finishExam(); } else { onClose(); } },
	}), [exam, result, selectAnswer, nextQuestion, startExam, finishExam, onClose]);

	useHotkeys(keyMap, open);

	if (!open) return null;

	const currentQ = exam?.questions[exam.index];

	return (
		<div className="overlay" role="dialog" aria-modal="true">
			<div className="overlay-backdrop" onClick={() => { if (!exam) onClose(); }}></div>
			<div className="overlay-container card">
				<div className="overlay-header">
					<h2>{t.title}</h2>
					{!exam && <p className="meta">{t.meta}</p>}
					<button type="button" className="overlay-close" aria-label="Close" onClick={() => { if (exam) finishExam(); else onClose(); }}>&times;</button>
				</div>
				<div className="overlay-body">
					{!exam && !result && (
						<div className="exam-top">
							<button type="button" className="primary" onClick={startExam}>{t.start}</button>
							<p className="timer">20:00</p>
						</div>
					)}

					{exam && currentQ && (
						<>
							<div className="exam-top">
								<p className="timer" role="timer">{timeText}</p>
							</div>
							<p className="meta">{t.progress.replace('{current}', String(exam.index + 1)).replace('{total}', String(exam.questions.length)).replace('{typeLabel}', currentQ.typeLabel)}</p>
							<h4>{currentQ.prompt}</h4>
							<div className="option-list">
								{currentQ.options.map((opt: string, i: number) => (
									<button
										key={`${currentQ.id}-${i}`}
										type="button"
										className={`option ${exam.answers[exam.index] === i ? 'is-selected' : ''}`}
										onClick={() => selectAnswer(i)}
									>
										<span className="option-number">{i + 1}</span>
										{opt}
									</button>
								))}
							</div>
							<button type="button" className="primary" disabled={exam.answers[exam.index] === null} onClick={nextQuestion}>
								{exam.index === exam.questions.length - 1 ? t.finish : t.nextQuestion}
							</button>
						</>
					)}

					{result && (
						<>
							<p><strong>{t.result.replace('{score}', String(result.score)).replace('{correct}', String(result.correct)).replace('{total}', String(result.total))}</strong></p>
							<p className="meta">{t.topicBreakdown}</p>
							<ul>
								{Object.entries(result.topicStats).sort(([a], [b]) => a.localeCompare(b)).map(([topic, s]) => (
									<li key={topic}>{topic}: {s.correct}/{s.total}</li>
								))}
							</ul>
							<p className="meta">{t.bestSaved.replace('{best}', String(examBest)).replace('{savedAt}', formatDate(Date.now()))}</p>

							<h4>{t.reviewTitle}</h4>
							{result.reviewRows.map((row, i) => (
								<article key={i} className={`review-item ${row.isCorrect ? 'is-correct' : 'is-wrong'}`}>
									<div className="review-head">
										<p className="meta">{i + 1}. {row.question.topic}</p>
										<span className={`review-badge ${row.isCorrect ? 'ok' : 'bad'}`}>
											{row.isCorrect ? t.reviewCorrect : t.reviewWrong}
										</span>
									</div>
									<h5>{row.question.prompt}</h5>
									<p className="review-line">{row.selectedText === null ? t.reviewYourAnswerNone : t.reviewYourAnswer.replace('{answer}', row.selectedText)}</p>
									<p className="review-line">{t.reviewCorrectAnswer.replace('{answer}', row.correctText)}</p>
									{row.question.explanation && <p className="review-line">{row.question.explanation}</p>}
								</article>
							))}

							<button type="button" className="primary" onClick={startExam}>{t.start}</button>
						</>
					)}

					<p className="overlay-shortcut-tip">{t.shortcutTip}</p>
				</div>
			</div>
		</div>
	);
}
