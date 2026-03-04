import { Input } from '../../ui/input';
import OverlayDialog from '../OverlayDialog';

export default function GlossaryModule() {
	return (
		<OverlayDialog
			id="overlay-glossary"
			titleId="overlay-glossary-title"
			titleI18n="glossary.title"
			titleDefault="Glossary"
			metaI18n="glossary.metaFlashcard"
			metaDefault="Flip through AI-900 terms as flashcards."
		>
			<div className="glossary-search-row">
				<label className="search-label" htmlFor="glossary-search" data-i18n="glossary.search">
					Search
				</label>
				<Input id="glossary-search" type="search" placeholder="Term or keyword..." data-i18n-placeholder="glossary.placeholder" />
			</div>
			<div id="glossary-card-box" className="flashcard" aria-live="polite">
				<p id="glossary-card-count" className="chip"></p>
				<h4 id="glossary-card-front"></h4>
				<p id="glossary-card-back" hidden></p>
			</div>
			<div className="flash-actions">
				<button id="glossary-card-show" type="button" className="secondary" data-i18n="glossary.showDef">
					Show definition
				</button>
				<div id="glossary-grade-actions" className="grade-actions" hidden>
					<button id="glossary-card-again" type="button" className="danger" data-i18n="flashcards.again">
						Again
					</button>
					<button id="glossary-card-good" type="button" className="primary" data-i18n="flashcards.good">
						Good
					</button>
					<button id="glossary-card-easy" type="button" className="secondary" data-i18n="flashcards.easy">
						Easy
					</button>
				</div>
			</div>
			<p id="glossary-card-meta" className="meta"></p>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.glossaryOverlay">
				Shortcuts: Space/Enter reveal | 1 again | 2 good | 3 easy | ESC close
			</p>
		</OverlayDialog>
	);
}
