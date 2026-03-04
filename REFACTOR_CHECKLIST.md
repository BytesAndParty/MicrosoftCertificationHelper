# Large Refactor Checklist (Astro + shadcn)

Use this file to track progress.  
Rule: switch `[ ]` to `[x]` only after the step is fully done (code, build, and commit).

## Framework Decision

- [x] Confirm target stack: `Astro + React islands + shadcn/ui + Tailwind`
- [x] Add ADR note in repo (`docs/adr/`): why this stack, tradeoffs, and migration strategy

## Phase 1 - Foundation

- [x] Install and configure `@astrojs/react`
- [x] Install and configure Tailwind CSS
- [x] Initialize `shadcn/ui` and base config
- [x] Add core design tokens (colors, radius, typography)
- [x] Add base UI primitives (`Button`, `Card`, `Dialog`, `Tabs`, `Tooltip`, `Input`)
- [x] Verify build and preview work
- [x] Commit: `chore: add react + tailwind + shadcn foundation`

## Phase 2 - Theme and Providers

- [x] Add class-based dark/light theme setup
- [x] Add theme provider and `ModeToggle` using shadcn pattern
- [x] Wire persistent theme preference
- [x] Validate dark/light on desktop and mobile
- [x] Commit: `feat(theme): add shadcn-based dark/light theming`

## Phase 3 - State and Domain Extraction

- [x] Split domain logic from `src/scripts/app.js` into `src/lib/study/*`
- [x] Introduce central store (recommended: `zustand` with persist)
- [x] Keep compatibility with existing saved progress format
- [x] Add unit tests for extracted quiz and spaced-repetition logic
- [x] Commit: `refactor(state): move study logic to store and domain modules`

## Phase 4 - UI Shell Migration

- [x] Rebuild main shell with shadcn components
- [x] Migrate overlays to shadcn dialogs
- [x] Migrate settings and welcome to React components
- [x] Keep current behavior parity (shortcuts, i18n, progress)
- [x] Commit: `refactor(ui): migrate shell and dialogs to shadcn components`

## Phase 5 - Module-by-Module Migration

- [x] Quiz module migrated and verified
- [x] Exam module migrated and verified
- [x] Flashcards module migrated and verified
- [x] Glossary module migrated and verified
- [x] Error Journal migrated and verified
- [x] Commit per module (atomic commits)

## Phase 6 - Quality and Cleanup

- [ ] Add/extend e2e smoke tests for key learning flows
- [ ] Add accessibility checks (keyboard and focus flow)
- [ ] Remove obsolete legacy JS/CSS paths
- [ ] Update README and architecture docs
- [ ] Final build verification and release commit

## Atomic Commit Plan

- [x] `chore: add react + tailwind + shadcn foundation`
- [x] `feat(theme): add shadcn-based dark/light theming`
- [x] `refactor(state): move study logic to store and domain modules`
- [x] `refactor(ui): migrate shell and dialogs to shadcn components`
- [x] `refactor(quiz): migrate quiz module`
- [x] `refactor(exam): migrate exam module`
- [x] `refactor(flashcards): migrate flashcard module`
- [x] `refactor(glossary): migrate glossary module`
- [x] `refactor(journal): migrate error journal module`
- [ ] `test: add unit and e2e coverage for study flows`
- [ ] `chore: remove legacy app.js and old CSS paths`
