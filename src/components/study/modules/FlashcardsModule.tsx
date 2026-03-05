import OverlayDialog from '../OverlayDialog';

export default function FlashcardsModule() {
	return (
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
				<button id="flashcard-show" type="button" className="secondary" data-i18n="flashcards.showAnswer">
					Show answer
				</button>
				<button id="flashcard-hint" type="button" className="secondary" data-i18n="flashcards.showHint">
					Show hint
				</button>
				<button id="flashcard-chat-send" type="button" className="secondary" data-i18n="chat.sendFlashcardItem">
					Discuss in AI chat
				</button>
				<div id="flashcard-grade-actions" className="grade-actions" hidden>
					<button id="flashcard-again" type="button" className="danger" data-i18n="flashcards.again">
						Again
					</button>
					<button id="flashcard-good" type="button" className="primary" data-i18n="flashcards.good">
						Good
					</button>
					<button id="flashcard-easy" type="button" className="secondary" data-i18n="flashcards.easy">
						Easy
					</button>
				</div>
			</div>
			<p id="flashcard-hint-text" className="hint-box" hidden></p>
			<p id="flashcard-meta" className="meta"></p>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.flashOverlay">
				Shortcuts: Space/Enter reveal | H hint | N next card | 1 again | 2 good | 3 easy
			</p>
		</OverlayDialog>
	);
}
