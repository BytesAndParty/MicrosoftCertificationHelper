export const DEFAULT_CHOICE_COUNT = 4;
export const MIN_FALSE_POOL = 6;

export function unique(list) {
	return [...new Set(list)];
}

export function shuffle(list) {
	const copy = list.slice();
	for (let index = copy.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
	}
	return copy;
}

export function getQuestionType(question) {
	if (question && typeof question.type === 'string') return question.type;
	return 'single-choice';
}

export function localizeQuestionData(question, language = 'en') {
	const useGerman = language === 'de';
	const localizedOptions = useGerman && Array.isArray(question.optionsDe) ? question.optionsDe : question.options;
	const localizedOptionExplanations = useGerman && question.optionExplanationsDe
		? question.optionExplanationsDe
		: question.optionExplanations;
	const localizedLearnRef = useGerman && question.learnRefDe ? question.learnRefDe : question.learnRef;

	return {
		...question,
		prompt: useGerman && typeof question.promptDe === 'string' ? question.promptDe : question.prompt,
		hint: useGerman && typeof question.hintDe === 'string' ? question.hintDe : question.hint,
		explanation: useGerman && typeof question.explanationDe === 'string' ? question.explanationDe : question.explanation,
		options: localizedOptions,
		optionExplanations: localizedOptionExplanations,
		learnRef: localizedLearnRef,
		wrongOptions: useGerman && Array.isArray(question.wrongOptionsDe) ? question.wrongOptionsDe : question.wrongOptions,
		correctAnswer: useGerman && typeof question.correctAnswerDe === 'string' ? question.correctAnswerDe : question.correctAnswer
	};
}

function buildOptionExplanationLookup(localizedQuestion, options) {
	const lookup = {};
	const { optionExplanations } = localizedQuestion;

	if (Array.isArray(optionExplanations)) {
		optionExplanations.forEach((explanation, index) => {
			const optionText = options[index];
			if (optionText && typeof explanation === 'string') {
				lookup[optionText] = explanation;
			}
		});
		return lookup;
	}

	if (optionExplanations && typeof optionExplanations === 'object') {
		Object.entries(optionExplanations).forEach(([key, value]) => {
			if (typeof value !== 'string') return;
			lookup[key] = value;
			const normalizedKey = key.toLowerCase();
			if (options.length === 2) {
				if (normalizedKey === 'true' || normalizedKey === 'wahr') {
					const trueOption = options.find((option) => /^(true|wahr)$/i.test(option));
					if (trueOption) lookup[trueOption] = value;
				}
				if (normalizedKey === 'false' || normalizedKey === 'falsch') {
					const falseOption = options.find((option) => /^(false|falsch)$/i.test(option));
					if (falseOption) lookup[falseOption] = value;
				}
			}
		});
	}

	return lookup;
}

export function buildOptionPools(questions, language = 'en') {
	const topicPoolMap = {};
	const all = [];

	questions.forEach((baseQuestion) => {
		const question = localizeQuestionData(baseQuestion, language);
		if (!Array.isArray(question.options)) return;
		all.push(...question.options);
		if (!topicPoolMap[question.topic]) topicPoolMap[question.topic] = [];
		topicPoolMap[question.topic].push(...question.options);
	});

	const normalizedTopicPool = {};
	Object.entries(topicPoolMap).forEach(([topic, options]) => {
		normalizedTopicPool[topic] = unique(options);
	});

	return {
		topicOptionPool: normalizedTopicPool,
		globalOptionPool: unique(all)
	};
}

function createSingleChoiceRuntimeQuestion(baseQuestion, options) {
	const {
		language,
		optionPoolsByLanguage,
		getTypeLabel,
		shuffleFn,
		defaultChoiceCount = DEFAULT_CHOICE_COUNT,
		minFalsePool = MIN_FALSE_POOL
	} = options;
	const localizedQuestion = localizeQuestionData(baseQuestion, language);
	const type = getQuestionType(localizedQuestion);
	const ownOptions = Array.isArray(localizedQuestion.options) ? localizedQuestion.options : [];
	const correctText = ownOptions[localizedQuestion.answerIndex];
	const optionExplanationLookup = buildOptionExplanationLookup(localizedQuestion, ownOptions);
	const optionPools = optionPoolsByLanguage[language] || optionPoolsByLanguage.en || { topicOptionPool: {}, globalOptionPool: [] };
	const { topicOptionPool, globalOptionPool } = optionPools;

	if (!correctText) {
		const fallbackIndex = Number(localizedQuestion.answerIndex) || 0;
		return {
			...localizedQuestion,
			type,
			typeLabel: getTypeLabel(type),
			options: ownOptions,
			correctIndex: fallbackIndex,
			correctText: ownOptions[fallbackIndex] || '',
			optionExplanationsByOption: optionExplanationLookup,
			answerPoolCount: ownOptions.length
		};
	}

	const ownWrong = ownOptions.filter((option, index) => index !== localizedQuestion.answerIndex);
	const customWrong = Array.isArray(localizedQuestion.wrongOptions) ? localizedQuestion.wrongOptions : [];
	const topicWrong = topicOptionPool[localizedQuestion.topic] || [];
	let wrongPool = unique([...customWrong, ...ownWrong, ...topicWrong]).filter((option) => option !== correctText);

	if (wrongPool.length < minFalsePool) {
		wrongPool = unique([...wrongPool, ...globalOptionPool]).filter((option) => option !== correctText);
	}

	const requestedCount = Number(baseQuestion.displayOptionCount) || defaultChoiceCount;
	const optionCount = Math.max(2, Math.min(requestedCount, wrongPool.length + 1));
	const wrongToShow = Math.max(1, optionCount - 1);
	const selectedWrong = shuffleFn(wrongPool).slice(0, wrongToShow);
	const runtimeOptions = shuffleFn([correctText, ...selectedWrong]);
	const correctIndex = runtimeOptions.indexOf(correctText);
	const optionExplanationsByOption = {};
	runtimeOptions.forEach((optionText) => {
		if (optionExplanationLookup[optionText]) {
			optionExplanationsByOption[optionText] = optionExplanationLookup[optionText];
		}
	});

	return {
		...localizedQuestion,
		type,
		typeLabel: getTypeLabel(type),
		options: runtimeOptions,
		correctIndex,
		correctText,
		optionExplanationsByOption,
		answerPoolCount: wrongPool.length + 1
	};
}

function createTrueFalseRuntimeQuestion(baseQuestion, options) {
	const { language, getTypeLabel, shuffleFn, trueLabel = 'True', falseLabel = 'False' } = options;
	const localizedQuestion = localizeQuestionData(baseQuestion, language);
	const type = getQuestionType(localizedQuestion);
	const normalizedAnswer = String(localizedQuestion.correctAnswer || '').toLowerCase();
	const prefersFalse = normalizedAnswer === 'false' || normalizedAnswer === 'falsch';
	const correctText = prefersFalse ? falseLabel : trueLabel;
	const runtimeOptions = shuffleFn([trueLabel, falseLabel]);
	const optionExplanationLookup = buildOptionExplanationLookup(localizedQuestion, [trueLabel, falseLabel]);
	const optionExplanationsByOption = {};
	runtimeOptions.forEach((optionText) => {
		if (optionExplanationLookup[optionText]) {
			optionExplanationsByOption[optionText] = optionExplanationLookup[optionText];
		}
	});

	return {
		...localizedQuestion,
		type,
		typeLabel: getTypeLabel(type),
		options: runtimeOptions,
		correctIndex: runtimeOptions.indexOf(correctText),
		correctText,
		optionExplanationsByOption,
		answerPoolCount: 2
	};
}

export function createRuntimeQuestion(baseQuestion, options = {}) {
	const {
		language = 'en',
		optionPoolsByLanguage = {},
		getTypeLabel = () => '',
		trueLabel = 'True',
		falseLabel = 'False',
		shuffleFn = shuffle
	} = options;
	const type = getQuestionType(baseQuestion);

	if (type === 'true-false') {
		return createTrueFalseRuntimeQuestion(baseQuestion, {
			language,
			getTypeLabel,
			shuffleFn,
			trueLabel,
			falseLabel
		});
	}

	return createSingleChoiceRuntimeQuestion(baseQuestion, {
		language,
		optionPoolsByLanguage,
		getTypeLabel,
		shuffleFn
	});
}
