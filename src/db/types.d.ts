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

declare module '@/db/quiz-questions' {
	export const quizQuestions: QuizQuestion[];
}
