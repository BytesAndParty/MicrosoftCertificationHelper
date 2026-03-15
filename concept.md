# AI-900 Study Helper — Project Goals

## Mission

Pass the Microsoft AI-900 exam. Everything in this app serves that one goal.

## Audience

Robert + a handful of coursemates. No public deployment, no auth, no accounts.

---

## Core Features (Priority Order)

### 1. Quiz Mode (Star Feature)

Interactive question-by-question flow with deep explanations.

- One question per screen (reduce cognitive load)
- 4 answer options
- On answer: immediate feedback with explanation
- Explain WHY the correct answer is right AND why each wrong answer is wrong
- Hint system (optional reveal before answering)
- Filter by topic (AI Workloads, NLP, Computer Vision, ML, Responsible AI, GenAI, etc.)
- Track which questions were answered correctly/incorrectly
- Link to Microsoft Learn reference per question
- Bilingual: EN/DE toggle

### 2. Exam Simulator

Timed mock exam mimicking real AI-900 conditions.

- Random question selection across all topics
- Timer (exam duration)
- No hints, no immediate feedback (reveal all at end)
- Score breakdown by topic at the end
- Review missed questions with full explanations

### 3. Glossary

Searchable reference of AI-900 terms.

- Search + filter
- Term + definition (EN/DE)
- Quick-access during study sessions

### 4. Flashcards

Spaced repetition card review.

- Front/back card flip
- Mark as known/unknown
- Prioritize weak cards
- Bilingual support

### 5. Progress Dashboard

Track readiness across all features.

- Mastery per topic (% correct over time)
- Weak areas highlighted
- Questions answered / remaining
- Study streak (optional, light gamification)

---

## Data & Storage

### Database from Day 1

All questions and glossary terms stored in a local database (sql.js / SQLite in browser).

- Seed DB from existing JS data files on first load
- Track per-question stats: times seen, times correct, last answered
- Track glossary lookups
- No backend, no cloud — everything runs locally in the browser

### Data Shape (already exists)

- **Quiz**: ~150+ questions with prompt, hint, 4 options, per-option explanations, correct index, topic, learn reference (all bilingual)
- **Glossary**: ~65 terms with definitions (EN/DE)
- **Flashcards**: ~34 cards front/back (EN/DE)

---

## Design Direction

### Vibe: Dark + Techy

Inspired by Codecademy, DataCamp — clean dark surfaces, vibrant accent colors, minimal chrome.

### Design Principles

1. **Content-first** — No decoration that doesn't help you learn
2. **One task per screen** — Quiz = one question. Glossary = search. No multi-panel overwhelm
3. **Visible progress** — Always show where you stand (progress bars, topic mastery, score)
4. **Immediate feedback** — Every answer gets an explanation, not just right/wrong

### Theming

- Dark mode as default
- shadcn/ui component system with CSS variables for theming
- Accent switcher (already built) — all UI adapts to selected accent color
- Neutral dark surface palette + one vibrant accent color
- Colors via OKLCH (Tailwind v4)

### Key UI Patterns

- Card-based layouts for navigation and content
- Step indicators for quiz progress (Question 5/20)
- Micro-animations on quiz feedback (correct/incorrect)
- Clean typography hierarchy
- Generous spacing, no clutter

---

## Non-Goals

- No user accounts or authentication
- No backend server or cloud sync
- No social features or leaderboards
- No content creation/editing UI
- No course/lesson structure (this is a quiz app, not a course platform)
- No over-engineered gamification (no XP, no badges, no levels)

---

## Tech Decisions

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite + TypeScript (strict) |
| Styling | Tailwind CSS v4 + shadcn/ui primitives |
| Routing | TanStack Router (file-based) |
| State | Zustand |
| Database | sql.js (SQLite compiled to WASM, runs in browser) |
| Animations | framer-motion |
| Language | Bilingual EN/DE (toggle, not auto-detect) |

---

## Key Insight (from concept research)

> Successful learning platforms are **progress-tracking apps with content**, not content websites.
> The UX is driven by: **Fortschritt, Motivation, Interaktion.**

This app is a quiz engine with progress tracking. The content (AI-900 questions) already exists. The job is to make studying feel effective and motivating.
