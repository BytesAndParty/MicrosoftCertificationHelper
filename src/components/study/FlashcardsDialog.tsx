import { useState, useEffect, useCallback, useMemo } from 'react';
import { useStudyStore } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { selectNextStudyCard } from '../../lib/study/spaced-repetition';
import { flashcards as flashcardData } from '../../data/flashcards';
import { formatDate } from '../../lib/format';

const i18n = {
	en: {
		title: 'Spaced Repetition',
		meta: 'Rate each card: Again, Good, Easy.',
		showAnswer: 'Show answer',
		showHint: 'Show hint',
		again: 'Again',
		good: 'Good',
		easy: 'Easy',
		dueCards: '{count} cards due',
		nextCard: 'Next review: {date}',
		empty: 'No cards available.',
		shortcutTip: 'Shortcuts: Space/Enter reveal | H hint | N next | 1 again | 2 good | 3 easy',
	},
	de: {
		title: 'Spaced Repetition',
		meta: 'Bewerte jede Karte: Nochmal, Gut, Leicht.',
		showAnswer: 'Antwort zeigen',
		showHint: 'Hinweis zeigen',
		again: 'Nochmal',
		good: 'Gut',
		easy: 'Leicht',
		dueCards: '{count} Karten fällig',
		nextCard: 'Nächste Wiederholung: {date}',
		empty: 'Keine Karten verfügbar.',
		shortcutTip: 'Shortcuts: Leertaste/Enter aufdecken | H Hinweis | N Nächste | 1 Nochmal | 2 Gut | 3 Leicht',
	},
} as const;

interface FlashcardsDialogProps {
	open: boolean;
	onClose: () => void;
}

export default function FlashcardsDialog({ open, onClose }: FlashcardsDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];
	const flashcardProgress = useStudyStore(s => s.flashcards);
	const settings = useStudyStore(s => s.settings);
	const rateFlashcard = useStudyStore(s => s.rateFlashcard);

	const [activeCard, setActiveCard] = useState<any>(null);
	const [revealed, setRevealed] = useState(false);
	const [hintShown, setHintShown] = useState(false);

	const chooseNext = useCallback(() => {
		const card = selectNextStudyCard(flashcardData, flashcardProgress, {
			now: Date.now(),
			newCardsPerDay: settings.newCardsPerDay,
		});
		setActiveCard(card);
		setRevealed(false);
		setHintShown(false);
	}, [flashcardProgress, settings]);

	useEffect(() => {
		if (open) chooseNext();
	}, [open]);

	const handleRate = useCallback((grade: 'again' | 'good' | 'easy') => {
		if (!activeCard) return;
		rateFlashcard(activeCard.id, grade);
		chooseNext();
	}, [activeCard, rateFlashcard, chooseNext]);

	const front = activeCard ? (lang === 'de' && activeCard.frontDe ? activeCard.frontDe : activeCard.front) : '';
	const back = activeCard ? (lang === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back) : '';

	const dueCount = useMemo(() =>
		flashcardData.filter(c => flashcardProgress[c.id]?.dueAt <= Date.now()).length,
		[flashcardProgress]
	);

	const metaText = activeCard
		? dueCount > 0
			? t.dueCards.replace('{count}', String(dueCount))
			: t.nextCard.replace('{date}', formatDate(flashcardProgress[activeCard.id]?.dueAt || Date.now()))
		: '';

	const hintText = useMemo(() => {
		if (!activeCard) return '';
		const answer = lang === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back;
		const words = answer.split(/\s+/).filter((w: string) => w.length > 3);
		if (words.length === 0) return answer.charAt(0) + '…';
		const picked = words.slice(0, 2);
		return picked.map((w: string) => w.slice(0, Math.ceil(w.length / 2)) + '…').join(', ');
	}, [activeCard, lang]);

	const keyMap = useMemo(() => ({
		' ': (e: KeyboardEvent) => { if (!revealed) { e.preventDefault(); setRevealed(true); } },
		'Enter': (e: KeyboardEvent) => { if (!revealed) { e.preventDefault(); setRevealed(true); } },
		'h': (e: KeyboardEvent) => { if (!revealed && !hintShown) { e.preventDefault(); setHintShown(true); } },
		'n': (e: KeyboardEvent) => { e.preventDefault(); chooseNext(); },
		'1': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('again'); } },
		'2': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('good'); } },
		'3': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('easy'); } },
		'Escape': (e: KeyboardEvent) => { e.preventDefault(); onClose(); },
	}), [revealed, hintShown, handleRate, chooseNext, onClose]);

	useHotkeys(keyMap, open);

	if (!open) return null;

	return (
		<div className="overlay" role="dialog" aria-modal="true" data-testid="dialog-flashcards">
			<div className="overlay-backdrop" onClick={onClose}></div>
			<div className="overlay-container card">
				<div className="overlay-header">
					<h2>{t.title}</h2>
					<p className="meta">{t.meta}</p>
					<button type="button" className="overlay-close" aria-label="Close" onClick={onClose}>&times;</button>
				</div>
				<div className="overlay-body">
					{activeCard ? (
						<>
							<div className={`flashcard ${revealed ? 'is-revealed' : ''}`} aria-live="polite">
								<p className="chip">{activeCard.topic}</p>
								<h4>{front}</h4>
								{revealed && <p>{back}</p>}
							</div>
							<div className="flash-actions">
								{!revealed && (
									<>
										<button type="button" className="secondary" onClick={() => setRevealed(true)}>{t.showAnswer}</button>
										{!hintShown && hintText && (
											<button type="button" className="secondary" onClick={() => setHintShown(true)}>{t.showHint}</button>
										)}
									</>
								)}
								{revealed && (
									<div className="grade-actions">
										<button type="button" className="danger" onClick={() => handleRate('again')}>{t.again}</button>
										<button type="button" className="primary" onClick={() => handleRate('good')}>{t.good}</button>
										<button type="button" className="secondary" onClick={() => handleRate('easy')}>{t.easy}</button>
									</div>
								)}
							</div>
							{hintShown && !revealed && <p className="hint-box">{hintText}</p>}
							<p className="meta">{metaText}</p>
						</>
					) : (
						<p className="meta">{t.empty}</p>
					)}
					<p className="overlay-shortcut-tip">{t.shortcutTip}</p>
				</div>
			</div>
		</div>
	);
}
