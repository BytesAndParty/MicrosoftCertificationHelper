import OverlayDialog from '../OverlayDialog';

export default function JournalModule() {
	return (
		<OverlayDialog
			id="overlay-journal"
			titleId="overlay-journal-title"
			titleI18n="journal.title"
			titleDefault="Error Journal"
			metaI18n="journal.meta"
			metaDefault="Prioritized list of your missed questions."
		>
			<div id="journal-list" className="journal-list" aria-live="polite"></div>
			<p className="overlay-shortcut-tip" data-i18n="shortcuts.journalOverlay">
				Shortcuts: ESC close | Q/E/F/G/J switch mode | D theme | L language
			</p>
		</OverlayDialog>
	);
}
