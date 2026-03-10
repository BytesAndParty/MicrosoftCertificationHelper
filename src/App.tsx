import { useEffect, useState, useCallback } from 'react';
import { roadmapThemes } from './data/roadmap-themes';
import StudyWorkspace from './components/study/StudyWorkspace';
import QuizDialog from './components/study/QuizDialog';
import ExamDialog from './components/study/ExamDialog';
import FlashcardsDialog from './components/study/FlashcardsDialog';
import GlossaryDialog from './components/study/GlossaryDialog';
import JournalDialog from './components/study/JournalDialog';

type StudyMode = 'quiz' | 'exam' | 'flashcards' | 'glossary' | 'journal' | null;

export default function App() {
	const [activeMode, setActiveMode] = useState<StudyMode>(null);

	useEffect(() => {
		import('./scripts/study-runtime.js');
	}, []);

	// Listen for mode-open events from the vanilla runtime (hero buttons)
	useEffect(() => {
		const handler = (e: Event) => {
			const mode = (e as CustomEvent).detail?.mode;
			if (mode) setActiveMode(mode);
		};
		window.addEventListener('study-mode-open', handler);
		return () => window.removeEventListener('study-mode-open', handler);
	}, []);

	const closeMode = useCallback(() => setActiveMode(null), []);

	const handleJournalPractice = useCallback((questionId: string) => {
		setActiveMode('quiz');
		// TODO: pass questionId to QuizDialog for targeted practice
	}, []);

	return (
		<>
			<StudyWorkspace roadmapThemes={roadmapThemes} />
			<QuizDialog open={activeMode === 'quiz'} onClose={closeMode} />
			<ExamDialog open={activeMode === 'exam'} onClose={closeMode} />
			<FlashcardsDialog open={activeMode === 'flashcards'} onClose={closeMode} />
			<GlossaryDialog open={activeMode === 'glossary'} onClose={closeMode} />
			<JournalDialog open={activeMode === 'journal'} onClose={closeMode} onPractice={handleJournalPractice} />
		</>
	);
}
