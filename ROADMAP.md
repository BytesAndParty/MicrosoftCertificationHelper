# MicrosoftCertificationHelper Roadmap (AI-900)

Diese Roadmap wird in dieser Reihenfolge abgearbeitet. Jede Phase hat klare To-dos und ein sichtbares Ergebnis.

## 1. Lernstrategie und Scope
- [ ] Offizielle AI-900 Skill-Outline in Themencluster mappen.
- [ ] Lernziel pro Themencluster definieren (kennen, erklären, anwenden).
- [ ] Zeitbudget festlegen: tägliche Sessions + Wochenziele.
- [ ] Erfolgskriterien definieren (Quiz-Quote, Exam-Mode-Score, Streak).

## 2. Produktbasis mit Bun + Astro
- [ ] Astro-Projekt mit Bun im Repo-Root aufsetzen.
- [ ] Basislayout, visuelle Richtung und responsive Grundstruktur bauen.
- [ ] Entwicklungs- und Build-Workflow validieren (`bun run dev`, `bun run build`).
- [ ] Grundseitenstruktur für alle Lernmodule vorbereiten.

## 3. Content-Modell für AI-900
- [ ] Fragenmodell erstellen (Frage, Optionen, richtige Antwort, Erklärung, Topic).
- [ ] Erste kuratierte Fragenbank pro Topic aufbauen.
- [ ] Glossar-Datensatz mit Kernbegriffen anlegen.
- [ ] Karteikarten-Datensatz (Front/Back/Topic) anlegen.

## 4. Kern-Lernfunktionen
- [ ] Quiz-Modus mit Sofort-Feedback und Erklärung implementieren.
- [ ] Lernpfad-Ansicht mit Themen und To-do-Checkliste implementieren.
- [ ] Fehlerjournal integrieren (falsch beantwortete Fragen priorisiert üben).
- [ ] Dashboard mit Kennzahlen (Fortschritt, Trefferquote, offene Punkte) bauen.

## 5. Prüfungsmodus
- [ ] Exam-Session mit Timer und gemischten Fragen implementieren.
- [ ] Ergebnisansicht mit Gesamtpunktzahl und Themenauswertung hinzufügen.
- [ ] Bestwert/Verlauf im lokalen Fortschritt speichern.
- [ ] Re-Run-Flow für schwache Themen ergänzen.

## 6. Browser-DB und Persistenz
- [ ] IndexedDB-Layer einführen (State, Fehlerjournal, Karteikarten-Status).
- [ ] Fallback auf `localStorage` ergänzen.
- [ ] Datenmigration bei Strukturänderungen (Versionierung) vorsehen.
- [ ] Reset-Mechanismus für Lernstand implementieren.

## 7. Spaced Repetition und Qualität
- [ ] Karteikarten-Rating (`Nochmal`, `Gut`, `Sicher`) mit Intervalllogik umsetzen.
- [ ] Due-Queue und Wiederholungspriorisierung integrieren.
- [ ] Kritische User-Flows manuell testen (Quiz, Exam, Persistenz, Reset).
- [ ] Inhaltliche Lücken identifizieren und Fragenbank erweitern.

## 8. Abschluss und Iteration
- [ ] MVP stabilisieren und als v0.1 markieren.
- [ ] Nächste Ausbaustufe planen (Import/Export, mehrere Zertifizierungen, Analytics).
- [ ] Feedback-Loop definieren: Was hat im Lernen wirklich geholfen?

