import OverlayDialog from '../OverlayDialog';

export default function ExamModule() {
	return (
		<OverlayDialog
			id="overlay-exam"
			titleId="overlay-exam-title"
			titleI18n="exam.title"
			titleDefault="Exam mode"
			metaI18n="exam.meta"
			metaDefault="10 questions, 20 minutes, mixed question types, and a detailed review."
		>
			<div className="exam-top">
				<button id="exam-start" type="button" className="primary" data-i18n="exam.start">
					Start exam
				</button>
				<p id="exam-timer" className="timer" role="timer" aria-label="Time remaining: 20:00">
					20:00
				</p>
			</div>
			<div id="exam-stage" hidden>
				<p id="exam-progress" className="meta"></p>
				<h4 id="exam-question"></h4>
				<div id="exam-options" className="option-list"></div>
				<button id="exam-next" type="button" className="primary" disabled data-i18n="exam.nextQuestion">
					Next question
				</button>
			</div>
			<div id="exam-result" className="exam-result" aria-live="polite"></div>
			<div id="exam-review" className="exam-review"></div>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.examOverlay">
				Shortcuts: S start | 1-4 answer | N/Enter next | ESC close
			</p>
		</OverlayDialog>
	);
}
