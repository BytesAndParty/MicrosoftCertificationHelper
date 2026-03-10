import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useStudyStore } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import {
	buildOptionPools,
	createRuntimeQuestion,
	shuffle,
} from '../../lib/study/quiz';

/* ---- i18n ---- */
const i18n = {
	en: {
		title: 'Quiz with instant feedback',
		nextQuestion: 'Next question',
		showHint: 'Show hint',
		skip: 'Skip',
		correct: 'Correct!',
		wrong: 'Wrong – the correct answer is:',
		progress: '{answered} answered · {accuracy}% accuracy',
		summaryTitle: 'Quiz overview',
		summaryMeta: '{answered} questions · {accuracy}% accuracy · {topics} topics',
		topicLine: '{topic}: {correct}/{total} ({accuracy}%)',
		bookmarkAdd: 'Save question',
		bookmarkRemove: 'Saved',
		learnMore: 'Learn more:',
		shortcutTip: 'Shortcuts: 1-4 answer | H hint | S skip | N/Enter next | B bookmark',
		typeLabel: { 'single-choice': 'Single choice', 'true-false': 'True / False' },
		trueLabel: 'True',
		falseLabel: 'False',
	},
	de: {
		title: 'Quiz mit sofortigem Feedback',
		nextQuestion: 'Nächste Frage',
		showHint: 'Hinweis zeigen',
		skip: 'Überspringen',
		correct: 'Richtig!',
		wrong: 'Falsch – die richtige Antwort ist:',
		progress: '{answered} beantwortet · {accuracy}% Genauigkeit',
		summaryTitle: 'Quiz-Übersicht',
		summaryMeta: '{answered} Fragen · {accuracy}% Genauigkeit · {topics} Themen',
		topicLine: '{topic}: {correct}/{total} ({accuracy}%)',
		bookmarkAdd: 'Frage speichern',
		bookmarkRemove: 'Gespeichert',
		learnMore: 'Mehr erfahren:',
		shortcutTip: 'Shortcuts: 1-4 Antwort | H Hinweis | S Überspringen | N/Enter Weiter | B Lesezeichen',
		typeLabel: { 'single-choice': 'Single Choice', 'true-false': 'Wahr / Falsch' },
		trueLabel: 'Wahr',
		falseLabel: 'Falsch',
	},
} as const;

/* ---- Hint keyword extraction ---- */
const HINT_STOPWORDS_EN = new Set([
	'the', 'and', 'for', 'with', 'from', 'that', 'this', 'into', 'your', 'you', 'are', 'can', 'also', 'than',
	'only', 'more', 'most', 'used', 'using', 'when', 'what', 'where', 'which', 'about', 'core', 'azure', 'service',
	'model', 'models', 'card', 'cards', 'data', 'text', 'through', 'into', 'each', 'their', 'them', 'they', 'its',
]);
const HINT_STOPWORDS_DE = new Set([
	'der', 'die', 'das', 'den', 'dem', 'des', 'und', 'oder', 'ein', 'eine', 'einer', 'einem', 'eines', 'mit',
	'für', 'fuer', 'von', 'auf', 'aus', 'bei', 'als', 'auch', 'nur', 'mehr', 'wenn', 'was', 'wie', 'welche',
	'welcher', 'welches', 'diese', 'dieser', 'dieses', 'dass', 'ist', 'sind', 'wird', 'werden', 'kann', 'können',
	'koennen', 'durch', 'über', 'ueber',
]);

function extractHintKeywords(text: string, lang: string, max = 3): string {
	const stopwords = lang === 'de' ? HINT_STOPWORDS_DE : HINT_STOPWORDS_EN;
	const words = text.replace(/[^a-zA-ZäöüÄÖÜß\s-]/g, '').split(/\s+/).filter(w => w.length > 2 && !stopwords.has(w.toLowerCase()));
	const picked = shuffle(words).slice(0, max);
	return picked.map(w => {
		const mid = Math.floor(w.length / 2);
		return w.slice(0, mid) + '…';
	}).join(', ');
}

/* ---- Types ---- */
interface RuntimeQuestion {
	id: string;
	topic: string;
	prompt: string;
	hint?: string;
	explanation?: string;
	options: string[];
	correctIndex: number;
	correctText: string;
	optionExplanationsByOption: Record<string, string>;
	typeLabel: string;
	type: string;
	learnRef?: { title: string; url: string };
}

interface QuizSession {
	total: number;
	answered: number;
	correct: number;
	byTopic: Record<string, { total: number; correct: number }>;
	completed: boolean;
}

interface QuizDialogProps {
	open: boolean;
	onClose: () => void;
}

export default function QuizDialog({ open, onClose }: QuizDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];
	const recordQuizAnswer = useStudyStore(s => s.recordQuizAnswer);
	const toggleBookmark = useStudyStore(s => s.toggleBookmark);
	const savedQuestions = useStudyStore(s => s.savedQuestions);

	const [questions, setQuestions] = useState<any[]>([]);
	const [optionPools, setOptionPools] = useState<Record<string, any>>({});
	const [deck, setDeck] = useState<any[]>([]);
	const [activeQuestion, setActiveQuestion] = useState<RuntimeQuestion | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [hintShown, setHintShown] = useState(false);
	const [session, setSession] = useState<QuizSession>({ total: 0, answered: 0, correct: 0, byTopic: {}, completed: false });

	const isLocked = selectedIndex !== null;
	const isCorrect = selectedIndex !== null && activeQuestion ? selectedIndex === activeQuestion.correctIndex : false;
	const isBookmarked = activeQuestion ? Boolean(savedQuestions[activeQuestion.id]) : false;
	const overlayRef = useRef<HTMLDivElement>(null);

	// Load questions on mount
	useEffect(() => {
		if (!open) return;
		import('../../data/quiz-questions.js').then(mod => {
			const qs = Array.isArray(mod.quizQuestions) ? mod.quizQuestions : [];
			setQuestions(qs);
			const pools = {
				en: buildOptionPools(qs, 'en'),
				de: buildOptionPools(qs, 'de'),
			};
			setOptionPools(pools);
			const shuffled = shuffle([...qs]);
			setDeck(shuffled);
		});
	}, [open]);

	// Pick next question when deck changes or on init
	const pickNext = useCallback(() => {
		setSelectedIndex(null);
		setHintShown(false);

		setDeck(prev => {
			let nextDeck = prev;
			if (nextDeck.length === 0 && questions.length > 0) {
				nextDeck = shuffle([...questions]);
			}
			if (nextDeck.length === 0) return prev;

			const [raw, ...rest] = nextDeck;
			const rq = createRuntimeQuestion(raw, {
				language: lang,
				optionPoolsByLanguage: optionPools,
				getTypeLabel: (type: string) => (t.typeLabel as any)[type] || type,
				trueLabel: t.trueLabel,
				falseLabel: t.falseLabel,
				shuffleFn: shuffle,
			});
			setActiveQuestion(rq as RuntimeQuestion);
			return rest;
		});
	}, [questions, optionPools, lang, t]);

	// Start session when questions are loaded
	useEffect(() => {
		if (questions.length > 0 && open) {
			setSession({ total: questions.length, answered: 0, correct: 0, byTopic: {}, completed: false });
			pickNext();
		}
	}, [questions, open]);

	// Re-localize when language changes
	useEffect(() => {
		if (activeQuestion && questions.length > 0) {
			// Find the raw question and rebuild
			const raw = questions.find(q => q.id === activeQuestion.id);
			if (raw && !isLocked) {
				const rq = createRuntimeQuestion(raw, {
					language: lang,
					optionPoolsByLanguage: optionPools,
					getTypeLabel: (type: string) => (t.typeLabel as any)[type] || type,
					trueLabel: t.trueLabel,
					falseLabel: t.falseLabel,
					shuffleFn: shuffle,
				});
				setActiveQuestion(rq as RuntimeQuestion);
			}
		}
	}, [lang]);

	const submitAnswer = useCallback((index: number) => {
		if (isLocked || !activeQuestion) return;
		setSelectedIndex(index);
		const correct = index === activeQuestion.correctIndex;
		recordQuizAnswer(activeQuestion.id, activeQuestion.topic, correct);
		setSession(prev => {
			const byTopic = { ...prev.byTopic };
			const ts = byTopic[activeQuestion.topic] ? { ...byTopic[activeQuestion.topic] } : { total: 0, correct: 0 };
			ts.total += 1;
			if (correct) ts.correct += 1;
			byTopic[activeQuestion.topic] = ts;
			return { ...prev, answered: prev.answered + 1, correct: prev.correct + (correct ? 1 : 0), byTopic };
		});
	}, [isLocked, activeQuestion, recordQuizAnswer]);

	const handleNext = useCallback(() => {
		pickNext();
	}, [pickNext]);

	const handleShowHint = useCallback(() => {
		setHintShown(true);
	}, []);

	const handleBookmark = useCallback(() => {
		if (activeQuestion) toggleBookmark(activeQuestion.id);
	}, [activeQuestion, toggleBookmark]);

	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	// Keyboard shortcuts
	const keyMap = useMemo(() => ({
		'1': (e: KeyboardEvent) => { if (!isLocked) { e.preventDefault(); submitAnswer(0); } },
		'2': (e: KeyboardEvent) => { if (!isLocked) { e.preventDefault(); submitAnswer(1); } },
		'3': (e: KeyboardEvent) => { if (!isLocked) { e.preventDefault(); submitAnswer(2); } },
		'4': (e: KeyboardEvent) => { if (!isLocked) { e.preventDefault(); submitAnswer(3); } },
		'h': (e: KeyboardEvent) => { if (!isLocked && !hintShown) { e.preventDefault(); handleShowHint(); } },
		's': (e: KeyboardEvent) => { if (!isLocked) { e.preventDefault(); handleNext(); } },
		'n': (e: KeyboardEvent) => { if (isLocked) { e.preventDefault(); handleNext(); } },
		'Enter': (e: KeyboardEvent) => { if (isLocked) { e.preventDefault(); handleNext(); } },
		'b': (e: KeyboardEvent) => { e.preventDefault(); handleBookmark(); },
		'Escape': (e: KeyboardEvent) => { e.preventDefault(); handleClose(); },
	}), [isLocked, hintShown, submitAnswer, handleNext, handleShowHint, handleBookmark, handleClose]);

	useHotkeys(keyMap, open);

	if (!open) return null;

	const accuracy = session.answered > 0 ? Math.round((session.correct / session.answered) * 100) : 0;
	const progressText = t.progress
		.replace('{answered}', String(session.answered))
		.replace('{accuracy}', String(accuracy));

	const hintText = activeQuestion?.hint
		? activeQuestion.hint
		: activeQuestion?.explanation
			? extractHintKeywords(activeQuestion.explanation, lang)
			: '';

	const topicEntries = Object.entries(session.byTopic).sort((a, b) => {
		const accA = a[1].total ? a[1].correct / a[1].total : 0;
		const accB = b[1].total ? b[1].correct / b[1].total : 0;
		return accA - accB;
	});

	return (
		<div className="overlay" role="dialog" aria-modal="true" ref={overlayRef}>
			<div className="overlay-backdrop" onClick={handleClose}></div>
			<div className="overlay-container card">
				<div className="overlay-header">
					<h2>{t.title}</h2>
					<button type="button" className="overlay-close" aria-label="Close" onClick={handleClose}>&times;</button>
				</div>
				<div className="overlay-body">
					{activeQuestion ? (
						<>
							<p className="meta">{progressText}</p>
							<div className="quiz-question-row">
								<p className="chip">{activeQuestion.topic}</p>
								<div className="quiz-inline-actions">
									<button
										type="button"
										className="quiz-icon-btn quiz-bookmark"
										aria-label={isBookmarked ? t.bookmarkRemove : t.bookmarkAdd}
										onClick={handleBookmark}
									>
										{isBookmarked ? '\u2665' : '\u2661'}
									</button>
								</div>
							</div>
							<h4>{activeQuestion.prompt}</h4>
							<div className="option-list">
								{activeQuestion.options.map((option, i) => {
									let cls = 'option-btn';
									if (isLocked) {
										if (i === activeQuestion.correctIndex) cls += ' correct';
										else if (i === selectedIndex) cls += ' wrong';
									}
									return (
										<button
											key={`${activeQuestion.id}-${i}`}
											type="button"
											className={cls}
											disabled={isLocked}
											onClick={() => submitAnswer(i)}
											data-tooltip={isLocked ? activeQuestion.optionExplanationsByOption[option] : undefined}
										>
											<span className="option-number">{i + 1}</span>
											{option}
										</button>
									);
								})}
							</div>
							<div className="quiz-actions">
								{!isLocked && !hintShown && (
									<button type="button" className="secondary" onClick={handleShowHint}>
										{t.showHint}
									</button>
								)}
								{!isLocked && (
									<button type="button" className="secondary" onClick={handleNext}>
										{t.skip}
									</button>
								)}
							</div>
							{hintShown && !isLocked && hintText && (
								<p className="hint-box">{hintText}</p>
							)}
							{isLocked && (
								<p className={`feedback ${isCorrect ? 'correct' : 'wrong'}`} aria-live="polite">
									{isCorrect ? t.correct : `${t.wrong} ${activeQuestion.correctText}`}
								</p>
							)}
							{isLocked && activeQuestion.learnRef && (
								<p className="learn-ref">
									<span>{t.learnMore} </span>
									<a href={activeQuestion.learnRef.url} target="_blank" rel="noopener noreferrer">
										{activeQuestion.learnRef.title}
									</a>
								</p>
							)}
							{isLocked && (
								<button type="button" className="primary" onClick={handleNext}>
									{t.nextQuestion}
								</button>
							)}

							{session.answered > 0 && session.answered % 10 === 0 && isLocked && (
								<section className="quiz-summary">
									<h4>{t.summaryTitle}</h4>
									<p className="meta">
										{t.summaryMeta
											.replace('{answered}', String(session.answered))
											.replace('{accuracy}', String(accuracy))
											.replace('{topics}', String(topicEntries.length))}
									</p>
									<div className="quiz-summary-topics">
										{topicEntries.map(([topic, stats]) => (
											<p key={topic}>
												{t.topicLine
													.replace('{topic}', topic)
													.replace('{correct}', String(stats.correct))
													.replace('{total}', String(stats.total))
													.replace('{accuracy}', String(stats.total ? Math.round((stats.correct / stats.total) * 100) : 0))}
											</p>
										))}
									</div>
								</section>
							)}
						</>
					) : (
						<p className="meta">Loading questions…</p>
					)}
					<p className="overlay-shortcut-tip">{t.shortcutTip}</p>
				</div>
			</div>
		</div>
	);
}
