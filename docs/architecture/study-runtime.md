# Study Runtime Architecture

## Goals

- Keep learning flow fast and keyboard-friendly.
- Preserve compatibility with existing saved progress.
- Enable incremental migration from monolithic DOM code to modular UI/state layers.

## Runtime Layers

1. Astro page shell
- `src/pages/index.astro` mounts the study workspace and loads runtime script.

2. Study UI composition
- `src/components/study/StudyWorkspace.tsx` composes the page sections and mode overlays.
- Mode overlays are split into module components:
  - `QuizModule.tsx`
  - `ExamModule.tsx`
  - `FlashcardsModule.tsx`
  - `GlossaryModule.tsx`
  - `JournalModule.tsx`

3. Runtime orchestration
- `src/scripts/study-runtime.js` manages:
  - UI event binding (mode switching, shortcuts, overlay lifecycle)
  - i18n text application (EN/DE)
  - persistence hydration/save
  - rendering for quiz/exam/cards/journal metrics

4. Domain/state modules
- `src/lib/study/*` contains reusable logic:
  - `quiz.js` (question runtime shaping/localization)
  - `spaced-repetition.js` (card scheduling)
  - `state.js` (hydration/defaults/compatibility)
  - `settings.js` (validation/clamping/defaults)
  - `store.js` (state store helpers)

## Persistence Model

- Primary: IndexedDB (`ai900-study-helper` / key-value store).
- Fallback: localStorage (`FALLBACK_KEY`) for degraded environments.
- Theme and language preference use dedicated localStorage keys.

## Accessibility and Usability Controls

- Focus trap + focus restore in overlays.
- Escape/backdrop close handling.
- Keyboard shortcuts per mode and global shortcuts.
- Skip link and aria labels for key interactive controls.

## Test Strategy

- Unit tests (`bun test`) for domain/state behavior in `src/lib/study/*.test.ts`.
- E2E smoke tests (`bun run test:e2e`) for:
  - Core daily learning path (quiz -> flashcards -> glossary)
  - Keyboard/focus behavior and global shortcut safety
