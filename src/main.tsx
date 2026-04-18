import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { db } from './db/schema';
import { quizQuestions } from './db/quiz-questions';
import { flashcards } from './db/flashcards';
import { glossaryTerms } from './db/glossary-terms';
import { roadmapThemes } from './db/roadmap-themes';
import { pl200Questions } from './db/pl200/quiz-questions';
import { pl200Flashcards } from './db/pl200/flashcards';
import { pl200GlossaryTerms } from './db/pl200/glossary-terms';
import { pl200RoadmapThemes } from './db/pl200/roadmap-themes';
import { pl600Questions } from './db/pl600/quiz-questions';
import { pl600Flashcards } from './db/pl600/flashcards';
import { pl600GlossaryTerms } from './db/pl600/glossary-terms';
import { pl600RoadmapThemes } from './db/pl600/roadmap-themes';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

// Seed all certification content on startup (bulkPut upserts existing rows)
db.seedData(
	[...quizQuestions, ...pl200Questions, ...pl600Questions],
	[...flashcards, ...pl200Flashcards, ...pl600Flashcards],
	[...glossaryTerms, ...pl200GlossaryTerms, ...pl600GlossaryTerms],
	[...roadmapThemes, ...pl200RoadmapThemes, ...pl600RoadmapThemes],
).catch((err) => {
	console.error('Error seeding database:', err);
});

createRoot(rootEl).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
