export default function WelcomeDialogContent() {
	return (
		<>
			<p data-i18n="welcome.intro">
				This app helps you prepare for the Microsoft AI-900 certification. Here are the study modes:
			</p>
			<ul className="welcome-features">
				<li>
					<span className="mode-icon" aria-hidden="true">&#9997;</span>
					<strong data-i18n="tabs.quiz">Quiz</strong> - <span data-i18n="welcome.quiz">Answer questions with instant feedback and track your accuracy.</span>
				</li>
				<li>
					<span className="mode-icon" aria-hidden="true">&#128221;</span>
					<strong data-i18n="tabs.exam">Exam</strong> - <span data-i18n="welcome.exam">Simulate a timed exam with 10 questions and detailed review.</span>
				</li>
				<li>
					<span className="mode-icon" aria-hidden="true">&#127183;</span>
					<strong data-i18n="tabs.flashcards">Flashcards</strong> - <span data-i18n="welcome.flashcards">Study concepts with spaced repetition scheduling.</span>
				</li>
				<li>
					<span className="mode-icon" aria-hidden="true">&#128214;</span>
					<strong data-i18n="tabs.glossary">Glossary</strong> - <span data-i18n="welcome.glossary">Browse and memorize AI-900 terms as flashcards.</span>
				</li>
				<li>
					<span className="mode-icon" aria-hidden="true">&#128203;</span>
					<strong data-i18n="tabs.journal">Error Journal</strong> - <span data-i18n="welcome.journal">Review and practice your most frequent mistakes.</span>
				</li>
			</ul>
			<p className="meta" data-i18n="welcome.hint">
				Tip: Use keyboard shortcuts (D for dark mode, L for language) and the settings gear to customize your
				experience.
			</p>
			<p className="meta" data-i18n="welcome.aiHint">
				Optional: enable AI chat in settings and add your own Azure OpenAI API key.
			</p>
			<button id="welcome-start" type="button" className="primary" data-i18n="welcome.start">
				Get started
			</button>
		</>
	);
}
