# Migration Roadmap: Astro → Vite + React SPA

Ausgangspunkt: Commit `3c0679a` (vor dem Full-Page-Redesign)
Ziel: Vite + React SPA mit allen nützlichen Features aus `main`, volles Seitenbreite-Layout

---

## Phase 0 — Projekt-Setup: Astro raus, Vite + React rein

### 0.1 Neues Vite + React Projekt aufsetzen
- `bun create vite` mit React + TypeScript Template
- Bestehende Abhängigkeiten übernehmen: `zustand`, `marked`, `clsx`
- Tailwind CSS v4 einrichten (war in `main` über `globals.css` bereits vorbereitet)
- Ordnerstruktur beibehalten: `src/components/`, `src/lib/`, `src/data/`, `src/styles/`, `src/scripts/`

### 0.2 Einstiegspunkt migrieren
- `src/pages/index.astro` + `src/layouts/Layout.astro` → `index.html` + `src/App.tsx`
- Theme-Initialisierung (Dark/Light aus localStorage) in `index.html` inline-Script übernehmen
- Accent-Palette-Initialisierung ebenfalls im inline-Script
- Language-Initialisierung (`ai900_lang_pref`) beibehalten

### 0.3 Assets & PWA
- `public/` Ordner 1:1 übernehmen (favicon, icons)
- `manifest.webmanifest` übernehmen
- Service Worker (`sw.js`) übernehmen
- `vite-plugin-pwa` statt manuellem SW-Register evaluieren

---

## Phase 1 — study-runtime.js → React-Komponenten

Das ist der größte und wichtigste Schritt. Der monolithische `study-runtime.js` (~3200 Zeilen) muss schrittweise in React-Komponenten und Hooks aufgelöst werden.

### 1.1 Zustand-Store erweitern (aus `main` übernehmen)
Der Store in `main` wurde um folgende Actions erweitert, die im aktuellen Stand noch fehlen:

- **`recordQuizAnswer(questionId, topic, isCorrect)`** — Quiz-Antwort im Store tracken (quiz stats + wrongJournal + historyDaily)
- **`rateFlashcard(cardId, grade)`** — Flashcard bewerten mit Spaced Repetition + historyDaily tracking
- **`rateGlossaryCard(cardId, grade)`** — Glossary-Karte bewerten (analog zu Flashcard)
- **`trackDailyActivity({ answered, correct, reviews, at })`** — Tägliche Lernaktivität in `historyDaily` tracken
- **`recordExamResult(score, correct, total)`** — Prüfungsergebnis speichern (examBest + examHistory)
- **`recordExamFinish({ answered, correct, wrongRows })`** — Prüfung abschließen mit Daily-Tracking + wrongJournal
- **`toggleBookmark(questionId)`** — Frage als Lesezeichen speichern/entfernen
- **`initializeCardProgress(flashcardsList, glossaryCardsList)`** — Card-Progress für neue Karten initialisieren
- **`setActiveMode(mode)`** — Aktiver Studienmodus (UI-State)
- **`setLanguage(lang)`** — Sprache im Store setzen
- **`computeReadiness(storeState, totalQuestions)`** — Readiness-Score berechnen (pure function, exportiert)
- **`historyDaily`** zu den persistierten Keys hinzufügen

**Warum wichtig:** Diese Store-Actions eliminieren die manuelle State-Mutation in `study-runtime.js` und machen den State reaktiv für React-Komponenten.

### 1.2 Custom Hooks erstellen (aus `main` übernehmen)
- **`useLanguage()`** — Sprache aus `document.documentElement.lang` lesen + auf `language-changed` Events hören
- **`useHotkeys(keyMap)`** — Keyboard-Shortcuts als deklarativen Hook (statt globaler Event-Listener)

### 1.3 Quiz-Modul als React-Komponente
Aktuell: Quiz-Logik komplett in `study-runtime.js` (Fragen laden, Deck shufflen, Antwort submitten, Erklärung anzeigen, Hint, Bookmark, Chat-Send)

Migration:
- `QuizDialog.tsx` als eigenständige Komponente (war in `main` bereits ~797 Zeilen)
- Quiz-Session-State lokal im Component oder im Store
- Fragen-Pool lazy-laden (`ensureQuestionPoolLoaded`)
- Option-Rendering mit Nummer-Prefix, Tooltip-Erklärungen, korrekt/falsch Highlighting
- Keyboard-Shortcuts (1-4 Antwort, H Hint, S Skip, N Next, B Bookmark) als `useHotkeys`
- "Discuss with AI" Button → Event an AiChat dispatchen
- Learn-Links pro Frage anzeigen

### 1.4 Exam-Modul als React-Komponente
Aktuell: Exam-Logik in `study-runtime.js` (Timer, 10 Fragen, Navigation, Review-Screen)

Migration:
- `ExamDialog.tsx` (war in `main` ~628 Zeilen)
- Timer-Logik (20 Min Countdown) als `useEffect` mit Interval
- Fragen-Navigation (Next/Prev), Antwort-Tracking
- Review-Screen mit Ergebnis, Prozent, falsche Antworten
- `recordExamResult` + `recordExamFinish` Store-Actions nutzen
- Keyboard-Shortcuts (1-4 Antwort, N Next, P Prev)

### 1.5 Flashcards-Modul als React-Komponente
Aktuell: Flashcard-Logik in `study-runtime.js` (Card auswählen, Show/Hide, Grade, Hint)

Migration:
- `FlashcardsDialog.tsx` (war in `main` ~306 Zeilen)
- `selectNextStudyCard` aus `spaced-repetition.ts` nutzen
- Show → Grade (Again/Good/Easy) Flow
- Hint-Button mit Keyword-Extraktion
- "Discuss with AI" Button
- `rateFlashcard` Store-Action nutzen
- Keyboard-Shortcuts (Space Reveal, H Hint, 1/2/3 Grade)

### 1.6 Glossary-Modul als React-Komponente
Aktuell: Glossary-Logik in `study-runtime.js` (Suche, Card anzeigen, Grade)

Migration:
- `GlossaryDialog.tsx` (war in `main` ~266 Zeilen)
- Suchfeld mit Filterung nach Term/Definition
- Spaced-Repetition-Flow wie Flashcards
- `rateGlossaryCard` Store-Action nutzen
- Keyboard-Shortcuts (Space Reveal, F Search, 1/2/3 Grade)

### 1.7 Error Journal als React-Komponente
Aktuell: Journal-Rendering in `study-runtime.js` (falsche Fragen auflisten, "Practice now")

Migration:
- `JournalDialog.tsx` (war in `main` ~175 Zeilen)
- wrongJournal aus Store lesen
- Sortiert nach Häufigkeit anzeigen
- "Practice now" Button → Quiz mit spezifischer Frage öffnen
- Fragen-Details (Topic, Erklärung) anzeigen

### 1.8 Settings als React-Komponente
Aktuell: Settings-Logik in `study-runtime.js` (populateSettingsUi, saveSettings, resetSettings)

Migration:
- `SettingsDialog.tsx` (war in `main` ~368 Zeilen)
- Alle Settings-Felder: `cardsPerDay`, `newGlossaryPerDay`, `maxReviewsPerDay`, `lapseInterval`, `easeBonus`, `quizDifficulty`
- AI Chat Konfiguration: `aiEndpoint`, `aiApiKey`, `aiModel`
- Accent-Palette-Auswahl mit Live-Preview
- Reset-Button
- Werte direkt im Store persistieren (statt über DOM-Manipulation)

---

## Phase 2 — Dashboard & Metriken

### 2.1 DashboardPanel als React-Komponente
In `main` war das ein neues Feature (~278 Zeilen). Aus dem Store werden berechnet:
- **Quiz Accuracy** — `quiz.correct / quiz.answered`
- **Best Exam** — `examBest`
- **Due Cards** — Flashcards + Glossary mit `dueAt <= now`, gedeckelt auf `maxReviewsPerDay`
- **Error Journal** — `Object.keys(wrongJournal).length`
- **Recommended Mode** — Automatisch vorschlagen basierend auf Metriken (due > 0 → Flashcards, accuracy < 75 → Quiz)

### 2.2 Readiness-Progress
- `computeReadiness()` Pure Function aus dem Store
- Gewichtung: Quiz Accuracy 40% + Exam Signal 35% + Topic Coverage 25%
- Confidence Factor basierend auf Mastery Coverage
- Progress-Bar mit Gradient-Fill und animiertem Sweep

### 2.3 Learning History (Heatmap + Topic Trends)
- **Heatmap**: Letzte 28 Tage als Grid, Intensität basierend auf `historyDaily[dateKey].answered`
- **Streak**: Aufeinanderfolgende Tage mit Aktivität berechnen
- **Topic Trend**: Pro Topic Accuracy + Anzahl Antworten, sortiert nach schwächstem Topic

---

## Phase 3 — AI Chat

### 3.1 AI Chat als Sheet/Drawer (aus `main` übernehmen)
In `main` wurde der Chat von einem Inline-Widget zu einem Sheet umgebaut (~468 Zeilen):
- **FAB Button** (Floating Action Button) unten rechts
- **Sheet/Drawer** von rechts einsliden
- Azure OpenAI Responses API (`2025-04-01-preview`)
- BYOK (Bring Your Own Key) — Endpoint + API Key aus Settings
- Markdown-Rendering mit `marked` + HTML-Sanitization
- Kontextbezogen: Erkennt aktiven Modus (Quiz-Frage, Flashcard, etc.) und sendet als System-Prompt
- Chat-History (max 12 Nachrichten)
- Message-Status-Indikatoren (Sent/Delivered/Read)

### 3.2 Kontextuelle Chat-Einbindung
- "Discuss with AI" Button in Quiz, Flashcards, Glossary
- Frage/Karte wird automatisch als Kontext mitgeschickt
- Quick-Actions: "Explain", "Give me a hint", "Why is this wrong?"

---

## Phase 4 — UI/UX & Styling

### 4.1 Full-Width Layout
- Hauptcontainer auf `max-width: 100%` oder `max-width: 1400px` mit Auto-Margins
- Mode-Buttons als große Cards im Grid (war dein ursprünglicher Wunsch)
- Mehr vertikaler Space zwischen Sektionen

### 4.2 Accent-Palette-System (aus `main` übernehmen)
Vier Farbpaletten mit CSS Custom Properties:
- **Amber** (Standard): Warm-Orange Töne
- **Emerald**: Grün-Töne
- **Cobalt**: Blau-Töne
- **Raspberry**: Pink/Rot-Töne

Jede Palette definiert:
- `--accent-primary`, `--accent-secondary`, `--accent-tertiary`
- `--accent-surface`, `--accent-surface-hover`
- `--accent-glow`, `--accent-text`
- Hero-Gradient-Farben

### 4.3 Accent Switcher Komponente
- Farbkugeln als Buttons
- Live-Preview beim Hovern
- Persistierung in Settings + Store

### 4.4 Scroll-Reveal Animationen
- IntersectionObserver-basiert
- Sektionen faden ein beim Scrollen
- `prefers-reduced-motion` wird respektiert

### 4.5 Design Tokens (globals.css)
- Tailwind v4 Theme-Tokens: `--background`, `--foreground`, `--card`, `--primary`, `--muted`, etc.
- Shadows: `--shadow-sm` bis `--shadow-xl` + `--shadow-glow`
- Border-Radius Tokens: `--radius-sm` bis `--radius-3xl`
- Dark Mode Overrides

---

## Phase 5 — Infrastruktur

### 5.1 PWA Support
- `manifest.webmanifest` mit App-Name, Icons, Theme-Color
- Service Worker für Offline-Caching
- `vite-plugin-pwa` evaluieren für automatische SW-Generierung
- Apple Touch Icon + Meta Tags

### 5.2 UI Component Library (optional, aus `main`)
Shadcn/ui-Komponenten die in `main` hinzugefügt wurden:
- `Sheet` (Drawer/Slide-Panel)
- `ScrollArea` (Custom Scrollbar)
- `Badge`
- `Progress`
- `Separator`
- `Toggle` / `ToggleGroup`
- `Skeleton` (Loading State)
- `Button` (bereits vorhanden)

**Entscheidung:** Brauchen wir alle? Oder nur Sheet + ScrollArea + Progress?

### 5.3 Utility Functions (aus `main`)
- `src/lib/format.ts` — `formatDate()` Helper
- `src/lib/create-dialog-island.tsx` — Wird nicht mehr benötigt (war Astro-Island-Workaround)

---

## Phase 6 — Aufräumen & Features die NICHT übernommen werden

### Bewusst entfernt (war in `3c0679a`, nicht in `main`):
- **Roadmap-Sektion** — Theme-Cards mit Todos und Checkboxen → NICHT übernehmen
- **Session Goals** (Sprint/Focus/Accuracy) → NICHT übernehmen (war Feature, das entfernt wurde)
- **Quiz Topic Filter Dropdown** → Eventuell als einfacherer Filter neu implementieren?

### Entfernt in `main`, nicht wieder einführen:
- `ROADMAP.md` (war eine Datei, kein Feature)
- `applyLanguageToRoadmap()` — Roadmap-i18n
- `bindRoadmapGlow()` — Maus-Glow auf Roadmap-Cards
- `getRoadmapProgress()` — Roadmap-Fortschritt
- `renderRoadmapChecks()` — Checkbox-State rendern
- `metricRoadmap` — Roadmap-Metrik in der Metrics-Bar

### Brücken-Code der nicht mehr nötig ist:
- `GlobalRuntime.tsx` — War ein Workaround um vanilla JS in React-Kontext zu bringen → nicht nötig in reiner React-App
- `*Island.tsx` Dateien — Astro-Island-Wrapper → nicht nötig
- `create-dialog-island.tsx` — Astro-spezifischer Helper → nicht nötig
- CustomEvent-Bridge (`study-mode-open`, `dashboard-sync`, `journal-updated`, etc.) — Direkt über Store/Props/Callbacks

---

## Priorisierte Reihenfolge

| Prio | Phase | Beschreibung |
|------|-------|-------------|
| 1 | 0 | Vite + React Setup, Assets migrieren |
| 2 | 1.1 | Store erweitern (Basis für alles) |
| 3 | 1.2 | Custom Hooks (useLanguage, useHotkeys) |
| 4 | 1.3 | Quiz-Modul (Kern-Feature) |
| 5 | 4.1 | Full-Width Layout + Mode-Cards |
| 6 | 1.4 | Exam-Modul |
| 7 | 1.5 | Flashcards-Modul |
| 8 | 1.6 | Glossary-Modul |
| 9 | 1.7 | Error Journal |
| 10 | 2 | Dashboard + Metriken + History |
| 11 | 1.8 | Settings |
| 12 | 3 | AI Chat Sheet |
| 13 | 4.2-4.5 | Accent System + Animations + Tokens |
| 14 | 5 | PWA + Component Library |
