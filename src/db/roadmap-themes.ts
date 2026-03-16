import type { RoadmapTheme } from '@/types/db';

export const roadmapThemes: RoadmapTheme[] = [
	{
		"id": "scope",
		"title": "1. Scope and learning strategy",
		"titleDe": "1. Scope und Lernstrategie",
		"goal": "Prioritize AI-900 goals and structure study time.",
		"goalDe": "AI-900-Ziele priorisieren und Lernzeit strukturieren.",
		"todos": [
			"Map the skill outline into topic clusters",
			"Define weekly goals with clear time budgets",
			"Set measurable learning targets"
		],
		"todosDe": [
			"Skill-Outline in Themencluster aufteilen",
			"Wochenziele mit Zeitbudget festlegen",
			"Messbare Lernziele definieren"
		]
	},
	{
		"id": "foundation",
		"title": "2. Product foundation with Bun + Astro",
		"titleDe": "2. Produktbasis mit Bun + Astro",
		"goal": "Build a stable and fast technical foundation.",
		"goalDe": "Technische Basis stabil und schnell aufsetzen.",
		"todos": [
			"Create a responsive layout for desktop and mobile",
			"Validate build and development workflows",
			"Connect quiz, exam, and flashcard modules"
		],
		"todosDe": [
			"Responsives Layout für Desktop und Mobile",
			"Build- und Dev-Workflow validieren",
			"Module für Quiz, Exam und Karten verbinden"
		]
	},
	{
		"id": "content",
		"title": "3. Content model",
		"titleDe": "3. Content-Modell",
		"goal": "Standardize questions, glossary terms, and flashcards.",
		"goalDe": "Fragen, Glossar und Karten einheitlich strukturieren.",
		"todos": [
			"Standardize the question model",
			"Maintain glossary quality",
			"Expand flashcards per topic"
		],
		"todosDe": [
			"Fragenmodell standardisieren",
			"Glossar pflegen",
			"Karten pro Topic ausbauen"
		]
	},
	{
		"id": "core",
		"title": "4. Core study features",
		"titleDe": "4. Kern-Lernfunktionen",
		"goal": "Use quiz, feedback, and an error journal as a daily routine.",
		"goalDe": "Quiz + Feedback + Fehlerjournal als Tagesroutine nutzen.",
		"todos": [
			"Practice with explanation-driven quizzes",
			"Track misses in the error journal",
			"Monitor dashboard metrics"
		],
		"todosDe": [
			"Quiz mit Erklärungen",
			"Fehlerjournal führen",
			"Dashboard-Werte beobachten"
		]
	},
	{
		"id": "exam",
		"title": "5. Exam mode",
		"titleDe": "5. Prüfungsmodus",
		"goal": "Simulate exam conditions and identify weak areas.",
		"goalDe": "Prüfungssituation simulieren und Schwachstellen erkennen.",
		"todos": [
			"Run timed exam sessions",
			"Review topic-level performance",
			"Improve your best score"
		],
		"todosDe": [
			"Exam mit Timer laufen lassen",
			"Themenauswertung lesen",
			"Bestwert verbessern"
		]
	},
	{
		"id": "spaced",
		"title": "6. Spaced Repetition",
		"titleDe": "6. Spaced Repetition",
		"goal": "Retain knowledge long term.",
		"goalDe": "Wissen langfristig halten.",
		"todos": [
			"Work through all due cards",
			"Use ratings consistently",
			"Keep the due queue clear"
		],
		"todosDe": [
			"Fällige Karten durcharbeiten",
			"Ratings konsequent nutzen",
			"Due-Queue leeren"
		]
	},
	{
		"id": "quality",
		"title": "7. Iteration",
		"titleDe": "7. Iteration",
		"goal": "Improve the learning system weekly.",
		"goalDe": "Lernsystem wöchentlich verbessern.",
		"todos": [
			"Run a weekly retrospective",
			"Expand the question pool",
			"Plan v0.2"
		],
		"todosDe": [
			"Retrospektive pro Woche",
			"Fragenpool erweitern",
			"v0.2 planen"
		]
	}
];
