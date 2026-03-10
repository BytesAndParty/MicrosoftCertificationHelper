import OverlayDialog from './OverlayDialog';
import WelcomeDialogContent from './WelcomeDialogContent';

export default function StudyWorkspace() {
	return (
		<main className="page flat-home">
			<a href="#metrics" className="skip-link" data-i18n="a11y.skipLink">
				Skip to study workspace
			</a>
			<header className="app-header reveal">
				<div className="app-header-inner">
					<div className="app-header-brand">
						<p className="eyebrow">AI-900 Prep Workspace</p>
						<h1>Microsoft Certification Helper</h1>
					</div>
					<div className="app-header-readiness hero-readiness" id="hero-readiness">
						<p className="app-header-readiness-label" data-i18n="readiness.label">Exam readiness</p>
						<progress id="hero-readiness-progress" max={100} value={0} data-i18n-aria-label="readiness.label" aria-label="Exam readiness"></progress>
						<strong id="hero-readiness-value">0%</strong>
						<p id="hero-readiness-meta" className="hero-readiness-meta" data-i18n="readiness.metaIdle">
							Readiness is reliable after each question is answered correctly at least once.
						</p>
					</div>
					<div className="hero-controls">
						<div id="accent-switcher-slot"></div>
						<button id="settings-toggle" type="button" className="secondary settings-toggle" aria-label="Settings" data-i18n-aria-label="settings.title">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="3" />
								<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
							</svg>
						</button>
					</div>
				</div>
			</header>
			<header className="hero reveal">
				<nav className="hero-mode-grid" aria-label="Study modes" data-i18n-aria-label="tabs.ariaLabel">
					<button type="button" className="mode-btn hero-mode-btn" data-mode="quiz" data-tooltip="Answer questions with instant feedback and track your accuracy over time." data-i18n-tooltip="tooltip.quiz">
						<span className="mode-icon" aria-hidden="true">&#9997;</span>
						<span className="mode-label" data-i18n="tabs.quiz">Quiz</span>
						<span className="mode-desc" data-i18n="hero.modeQuizDesc">Instant feedback</span>
					</button>
					<button type="button" className="mode-btn hero-mode-btn" data-mode="exam" data-tooltip="Simulate a timed exam with 10 questions in 20 minutes and get a detailed review." data-i18n-tooltip="tooltip.exam">
						<span className="mode-icon" aria-hidden="true">&#128221;</span>
						<span className="mode-label" data-i18n="tabs.exam">Exam</span>
						<span className="mode-desc" data-i18n="hero.modeExamDesc">Timed simulation</span>
					</button>
					<button type="button" className="mode-btn hero-mode-btn" data-mode="flashcards" data-tooltip="Study AI-900 concepts with spaced repetition. Rate cards as Again, Good, or Easy." data-i18n-tooltip="tooltip.flashcards">
						<span className="mode-icon" aria-hidden="true">&#127183;</span>
						<span className="mode-label" data-i18n="tabs.flashcards">Flashcards</span>
						<span className="mode-desc" data-i18n="hero.modeFlashcardsDesc">Spaced repetition</span>
					</button>
					<button type="button" className="mode-btn hero-mode-btn" data-mode="glossary" data-tooltip="Browse and memorize AI-900 terms as flashcards with search and spaced repetition." data-i18n-tooltip="tooltip.glossary">
						<span className="mode-icon" aria-hidden="true">&#128214;</span>
						<span className="mode-label" data-i18n="tabs.glossary">Glossary</span>
						<span className="mode-desc" data-i18n="hero.modeGlossaryDesc">Term flashcards</span>
					</button>
					<button type="button" className="mode-btn hero-mode-btn" data-mode="journal" data-tooltip="Review your most frequent mistakes and practice the questions you got wrong." data-i18n-tooltip="tooltip.journal">
						<span className="mode-icon" aria-hidden="true">&#128203;</span>
						<span className="mode-label" data-i18n="tabs.journal">Error Journal</span>
						<span className="mode-desc" data-i18n="hero.modeJournalDesc">Review mistakes</span>
					</button>
				</nav>
			</header>

			<div id="dashboard-slot"></div>

				<section className="metrics reveal" aria-label="Progress metrics">
					<article className="metric"><p data-i18n="metrics.roadmap">Roadmap</p><strong id="metric-roadmap">0%</strong></article>
					<article className="metric"><p data-i18n="metrics.quizAccuracy">Quiz Accuracy</p><strong id="metric-accuracy">0%</strong></article>
					<article className="metric"><p data-i18n="metrics.bestExam">Best Exam</p><strong id="metric-exam">0%</strong></article>
					<article className="metric"><p data-i18n="metrics.dueCards">Due Cards</p><strong id="metric-due">0</strong></article>
					<article className="metric"><p data-i18n="metrics.journal">Error Journal</p><strong id="metric-journal">0</strong></article>
				</section>

				<section className="card reveal session-goal" aria-label="Session goal">
					<div className="section-head">
						<h2 data-i18n="session.title">Session Goal</h2>
						<p id="session-status" className="meta" data-i18n="session.statusIdle">No active goal</p>
					</div>
					<div className="session-goal-actions">
						<button type="button" className="secondary" data-session-goal="sprint" data-i18n="session.goalSprint">Sprint 10</button>
						<button type="button" className="secondary" data-session-goal="focus" data-i18n="session.goalFocus">Focus 20</button>
						<button type="button" className="secondary" data-session-goal="accuracy" data-i18n="session.goalAccuracy">Accuracy 90</button>
						<button type="button" id="session-clear" className="danger" data-i18n="session.clear">Clear goal</button>
					</div>
					<div className="session-progress-row">
						<progress id="session-progress" max={100} value={0} aria-label="Session progress"></progress>
						<strong id="session-progress-value">0%</strong>
					</div>
					<p id="session-details" className="meta" data-i18n="session.detailIdle">Start a goal to track this learning session.</p>
				</section>

				<section className="card reveal history-panel" aria-label="Learning history">
					<div className="section-head">
						<h2 data-i18n="history.title">Learning History</h2>
						<p id="history-streak" className="meta" data-i18n="history.streakNone">No streak yet</p>
					</div>
					<div id="history-heatmap" className="history-heatmap" aria-label="Last 28 days study activity"></div>
					<div className="history-topic-block">
						<h3 data-i18n="history.topicTitle">Topic trend</h3>
						<div id="history-topic-trend" className="history-topic-trend"></div>
					</div>
				</section>

			<OverlayDialog id="overlay-settings" titleId="overlay-settings-title" titleI18n="settings.title" titleDefault="Settings">
				<SettingsDialogContent />
			</OverlayDialog>

			<button
				id="ai-chat-fab"
				type="button"
				className="ai-chat-fab"
				aria-label="AI Chat"
				onClick={() => window.dispatchEvent(new CustomEvent('ai-chat-toggle'))}
			>
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
				</svg>
			</button>

			<details id="shortcuts-panel" className="shortcuts-section reveal">
				<summary data-i18n="shortcuts.title">Keyboard shortcuts</summary>
				<div className="shortcuts-grid">
					<p><strong>Quiz / Exam:</strong> <span data-i18n="shortcuts.quiz">1-4 Answer | H Hint | S Skip | N Next | B Bookmark</span></p>
					<p><strong>Flashcards / Glossary:</strong> <span data-i18n="shortcuts.flash">Space Reveal | H Hint (Flashcards) | N Next Card | 1 Again | 2 Good | 3 Easy | F Search (Glossary)</span></p>
					<p><strong>Global:</strong> <span data-i18n="shortcuts.global">Q Quiz | E Exam | F Flashcards | G Glossary | J Journal | O Settings | D Theme | L Language | ? Shortcuts | ESC Close</span></p>
				</div>
			</details>

			<section className="reset-section reveal">
				<button id="reset-progress" type="button" className="danger" data-i18n="reset.button">Reset progress</button>
			</section>
			<div id="study-toast" className="study-toast" role="alert" aria-live="assertive" hidden></div>
		</main>
	);
}
