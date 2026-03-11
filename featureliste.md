# Feature-Liste — Microsoft Certification Helper (AI-900)

## Lernmodi

### Quiz
- 78 Single-Choice- und Wahr/Falsch-Fragen zu allen AI-900-Themen
- Sofortiges Feedback nach jeder Antwort (richtig/falsch + Erklärung)
- Hinweis-Funktion mit Keyword-Extraktion
- Erklärungen pro Antwortoption (warum richtig/falsch)
- Lesezeichen zum Speichern einzelner Fragen
- Themenfilter (alle Themen / schwächstes Thema)
- Zusammenfassung alle 10 Fragen mit Genauigkeit pro Thema
- Microsoft-Learn-Links pro Frage
- Tastatursteuerung (1–4 Antwort, H Hinweis, S Überspringen, N Weiter, B Lesezeichen)

### Exam-Simulation
- Zeitbegrenzter Prüfungsmodus (10 Fragen in 20 Minuten)
- Detaillierte Auswertung nach Abschluss
- Verlauf der letzten 15 Prüfungsversuche
- Bester Prüfungsscore wird gespeichert

### Flashcards (Spaced Repetition)
- 34 Lernkarten zu ML, NLP, GenAI, Responsible AI, Computer Vision u.a.
- SM2-basierter Spaced-Repetition-Algorithmus
- Bewertung: Nochmal / Gut / Leicht
- Einstellbare Multiplikatoren und Tages-Limits
- Hinweis-Funktion vor dem Aufdecken
- Anzeige fälliger Karten und nächster Wiederholung

### Glossar
- 66 AI-900-Fachbegriffe als Lernkarten
- Suchfunktion (Echtzeit-Filter nach Begriff oder Definition)
- Eigenes Spaced-Repetition-System (unabhängig von Flashcards)
- Tastatursteuerung (Leertaste aufdecken, F Suche, 1–3 Bewertung)

### Error Journal
- Automatische Erfassung falsch beantworteter Fragen
- Häufigkeit und letzter Fehlzeitpunkt pro Frage
- Gezieltes Üben der häufigsten Fehler

## Navigation & Layout

### Sticky Navbar
- Volle Breite, fixiert am oberen Bildschirmrand
- Branding (AI-900 Prep Workspace / Microsoft Certification Helper)
- Exam-Readiness-Fortschrittsbalken (100% wenn jede Frage mindestens einmal richtig)
- Theme-Toggle, Sprach-Toggle, Einstellungen-Button

### Hero Section
- 5 Modus-Buttons (Quiz, Exam, Flashcards, Glossar, Error Journal)
- CSS-Grid-Layout, responsiv
- Quiz-Kategorie-Auswahl (alle Themen / schwächstes Thema)

## Fortschritt & Statistiken

### Exam Readiness
- Score basiert auf Fragen-Mastery (beherrscht / gesamt)
- 100% nur wenn jede Frage mindestens einmal richtig beantwortet wurde

### Metriken-Dashboard
- Roadmap-Fortschritt
- Quiz-Genauigkeit
- Bester Exam-Score
- Fällige Karten
- Error-Journal-Einträge

### Learning History
- Heatmap der letzten 28 Tage Lernaktivität
- Tägliche Statistiken (beantwortet, richtig, Reviews)
- Streak-Tracking
- Themen-Trend-Ansicht

### Session Goals
- Sprint 10 (10 Fragen schnell)
- Focus 20 (20 Minuten konzentriert)
- Accuracy 90 (90% Genauigkeit erreichen)
- Fortschrittsbalken und Status

## Roadmap
- 7 Themencluster mit Lernzielen
- Checklisten pro Thema
- Fortschrittsanzeige (x/y Todos erledigt)

## Einstellungen
- Neue Karten pro Tag (Flashcards & Glossar)
- Max. Reviews pro Tag
- Spaced-Repetition-Multiplikatoren (Gut / Leicht)
- Lapse-Zeit (Minuten bei "Nochmal")
- Akzentfarbe (Amber, Emerald, Cobalt, Raspberry)
- BYOK AI-Chat (Azure OpenAI-Integration)
- Fortschritt zurücksetzen

## Internationalisierung
- Vollständig zweisprachig: Englisch und Deutsch
- Umschaltung per Button oder Tastenkürzel (L)
- Alle Fragen, Karten, Glossarbegriffe, UI-Texte in beiden Sprachen

## Tastatursteuerung
- Globale Shortcuts: Q Quiz, E Exam, F Flashcards, G Glossar, J Journal
- O Einstellungen, D Theme, L Sprache, ? Shortcuts, ESC Schließen
- Modusspezifische Shortcuts in jedem Dialog

## Theme
- Light / Dark Mode
- 4 Akzentfarben (Amber, Emerald, Cobalt, Raspberry)
- Neutrale Grautöne für Oberflächen und Karten

## Datenpersistenz
- IndexedDB als primärer Speicher
- localStorage als Fallback
- SQLite-Datenbankschicht (sql.js/WASM) vorbereitet
- Automatische Migration von Legacy-Daten
- Debounced Speichern (150ms)

## Technologie-Stack
- Vite + React SPA
- TypeScript
- Zustand (State Management)
- Tailwind CSS (installiert) + Custom CSS
- sql.js (SQLite im Browser via WebAssembly)
- Playwright (E2E-Tests)
- Bun (Build & Test Runner)
