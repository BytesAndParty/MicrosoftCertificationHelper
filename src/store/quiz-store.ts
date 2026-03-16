import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { db } from '@/db/schema';
import { QuizQuestion, QuizOption } from '@/types/quiz';
import { shuffle } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AnswerRecord {
	/** Array of selected option IDs (supports multi-choice) */
	selectedOptionIds: string[];
	correct: boolean;
	timestamp: number;
}

/** Maps question ID → current display state (selected options, shuffled display order). */
interface SessionQuestion {
	id: string;
	/** Display order of QuizOption objects */
	displayOptions: QuizOption[];
	/** Currently selected IDs in the UI */
	selectedIds: string[];
}

type QuizMode = 'all' | 'topic' | 'incorrect';

interface QuizState {
	/* --- Session (not persisted) --- */
	mode: QuizMode | null;
	activeTopic: string | null;
	pool: SessionQuestion[];
	currentIndex: number;
	isRevealed: boolean;
	showHint: boolean;
	isLoading: boolean;

	/* --- Persistent progress --- */
	answers: Record<string, AnswerRecord>;

	/* --- Derived helpers --- */
	currentQuestion: () => Promise<QuizQuestion | null>;
	currentSession: () => SessionQuestion | null;
	progressPercent: (totalQuestions: number) => number;
	isSessionActive: () => boolean;

	/* --- Actions --- */
	startQuiz: (mode: QuizMode, topic?: string) => Promise<void>;
	toggleOption: (optionId: string) => void;
	revealAnswer: () => void;
	nextQuestion: () => void;
	previousQuestion: () => void;
	toggleHint: () => void;
	endSession: () => void;
	resetProgress: () => void;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Prepares a question for the session:
 * - Selects all correct answers.
 * - Picks a random subset (up to 3) of distractors.
 * - Shuffles them for display.
 */
function prepareQuestion(q: QuizQuestion): SessionQuestion {
	const correct = q.options.filter((o) => o.isCorrect);
	const distractors = shuffle(q.options.filter((o) => !o.isCorrect)).slice(0, 3);
	
	return {
		id: q.id,
		displayOptions: shuffle([...correct, ...distractors]),
		selectedIds: [],
	};
}

/* ------------------------------------------------------------------ */
/*  Store                                                              */
/* ------------------------------------------------------------------ */

export const useQuizStore = create<QuizState>()(
	persist(
		(set, get) => ({
			/* Session state */
			mode: null,
			activeTopic: null,
			pool: [],
			currentIndex: 0,
			isRevealed: false,
			showHint: false,
			isLoading: false,

			/* Persistent */
			answers: {},

			/* Derived */
			currentQuestion: async () => {
				const { pool, currentIndex } = get();
				const entry = pool[currentIndex];
				if (!entry) return null;
				return (await db.questions.get(entry.id)) ?? null;
			},

			currentSession: () => {
				const { pool, currentIndex } = get();
				return pool[currentIndex] ?? null;
			},

			progressPercent: (totalQuestions) => {
				const { answers } = get();
				const correctCount = Object.values(answers).filter((r) => r.correct).length;
				return totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
			},

			isSessionActive: () => get().pool.length > 0,

			/* Actions */
			startQuiz: async (mode, topic) => {
				set({ isLoading: true });
				const { answers } = get();
				let questions: QuizQuestion[] = [];

				if (mode === 'topic' && topic) {
					questions = await db.questions.where('topic').equals(topic).toArray();
				} else if (mode === 'incorrect') {
					const all = await db.questions.toArray();
					questions = all.filter((q) => {
						const r = answers[q.id];
						return !r || !r.correct;
					});
				} else {
					questions = await db.questions.toArray();
				}

				set({
					mode,
					activeTopic: topic ?? null,
					pool: shuffle(questions).map(prepareQuestion),
					currentIndex: 0,
					isRevealed: false,
					showHint: false,
					isLoading: false,
				});
			},

			toggleOption: (optionId) => {
				const { isRevealed, pool, currentIndex } = get();
				if (isRevealed) return;

				const newPool = [...pool];
				const session = newPool[currentIndex];
				if (!session) return;

				const qPromise = db.questions.get(session.id);
				
				// We need to know the type to decide if we toggle or replace
				qPromise.then(q => {
					if (!q) return;
					
					let nextSelected: string[];
					if (q.type === 'multi-choice') {
						const exists = session.selectedIds.includes(optionId);
						nextSelected = exists 
							? session.selectedIds.filter(id => id !== optionId)
							: [...session.selectedIds, optionId];
					} else {
						// single-choice or true-false: replace
						nextSelected = [optionId];
					}

					session.selectedIds = nextSelected;
					set({ pool: newPool });
				});
			},

			revealAnswer: async () => {
				const { pool, currentIndex, answers } = get();
				const session = pool[currentIndex];
				if (!session || session.selectedIds.length === 0) return;

				const question = await db.questions.get(session.id);
				if (!question) return;

				const correctIds = question.options
					.filter(o => o.isCorrect)
					.map(o => o.id);

				// For multi-choice: all correct must be selected, and NO incorrect must be selected
				const isCorrect = 
					correctIds.length === session.selectedIds.length &&
					correctIds.every(id => session.selectedIds.includes(id));

				set({
					isRevealed: true,
					answers: {
						...answers,
						[session.id]: {
							selectedOptionIds: session.selectedIds,
							correct: isCorrect,
							timestamp: Date.now(),
						},
					},
				});
			},

			nextQuestion: () => {
				const { currentIndex, pool } = get();
				if (currentIndex < pool.length - 1) {
					set({
						currentIndex: currentIndex + 1,
						isRevealed: false,
						showHint: false,
					});
				}
			},

			previousQuestion: () => {
				const { currentIndex } = get();
				if (currentIndex > 0) {
					set({
						currentIndex: currentIndex - 1,
						isRevealed: false,
						showHint: false,
					});
				}
			},

			toggleHint: () => set((s) => ({ showHint: !s.showHint })),

			endSession: () =>
				set({
					mode: null,
					activeTopic: null,
					pool: [],
					currentIndex: 0,
					isRevealed: false,
					showHint: false,
				}),

			resetProgress: () => set({ answers: {} }),
		}),
		{
			name: 'quiz-progress',
			partialize: (state) => ({ answers: state.answers }),
		},
	),
);
