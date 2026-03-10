import { describe, expect, it, beforeEach } from 'bun:test';

import { computeReadiness } from './store';
import { createDefaultStudyState } from './state';

describe('computeReadiness', () => {
	it('returns zero when no data exists', () => {
		const state = createDefaultStudyState();
		const result = computeReadiness(state, 50);
		expect(result.score).toBe(0);
		expect(result.quizAccuracy).toBe(0);
		expect(result.mastered).toBe(0);
	});

	it('computes readiness from quiz and exam data', () => {
		const state = createDefaultStudyState();
		state.quiz = {
			answered: 20,
			correct: 16,
			byTopic: {
				'AI Workloads': { total: 10, correct: 8 },
				'NLP': { total: 10, correct: 8 }
			},
			correctByQuestion: { q1: 2, q2: 1, q3: 3, q4: 1, q5: 1 }
		};
		state.examBest = 85;
		state.examHistory = [{ at: Date.now(), score: 85, correct: 8, total: 10 }];

		const result = computeReadiness(state, 20);
		expect(result.score).toBeGreaterThan(0);
		expect(result.quizAccuracy).toBe(80);
		expect(result.examSignal).toBe(85);
		expect(result.mastered).toBe(5);
		expect(result.totalQuestions).toBe(20);
		expect(result.masteryCoverage).toBe(25);
	});

	it('uses quiz accuracy as exam signal when no exam data', () => {
		const state = createDefaultStudyState();
		state.quiz = {
			answered: 10,
			correct: 9,
			byTopic: { 'ML': { total: 10, correct: 9 } },
			correctByQuestion: { q1: 1 }
		};
		const result = computeReadiness(state, 10);
		expect(result.examSignal).toBe(90);
	});

	it('caps score at 100', () => {
		const state = createDefaultStudyState();
		state.quiz = {
			answered: 50,
			correct: 50,
			byTopic: { A: { total: 50, correct: 50 } },
			correctByQuestion: {}
		};
		for (let i = 0; i < 50; i++) state.quiz.correctByQuestion[`q${i}`] = 3;
		state.examBest = 100;
		state.examHistory = [{ at: Date.now(), score: 100, correct: 10, total: 10 }];

		const result = computeReadiness(state, 50);
		expect(result.score).toBeLessThanOrEqual(100);
		expect(result.score).toBeGreaterThan(0);
	});
});

describe('store action shapes', () => {
	// These tests verify the store module exports correctly.
	// Full integration tests for Zustand actions would require DOM/localStorage mocking.

	it('exports useStudyStore', async () => {
		const { useStudyStore } = await import('./store');
		expect(typeof useStudyStore).toBe('function');
		expect(typeof useStudyStore.getState).toBe('function');
	});

	it('store has all expected actions', async () => {
		const { useStudyStore } = await import('./store');
		const state = useStudyStore.getState();
		const expectedActions = [
			'setActiveMode', 'setLanguage',
			'trackDailyActivity', 'rateFlashcard', 'rateGlossaryCard',
			'recordQuizAnswer', 'toggleBookmark', 'setSavedQuestions', 'setQuizStats',
			'recordExamResult', 'recordExamFinish',
			'setWrongJournal', 'initializeCardProgress',
			'setHasSeenWelcome', 'updateSettings',
			'hydrateFromLegacy', 'resetStudyState'
		];
		for (const action of expectedActions) {
			expect(typeof state[action]).toBe('function');
		}
	});

	it('recordQuizAnswer updates quiz stats immutably', async () => {
		const { useStudyStore } = await import('./store');
		const before = useStudyStore.getState();
		const prevAnswered = Number(before.quiz?.answered) || 0;
		useStudyStore.getState().recordQuizAnswer('q1', 'ML', true);
		const after = useStudyStore.getState();
		expect(after.quiz.answered).toBe(prevAnswered + 1);
		expect(after.quiz.correct).toBe((Number(before.quiz?.correct) || 0) + 1);
		expect(after.quiz.byTopic.ML.total).toBeGreaterThanOrEqual(1);
	});

	it('toggleBookmark adds and removes bookmarks', async () => {
		const { useStudyStore } = await import('./store');
		useStudyStore.getState().toggleBookmark('q42');
		expect(useStudyStore.getState().savedQuestions.q42).toBeDefined();
		useStudyStore.getState().toggleBookmark('q42');
		expect(useStudyStore.getState().savedQuestions.q42).toBeUndefined();
	});

	it('recordExamResult updates examBest and history', async () => {
		const { useStudyStore } = await import('./store');
		useStudyStore.getState().recordExamResult(92, 9, 10);
		const after = useStudyStore.getState();
		expect(after.examBest).toBeGreaterThanOrEqual(92);
		expect(after.examHistory.length).toBeGreaterThanOrEqual(1);
		expect(after.examHistory[0].score).toBe(92);
	});

	it('trackDailyActivity increments daily counters', async () => {
		const { useStudyStore } = await import('./store');
		const today = new Date().toISOString().slice(0, 10);
		useStudyStore.getState().trackDailyActivity({ answered: 3, correct: 2 });
		const daily = useStudyStore.getState().historyDaily[today];
		expect(daily).toBeDefined();
		expect(daily.answered).toBeGreaterThanOrEqual(3);
		expect(daily.correct).toBeGreaterThanOrEqual(2);
	});
});
