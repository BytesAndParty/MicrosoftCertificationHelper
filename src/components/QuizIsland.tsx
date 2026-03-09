import { useState, useEffect, useCallback } from 'react';
import { QuizDialog } from './study/QuizDialog';

export default function QuizIsland() {
	const [open, setOpen] = useState(false);
	const [forcedQuestionId, setForcedQuestionId] = useState<string | null>(null);

	useEffect(() => {
		const onOpen = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			if (detail?.mode === 'quiz') {
				setForcedQuestionId(detail.questionId || null);
				setOpen(true);
			}
		};
		window.addEventListener('study-mode-open', onOpen);
		return () => window.removeEventListener('study-mode-open', onOpen);
	}, []);

	const handleOpenChange = useCallback((value: boolean) => {
		setOpen(value);
		if (!value) setForcedQuestionId(null);
	}, []);

	return <QuizDialog open={open} onOpenChange={handleOpenChange} forcedQuestionId={forcedQuestionId} />;
}
