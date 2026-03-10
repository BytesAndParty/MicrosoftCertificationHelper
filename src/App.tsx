import { useEffect, useState, useCallback } from 'react';
import { roadmapThemes } from './data/roadmap-themes';
import StudyWorkspace from './components/study/StudyWorkspace';
import QuizDialog from './components/study/QuizDialog';

export default function App() {
	const [quizOpen, setQuizOpen] = useState(false);

	useEffect(() => {
		import('./scripts/study-runtime.js');
	}, []);

	// Listen for mode-open events from the vanilla runtime (hero buttons)
	useEffect(() => {
		const handler = (e: Event) => {
			const mode = (e as CustomEvent).detail?.mode;
			if (mode === 'quiz') setQuizOpen(true);
		};
		window.addEventListener('study-mode-open', handler);
		return () => window.removeEventListener('study-mode-open', handler);
	}, []);

	const closeQuiz = useCallback(() => setQuizOpen(false), []);

	return (
		<>
			<StudyWorkspace roadmapThemes={roadmapThemes} />
			<QuizDialog open={quizOpen} onClose={closeQuiz} />
		</>
	);
}
