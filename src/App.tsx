import { useEffect } from 'react';
import { roadmapThemes } from './data/roadmap-themes';
import StudyWorkspace from './components/study/StudyWorkspace';

export default function App() {
	useEffect(() => {
		import('./scripts/study-runtime.js');
	}, []);

	return <StudyWorkspace roadmapThemes={roadmapThemes} />;
}
