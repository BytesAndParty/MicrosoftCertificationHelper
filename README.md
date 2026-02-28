# Microsoft Certification Helper (AI-900)

Browser-basierte Lern-App für die Microsoft AI-900 Zertifizierung. Läuft komplett clientseitig — kein Backend, keine Accounts.

## Features

- **Quiz-Modus** — Fragen mit dynamisch generierten Antwortoptionen und Sofort-Feedback
- **Prüfungsmodus** — 10 Fragen, 20-Minuten-Timer, Ergebnisauswertung pro Thema
- **Karteikarten** — Spaced Repetition mit drei Bewertungsstufen (Nochmal / Gut / Sicher)
- **Fehlerjournal** — Falsch beantwortete Fragen priorisiert wiederholen
- **Glossar** — Durchsuchbare AI-900-Kernbegriffe
- **Dashboard** — Fortschritt, Trefferquote, Bestscores, fällige Karten
- **Persistenz** — IndexedDB mit localStorage-Fallback

## Tech Stack

| Layer | Technologie |
|-------|-------------|
| Framework | Astro 5 |
| Sprache | JavaScript (ES6+) |
| Package Manager | Bun |
| Styling | Custom CSS (Space Grotesk + IBM Plex Mono) |
| Storage | IndexedDB + localStorage |

## Quickstart

```sh
bun install
bun run dev
```

App läuft auf `http://localhost:4321`.

## Content

| Inhalt | Anzahl |
|--------|--------|
| Quiz-Fragen | 78 |
| Karteikarten | 34 |
| Glossar-Begriffe | 40 |
| Themen | 8 (AI Workloads, ML, Computer Vision, NLP, Generative AI, Knowledge Mining, Responsible AI, Document AI) |

## Projektstruktur

```
src/
├── data/content.js     # Fragen, Karteikarten, Glossar, Roadmap-Themen
├── layouts/Layout.astro # HTML-Grundgerüst
├── pages/index.astro    # Hauptseite mit allen Sektionen
├── scripts/app.js       # Gesamte App-Logik (Quiz, Exam, Flashcards, Persistenz)
└── styles/app.css       # Styling und Responsive Design
```

## Scripts

| Command | Beschreibung |
|---------|-------------|
| `bun run dev` | Dev-Server starten |
| `bun run build` | Production-Build nach `./dist/` |
| `bun run preview` | Build lokal testen |
