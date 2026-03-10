import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { sanitizeSettings, DEFAULT_SETTINGS } from './settings';
import { applySpacedRepetitionGrade } from './spaced-repetition';
import { createDefaultStudyState, FALLBACK_KEY, hydrateStudyState } from './state';

const baseState = createDefaultStudyState();

const STORAGE_KEYS = [
	'roadmapDone',
	'quiz',
	'wrongJournal',
	'savedQuestions',
	'examBest',
	'examHistory',
	'flashcards',
	'glossaryFlashcards',
	'settings',
	'hasSeenWelcome',
	'historyDaily'
];

const legacyCompatibleStorage = {
	getItem(name) {
		if (typeof window === 'undefined') return null;
		const raw = window.localStorage.getItem(name);
		if (!raw) return null;
		try {
			const parsed = JSON.parse(raw);
			if (parsed && typeof parsed === 'object' && 'state' in parsed && 'version' in parsed) {
				return parsed;
			}
			return { state: parsed, version: 0 };
		} catch {
			return null;
		}
	},
	setItem(name, value) {
		if (typeof window === 'undefined') return;
		const plain = value && typeof value === 'object' && 'state' in value ? value.state : value;
		window.localStorage.setItem(name, JSON.stringify(plain));
	},
	removeItem(name) {
		if (typeof window === 'undefined') return;
		window.localStorage.removeItem(name);
	}
};

function mergePersistedState(currentState, persisted) {
	const loaded = persisted && typeof persisted === 'object' && 'state' in persisted ? persisted.state : persisted;
	if (!loaded || typeof loaded !== 'object') return currentState;

	return {
		...currentState,
		...loaded,
		quiz: {
			...currentState.quiz,
			...(loaded.quiz && typeof loaded.quiz === 'object' ? loaded.quiz : {}),
			byTopic: loaded.quiz?.byTopic && typeof loaded.quiz.byTopic === 'object' ? loaded.quiz.byTopic : {}
		},
		settings: sanitizeSettings(loaded.settings),
		hasSeenWelcome: loaded.hasSeenWelcome === true
	};
}

/* ---- Date helper ---- */
function toDateKey(timestamp = Date.now()) {
	const d = new Date(timestamp);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export const useStudyStore = create(
	persist(
		(set, get) => ({
			...baseState,

			/* ---- Runtime UI state (not persisted) ---- */
			activeMode: null,
			language: 'en',

			setActiveMode(mode) {
				set({ activeMode: mode || null });
			},
			setLanguage(lang) {
				set({ language: lang === 'de' ? 'de' : 'en' });
			},

			/* ---- Daily history tracking ---- */
			trackDailyActivity({ answered = 0, correct = 0, reviews = 0, at = Date.now() } = {}) {
				set((s) => {
					const key = toDateKey(at);
					const daily = { ...(s.historyDaily || {}) };
					const day = daily[key] ? { ...daily[key] } : { answered: 0, correct: 0, reviews: 0 };
					day.answered = (Number(day.answered) || 0) + answered;
					day.correct = (Number(day.correct) || 0) + correct;
					day.reviews = (Number(day.reviews) || 0) + reviews;
					daily[key] = day;
					return { historyDaily: daily };
				});
			},

			/* ---- Flashcard actions ---- */
			rateFlashcard(cardId, grade) {
				set((s) => {
					const progress = s.flashcards[cardId];
					if (!progress) return s;
					const key = toDateKey();
					const daily = { ...(s.historyDaily || {}) };
					const day = daily[key] ? { ...daily[key] } : { answered: 0, correct: 0, reviews: 0 };
					day.reviews = (Number(day.reviews) || 0) + 1;
					daily[key] = day;
					return {
						flashcards: {
							...s.flashcards,
							[cardId]: applySpacedRepetitionGrade(progress, grade, s.settings)
						},
						historyDaily: daily
					};
				});
			},

			/* ---- Quiz actions ---- */
			setSavedQuestions(saved) {
				set({ savedQuestions: saved || {} });
			},
			setQuizStats(quiz) {
				set({ quiz: quiz && typeof quiz === 'object' ? quiz : {} });
			},
			recordQuizAnswer(questionId, topic, isCorrect) {
				set((s) => {
					const quiz = {
						answered: (Number(s.quiz?.answered) || 0) + 1,
						correct: (Number(s.quiz?.correct) || 0) + (isCorrect ? 1 : 0),
						byTopic: { ...(s.quiz?.byTopic || {}) },
						correctByQuestion: { ...(s.quiz?.correctByQuestion || {}) }
					};
					const topicStats = quiz.byTopic[topic]
						? { ...quiz.byTopic[topic] }
						: { total: 0, correct: 0 };
					topicStats.total = (Number(topicStats.total) || 0) + 1;
					if (isCorrect) topicStats.correct = (Number(topicStats.correct) || 0) + 1;
					quiz.byTopic[topic] = topicStats;

					if (isCorrect) {
						quiz.correctByQuestion[questionId] = (Number(quiz.correctByQuestion[questionId]) || 0) + 1;
					}

					const wrongJournal = { ...(s.wrongJournal || {}) };
					if (!isCorrect) {
						const entry = wrongJournal[questionId]
							? { ...wrongJournal[questionId] }
							: { count: 0, lastWrongAt: 0 };
						entry.count += 1;
						entry.lastWrongAt = Date.now();
						wrongJournal[questionId] = entry;
					}

					const key = toDateKey();
					const daily = { ...(s.historyDaily || {}) };
					const day = daily[key] ? { ...daily[key] } : { answered: 0, correct: 0, reviews: 0 };
					day.answered = (Number(day.answered) || 0) + 1;
					if (isCorrect) day.correct = (Number(day.correct) || 0) + 1;
					daily[key] = day;

					return { quiz, wrongJournal, historyDaily: daily };
				});
			},
			toggleBookmark(questionId) {
				set((s) => {
					const saved = { ...(s.savedQuestions || {}) };
					if (saved[questionId]) {
						delete saved[questionId];
					} else {
						saved[questionId] = { savedAt: Date.now() };
					}
					return { savedQuestions: saved };
				});
			},

			/* ---- Journal actions ---- */
			setWrongJournal(journal) {
				set({ wrongJournal: journal || {} });
			},

			/* ---- Exam actions ---- */
			recordExamResult(score, correct, total) {
				set((s) => {
					const history = [
						{ at: Date.now(), score, correct, total },
						...(Array.isArray(s.examHistory) ? s.examHistory : [])
					].slice(0, 15);
					return {
						examBest: Math.max(s.examBest || 0, score),
						examHistory: history
					};
				});
			},
			recordExamFinish({ answered = 0, correct = 0, wrongRows = [] } = {}) {
				set((s) => {
					const key = toDateKey();
					const daily = { ...(s.historyDaily || {}) };
					const day = daily[key] ? { ...daily[key] } : { answered: 0, correct: 0, reviews: 0 };
					day.answered = (Number(day.answered) || 0) + answered;
					day.correct = (Number(day.correct) || 0) + correct;
					daily[key] = day;

					const wrongJournal = { ...(s.wrongJournal || {}) };
					const now = Date.now();
					wrongRows.forEach(({ questionId }) => {
						if (!questionId) return;
						const entry = wrongJournal[questionId]
							? { ...wrongJournal[questionId] }
							: { count: 0, lastWrongAt: 0 };
						entry.count += 1;
						entry.lastWrongAt = now;
						wrongJournal[questionId] = entry;
					});

					return { historyDaily: daily, wrongJournal };
				});
			},

			/* ---- Glossary actions ---- */
			rateGlossaryCard(cardId, grade) {
				set((s) => {
					const progress = s.glossaryFlashcards[cardId];
					if (!progress) return s;
					const key = toDateKey();
					const daily = { ...(s.historyDaily || {}) };
					const day = daily[key] ? { ...daily[key] } : { answered: 0, correct: 0, reviews: 0 };
					day.reviews = (Number(day.reviews) || 0) + 1;
					daily[key] = day;
					return {
						glossaryFlashcards: {
							...s.glossaryFlashcards,
							[cardId]: applySpacedRepetitionGrade(progress, grade, s.settings)
						},
						historyDaily: daily
					};
				});
			},

			/* ---- Card initialization ---- */
			initializeCardProgress(flashcardsList, glossaryCardsList) {
				set((s) => {
					const now = Date.now();
					const flashcards = { ...s.flashcards };
					const glossaryFlashcards = { ...s.glossaryFlashcards };
					let changed = false;
					for (const card of flashcardsList) {
						if (!flashcards[card.id]) {
							flashcards[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
							changed = true;
						}
					}
					for (const card of glossaryCardsList) {
						if (!glossaryFlashcards[card.id]) {
							glossaryFlashcards[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
							changed = true;
						}
					}
					return changed ? { flashcards, glossaryFlashcards } : {};
				});
			},

			/* ---- Persisted state actions ---- */
			setHasSeenWelcome(value) {
				set({ hasSeenWelcome: Boolean(value) });
			},
			updateSettings(partialSettings) {
				set((state) => ({
					settings: sanitizeSettings({
						...state.settings,
						...(partialSettings || {})
					})
				}));
			},
			hydrateFromLegacy(saved, flashcardsList, glossaryCardsList) {
				set(hydrateStudyState(saved, flashcardsList, glossaryCardsList));
			},
			resetStudyState(flashcardsList = [], glossaryCardsList = []) {
				const fresh = createDefaultStudyState();
				const now = Date.now();
				for (const card of flashcardsList) {
					fresh.flashcards[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
				}
				for (const card of glossaryCardsList) {
					fresh.glossaryFlashcards[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
				}
				set(fresh);
			}
		}),
		{
			name: FALLBACK_KEY,
			storage: legacyCompatibleStorage,
			partialize: (state) =>
				STORAGE_KEYS.reduce((acc, key) => {
					acc[key] = state[key];
					return acc;
				}, {}),
			merge: (persisted, current) => mergePersistedState(current, persisted)
		}
	)
);

/* ---- Readiness computation (pure function, reads from store snapshot) ---- */
export function computeReadiness(storeState, totalQuestions = 0) {
	const quiz = storeState.quiz || {};
	const answered = Number(quiz.answered) || 0;
	const correct = Number(quiz.correct) || 0;
	const quizAccuracy = answered ? Math.round((correct / answered) * 100) : 0;

	const masteredMap = quiz.correctByQuestion && typeof quiz.correctByQuestion === 'object'
		? quiz.correctByQuestion : {};
	const mastered = Object.values(masteredMap).reduce((c, v) => c + (Number(v) > 0 ? 1 : 0), 0);
	const total = totalQuestions || mastered;
	const masteryCoverage = total ? Math.round((mastered / total) * 100) : 0;

	const hasExamData = (Array.isArray(storeState.examHistory) && storeState.examHistory.length > 0) || (storeState.examBest || 0) > 0;
	const examSignal = hasExamData
		? Math.max(0, Math.min(100, Number(storeState.examBest) || 0))
		: Math.max(0, Math.min(100, quizAccuracy));

	const byTopic = quiz.byTopic || {};
	const practicedTopics = Object.values(byTopic).filter(v => (Number(v.total) || 0) >= 1).length;
	const allTopicCount = Object.keys(byTopic).length || 1;
	const topicCoverage = Math.round((practicedTopics / allTopicCount) * 100);

	const baseReadiness = Math.round((quizAccuracy * 0.4) + (examSignal * 0.35) + (topicCoverage * 0.25));
	const confidenceFactor = masteryCoverage / 100;
	const readiness = total > 0 ? Math.round(baseReadiness * confidenceFactor) : 0;
	const score = Math.max(0, Math.min(100, readiness));

	return { score, quizAccuracy, examSignal, mastered, totalQuestions: total, masteryCoverage };
}
