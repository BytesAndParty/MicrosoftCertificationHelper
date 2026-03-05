import { flashcards, glossaryTerms, quizQuestions, roadmapThemes } from '../data/content';
import { buildOptionPools, createRuntimeQuestion as buildRuntimeQuestion, getQuestionType, localizeQuestionData as localizeQuestion, shuffle } from '../lib/study/quiz';
import { applySpacedRepetitionGrade, selectNextStudyCard } from '../lib/study/spaced-repetition';
import { clampFloat, clampInt, DEFAULT_SETTINGS } from '../lib/study/settings';
import { createDefaultStudyState, FALLBACK_KEY, hydrateStudyState } from '../lib/study/state';

const DB = { name: 'ai900-study-helper', version: 1, store: 'kv', key: 'state' };
const EXAM_SECONDS = 20 * 60;
const EXAM_QUESTION_COUNT = 10;
const THEME_KEY = 'ai900_theme_pref';
const LANG_KEY = 'ai900_lang_pref';
const THEME_MEDIA = window.matchMedia('(prefers-color-scheme: dark)');

const byId = (id) => document.getElementById(id);
const questionById = new Map(quizQuestions.map((question) => [question.id, question]));
const themeById = new Map(roadmapThemes.map((theme) => [theme.id, theme]));
const roadmapBoxes = [...document.querySelectorAll('[data-roadmap-key]')];
const roadmapCards = [...document.querySelectorAll('.theme-card[data-roadmap-id]')];

const optionPoolsByLanguage = {
	en: buildOptionPools(quizQuestions, 'en'),
	de: buildOptionPools(quizQuestions, 'de')
};

function buildOptionRationaleMap(language = 'en') {
	const map = {};
	quizQuestions.forEach((question) => {
		const localized = localizeQuestion(question, language);
		const options = Array.isArray(localized.options) ? localized.options : [];
		const optionExplanations = localized.optionExplanations;
		if (Array.isArray(optionExplanations)) {
			optionExplanations.forEach((explanation, index) => {
				const optionText = options[index];
				if (optionText && typeof explanation === 'string' && explanation.trim()) {
					map[optionText] = explanation.trim();
				}
			});
		} else if (optionExplanations && typeof optionExplanations === 'object') {
			Object.entries(optionExplanations).forEach(([optionText, explanation]) => {
				if (typeof explanation === 'string' && explanation.trim()) {
					map[optionText] = explanation.trim();
				}
			});
		}
		const correctOption = options[localized.answerIndex];
		if (correctOption && typeof localized.explanation === 'string' && localized.explanation.trim() && !map[correctOption]) {
			map[correctOption] = localized.explanation.trim();
		}
	});
	return map;
}

const optionRationaleByLanguage = {
	en: buildOptionRationaleMap('en'),
	de: buildOptionRationaleMap('de')
};

const glossaryCards = glossaryTerms.map((item, index) => ({
	id: `g${index + 1}`,
	topic: 'Glossary',
	front: item.term,
	back: item.definition,
	frontDe: item.term,
	backDe: item.definitionDe || item.definition
}));

const glossaryLookup = new Map();
glossaryTerms.forEach((item) => {
	glossaryLookup.set(item.term.toLowerCase(), item);
});

const ui = {
	roadmapSummary: byId('roadmap-summary'),
	metricRoadmap: byId('metric-roadmap'),
	metricAccuracy: byId('metric-accuracy'),
	metricExam: byId('metric-exam'),
	metricDue: byId('metric-due'),
	metricJournal: byId('metric-journal'),
	sessionStatus: byId('session-status'),
	sessionProgress: byId('session-progress'),
	sessionProgressValue: byId('session-progress-value'),
	sessionDetails: byId('session-details'),
	sessionClear: byId('session-clear'),
	historyStreak: byId('history-streak'),
	historyHeatmap: byId('history-heatmap'),
	historyTopicTrend: byId('history-topic-trend'),
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
	flashBox: byId('flashcard-box'),
	flashTopic: byId('flashcard-topic'),
	flashFront: byId('flashcard-front'),
	flashBack: byId('flashcard-back'),
	flashShow: byId('flashcard-show'),
	flashHint: byId('flashcard-hint'),
	flashHintText: byId('flashcard-hint-text'),
	flashGrades: byId('flashcard-grade-actions'),
	flashAgain: byId('flashcard-again'),
	flashGood: byId('flashcard-good'),
	flashEasy: byId('flashcard-easy'),
	flashMeta: byId('flashcard-meta'),
	journalList: byId('journal-list'),
	quizHint: byId('quiz-hint'),
	quizSkip: byId('quiz-skip'),
	quizHintText: byId('quiz-hint-text'),
	quizBookmark: byId('quiz-bookmark'),
	glossarySearch: byId('glossary-search'),
	glossaryCardCount: byId('glossary-card-count'),
	glossaryCardFront: byId('glossary-card-front'),
	glossaryCardBack: byId('glossary-card-back'),
	glossaryCardShow: byId('glossary-card-show'),
	glossaryGrades: byId('glossary-grade-actions'),
	glossaryCardAgain: byId('glossary-card-again'),
	glossaryCardGood: byId('glossary-card-good'),
	glossaryCardEasy: byId('glossary-card-easy'),
	glossaryCardMeta: byId('glossary-card-meta'),
	resetProgress: byId('reset-progress'),
	themeToggle: byId('theme-toggle'),
	languageToggle: byId('language-toggle'),
	shortcutsPanel: byId('shortcuts-panel'),
	overlayQuiz: byId('overlay-quiz'),
	overlayExam: byId('overlay-exam'),
	overlayFlashcards: byId('overlay-flashcards'),
	overlayGlossary: byId('overlay-glossary'),
	overlayJournal: byId('overlay-journal'),
	overlaySettings: byId('overlay-settings'),
	overlayWelcome: byId('overlay-welcome'),
	settingsToggle: byId('settings-toggle'),
	settingNewCards: byId('setting-new-cards'),
	settingNewGlossary: byId('setting-new-glossary'),
	settingMaxReviews: byId('setting-max-reviews'),
	settingGoodMult: byId('setting-good-mult'),
	settingEasyMult: byId('setting-easy-mult'),
	settingLapse: byId('setting-lapse'),
	settingsSave: byId('settings-save'),
	settingsReset: byId('settings-reset'),
	welcomeStart: byId('welcome-start')
};

const i18n = {
	en: {
		'hero.copy': 'Quiz mode, exam mode, flashcards, an error journal, and a glossary with local progress stored in the browser database.',
		'theme.toDark': 'Switch to dark mode',
		'theme.toLight': 'Switch to light mode',
		'language.toggleLabel': 'Switch language to German',
		'roadmap.title': 'Roadmap',
		'metrics.roadmap': 'Roadmap',
			'metrics.quizAccuracy': 'Quiz Accuracy',
			'metrics.bestExam': 'Best Exam',
			'metrics.dueCards': 'Due Cards',
			'metrics.journal': 'Error Journal',
			'session.title': 'Session Goal',
			'session.goalSprint': 'Sprint 10',
			'session.goalFocus': 'Focus 20',
			'session.goalAccuracy': 'Accuracy 90',
			'session.clear': 'Clear goal',
			'session.statusIdle': 'No active goal',
			'session.statusActive': 'Active: {label}',
			'session.statusCompleted': 'Completed: {label}',
			'session.statusFailed': 'Expired: {label}',
			'session.detailIdle': 'Start a goal to track this learning session.',
			'session.detailActive': 'Answered {answered}/{targetAnswers} | Accuracy {accuracy}%/{targetAccuracy}% | {minutesLeft} min left',
			'session.detailCompleted': 'Done in {elapsed} min with {accuracy}% accuracy ({answered} answers).',
			'session.detailFailed': 'Time ended after {elapsed} min | {answered}/{targetAnswers} answers | {accuracy}% accuracy.',
			'history.title': 'Learning History',
			'history.streakNone': 'No streak yet',
			'history.streak': 'Streak: {days} days',
			'history.topicTitle': 'Topic trend',
			'history.topicEmpty': 'Answer more quiz questions to unlock topic trends.',
			'history.topicLine': '{topic}: {accuracy}% ({total} answered)',
			'tabs.ariaLabel': 'Study modes',
		'tabs.quiz': 'Quiz',
		'tabs.exam': 'Exam',
		'tabs.flashcards': 'Flashcards',
		'tabs.journal': 'Error Journal',
		'tabs.glossary': 'Glossary',
		'hero.modeQuizDesc': 'Instant feedback',
		'hero.modeExamDesc': 'Timed simulation',
		'hero.modeFlashcardsDesc': 'Spaced repetition',
		'hero.modeGlossaryDesc': 'Term flashcards',
		'hero.modeJournalDesc': 'Review mistakes',
		'overlay.close': 'Close',
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
		'flashcards.showHint': 'Show hint',
		'flashcards.again': 'Again',
		'flashcards.good': 'Good',
		'flashcards.easy': 'Easy',
		'flashcards.hintPrefix': 'Keyword hint: {keywords}',
		'flashcards.hintFallback': 'Hint: Focus on the core distinction and Azure service purpose.',
		'journal.title': 'Error Journal',
		'journal.meta': 'Prioritized list of your missed questions.',
		'glossary.title': 'Glossary',
		'glossary.metaFlashcard': 'Flip through AI-900 terms as flashcards.',
		'glossary.search': 'Search',
		'glossary.placeholder': 'Term or keyword...',
		'glossary.showDef': 'Show definition',
		'glossary.empty': 'No matches found.',
		'glossary.dueCards': 'Due terms: {count}',
		'glossary.nextCard': 'Next term: {date}',
		'reset.button': 'Reset progress',
		'type.trueFalse': 'True/False',
		'type.multipleChoice': 'Multiple Choice',
		'roadmap.summary': '{done} / {total} todos completed',
		'quiz.pool': ' | Pool: {count} options',
		'quiz.progress': 'Answered: {answered} | Correct: {correct}{poolHint}',
		'quiz.feedback.correct': 'Correct.',
		'quiz.feedback.wrong': 'Not correct.',
		'quiz.optionReasonCorrect': 'Correct option: {answer}. {explanation}',
		'quiz.optionReasonWrong': 'Not correct: {answer}. Correct answer: {correct}. {explanation}',
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
		'reset.confirm': 'Reset all learning progress?',
		'a11y.skipLink': 'Skip to study workspace',
		'a11y.timeRemaining': 'Time remaining: {time}',
		'shortcuts.title': 'Keyboard shortcuts',
		'quiz.bookmarkLabel': 'Save question',
		'shortcuts.quiz': '1-4 Answer | H Hint | S Skip | N Next | B Bookmark',
		'shortcuts.flash': 'Space Reveal | H Hint (Flashcards) | N Next Card | 1 Again | 2 Good | 3 Easy | F Search (Glossary)',
		'shortcuts.global': 'Q Quiz | E Exam | F Flashcards | G Glossary | J Journal | O Settings | D Theme | L Language | ? Shortcuts | ESC Close',
		'shortcuts.quizOverlay': 'Shortcuts: 1-4 answer | H hint | S skip | N/Enter next | B bookmark',
		'shortcuts.examOverlay': 'Shortcuts: S start | 1-4 answer | N/Enter next | ESC close',
		'shortcuts.flashOverlay': 'Shortcuts: Space/Enter reveal | H hint | N next card | 1 again | 2 good | 3 easy',
		'shortcuts.glossaryOverlay': 'Shortcuts: Space/Enter reveal | N next term | F search | 1 again | 2 good | 3 easy | ESC close',
		'shortcuts.journalOverlay': 'Shortcuts: ESC close | Q/E/F/G/J switch mode | D theme | L language',
		'settings.title': 'Settings',
		'settings.newCardsDay': 'New flashcards / day',
		'settings.newGlossaryDay': 'New glossary cards / day',
		'settings.maxReviews': 'Max reviews / day',
		'settings.goodMultiplier': 'Interval multiplier "Good"',
		'settings.easyMultiplier': 'Interval multiplier "Easy"',
		'settings.lapseMinutes': 'Lapse interval (minutes)',
		'settings.save': 'Save',
		'settings.reset': 'Reset defaults',
		'welcome.title': 'Welcome to AI-900 Study Companion',
		'welcome.intro': 'This app helps you prepare for the Microsoft AI-900 certification. Here are the study modes:',
		'welcome.quiz': 'Answer questions with instant feedback and track your accuracy.',
		'welcome.exam': 'Simulate a timed exam with 10 questions and detailed review.',
		'welcome.flashcards': 'Study concepts with spaced repetition scheduling.',
		'welcome.glossary': 'Browse and memorize AI-900 terms as flashcards.',
		'welcome.journal': 'Review and practice your most frequent mistakes.',
		'welcome.hint': 'Tip: Use keyboard shortcuts (D for dark mode, L for language) and the settings gear to customize your experience.',
		'welcome.start': 'Get started',
		'tooltip.quiz': 'Answer questions with instant feedback and track your accuracy over time.',
		'tooltip.exam': 'Simulate a timed exam with 10 questions in 20 minutes and get a detailed review.',
		'tooltip.flashcards': 'Study AI-900 concepts with spaced repetition. Rate cards as Again, Good, or Easy.',
		'tooltip.glossary': 'Browse and memorize AI-900 terms as flashcards with search and spaced repetition.',
		'tooltip.journal': 'Review your most frequent mistakes and practice the questions you got wrong.'
	},
	de: {
		'hero.copy': 'Quiz-Modus, Prüfungsmodus, Karteikarten, Fehlerjournal und Glossar mit lokalem Fortschritt in der Browser-Datenbank.',
		'theme.toDark': 'Auf Dark Mode wechseln',
		'theme.toLight': 'Auf Light Mode wechseln',
		'language.toggleLabel': 'Sprache auf Englisch wechseln',
		'roadmap.title': 'Roadmap',
		'metrics.roadmap': 'Roadmap',
			'metrics.quizAccuracy': 'Quiz-Genauigkeit',
			'metrics.bestExam': 'Bestes Prüfungsergebnis',
			'metrics.dueCards': 'Fällige Karten',
			'metrics.journal': 'Fehlerjournal',
			'session.title': 'Session-Ziel',
			'session.goalSprint': 'Sprint 10',
			'session.goalFocus': 'Fokus 20',
			'session.goalAccuracy': 'Accuracy 90',
			'session.clear': 'Ziel löschen',
			'session.statusIdle': 'Kein aktives Ziel',
			'session.statusActive': 'Aktiv: {label}',
			'session.statusCompleted': 'Erreicht: {label}',
			'session.statusFailed': 'Abgelaufen: {label}',
			'session.detailIdle': 'Starte ein Ziel, um diese Lerneinheit zu verfolgen.',
			'session.detailActive': '{answered}/{targetAnswers} beantwortet | Accuracy {accuracy}%/{targetAccuracy}% | {minutesLeft} Min übrig',
			'session.detailCompleted': 'In {elapsed} Min erreicht mit {accuracy}% Accuracy ({answered} Antworten).',
			'session.detailFailed': 'Zeit vorbei nach {elapsed} Min | {answered}/{targetAnswers} Antworten | {accuracy}% Accuracy.',
			'history.title': 'Lernverlauf',
			'history.streakNone': 'Noch keine Serie',
			'history.streak': 'Serie: {days} Tage',
			'history.topicTitle': 'Themen-Trend',
			'history.topicEmpty': 'Beantworte mehr Quizfragen, um Themen-Trends zu sehen.',
			'history.topicLine': '{topic}: {accuracy}% ({total} beantwortet)',
			'tabs.ariaLabel': 'Lernmodi',
		'tabs.quiz': 'Quiz',
		'tabs.exam': 'Prüfung',
		'tabs.flashcards': 'Karteikarten',
		'tabs.journal': 'Fehlerjournal',
		'tabs.glossary': 'Glossar',
		'hero.modeQuizDesc': 'Sofort-Feedback',
		'hero.modeExamDesc': 'Zeitsimulation',
		'hero.modeFlashcardsDesc': 'Spaced Repetition',
		'hero.modeGlossaryDesc': 'Begriff-Karten',
		'hero.modeJournalDesc': 'Fehler wiederholen',
		'overlay.close': 'Schließen',
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
		'flashcards.showHint': 'Hinweis anzeigen',
		'flashcards.again': 'Nochmal',
		'flashcards.good': 'Gut',
		'flashcards.easy': 'Sicher',
		'flashcards.hintPrefix': 'Stichwort-Hinweis: {keywords}',
		'flashcards.hintFallback': 'Hinweis: Achte auf den Kernunterschied und den Azure-Dienstzweck.',
		'journal.title': 'Fehlerjournal',
		'journal.meta': 'Priorisierte Liste deiner falsch beantworteten Fragen.',
		'glossary.title': 'Glossar',
		'glossary.metaFlashcard': 'AI-900 Begriffe als Karteikarten durchblättern.',
		'glossary.search': 'Suche',
		'glossary.placeholder': 'Begriff oder Stichwort...',
		'glossary.showDef': 'Definition zeigen',
		'glossary.empty': 'Keine Treffer.',
		'glossary.dueCards': 'Fällige Begriffe: {count}',
		'glossary.nextCard': 'Nächster Begriff: {date}',
		'reset.button': 'Fortschritt zurücksetzen',
		'type.trueFalse': 'Wahr/Falsch',
		'type.multipleChoice': 'Multiple Choice',
		'roadmap.summary': '{done} / {total} To-dos erledigt',
		'quiz.pool': ' | Pool: {count} Optionen',
		'quiz.progress': 'Beantwortet: {answered} | Richtig: {correct}{poolHint}',
		'quiz.feedback.correct': 'Richtig.',
		'quiz.feedback.wrong': 'Nicht korrekt.',
		'quiz.optionReasonCorrect': 'Richtige Option: {answer}. {explanation}',
		'quiz.optionReasonWrong': 'Nicht korrekt: {answer}. Richtige Antwort: {correct}. {explanation}',
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
		'reset.confirm': 'Kompletten Lernfortschritt zurücksetzen?',
		'a11y.skipLink': 'Zum Lernbereich springen',
		'a11y.timeRemaining': 'Verbleibende Zeit: {time}',
		'shortcuts.title': 'Tastenkürzel',
		'quiz.bookmarkLabel': 'Frage speichern',
		'shortcuts.quiz': '1-4 Antwort | H Hinweis | S Überspringen | N Nächste | B Merken',
		'shortcuts.flash': 'Leertaste Aufdecken | H Hinweis (Flashcards) | N Nächste Karte | 1 Nochmal | 2 Gut | 3 Sicher | F Suche (Glossar)',
		'shortcuts.global': 'Q Quiz | E Prüfung | F Flashcards | G Glossar | J Journal | O Einstellungen | D Theme | L Sprache | ? Kürzel | ESC Schließen',
		'shortcuts.quizOverlay': 'Tastenkürzel: 1-4 Antwort | H Hinweis | S Überspringen | N/Enter Nächste | B Merken',
		'shortcuts.examOverlay': 'Tastenkürzel: S Start | 1-4 Antwort | N/Enter Nächste | ESC Schließen',
		'shortcuts.flashOverlay': 'Tastenkürzel: Leertaste/Enter Aufdecken | H Hinweis | N Nächste Karte | 1 Nochmal | 2 Gut | 3 Sicher',
		'shortcuts.glossaryOverlay': 'Tastenkürzel: Leertaste/Enter Aufdecken | N Nächster Begriff | F Suche | 1 Nochmal | 2 Gut | 3 Sicher | ESC Schließen',
		'shortcuts.journalOverlay': 'Tastenkürzel: ESC Schließen | Q/E/F/G/J Modus wechseln | D Theme | L Sprache',
		'settings.title': 'Einstellungen',
		'settings.newCardsDay': 'Neue Karteikarten / Tag',
		'settings.newGlossaryDay': 'Neue Glossar-Karten / Tag',
		'settings.maxReviews': 'Max. Wiederholungen / Tag',
		'settings.goodMultiplier': 'Intervall-Multiplikator „Gut"',
		'settings.easyMultiplier': 'Intervall-Multiplikator „Sicher"',
		'settings.lapseMinutes': 'Lapse-Intervall (Minuten)',
		'settings.save': 'Speichern',
		'settings.reset': 'Standardwerte',
		'welcome.title': 'Willkommen beim AI-900 Lernbegleiter',
		'welcome.intro': 'Diese App hilft dir bei der Vorbereitung auf die Microsoft AI-900 Zertifizierung. Hier sind die Lernmodi:',
		'welcome.quiz': 'Beantworte Fragen mit Sofort-Feedback und verfolge deine Genauigkeit.',
		'welcome.exam': 'Simuliere eine Zeitprüfung mit 10 Fragen und detaillierter Auswertung.',
		'welcome.flashcards': 'Lerne Konzepte mit Spaced-Repetition-Planung.',
		'welcome.glossary': 'Durchsuche und merke dir AI-900 Begriffe als Karteikarten.',
		'welcome.journal': 'Wiederhole und übe deine häufigsten Fehler.',
		'welcome.hint': 'Tipp: Nutze Tastenkürzel (D für Dark Mode, L für Sprache) und das Zahnrad-Symbol für Einstellungen.',
		'welcome.start': 'Los geht\'s',
		'tooltip.quiz': 'Beantworte Fragen mit Sofort-Feedback und verfolge deine Genauigkeit über die Zeit.',
		'tooltip.exam': 'Simuliere eine Zeitprüfung mit 10 Fragen in 20 Minuten und erhalte eine detaillierte Auswertung.',
		'tooltip.flashcards': 'Lerne AI-900 Konzepte mit Spaced Repetition. Bewerte Karten als Nochmal, Gut oder Sicher.',
		'tooltip.glossary': 'Durchsuche und merke dir AI-900 Begriffe als Karteikarten mit Suche und Spaced Repetition.',
		'tooltip.journal': 'Wiederhole deine häufigsten Fehler und übe die Fragen, die du falsch beantwortet hast.'
	}
};

let state = createDefaultStudyState();
let dbPromise;
let saveTimer;
let quizDeck = [];
let activeQuestion = null;
let quizLocked = false;
let lastQuizSelectedIndex = null;
let exam = null;
let examInterval;
let activeCard = null;
let cardShown = false;
let flashHintShown = false;
let activeGlossaryCard = null;
let glossaryCardShown = false;
let currentLanguage = 'en';
let activeOverlay = null;
let previousFocusElement = null;
let flashSwipeTimer;

const SESSION_PRESETS = {
	sprint: { labelKey: 'session.goalSprint', targetAnswers: 10, targetAccuracy: 70, durationMinutes: 15 },
	focus: { labelKey: 'session.goalFocus', targetAnswers: 20, targetAccuracy: 75, durationMinutes: 30 },
	accuracy: { labelKey: 'session.goalAccuracy', targetAnswers: 15, targetAccuracy: 90, durationMinutes: 25 }
};

const HINT_STOPWORDS_EN = new Set([
	'the', 'and', 'for', 'with', 'from', 'that', 'this', 'into', 'your', 'you', 'are', 'can', 'also', 'than',
	'only', 'more', 'most', 'used', 'using', 'when', 'what', 'where', 'which', 'about', 'core', 'azure', 'service',
	'model', 'models', 'card', 'cards', 'data', 'text', 'through', 'into', 'each', 'their', 'them', 'they', 'its'
]);
const HINT_STOPWORDS_DE = new Set([
	'der', 'die', 'das', 'den', 'dem', 'des', 'und', 'oder', 'ein', 'eine', 'einer', 'einem', 'eines', 'mit',
	'für', 'fuer', 'von', 'auf', 'aus', 'bei', 'als', 'auch', 'nur', 'mehr', 'wenn', 'was', 'wie', 'welche',
	'welcher', 'welches', 'diese', 'dieser', 'dieses', 'dass', 'ist', 'sind', 'wird', 'werden', 'kann', 'können',
	'koennen', 'durch', 'über', 'ueber', 'dein', 'deine', 'deiner', 'deinem', 'deines', 'karte', 'karten'
]);

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

function formatDate(timestamp) {
	const locale = currentLanguage === 'de' ? 'de-DE' : 'en-US';
	return new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(timestamp));
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
	document.documentElement.classList.toggle('dark', theme === 'dark');
	if (!ui.themeToggle) return;

	const isDark = theme === 'dark';
	const label = isDark ? t('theme.toLight') : t('theme.toDark');
	ui.themeToggle.innerHTML = isDark ? ICON_SUN : ICON_MOON;
	ui.themeToggle.setAttribute('aria-label', label);
	ui.themeToggle.setAttribute('title', label);
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

/* ---- Overlay management ---- */

function openOverlay(overlayElement) {
	if (activeOverlay) closeOverlay(activeOverlay);

	previousFocusElement = document.activeElement;
	activeOverlay = overlayElement;
	overlayElement.hidden = false;
	document.body.style.overflow = 'hidden';

	overlayElement.addEventListener('keydown', handleOverlayKeydown);
	const backdrop = overlayElement.querySelector('.overlay-backdrop');
	if (backdrop) backdrop.addEventListener('click', handleBackdropClick);
	const closeBtn = overlayElement.querySelector('.overlay-close');
	if (closeBtn) closeBtn.addEventListener('click', handleCloseClick);

	const firstFocusable = overlayElement.querySelector(
		'button:not([hidden]):not([disabled]), [href], input:not([hidden]), select, textarea, [tabindex]:not([tabindex="-1"])'
	);
	if (firstFocusable) firstFocusable.focus();
}

function closeOverlay(overlayElement) {
	if (!overlayElement || overlayElement.hidden) return;

	overlayElement.hidden = true;
	document.body.style.overflow = '';
	overlayElement.removeEventListener('keydown', handleOverlayKeydown);
	const backdrop = overlayElement.querySelector('.overlay-backdrop');
	if (backdrop) backdrop.removeEventListener('click', handleBackdropClick);
	const closeBtn = overlayElement.querySelector('.overlay-close');
	if (closeBtn) closeBtn.removeEventListener('click', handleCloseClick);
	activeOverlay = null;

	if (previousFocusElement && typeof previousFocusElement.focus === 'function') {
		previousFocusElement.focus();
	}
	previousFocusElement = null;
}

function handleBackdropClick() {
	if (activeOverlay) closeOverlay(activeOverlay);
}

function handleCloseClick() {
	if (activeOverlay) closeOverlay(activeOverlay);
}

function handleOverlayKeydown(e) {
	if (e.key === 'Escape') {
		e.preventDefault();
		closeOverlay(activeOverlay);
		return;
	}

	if (e.key === 'Tab') {
		const overlay = activeOverlay;
		if (!overlay) return;
		const focusables = [...overlay.querySelectorAll(
			'button:not([hidden]):not([disabled]), [href], input:not([hidden]), select, textarea, [tabindex]:not([tabindex="-1"])'
		)].filter((el) => !el.closest('[hidden]'));

		if (!focusables.length) return;

		const first = focusables[0];
		const last = focusables[focusables.length - 1];

		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}
}

/* ---- i18n ---- */

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

	document.querySelectorAll('[data-i18n-tooltip]').forEach((node) => {
		const key = node.dataset.i18nTooltip;
		if (!key) return;
		node.setAttribute('data-tooltip', t(key));
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
					activeQuestion.optionExplanationsByOption = {
						...(activeQuestion.optionExplanationsByOption || {}),
						...buildDisplayedOptionExplanationMap(localizedBase, activeQuestion.options)
					};
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
			if (lastQuizSelectedIndex !== null) {
				[...ui.quizOptions.querySelectorAll('button')].forEach((button) => {
					const index = Number(button.dataset.index);
					renderQuizOptionOutcome(button, index, lastQuizSelectedIndex);
				});
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
	if (exam) renderExamQuestion();
	if (activeCard) renderCard();
	if (activeGlossaryCard) renderGlossaryCard();
}

function toggleLanguage() {
	applyLanguage(currentLanguage === 'en' ? 'de' : 'en');
}

/* ---- Question helpers ---- */

function localizeQuestionData(question, language = currentLanguage) {
	return localizeQuestion(question, language);
}

function buildDisplayedOptionExplanationMap(localizedQuestion, runtimeOptions) {
	const map = {};
	if (!localizedQuestion || !Array.isArray(runtimeOptions)) return map;
	const { optionExplanations } = localizedQuestion;
	const baseOptions = Array.isArray(localizedQuestion.options) ? localizedQuestion.options : [];

	if (Array.isArray(optionExplanations)) {
		optionExplanations.forEach((explanation, index) => {
			const optionText = baseOptions[index];
			if (typeof explanation === 'string' && explanation.trim() && optionText && runtimeOptions.includes(optionText)) {
				map[optionText] = explanation.trim();
			}
		});
		return map;
	}

	if (optionExplanations && typeof optionExplanations === 'object') {
		Object.entries(optionExplanations).forEach(([optionText, explanation]) => {
			if (runtimeOptions.includes(optionText) && typeof explanation === 'string' && explanation.trim()) {
				map[optionText] = explanation.trim();
			}
		});
	}

	return map;
}

function createRuntimeQuestion(baseQuestion) {
	const runtimeQuestion = buildRuntimeQuestion(baseQuestion, {
		language: currentLanguage,
		optionPoolsByLanguage,
		getTypeLabel,
		trueLabel: currentLanguage === 'de' ? 'Wahr' : 'True',
		falseLabel: currentLanguage === 'de' ? 'Falsch' : 'False'
	});
	const localizedBase = localizeQuestionData(baseQuestion);
	runtimeQuestion.optionExplanationsByOption = {
		...(runtimeQuestion.optionExplanationsByOption || {}),
		...buildDisplayedOptionExplanationMap(localizedBase, runtimeQuestion.options)
	};
	return runtimeQuestion;
}

function extractHintKeywords(text, language = currentLanguage) {
	if (!text) return [];
	const stopwords = language === 'de' ? HINT_STOPWORDS_DE : HINT_STOPWORDS_EN;
	const tokens = text
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, ' ')
		.split(/\s+/)
		.filter((token) => token.length >= 4 && !stopwords.has(token));
	const uniqueTokens = [];
	for (const token of tokens) {
		if (uniqueTokens.includes(token)) continue;
		uniqueTokens.push(token);
		if (uniqueTokens.length >= 3) break;
	}
	return uniqueTokens;
}

function buildFlashcardHint(card) {
	const back = currentLanguage === 'de' && card.backDe ? card.backDe : card.back;
	const keywords = extractHintKeywords(back);
	if (!keywords.length) return t('flashcards.hintFallback');
	return t('flashcards.hintPrefix', { keywords: keywords.join(', ') });
}

/* ---- Persistence ---- */

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
	state = hydrateStudyState(saved, flashcards, glossaryCards);
	if (!state.sessionGoal || typeof state.sessionGoal !== 'object') {
		clearSessionGoal();
	}
	if (!state.historyDaily || typeof state.historyDaily !== 'object') {
		state.historyDaily = {};
	}
}

/* ---- Settings ---- */

function populateSettingsUi() {
	ui.settingNewCards.value = state.settings.newCardsPerDay;
	ui.settingNewGlossary.value = state.settings.newGlossaryPerDay;
	ui.settingMaxReviews.value = state.settings.maxReviewsPerDay;
	ui.settingGoodMult.value = state.settings.goodMultiplier;
	ui.settingEasyMult.value = state.settings.easyMultiplier;
	ui.settingLapse.value = state.settings.lapseMinutes;
}

function readSettingsFromUi() {
	return {
		newCardsPerDay: clampInt(ui.settingNewCards.value, 1, 50),
		newGlossaryPerDay: clampInt(ui.settingNewGlossary.value, 1, 70),
		maxReviewsPerDay: clampInt(ui.settingMaxReviews.value, 10, 500),
		goodMultiplier: clampFloat(ui.settingGoodMult.value, 1.0, 5.0),
		easyMultiplier: clampFloat(ui.settingEasyMult.value, 1.5, 7.0),
		lapseMinutes: clampInt(ui.settingLapse.value, 1, 60)
	};
}

function saveSettings() {
	state.settings = readSettingsFromUi();
	populateSettingsUi();
	void saveState();
	closeOverlay(activeOverlay);
}

function resetSettings() {
	state.settings = { ...DEFAULT_SETTINGS };
	populateSettingsUi();
	void saveState();
}

/* ---- Stats & metrics ---- */

function toDateKey(timestamp = Date.now()) {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

function ensureHistoryDay(dayKey) {
	if (!state.historyDaily[dayKey]) {
		state.historyDaily[dayKey] = { answered: 0, correct: 0, reviews: 0 };
	}
	const day = state.historyDaily[dayKey];
	day.answered = Number(day.answered) || 0;
	day.correct = Number(day.correct) || 0;
	day.reviews = Number(day.reviews) || 0;
	return day;
}

function trackDailyHistory({ answered = 0, correct = 0, reviews = 0, at = Date.now() } = {}) {
	const day = ensureHistoryDay(toDateKey(at));
	day.answered += answered;
	day.correct += correct;
	day.reviews += reviews;
}

function clearSessionGoal() {
	state.sessionGoal = {
		preset: '',
		startedAt: 0,
		durationMinutes: 0,
		targetAnswers: 0,
		targetAccuracy: 0,
		answeredStart: state.quiz.answered,
		correctStart: state.quiz.correct,
		completedAt: 0,
		failedAt: 0
	};
}

function startSessionGoal(presetKey) {
	const preset = SESSION_PRESETS[presetKey];
	if (!preset) return;
	state.sessionGoal = {
		preset: presetKey,
		startedAt: Date.now(),
		durationMinutes: preset.durationMinutes,
		targetAnswers: preset.targetAnswers,
		targetAccuracy: preset.targetAccuracy,
		answeredStart: state.quiz.answered,
		correctStart: state.quiz.correct,
		completedAt: 0,
		failedAt: 0
	};
	renderStats();
	void saveState();
}

function getSessionSnapshot(now = Date.now()) {
	const goal = state.sessionGoal;
	if (!goal || !goal.startedAt || !goal.targetAnswers) return null;
	const answered = Math.max(0, state.quiz.answered - goal.answeredStart);
	const correct = Math.max(0, state.quiz.correct - goal.correctStart);
	const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
	const elapsed = Math.max(0, Math.round((now - goal.startedAt) / 60000));
	const minutesLeft = Math.max(0, goal.durationMinutes - elapsed);
	const progress = Math.max(0, Math.min(100, Math.round((answered / goal.targetAnswers) * 100)));
	const isCompleted = answered >= goal.targetAnswers && accuracy >= goal.targetAccuracy;
	const isFailed = !isCompleted && elapsed >= goal.durationMinutes;
	return {
		goal,
		answered,
		accuracy,
		elapsed,
		minutesLeft,
		progress,
		isCompleted,
		isFailed
	};
}

function renderSessionGoal() {
	if (!ui.sessionStatus || !ui.sessionDetails || !ui.sessionProgress || !ui.sessionProgressValue) return;
	const snapshot = getSessionSnapshot();
	if (!snapshot) {
		ui.sessionStatus.textContent = t('session.statusIdle');
		ui.sessionDetails.textContent = t('session.detailIdle');
		ui.sessionProgress.value = 0;
		ui.sessionProgressValue.textContent = '0%';
		return;
	}

	const preset = SESSION_PRESETS[snapshot.goal.preset];
	const label = preset ? t(preset.labelKey) : snapshot.goal.preset;
	let changed = false;
	if (snapshot.isCompleted && !snapshot.goal.completedAt) {
		snapshot.goal.completedAt = Date.now();
		snapshot.goal.failedAt = 0;
		changed = true;
	}
	if (snapshot.isFailed && !snapshot.goal.failedAt && !snapshot.goal.completedAt) {
		snapshot.goal.failedAt = Date.now();
		changed = true;
	}

	let statusKey = 'session.statusActive';
	let detailKey = 'session.detailActive';
	if (snapshot.goal.completedAt) {
		statusKey = 'session.statusCompleted';
		detailKey = 'session.detailCompleted';
	} else if (snapshot.goal.failedAt) {
		statusKey = 'session.statusFailed';
		detailKey = 'session.detailFailed';
	}

	ui.sessionStatus.textContent = t(statusKey, { label });
	ui.sessionDetails.textContent = t(detailKey, {
		answered: snapshot.answered,
		targetAnswers: snapshot.goal.targetAnswers,
		accuracy: snapshot.accuracy,
		targetAccuracy: snapshot.goal.targetAccuracy,
		minutesLeft: snapshot.minutesLeft,
		elapsed: snapshot.elapsed
	});
	ui.sessionProgress.value = snapshot.progress;
	ui.sessionProgressValue.textContent = `${snapshot.progress}%`;

	if (changed) void saveState();
}

function renderHistoryPanel() {
	if (!ui.historyStreak || !ui.historyHeatmap || !ui.historyTopicTrend) return;

	let streakDays = 0;
	const streakCursor = new Date();
	streakCursor.setHours(0, 0, 0, 0);
	while (true) {
		const key = toDateKey(streakCursor.getTime());
		const day = state.historyDaily[key];
		const activity = (day?.answered || 0) + (day?.reviews || 0);
		if (activity <= 0) break;
		streakDays += 1;
		streakCursor.setDate(streakCursor.getDate() - 1);
	}

	ui.historyStreak.textContent = streakDays
		? t('history.streak', { days: streakDays })
		: t('history.streakNone');

	ui.historyHeatmap.innerHTML = '';
	const heatmapStart = new Date();
	heatmapStart.setHours(0, 0, 0, 0);
	heatmapStart.setDate(heatmapStart.getDate() - 27);
	for (let index = 0; index < 28; index += 1) {
		const current = new Date(heatmapStart);
		current.setDate(heatmapStart.getDate() + index);
		const key = toDateKey(current.getTime());
		const day = state.historyDaily[key] || { answered: 0, reviews: 0 };
		const activity = (day.answered || 0) + (day.reviews || 0);
		const level = activity >= 10 ? 4 : activity >= 7 ? 3 : activity >= 4 ? 2 : activity >= 1 ? 1 : 0;
		const cell = document.createElement('span');
		cell.className = `heat-cell level-${level}`;
		cell.setAttribute('title', `${key}: ${activity}`);
		ui.historyHeatmap.append(cell);
	}

	ui.historyTopicTrend.innerHTML = '';
	const topicRows = Object.entries(state.quiz.byTopic || {})
		.map(([topic, values]) => {
			const total = Number(values.total) || 0;
			const correct = Number(values.correct) || 0;
			const accuracy = total ? Math.round((correct / total) * 100) : 0;
			return { topic, total, accuracy };
		})
		.filter((row) => row.total > 0)
		.sort((left, right) => left.accuracy - right.accuracy || right.total - left.total)
		.slice(0, 6);

	if (!topicRows.length) {
		const empty = document.createElement('p');
		empty.className = 'meta';
		empty.textContent = t('history.topicEmpty');
		ui.historyTopicTrend.append(empty);
		return;
	}

	topicRows.forEach((row) => {
		const item = document.createElement('p');
		item.className = `topic-trend-row ${row.accuracy >= 85 ? 'strong' : row.accuracy < 70 ? 'weak' : 'mid'}`;
		item.textContent = t('history.topicLine', {
			topic: row.topic,
			accuracy: row.accuracy,
			total: row.total
		});
		ui.historyTopicTrend.append(item);
	});
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
	const flashDue = flashcards.filter((card) => state.flashcards[card.id]?.dueAt <= now).length;
	const glossaryDue = glossaryCards.filter((card) => state.glossaryFlashcards[card.id]?.dueAt <= now).length;
	return Math.min(flashDue + glossaryDue, state.settings.maxReviewsPerDay);
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
	renderSessionGoal();
	renderHistoryPanel();
}

/* ---- Quiz ---- */

function refillQuizDeck() {
	quizDeck = shuffle(quizQuestions);
}

function formatOptionLabel(optionIndex, optionText) {
	return `${optionIndex + 1}. ${optionText}`;
}

function buildQuizOptionReason(optionIndex) {
	if (!activeQuestion) return '';
	const optionText = activeQuestion.options[optionIndex] || '';
	const explicitReason = activeQuestion.optionExplanationsByOption?.[optionText];
	const globalReason = optionRationaleByLanguage[currentLanguage]?.[optionText];
	const optionReason = explicitReason || globalReason || activeQuestion.explanation;
	if (optionIndex === activeQuestion.correctIndex) {
		return t('quiz.optionReasonCorrect', {
			answer: optionText,
			explanation: optionReason
		});
	}
	return t('quiz.optionReasonWrong', {
		answer: optionText,
		correct: activeQuestion.correctText,
		explanation: optionReason
	});
}

function renderQuizOptionOutcome(button, optionIndex, selectedIndex) {
	if (!activeQuestion) return;
	const label = button.querySelector('.option-label');
	const reason = button.querySelector('.option-reason');
	const isCorrectOption = optionIndex === activeQuestion.correctIndex;
	const isWrongSelection = selectedIndex !== activeQuestion.correctIndex && optionIndex === selectedIndex;
	const marker = isCorrectOption ? '\u2713 ' : isWrongSelection ? '\u2717 ' : '';
	if (label) {
		label.textContent = `${marker}${formatOptionLabel(optionIndex, activeQuestion.options[optionIndex])}`;
	}
	if (reason) {
		reason.textContent = buildQuizOptionReason(optionIndex);
		reason.hidden = false;
	}
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
	lastQuizSelectedIndex = null;
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
	updateBookmarkIcon();

	activeQuestion.options.forEach((option, optionIndex) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'option';
		button.dataset.index = String(optionIndex);
		const label = document.createElement('span');
		label.className = 'option-label';
		label.textContent = formatOptionLabel(optionIndex, option);
		const reason = document.createElement('span');
		reason.className = 'option-reason';
		reason.hidden = true;
		button.append(label, reason);
		button.onclick = () => submitQuizAnswer(optionIndex);
		ui.quizOptions.append(button);
	});
}

function updateBookmarkIcon() {
	if (!activeQuestion || !ui.quizBookmark) return;
	const isSaved = Boolean(state.savedQuestions[activeQuestion.id]);
	ui.quizBookmark.classList.toggle('is-saved', isSaved);
	ui.quizBookmark.innerHTML = isSaved ? '&#9829;' : '&#9825;';
}

function toggleBookmark() {
	if (!activeQuestion) return;
	if (state.savedQuestions[activeQuestion.id]) {
		delete state.savedQuestions[activeQuestion.id];
	} else {
		state.savedQuestions[activeQuestion.id] = { savedAt: Date.now() };
	}
	updateBookmarkIcon();
	void saveState();
}

function getGlossaryTooltip(optionText) {
	const match = glossaryLookup.get(optionText.toLowerCase());
	if (!match) return null;
	return currentLanguage === 'de' && match.definitionDe ? match.definitionDe : match.definition;
}

function submitQuizAnswer(selectedIndex) {
	if (quizLocked || !activeQuestion) return;
	quizLocked = true;
	lastQuizSelectedIndex = selectedIndex;

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
	trackDailyHistory({ answered: 1, correct: isCorrect ? 1 : 0 });

	[...ui.quizOptions.querySelectorAll('button')].forEach((button) => {
		const index = Number(button.dataset.index);
		const originalText = activeQuestion.options[index];
		button.disabled = true;
		if (index === activeQuestion.correctIndex) {
			button.classList.add('is-correct');
		}
		if (!isCorrect && index === selectedIndex) {
			button.classList.add('is-wrong');
		}
		renderQuizOptionOutcome(button, index, selectedIndex);
		const tooltip = getGlossaryTooltip(originalText);
		if (tooltip) {
			button.classList.add('has-tooltip');
			button.dataset.tooltip = tooltip;
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

/* ---- Exam ---- */

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
		button.textContent = formatOptionLabel(optionIndex, option);
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
	trackDailyHistory({ answered: exam.questions.length, correct: correctCount });
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

/* ---- Flashcards (SM-2) ---- */

function clearFlashcardSwipeClasses() {
	if (!ui.flashBox) return;
	ui.flashBox.classList.remove('swipe-again', 'swipe-good', 'swipe-easy');
}

function animateFlashcardSwipe(grade) {
	if (!ui.flashBox) return Promise.resolve();
	clearFlashcardSwipeClasses();
	const className = grade === 'again' ? 'swipe-again' : grade === 'easy' ? 'swipe-easy' : 'swipe-good';
	// Restart animation if the same grade is triggered quickly.
	void ui.flashBox.offsetWidth;
	ui.flashBox.classList.add(className);
	return new Promise((resolve) => {
		let resolved = false;
		const done = () => {
			if (resolved) return;
			resolved = true;
			if (flashSwipeTimer) {
				clearTimeout(flashSwipeTimer);
				flashSwipeTimer = undefined;
			}
			clearFlashcardSwipeClasses();
			resolve();
		};
		ui.flashBox.addEventListener('animationend', done, { once: true });
		flashSwipeTimer = setTimeout(done, 320);
	});
}

function updateFlashcardTilt(clientX, clientY) {
	if (!ui.flashBox) return;
	const rect = ui.flashBox.getBoundingClientRect();
	if (!rect.width || !rect.height) return;
	const xPercent = (clientX - rect.left) / rect.width;
	const yPercent = (clientY - rect.top) / rect.height;
	const rotateY = (xPercent - 0.5) * 8;
	const rotateX = (0.5 - yPercent) * 7;
	ui.flashBox.style.setProperty('--flash-tilt-x', `${rotateX.toFixed(2)}deg`);
	ui.flashBox.style.setProperty('--flash-tilt-y', `${rotateY.toFixed(2)}deg`);
	ui.flashBox.style.setProperty('--flash-glare-x', `${Math.round(xPercent * 100)}%`);
	ui.flashBox.style.setProperty('--flash-glare-y', `${Math.round(yPercent * 100)}%`);
}

function resetFlashcardTilt() {
	if (!ui.flashBox) return;
	ui.flashBox.style.removeProperty('--flash-tilt-x');
	ui.flashBox.style.removeProperty('--flash-tilt-y');
	ui.flashBox.style.removeProperty('--flash-glare-x');
	ui.flashBox.style.removeProperty('--flash-glare-y');
}

function chooseNextCard() {
	activeCard = selectNextStudyCard(flashcards, state.flashcards, {
		now: Date.now(),
		newCardsPerDay: state.settings.newCardsPerDay
	});
	cardShown = false;
	flashHintShown = false;
	clearFlashcardSwipeClasses();
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
	ui.flashBox?.classList.toggle('is-revealed', cardShown);
	ui.flashBack.hidden = !cardShown;
	ui.flashShow.hidden = cardShown;
	ui.flashGrades.hidden = !cardShown;
	const hintText = buildFlashcardHint(activeCard);
	ui.flashHintText.textContent = hintText;
	ui.flashHintText.hidden = !flashHintShown;
	ui.flashHint.hidden = flashHintShown || !hintText;
	const flashDueCount = flashcards.filter((c) => state.flashcards[c.id]?.dueAt <= Date.now()).length;
	ui.flashMeta.textContent = flashDueCount
		? t('flashcards.dueCards', { count: flashDueCount })
		: t('flashcards.nextCard', { date: formatDate(progress.dueAt) });
}

async function rateCard(grade) {
	if (!activeCard) return;
	const progress = state.flashcards[activeCard.id];
	state.flashcards[activeCard.id] = applySpacedRepetitionGrade(progress, grade, state.settings);
	trackDailyHistory({ reviews: 1 });
	void saveState();
	renderStats();
	await animateFlashcardSwipe(grade);
	chooseNextCard();
}

/* ---- Glossary Flashcards (SM-2) ---- */

function chooseNextGlossaryCard(filter = '') {
	const query = filter.trim().toLowerCase();

	const filtered = glossaryCards.filter((card) => {
		if (!query) return true;
		const def = currentLanguage === 'de' && card.backDe ? card.backDe : card.back;
		return card.front.toLowerCase().includes(query) || def.toLowerCase().includes(query);
	});

	activeGlossaryCard = selectNextStudyCard(filtered, state.glossaryFlashcards, {
		now: Date.now(),
		newCardsPerDay: state.settings.newGlossaryPerDay
	});
	glossaryCardShown = false;
	renderGlossaryCard();
}

function renderGlossaryCard() {
	if (!activeGlossaryCard) {
		ui.glossaryCardFront.textContent = t('glossary.empty');
		ui.glossaryCardBack.textContent = '';
		ui.glossaryCardBack.hidden = true;
		ui.glossaryCardShow.hidden = true;
		ui.glossaryGrades.hidden = true;
		ui.glossaryCardCount.textContent = '';
		ui.glossaryCardMeta.textContent = '';
		return;
	}

	const progress = state.glossaryFlashcards[activeGlossaryCard.id];
	const front = currentLanguage === 'de' && activeGlossaryCard.frontDe ? activeGlossaryCard.frontDe : activeGlossaryCard.front;
	const back = currentLanguage === 'de' && activeGlossaryCard.backDe ? activeGlossaryCard.backDe : activeGlossaryCard.back;
	ui.glossaryCardCount.textContent = activeGlossaryCard.topic;
	ui.glossaryCardFront.textContent = front;
	ui.glossaryCardBack.textContent = back;
	ui.glossaryCardBack.hidden = !glossaryCardShown;
	ui.glossaryCardShow.hidden = glossaryCardShown;
	ui.glossaryGrades.hidden = !glossaryCardShown;
	const glossaryDueCount = glossaryCards.filter((c) => state.glossaryFlashcards[c.id]?.dueAt <= Date.now()).length;
	ui.glossaryCardMeta.textContent = glossaryDueCount
		? t('glossary.dueCards', { count: glossaryDueCount })
		: t('glossary.nextCard', { date: formatDate(progress.dueAt) });
}

function rateGlossaryCard(grade) {
	if (!activeGlossaryCard) return;
	const progress = state.glossaryFlashcards[activeGlossaryCard.id];
	state.glossaryFlashcards[activeGlossaryCard.id] = applySpacedRepetitionGrade(progress, grade, state.settings);
	trackDailyHistory({ reviews: 1 });
	void saveState();
	renderStats();
	chooseNextGlossaryCard(ui.glossarySearch?.value || '');
}

/* ---- Journal ---- */

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
			closeOverlay(activeOverlay);
			showQuizQuestion(item.id);
			openOverlay(ui.overlayQuiz);
		};
		row.append(title, meta, button);
		ui.journalList.append(row);
	});
}

/* ---- Reset ---- */

async function resetAll() {
	if (!confirm(t('reset.confirm'))) return;
	if (activeOverlay) closeOverlay(activeOverlay);
	state = hydrateStudyState(null, flashcards, glossaryCards);
	renderRoadmapChecks();
	renderStats();
	renderJournal();
	refillQuizDeck();
	showQuizQuestion();
	chooseNextCard();
	chooseNextGlossaryCard();
	ui.examStart.hidden = false;
	ui.examStage.hidden = true;
	ui.examResult.innerHTML = '';
	ui.examReview.innerHTML = '';
	ui.examTimer.textContent = '20:00';
	await saveState(true);
}

function bindRoadmapGlow() {
	roadmapCards.forEach((card) => {
		card.addEventListener('mousemove', (event) => {
			const rect = card.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			card.style.setProperty('--glow-x', `${x}px`);
			card.style.setProperty('--glow-y', `${y}px`);
		});

		card.addEventListener('mouseleave', () => {
			card.style.removeProperty('--glow-x');
			card.style.removeProperty('--glow-y');
		});
	});
}

function openModeOverlay(mode) {
	if (mode === 'quiz') {
		if (!activeQuestion) showQuizQuestion();
		openOverlay(ui.overlayQuiz);
		return;
	}
	if (mode === 'exam') {
		openOverlay(ui.overlayExam);
		return;
	}
	if (mode === 'flashcards') {
		chooseNextCard();
		openOverlay(ui.overlayFlashcards);
		return;
	}
	if (mode === 'glossary') {
		chooseNextGlossaryCard(ui.glossarySearch?.value || '');
		openOverlay(ui.overlayGlossary);
		return;
	}
	if (mode === 'journal') {
		renderJournal();
		openOverlay(ui.overlayJournal);
	}
}

function toggleShortcutsPanel() {
	if (!ui.shortcutsPanel) return;
	ui.shortcutsPanel.open = !ui.shortcutsPanel.open;
	if (ui.shortcutsPanel.open) {
		ui.shortcutsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	}
}

/* ---- Event binding ---- */

function bindEvents() {
	if (ui.themeToggle) ui.themeToggle.onclick = () => toggleTheme();
	if (ui.languageToggle) ui.languageToggle.onclick = () => toggleLanguage();
	bindRoadmapGlow();

	roadmapBoxes.forEach((box) => {
		box.onchange = () => {
			state.roadmapDone[box.dataset.roadmapKey] = box.checked;
			renderStats();
			void saveState();
		};
	});

	// Hero mode buttons
	document.querySelectorAll('[data-mode]').forEach((btn) => {
		btn.addEventListener('click', () => {
			openModeOverlay(btn.dataset.mode);
		});
	});

	document.querySelectorAll('[data-session-goal]').forEach((btn) => {
		btn.addEventListener('click', () => {
			startSessionGoal(btn.dataset.sessionGoal);
		});
	});
	if (ui.sessionClear) {
		ui.sessionClear.onclick = () => {
			clearSessionGoal();
			renderStats();
			void saveState();
		};
	}

	// Quiz events
	if (ui.quizBookmark) ui.quizBookmark.onclick = () => toggleBookmark();
	ui.quizNext.onclick = () => showQuizQuestion();
	ui.quizHint.onclick = () => {
		if (!activeQuestion) return;
		const hintText = activeQuestion.hint || activeQuestion.explanation;
		ui.quizHintText.textContent = hintText;
		ui.quizHintText.hidden = false;
		ui.quizHint.hidden = true;
	};
	ui.quizSkip.onclick = () => showQuizQuestion();

	// Exam events
	ui.examStart.onclick = () => startExam();
	ui.examNext.onclick = () => nextExamQuestion();

	// Flashcard events
	if (ui.flashBox) {
		ui.flashBox.addEventListener('pointermove', (event) => {
			if (event.pointerType === 'touch') return;
			updateFlashcardTilt(event.clientX, event.clientY);
		});
		ui.flashBox.addEventListener('pointerleave', () => resetFlashcardTilt());
		ui.flashBox.addEventListener('pointercancel', () => resetFlashcardTilt());
	}
	ui.flashShow.onclick = () => {
		cardShown = true;
		renderCard();
	};
	ui.flashHint.onclick = () => {
		flashHintShown = true;
		renderCard();
	};
	ui.flashAgain.onclick = () => rateCard('again');
	ui.flashGood.onclick = () => rateCard('good');
	ui.flashEasy.onclick = () => rateCard('easy');

	// Glossary flashcard events
	ui.glossaryCardShow.onclick = () => {
		glossaryCardShown = true;
		renderGlossaryCard();
	};
	ui.glossaryCardAgain.onclick = () => rateGlossaryCard('again');
	ui.glossaryCardGood.onclick = () => rateGlossaryCard('good');
	ui.glossaryCardEasy.onclick = () => rateGlossaryCard('easy');
	ui.glossarySearch.oninput = (event) => chooseNextGlossaryCard(event.target.value);

	if (ui.settingsToggle) ui.settingsToggle.onclick = () => {
		populateSettingsUi();
		openOverlay(ui.overlaySettings);
	};
	if (ui.settingsSave) ui.settingsSave.onclick = () => saveSettings();
	if (ui.settingsReset) ui.settingsReset.onclick = () => resetSettings();
	if (ui.welcomeStart) ui.welcomeStart.onclick = () => {
		state.hasSeenWelcome = true;
		void saveState();
		closeOverlay(activeOverlay);
	};

	if (ui.resetProgress) ui.resetProgress.onclick = () => void resetAll();

	// Global keyboard shortcuts
	document.addEventListener('keydown', (e) => {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

		if (activeOverlay) {
			// Quiz overlay shortcuts
			if (activeOverlay === ui.overlayQuiz && !exam) {
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
				if (e.key === 'b' || e.key === 'B') {
					e.preventDefault();
					if (ui.quizBookmark) ui.quizBookmark.click();
					return;
				}
			}

			// Exam overlay shortcuts
			if (activeOverlay === ui.overlayExam && exam) {
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
			if (activeOverlay === ui.overlayExam && !exam) {
				if ((e.key === 's' || e.key === 'S' || e.key === 'Enter') && !ui.examStart.hidden) {
					e.preventDefault();
					ui.examStart.click();
					return;
				}
			}

			// Flashcard overlay shortcuts
			if (activeOverlay === ui.overlayFlashcards) {
				if ((e.key === ' ' || e.key === 'Enter') && !ui.flashShow.hidden) {
					e.preventDefault();
					ui.flashShow.click();
					return;
				}
				if ((e.key === 'h' || e.key === 'H') && !ui.flashHint.hidden) {
					e.preventDefault();
					ui.flashHint.click();
					return;
				}
				if (e.key === 'n' || e.key === 'N') {
					e.preventDefault();
					chooseNextCard();
					return;
				}
				if (!ui.flashGrades.hidden) {
					if (e.key === '1') { e.preventDefault(); ui.flashAgain.click(); return; }
					if (e.key === '2') { e.preventDefault(); ui.flashGood.click(); return; }
					if (e.key === '3') { e.preventDefault(); ui.flashEasy.click(); return; }
				}
			}

			// Glossary overlay shortcuts
			if (activeOverlay === ui.overlayGlossary) {
				if ((e.key === ' ' || e.key === 'Enter') && !ui.glossaryCardShow.hidden) {
					e.preventDefault();
					ui.glossaryCardShow.click();
					return;
				}
				if (e.key === 'n' || e.key === 'N') {
					e.preventDefault();
					chooseNextGlossaryCard(ui.glossarySearch?.value || '');
					return;
				}
				if (e.key === 'f' || e.key === 'F') {
					e.preventDefault();
					ui.glossarySearch?.focus();
					ui.glossarySearch?.select();
					return;
				}
				if (!ui.glossaryGrades.hidden) {
					if (e.key === '1') { e.preventDefault(); ui.glossaryCardAgain.click(); return; }
					if (e.key === '2') { e.preventDefault(); ui.glossaryCardGood.click(); return; }
					if (e.key === '3') { e.preventDefault(); ui.glossaryCardEasy.click(); return; }
				}
			}

			// Global shortcuts in overlay
			if (e.key === 'd' || e.key === 'D') { e.preventDefault(); toggleTheme(); return; }
			if (e.key === 'l' || e.key === 'L') { e.preventDefault(); toggleLanguage(); return; }
			if (e.key === 'q' || e.key === 'Q') { e.preventDefault(); openModeOverlay('quiz'); return; }
			if (e.key === 'e' || e.key === 'E') { e.preventDefault(); openModeOverlay('exam'); return; }
			if (e.key === 'f' || e.key === 'F') { e.preventDefault(); openModeOverlay('flashcards'); return; }
			if (e.key === 'g' || e.key === 'G') { e.preventDefault(); openModeOverlay('glossary'); return; }
			if (e.key === 'j' || e.key === 'J') { e.preventDefault(); openModeOverlay('journal'); return; }
			if (e.key === 'o' || e.key === 'O') { e.preventDefault(); populateSettingsUi(); openOverlay(ui.overlaySettings); return; }
			return;
		}

		// Global shortcuts when no overlay is open
		if (e.key === 'q' || e.key === 'Q') {
			e.preventDefault();
			openModeOverlay('quiz');
			return;
		}
		if (e.key === 'e' || e.key === 'E') {
			e.preventDefault();
			openModeOverlay('exam');
			return;
		}
		if (e.key === 'f' || e.key === 'F') {
			e.preventDefault();
			openModeOverlay('flashcards');
			return;
		}
		if (e.key === 'g' || e.key === 'G') {
			e.preventDefault();
			openModeOverlay('glossary');
			return;
		}
		if (e.key === 'j' || e.key === 'J') {
			e.preventDefault();
			openModeOverlay('journal');
			return;
		}
		if (e.key === 'o' || e.key === 'O') {
			e.preventDefault();
			populateSettingsUi();
			openOverlay(ui.overlaySettings);
			return;
		}
		if (e.key === '?') {
			e.preventDefault();
			toggleShortcutsPanel();
			return;
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

/* ---- Init ---- */

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
	refillQuizDeck();
	showQuizQuestion();
	chooseNextCard();
	chooseNextGlossaryCard();
	await saveState(true);

	if (!state.hasSeenWelcome && !saved) {
		openOverlay(ui.overlayWelcome);
	}
}

void init();
