export type QuestionType = 'single-choice' | 'multi-choice' | 'true-false';

export interface QuizOption {
  /** A stable, unique identifier for the option (e.g., 'opt-1') */
  id: string;
  text: string;
  textDe: string;
  isCorrect: boolean;
  /** Specific feedback if this option is chosen */
  explanation: string;
  explanationDe: string;
}

export interface LearnRef {
  title: string;
  url: string;
}

export interface QuizQuestion {
  id: string;
  certId: string;
  topic: string;
  type: QuestionType;
  prompt: string;
  promptDe: string;
  hint: string;
  hintDe: string;
  /** 
   * A pool of potential options. 
   * For single/multi-choice, this should contain both correct answers and distractors.
   * Target: 6-8 distractors for better shuffling.
   */
  options: QuizOption[];
  /** Overall explanation shown after the answer is revealed */
  explanation: string;
  explanationDe: string;
  learnRef: LearnRef;
  learnRefDe: LearnRef;
}
