import { describe, expect, it } from 'bun:test';

import { createDefaultStudyState, hydrateStudyState } from './state';

describe('study state hydration', () => {
	it('creates isolated default state object', () => {
		const stateA = createDefaultStudyState();
		const stateB = createDefaultStudyState();
		stateA.settings.newCardsPerDay = 99;
		expect(stateB.settings.newCardsPerDay).not.toBe(99);
	});

	it('hydrates legacy state and seeds missing card progress', () => {
		const saved = {
			quiz: { answered: 10, correct: 7, byTopic: { NLP: { total: 4, correct: 3 } } },
			settings: { newCardsPerDay: 999, goodMultiplier: 9, easyMultiplier: 0.5, lapseMinutes: 0 },
			flashcards: { f1: { interval: 3, streak: 2, dueAt: 1000, last: 'good' } }
		};

		const flashcards = [{ id: 'f1' }, { id: 'f2' }];
		const glossary = [{ id: 'g1' }];
		const hydrated = hydrateStudyState(saved, flashcards, glossary, 5000);

		expect(hydrated.quiz.answered).toBe(10);
		expect(hydrated.quiz.correct).toBe(7);
		expect(hydrated.settings.newCardsPerDay).toBe(50);
		expect(hydrated.settings.goodMultiplier).toBe(5);
		expect(hydrated.settings.easyMultiplier).toBe(1.5);
		expect(hydrated.settings.lapseMinutes).toBe(1);
		expect(hydrated.flashcards.f1.interval).toBe(3);
		expect(hydrated.flashcards.f2.last).toBe('new');
		expect(hydrated.flashcards.f2.dueAt).toBe(5000);
		expect(hydrated.glossaryFlashcards.g1.last).toBe('new');
	});

	it('supports persisted wrapper format from store middleware', () => {
		const wrapped = {
			state: {
				examBest: 88,
				settings: { newGlossaryPerDay: 42 }
			},
			version: 0
		};

		const hydrated = hydrateStudyState(wrapped, [], []);
		expect(hydrated.examBest).toBe(88);
		expect(hydrated.settings.newGlossaryPerDay).toBe(42);
	});
});
