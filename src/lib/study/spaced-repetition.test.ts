import { describe, expect, it } from 'bun:test';

import { applySpacedRepetitionGrade, countNewCardsToday, getTodayKey, selectNextStudyCard } from './spaced-repetition';

describe('spaced repetition helpers', () => {
	it('counts introduced cards for today', () => {
		const today = getTodayKey(1741104000000);
		const states = {
			a: { last: 'good', firstSeenDate: today },
			b: { last: 'easy', firstSeenDate: today },
			c: { last: 'new' }
		};

		expect(countNewCardsToday(states, today)).toBe(2);
	});

	it('respects daily new card limit when selecting next card', () => {
		const now = 1741104000000;
		const today = getTodayKey(now);
		const cards = [{ id: 'c1' }, { id: 'c2' }];
		const progress = {
			c1: { last: 'new', dueAt: now - 1, interval: 1, streak: 0 },
			c2: { last: 'good', dueAt: now - 1, interval: 2, streak: 1, firstSeenDate: today }
		};

		const selected = selectNextStudyCard(cards, progress, {
			now,
			newCardsPerDay: 1
		});

		expect(selected?.id).toBe('c2');
	});

	it('applies grade transition with configured multipliers', () => {
		const now = 1741104000000;
		const progress = { interval: 2, streak: 1, dueAt: now, last: 'new' };
		const settings = {
			goodMultiplier: 2.5,
			easyMultiplier: 4,
			lapseMinutes: 5
		};

		const good = applySpacedRepetitionGrade(progress, 'good', settings, now);
		expect(good.interval).toBe(5);
		expect(good.streak).toBe(2);
		expect(good.dueAt).toBe(now + 5 * 86400000);
		expect(good.last).toBe('good');

		const again = applySpacedRepetitionGrade(progress, 'again', settings, now);
		expect(again.interval).toBe(1);
		expect(again.streak).toBe(0);
		expect(again.dueAt).toBe(now + 5 * 60 * 1000);
		expect(again.last).toBe('again');
	});
});
