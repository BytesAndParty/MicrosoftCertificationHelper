# Microsoft Certification Helper (AI-900)

Browser-based study app for the Microsoft AI-900 certification. Runs fully client-side with no backend and no user accounts.

## Features

- **Quiz mode** - Question practice with dynamically generated answer options and instant feedback
- **Exam mode** - 10 questions, 20-minute timer, and topic-level result breakdown
- **Flashcards** - Spaced repetition with three rating levels (Again / Good / Easy)
- **Error journal** - Prioritized review of incorrectly answered questions
- **Glossary** - Searchable AI-900 core terms
- **Dashboard** - Progress, accuracy, best exam score, and due cards
- **Persistence** - IndexedDB with localStorage fallback
- **Theme toggle** - Persistent light and dark mode
- **Language toggle** - English/German switch for UI labels and flashcards

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 5 |
| Language | JavaScript (ES6+) |
| Package Manager | Bun |
| Styling | Custom CSS (Space Grotesk + IBM Plex Mono) |
| Storage | IndexedDB + localStorage |

## Quickstart

```sh
bun install
bun run dev
```

App runs on `http://localhost:4321`.

## Content

| Content | Count |
|---------|-------|
| Quiz Questions | 78 |
| Flashcards | 34 |
| Glossary Terms | 40 |
| Topics | 8 (AI Workloads, ML, Computer Vision, NLP, Generative AI, Knowledge Mining, Responsible AI, Document AI) |

## Project Structure

```
src/
├── data/content.js       # Questions, flashcards, glossary, and roadmap topics
├── layouts/Layout.astro  # Base HTML shell
├── pages/index.astro     # Main page with all study modules
├── scripts/app.js        # Application logic (quiz, exam, flashcards, persistence)
└── styles/app.css        # Styling and responsive layout
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start local dev server |
| `bun run build` | Production build to `./dist/` |
| `bun run preview` | Preview production build locally |
