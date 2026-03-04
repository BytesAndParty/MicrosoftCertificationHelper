import { describe, expect, it } from 'bun:test';

import { buildOptionPools, createRuntimeQuestion, localizeQuestionData } from './quiz';

const baseQuestions = [
	{
		id: 'q1',
		topic: 'AI Workloads',
		type: 'single-choice',
		prompt: 'Which service is used for translation?',
		promptDe: 'Welcher Dienst wird für Übersetzung verwendet?',
		hint: 'Language feature',
		hintDe: 'Sprachfunktion',
		explanation: 'Translator is part of Azure AI Language.',
		explanationDe: 'Translator ist Teil von Azure AI Language.',
		options: ['Vision', 'Speech', 'Translator', 'Form Recognizer'],
		optionsDe: ['Vision', 'Speech', 'Translator', 'Form Recognizer'],
		answerIndex: 2,
		wrongOptions: ['Anomaly Detector'],
		wrongOptionsDe: ['Anomaly Detector']
	},
	{
		id: 'q2',
		topic: 'AI Workloads',
		type: 'true-false',
		prompt: 'Knowledge mining extracts insights from unstructured data.',
		correctAnswer: 'true'
	}
];

describe('quiz domain helpers', () => {
	it('localizes question fields by language with fallback', () => {
		const localized = localizeQuestionData(baseQuestions[0], 'de');
		expect(localized.prompt).toBe('Welcher Dienst wird für Übersetzung verwendet?');
		expect(localized.hint).toBe('Sprachfunktion');
		expect(localized.explanation).toBe('Translator ist Teil von Azure AI Language.');
	});

	it('builds runtime single-choice question with distractors and correct index', () => {
		const optionPoolsByLanguage = {
			en: buildOptionPools(baseQuestions, 'en')
		};
		const runtimeQuestion = createRuntimeQuestion(baseQuestions[0], {
			language: 'en',
			optionPoolsByLanguage,
			getTypeLabel: (type) => type,
			shuffleFn: (items) => items
		});

		expect(runtimeQuestion.options.length).toBe(4);
		expect(runtimeQuestion.correctText).toBe('Translator');
		expect(runtimeQuestion.options[runtimeQuestion.correctIndex]).toBe('Translator');
		expect(runtimeQuestion.answerPoolCount).toBeGreaterThanOrEqual(4);
	});

	it('builds runtime true/false question with localized labels', () => {
		const runtimeQuestion = createRuntimeQuestion(baseQuestions[1], {
			language: 'de',
			optionPoolsByLanguage: {},
			getTypeLabel: () => 'Wahr/Falsch',
			trueLabel: 'Wahr',
			falseLabel: 'Falsch',
			shuffleFn: (items) => items
		});

		expect(runtimeQuestion.options).toEqual(['Wahr', 'Falsch']);
		expect(runtimeQuestion.correctText).toBe('Wahr');
		expect(runtimeQuestion.correctIndex).toBe(0);
	});
});
