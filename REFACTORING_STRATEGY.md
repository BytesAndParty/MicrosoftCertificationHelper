# Architektonische Analyse & Refactoring-Strategie
**Rolle:** Senior Solution Architect  
**Status:** Audit Abgeschlossen – Umsetzung Empfohlen

## 1. Executive Summary
Die aktuelle Codebase weist eine hohe funktionale Dichte auf, leidet jedoch unter signifikanter Logik-Duplizierung (WET - Write Everything Twice) und inkonsistentem State-Management. Um die Wartbarkeit und Skalierbarkeit zu gewährleisten, ist eine Konsolidierung der Kernlogik in Hooks und eine Vereinheitlichung der Persistenzschicht zwingend erforderlich.

---

## 2. Kritische Befunde

### A. Massive Logik-Duplizierung (Quiz-Engine)
*   **Fundort:** `src/routes/quiz.tsx` und `src/components/quiz/quiz-modal.tsx`
*   **Problem:** Ca. 400 Zeilen identische Logik für State-Management, Keyboard-Shortcuts, Fragen-Shuffling und Validierung.
*   **Risiko:** Hoher Wartungsaufwand, Gefahr von "Logic Drift" (Auseinanderlaufen der Implementierungen).

### B. Inkonsistente Persistenz (Theme & Accent)
*   **Fundort:** `src/components/ui/accent-switcher.tsx`
*   **Problem:** Manueller `localStorage`-Zugriff und DOM-Manipulation innerhalb der UI-Komponente, während der Rest der App `zustand/persist` nutzt.
*   **Risiko:** Race Conditions mit dem FOUC-Script, schlechte Testbarkeit, Architektur-Bruch.

### C. Monolithische Chat-Logik
*   **Fundort:** `src/components/chat/chat-panel.tsx`
*   **Problem:** Vermischung von UI-Rendering und komplexer AI-Streaming-Logik (Fetch, TextDecoder, Chunk-Parsing).
*   **Risiko:** Logik ist nicht für andere Features (z.B. "Explain this term"-Tooltips) wiederverwendbar.

### D. Redundante Lokalisierungsmuster
*   **Fundort:** `src/types/db.ts` & `src/types/quiz.ts`
*   **Problem:** Manuelle Duplizierung von Feldern wie `prompt` / `promptDe`, `text` / `textDe`.
*   **Risiko:** Skaliert nicht für weitere Sprachen (z.B. Spanisch, Französisch).

---

## 3. Ziel-Architektur (Soll-Zustand)

### Phase 1: Core Logic Extraction
1.  **`useQuiz` Hook:** Kapselung der gesamten Quiz-Mechanik (Loading, Shuffling, SelectedState, Validation, Shortcuts).
2.  **`useChat` Hook:** Abstraktion der AI-Kommunikation. Rückgabe von `messages`, `sendMessage` und `isStreaming`.
3.  **`useThemeStore`:** Integration von Theme-Mode und Accent-Color in einen sauberen Zustand-Store mit automatischer Persistenz.

### Phase 2: UI Unification
1.  **`QuizView` Komponente:** Eine reine Presentational Component, die den `useQuiz` Hook nutzt. Wird sowohl in der Route als auch im Modal verwendet.
2.  **`InteractiveCard` Base:** Vereinheitlichung von `GlowCard`, `FeatureCard` und Hover-Effekten in ein konsistentes Pattern.

### Phase 3: Type Safety & I18n
1.  **Generic Localization:**
    ```typescript
    type Localized<T = string> = { en: T; de: T; };
    // Anwendung: prompt: Localized;
    ```

---

## 4. Implementierungs-Fahrplan

| Task | Priorität | Aufwand | Auswirkung |
| :--- | :--- | :--- | :--- |
| **`useQuiz` Hook & Quiz-Merge** | Hoch | Mittel | Drastische Reduktion von Code-Duplizierung |
| **`useThemeStore` Integration** | Hoch | Gering | Saubere Architektur, kein manuelles `localStorage` |
| **`useChat` Logic Extraction** | Mittel | Mittel | Wiederverwendbarkeit der KI-Erklärungen |
| **I18n Type Refactoring** | Mittel | Hoch | Zukunftssicherheit für Internationalisierung |

---

## 5. Architektonisches Veto
Ich rate dringend davon ab, weitere Features zu implementieren, bevor die Quiz-Logik konsolidiert wurde. Jede neue Frage-Variante oder jedes neue Quiz-Feature müsste aktuell zweifach implementiert und getestet werden, was die Fehlerquote verdoppelt.
