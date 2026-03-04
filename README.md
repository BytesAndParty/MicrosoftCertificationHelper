# Microsoft Certification Helper (AI-900)

Browser-based study app for Microsoft AI-900 prep with local-only progress storage (no backend, no accounts).

## Features

- Quiz mode with instant feedback, hints, and bookmarks
- Timed exam mode (10 questions, 20 minutes) with detailed review
- Flashcards with spaced repetition grades (`Again`, `Good`, `Easy`)
- Glossary flashcards with search and spaced repetition
- Error journal for prioritized mistake review
- Light/dark theme + EN/DE language switch
- Keyboard-first workflow (shortcuts + overlay focus management)

## Recommended Daily Flow

1. Clear due flashcards.
2. Run a short quiz set.
3. Practice misses via Error Journal.
4. Finish with one timed exam set.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Host framework | Astro 5 |
| Interactive UI | React islands |
| UI primitives | shadcn/ui + Radix |
| Styling | Tailwind tokens + study workspace CSS |
| State/domain logic | Modular JS in `src/lib/study/*` |
| Runtime orchestration | `src/scripts/study-runtime.js` |
| Persistence | IndexedDB + localStorage fallback |
| Package manager | Bun |
| E2E testing | Playwright |

## Quickstart

```sh
bun install
bun run dev
```

App URL: `http://localhost:4321`

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start local dev server |
| `bun run build` | Build static production output to `./dist/` |
| `bun run preview` | Preview production build |
| `bun run test` | Run unit tests (`src/lib/study/*.test.ts`) |
| `bun run test:e2e` | Run Playwright smoke + keyboard/focus tests |
| `bun run test:all` | Run unit + e2e suite |

## Architecture

- ADR: `docs/adr/0001-ui-stack.md`
- Runtime architecture notes: `docs/architecture/study-runtime.md`

## Project Structure

```text
src/
├── components/study/                # Study workspace + overlay modules
├── data/content.js                  # AI-900 questions, flashcards, glossary, roadmap
├── lib/study/                       # Domain/state helpers + unit tests
├── pages/index.astro                # Main app entry
├── scripts/study-runtime.js         # Runtime wiring (events, overlays, i18n, persistence)
└── styles/study-workspace.css       # Workspace look and feel
tests/e2e/                           # Playwright smoke + accessibility flow tests
```
