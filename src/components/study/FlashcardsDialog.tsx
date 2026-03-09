import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { cn } from '../../lib/utils';
import { useStudyStore } from '../../lib/study/store';
import { selectNextStudyCard } from '../../lib/study/spaced-repetition';
import { flashcards } from '../../data/flashcards';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { formatDate } from '../../lib/format';

/* -------------------------------------------------------------------------- */
/*  Hint keyword extraction                                                   */
/* -------------------------------------------------------------------------- */

const HINT_STOPWORDS_EN = new Set([
	'the', 'and', 'for', 'with', 'from', 'that', 'this', 'into', 'your', 'you', 'are', 'can', 'also', 'than',
	'only', 'more', 'most', 'used', 'using', 'when', 'what', 'where', 'which', 'about', 'core', 'azure', 'service',
	'model', 'models', 'card', 'cards', 'data', 'text', 'through', 'into', 'each', 'their', 'them', 'they', 'its'
]);
const HINT_STOPWORDS_DE = new Set([
	'der', 'die', 'das', 'den', 'dem', 'des', 'und', 'oder', 'ein', 'eine', 'einer', 'einem', 'eines', 'mit',
	'für', 'fuer', 'von', 'auf', 'aus', 'bei', 'als', 'auch', 'nur', 'mehr', 'wenn', 'was', 'wie', 'welche',
	'welcher', 'welches', 'diese', 'dieser', 'dieses', 'dass', 'ist', 'sind', 'wird', 'werden', 'kann', 'können',
	'koennen', 'durch', 'über', 'ueber', 'dein', 'deine', 'deiner', 'deinem', 'deines', 'karte', 'karten'
]);

function extractHintKeywords(text: string, lang: string): string[] {
	if (!text) return [];
	const stopwords = lang === 'de' ? HINT_STOPWORDS_DE : HINT_STOPWORDS_EN;
	const tokens = text
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, ' ')
		.split(/\s+/)
		.filter((token) => token.length >= 4 && !stopwords.has(token));
	const unique: string[] = [];
	for (const token of tokens) {
		if (unique.includes(token)) continue;
		unique.push(token);
		if (unique.length >= 3) break;
	}
	return unique;
}

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Spaced Repetition',
		meta: 'Rate each card: Again, Good, Easy.',
		showAnswer: 'Show answer',
		showHint: 'Show hint',
		discuss: 'Discuss in AI chat',
		hintPrefix: (kw: string) => `Keyword hint: ${kw}`,
		hintFallback: 'Hint: Focus on the core distinction and Azure service purpose.',
		dueCards: (n: number) => `Due cards: ${n}`,
		nextCard: (d: string) => `Next card: ${d}`,
		again: 'Again',
		good: 'Good',
		easy: 'Easy',
		shortcuts: 'Space/Enter reveal | H hint | N next card | 1 again | 2 good | 3 easy | ESC close',
	},
	de: {
		title: 'Spaced Repetition',
		meta: 'Bewerte jede Karte: Nochmal, Gut, Sicher.',
		showAnswer: 'Antwort zeigen',
		showHint: 'Hinweis zeigen',
		discuss: 'Im KI-Chat besprechen',
		hintPrefix: (kw: string) => `Stichwort-Hinweis: ${kw}`,
		hintFallback: 'Hinweis: Achte auf den Kernunterschied und den Azure-Dienstzweck.',
		dueCards: (n: number) => `Fällige Karten: ${n}`,
		nextCard: (d: string) => `Nächste Karte: ${d}`,
		again: 'Nochmal',
		good: 'Gut',
		easy: 'Sicher',
		shortcuts: 'Leertaste/Enter Aufdecken | H Hinweis | N Nächste Karte | 1 Nochmal | 2 Gut | 3 Sicher | ESC Schließen',
	},
} as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

type SwipeDirection = 'again' | 'good' | 'easy' | null;

interface FlashcardsDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function FlashcardsDialog({ open, onOpenChange }: FlashcardsDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const flashcardProgress = useStudyStore((s) => s.flashcards);
	const settings = useStudyStore((s) => s.settings);
	const rateFlashcard = useStudyStore((s) => s.rateFlashcard);

	const [shown, setShown] = useState(false);
	const [hintShown, setHintShown] = useState(false);
	const [activeCard, setActiveCard] = useState<(typeof flashcards)[number] | null>(null);
	const [swipe, setSwipe] = useState<SwipeDirection>(null);
	const swipeTimer = useRef<ReturnType<typeof setTimeout>>();

	const chooseNext = useCallback(() => {
		const next = selectNextStudyCard(flashcards, flashcardProgress, {
			now: Date.now(),
			newCardsPerDay: settings?.newCardsPerDay,
		});
		setActiveCard(next);
		setShown(false);
		setHintShown(false);
		setSwipe(null);
	}, [flashcardProgress, settings?.newCardsPerDay]);

	// Pick first card when dialog opens
	useEffect(() => {
		if (open) chooseNext();
	}, [open]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleRate = useCallback(
		(grade: 'again' | 'good' | 'easy') => {
			if (!activeCard) return;
			rateFlashcard(activeCard.id, grade);

			// Swipe animation then advance
			setSwipe(grade);
			if (swipeTimer.current) clearTimeout(swipeTimer.current);
			swipeTimer.current = setTimeout(() => {
				setSwipe(null);
				chooseNext();
			}, 280);
		},
		[activeCard, rateFlashcard, chooseNext]
	);

	const handleShow = useCallback(() => setShown(true), []);
	const handleHint = useCallback(() => setHintShown(true), []);

	const handleDiscuss = useCallback(() => {
		if (!activeCard) return;
		window.dispatchEvent(
			new CustomEvent('flashcard-discuss', { detail: { card: activeCard, language: lang } })
		);
	}, [activeCard, lang]);

	// Derived display values
	const front = activeCard
		? lang === 'de' && activeCard.frontDe ? activeCard.frontDe : activeCard.front
		: '';
	const back = activeCard
		? lang === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back
		: '';

	const hintText = useMemo(() => {
		if (!activeCard) return '';
		const backText = lang === 'de' && activeCard.backDe ? activeCard.backDe : activeCard.back;
		const keywords = extractHintKeywords(backText, lang);
		if (!keywords.length) return t.hintFallback;
		return t.hintPrefix(keywords.join(', '));
	}, [activeCard, lang, t]);

	const progress = activeCard ? flashcardProgress[activeCard.id] : null;

	const dueCount = useMemo(
		() => flashcards.filter((c) => flashcardProgress[c.id]?.dueAt <= Date.now()).length,
		[flashcardProgress]
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
				key: 'h',
				handler: () => { if (!hintShown && activeCard && hintText) handleHint(); },
			},
			{
				key: 'n',
				handler: () => chooseNext(),
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

				{/* Flashcard */}
				<Card
					className={cn('p-5 transition-all duration-200', shown && 'ring-2 ring-emerald-500/40')}
					style={
						swipe
							? {
									animation: `swipe-${swipe === 'again' ? 'left' : swipe === 'easy' ? 'right' : 'down'} 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
								}
							: undefined
					}
					aria-live="polite"
				>
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
						<p className="text-sm text-muted-foreground">
							{lang === 'de' ? 'Keine Karten verfügbar.' : 'No cards available.'}
						</p>
					)}
				</Card>

				{/* Hint */}
				{hintShown && hintText && (
					<p className="text-sm text-muted-foreground bg-muted/50 rounded-md px-3 py-2">
						{hintText}
					</p>
				)}

				{/* Actions */}
				<div className="flex flex-wrap items-center gap-2">
					{activeCard && !shown && (
						<>
							<Button variant="secondary" onClick={handleShow}>
								{t.showAnswer}
							</Button>
							{!hintShown && hintText && (
								<Button variant="outline" size="sm" onClick={handleHint}>
									{t.showHint}
								</Button>
							)}
							<Button variant="outline" size="sm" onClick={handleDiscuss}>
								{t.discuss}
							</Button>
						</>
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
							<Button variant="outline" size="sm" onClick={handleDiscuss}>
								{t.discuss}
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
