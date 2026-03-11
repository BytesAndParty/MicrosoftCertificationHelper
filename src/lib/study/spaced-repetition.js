import { DEFAULT_SETTINGS, sanitizeSettings } from './settings';

export const DAY = 86400000;

export function getTodayKey(now = Date.now()) {
	return new Date(now).toISOString().slice(0, 10);
}

export function countNewCardsToday(cardStates = {}, today = getTodayKey()) {
	let count = 0;
	for (const id in cardStates) {
		const card = cardStates[id];
		if (card && card.last !== 'new' && card.firstSeenDate === today) count += 1;
	}
	return count;
}

export function selectNextStudyCard(cards, progressById, options = {}) {
	const now = options.now ?? Date.now();
	const newCardsPerDay = Number(options.newCardsPerDay ?? DEFAULT_SETTINGS.newCardsPerDay);
	const today = getTodayKey(now);
	const newSeenToday = countNewCardsToday(progressById, today);
	const canShowNew = newSeenToday < newCardsPerDay;

	const due = cards.filter((card) => {
		const progress = progressById[card.id];
		if (!progress) return canShowNew;
		if (progress.dueAt > now) return false;
		if (progress.last === 'new' && !canShowNew) return false;
		return true;
	});

	const pool = due.length
		? due
		: cards
				.filter((card) => {
					const progress = progressById[card.id];
					if (!progress) return canShowNew;
					return progress.last !== 'new' || canShowNew;
				})
				.sort((left, right) => (progressById[left.id]?.dueAt ?? 0) - (progressById[right.id]?.dueAt ?? 0));

	return pool[0] || null;
}

export function applySpacedRepetitionGrade(progress, grade, settings, now = Date.now()) {
	const safeSettings = sanitizeSettings(settings);
	const next = {
		interval: 1,
		streak: 0,
		dueAt: now,
		last: 'new',
		...(progress || {})
	};

	if (next.last === 'new') {
		next.firstSeenDate = getTodayKey(now);
	}

	if (grade === 'again') {
		next.interval = 1;
		next.streak = 0;
		next.dueAt = now + safeSettings.lapseMinutes * 60 * 1000;
	}
	if (grade === 'good') {
		next.interval = Math.max(1, Math.round(next.interval * safeSettings.goodMultiplier));
		next.streak += 1;
		next.dueAt = now + next.interval * DAY;
	}
	if (grade === 'easy') {
		next.interval = Math.max(2, Math.round(next.interval * safeSettings.easyMultiplier));
		next.streak += 1;
		next.dueAt = now + next.interval * DAY;
	}

	next.last = grade;
	return next;
}
