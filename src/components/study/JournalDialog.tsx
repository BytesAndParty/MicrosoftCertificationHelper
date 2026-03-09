import { useState, useCallback, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '../../lib/utils';
import { useStudyStore } from '../../lib/study/store';
import { localizeQuestionData } from '../../lib/study/quiz';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';
import { formatDate } from '../../lib/format';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface QuizQuestion {
	id: string;
	topic: string;
	prompt: string;
	promptDe?: string;
	[key: string]: unknown;
}

interface JournalEntry {
	id: string;
	question: QuizQuestion;
	count: number;
	last: number;
}

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Error Journal',
		meta: 'Prioritized list of your missed questions.',
		empty: 'No wrong answers yet.',
		rowMeta: (count: number, last: string) => `Mistakes: ${count} | Last: ${last}`,
		practiceNow: 'Practice now',
		mistakes: 'mistakes',
		shortcuts: 'ESC close',
	},
	de: {
		title: 'Fehlerjournal',
		meta: 'Priorisierte Liste deiner falsch beantworteten Fragen.',
		empty: 'Noch keine falschen Antworten.',
		rowMeta: (count: number, last: string) => `Fehler: ${count} | Zuletzt: ${last}`,
		practiceNow: 'Jetzt üben',
		mistakes: 'Fehler',
		shortcuts: 'ESC Schließen',
	},
} as const;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface JournalDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function JournalDialog({ open, onOpenChange }: JournalDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const wrongJournal = useStudyStore((s) => s.wrongJournal);

	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [loading, setLoading] = useState(false);

	// Lazy-load question pool on first open
	useEffect(() => {
		if (!open || questions.length) return;
		setLoading(true);
		import('../../data/quiz-questions.js')
			.then((mod) => {
				setQuestions(Array.isArray(mod.quizQuestions) ? mod.quizQuestions : []);
			})
			.catch(() => setQuestions([]))
			.finally(() => setLoading(false));
	}, [open, questions.length]);

	const questionById = useMemo(() => {
		const map = new Map<string, QuizQuestion>();
		questions.forEach((q) => map.set(q.id, q));
		return map;
	}, [questions]);

	const items: JournalEntry[] = useMemo(() => {
		if (!wrongJournal || !questionById.size) return [];
		return Object.entries(wrongJournal)
			.map(([id, data]: [string, any]) => ({
				id,
				question: questionById.get(id)!,
				count: Number(data.count) || 0,
				last: Number(data.lastWrongAt) || 0,
			}))
			.filter((item) => item.question)
			.sort((a, b) => b.count - a.count || b.last - a.last);
	}, [wrongJournal, questionById]);

	const handlePractice = useCallback(
		(questionId: string) => {
			onOpenChange(false);
			window.dispatchEvent(
				new CustomEvent('journal-practice', { detail: { questionId } })
			);
		},
		[onOpenChange]
	);

	// Keyboard shortcuts
	useHotkeys([], open);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
				<DialogHeader>
					<DialogTitle>{t.title}</DialogTitle>
					<DialogDescription>{t.meta}</DialogDescription>
				</DialogHeader>

				<ScrollArea className="flex-1 -mx-1 px-1" style={{ maxHeight: '60vh' }}>
					<div className="grid gap-2">
						{loading && (
							<div className="space-y-2">
								{[1, 2, 3].map((i) => (
									<div key={i} className="rounded-lg border border-input p-3 space-y-2">
										<div className="animate-pulse rounded-md bg-accent h-4 w-3/4" />
										<div className="animate-pulse rounded-md bg-accent h-3 w-1/2" />
									</div>
								))}
							</div>
						)}

						{!loading && items.length === 0 && (
							<p className="text-sm text-muted-foreground">{t.empty}</p>
						)}

						{items.map((item) => {
							const localized = localizeQuestionData(item.question, lang);
							return (
								<Card key={item.id} className="p-4 space-y-2">
									<div className="flex items-start gap-2">
										<h4 className="text-sm font-medium flex-1">{localized.prompt}</h4>
										<Badge variant="destructive" className="shrink-0 text-xs">
											{item.count}
										</Badge>
									</div>
									<p className="text-xs text-muted-foreground">
										{t.rowMeta(item.count, formatDate(item.last, lang))}
									</p>
									<Button
										variant="secondary"
										size="sm"
										onClick={() => handlePractice(item.id)}
									>
										{t.practiceNow}
									</Button>
								</Card>
							);
						})}
					</div>
				</ScrollArea>

				<p className="text-[0.7rem] text-muted-foreground/70">{t.shortcuts}</p>
			</DialogContent>
		</Dialog>
	);
}
