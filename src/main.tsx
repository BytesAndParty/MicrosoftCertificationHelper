import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { db } from './db/schema';
import { quizQuestions } from './db/quiz-questions';
import { flashcards } from './db/flashcards';
import { glossaryTerms } from './db/glossary-terms';
import { roadmapThemes } from './db/roadmap-themes';
import './index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

// Seed database on startup if needed
db.seedIfEmpty(quizQuestions, flashcards, glossaryTerms, roadmapThemes).catch((err) => {
	console.error('Error seeding database:', err);
});

createRoot(rootEl).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
