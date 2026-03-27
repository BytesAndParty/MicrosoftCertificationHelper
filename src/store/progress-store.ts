import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CardAttempt {
	correct: boolean;
	usedHint: boolean;
	timestamp: number;
}

interface CardProgress {
	cardId: string;
	topic: string;
	attempts: CardAttempt[];
	/** True once answered correctly at least once WITHOUT a hint */
	mastered: boolean;
}

interface TopicStats {
	topic: string;
	total: number;
	mastered: number;
	attempted: number;
	percent: number;
}

interface ProgressState {
	cards: Record<string, CardProgress>;

	/** Record an answer attempt for a card */
	recordAttempt: (cardId: string, topic: string, correct: boolean, usedHint: boolean) => void;

	/** Get stats for a single card */
	getCardStats: (cardId: string) => CardProgress | undefined;

	/** Get aggregated stats per topic */
	getTopicStats: (allCards: { id: string; topic: string }[]) => TopicStats[];

	/** Overall mastered percentage (cards mastered / total cards) */
	getOverallPercent: (totalCards: number) => number;

	/** Total number of mastered cards */
	getMasteredCount: () => number;

	/** Reset all progress */
	reset: () => void;
}

export const useProgressStore = create<ProgressState>()(
	persist(
		(set, get) => ({
			cards: {},

			recordAttempt: (cardId, topic, correct, usedHint) => {
				set((state) => {
					const existing = state.cards[cardId] ?? {
						cardId,
						topic,
						attempts: [],
						mastered: false,
					};

					const attempt: CardAttempt = {
						correct,
						usedHint,
						timestamp: Date.now(),
					};

					const attempts = [...existing.attempts, attempt];

					// Mastered = at least one correct answer WITHOUT hint
					const mastered =
						existing.mastered || (correct && !usedHint);

					return {
						cards: {
							...state.cards,
							[cardId]: { cardId, topic, attempts, mastered },
						},
					};
				});
			},

			getCardStats: (cardId) => get().cards[cardId],

			getTopicStats: (allCards) => {
				const { cards } = get();
				const topicMap = new Map<string, { total: number; mastered: number; attempted: number }>();

				for (const card of allCards) {
					const entry = topicMap.get(card.topic) ?? { total: 0, mastered: 0, attempted: 0 };
					entry.total++;

					const progress = cards[card.id];
					if (progress) {
						entry.attempted++;
						if (progress.mastered) entry.mastered++;
					}

					topicMap.set(card.topic, entry);
				}

				return Array.from(topicMap.entries()).map(([topic, stats]) => ({
					topic,
					...stats,
					percent: stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0,
				}));
			},

			getOverallPercent: (totalCards) => {
				const masteredCount = get().getMasteredCount();
				return totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;
			},

			getMasteredCount: () => {
				return Object.values(get().cards).filter((c) => c.mastered).length;
			},

			reset: () => set({ cards: {} }),
		}),
		{ name: 'ai900-progress' },
	),
);
