export const DEFAULT_SETTINGS = {
	newCardsPerDay: 20,
	newGlossaryPerDay: 10,
	maxReviewsPerDay: 100,
	goodMultiplier: 2.0,
	easyMultiplier: 3.0,
	lapseMinutes: 10
};

export function clampInt(value, min, max) {
	return Math.max(min, Math.min(max, Math.round(Number(value) || min)));
}

export function clampFloat(value, min, max) {
	const num = Number(value);
	return Math.max(min, Math.min(max, Number.isFinite(num) ? Math.round(num * 10) / 10 : min));
}

export function sanitizeSettings(raw = {}) {
	return {
		newCardsPerDay: clampInt(raw.newCardsPerDay ?? DEFAULT_SETTINGS.newCardsPerDay, 1, 50),
		newGlossaryPerDay: clampInt(raw.newGlossaryPerDay ?? DEFAULT_SETTINGS.newGlossaryPerDay, 1, 70),
		maxReviewsPerDay: clampInt(raw.maxReviewsPerDay ?? DEFAULT_SETTINGS.maxReviewsPerDay, 10, 500),
		goodMultiplier: clampFloat(raw.goodMultiplier ?? DEFAULT_SETTINGS.goodMultiplier, 1.0, 5.0),
		easyMultiplier: clampFloat(raw.easyMultiplier ?? DEFAULT_SETTINGS.easyMultiplier, 1.5, 7.0),
		lapseMinutes: clampInt(raw.lapseMinutes ?? DEFAULT_SETTINGS.lapseMinutes, 1, 60)
	};
}
