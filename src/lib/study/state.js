import { DEFAULT_SETTINGS, sanitizeSettings } from './settings';

export const FALLBACK_KEY = 'ai900_state_fallback';

export const DEFAULT_STUDY_STATE = {
	roadmapDone: {},
	quiz: { answered: 0, correct: 0, byTopic: {} },
	wrongJournal: {},
	savedQuestions: {},
	examBest: 0,
	examHistory: [],
	flashcards: {},
	glossaryFlashcards: {},
	settings: { ...DEFAULT_SETTINGS },
	hasSeenWelcome: false
};

export function cloneState(value) {
	return JSON.parse(JSON.stringify(value));
}

export function createDefaultStudyState() {
	return cloneState(DEFAULT_STUDY_STATE);
}

function resolveSavedState(saved) {
	if (!saved || typeof saved !== 'object') return null;
	if ('state' in saved && saved.state && typeof saved.state === 'object') {
		return saved.state;
	}
	return saved;
}

function ensureCardProgress(targetMap, cards, now) {
	for (const card of cards) {
		if (!targetMap[card.id]) {
			targetMap[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
		}
	}
}

export function hydrateStudyState(saved, flashcards = [], glossaryCards = [], now = Date.now()) {
	const state = createDefaultStudyState();
	const source = resolveSavedState(saved);

	if (source) {
		if (source.roadmapDone && typeof source.roadmapDone === 'object') {
			state.roadmapDone = source.roadmapDone;
		}
		if (source.quiz && typeof source.quiz === 'object') {
			state.quiz.answered = Number(source.quiz.answered) || 0;
			state.quiz.correct = Number(source.quiz.correct) || 0;
			state.quiz.byTopic = source.quiz.byTopic && typeof source.quiz.byTopic === 'object' ? source.quiz.byTopic : {};
		}
		if (source.wrongJournal && typeof source.wrongJournal === 'object') {
			state.wrongJournal = source.wrongJournal;
		}
		if (source.savedQuestions && typeof source.savedQuestions === 'object') {
			state.savedQuestions = source.savedQuestions;
		}
		state.examBest = Number(source.examBest) || 0;
		state.examHistory = Array.isArray(source.examHistory) ? source.examHistory.slice(0, 15) : [];
		state.flashcards = source.flashcards && typeof source.flashcards === 'object' ? source.flashcards : {};
		state.glossaryFlashcards = source.glossaryFlashcards && typeof source.glossaryFlashcards === 'object' ? source.glossaryFlashcards : {};
		state.settings = sanitizeSettings(source.settings);
		state.hasSeenWelcome = source.hasSeenWelcome === true;
	}

	ensureCardProgress(state.flashcards, flashcards, now);
	ensureCardProgress(state.glossaryFlashcards, glossaryCards, now);

	return state;
}
