import { Input } from '../ui/input';
import OverlayDialog from './OverlayDialog';
import SettingsDialogContent from './SettingsDialogContent';
import WelcomeDialogContent from './WelcomeDialogContent';
import ExamModule from './modules/ExamModule';
import QuizModule from './modules/QuizModule';

interface RoadmapTheme {
	id: string;
	title: string;
	goal: string;
	todos: string[];
}

interface StudyWorkspaceProps {
	roadmapThemes: RoadmapTheme[];
}

export default function StudyWorkspace({ roadmapThemes }: StudyWorkspaceProps) {
	return (
		<main className="page">
			<a href="#roadmap" className="skip-link" data-i18n="a11y.skipLink">
				Skip to study workspace
			</a>
			<header className="hero reveal">
				<div className="hero-top">
					<div>
						<p className="eyebrow">AI-900 Prep Workspace</p>
						<h1>Microsoft Certification Helper</h1>
						<p className="hero-copy" data-i18n="hero.copy">
							Quiz mode, exam mode, flashcards, an error journal, and a glossary with local progress stored in
							the browser database.
						</p>
					</div>
					<div className="hero-controls">
						<button id="theme-toggle" type="button" className="secondary theme-toggle">
							Switch to dark mode
						</button>
						<button id="language-toggle" type="button" className="secondary language-toggle" aria-label="Switch language to German">
							DE
						</button>
						<button id="settings-toggle" type="button" className="secondary settings-toggle" aria-label="Settings" data-i18n-aria-label="settings.title">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="3" />
								<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
							</svg>
						</button>
					</div>
				</div>
				<nav className="hero-modes" aria-label="Study modes" data-i18n-aria-label="tabs.ariaLabel">
					<button type="button" className="mode-btn" data-mode="quiz" data-tooltip="Answer questions with instant feedback and track your accuracy over time." data-i18n-tooltip="tooltip.quiz">
						<span className="mode-icon" aria-hidden="true">&#9997;</span>
						<span className="mode-label" data-i18n="tabs.quiz">Quiz</span>
						<span className="mode-desc" data-i18n="hero.modeQuizDesc">Instant feedback</span>
					</button>
					<button type="button" className="mode-btn" data-mode="exam" data-tooltip="Simulate a timed exam with 10 questions in 20 minutes and get a detailed review." data-i18n-tooltip="tooltip.exam">
						<span className="mode-icon" aria-hidden="true">&#128221;</span>
						<span className="mode-label" data-i18n="tabs.exam">Exam</span>
						<span className="mode-desc" data-i18n="hero.modeExamDesc">Timed simulation</span>
					</button>
					<button type="button" className="mode-btn" data-mode="flashcards" data-tooltip="Study AI-900 concepts with spaced repetition. Rate cards as Again, Good, or Easy." data-i18n-tooltip="tooltip.flashcards">
						<span className="mode-icon" aria-hidden="true">&#127183;</span>
						<span className="mode-label" data-i18n="tabs.flashcards">Flashcards</span>
						<span className="mode-desc" data-i18n="hero.modeFlashcardsDesc">Spaced repetition</span>
					</button>
					<button type="button" className="mode-btn" data-mode="glossary" data-tooltip="Browse and memorize AI-900 terms as flashcards with search and spaced repetition." data-i18n-tooltip="tooltip.glossary">
						<span className="mode-icon" aria-hidden="true">&#128214;</span>
						<span className="mode-label" data-i18n="tabs.glossary">Glossary</span>
						<span className="mode-desc" data-i18n="hero.modeGlossaryDesc">Term flashcards</span>
					</button>
					<button type="button" className="mode-btn" data-mode="journal" data-tooltip="Review your most frequent mistakes and practice the questions you got wrong." data-i18n-tooltip="tooltip.journal">
						<span className="mode-icon" aria-hidden="true">&#128203;</span>
						<span className="mode-label" data-i18n="tabs.journal">Error Journal</span>
						<span className="mode-desc" data-i18n="hero.modeJournalDesc">Review mistakes</span>
					</button>
				</nav>
			</header>

			<section className="card reveal" id="roadmap">
				<div className="section-head">
					<h2 data-i18n="roadmap.title">Roadmap</h2>
					<p id="roadmap-summary" className="meta">0 / 0 todos completed</p>
				</div>
				<div className="roadmap-grid">
					{roadmapThemes.map((theme) => (
						<article className="theme-card" data-roadmap-id={theme.id} key={theme.id}>
							<h3>{theme.title}</h3>
							<p>{theme.goal}</p>
							<ul>
								{theme.todos.map((todo, todoIndex) => (
									<li key={`${theme.id}:${todoIndex}`}>
										<label>
											<input type="checkbox" data-roadmap-key={`${theme.id}:${todoIndex}`} />
											<span>{todo}</span>
										</label>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>

			<section className="metrics reveal" aria-label="Progress metrics">
				<article className="metric"><p data-i18n="metrics.roadmap">Roadmap</p><strong id="metric-roadmap">0%</strong></article>
				<article className="metric"><p data-i18n="metrics.quizAccuracy">Quiz Accuracy</p><strong id="metric-accuracy">0%</strong></article>
				<article className="metric"><p data-i18n="metrics.bestExam">Best Exam</p><strong id="metric-exam">0%</strong></article>
				<article className="metric"><p data-i18n="metrics.dueCards">Due Cards</p><strong id="metric-due">0</strong></article>
				<article className="metric"><p data-i18n="metrics.journal">Error Journal</p><strong id="metric-journal">0</strong></article>
			</section>

			<QuizModule />

			<ExamModule />

			<OverlayDialog
				id="overlay-flashcards"
				titleId="overlay-flashcards-title"
				titleI18n="flashcards.title"
				titleDefault="Spaced Repetition"
				metaI18n="flashcards.meta"
				metaDefault="Rate each card: Again, Good, Easy."
			>
				<div id="flashcard-box" className="flashcard" aria-live="polite">
					<p id="flashcard-topic" className="chip"></p>
					<h4 id="flashcard-front"></h4>
					<p id="flashcard-back" hidden></p>
				</div>
				<div className="flash-actions">
					<button id="flashcard-show" type="button" className="secondary" data-i18n="flashcards.showAnswer">Show answer</button>
					<div id="flashcard-grade-actions" className="grade-actions" hidden>
						<button id="flashcard-again" type="button" className="danger" data-i18n="flashcards.again">Again</button>
						<button id="flashcard-good" type="button" className="primary" data-i18n="flashcards.good">Good</button>
						<button id="flashcard-easy" type="button" className="secondary" data-i18n="flashcards.easy">Easy</button>
					</div>
				</div>
				<p id="flashcard-meta" className="meta"></p>
			</OverlayDialog>

			<OverlayDialog
				id="overlay-glossary"
				titleId="overlay-glossary-title"
				titleI18n="glossary.title"
				titleDefault="Glossary"
				metaI18n="glossary.metaFlashcard"
				metaDefault="Flip through AI-900 terms as flashcards."
			>
				<div className="glossary-search-row">
					<label className="search-label" htmlFor="glossary-search" data-i18n="glossary.search">Search</label>
					<Input id="glossary-search" type="search" placeholder="Term or keyword..." data-i18n-placeholder="glossary.placeholder" />
				</div>
				<div id="glossary-card-box" className="flashcard" aria-live="polite">
					<p id="glossary-card-count" className="chip"></p>
					<h4 id="glossary-card-front"></h4>
					<p id="glossary-card-back" hidden></p>
				</div>
				<div className="flash-actions">
					<button id="glossary-card-show" type="button" className="secondary" data-i18n="glossary.showDef">Show definition</button>
					<div id="glossary-grade-actions" className="grade-actions" hidden>
						<button id="glossary-card-again" type="button" className="danger" data-i18n="flashcards.again">Again</button>
						<button id="glossary-card-good" type="button" className="primary" data-i18n="flashcards.good">Good</button>
						<button id="glossary-card-easy" type="button" className="secondary" data-i18n="flashcards.easy">Easy</button>
					</div>
				</div>
				<p id="glossary-card-meta" className="meta"></p>
			</OverlayDialog>

			<OverlayDialog
				id="overlay-journal"
				titleId="overlay-journal-title"
				titleI18n="journal.title"
				titleDefault="Error Journal"
				metaI18n="journal.meta"
				metaDefault="Prioritized list of your missed questions."
			>
				<div id="journal-list" className="journal-list" aria-live="polite"></div>
			</OverlayDialog>

			<OverlayDialog id="overlay-settings" titleId="overlay-settings-title" titleI18n="settings.title" titleDefault="Settings">
				<SettingsDialogContent />
			</OverlayDialog>

			<OverlayDialog id="overlay-welcome" titleId="overlay-welcome-title" titleI18n="welcome.title" titleDefault="Welcome to AI-900 Study Companion">
				<WelcomeDialogContent />
			</OverlayDialog>

			<details className="shortcuts-section reveal">
				<summary data-i18n="shortcuts.title">Keyboard shortcuts</summary>
				<div className="shortcuts-grid">
					<p><strong>Quiz / Exam:</strong> <span data-i18n="shortcuts.quiz">1-4 Answer | H Hint | S Skip | N Next</span></p>
					<p><strong>Flashcards / Glossary:</strong> <span data-i18n="shortcuts.flash">Space Reveal | 1 Again | 2 Good | 3 Easy</span></p>
					<p><strong>Global:</strong> <span data-i18n="shortcuts.global">D Dark mode | L Language | ESC Close overlay</span></p>
				</div>
			</details>

			<section className="reset-section reveal">
				<button id="reset-progress" type="button" className="danger" data-i18n="reset.button">Reset progress</button>
			</section>
		</main>
	);
}
