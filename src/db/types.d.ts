/** Type declarations for JS data modules in src/db/ */

interface QuizOption {
	true?: string;
	false?: string;
	wahr?: string;
	falsch?: string;
}

interface LearnRef {
	title: string;
	url: string;
}

interface QuizQuestion {
	id: string;
	topic: string;
	prompt: string;
	hint: string;
	options: string[];
	optionExplanations: string[] | QuizOption;
	answerIndex: number;
	explanation: string;
	promptDe: string;
	hintDe: string;
	explanationDe: string;
	optionsDe: string[];
	optionExplanationsDe: string[] | QuizOption;
	learnRef: LearnRef;
	learnRefDe: LearnRef;
	type?: 'truefalse';
	correctAnswer?: string;
	correctAnswerDe?: string;
}

interface Flashcard {
	id: string;
	topic: string;
	front: string;
	back: string;
	frontDe: string;
	backDe: string;
}

interface GlossaryTerm {
	term: string;
	definition: string;
	definitionDe: string;
}

interface RoadmapTheme {
	id: string;
	title: string;
	titleDe: string;
	goal: string;
	goalDe: string;
	todos: string[];
	todosDe: string[];
}

declare module '@/db/quiz-questions' {
	export const quizQuestions: QuizQuestion[];
}

declare module '@/db/flashcards' {
	export const flashcards: Flashcard[];
}

declare module '@/db/glossary-terms' {
	export const glossaryTerms: GlossaryTerm[];
}

declare module '@/db/roadmap-themes' {
	export const roadmapThemes: RoadmapTheme[];
}
