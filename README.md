# Microsoft Certification Helper (AI-900)

Browser-based study app for Microsoft AI-900 prep with zero backend and zero accounts.  
Everything runs locally in your browser with persistent progress.

## What You Can Do

- **Quiz Mode**: Instant feedback, hints, dynamic distractors, and glossary tooltips
- **Exam Mode**: 10-question timed simulation (20 minutes) with review and topic breakdown
- **Flashcards**: Spaced repetition (Again / Good / Easy)
- **Glossary Cards**: Search + spaced repetition for AI-900 core terms
- **Error Journal**: Prioritized review of wrong answers with one-click practice
- **Bookmarks**: Save important quiz questions for focused revision
- **Dashboard Metrics**: Accuracy, best exam score, due cards, and roadmap progress
- **UX Helpers**: Keyboard shortcuts, light/dark mode, and EN/DE language switch

## Daily Learning Flow (Recommended)

1. Open **Flashcards** and clear due cards.
2. Do a short **Quiz** round and bookmark weak questions.
3. Use **Error Journal** to re-practice recurring mistakes.
4. Run **Exam Mode** when you want timed practice.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5 |
| Language | JavaScript (ES Modules) |
| Package Manager | Bun |
| Styling | Custom CSS |
| Storage | IndexedDB + localStorage fallback |

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
| `bun run preview` | Preview production build locally |

## Content Coverage

| Content | Count |
|---------|-------|
| Quiz Questions | 78 |
| Flashcards | 34 |
| Glossary Terms | 40 |
| Topics | 8 |

Topics: AI Workloads, Machine Learning, Computer Vision, NLP, Generative AI, Knowledge Mining, Responsible AI, Document AI.

## Project Structure

```text
src/
├── data/content.js       # Questions, flashcards, glossary, roadmap
├── layouts/Layout.astro  # Base HTML layout
├── pages/index.astro     # Main study interface
├── scripts/app.js        # App logic (state, quiz, exam, flashcards, i18n)
└── styles/app.css        # UI styles and themes
```
