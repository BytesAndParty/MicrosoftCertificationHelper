import OverlayDialog from '../OverlayDialog';

export default function QuizModule() {
	return (
		<OverlayDialog id="overlay-quiz" titleId="overlay-quiz-title" titleI18n="quiz.title" titleDefault="Quiz with instant feedback">
			<p id="quiz-progress" className="meta"></p>
			<div className="quiz-question-row">
				<p id="quiz-topic" className="chip"></p>
				<button id="quiz-bookmark" type="button" className="quiz-bookmark" aria-label="Save question" data-i18n-aria-label="quiz.bookmarkLabel">
					&#9825;
				</button>
			</div>
			<h4 id="quiz-question"></h4>
			<div id="quiz-options" className="option-list"></div>
			<div className="quiz-actions">
				<button id="quiz-hint" type="button" className="secondary" data-i18n="quiz.showHint">
					Show hint
				</button>
				<button id="quiz-skip" type="button" className="secondary" data-i18n="quiz.skip">
					Skip
				</button>
			</div>
			<p id="quiz-hint-text" className="hint-box" hidden></p>
			<p id="quiz-feedback" className="feedback" aria-live="polite"></p>
			<button id="quiz-next" type="button" className="primary" data-i18n="quiz.nextQuestion">
				Next question
			</button>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.quizOverlay">
				Shortcuts: 1-4 answer | H hint | S skip | N/Enter next | B bookmark
			</p>
		</OverlayDialog>
	);
}
