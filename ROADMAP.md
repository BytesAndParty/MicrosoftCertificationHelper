# MicrosoftCertificationHelper Roadmap (AI-900)

This roadmap is executed in sequence. Each phase has clear todos and a visible outcome.

## 1. Learning Strategy and Scope
- [x] Map the official AI-900 skill outline into topic clusters.
- [x] Define a learning goal per topic cluster (know, explain, apply).
- [x] Set a time budget with daily sessions and weekly goals.
- [x] Define success criteria (quiz accuracy, exam score, streak).

## 2. Product Foundation with Bun + Astro
- [x] Set up the Astro project with Bun in the repository root.
- [x] Build base layout, visual direction, and responsive structure.
- [x] Validate the development and build workflow (`bun run dev`, `bun run build`).
- [x] Prepare base page structure for all study modules.

## 3. AI-900 Content Model
- [x] Create a question model (prompt, options, correct answer, explanation, topic).
- [x] Build an initial curated question bank per topic.
- [x] Add a glossary dataset with core terms.
- [x] Add a flashcard dataset (front/back/topic).

## 4. Core Learning Features
- [x] Implement quiz mode with instant feedback and explanations.
- [x] Implement roadmap view with topics and todo checklists.
- [x] Integrate error journal (prioritized practice for wrong answers).
- [x] Build dashboard metrics (progress, accuracy, open items).

## 5. Exam Mode
- [x] Implement exam sessions with timer and mixed questions.
- [x] Add result view with overall score and topic breakdown.
- [x] Persist best score/history in local progress.
- [x] Add re-run flow for weak topics.

## 6. Browser DB and Persistence
- [x] Add IndexedDB layer (state, error journal, flashcard status).
- [x] Add `localStorage` fallback.
- [x] Plan data migration on schema changes (versioning).
- [x] Implement reset mechanism for learning progress.

## 7. Spaced Repetition and Quality
- [x] Implement flashcard rating (`Again`, `Good`, `Easy`) with interval logic.
- [x] Integrate due queue and repetition prioritization.
- [ ] Manually test critical user flows (quiz, exam, persistence, reset).
- [x] Identify content gaps and expand the question bank.

## 8. Wrap-up and Iteration
- [x] Stabilize MVP and mark as v0.1.
- [ ] Plan next expansion stage (import/export, multiple certifications, analytics).
- [ ] Define feedback loop: what actually improved study outcomes?
