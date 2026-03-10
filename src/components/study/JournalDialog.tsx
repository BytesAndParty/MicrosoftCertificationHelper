import { useMemo, useCallback } from 'react';
import { useStudyStore } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';

const i18n = {
	en: {
		title: 'Error Journal',
		meta: 'Prioritized list of your missed questions.',
		empty: 'No wrong answers recorded yet. Keep practicing!',
		times: '{count} times wrong',
		lastWrong: 'Last wrong: {date}',
		practice: 'Practice now',
		shortcutTip: 'Shortcuts: ESC close',
	},
	de: {
		title: 'Fehlerjournal',
		meta: 'Priorisierte Liste deiner Fehler.',
		empty: 'Noch keine falschen Antworten. Weiter üben!',
		times: '{count}× falsch',
		lastWrong: 'Zuletzt falsch: {date}',
		practice: 'Jetzt üben',
		shortcutTip: 'Shortcuts: ESC Schließen',
	},
} as const;

interface JournalDialogProps {
	open: boolean;
	onClose: () => void;
	onPractice: (questionId: string) => void;
}

export default function JournalDialog({ open, onClose, onPractice }: JournalDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];
	const wrongJournal = useStudyStore(s => s.wrongJournal);

	const entries = useMemo(() =>
		Object.entries(wrongJournal || {})
			.map(([id, data]: [string, any]) => ({ id, count: data.count || 0, lastWrongAt: data.lastWrongAt || 0 }))
			.sort((a, b) => b.count - a.count || b.lastWrongAt - a.lastWrongAt),
		[wrongJournal]
	);

	const handlePractice = useCallback((questionId: string) => {
		onPractice(questionId);
	}, [onPractice]);

	const keyMap = useMemo(() => ({
		'Escape': (e: KeyboardEvent) => { e.preventDefault(); onClose(); },
	}), [onClose]);

	useHotkeys(keyMap, open);

	if (!open) return null;

	return (
		<div className="overlay" role="dialog" aria-modal="true">
			<div className="overlay-backdrop" onClick={onClose}></div>
			<div className="overlay-container card">
				<div className="overlay-header">
					<h2>{t.title}</h2>
					<p className="meta">{t.meta}</p>
					<button type="button" className="overlay-close" aria-label="Close" onClick={onClose}>&times;</button>
				</div>
				<div className="overlay-body">
					{entries.length === 0 ? (
						<p className="meta">{t.empty}</p>
					) : (
						<div className="journal-list" aria-live="polite">
							{entries.map(entry => {
								const dateStr = entry.lastWrongAt
									? new Date(entry.lastWrongAt).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', { month: 'short', day: 'numeric' })
									: '';
								return (
									<article key={entry.id} className="journal-entry">
										<div className="journal-entry-head">
											<strong>{entry.id}</strong>
											<span className="meta">{t.times.replace('{count}', String(entry.count))}</span>
										</div>
										{dateStr && <p className="meta">{t.lastWrong.replace('{date}', dateStr)}</p>}
										<button type="button" className="secondary" onClick={() => handlePractice(entry.id)}>
											{t.practice}
										</button>
									</article>
								);
							})}
						</div>
					)}
					<p className="overlay-shortcut-tip">{t.shortcutTip}</p>
				</div>
			</div>
		</div>
	);
}
