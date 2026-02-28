# MicrosoftCertificationHelper Roadmap (AI-900)

Diese Roadmap wird in dieser Reihenfolge abgearbeitet. Jede Phase hat klare To-dos und ein sichtbares Ergebnis.

## 1. Lernstrategie und Scope
- [x] Offizielle AI-900 Skill-Outline in Themencluster mappen.
- [x] Lernziel pro Themencluster definieren (kennen, erklären, anwenden).
- [x] Zeitbudget festlegen: tägliche Sessions + Wochenziele.
- [x] Erfolgskriterien definieren (Quiz-Quote, Exam-Mode-Score, Streak).

## 2. Produktbasis mit Bun + Astro
- [x] Astro-Projekt mit Bun im Repo-Root aufsetzen.
- [x] Basislayout, visuelle Richtung und responsive Grundstruktur bauen.
- [x] Entwicklungs- und Build-Workflow validieren (`bun run dev`, `bun run build`).
- [x] Grundseitenstruktur für alle Lernmodule vorbereiten.

## 3. Content-Modell für AI-900
- [x] Fragenmodell erstellen (Frage, Optionen, richtige Antwort, Erklärung, Topic).
- [x] Erste kuratierte Fragenbank pro Topic aufbauen.
- [x] Glossar-Datensatz mit Kernbegriffen anlegen.
- [x] Karteikarten-Datensatz (Front/Back/Topic) anlegen.

## 4. Kern-Lernfunktionen
- [x] Quiz-Modus mit Sofort-Feedback und Erklärung implementieren.
- [x] Lernpfad-Ansicht mit Themen und To-do-Checkliste implementieren.
- [x] Fehlerjournal integrieren (falsch beantwortete Fragen priorisiert üben).
- [x] Dashboard mit Kennzahlen (Fortschritt, Trefferquote, offene Punkte) bauen.

## 5. Prüfungsmodus
- [x] Exam-Session mit Timer und gemischten Fragen implementieren.
- [x] Ergebnisansicht mit Gesamtpunktzahl und Themenauswertung hinzufügen.
- [x] Bestwert/Verlauf im lokalen Fortschritt speichern.
- [x] Re-Run-Flow für schwache Themen ergänzen.

## 6. Browser-DB und Persistenz
- [x] IndexedDB-Layer einführen (State, Fehlerjournal, Karteikarten-Status).
- [x] Fallback auf `localStorage` ergänzen.
- [x] Datenmigration bei Strukturänderungen (Versionierung) vorsehen.
- [x] Reset-Mechanismus für Lernstand implementieren.

## 7. Spaced Repetition und Qualität
- [x] Karteikarten-Rating (`Nochmal`, `Gut`, `Sicher`) mit Intervalllogik umsetzen.
- [x] Due-Queue und Wiederholungspriorisierung integrieren.
- [ ] Kritische User-Flows manuell testen (Quiz, Exam, Persistenz, Reset).
- [x] Inhaltliche Lücken identifizieren und Fragenbank erweitern.

## 8. Abschluss und Iteration
- [x] MVP stabilisieren und als v0.1 markieren.
- [ ] Nächste Ausbaustufe planen (Import/Export, mehrere Zertifizierungen, Analytics).
- [ ] Feedback-Loop definieren: Was hat im Lernen wirklich geholfen?
