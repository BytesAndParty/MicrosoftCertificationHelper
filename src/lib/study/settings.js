export const DEFAULT_SETTINGS = {
	newCardsPerDay: 20,
	newGlossaryPerDay: 10,
	maxReviewsPerDay: 100,
	goodMultiplier: 2.0,
	easyMultiplier: 3.0,
	lapseMinutes: 10,
	aiChatEnabled: false,
	aiProvider: 'azure-openai',
	aiEndpoint: '',
	aiDeployment: 'gpt-5.2',
	aiApiVersion: '2024-12-01-preview',
	aiApiKey: ''
};

export function clampInt(value, min, max) {
	return Math.max(min, Math.min(max, Math.round(Number(value) || min)));
}

export function clampFloat(value, min, max) {
	const num = Number(value);
	return Math.max(min, Math.min(max, Number.isFinite(num) ? Math.round(num * 10) / 10 : min));
}

function sanitizeText(value, fallback = '', maxLength = 400) {
	if (typeof value !== 'string') return fallback;
	return value.trim().slice(0, maxLength);
}

export function sanitizeSettings(raw = {}) {
	const provider = sanitizeText(raw.aiProvider, DEFAULT_SETTINGS.aiProvider, 40).toLowerCase();

	return {
		newCardsPerDay: clampInt(raw.newCardsPerDay ?? DEFAULT_SETTINGS.newCardsPerDay, 1, 50),
		newGlossaryPerDay: clampInt(raw.newGlossaryPerDay ?? DEFAULT_SETTINGS.newGlossaryPerDay, 1, 70),
		maxReviewsPerDay: clampInt(raw.maxReviewsPerDay ?? DEFAULT_SETTINGS.maxReviewsPerDay, 10, 500),
		goodMultiplier: clampFloat(raw.goodMultiplier ?? DEFAULT_SETTINGS.goodMultiplier, 1.0, 5.0),
		easyMultiplier: clampFloat(raw.easyMultiplier ?? DEFAULT_SETTINGS.easyMultiplier, 1.5, 7.0),
		lapseMinutes: clampInt(raw.lapseMinutes ?? DEFAULT_SETTINGS.lapseMinutes, 1, 60),
		aiChatEnabled: Boolean(raw.aiChatEnabled),
		aiProvider: provider === 'azure-openai' ? 'azure-openai' : DEFAULT_SETTINGS.aiProvider,
		aiEndpoint: sanitizeText(raw.aiEndpoint, DEFAULT_SETTINGS.aiEndpoint, 250),
		aiDeployment: sanitizeText(raw.aiDeployment, DEFAULT_SETTINGS.aiDeployment, 120),
		aiApiVersion: sanitizeText(raw.aiApiVersion, DEFAULT_SETTINGS.aiApiVersion, 80),
		aiApiKey: sanitizeText(raw.aiApiKey, DEFAULT_SETTINGS.aiApiKey, 300)
	};
}
