# Build Progress

## Step 1: TypeScript Types & Data Layer
- [ ] Create interfaces: `QuizQuestion`, `GlossaryTerm`, `Flashcard`, `RoadmapTheme`
- [ ] Shared types: `Topic` union (8 topics), `Language` (`'en' | 'de'`)
- [ ] Convert data files `.js` → `.ts` with typed exports
- [ ] Normalize topic strings across files

## Step 2: Settings Store & Language Toggle
- [ ] Zustand settings store (language, persisted to localStorage)
- [ ] Bilingual helper `src/lib/i18n.ts`
- [ ] Language toggle in navbar

## Step 3: Navigation Shell & Routing
- [ ] Route files: `/quiz`, `/exam`, `/flashcards`, `/glossary`, `/progress`
- [ ] Navbar with links + active route highlighting
- [ ] Mobile-responsive nav
- [ ] Home page cards link to routes
- [ ] Progress bar component in navbar
- [ ] Start Exam button in navbar

## Step 4: shadcn/ui Component Expansion
- [ ] Card, Badge, Progress, Input, Dialog, RadioGroup, Separator, ScrollArea

## Step 5: Quiz Mode — Core Flow
- [ ] Quiz store (Zustand)
- [ ] Quiz setup screen (topic filter → Start)
- [ ] Question display (prompt, 4 options, hint, progress)
- [ ] Feedback screen (per-option explanations, Learn link)
- [ ] Question shuffling, bilingual support

## Step 6: Quiz Mode — Polish & Animations
- [ ] framer-motion question transitions
- [ ] Correct/incorrect animations
- [ ] Hint reveal animation
- [ ] Keyboard shortcuts (1-4, H, N)

## Step 7: sql.js Database Layer
- [ ] Install sql.js, configure WASM
- [ ] Database singleton (init, tables, seed, persist to IndexedDB)
- [ ] Tables: `quiz_attempts`, `exam_sessions`, `flashcard_reviews`, `glossary_lookups`

## Step 8: Quiz Progress Persistence
- [ ] Connect quiz store → DB
- [ ] Query functions (per-question, per-topic, weakest topic)
- [ ] Accuracy badges on topic filter
- [ ] Summary screen every 10 questions

## Step 9: Glossary
- [ ] Glossary page with alphabetical list
- [ ] Real-time search/filter
- [ ] Expandable term definitions
- [ ] Bilingual, log lookups to DB

## Step 10: Flashcards with Spaced Repetition
- [ ] SM-2 algorithm
- [ ] Flashcard store + flip animation
- [ ] Rate: Again / Good / Easy
- [ ] Topic filter, stats, persist to DB

## Step 11: Exam Simulator
- [ ] Exam store (random questions, timer, no feedback)
- [ ] Setup screen, question navigation pills
- [ ] Flag/bookmark questions
- [ ] Results screen (score, topic breakdown, review missed)

## Step 12: Progress Dashboard
- [ ] Real stats: quiz accuracy, exam score, due flashcards, terms reviewed
- [ ] Per-topic mastery grid
- [ ] Weak areas highlighted
- [ ] Quick-start buttons

## Step 13: Settings & Keyboard Shortcuts
- [ ] Settings panel
- [ ] Global keyboard shortcuts
- [ ] Shortcut overlay dialog

## Step 14: Final Polish & Error Journal
- [ ] Error Journal (most-missed questions, "Practice These")
- [ ] Study heatmap, streak tracking
- [ ] Page transitions, empty states, loading states
- [ ] Mobile responsiveness audit
