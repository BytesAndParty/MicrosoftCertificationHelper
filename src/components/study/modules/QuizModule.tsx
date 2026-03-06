import OverlayDialog from '../OverlayDialog';

export default function QuizModule() {
	return (
		<OverlayDialog id="overlay-quiz" titleId="overlay-quiz-title" titleI18n="quiz.title" titleDefault="Quiz with instant feedback">
			<p id="quiz-progress" className="meta"></p>
			<div className="quiz-question-row">
				<p id="quiz-topic" className="chip"></p>
				<div className="quiz-inline-actions">
					<button id="quiz-chat-send" type="button" className="quiz-icon-btn quiz-chat-icon" aria-label="Discuss in AI chat" data-i18n-aria-label="chat.sendQuizItem">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H7l-4 3 1.2-4.8A8.5 8.5 0 1 1 21 12z" />
						</svg>
					</button>
					<button id="quiz-bookmark" type="button" className="quiz-icon-btn quiz-bookmark" aria-label="Save question" data-i18n-aria-label="quiz.bookmarkLabel">
						&#9825;
					</button>
				</div>
			</div>
			<h4 id="quiz-question"></h4>
			<div id="quiz-options" className="option-list"></div>
			<div id="quiz-actions" className="quiz-actions">
				<button id="quiz-hint" type="button" className="secondary" data-i18n="quiz.showHint">
					Show hint
				</button>
				<button id="quiz-skip" type="button" className="secondary" data-i18n="quiz.skip">
					Skip
				</button>
			</div>
			<p id="quiz-hint-text" className="hint-box" hidden></p>
			<p id="quiz-feedback" className="feedback" aria-live="polite"></p>
			<p id="quiz-learn-ref" className="learn-ref" hidden>
				<span id="quiz-learn-ref-prefix"></span>
				<a id="quiz-learn-ref-link" target="_blank" rel="noopener noreferrer"></a>
			</p>
			<section id="quiz-summary" className="quiz-summary" hidden>
				<h4 data-i18n="quiz.summaryTitle">Quiz overview</h4>
				<p id="quiz-summary-meta" className="meta"></p>
				<div id="quiz-summary-topics" className="quiz-summary-topics"></div>
			</section>
			<button id="quiz-next" type="button" className="primary" data-i18n="quiz.nextQuestion">
				Next question
			</button>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.quizOverlay">
				Shortcuts: 1-4 answer | H hint | S skip | N/Enter next | B bookmark
			</p>
		</OverlayDialog>
	);
}
