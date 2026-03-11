import { useState, useEffect, useCallback, useMemo } from 'react';
import { useStudyStore } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { selectNextStudyCard } from '../../lib/study/spaced-repetition';
import { glossaryTerms } from '../../data/glossary-terms';
import { formatDate } from '../../lib/format';

const glossaryCards = glossaryTerms.map((item: any, i: number) => ({
	id: `g${i + 1}`,
	topic: 'Glossary',
	front: item.term,
	back: item.definition,
	frontDe: item.term,
	backDe: item.definitionDe || item.definition,
}));

const i18n = {
	en: {
		title: 'Glossary',
		meta: 'Flip through AI-900 terms as flashcards.',
		search: 'Search',
		placeholder: 'Term or keyword...',
		showDef: 'Show definition',
		again: 'Again',
		good: 'Good',
		easy: 'Easy',
		dueCards: '{count} terms due',
		nextCard: 'Next review: {date}',
		empty: 'No terms match your search.',
		shortcutTip: 'Shortcuts: Space/Enter reveal | N next | F search | 1 again | 2 good | 3 easy',
	},
	de: {
		title: 'Glossar',
		meta: 'Blättere durch AI-900-Begriffe als Lernkarten.',
		search: 'Suche',
		placeholder: 'Begriff oder Stichwort...',
		showDef: 'Definition zeigen',
		again: 'Nochmal',
		good: 'Gut',
		easy: 'Leicht',
		dueCards: '{count} Begriffe fällig',
		nextCard: 'Nächste Wiederholung: {date}',
		empty: 'Keine Begriffe gefunden.',
		shortcutTip: 'Shortcuts: Leertaste/Enter aufdecken | N Nächster | F Suche | 1 Nochmal | 2 Gut | 3 Leicht',
	},
} as const;

interface GlossaryDialogProps {
	open: boolean;
	onClose: () => void;
}

export default function GlossaryDialog({ open, onClose }: GlossaryDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];
	const glossaryProgress = useStudyStore(s => s.glossaryFlashcards);
	const settings = useStudyStore(s => s.settings);
	const rateGlossaryCard = useStudyStore(s => s.rateGlossaryCard);

	const [searchQuery, setSearchQuery] = useState('');
	const [activeCard, setActiveCard] = useState<any>(null);
	const [revealed, setRevealed] = useState(false);
	const searchRef = useMemo(() => ({ current: null as HTMLInputElement | null }), []);

	const filteredCards = useMemo(() => {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return glossaryCards;
		return glossaryCards.filter(c => {
			const def = lang === 'de' && c.backDe ? c.backDe : c.back;
			return c.front.toLowerCase().includes(q) || def.toLowerCase().includes(q);
		});
	}, [searchQuery, lang]);

	const chooseNext = useCallback(() => {
		const card = selectNextStudyCard(filteredCards, glossaryProgress, {
			now: Date.now(),
			newCardsPerDay: settings.newGlossaryPerDay,
		});
		setActiveCard(card);
		setRevealed(false);
	}, [filteredCards, glossaryProgress, settings]);

	useEffect(() => {
		if (open) chooseNext();
	}, [open]);

	const handleRate = useCallback((grade: 'again' | 'good' | 'easy') => {
		if (!activeCard) return;
		rateGlossaryCard(activeCard.id, grade);
		chooseNext();
	}, [activeCard, rateGlossaryCard, chooseNext]);

	const front = activeCard ? (lang === 'de' && activeCard.frontDe ? activeCard.frontDe : activeCard.front) : '';
	const back = activeCard ? (lang === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back) : '';

	const dueCount = useMemo(() =>
		glossaryCards.filter(c => glossaryProgress[c.id]?.dueAt <= Date.now()).length,
		[glossaryProgress]
	);

	const metaText = activeCard
		? dueCount > 0
			? t.dueCards.replace('{count}', String(dueCount))
			: t.nextCard.replace('{date}', formatDate(glossaryProgress[activeCard.id]?.dueAt || Date.now()))
		: '';

	const keyMap = useMemo(() => ({
		' ': (e: KeyboardEvent) => { if (!revealed) { e.preventDefault(); setRevealed(true); } },
		'Enter': (e: KeyboardEvent) => { if (!revealed) { e.preventDefault(); setRevealed(true); } },
		'n': (e: KeyboardEvent) => { e.preventDefault(); chooseNext(); },
		'f': (e: KeyboardEvent) => { e.preventDefault(); searchRef.current?.focus(); searchRef.current?.select(); },
		'1': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('again'); } },
		'2': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('good'); } },
		'3': (e: KeyboardEvent) => { if (revealed) { e.preventDefault(); handleRate('easy'); } },
		'Escape': (e: KeyboardEvent) => { e.preventDefault(); onClose(); },
	}), [revealed, handleRate, chooseNext, onClose, searchRef]);

	useHotkeys(keyMap, open);

	if (!open) return null;

	return (
		<div className="overlay" role="dialog" aria-modal="true" data-testid="dialog-glossary">
			<div className="overlay-backdrop" onClick={onClose}></div>
			<div className="overlay-container card">
				<div className="overlay-header">
					<h2>{t.title}</h2>
					<p className="meta">{t.meta}</p>
					<button type="button" className="overlay-close" aria-label="Close" onClick={onClose}>&times;</button>
				</div>
				<div className="overlay-body">
					<div className="glossary-search-row">
						<label className="search-label" htmlFor="glossary-search-react">{t.search}</label>
						<input
							ref={el => { searchRef.current = el; }}
							id="glossary-search-react"
							type="search"
							placeholder={t.placeholder}
							value={searchQuery}
							onChange={e => { setSearchQuery(e.target.value); }}
							onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); chooseNext(); } }}
						/>
					</div>

					{activeCard ? (
						<>
							<div className={`flashcard ${revealed ? 'is-revealed' : ''}`} aria-live="polite">
								<p className="chip">{activeCard.topic}</p>
								<h4>{front}</h4>
								{revealed && <p>{back}</p>}
							</div>
							<div className="flash-actions">
								{!revealed && (
									<button type="button" className="secondary" onClick={() => setRevealed(true)}>{t.showDef}</button>
								)}
								{revealed && (
									<div className="grade-actions">
										<button type="button" className="danger" onClick={() => handleRate('again')}>{t.again}</button>
										<button type="button" className="primary" onClick={() => handleRate('good')}>{t.good}</button>
										<button type="button" className="secondary" onClick={() => handleRate('easy')}>{t.easy}</button>
									</div>
								)}
							</div>
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
