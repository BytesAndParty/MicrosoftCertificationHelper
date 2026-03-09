import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { useStudyStore } from '../../lib/study/store';
import { selectNextStudyCard } from '../../lib/study/spaced-repetition';
import { glossaryTerms } from '../../data/glossary-terms';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { formatDate } from '../../lib/format';

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const glossaryCards = glossaryTerms.map((item, index) => ({
	id: `g${index + 1}`,
	topic: 'Glossary',
	front: item.term,
	back: item.definition,
	frontDe: item.term,
	backDe: item.definitionDe || item.definition,
}));

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Glossary',
		meta: 'Flip through AI-900 terms as flashcards.',
		search: 'Search',
		placeholder: 'Term or keyword...',
		showDef: 'Show definition',
		empty: 'No matches found.',
		dueCards: (n: number) => `Due terms: ${n}`,
		nextCard: (d: string) => `Next term: ${d}`,
		again: 'Again',
		good: 'Good',
		easy: 'Easy',
		shortcuts: 'Space/Enter reveal | N next term | F search | 1 again | 2 good | 3 easy | ESC close',
	},
	de: {
		title: 'Glossar',
		meta: 'AI-900 Begriffe als Karteikarten durchblättern.',
		search: 'Suche',
		placeholder: 'Begriff oder Stichwort...',
		showDef: 'Definition zeigen',
		empty: 'Keine Treffer.',
		dueCards: (n: number) => `Fällige Begriffe: ${n}`,
		nextCard: (d: string) => `Nächster Begriff: ${d}`,
		again: 'Nochmal',
		good: 'Gut',
		easy: 'Sicher',
		shortcuts: 'Leertaste/Enter Aufdecken | N Nächster Begriff | F Suche | 1 Nochmal | 2 Gut | 3 Sicher | ESC Schließen',
	},
} as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface GlossaryDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function GlossaryDialog({ open, onOpenChange }: GlossaryDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const glossaryFlashcards = useStudyStore((s) => s.glossaryFlashcards);
	const settings = useStudyStore((s) => s.settings);
	const rateGlossaryCard = useStudyStore((s) => s.rateGlossaryCard);

	const [search, setSearch] = useState('');
	const [shown, setShown] = useState(false);
	const [activeCard, setActiveCard] = useState<(typeof glossaryCards)[number] | null>(null);

	const searchRef = useRef<HTMLInputElement>(null);

	const chooseNext = useCallback(
		(filter = '') => {
			const query = filter.trim().toLowerCase();
			const filtered = glossaryCards.filter((card) => {
				if (!query) return true;
				const def = lang === 'de' && card.backDe ? card.backDe : card.back;
				return card.front.toLowerCase().includes(query) || def.toLowerCase().includes(query);
			});
			const next = selectNextStudyCard(filtered, glossaryFlashcards, {
				now: Date.now(),
				newCardsPerDay: settings?.newGlossaryPerDay,
			});
			setActiveCard(next);
			setShown(false);
		},
		[glossaryFlashcards, settings?.newGlossaryPerDay, lang]
	);

	// Pick first card when dialog opens
	useEffect(() => {
		if (open) {
			chooseNext(search);
		}
	}, [open]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleRate = useCallback(
		(grade: 'again' | 'good' | 'easy') => {
			if (!activeCard) return;
			rateGlossaryCard(activeCard.id, grade);
			chooseNext(search);
		},
		[activeCard, rateGlossaryCard, chooseNext, search]
	);

	const handleShow = useCallback(() => setShown(true), []);

	const handleSearch = useCallback(
		(value: string) => {
			setSearch(value);
			chooseNext(value);
		},
		[chooseNext]
	);

	// Derived display values
	const front = activeCard
		? lang === 'de' && activeCard.frontDe
			? activeCard.frontDe
			: activeCard.front
		: '';
	const back = activeCard
		? lang === 'de' && activeCard.backDe
			? activeCard.backDe
			: activeCard.back
		: '';

	const progress = activeCard ? glossaryFlashcards[activeCard.id] : null;

	const dueCount = useMemo(
		() => glossaryCards.filter((c) => glossaryFlashcards[c.id]?.dueAt <= Date.now()).length,
		[glossaryFlashcards]
	);

	const metaText = !activeCard
		? ''
		: dueCount > 0
			? t.dueCards(dueCount)
			: progress
				? t.nextCard(formatDate(progress.dueAt, lang))
				: '';

	// Keyboard shortcuts (active only when dialog is open)
	useHotkeys(
		[
			{
				key: ' ',
				handler: () => { if (!shown && activeCard) handleShow(); },
			},
			{
				key: 'Enter',
				handler: () => { if (!shown && activeCard) handleShow(); },
			},
			{
				key: 'n',
				handler: () => chooseNext(search),
			},
			{
				key: 'f',
				handler: () => {
					searchRef.current?.focus();
					searchRef.current?.select();
				},
			},
			{
				key: '1',
				handler: () => { if (shown) handleRate('again'); },
			},
			{
				key: '2',
				handler: () => { if (shown) handleRate('good'); },
			},
			{
				key: '3',
				handler: () => { if (shown) handleRate('easy'); },
			},
		],
		open
	);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t.title}</DialogTitle>
					<DialogDescription>{t.meta}</DialogDescription>
				</DialogHeader>

				{/* Search */}
				<div className="grid gap-1.5">
					<label htmlFor="glossary-search-react" className="text-sm font-medium">
						{t.search}
					</label>
					<Input
						ref={searchRef}
						id="glossary-search-react"
						type="search"
						placeholder={t.placeholder}
						value={search}
						onChange={(e) => handleSearch(e.target.value)}
					/>
				</div>

				{/* Flashcard */}
				<Card className="p-5" aria-live="polite">
					{activeCard ? (
						<>
							<Badge variant="secondary" className="mb-3">
								{activeCard.topic}
							</Badge>
							<h4 className="text-lg font-semibold mb-2">{front}</h4>
							{shown && (
								<p className="text-sm text-muted-foreground">{back}</p>
							)}
						</>
					) : (
						<p className="text-sm text-muted-foreground">{t.empty}</p>
					)}
				</Card>

				{/* Actions */}
				<div className="flex flex-wrap items-center gap-2">
					{activeCard && !shown && (
						<Button variant="secondary" onClick={handleShow}>
							{t.showDef}
						</Button>
					)}
					{shown && (
						<>
							<Button variant="destructive" size="sm" onClick={() => handleRate('again')}>
								{t.again}
							</Button>
							<Button variant="default" size="sm" onClick={() => handleRate('good')}>
								{t.good}
							</Button>
							<Button variant="secondary" size="sm" onClick={() => handleRate('easy')}>
								{t.easy}
							</Button>
						</>
					)}
				</div>

				{/* Meta */}
				{metaText && (
					<p className="text-xs text-muted-foreground">{metaText}</p>
				)}

				{/* Shortcut hint */}
				<p className="text-[0.7rem] text-muted-foreground/70">{t.shortcuts}</p>
			</DialogContent>
		</Dialog>
	);
}
