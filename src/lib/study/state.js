import { DEFAULT_SETTINGS, sanitizeSettings } from './settings';

export const FALLBACK_KEY = 'ai900_state_fallback';

export const DEFAULT_STUDY_STATE = {
	roadmapDone: {},
	quiz: { answered: 0, correct: 0, byTopic: {} },
	wrongJournal: {},
	savedQuestions: {},
	sessionGoal: {
		preset: '',
		startedAt: 0,
		durationMinutes: 0,
		targetAnswers: 0,
		targetAccuracy: 0,
		answeredStart: 0,
		correctStart: 0,
		completedAt: 0,
		failedAt: 0
	},
	historyDaily: {},
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
			if (source.sessionGoal && typeof source.sessionGoal === 'object') {
				state.sessionGoal = {
					...state.sessionGoal,
					...source.sessionGoal
				};
				state.sessionGoal.startedAt = Number(state.sessionGoal.startedAt) || 0;
				state.sessionGoal.durationMinutes = Number(state.sessionGoal.durationMinutes) || 0;
				state.sessionGoal.targetAnswers = Number(state.sessionGoal.targetAnswers) || 0;
				state.sessionGoal.targetAccuracy = Number(state.sessionGoal.targetAccuracy) || 0;
				state.sessionGoal.answeredStart = Number(state.sessionGoal.answeredStart) || 0;
				state.sessionGoal.correctStart = Number(state.sessionGoal.correctStart) || 0;
				state.sessionGoal.completedAt = Number(state.sessionGoal.completedAt) || 0;
				state.sessionGoal.failedAt = Number(state.sessionGoal.failedAt) || 0;
			}
			if (source.historyDaily && typeof source.historyDaily === 'object') {
				state.historyDaily = source.historyDaily;
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
