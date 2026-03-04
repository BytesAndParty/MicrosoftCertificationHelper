import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { sanitizeSettings } from './settings';
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
	'hasSeenWelcome'
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

export const useStudyStore = create(
	persist(
		(set) => ({
			...baseState,
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
			hydrateFromLegacy(saved, flashcards, glossaryCards) {
				set(hydrateStudyState(saved, flashcards, glossaryCards));
			},
			resetStudyState() {
				set(createDefaultStudyState());
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
