import { flashcards, glossaryTerms, quizQuestions, roadmapThemes } from '../data/content';

const DB = { name: 'ai900-study-helper', version: 1, store: 'kv', key: 'state' };
const FALLBACK_KEY = 'ai900_state_fallback';
const DAY = 86400000;
const EXAM_SECONDS = 20 * 60;
const EXAM_QUESTION_COUNT = 10;
const DEFAULT_CHOICE_COUNT = 4;
const MIN_FALSE_POOL = 6;
const THEME_KEY = 'ai900_theme_pref';
const LANG_KEY = 'ai900_lang_pref';
const THEME_MEDIA = window.matchMedia('(prefers-color-scheme: dark)');

const byId = (id) => document.getElementById(id);
const questionById = new Map(quizQuestions.map((question) => [question.id, question]));
const themeById = new Map(roadmapThemes.map((theme) => [theme.id, theme]));
const tabs = [...document.querySelectorAll('[data-tab]')];
const panels = [...document.querySelectorAll('[data-panel]')];
const roadmapBoxes = [...document.querySelectorAll('[data-roadmap-key]')];

const optionPoolsByLanguage = {
	en: buildOptionPools(quizQuestions, 'en'),
	de: buildOptionPools(quizQuestions, 'de')
};

const ui = {
	roadmapSummary: byId('roadmap-summary'),
	metricRoadmap: byId('metric-roadmap'),
	metricAccuracy: byId('metric-accuracy'),
	metricExam: byId('metric-exam'),
	metricDue: byId('metric-due'),
	metricJournal: byId('metric-journal'),
	quizProgress: byId('quiz-progress'),
	quizTopic: byId('quiz-topic'),
	quizQuestion: byId('quiz-question'),
	quizOptions: byId('quiz-options'),
	quizFeedback: byId('quiz-feedback'),
	quizNext: byId('quiz-next'),
	examStart: byId('exam-start'),
	examTimer: byId('exam-timer'),
	examStage: byId('exam-stage'),
	examProgress: byId('exam-progress'),
	examQuestion: byId('exam-question'),
	examOptions: byId('exam-options'),
	examNext: byId('exam-next'),
	examResult: byId('exam-result'),
	examReview: byId('exam-review'),
	flashTopic: byId('flashcard-topic'),
	flashFront: byId('flashcard-front'),
	flashBack: byId('flashcard-back'),
	flashShow: byId('flashcard-show'),
	flashGrades: byId('flashcard-grade-actions'),
	flashAgain: byId('flashcard-again'),
	flashGood: byId('flashcard-good'),
	flashEasy: byId('flashcard-easy'),
	flashMeta: byId('flashcard-meta'),
	journalList: byId('journal-list'),
	quizHint: byId('quiz-hint'),
	quizSkip: byId('quiz-skip'),
	quizHintText: byId('quiz-hint-text'),
	glossarySearch: byId('glossary-search'),
	glossaryList: byId('glossary-list'),
	resetProgress: byId('reset-progress'),
	themeToggle: byId('theme-toggle'),
	languageToggle: byId('language-toggle')
};

const i18n = {
	en: {
		'hero.copy': 'Quiz mode, exam mode, flashcards, an error journal, and a glossary with local progress stored in the browser database.',
		'hero.planPrefix': 'Big-picture plan:',
		'theme.toDark': 'Switch to dark mode',
		'theme.toLight': 'Switch to light mode',
		'language.toggleLabel': 'Switch language to German',
		'roadmap.title': 'Roadmap',
		'metrics.roadmap': 'Roadmap',
		'metrics.quizAccuracy': 'Quiz Accuracy',
		'metrics.bestExam': 'Best Exam',
		'metrics.dueCards': 'Due Cards',
		'metrics.journal': 'Error Journal',
		'tabs.ariaLabel': 'Study modes',
		'tabs.quiz': 'Quiz',
		'tabs.exam': 'Exam',
		'tabs.flashcards': 'Flashcards',
		'tabs.journal': 'Error Journal',
		'tabs.glossary': 'Glossary',
		'quiz.title': 'Quiz with instant feedback',
		'quiz.showHint': 'Show hint',
		'quiz.skip': 'Skip',
		'quiz.nextQuestion': 'Next question',
		'exam.title': 'Exam mode',
		'exam.meta': '10 questions, 20 minutes, mixed question types, and a detailed review.',
		'exam.start': 'Start exam',
		'exam.nextQuestion': 'Next question',
		'flashcards.meta': 'Rate each card: Again, Good, Easy.',
		'flashcards.title': 'Spaced Repetition',
		'flashcards.showAnswer': 'Show answer',
		'flashcards.again': 'Again',
		'flashcards.good': 'Good',
		'flashcards.easy': 'Easy',
		'journal.title': 'Error Journal',
		'journal.meta': 'Prioritized list of your missed questions.',
		'glossary.title': 'Glossary',
		'glossary.meta': 'Quick access to core AI-900 terms.',
		'glossary.search': 'Search',
		'glossary.placeholder': 'Term or keyword...',
		'reset.button': 'Reset progress',
		'type.trueFalse': 'True/False',
		'type.multipleChoice': 'Multiple Choice',
		'roadmap.summary': '{done} / {total} todos completed',
		'quiz.pool': ' | Pool: {count} options',
		'quiz.progress': 'Answered: {answered} | Correct: {correct}{poolHint}',
		'quiz.feedback.correct': 'Correct.',
		'quiz.feedback.wrong': 'Not correct.',
		'exam.questionProgress': 'Question {current} / {total} | {typeLabel}',
		'exam.finish': 'Finish exam',
		'exam.result': 'Result: {score}% ({correct}/{total})',
		'exam.topicBreakdown': 'Topic breakdown',
		'exam.bestSaved': 'Best score: {best}% | Saved: {savedAt}',
		'exam.reviewTitle': 'Exam Review',
		'exam.reviewLabel': 'Question {index} | {topic} | {typeLabel}',
		'exam.reviewBadgeCorrect': 'Correct',
		'exam.reviewBadgeWrong': 'Wrong',
		'exam.reviewYourAnswerNone': 'Your answer: No answer',
		'exam.reviewYourAnswer': 'Your answer: {answer}',
		'exam.reviewCorrectAnswer': 'Correct answer: {answer}',
		'exam.reviewExplanation': 'Explanation: {explanation}',
		'flashcards.dueCards': 'Due cards: {count}',
		'flashcards.nextCard': 'Next card: {date}',
		'journal.empty': 'No wrong answers yet.',
		'journal.rowMeta': 'Mistakes: {count} | Last: {last}',
		'journal.practiceNow': 'Practice now',
		'glossary.empty': 'No matches found.',
		'reset.confirm': 'Reset all learning progress?',
		'a11y.skipLink': 'Skip to study workspace',
		'a11y.timeRemaining': 'Time remaining: {time}',
		'shortcuts.title': 'Keyboard shortcuts',
		'shortcuts.quiz': '1-4 Answer | H Hint | S Skip | N Next',
		'shortcuts.flash': 'Space Reveal | 1 Again | 2 Good | 3 Easy',
		'shortcuts.global': 'D Dark mode | L Language | \u2190\u2192 Tabs'
	},
	de: {
		'hero.copy': 'Quiz-Modus, Prüfungsmodus, Karteikarten, Fehlerjournal und Glossar mit lokalem Fortschritt in der Browser-Datenbank.',
		'hero.planPrefix': 'Gesamtplan:',
		'theme.toDark': 'Auf Dark Mode wechseln',
		'theme.toLight': 'Auf Light Mode wechseln',
		'language.toggleLabel': 'Sprache auf Englisch wechseln',
		'roadmap.title': 'Roadmap',
		'metrics.roadmap': 'Roadmap',
		'metrics.quizAccuracy': 'Quiz-Genauigkeit',
		'metrics.bestExam': 'Bestes Prüfungsergebnis',
		'metrics.dueCards': 'Fällige Karten',
		'metrics.journal': 'Fehlerjournal',
		'tabs.ariaLabel': 'Lernmodi',
		'tabs.quiz': 'Quiz',
		'tabs.exam': 'Prüfung',
		'tabs.flashcards': 'Karteikarten',
		'tabs.journal': 'Fehlerjournal',
		'tabs.glossary': 'Glossar',
		'quiz.title': 'Quiz mit Sofort-Feedback',
		'quiz.showHint': 'Hinweis anzeigen',
		'quiz.skip': 'Überspringen',
		'quiz.nextQuestion': 'Nächste Frage',
		'exam.title': 'Prüfungsmodus',
		'exam.meta': '10 Fragen, 20 Minuten, gemischte Fragetypen und detaillierte Auswertung.',
		'exam.start': 'Prüfung starten',
		'exam.nextQuestion': 'Nächste Frage',
		'flashcards.meta': 'Bewerte jede Karte: Nochmal, Gut, Sicher.',
		'flashcards.title': 'Spaced Repetition',
		'flashcards.showAnswer': 'Antwort zeigen',
		'flashcards.again': 'Nochmal',
		'flashcards.good': 'Gut',
		'flashcards.easy': 'Sicher',
		'journal.title': 'Fehlerjournal',
		'journal.meta': 'Priorisierte Liste deiner falsch beantworteten Fragen.',
		'glossary.title': 'Glossar',
		'glossary.meta': 'Schneller Zugriff auf zentrale AI-900 Begriffe.',
		'glossary.search': 'Suche',
		'glossary.placeholder': 'Begriff oder Stichwort...',
		'reset.button': 'Fortschritt zurücksetzen',
		'type.trueFalse': 'Wahr/Falsch',
		'type.multipleChoice': 'Multiple Choice',
		'roadmap.summary': '{done} / {total} To-dos erledigt',
		'quiz.pool': ' | Pool: {count} Optionen',
		'quiz.progress': 'Beantwortet: {answered} | Richtig: {correct}{poolHint}',
		'quiz.feedback.correct': 'Richtig.',
		'quiz.feedback.wrong': 'Nicht korrekt.',
		'exam.questionProgress': 'Frage {current} / {total} | {typeLabel}',
		'exam.finish': 'Prüfung beenden',
		'exam.result': 'Ergebnis: {score}% ({correct}/{total})',
		'exam.topicBreakdown': 'Themenauswertung',
		'exam.bestSaved': 'Bestwert: {best}% | Gespeichert: {savedAt}',
		'exam.reviewTitle': 'Prüfungsreview',
		'exam.reviewLabel': 'Frage {index} | {topic} | {typeLabel}',
		'exam.reviewBadgeCorrect': 'Richtig',
		'exam.reviewBadgeWrong': 'Falsch',
		'exam.reviewYourAnswerNone': 'Deine Antwort: Keine Antwort',
		'exam.reviewYourAnswer': 'Deine Antwort: {answer}',
		'exam.reviewCorrectAnswer': 'Richtige Antwort: {answer}',
		'exam.reviewExplanation': 'Erklärung: {explanation}',
		'flashcards.dueCards': 'Fällige Karten: {count}',
		'flashcards.nextCard': 'Nächste Karte: {date}',
		'journal.empty': 'Noch keine falschen Antworten.',
		'journal.rowMeta': 'Fehler: {count} | Zuletzt: {last}',
		'journal.practiceNow': 'Jetzt üben',
		'glossary.empty': 'Keine Treffer.',
		'reset.confirm': 'Kompletten Lernfortschritt zurücksetzen?',
		'a11y.skipLink': 'Zum Lernbereich springen',
		'a11y.timeRemaining': 'Verbleibende Zeit: {time}',
		'shortcuts.title': 'Tastenkürzel',
		'shortcuts.quiz': '1-4 Antwort | H Hinweis | S Überspringen | N Nächste',
		'shortcuts.flash': 'Leertaste Aufdecken | 1 Nochmal | 2 Gut | 3 Sicher',
		'shortcuts.global': 'D Dark Mode | L Sprache | \u2190\u2192 Tabs'
	}
};

const defaults = {
	roadmapDone: {},
	quiz: { answered: 0, correct: 0, byTopic: {} },
	wrongJournal: {},
	examBest: 0,
	examHistory: [],
	flashcards: {}
};

let state = clone(defaults);
let dbPromise;
let saveTimer;
let quizDeck = [];
let activeQuestion = null;
let quizLocked = false;
let exam = null;
let examInterval;
let activeCard = null;
let cardShown = false;
let currentLanguage = 'en';

function clone(value) {
	return JSON.parse(JSON.stringify(value));
}

function resolveLanguage(language) {
	return language === 'de' ? 'de' : 'en';
}

function readStoredLanguage() {
	try {
		return resolveLanguage(localStorage.getItem(LANG_KEY));
	} catch {
		return 'en';
	}
}

function saveLanguage(language) {
	try {
		localStorage.setItem(LANG_KEY, resolveLanguage(language));
	} catch {}
}

function t(key, vars = {}) {
	const locale = i18n[currentLanguage] || i18n.en;
	const fallback = i18n.en[key];
	const template = locale[key] ?? fallback ?? key;
	return Object.entries(vars).reduce(
		(result, [name, value]) => result.replaceAll(`{${name}}`, String(value)),
		template
	);
}

function unique(list) {
	return [...new Set(list)];
}

function shuffle(list) {
	const copy = list.slice();
	for (let index = copy.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
	}
	return copy;
}

function formatDate(timestamp) {
	const locale = currentLanguage === 'de' ? 'de-DE' : 'en-US';
	return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp));
}

function getQuestionType(question) {
	if (question && typeof question.type === 'string') return question.type;
	return 'single-choice';
}

function getTypeLabel(type) {
	if (type === 'true-false') return t('type.trueFalse');
	return t('type.multipleChoice');
}

function readStoredTheme() {
	try {
		const value = localStorage.getItem(THEME_KEY);
		return value === 'dark' || value === 'light' ? value : null;
	} catch {
		return null;
	}
}

function resolveTheme(preference) {
	if (preference === 'dark' || preference === 'light') return preference;
	return THEME_MEDIA.matches ? 'dark' : 'light';
}

function saveTheme(theme) {
	try {
		localStorage.setItem(THEME_KEY, theme);
	} catch {}
}

const ICON_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

function applyTheme(theme) {
	document.documentElement.dataset.theme = theme;
	if (!ui.themeToggle) return;

	const isDark = theme === 'dark';
	const label = isDark ? t('theme.toLight') : t('theme.toDark');
	ui.themeToggle.innerHTML = `${isDark ? ICON_SUN : ICON_MOON} <span>${label}</span>`;
	ui.themeToggle.setAttribute('aria-label', label);
	ui.themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
}

function toggleTheme() {
	const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	const next = current === 'dark' ? 'light' : 'dark';
	applyTheme(next);
	saveTheme(next);
}

function bindSystemTheme() {
	const onChange = (event) => {
		if (readStoredTheme()) return;
		applyTheme(event.matches ? 'dark' : 'light');
	};

	if (typeof THEME_MEDIA.addEventListener === 'function') {
		THEME_MEDIA.addEventListener('change', onChange);
		return;
	}
	if (typeof THEME_MEDIA.addListener === 'function') {
		THEME_MEDIA.addListener(onChange);
	}
}

function applyLanguageToRoadmap() {
	document.querySelectorAll('[data-roadmap-id]').forEach((card) => {
		const theme = themeById.get(card.dataset.roadmapId);
		if (!theme) return;
		const isDe = currentLanguage === 'de';
		const h3 = card.querySelector('h3');
		const p = card.querySelector('p');
		if (h3) h3.textContent = isDe && theme.titleDe ? theme.titleDe : theme.title;
		if (p) p.textContent = isDe && theme.goalDe ? theme.goalDe : theme.goal;
		const spans = card.querySelectorAll('li span');
		const todos = isDe && theme.todosDe ? theme.todosDe : theme.todos;
		spans.forEach((span, i) => {
			if (todos[i]) span.textContent = todos[i];
		});
	});
}

function applyLanguageToStaticUi() {
	document.querySelectorAll('[data-i18n]').forEach((node) => {
		const key = node.dataset.i18n;
		if (!key) return;
		node.textContent = t(key);
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
		const key = node.dataset.i18nPlaceholder;
		if (!key) return;
		node.setAttribute('placeholder', t(key));
	});

	document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
		const key = node.dataset.i18nAriaLabel;
		if (!key) return;
		node.setAttribute('aria-label', t(key));
	});
}

function applyLanguage(language, { persist = true } = {}) {
	currentLanguage = resolveLanguage(language);
	document.documentElement.lang = currentLanguage;

	if (persist) saveLanguage(currentLanguage);

	applyLanguageToStaticUi();
	applyLanguageToRoadmap();

	if (ui.languageToggle) {
		ui.languageToggle.textContent = currentLanguage === 'en' ? 'DE' : 'EN';
		ui.languageToggle.setAttribute('aria-label', t('language.toggleLabel'));
	}

	applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

	if (activeQuestion) {
		if (!quizLocked) {
			showQuizQuestion(activeQuestion.id);
		} else {
			const baseQuestion = questionById.get(activeQuestion.id);
			const localizedBase = baseQuestion ? localizeQuestionData(baseQuestion) : null;
			if (localizedBase) {
				activeQuestion.prompt = localizedBase.prompt;
				activeQuestion.hint = localizedBase.hint;
				activeQuestion.explanation = localizedBase.explanation;
			}
			activeQuestion.typeLabel = getTypeLabel(getQuestionType(activeQuestion));
			ui.quizTopic.textContent = `${activeQuestion.topic} · ${activeQuestion.typeLabel}`;
			ui.quizQuestion.textContent = activeQuestion.prompt;
			const poolHint =
				activeQuestion.type === 'single-choice'
					? t('quiz.pool', { count: activeQuestion.answerPoolCount })
					: '';
			ui.quizProgress.textContent = t('quiz.progress', {
				answered: state.quiz.answered,
				correct: state.quiz.correct,
				poolHint
			});
			if (!ui.quizHintText.hidden) ui.quizHintText.textContent = activeQuestion.hint || activeQuestion.explanation;
			if (ui.quizFeedback.textContent) {
				const isCorrect = ui.quizFeedback.classList.contains('is-correct');
				ui.quizFeedback.textContent = `${isCorrect ? t('quiz.feedback.correct') : t('quiz.feedback.wrong')} ${activeQuestion.explanation}`;
			}
		}
	}

	if (exam && Array.isArray(exam.questions)) {
		exam.questions.forEach((question) => {
			question.typeLabel = getTypeLabel(getQuestionType(question));
		});
	}

	renderStats();
	renderJournal();
	renderGlossary(ui.glossarySearch?.value || '');
	if (exam) renderExamQuestion();
	if (activeCard) renderCard();
}

function toggleLanguage() {
	applyLanguage(currentLanguage === 'en' ? 'de' : 'en');
}

function localizeQuestionData(question, language = currentLanguage) {
	const useGerman = language === 'de';

	return {
		...question,
		prompt: useGerman && typeof question.promptDe === 'string' ? question.promptDe : question.prompt,
		hint: useGerman && typeof question.hintDe === 'string' ? question.hintDe : question.hint,
		explanation:
			useGerman && typeof question.explanationDe === 'string' ? question.explanationDe : question.explanation,
		options: useGerman && Array.isArray(question.optionsDe) ? question.optionsDe : question.options,
		wrongOptions:
			useGerman && Array.isArray(question.wrongOptionsDe) ? question.wrongOptionsDe : question.wrongOptions,
		correctAnswer:
			useGerman && typeof question.correctAnswerDe === 'string' ? question.correctAnswerDe : question.correctAnswer
	};
}

function buildOptionPools(questions, language = 'en') {
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

function getSingleChoiceRuntimeQuestion(baseQuestion) {
	const localizedQuestion = localizeQuestionData(baseQuestion);
	const type = getQuestionType(localizedQuestion);
	const ownOptions = Array.isArray(localizedQuestion.options) ? localizedQuestion.options : [];
	const correctText = ownOptions[localizedQuestion.answerIndex];
	const optionPools = optionPoolsByLanguage[currentLanguage] || optionPoolsByLanguage.en;
	const { topicOptionPool, globalOptionPool } = optionPools;
	if (!correctText) {
		return {
			...localizedQuestion,
			type,
			typeLabel: getTypeLabel(type),
			options: ownOptions,
			correctIndex: Number(localizedQuestion.answerIndex) || 0,
			correctText: ownOptions[Number(localizedQuestion.answerIndex) || 0] || '',
			answerPoolCount: ownOptions.length
		};
	}

	const ownWrong = ownOptions.filter((option, index) => index !== localizedQuestion.answerIndex);
	const customWrong = Array.isArray(localizedQuestion.wrongOptions) ? localizedQuestion.wrongOptions : [];
	const topicWrong = topicOptionPool[localizedQuestion.topic] || [];
	let wrongPool = unique([...customWrong, ...ownWrong, ...topicWrong]).filter((option) => option !== correctText);

	if (wrongPool.length < MIN_FALSE_POOL) {
		wrongPool = unique([...wrongPool, ...globalOptionPool]).filter((option) => option !== correctText);
	}

	const requestedCount = Number(baseQuestion.displayOptionCount) || DEFAULT_CHOICE_COUNT;
	const optionCount = Math.max(2, Math.min(requestedCount, wrongPool.length + 1));
	const wrongToShow = Math.max(1, optionCount - 1);
	const selectedWrong = shuffle(wrongPool).slice(0, wrongToShow);
	const options = shuffle([correctText, ...selectedWrong]);
	const correctIndex = options.indexOf(correctText);

	return {
		...localizedQuestion,
		type,
		typeLabel: getTypeLabel(type),
		options,
		correctIndex,
		correctText,
		answerPoolCount: wrongPool.length + 1
	};
}

function getTrueFalseRuntimeQuestion(baseQuestion) {
	const localizedQuestion = localizeQuestionData(baseQuestion);
	const type = getQuestionType(localizedQuestion);
	const normalizedAnswer = String(localizedQuestion.correctAnswer || '').toLowerCase();
	const prefersFalse = normalizedAnswer === 'false' || normalizedAnswer === 'falsch';
	const trueLabel = currentLanguage === 'de' ? 'Wahr' : 'True';
	const falseLabel = currentLanguage === 'de' ? 'Falsch' : 'False';
	const correctText = prefersFalse ? falseLabel : trueLabel;
	const options = shuffle([trueLabel, falseLabel]);
	return {
		...localizedQuestion,
		type,
		typeLabel: getTypeLabel(type),
		options,
		correctIndex: options.indexOf(correctText),
		correctText,
		answerPoolCount: 2
	};
}

function createRuntimeQuestion(baseQuestion) {
	const type = getQuestionType(baseQuestion);
	if (type === 'true-false') {
		return getTrueFalseRuntimeQuestion(baseQuestion);
	}
	return getSingleChoiceRuntimeQuestion(baseQuestion);
}

function openDb() {
	if (!('indexedDB' in window)) return Promise.resolve(null);
	if (dbPromise) return dbPromise;

	dbPromise = new Promise((resolve, reject) => {
		const request = indexedDB.open(DB.name, DB.version);
		request.onupgradeneeded = () => {
			if (!request.result.objectStoreNames.contains(DB.store)) {
				request.result.createObjectStore(DB.store, { keyPath: 'key' });
			}
		};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	}).catch(() => null);

	return dbPromise;
}

async function loadState() {
	let fallback = null;
	try {
		const raw = localStorage.getItem(FALLBACK_KEY);
		fallback = raw ? JSON.parse(raw) : null;
	} catch {}

	const db = await openDb();
	if (!db) return fallback;

	return new Promise((resolve) => {
		const tx = db.transaction(DB.store, 'readonly');
		const request = tx.objectStore(DB.store).get(DB.key);
		request.onsuccess = () => resolve(request.result ? request.result.value : fallback);
		request.onerror = () => resolve(fallback);
	});
}

async function saveState(immediate = false) {
	if (saveTimer) {
		clearTimeout(saveTimer);
		saveTimer = undefined;
	}
	if (!immediate) {
		saveTimer = setTimeout(() => void saveState(true), 150);
		return;
	}

	try {
		localStorage.setItem(FALLBACK_KEY, JSON.stringify(state));
	} catch {}

	const db = await openDb();
	if (!db) return;
	await new Promise((resolve) => {
		const tx = db.transaction(DB.store, 'readwrite');
		tx.objectStore(DB.store).put({ key: DB.key, value: state });
		tx.oncomplete = () => resolve();
		tx.onerror = () => resolve();
	});
}

function hydrate(saved) {
	state = clone(defaults);
	if (saved && typeof saved === 'object') {
		if (saved.roadmapDone && typeof saved.roadmapDone === 'object') {
			state.roadmapDone = saved.roadmapDone;
		}
		if (saved.quiz && typeof saved.quiz === 'object') {
			state.quiz.answered = Number(saved.quiz.answered) || 0;
			state.quiz.correct = Number(saved.quiz.correct) || 0;
			state.quiz.byTopic = saved.quiz.byTopic && typeof saved.quiz.byTopic === 'object' ? saved.quiz.byTopic : {};
		}
		if (saved.wrongJournal && typeof saved.wrongJournal === 'object') {
			state.wrongJournal = saved.wrongJournal;
		}
		state.examBest = Number(saved.examBest) || 0;
		state.examHistory = Array.isArray(saved.examHistory) ? saved.examHistory.slice(0, 15) : [];
		state.flashcards = saved.flashcards && typeof saved.flashcards === 'object' ? saved.flashcards : {};
	}

	const now = Date.now();
	for (const card of flashcards) {
		if (!state.flashcards[card.id]) {
			state.flashcards[card.id] = { interval: 1, streak: 0, dueAt: now, last: 'new' };
		}
	}
}

function getRoadmapProgress() {
	const total = roadmapThemes.reduce((sum, theme) => sum + theme.todos.length, 0);
	const done = roadmapBoxes.reduce((sum, box) => sum + (box.checked ? 1 : 0), 0);
	return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function getAccuracy() {
	return state.quiz.answered ? Math.round((state.quiz.correct / state.quiz.answered) * 100) : 0;
}

function getDueCardCount() {
	const now = Date.now();
	return flashcards.filter((card) => state.flashcards[card.id]?.dueAt <= now).length;
}

function renderRoadmapChecks() {
	roadmapBoxes.forEach((box) => {
		box.checked = Boolean(state.roadmapDone[box.dataset.roadmapKey]);
	});
}

function renderStats() {
	const p = getRoadmapProgress();
	ui.roadmapSummary.textContent = t('roadmap.summary', { done: p.done, total: p.total });
	ui.metricRoadmap.textContent = `${p.percent}%`;
	ui.metricAccuracy.textContent = `${getAccuracy()}%`;
	ui.metricExam.textContent = `${state.examBest}%`;
	ui.metricDue.textContent = String(getDueCardCount());
	ui.metricJournal.textContent = String(Object.keys(state.wrongJournal).length);
}

function switchTab(tabId) {
	tabs.forEach((tab) => {
		const active = tab.dataset.tab === tabId;
		tab.classList.toggle('is-active', active);
		tab.setAttribute('aria-selected', active ? 'true' : 'false');
		tab.setAttribute('tabindex', active ? '0' : '-1');
	});
	panels.forEach((panel) => {
		panel.hidden = panel.dataset.panel !== tabId;
	});
}

function refillQuizDeck() {
	quizDeck = shuffle(quizQuestions);
}

function showQuizQuestion(forcedQuestionId = null) {
	const baseQuestion = forcedQuestionId && questionById.has(forcedQuestionId)
		? questionById.get(forcedQuestionId)
		: (() => {
				if (!quizDeck.length) refillQuizDeck();
				return quizDeck.pop();
			})();

	activeQuestion = createRuntimeQuestion(baseQuestion);
	quizLocked = false;
	ui.quizTopic.textContent = `${activeQuestion.topic} · ${activeQuestion.typeLabel}`;
	ui.quizQuestion.textContent = activeQuestion.prompt;
	const poolHint =
		activeQuestion.type === 'single-choice'
			? t('quiz.pool', { count: activeQuestion.answerPoolCount })
			: '';
	ui.quizProgress.textContent = t('quiz.progress', {
		answered: state.quiz.answered,
		correct: state.quiz.correct,
		poolHint
	});
	ui.quizFeedback.textContent = '';
	ui.quizFeedback.className = 'feedback';
	ui.quizHintText.textContent = '';
	ui.quizHintText.hidden = true;
	ui.quizHint.hidden = false;
	ui.quizSkip.hidden = false;
	ui.quizOptions.innerHTML = '';
	ui.quizNext.disabled = true;

	activeQuestion.options.forEach((option, optionIndex) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'option';
		button.dataset.index = String(optionIndex);
		button.textContent = option;
		button.onclick = () => submitQuizAnswer(optionIndex);
		ui.quizOptions.append(button);
	});
}

function submitQuizAnswer(selectedIndex) {
	if (quizLocked || !activeQuestion) return;
	quizLocked = true;

	const isCorrect = selectedIndex === activeQuestion.correctIndex;
	const topicStats = state.quiz.byTopic[activeQuestion.topic] || { total: 0, correct: 0 };
	state.quiz.answered += 1;
	topicStats.total += 1;
	if (isCorrect) {
		state.quiz.correct += 1;
		topicStats.correct += 1;
	} else {
		const wrong = state.wrongJournal[activeQuestion.id] || { count: 0, lastWrongAt: 0 };
		wrong.count += 1;
		wrong.lastWrongAt = Date.now();
		state.wrongJournal[activeQuestion.id] = wrong;
	}
	state.quiz.byTopic[activeQuestion.topic] = topicStats;

	[...ui.quizOptions.querySelectorAll('button')].forEach((button) => {
		const index = Number(button.dataset.index);
		button.disabled = true;
		if (index === activeQuestion.correctIndex) {
			button.classList.add('is-correct');
			button.textContent = '\u2713 ' + button.textContent;
		}
		if (!isCorrect && index === selectedIndex) {
			button.classList.add('is-wrong');
			button.textContent = '\u2717 ' + button.textContent;
		}
	});

	ui.quizHint.hidden = true;
	ui.quizSkip.hidden = true;
	ui.quizFeedback.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
	ui.quizFeedback.textContent = `${isCorrect ? t('quiz.feedback.correct') : t('quiz.feedback.wrong')} ${activeQuestion.explanation}`;
	ui.quizNext.disabled = false;
	ui.quizNext.focus();
	void saveState();
	renderStats();
	renderJournal();
}

function pickExamQuestions(count) {
	const grouped = quizQuestions.reduce((acc, question) => {
		if (!acc[question.topic]) acc[question.topic] = [];
		acc[question.topic].push(question);
		return acc;
	}, {});

	const selected = [];
	const usedIds = new Set();
	for (const topic of shuffle(Object.keys(grouped))) {
		const candidate = shuffle(grouped[topic])[0];
		if (!candidate || usedIds.has(candidate.id)) continue;
		selected.push(candidate);
		usedIds.add(candidate.id);
		if (selected.length >= count) return selected;
	}

	for (const candidate of shuffle(quizQuestions)) {
		if (selected.length >= count) break;
		if (usedIds.has(candidate.id)) continue;
		selected.push(candidate);
		usedIds.add(candidate.id);
	}

	return selected;
}

function examClockText() {
	if (!exam) return '20:00';
	const remaining = Math.max(0, Math.floor((exam.endsAt - Date.now()) / 1000));
	const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
	const ss = String(remaining % 60).padStart(2, '0');
	return `${mm}:${ss}`;
}

function renderExamQuestion() {
	const question = exam.questions[exam.index];
	ui.examProgress.textContent = t('exam.questionProgress', {
		current: exam.index + 1,
		total: exam.questions.length,
		typeLabel: question.typeLabel
	});
	ui.examQuestion.textContent = question.prompt;
	ui.examOptions.innerHTML = '';

	question.options.forEach((option, optionIndex) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'option';
		if (exam.answers[exam.index] === optionIndex) button.classList.add('is-selected');
		button.textContent = option;
		button.onclick = () => {
			exam.answers[exam.index] = optionIndex;
			renderExamQuestion();
		};
		ui.examOptions.append(button);
	});

	ui.examNext.disabled = exam.answers[exam.index] === null;
	ui.examNext.textContent = exam.index === exam.questions.length - 1 ? t('exam.finish') : t('exam.nextQuestion');
}

function renderExamSummary({ score, correctCount, total, topicStats }) {
	ui.examResult.innerHTML = '';
	const scoreLine = document.createElement('p');
	scoreLine.textContent = t('exam.result', {
		score,
		correct: correctCount,
		total
	});
	ui.examResult.append(scoreLine);

	const topicTitle = document.createElement('p');
	topicTitle.className = 'meta';
	topicTitle.textContent = t('exam.topicBreakdown');
	ui.examResult.append(topicTitle);

	const topicList = document.createElement('ul');
	Object.entries(topicStats)
		.sort(([left], [right]) => left.localeCompare(right))
		.forEach(([topic, values]) => {
			const item = document.createElement('li');
			item.textContent = `${topic}: ${values.correct}/${values.total}`;
			topicList.append(item);
		});
	ui.examResult.append(topicList);

	const historyLine = document.createElement('p');
	historyLine.className = 'meta';
	historyLine.textContent = t('exam.bestSaved', {
		best: state.examBest,
		savedAt: formatDate(Date.now())
	});
	ui.examResult.append(historyLine);
}

function renderExamReview(reviewRows) {
	ui.examReview.innerHTML = '';
	if (!reviewRows.length) return;

	const title = document.createElement('h4');
	title.textContent = t('exam.reviewTitle');
	ui.examReview.append(title);

	reviewRows.forEach((row, index) => {
		const card = document.createElement('article');
		card.className = `review-item ${row.isCorrect ? 'is-correct' : 'is-wrong'}`;

		const header = document.createElement('div');
		header.className = 'review-head';
		const label = document.createElement('p');
		label.className = 'meta';
		label.textContent = t('exam.reviewLabel', {
			index: index + 1,
			topic: row.question.topic,
			typeLabel: row.question.typeLabel
		});
		const badge = document.createElement('span');
		badge.className = `review-badge ${row.isCorrect ? 'ok' : 'bad'}`;
		badge.textContent = row.isCorrect ? t('exam.reviewBadgeCorrect') : t('exam.reviewBadgeWrong');
		header.append(label, badge);

		const prompt = document.createElement('h5');
		prompt.textContent = row.question.prompt;

		const selectedLine = document.createElement('p');
		selectedLine.className = 'review-line';
		selectedLine.textContent =
			row.selectedText === null
				? t('exam.reviewYourAnswerNone')
				: t('exam.reviewYourAnswer', { answer: row.selectedText });

		const correctLine = document.createElement('p');
		correctLine.className = 'review-line';
		correctLine.textContent = t('exam.reviewCorrectAnswer', { answer: row.correctText });

		const explanation = document.createElement('p');
		explanation.className = 'review-line';
		explanation.textContent = t('exam.reviewExplanation', { explanation: row.question.explanation });

		card.append(header, prompt, selectedLine, correctLine, explanation);
		ui.examReview.append(card);
	});
}

function startExam() {
	const count = Math.min(EXAM_QUESTION_COUNT, quizQuestions.length);
	exam = {
		questions: pickExamQuestions(count).map((question) => createRuntimeQuestion(question)),
		answers: Array.from({ length: count }, () => null),
		index: 0,
		endsAt: Date.now() + EXAM_SECONDS * 1000
	};

	ui.examResult.innerHTML = '';
	ui.examReview.innerHTML = '';
	ui.examStart.hidden = true;
	ui.examStage.hidden = false;
	renderExamQuestion();
	ui.examTimer.textContent = examClockText();
	ui.examTimer.setAttribute('aria-label', t('a11y.timeRemaining', { time: examClockText() }));

	if (examInterval) clearInterval(examInterval);
	examInterval = setInterval(() => {
		const clockText = examClockText();
		ui.examTimer.textContent = clockText;
		ui.examTimer.setAttribute('aria-label', t('a11y.timeRemaining', { time: clockText }));
		if (exam && Date.now() >= exam.endsAt) finishExam();
	}, 1000);
}

function nextExamQuestion() {
	if (!exam || exam.answers[exam.index] === null) return;
	if (exam.index >= exam.questions.length - 1) {
		finishExam();
		return;
	}
	exam.index += 1;
	renderExamQuestion();
}

function updateJournalFromExamWrongAnswers(reviewRows) {
	const now = Date.now();
	reviewRows
		.filter((row) => !row.isCorrect)
		.forEach((row) => {
			const wrong = state.wrongJournal[row.question.id] || { count: 0, lastWrongAt: 0 };
			wrong.count += 1;
			wrong.lastWrongAt = now;
			state.wrongJournal[row.question.id] = wrong;
		});
}

function finishExam() {
	if (!exam) return;
	if (examInterval) clearInterval(examInterval);
	examInterval = undefined;

	const topicStats = {};
	const reviewRows = exam.questions.map((question, index) => {
		const selectedIndex = exam.answers[index];
		const isCorrect = selectedIndex === question.correctIndex;
		if (!topicStats[question.topic]) topicStats[question.topic] = { total: 0, correct: 0 };
		topicStats[question.topic].total += 1;
		if (isCorrect) topicStats[question.topic].correct += 1;

		return {
			question,
			isCorrect,
			selectedText: selectedIndex === null ? null : question.options[selectedIndex],
			correctText: question.correctText
		};
	});

	const correctCount = reviewRows.filter((row) => row.isCorrect).length;
	const score = Math.round((correctCount / exam.questions.length) * 100);
	state.examBest = Math.max(state.examBest, score);
	state.examHistory.unshift({
		at: Date.now(),
		score,
		correct: correctCount,
		total: exam.questions.length
	});
	state.examHistory = state.examHistory.slice(0, 15);

	updateJournalFromExamWrongAnswers(reviewRows);
	void saveState();

	ui.examStart.hidden = false;
	ui.examStage.hidden = true;
	ui.examTimer.textContent = '20:00';
	renderExamSummary({
		score,
		correctCount,
		total: exam.questions.length,
		topicStats
	});
	renderExamReview(reviewRows);

	exam = null;
	renderStats();
	renderJournal();
	ui.examResult.setAttribute('tabindex', '-1');
	ui.examResult.focus();
}

function chooseNextCard() {
	const now = Date.now();
	const due = flashcards.filter((card) => state.flashcards[card.id]?.dueAt <= now);
	const pool = due.length
		? due
		: flashcards.slice().sort((left, right) => (state.flashcards[left.id]?.dueAt ?? 0) - (state.flashcards[right.id]?.dueAt ?? 0));

	activeCard = pool[0] || null;
	cardShown = false;
	renderCard();
}

function renderCard() {
	if (!activeCard) return;
	const progress = state.flashcards[activeCard.id];
	const front = currentLanguage === 'de' && activeCard.frontDe ? activeCard.frontDe : activeCard.front;
	const back = currentLanguage === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back;
	ui.flashTopic.textContent = activeCard.topic;
	ui.flashFront.textContent = front;
	ui.flashBack.textContent = back;
	ui.flashBack.hidden = !cardShown;
	ui.flashShow.hidden = cardShown;
	ui.flashGrades.hidden = !cardShown;
	ui.flashMeta.textContent = getDueCardCount()
		? t('flashcards.dueCards', { count: getDueCardCount() })
		: t('flashcards.nextCard', { date: formatDate(progress.dueAt) });
}

function rateCard(grade) {
	if (!activeCard) return;
	const progress = state.flashcards[activeCard.id];
	const now = Date.now();

	if (grade === 'again') {
		progress.interval = 1;
		progress.streak = 0;
		progress.dueAt = now + 10 * 60 * 1000;
	}
	if (grade === 'good') {
		progress.interval = Math.max(1, Math.round(progress.interval * 2));
		progress.streak += 1;
		progress.dueAt = now + progress.interval * DAY;
	}
	if (grade === 'easy') {
		progress.interval = Math.max(2, Math.round(progress.interval * 3));
		progress.streak += 1;
		progress.dueAt = now + progress.interval * DAY;
	}

	progress.last = grade;
	void saveState();
	renderStats();
	chooseNextCard();
}

function renderJournal() {
	const items = Object.entries(state.wrongJournal)
		.map(([id, data]) => ({
			id,
			question: questionById.get(id),
			count: Number(data.count) || 0,
			last: Number(data.lastWrongAt) || 0
		}))
		.filter((item) => item.question)
		.sort((left, right) => right.count - left.count || right.last - left.last);

	ui.journalList.innerHTML = '';
	if (!items.length) {
		ui.journalList.innerHTML = `<p class="meta">${t('journal.empty')}</p>`;
		return;
	}

	items.forEach((item) => {
		const row = document.createElement('article');
		row.className = 'journal-item';
		const title = document.createElement('h4');
		title.textContent = localizeQuestionData(item.question).prompt;
		const meta = document.createElement('p');
		meta.className = 'meta';
		meta.textContent = t('journal.rowMeta', {
			count: item.count,
			last: formatDate(item.last)
		});
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'secondary';
		button.textContent = t('journal.practiceNow');
		button.onclick = () => {
			switchTab('quiz');
			showQuizQuestion(item.id);
			ui.quizQuestion.setAttribute('tabindex', '-1');
			ui.quizQuestion.focus();
		};
		row.append(title, meta, button);
		ui.journalList.append(row);
	});
}

function getGlossaryDefinition(item) {
	if (currentLanguage === 'de' && item.definitionDe) return item.definitionDe;
	return item.definition;
}

function renderGlossary(filter = '') {
	const query = filter.trim().toLowerCase();
	const items = glossaryTerms.filter((item) => {
		if (!query) return true;
		const def = getGlossaryDefinition(item);
		return item.term.toLowerCase().includes(query) || def.toLowerCase().includes(query);
	});

	ui.glossaryList.innerHTML = '';
	if (!items.length) {
		ui.glossaryList.innerHTML = `<p class="meta">${t('glossary.empty')}</p>`;
		return;
	}

	items.forEach((item) => {
		const row = document.createElement('article');
		row.className = 'glossary-item';
		const title = document.createElement('h4');
		title.textContent = item.term;
		const body = document.createElement('p');
		body.textContent = getGlossaryDefinition(item);
		row.append(title, body);
		ui.glossaryList.append(row);
	});
}

async function resetAll() {
	if (!confirm(t('reset.confirm'))) return;
	state = clone(defaults);
	hydrate(state);
	renderRoadmapChecks();
	renderStats();
	renderJournal();
	renderGlossary(ui.glossarySearch.value || '');
	refillQuizDeck();
	showQuizQuestion();
	chooseNextCard();
	ui.examStart.hidden = false;
	ui.examStage.hidden = true;
	ui.examResult.innerHTML = '';
	ui.examReview.innerHTML = '';
	ui.examTimer.textContent = '20:00';
	await saveState(true);
}

function bindEvents() {
	if (ui.themeToggle) ui.themeToggle.onclick = () => toggleTheme();
	if (ui.languageToggle) ui.languageToggle.onclick = () => toggleLanguage();

	roadmapBoxes.forEach((box) => {
		box.onchange = () => {
			state.roadmapDone[box.dataset.roadmapKey] = box.checked;
			renderStats();
			void saveState();
		};
	});

	tabs.forEach((tab) => {
		tab.onclick = () => switchTab(tab.dataset.tab);
	});

	const tablist = document.querySelector('[role="tablist"]');
	if (tablist) {
		tablist.addEventListener('keydown', (e) => {
			if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
			const current = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
			const next = e.key === 'ArrowRight' ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
			e.preventDefault();
			switchTab(tabs[next].dataset.tab);
			tabs[next].focus();
		});
	}

	ui.quizNext.onclick = () => showQuizQuestion();
	ui.quizHint.onclick = () => {
		if (!activeQuestion) return;
		const hintText = activeQuestion.hint || activeQuestion.explanation;
		ui.quizHintText.textContent = hintText;
		ui.quizHintText.hidden = false;
		ui.quizHint.hidden = true;
	};
	ui.quizSkip.onclick = () => showQuizQuestion();
	ui.examStart.onclick = () => startExam();
	ui.examNext.onclick = () => nextExamQuestion();
	ui.flashShow.onclick = () => {
		cardShown = true;
		renderCard();
	};
	ui.flashAgain.onclick = () => rateCard('again');
	ui.flashGood.onclick = () => rateCard('good');
	ui.flashEasy.onclick = () => rateCard('easy');
	ui.glossarySearch.oninput = (event) => renderGlossary(event.target.value);
	if (ui.resetProgress) ui.resetProgress.onclick = () => void resetAll();

	document.addEventListener('keydown', (e) => {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

		const activeTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
		const activePanel = activeTab ? activeTab.dataset.tab : '';

		if (activePanel === 'quiz' && !exam) {
			if (e.key >= '1' && e.key <= '9' && !quizLocked) {
				const index = Number(e.key) - 1;
				const buttons = [...ui.quizOptions.querySelectorAll('button')];
				if (buttons[index] && !buttons[index].disabled) {
					e.preventDefault();
					buttons[index].click();
				}
				return;
			}
			if (e.key === 'h' || e.key === 'H') {
				if (!ui.quizHint.hidden) { e.preventDefault(); ui.quizHint.click(); }
				return;
			}
			if (e.key === 's' || e.key === 'S') {
				if (!ui.quizSkip.hidden) { e.preventDefault(); ui.quizSkip.click(); }
				return;
			}
			if ((e.key === 'n' || e.key === 'N' || e.key === 'Enter') && !ui.quizNext.disabled) {
				e.preventDefault();
				ui.quizNext.click();
				return;
			}
		}

		if (activePanel === 'flashcards') {
			if ((e.key === ' ' || e.key === 'Enter') && !ui.flashShow.hidden) {
				e.preventDefault();
				ui.flashShow.click();
				return;
			}
			if (!ui.flashGrades.hidden) {
				if (e.key === '1') { e.preventDefault(); ui.flashAgain.click(); return; }
				if (e.key === '2') { e.preventDefault(); ui.flashGood.click(); return; }
				if (e.key === '3') { e.preventDefault(); ui.flashEasy.click(); return; }
			}
		}

		if (activePanel === 'exam' && exam) {
			if (e.key >= '1' && e.key <= '9') {
				const index = Number(e.key) - 1;
				const buttons = [...ui.examOptions.querySelectorAll('button')];
				if (buttons[index]) { e.preventDefault(); buttons[index].click(); }
				return;
			}
			if ((e.key === 'n' || e.key === 'N' || e.key === 'Enter') && !ui.examNext.disabled) {
				e.preventDefault();
				ui.examNext.click();
				return;
			}
		}

		if (e.key === 'd' || e.key === 'D') {
			e.preventDefault();
			toggleTheme();
			return;
		}

		if (e.key === 'l' || e.key === 'L') {
			e.preventDefault();
			toggleLanguage();
		}
	});
}

async function init() {
	applyLanguage(readStoredLanguage(), { persist: false });
	applyTheme(resolveTheme(readStoredTheme()));
	bindSystemTheme();
	bindEvents();
	const saved = await loadState();
	hydrate(saved);
	renderRoadmapChecks();
	renderStats();
	renderJournal();
	renderGlossary('');
	refillQuizDeck();
	showQuizQuestion();
	chooseNextCard();
	switchTab('quiz');
	await saveState(true);
}

void init();
