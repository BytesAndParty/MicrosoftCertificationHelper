import type { QuizQuestion } from '@/types/quiz';

export const pl200Questions: QuizQuestion[] = [
  {
    "id": "pl-q1",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "Which column type automatically calculates a value from child records?",
    "promptDe": "Welcher Spaltentyp berechnet automatisch einen Wert aus untergeordneten Datensaetzen?",
    "hint": "Think about aggregate functions like SUM, COUNT, AVG.",
    "hintDe": "Denke an Aggregatfunktionen wie SUM, COUNT, AVG.",
    "options": [
      { "id": "opt-0", "text": "Rollup column", "textDe": "Rollup-Spalte", "isCorrect": true, "explanation": "Rollup columns calculate aggregate values (SUM, COUNT, AVG, MIN, MAX) from related child records on a schedule.", "explanationDe": "Rollup-Spalten berechnen Aggregatwerte (SUM, COUNT, AVG, MIN, MAX) aus verknuepften untergeordneten Datensaetzen nach Zeitplan." },
      { "id": "opt-1", "text": "Formula column", "textDe": "Formel-Spalte", "isCorrect": false, "explanation": "Formula columns compute values from fields on the same row — they cannot aggregate child records.", "explanationDe": "Formel-Spalten berechnen Werte aus Feldern derselben Zeile — sie koennen keine untergeordneten Datensaetze aggregieren." },
      { "id": "opt-2", "text": "Calculated column", "textDe": "Berechnete Spalte", "isCorrect": false, "explanation": "Calculated columns (legacy) compute values from the same record or parent, not from child records.", "explanationDe": "Berechnete Spalten (Legacy) berechnen Werte vom selben Datensatz oder uebergeordneten, nicht von untergeordneten." },
      { "id": "opt-3", "text": "Lookup column", "textDe": "Lookup-Spalte", "isCorrect": false, "explanation": "Lookup columns create references to other tables — they do not perform calculations.", "explanationDe": "Lookup-Spalten erstellen Verweise auf andere Tabellen — sie fuehren keine Berechnungen durch." }
    ],
    "explanation": "Rollup columns run asynchronous jobs to aggregate data from related records using functions like SUM or COUNT.",
    "explanationDe": "Rollup-Spalten fuehren asynchrone Jobs aus, um Daten aus verknuepften Datensaetzen mit Funktionen wie SUM oder COUNT zu aggregieren.",
    "learnRef": { "title": "PL-200: Define rollup columns", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/define-rollup-fields" },
    "learnRefDe": { "title": "PL-200: Rollup-Spalten definieren", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/define-rollup-fields" }
  },
  {
    "id": "pl-q2",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "What type of relationship should you use when many records in Table A can relate to many records in Table B?",
    "promptDe": "Welchen Beziehungstyp solltest du verwenden, wenn viele Datensaetze in Tabelle A mit vielen Datensaetzen in Tabelle B verknuepft sein koennen?",
    "hint": "This relationship type creates an intersect table behind the scenes.",
    "hintDe": "Dieser Beziehungstyp erstellt im Hintergrund eine Schnitttabelle.",
    "options": [
      { "id": "opt-0", "text": "Many-to-many (N:N)", "textDe": "n:n (Viele-zu-Viele)", "isCorrect": true, "explanation": "Many-to-many relationships use an invisible intersect table to connect records from both tables in any combination.", "explanationDe": "n:n-Beziehungen nutzen eine unsichtbare Schnitttabelle, um Datensaetze beider Tabellen in jeder Kombination zu verbinden." },
      { "id": "opt-1", "text": "One-to-many (1:N)", "textDe": "1:n (Eins-zu-Viele)", "isCorrect": false, "explanation": "One-to-many only allows one parent per child record — it cannot model bidirectional many associations.", "explanationDe": "1:n erlaubt nur einen uebergeordneten Datensatz pro untergeordnetem — es kann keine bidirektionalen Viele-Zuordnungen modellieren." },
      { "id": "opt-2", "text": "Many-to-one (N:1)", "textDe": "n:1 (Viele-zu-Eins)", "isCorrect": false, "explanation": "Many-to-one is just the inverse view of one-to-many — it still restricts each child to one parent.", "explanationDe": "n:1 ist nur die umgekehrte Ansicht von 1:n — es beschraenkt weiterhin jedes untergeordnete Element auf ein uebergeordnetes." },
      { "id": "opt-3", "text": "Self-referential", "textDe": "Selbstreferentiell", "isCorrect": false, "explanation": "Self-referential relationships link a table to itself (e.g. employee-manager) — they do not solve the N:N scenario.", "explanationDe": "Selbstreferentielle Beziehungen verknuepfen eine Tabelle mit sich selbst (z.B. Mitarbeiter-Manager) — sie loesen nicht das n:n-Szenario." }
    ],
    "explanation": "Many-to-many relationships create an intersect (bridge) table automatically, allowing flexible associations between records.",
    "explanationDe": "n:n-Beziehungen erstellen automatisch eine Schnitttabelle (Bridge-Tabelle) und ermoeglichen flexible Zuordnungen zwischen Datensaetzen.",
    "learnRef": { "title": "PL-200: Table relationships", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-entity-relationships" },
    "learnRefDe": { "title": "PL-200: Tabellenbeziehungen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-entity-relationships" }
  },
  {
    "id": "pl-q3",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "Which Dataverse feature prevents the creation of duplicate records based on matching rules?",
    "promptDe": "Welches Dataverse-Feature verhindert die Erstellung doppelter Datensaetze basierend auf Abgleichregeln?",
    "hint": "It can run both on create and on import.",
    "hintDe": "Es kann sowohl beim Erstellen als auch beim Import ausgefuehrt werden.",
    "options": [
      { "id": "opt-0", "text": "Duplicate detection", "textDe": "Duplikaterkennung", "isCorrect": true, "explanation": "Duplicate detection rules compare field values against existing records and warn or block when matches are found.", "explanationDe": "Duplikaterkennungsregeln vergleichen Feldwerte mit vorhandenen Datensaetzen und warnen oder blockieren bei Uebereinstimmungen." },
      { "id": "opt-1", "text": "Business rules", "textDe": "Geschaeftsregeln", "isCorrect": false, "explanation": "Business rules validate field values and control visibility — they do not compare against existing records for duplicates.", "explanationDe": "Geschaeftsregeln validieren Feldwerte und steuern die Sichtbarkeit — sie vergleichen nicht mit vorhandenen Datensaetzen auf Duplikate." },
      { "id": "opt-2", "text": "Alternate keys", "textDe": "Alternative Schluessel", "isCorrect": false, "explanation": "Alternate keys enforce uniqueness at the database level but do not provide the matching-rule UI for duplicate warnings.", "explanationDe": "Alternative Schluessel erzwingen Eindeutigkeit auf Datenbankebene, bieten aber keine Abgleichregel-UI fuer Duplikatwarnungen." },
      { "id": "opt-3", "text": "Auditing", "textDe": "Ueberwachung", "isCorrect": false, "explanation": "Auditing tracks changes to records — it does not prevent or detect duplicates.", "explanationDe": "Ueberwachung verfolgt Aenderungen an Datensaetzen — sie verhindert oder erkennt keine Duplikate." }
    ],
    "explanation": "Duplicate detection in Dataverse uses configurable matching rules to identify and prevent duplicate records during creation and import.",
    "explanationDe": "Duplikaterkennung in Dataverse nutzt konfigurierbare Abgleichregeln, um doppelte Datensaetze bei Erstellung und Import zu identifizieren und zu verhindern.",
    "learnRef": { "title": "PL-200: Duplicate detection", "url": "https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules" },
    "learnRefDe": { "title": "PL-200: Duplikaterkennung", "url": "https://learn.microsoft.com/de-de/power-platform/admin/set-up-duplicate-detection-rules" }
  },
  {
    "id": "pl-q4",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "What is the purpose of a business unit in Dataverse security?",
    "promptDe": "Was ist der Zweck einer Unternehmenseinheit in der Dataverse-Sicherheit?",
    "hint": "It defines the ownership hierarchy for records and roles.",
    "hintDe": "Sie definiert die Besitzhierarchie fuer Datensaetze und Rollen.",
    "options": [
      { "id": "opt-0", "text": "To segment users and control data access by organizational structure", "textDe": "Um Benutzer zu segmentieren und den Datenzugriff nach Organisationsstruktur zu steuern", "isCorrect": true, "explanation": "Business units define an organizational hierarchy that determines record ownership scope and security role boundaries.", "explanationDe": "Unternehmenseinheiten definieren eine Organisationshierarchie die den Datensatzbesitz und die Sicherheitsrollengrenzen bestimmt." },
      { "id": "opt-1", "text": "To create separate Dataverse environments", "textDe": "Um separate Dataverse-Umgebungen zu erstellen", "isCorrect": false, "explanation": "Environments are separate containers — business units exist within a single environment to partition access.", "explanationDe": "Umgebungen sind separate Container — Unternehmenseinheiten existieren innerhalb einer einzelnen Umgebung zur Zugriffspartitionierung." },
      { "id": "opt-2", "text": "To group tables by subject area", "textDe": "Um Tabellen nach Themenbereich zu gruppieren", "isCorrect": false, "explanation": "Tables are organized by solutions or publishers — business units organize users and security, not table metadata.", "explanationDe": "Tabellen werden durch Loesungen oder Publisher organisiert — Unternehmenseinheiten organisieren Benutzer und Sicherheit, nicht Tabellenmetadaten." },
      { "id": "opt-3", "text": "To define Power Automate flow permissions", "textDe": "Um Power Automate Flow-Berechtigungen zu definieren", "isCorrect": false, "explanation": "Flow permissions are managed through connections, sharing, and environment roles — not through business units directly.", "explanationDe": "Flow-Berechtigungen werden ueber Verbindungen, Freigabe und Umgebungsrollen verwaltet — nicht direkt ueber Unternehmenseinheiten." }
    ],
    "explanation": "Business units create a security hierarchy in Dataverse, allowing you to restrict data access based on organizational structure.",
    "explanationDe": "Unternehmenseinheiten erstellen eine Sicherheitshierarchie in Dataverse und ermoeglichen die Einschraenkung des Datenzugriffs basierend auf der Organisationsstruktur.",
    "learnRef": { "title": "PL-200: Business units", "url": "https://learn.microsoft.com/en-us/power-platform/admin/create-edit-business-units" },
    "learnRefDe": { "title": "PL-200: Unternehmenseinheiten", "url": "https://learn.microsoft.com/de-de/power-platform/admin/create-edit-business-units" }
  },
  {
    "id": "pl-q5",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "true-false",
    "prompt": "Statement: Column-level security in Dataverse can restrict read and write access to individual columns regardless of the table-level security role.",
    "promptDe": "Aussage: Sicherheit auf Spaltenebene in Dataverse kann Lese- und Schreibzugriff auf einzelne Spalten unabhaengig von der Tabellenebene einschraenken.",
    "hint": "Column security uses field security profiles.",
    "hintDe": "Spaltensicherheit nutzt Feldsicherheitsprofile.",
    "options": [
      { "id": "opt-true", "text": "True", "textDe": "Wahr", "isCorrect": true, "explanation": "Column security profiles override table-level role access for specific sensitive columns like salary or SSN.", "explanationDe": "Spaltensicherheitsprofile ueberschreiben den Tabellenzugriff fuer bestimmte sensible Spalten wie Gehalt oder SSN." },
      { "id": "opt-false", "text": "False", "textDe": "Falsch", "isCorrect": false, "explanation": "The statement is correct — field security profiles can restrict access to individual columns independently of table-level security roles.", "explanationDe": "Die Aussage ist korrekt — Feldsicherheitsprofile koennen den Zugriff auf einzelne Spalten unabhaengig von Sicherheitsrollen auf Tabellenebene einschraenken." }
    ],
    "explanation": "Column-level security adds a second layer of access control, protecting sensitive fields even when users have broad table access.",
    "explanationDe": "Sicherheit auf Spaltenebene fuegt eine zweite Zugriffsebene hinzu und schuetzt sensible Felder selbst wenn Benutzer breiten Tabellenzugriff haben.",
    "learnRef": { "title": "PL-200: Column security", "url": "https://learn.microsoft.com/en-us/power-platform/admin/field-level-security" },
    "learnRefDe": { "title": "PL-200: Spaltensicherheit", "url": "https://learn.microsoft.com/de-de/power-platform/admin/field-level-security" }
  },
  {
    "id": "pl-q6",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "Which table type in Dataverse retrieves data from an external source at runtime without storing it locally?",
    "promptDe": "Welcher Tabellentyp in Dataverse ruft Daten zur Laufzeit von einer externen Quelle ab, ohne sie lokal zu speichern?",
    "hint": "Think about real-time data from SQL Server or SharePoint.",
    "hintDe": "Denke an Echtzeitdaten von SQL Server oder SharePoint.",
    "options": [
      { "id": "opt-0", "text": "Virtual table", "textDe": "Virtuelle Tabelle", "isCorrect": true, "explanation": "Virtual tables map to external data sources and fetch data on demand — no data is stored in Dataverse.", "explanationDe": "Virtuelle Tabellen verweisen auf externe Datenquellen und rufen Daten bei Bedarf ab — keine Daten werden in Dataverse gespeichert." },
      { "id": "opt-1", "text": "Standard table", "textDe": "Standardtabelle", "isCorrect": false, "explanation": "Standard tables store their data directly in Dataverse — they do not connect to external sources at runtime.", "explanationDe": "Standardtabellen speichern ihre Daten direkt in Dataverse — sie verbinden sich nicht zur Laufzeit mit externen Quellen." },
      { "id": "opt-2", "text": "Activity table", "textDe": "Aktivitaetstabelle", "isCorrect": false, "explanation": "Activity tables are specialized Dataverse tables for tasks, emails, appointments — they store data locally.", "explanationDe": "Aktivitaetstabellen sind spezialisierte Dataverse-Tabellen fuer Aufgaben, E-Mails, Termine — sie speichern Daten lokal." },
      { "id": "opt-3", "text": "Elastic table", "textDe": "Elastische Tabelle", "isCorrect": false, "explanation": "Elastic tables store high-volume data in Dataverse using Azure Cosmos DB — they still store data, not just proxy it.", "explanationDe": "Elastische Tabellen speichern grosse Datenmengen in Dataverse mit Azure Cosmos DB — sie speichern Daten, proxyen sie nicht nur." }
    ],
    "explanation": "Virtual tables use an OData provider to retrieve external data in real time, appearing as native Dataverse tables.",
    "explanationDe": "Virtuelle Tabellen nutzen einen OData-Provider, um externe Daten in Echtzeit abzurufen und erscheinen als native Dataverse-Tabellen.",
    "learnRef": { "title": "PL-200: Virtual tables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities" },
    "learnRefDe": { "title": "PL-200: Virtuelle Tabellen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-virtual-entities" }
  },
  {
    "id": "pl-q7",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "What does Dataverse search use to deliver fast, relevance-ranked results across multiple tables?",
    "promptDe": "Was nutzt die Dataverse-Suche, um schnelle, relevanzrangierte Ergebnisse ueber mehrere Tabellen zu liefern?",
    "hint": "It is powered by a well-known Azure service.",
    "hintDe": "Es wird von einem bekannten Azure-Dienst angetrieben.",
    "options": [
      { "id": "opt-0", "text": "Azure AI Search (Dataverse search index)", "textDe": "Azure AI Search (Dataverse-Suchindex)", "isCorrect": true, "explanation": "Dataverse search is powered by Azure AI Search, indexing enabled tables for fast, relevance-ranked results.", "explanationDe": "Die Dataverse-Suche wird von Azure AI Search angetrieben und indexiert aktivierte Tabellen fuer schnelle, relevanzrangierte Ergebnisse." },
      { "id": "opt-1", "text": "SQL full-text search", "textDe": "SQL-Volltextsuche", "isCorrect": false, "explanation": "Dataverse search replaced the older categorized (SQL-based) search with Azure AI Search for better performance.", "explanationDe": "Die Dataverse-Suche hat die aeltere kategorisierte (SQL-basierte) Suche durch Azure AI Search fuer bessere Leistung ersetzt." },
      { "id": "opt-2", "text": "Power BI query engine", "textDe": "Power BI Abfrageengine", "isCorrect": false, "explanation": "Power BI is for analytics and visualization — it does not power the Dataverse search experience.", "explanationDe": "Power BI ist fuer Analyse und Visualisierung — es betreibt nicht die Dataverse-Sucherfahrung." },
      { "id": "opt-3", "text": "Quick Find views", "textDe": "Schnellsuche-Ansichten", "isCorrect": false, "explanation": "Quick Find views are table-specific search configurations — Dataverse search is the broader cross-table search feature.", "explanationDe": "Schnellsuche-Ansichten sind tabellenspezifische Suchkonfigurationen — Dataverse-Suche ist das breitere tabellenuebergreifende Suchfeature." }
    ],
    "explanation": "Dataverse search leverages Azure AI Search to provide a fast, unified search experience across all enabled tables.",
    "explanationDe": "Die Dataverse-Suche nutzt Azure AI Search fuer eine schnelle, einheitliche Sucherfahrung ueber alle aktivierten Tabellen.",
    "learnRef": { "title": "PL-200: Dataverse search", "url": "https://learn.microsoft.com/en-us/power-platform/admin/configure-relevance-search-organization" },
    "learnRefDe": { "title": "PL-200: Dataverse-Suche", "url": "https://learn.microsoft.com/de-de/power-platform/admin/configure-relevance-search-organization" }
  },
  {
    "id": "pl-q8",
    "certId": "pl200",
    "topic": "Model-driven Apps",
    "type": "single-choice",
    "prompt": "Which form type in a model-driven app is used to quickly create a new record with minimal fields?",
    "promptDe": "Welcher Formulartyp in einer modellgesteuerten App wird verwendet, um schnell einen neuen Datensatz mit minimalen Feldern zu erstellen?",
    "hint": "It appears as a flyout or panel rather than a full page.",
    "hintDe": "Es erscheint als Flyout oder Panel, nicht als volle Seite.",
    "options": [
      { "id": "opt-0", "text": "Quick Create form", "textDe": "Schnellerstellungsformular", "isCorrect": true, "explanation": "Quick Create forms provide a lightweight flyout for rapid record creation with only essential fields.", "explanationDe": "Schnellerstellungsformulare bieten ein leichtgewichtiges Flyout fuer schnelle Datensatzerstellung mit nur wesentlichen Feldern." },
      { "id": "opt-1", "text": "Main form", "textDe": "Hauptformular", "isCorrect": false, "explanation": "Main forms are full-page editing experiences — they are not designed for quick inline record creation.", "explanationDe": "Hauptformulare sind Vollseiten-Bearbeitungserfahrungen — sie sind nicht fuer schnelle Inline-Datensatzerstellung konzipiert." },
      { "id": "opt-2", "text": "Card form", "textDe": "Kartenformular", "isCorrect": false, "explanation": "Card forms present record data in a compact card layout — they are not used for creating new records.", "explanationDe": "Kartenformulare stellen Datensatzdaten in einem kompakten Kartenlayout dar — sie werden nicht zum Erstellen neuer Datensaetze verwendet." },
      { "id": "opt-3", "text": "Dashboard form", "textDe": "Dashboard-Formular", "isCorrect": false, "explanation": "Dashboards display charts, lists, and metrics — they are not forms for record creation.", "explanationDe": "Dashboards zeigen Diagramme, Listen und Metriken — sie sind keine Formulare fuer die Datensatzerstellung." }
    ],
    "explanation": "Quick Create forms allow users to create records rapidly without navigating away from their current context.",
    "explanationDe": "Schnellerstellungsformulare ermoeglichen es Benutzern, Datensaetze schnell zu erstellen, ohne den aktuellen Kontext zu verlassen.",
    "learnRef": { "title": "PL-200: Form types", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/types-forms" },
    "learnRefDe": { "title": "PL-200: Formulartypen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/types-forms" }
  },
  {
    "id": "pl-q9",
    "certId": "pl200",
    "topic": "Model-driven Apps",
    "type": "single-choice",
    "prompt": "How do you embed a canvas app inside a model-driven app form?",
    "promptDe": "Wie bettest du eine Canvas-App in ein modellgesteuertes App-Formular ein?",
    "hint": "There is a dedicated control for this in the form designer.",
    "hintDe": "Es gibt ein dediziertes Steuerelement dafuer im Formular-Designer.",
    "options": [
      { "id": "opt-0", "text": "Add a canvas app control to a form column", "textDe": "Ein Canvas-App-Steuerelement zu einer Formularspalte hinzufuegen", "isCorrect": true, "explanation": "The canvas app control can be bound to a column in the form designer, embedding the canvas app directly in the form.", "explanationDe": "Das Canvas-App-Steuerelement kann im Formular-Designer an eine Spalte gebunden werden und bettet die Canvas-App direkt ins Formular ein." },
      { "id": "opt-1", "text": "Use an iframe web resource", "textDe": "Einen iframe als Webressource verwenden", "isCorrect": false, "explanation": "While possible, iframe web resources are not the recommended approach — the dedicated canvas app control is purpose-built.", "explanationDe": "Obwohl moeglich, sind iframe-Webressourcen nicht der empfohlene Ansatz — das dedizierte Canvas-App-Steuerelement ist speziell dafuer gebaut." },
      { "id": "opt-2", "text": "Navigate to it via a button on the command bar", "textDe": "Per Button in der Befehlsleiste dorthin navigieren", "isCorrect": false, "explanation": "A command bar button opens the canvas app separately — it is not embedded within the form.", "explanationDe": "Ein Befehlsleisten-Button oeffnet die Canvas-App separat — sie ist nicht ins Formular eingebettet." },
      { "id": "opt-3", "text": "Add it as a dashboard component", "textDe": "Als Dashboard-Komponente hinzufuegen", "isCorrect": false, "explanation": "Dashboards live outside of forms — embedding requires the canvas app control on the form itself.", "explanationDe": "Dashboards existieren ausserhalb von Formularen — zum Einbetten braucht man das Canvas-App-Steuerelement im Formular selbst." }
    ],
    "explanation": "Model-driven app forms support a canvas app control that embeds a canvas app directly, passing the current record as context.",
    "explanationDe": "Modellgesteuerte App-Formulare unterstuetzen ein Canvas-App-Steuerelement, das eine Canvas-App direkt einbettet und den aktuellen Datensatz als Kontext uebergibt.",
    "learnRef": { "title": "PL-200: Embed canvas app", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/embed-canvas-app-in-form" },
    "learnRefDe": { "title": "PL-200: Canvas-App einbetten", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/embed-canvas-app-in-form" }
  },
  {
    "id": "pl-q10",
    "certId": "pl200",
    "topic": "Model-driven Apps",
    "type": "single-choice",
    "prompt": "What are custom pages in model-driven apps?",
    "promptDe": "Was sind benutzerdefinierte Seiten in modellgesteuerten Apps?",
    "hint": "They combine canvas app capabilities with model-driven app hosting.",
    "hintDe": "Sie kombinieren Canvas-App-Faehigkeiten mit modellgesteuertem App-Hosting.",
    "options": [
      { "id": "opt-0", "text": "Canvas-like pages hosted inside a model-driven app for custom layouts", "textDe": "Canvas-aehnliche Seiten, die in einer modellgesteuerten App fuer benutzerdefinierte Layouts gehostet werden", "isCorrect": true, "explanation": "Custom pages bring the pixel-perfect flexibility of canvas apps into the model-driven app shell.", "explanationDe": "Benutzerdefinierte Seiten bringen die pixelgenaue Flexibilitaet von Canvas-Apps in die modellgesteuerte App-Shell." },
      { "id": "opt-1", "text": "Power Pages portals embedded in model-driven apps", "textDe": "Power Pages-Portale eingebettet in modellgesteuerte Apps", "isCorrect": false, "explanation": "Power Pages are external-facing portals — custom pages are internal canvas surfaces within model-driven apps.", "explanationDe": "Power Pages sind externe Portale — benutzerdefinierte Seiten sind interne Canvas-Oberflaechen innerhalb modellgesteuerter Apps." },
      { "id": "opt-2", "text": "HTML web resources added to the sitemap", "textDe": "HTML-Webressourcen zum Sitemap hinzugefuegt", "isCorrect": false, "explanation": "HTML web resources are legacy — custom pages provide a modern low-code alternative with full Power Fx support.", "explanationDe": "HTML-Webressourcen sind Legacy — benutzerdefinierte Seiten bieten eine moderne Low-Code-Alternative mit voller Power Fx-Unterstuetzung." },
      { "id": "opt-3", "text": "SharePoint pages linked from the navigation", "textDe": "SharePoint-Seiten verlinkt aus der Navigation", "isCorrect": false, "explanation": "SharePoint integration shows document libraries — it is not a way to build custom app pages.", "explanationDe": "SharePoint-Integration zeigt Dokumentbibliotheken — es ist kein Weg, benutzerdefinierte App-Seiten zu erstellen." }
    ],
    "explanation": "Custom pages allow makers to design pixel-perfect canvas-style pages and host them natively within model-driven apps.",
    "explanationDe": "Benutzerdefinierte Seiten ermoeglichen es Makern, pixelgenaue Canvas-Seiten zu gestalten und sie nativ in modellgesteuerten Apps zu hosten.",
    "learnRef": { "title": "PL-200: Custom pages overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview" },
    "learnRefDe": { "title": "PL-200: Uebersicht benutzerdefinierte Seiten", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/model-app-page-overview" }
  },
  {
    "id": "pl-q11",
    "certId": "pl200",
    "topic": "Model-driven Apps",
    "type": "single-choice",
    "prompt": "Modern commanding in model-driven apps uses which language for button logic?",
    "promptDe": "Modernes Commanding in modellgesteuerten Apps verwendet welche Sprache fuer die Button-Logik?",
    "hint": "The same language used in canvas apps for formulas.",
    "hintDe": "Dieselbe Sprache, die in Canvas-Apps fuer Formeln verwendet wird.",
    "options": [
      { "id": "opt-0", "text": "Power Fx", "textDe": "Power Fx", "isCorrect": true, "explanation": "Modern commanding uses Power Fx expressions for button visibility, enabled state, and action logic.", "explanationDe": "Modernes Commanding nutzt Power Fx-Ausdruecke fuer Button-Sichtbarkeit, Aktivierungsstatus und Aktionslogik." },
      { "id": "opt-1", "text": "JavaScript", "textDe": "JavaScript", "isCorrect": false, "explanation": "JavaScript was used in classic commanding (ribbon XML) — modern commanding replaced it with low-code Power Fx.", "explanationDe": "JavaScript wurde im klassischen Commanding (Ribbon XML) verwendet — modernes Commanding hat es durch Low-Code Power Fx ersetzt." },
      { "id": "opt-2", "text": "C#", "textDe": "C#", "isCorrect": false, "explanation": "C# runs server-side in plugins — command bar logic in model-driven apps runs client-side with Power Fx.", "explanationDe": "C# laeuft serverseitig in Plugins — Befehlsleisten-Logik in modellgesteuerten Apps laeuft clientseitig mit Power Fx." },
      { "id": "opt-3", "text": "FetchXML", "textDe": "FetchXML", "isCorrect": false, "explanation": "FetchXML is a query language for Dataverse data retrieval — it is not used for button command logic.", "explanationDe": "FetchXML ist eine Abfragesprache fuer Dataverse-Datenabruf — sie wird nicht fuer Button-Befehlslogik verwendet." }
    ],
    "explanation": "Modern commanding replaces classic ribbon/JavaScript customizations with declarative Power Fx formulas.",
    "explanationDe": "Modernes Commanding ersetzt klassische Ribbon/JavaScript-Anpassungen durch deklarative Power Fx-Formeln.",
    "learnRef": { "title": "PL-200: Modern commanding", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer" },
    "learnRefDe": { "title": "PL-200: Modernes Commanding", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/use-command-designer" }
  },
  {
    "id": "pl-q12",
    "certId": "pl200",
    "topic": "Canvas Apps",
    "type": "single-choice",
    "prompt": "In a canvas app, what is the purpose of a collection?",
    "promptDe": "Was ist der Zweck einer Sammlung (Collection) in einer Canvas-App?",
    "hint": "It stores tabular data temporarily during the app session.",
    "hintDe": "Sie speichert tabellarische Daten temporaer waehrend der App-Sitzung.",
    "options": [
      { "id": "opt-0", "text": "A temporary in-memory table for storing and manipulating data during the session", "textDe": "Eine temporaere In-Memory-Tabelle zum Speichern und Bearbeiten von Daten waehrend der Sitzung", "isCorrect": true, "explanation": "Collections store tabular data locally in the app session — they are reset when the app closes.", "explanationDe": "Sammlungen speichern tabellarische Daten lokal in der App-Sitzung — sie werden beim Schliessen der App zurueckgesetzt." },
      { "id": "opt-1", "text": "A permanent Dataverse table created by the app", "textDe": "Eine permanente Dataverse-Tabelle, die von der App erstellt wird", "isCorrect": false, "explanation": "Collections are temporary client-side data — they do not create or modify Dataverse tables.", "explanationDe": "Sammlungen sind temporaere clientseitige Daten — sie erstellen oder aendern keine Dataverse-Tabellen." },
      { "id": "opt-2", "text": "A global variable that holds a single value", "textDe": "Eine globale Variable die einen einzelnen Wert haelt", "isCorrect": false, "explanation": "Global variables (Set function) hold single values — collections hold entire tables of data.", "explanationDe": "Globale Variablen (Set-Funktion) halten einzelne Werte — Sammlungen halten ganze Datentabellen." },
      { "id": "opt-3", "text": "A connector to SharePoint lists", "textDe": "Ein Connector zu SharePoint-Listen", "isCorrect": false, "explanation": "SharePoint connectors are data sources — collections are local data stores independent of any connector.", "explanationDe": "SharePoint-Connectors sind Datenquellen — Sammlungen sind lokale Datenspeicher unabhaengig von jedem Connector." }
    ],
    "explanation": "Collections are in-memory tables created with ClearCollect/Collect, useful for caching, batch operations, and local data manipulation.",
    "explanationDe": "Sammlungen sind In-Memory-Tabellen erstellt mit ClearCollect/Collect, nuetzlich fuer Caching, Batch-Operationen und lokale Datenbearbeitung.",
    "learnRef": { "title": "PL-200: Collections", "url": "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-update-collection" },
    "learnRefDe": { "title": "PL-200: Sammlungen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/canvas-apps/create-update-collection" }
  },
  {
    "id": "pl-q13",
    "certId": "pl200",
    "topic": "Canvas Apps",
    "type": "single-choice",
    "prompt": "How do you trigger a Power Automate flow from a canvas app?",
    "promptDe": "Wie loest du einen Power Automate Flow aus einer Canvas-App aus?",
    "hint": "The flow must use a specific trigger type.",
    "hintDe": "Der Flow muss einen bestimmten Triggertyp verwenden.",
    "options": [
      { "id": "opt-0", "text": "Use a flow with a Power Apps (V2) trigger and call it via the flow's Run function", "textDe": "Einen Flow mit Power Apps (V2) Trigger verwenden und ueber die Run-Funktion aufrufen", "isCorrect": true, "explanation": "Flows with the Power Apps trigger can be added to canvas apps and invoked with FlowName.Run() in a formula.", "explanationDe": "Flows mit dem Power Apps Trigger koennen zu Canvas-Apps hinzugefuegt und mit FlowName.Run() in einer Formel aufgerufen werden." },
      { "id": "opt-1", "text": "Send an HTTP request to the flow URL", "textDe": "Einen HTTP-Request an die Flow-URL senden", "isCorrect": false, "explanation": "Canvas apps cannot make arbitrary HTTP calls — you must use the built-in Power Apps trigger integration.", "explanationDe": "Canvas-Apps koennen keine beliebigen HTTP-Aufrufe machen — man muss die eingebaute Power Apps Trigger-Integration verwenden." },
      { "id": "opt-2", "text": "Create a business rule that calls the flow", "textDe": "Eine Geschaeftsregel erstellen die den Flow aufruft", "isCorrect": false, "explanation": "Business rules run in Dataverse forms, not in canvas apps — they cannot invoke Power Automate flows.", "explanationDe": "Geschaeftsregeln laufen in Dataverse-Formularen, nicht in Canvas-Apps — sie koennen keine Power Automate Flows aufrufen." },
      { "id": "opt-3", "text": "Use a Timer control to poll the flow", "textDe": "Ein Timer-Steuerelement zum Abfragen des Flows verwenden", "isCorrect": false, "explanation": "Timer controls run actions on a schedule within the app — they are not a mechanism for invoking flows.", "explanationDe": "Timer-Steuerelemente fuehren Aktionen nach Zeitplan innerhalb der App aus — sie sind kein Mechanismus zum Aufrufen von Flows." }
    ],
    "explanation": "Canvas apps integrate with Power Automate via the Power Apps trigger, allowing formula-based invocation of cloud flows.",
    "explanationDe": "Canvas-Apps integrieren sich mit Power Automate ueber den Power Apps Trigger und ermoeglichen formelbasierte Ausfuehrung von Cloud Flows.",
    "learnRef": { "title": "PL-200: Call flows from canvas apps", "url": "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/using-logic-flows" },
    "learnRefDe": { "title": "PL-200: Flows aus Canvas-Apps aufrufen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/canvas-apps/using-logic-flows" }
  },
  {
    "id": "pl-q14",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "Which type of Power Automate flow runs automatically when a trigger event occurs?",
    "promptDe": "Welcher Typ von Power Automate Flow wird automatisch ausgefuehrt, wenn ein Triggerereignis eintritt?",
    "hint": "It is the most common flow type, as opposed to instant or scheduled flows.",
    "hintDe": "Es ist der haeufigste Flow-Typ, im Gegensatz zu sofortigen oder geplanten Flows.",
    "options": [
      { "id": "opt-0", "text": "Automated cloud flow", "textDe": "Automatisierter Cloud Flow", "isCorrect": true, "explanation": "Automated cloud flows fire whenever their trigger condition is met — e.g. when a record is created or an email arrives.", "explanationDe": "Automatisierte Cloud Flows werden ausgeloest wenn ihre Triggerbedingung erfuellt wird — z.B. wenn ein Datensatz erstellt wird oder eine E-Mail ankommt." },
      { "id": "opt-1", "text": "Instant cloud flow", "textDe": "Sofortiger Cloud Flow", "isCorrect": false, "explanation": "Instant flows require manual triggering by a user — they do not fire automatically on events.", "explanationDe": "Sofortige Flows erfordern manuelles Ausloesen durch einen Benutzer — sie werden nicht automatisch bei Ereignissen ausgeloest." },
      { "id": "opt-2", "text": "Scheduled cloud flow", "textDe": "Geplanter Cloud Flow", "isCorrect": false, "explanation": "Scheduled flows run on a time-based recurrence (hourly, daily, etc.) — not on specific data events.", "explanationDe": "Geplante Flows laufen zeitbasiert (stuendlich, taeglich, usw.) — nicht auf spezifische Datenereignisse." },
      { "id": "opt-3", "text": "Desktop flow", "textDe": "Desktop Flow", "isCorrect": false, "explanation": "Desktop flows automate UI interactions on a local machine using Power Automate Desktop — they are not event-driven cloud flows.", "explanationDe": "Desktop Flows automatisieren UI-Interaktionen auf einem lokalen Rechner mit Power Automate Desktop — sie sind keine ereignisgesteuerten Cloud Flows." }
    ],
    "explanation": "Automated cloud flows are triggered by events like record creation, email receipt, or file uploads, running without user intervention.",
    "explanationDe": "Automatisierte Cloud Flows werden durch Ereignisse wie Datensatzerstellung, E-Mail-Empfang oder Datei-Uploads ausgeloest und laufen ohne Benutzereingriff.",
    "learnRef": { "title": "PL-200: Flow types", "url": "https://learn.microsoft.com/en-us/power-automate/flow-types" },
    "learnRefDe": { "title": "PL-200: Flow-Typen", "url": "https://learn.microsoft.com/de-de/power-automate/flow-types" }
  },
  {
    "id": "pl-q15",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "What is the correct way to handle errors in a Power Automate cloud flow?",
    "promptDe": "Was ist der korrekte Weg, um Fehler in einem Power Automate Cloud Flow zu behandeln?",
    "hint": "Think about run-after configuration and parallel branches.",
    "hintDe": "Denke an Run-After-Konfiguration und parallele Verzweigungen.",
    "options": [
      { "id": "opt-0", "text": "Configure run-after settings on actions to execute on failure, timeout, or skip", "textDe": "Run-After-Einstellungen auf Aktionen konfigurieren um bei Fehler, Timeout oder Ueberspringen auszufuehren", "isCorrect": true, "explanation": "Run-after lets you specify which previous action outcomes (success, failure, timeout, skip) should trigger the next action.", "explanationDe": "Run-After laesst dich angeben, welche vorherigen Aktionsergebnisse (Erfolg, Fehler, Timeout, Ueberspringen) die naechste Aktion ausloesen sollen." },
      { "id": "opt-1", "text": "Wrap everything in a Try-Catch block", "textDe": "Alles in einen Try-Catch-Block einpacken", "isCorrect": false, "explanation": "Power Automate cloud flows do not have Try-Catch syntax — error handling uses Scope actions with run-after configuration.", "explanationDe": "Power Automate Cloud Flows haben keine Try-Catch-Syntax — Fehlerbehandlung nutzt Scope-Aktionen mit Run-After-Konfiguration." },
      { "id": "opt-2", "text": "Use a terminate action at the beginning", "textDe": "Eine Terminate-Aktion am Anfang verwenden", "isCorrect": false, "explanation": "Terminate ends the flow — it does not provide error handling. It is used in error branches to stop with a specific status.", "explanationDe": "Terminate beendet den Flow — es bietet keine Fehlerbehandlung. Es wird in Fehlerzweigen verwendet um mit einem bestimmten Status zu stoppen." },
      { "id": "opt-3", "text": "Errors are handled automatically, no configuration needed", "textDe": "Fehler werden automatisch behandelt, keine Konfiguration noetig", "isCorrect": false, "explanation": "By default, a failed action stops the entire flow — explicit run-after configuration is needed for graceful error handling.", "explanationDe": "Standardmaessig stoppt eine fehlgeschlagene Aktion den gesamten Flow — explizite Run-After-Konfiguration ist fuer elegante Fehlerbehandlung noetig." }
    ],
    "explanation": "Run-after settings and Scope actions (as Try/Catch/Finally pattern) are the primary error handling mechanisms in cloud flows.",
    "explanationDe": "Run-After-Einstellungen und Scope-Aktionen (als Try/Catch/Finally-Muster) sind die primaeren Fehlerbehandlungsmechanismen in Cloud Flows.",
    "learnRef": { "title": "PL-200: Error handling in flows", "url": "https://learn.microsoft.com/en-us/power-automate/error-handling" },
    "learnRefDe": { "title": "PL-200: Fehlerbehandlung in Flows", "url": "https://learn.microsoft.com/de-de/power-automate/error-handling" }
  },
  {
    "id": "pl-q16",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "What is a business process flow (BPF)?",
    "promptDe": "Was ist ein Geschaeftsprozessflow (BPF)?",
    "hint": "It provides a visual guide with stages across the top of a form.",
    "hintDe": "Er bietet eine visuelle Anleitung mit Phasen oben auf einem Formular.",
    "options": [
      { "id": "opt-0", "text": "A guided process with stages and steps that ensures users follow a defined workflow", "textDe": "Ein gefuehrter Prozess mit Phasen und Schritten der sicherstellt, dass Benutzer einem definierten Workflow folgen", "isCorrect": true, "explanation": "BPFs display a stage bar on forms, guiding users through a multi-step process and tracking progress.", "explanationDe": "BPFs zeigen eine Phasenleiste auf Formularen, fuehren Benutzer durch einen mehrstufigen Prozess und verfolgen den Fortschritt." },
      { "id": "opt-1", "text": "A scheduled cloud flow that runs every business day", "textDe": "Ein geplanter Cloud Flow der jeden Werktag laeuft", "isCorrect": false, "explanation": "Scheduled flows run on time recurrence — BPFs are interactive process guides embedded in forms.", "explanationDe": "Geplante Flows laufen zeitbasiert — BPFs sind interaktive Prozessleitfaeden die in Formularen eingebettet sind." },
      { "id": "opt-2", "text": "A Power BI report showing business metrics", "textDe": "Ein Power BI-Report der Geschaeftsmetriken zeigt", "isCorrect": false, "explanation": "Power BI reports visualize data — BPFs guide users through sequential process stages.", "explanationDe": "Power BI-Reports visualisieren Daten — BPFs fuehren Benutzer durch sequentielle Prozessphasen." },
      { "id": "opt-3", "text": "A Dataverse plugin that runs on record save", "textDe": "Ein Dataverse-Plugin das beim Speichern eines Datensatzes laeuft", "isCorrect": false, "explanation": "Plugins execute server-side code — BPFs are client-side visual process guides.", "explanationDe": "Plugins fuehren serverseitigen Code aus — BPFs sind clientseitige visuelle Prozessleitfaeden." }
    ],
    "explanation": "Business process flows create a visual stage-based guide on forms, ensuring consistent execution of multi-step business processes.",
    "explanationDe": "Geschaeftsprozessflows erstellen einen visuellen phasenbasierten Leitfaden auf Formularen und stellen die konsistente Ausfuehrung mehrstufiger Geschaeftsprozesse sicher.",
    "learnRef": { "title": "PL-200: Business process flows", "url": "https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview" },
    "learnRefDe": { "title": "PL-200: Geschaeftsprozessflows", "url": "https://learn.microsoft.com/de-de/power-automate/business-process-flows-overview" }
  },
  {
    "id": "pl-q17",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "true-false",
    "prompt": "Statement: A classic Dataverse workflow can run synchronously (in real-time) on record events.",
    "promptDe": "Aussage: Ein klassischer Dataverse-Workflow kann synchron (in Echtzeit) bei Datensatzereignissen ausgefuehrt werden.",
    "hint": "Classic workflows have both asynchronous and real-time execution modes.",
    "hintDe": "Klassische Workflows haben sowohl asynchrone als auch Echtzeit-Ausfuehrungsmodi.",
    "options": [
      { "id": "opt-true", "text": "True", "textDe": "Wahr", "isCorrect": true, "explanation": "Classic workflows can run as real-time (synchronous) workflows, executing immediately during the database operation.", "explanationDe": "Klassische Workflows koennen als Echtzeit-Workflows (synchron) laufen und werden sofort waehrend der Datenbankoperation ausgefuehrt." },
      { "id": "opt-false", "text": "False", "textDe": "Falsch", "isCorrect": false, "explanation": "The statement is correct — classic Dataverse workflows support both asynchronous and real-time execution modes.", "explanationDe": "Die Aussage ist korrekt — klassische Dataverse-Workflows unterstuetzen sowohl asynchrone als auch Echtzeit-Ausfuehrungsmodi." }
    ],
    "explanation": "Classic workflows (background workflows) can be configured as real-time workflows that execute synchronously in the transaction pipeline.",
    "explanationDe": "Klassische Workflows (Hintergrund-Workflows) koennen als Echtzeit-Workflows konfiguriert werden, die synchron in der Transaktionspipeline ausgefuehrt werden.",
    "learnRef": { "title": "PL-200: Classic workflows", "url": "https://learn.microsoft.com/en-us/power-automate/workflow-processes" },
    "learnRefDe": { "title": "PL-200: Klassische Workflows", "url": "https://learn.microsoft.com/de-de/power-automate/workflow-processes" }
  },
  {
    "id": "pl-q18",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "What is a low-code plug-in in Dataverse?",
    "promptDe": "Was ist ein Low-Code-Plugin in Dataverse?",
    "hint": "It uses Power Fx and runs server-side.",
    "hintDe": "Es verwendet Power Fx und laeuft serverseitig.",
    "options": [
      { "id": "opt-0", "text": "Server-side logic written in Power Fx that runs on Dataverse events", "textDe": "Serverseitige Logik in Power Fx geschrieben, die bei Dataverse-Ereignissen laeuft", "isCorrect": true, "explanation": "Low-code plug-ins let makers write Power Fx formulas that execute server-side on record events (create, update, delete).", "explanationDe": "Low-Code-Plugins ermoeglichen es Makern, Power Fx-Formeln zu schreiben, die serverseitig bei Datensatzereignissen (erstellen, aktualisieren, loeschen) ausgefuehrt werden." },
      { "id": "opt-1", "text": "A canvas app component that runs offline", "textDe": "Eine Canvas-App-Komponente die offline laeuft", "isCorrect": false, "explanation": "Canvas app components run client-side — low-code plug-ins execute on the Dataverse server.", "explanationDe": "Canvas-App-Komponenten laufen clientseitig — Low-Code-Plugins werden auf dem Dataverse-Server ausgefuehrt." },
      { "id": "opt-2", "text": "A Power Automate desktop flow action", "textDe": "Eine Power Automate Desktop Flow-Aktion", "isCorrect": false, "explanation": "Desktop flow actions automate local UI — low-code plug-ins are cloud-based server logic.", "explanationDe": "Desktop Flow-Aktionen automatisieren lokale UI — Low-Code-Plugins sind cloudbasierte Serverlogik." },
      { "id": "opt-3", "text": "A JavaScript web resource registered on a form", "textDe": "Eine JavaScript-Webressource die auf einem Formular registriert ist", "isCorrect": false, "explanation": "JavaScript web resources run client-side in the browser — low-code plug-ins run server-side in Power Fx.", "explanationDe": "JavaScript-Webressourcen laufen clientseitig im Browser — Low-Code-Plugins laufen serverseitig in Power Fx." }
    ],
    "explanation": "Low-code plug-ins replace traditional C# plug-ins with Power Fx expressions, allowing makers to add server-side logic without pro-dev skills.",
    "explanationDe": "Low-Code-Plugins ersetzen traditionelle C#-Plugins durch Power Fx-Ausdruecke und ermoeglichen es Makern, Serverlogik ohne Pro-Dev-Faehigkeiten hinzuzufuegen.",
    "learnRef": { "title": "PL-200: Low-code plug-ins", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/low-code-plug-ins" },
    "learnRefDe": { "title": "PL-200: Low-Code-Plugins", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/low-code-plug-ins" }
  },
  {
    "id": "pl-q19",
    "certId": "pl200",
    "topic": "Power Pages",
    "type": "single-choice",
    "prompt": "What is the primary purpose of Power Pages?",
    "promptDe": "Was ist der primaere Zweck von Power Pages?",
    "hint": "Think about websites for external users.",
    "hintDe": "Denke an Websites fuer externe Benutzer.",
    "options": [
      { "id": "opt-0", "text": "Build external-facing websites that interact with Dataverse data", "textDe": "Externe Websites erstellen, die mit Dataverse-Daten interagieren", "isCorrect": true, "explanation": "Power Pages lets you create secure, data-driven websites for customers, partners, or the public.", "explanationDe": "Power Pages ermoeglichen die Erstellung sicherer, datengesteuerter Websites fuer Kunden, Partner oder die Oeffentlichkeit." },
      { "id": "opt-1", "text": "Replace SharePoint Online for internal collaboration", "textDe": "SharePoint Online fuer interne Zusammenarbeit ersetzen", "isCorrect": false, "explanation": "SharePoint is for internal collaboration — Power Pages is specifically for external-facing data-driven websites.", "explanationDe": "SharePoint ist fuer interne Zusammenarbeit — Power Pages ist speziell fuer externe datengesteuerte Websites." },
      { "id": "opt-2", "text": "Create internal model-driven apps", "textDe": "Interne modellgesteuerte Apps erstellen", "isCorrect": false, "explanation": "Model-driven apps are internal Dataverse apps — Power Pages serves external anonymous or authenticated users.", "explanationDe": "Modellgesteuerte Apps sind interne Dataverse-Apps — Power Pages bedient externe anonyme oder authentifizierte Benutzer." },
      { "id": "opt-3", "text": "Build Power BI dashboards", "textDe": "Power BI-Dashboards erstellen", "isCorrect": false, "explanation": "Power BI creates analytics dashboards — Power Pages creates interactive websites with forms and lists.", "explanationDe": "Power BI erstellt Analyse-Dashboards — Power Pages erstellt interaktive Websites mit Formularen und Listen." }
    ],
    "explanation": "Power Pages (formerly Power Apps Portals) enables building secure, business-grade websites that expose Dataverse data to external audiences.",
    "explanationDe": "Power Pages (frueher Power Apps Portals) ermoeglicht den Bau sicherer, geschaeftskritischer Websites die Dataverse-Daten fuer externe Zielgruppen bereitstellen.",
    "learnRef": { "title": "PL-200: Power Pages overview", "url": "https://learn.microsoft.com/en-us/power-pages/introduction" },
    "learnRefDe": { "title": "PL-200: Power Pages Uebersicht", "url": "https://learn.microsoft.com/de-de/power-pages/introduction" }
  },
  {
    "id": "pl-q20",
    "certId": "pl200",
    "topic": "Power Pages",
    "type": "single-choice",
    "prompt": "How do you control which data external users can see on a Power Pages site?",
    "promptDe": "Wie steuerst du welche Daten externe Benutzer auf einer Power Pages-Website sehen koennen?",
    "hint": "It involves roles assigned to portal contacts.",
    "hintDe": "Es beinhaltet Rollen die Portal-Kontakten zugewiesen werden.",
    "options": [
      { "id": "opt-0", "text": "Web roles and table permissions", "textDe": "Webrollen und Tabellenberechtigungen", "isCorrect": true, "explanation": "Web roles group permissions, and table permissions define CRUD access scoped to the authenticated contact.", "explanationDe": "Webrollen gruppieren Berechtigungen, und Tabellenberechtigungen definieren CRUD-Zugriff bezogen auf den authentifizierten Kontakt." },
      { "id": "opt-1", "text": "Dataverse security roles assigned directly to external users", "textDe": "Dataverse-Sicherheitsrollen die externen Benutzern direkt zugewiesen werden", "isCorrect": false, "explanation": "External portal users are contacts, not Dataverse system users — they cannot be assigned Dataverse security roles directly.", "explanationDe": "Externe Portal-Benutzer sind Kontakte, keine Dataverse-Systembenutzer — ihnen koennen keine Dataverse-Sicherheitsrollen direkt zugewiesen werden." },
      { "id": "opt-2", "text": "Power BI row-level security", "textDe": "Power BI Sicherheit auf Zeilenebene", "isCorrect": false, "explanation": "Power BI RLS controls dashboard data — Power Pages security uses web roles and table permissions for Dataverse data.", "explanationDe": "Power BI RLS steuert Dashboard-Daten — Power Pages-Sicherheit nutzt Webrollen und Tabellenberechtigungen fuer Dataverse-Daten." },
      { "id": "opt-3", "text": "Azure AD Conditional Access policies", "textDe": "Azure AD Conditional Access-Richtlinien", "isCorrect": false, "explanation": "Conditional Access controls sign-in conditions — it does not define which Dataverse records appear on portal pages.", "explanationDe": "Conditional Access steuert Anmeldebedingungen — es definiert nicht, welche Dataverse-Datensaetze auf Portal-Seiten erscheinen." }
    ],
    "explanation": "Power Pages uses web roles (assigned to contacts) and table permissions to control what data external users can create, read, update, or delete.",
    "explanationDe": "Power Pages nutzt Webrollen (Kontakten zugewiesen) und Tabellenberechtigungen um zu steuern, welche Daten externe Benutzer erstellen, lesen, aktualisieren oder loeschen koennen.",
    "learnRef": { "title": "PL-200: Portal security", "url": "https://learn.microsoft.com/en-us/power-pages/security/table-permissions" },
    "learnRefDe": { "title": "PL-200: Portal-Sicherheit", "url": "https://learn.microsoft.com/de-de/power-pages/security/table-permissions" }
  },
  {
    "id": "pl-q21",
    "certId": "pl200",
    "topic": "Copilot Studio",
    "type": "single-choice",
    "prompt": "What is Microsoft Copilot Studio used for?",
    "promptDe": "Wofuer wird Microsoft Copilot Studio verwendet?",
    "hint": "It is the evolution of Power Virtual Agents.",
    "hintDe": "Es ist die Weiterentwicklung von Power Virtual Agents.",
    "options": [
      { "id": "opt-0", "text": "Building conversational AI agents (chatbots) with topics and generative AI", "textDe": "Erstellen von konversationellen KI-Agenten (Chatbots) mit Themen und generativer KI", "isCorrect": true, "explanation": "Copilot Studio lets you build chatbots with topic-driven dialog and optional generative AI answers.", "explanationDe": "Copilot Studio ermoeglichen das Erstellen von Chatbots mit themengesteuertem Dialog und optionalen generativen KI-Antworten." },
      { "id": "opt-1", "text": "Writing C# plugins for Dataverse", "textDe": "Schreiben von C#-Plugins fuer Dataverse", "isCorrect": false, "explanation": "C# plugins are developed in Visual Studio — Copilot Studio is a low-code bot building platform.", "explanationDe": "C#-Plugins werden in Visual Studio entwickelt — Copilot Studio ist eine Low-Code-Bot-Building-Plattform." },
      { "id": "opt-2", "text": "Designing Power BI reports", "textDe": "Entwerfen von Power BI-Reports", "isCorrect": false, "explanation": "Power BI Desktop designs reports — Copilot Studio designs conversational experiences.", "explanationDe": "Power BI Desktop entwirft Reports — Copilot Studio entwirft konversationelle Erfahrungen." },
      { "id": "opt-3", "text": "Managing Azure DevOps pipelines", "textDe": "Verwalten von Azure DevOps-Pipelines", "isCorrect": false, "explanation": "Azure DevOps manages CI/CD pipelines — Copilot Studio builds chatbots for customer and employee engagement.", "explanationDe": "Azure DevOps verwaltet CI/CD-Pipelines — Copilot Studio baut Chatbots fuer Kunden- und Mitarbeiterinteraktion." }
    ],
    "explanation": "Copilot Studio (formerly Power Virtual Agents) provides a low-code platform for creating AI-powered chatbots with topic management and generative answers.",
    "explanationDe": "Copilot Studio (frueher Power Virtual Agents) bietet eine Low-Code-Plattform zur Erstellung KI-gestuetzter Chatbots mit Themenverwaltung und generativen Antworten.",
    "learnRef": { "title": "PL-200: Copilot Studio overview", "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio" },
    "learnRefDe": { "title": "PL-200: Copilot Studio Uebersicht", "url": "https://learn.microsoft.com/de-de/microsoft-copilot-studio/fundamentals-what-is-copilot-studio" }
  },
  {
    "id": "pl-q22",
    "certId": "pl200",
    "topic": "Security & Admin",
    "type": "single-choice",
    "prompt": "What is the difference between managed and unmanaged solutions in Dataverse?",
    "promptDe": "Was ist der Unterschied zwischen verwalteten und nicht verwalteten Loesungen in Dataverse?",
    "hint": "Think about what happens when you delete or export a solution.",
    "hintDe": "Denke darueber nach, was passiert wenn du eine Loesung loeschst oder exportierst.",
    "options": [
      { "id": "opt-0", "text": "Managed solutions are locked packages for deployment; unmanaged are editable development solutions", "textDe": "Verwaltete Loesungen sind gesperrte Pakete zur Bereitstellung; nicht verwaltete sind bearbeitbare Entwicklungsloesungen", "isCorrect": true, "explanation": "Managed solutions are exported as sealed packages — components cannot be edited in the target. Unmanaged solutions allow full editing.", "explanationDe": "Verwaltete Loesungen werden als versiegelte Pakete exportiert — Komponenten koennen im Ziel nicht bearbeitet werden. Nicht verwaltete Loesungen erlauben volle Bearbeitung." },
      { "id": "opt-1", "text": "Managed solutions cost more; unmanaged are free", "textDe": "Verwaltete Loesungen kosten mehr; nicht verwaltete sind kostenlos", "isCorrect": false, "explanation": "There is no cost difference — the distinction is about editability and lifecycle management, not pricing.", "explanationDe": "Es gibt keinen Kostenunterschied — die Unterscheidung betrifft Bearbeitbarkeit und Lifecycle-Management, nicht Preise." },
      { "id": "opt-2", "text": "Managed solutions only work in production; unmanaged only in dev", "textDe": "Verwaltete Loesungen funktionieren nur in Produktion; nicht verwaltete nur in Dev", "isCorrect": false, "explanation": "Both solution types can exist in any environment — managed is recommended for target environments to prevent untracked changes.", "explanationDe": "Beide Loesungstypen koennen in jeder Umgebung existieren — verwaltet wird fuer Zielumgebungen empfohlen um unkontrollierte Aenderungen zu verhindern." },
      { "id": "opt-3", "text": "They are the same, just different names", "textDe": "Sie sind gleich, nur verschiedene Namen", "isCorrect": false, "explanation": "They have fundamentally different behaviors — managed locks components and supports clean uninstall; unmanaged merges into the default solution.", "explanationDe": "Sie haben grundsaetzlich unterschiedliches Verhalten — verwaltet sperrt Komponenten und unterstuetzt saubere Deinstallation; nicht verwaltet verschmilzt mit der Standardloesung." }
    ],
    "explanation": "Managed solutions are immutable deployment packages; unmanaged solutions are for active development. Always develop in unmanaged, deploy as managed.",
    "explanationDe": "Verwaltete Loesungen sind unveraenderliche Bereitstellungspakete; nicht verwaltete Loesungen sind fuer aktive Entwicklung. Immer in nicht verwaltet entwickeln, als verwaltet bereitstellen.",
    "learnRef": { "title": "PL-200: Solutions overview", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm" },
    "learnRefDe": { "title": "PL-200: Loesungen Uebersicht", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-concepts-alm" }
  },
  {
    "id": "pl-q23",
    "certId": "pl200",
    "topic": "Security & Admin",
    "type": "single-choice",
    "prompt": "What tools help validate solution quality before deployment?",
    "promptDe": "Welche Tools helfen, die Loesungsqualitaet vor der Bereitstellung zu validieren?",
    "hint": "One runs in the maker portal, the other in Power Platform CLI.",
    "hintDe": "Eines laeuft im Maker-Portal, das andere in der Power Platform CLI.",
    "options": [
      { "id": "opt-0", "text": "Solution checker and app checker", "textDe": "Loesungspruefer und App-Pruefer", "isCorrect": true, "explanation": "Solution checker analyzes solutions for best practices and issues; app checker validates individual app quality.", "explanationDe": "Der Loesungspruefer analysiert Loesungen auf Best Practices und Probleme; der App-Pruefer validiert die Qualitaet einzelner Apps." },
      { "id": "opt-1", "text": "Power BI data quality reports", "textDe": "Power BI Datenqualitaets-Reports", "isCorrect": false, "explanation": "Power BI reports on data — solution checker and app checker specifically analyze Power Platform solution components.", "explanationDe": "Power BI berichtet ueber Daten — Loesungs- und App-Pruefer analysieren speziell Power Platform Loesungskomponenten." },
      { "id": "opt-2", "text": "Azure DevOps test plans", "textDe": "Azure DevOps Testplaene", "isCorrect": false, "explanation": "Test plans manage manual and automated testing — they do not analyze solution best practices or antipatterns.", "explanationDe": "Testplaene verwalten manuelle und automatisierte Tests — sie analysieren keine Loesungs-Best-Practices oder Antimuster." },
      { "id": "opt-3", "text": "Microsoft Sentinel threat detection", "textDe": "Microsoft Sentinel Bedrohungserkennung", "isCorrect": false, "explanation": "Sentinel is a SIEM for security threats — not a quality validation tool for Power Platform solutions.", "explanationDe": "Sentinel ist ein SIEM fuer Sicherheitsbedrohungen — kein Qualitaetsvalidierungstool fuer Power Platform-Loesungen." }
    ],
    "explanation": "Solution checker runs static analysis on solution components, finding performance issues, best practice violations, and potential errors.",
    "explanationDe": "Der Loesungspruefer fuehrt statische Analyse auf Loesungskomponenten durch und findet Leistungsprobleme, Best-Practice-Verstöße und potenzielle Fehler.",
    "learnRef": { "title": "PL-200: Solution checker", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/use-powerapps-checker" },
    "learnRefDe": { "title": "PL-200: Loesungspruefer", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/use-powerapps-checker" }
  },
  {
    "id": "pl-q24",
    "certId": "pl200",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "How do you integrate SharePoint document management with a model-driven app?",
    "promptDe": "Wie integrierst du SharePoint-Dokumentenmanagement mit einer modellgesteuerten App?",
    "hint": "It involves enabling server-based authentication and table-level configuration.",
    "hintDe": "Es beinhaltet die Aktivierung der serverbasierten Authentifizierung und Konfiguration auf Tabellenebene.",
    "options": [
      { "id": "opt-0", "text": "Enable server-based SharePoint integration and configure document management for specific tables", "textDe": "Serverbasierte SharePoint-Integration aktivieren und Dokumentenmanagement fuer bestimmte Tabellen konfigurieren", "isCorrect": true, "explanation": "Server-based integration creates automatic SharePoint document locations linked to Dataverse records.", "explanationDe": "Serverbasierte Integration erstellt automatische SharePoint-Dokumentstandorte die mit Dataverse-Datensaetzen verknuepft sind." },
      { "id": "opt-1", "text": "Upload documents directly to Dataverse file columns", "textDe": "Dokumente direkt in Dataverse-Dateispalten hochladen", "isCorrect": false, "explanation": "File columns store files in Dataverse storage — SharePoint integration stores documents in SharePoint with links from records.", "explanationDe": "Dateispalten speichern Dateien im Dataverse-Speicher — SharePoint-Integration speichert Dokumente in SharePoint mit Verknuepfungen von Datensaetzen." },
      { "id": "opt-2", "text": "Create a Power Automate flow to copy files", "textDe": "Einen Power Automate Flow erstellen um Dateien zu kopieren", "isCorrect": false, "explanation": "Flows can move files, but the built-in SharePoint integration provides automatic document location management without custom flows.", "explanationDe": "Flows koennen Dateien verschieben, aber die eingebaute SharePoint-Integration bietet automatisches Dokumentstandort-Management ohne benutzerdefinierte Flows." },
      { "id": "opt-3", "text": "Embed a SharePoint page as an iframe", "textDe": "Eine SharePoint-Seite als iframe einbetten", "isCorrect": false, "explanation": "Iframes are a workaround — the native SharePoint integration provides a seamless document grid on the record form.", "explanationDe": "Iframes sind ein Workaround — die native SharePoint-Integration bietet ein nahtloses Dokument-Grid auf dem Datensatzformular." }
    ],
    "explanation": "SharePoint integration creates automatic document libraries mapped to Dataverse records, providing a rich document management experience.",
    "explanationDe": "SharePoint-Integration erstellt automatische Dokumentbibliotheken die Dataverse-Datensaetzen zugeordnet sind und bietet eine reichhaltige Dokumentenmanagement-Erfahrung.",
    "learnRef": { "title": "PL-200: SharePoint integration", "url": "https://learn.microsoft.com/en-us/power-platform/admin/set-up-sharepoint-integration" },
    "learnRefDe": { "title": "PL-200: SharePoint-Integration", "url": "https://learn.microsoft.com/de-de/power-platform/admin/set-up-sharepoint-integration" }
  },
  {
    "id": "pl-q25",
    "certId": "pl200",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "Which feature allows sending tracked emails from Dataverse using server-side synchronization?",
    "promptDe": "Welches Feature ermoeglicht das Senden von verfolgten E-Mails aus Dataverse mittels serverseitiger Synchronisierung?",
    "hint": "It replaced the deprecated Email Router.",
    "hintDe": "Es hat den veralteten Email Router ersetzt.",
    "options": [
      { "id": "opt-0", "text": "Server-side synchronization with mailbox records", "textDe": "Serverseitige Synchronisierung mit Postfach-Datensaetzen", "isCorrect": true, "explanation": "Server-side sync connects Exchange mailboxes to Dataverse, enabling tracked email send/receive and appointment sync.", "explanationDe": "Serverseitige Sync verbindet Exchange-Postfaecher mit Dataverse und ermoeglicht verfolgtes E-Mail-Senden/Empfangen und Terminabgleich." },
      { "id": "opt-1", "text": "Power Automate Send an email action", "textDe": "Power Automate E-Mail senden-Aktion", "isCorrect": false, "explanation": "Power Automate can send emails, but they are not tracked as Dataverse email activity records with server-side sync.", "explanationDe": "Power Automate kann E-Mails senden, aber sie werden nicht als Dataverse E-Mail-Aktivitaetsdatensaetze mit serverseitiger Sync verfolgt." },
      { "id": "opt-2", "text": "Outlook client plugin only", "textDe": "Nur Outlook-Client-Plugin", "isCorrect": false, "explanation": "The Outlook plugin (App for Outlook) provides client-side tracking — server-side sync handles background synchronization.", "explanationDe": "Das Outlook-Plugin (App fuer Outlook) bietet clientseitige Verfolgung — serverseitige Sync erledigt die Hintergrundsynchronisierung." },
      { "id": "opt-3", "text": "Graph API connector in canvas apps", "textDe": "Graph API-Connector in Canvas-Apps", "isCorrect": false, "explanation": "Graph API sends emails via Microsoft 365 — it does not create tracked email activities in Dataverse.", "explanationDe": "Graph API sendet E-Mails ueber Microsoft 365 — es erstellt keine verfolgten E-Mail-Aktivitaeten in Dataverse." }
    ],
    "explanation": "Server-side synchronization is the recommended way to integrate Exchange with Dataverse for tracked emails, appointments, and contacts.",
    "explanationDe": "Serverseitige Synchronisierung ist der empfohlene Weg, Exchange mit Dataverse fuer verfolgte E-Mails, Termine und Kontakte zu integrieren.",
    "learnRef": { "title": "PL-200: Server-side sync", "url": "https://learn.microsoft.com/en-us/power-platform/admin/set-up-server-side-synchronization" },
    "learnRefDe": { "title": "PL-200: Serverseitige Sync", "url": "https://learn.microsoft.com/de-de/power-platform/admin/set-up-server-side-synchronization" }
  },
  {
    "id": "pl-q26",
    "certId": "pl200",
    "topic": "Security & Admin",
    "type": "true-false",
    "prompt": "Statement: Microsoft Entra ID group teams in Dataverse can automatically manage team membership based on Azure AD group membership.",
    "promptDe": "Aussage: Microsoft Entra ID Gruppenteams in Dataverse koennen Teammitgliedschaft automatisch basierend auf Azure AD-Gruppenmitgliedschaft verwalten.",
    "hint": "Think about how security groups sync between Azure AD and Dataverse.",
    "hintDe": "Denke darueber nach, wie Sicherheitsgruppen zwischen Azure AD und Dataverse synchronisiert werden.",
    "options": [
      { "id": "opt-true", "text": "True", "textDe": "Wahr", "isCorrect": true, "explanation": "Entra ID group teams automatically sync membership from the linked Azure AD group, inheriting security roles.", "explanationDe": "Entra ID Gruppenteams synchronisieren automatisch die Mitgliedschaft aus der verknuepften Azure AD-Gruppe und erben Sicherheitsrollen." },
      { "id": "opt-false", "text": "False", "textDe": "Falsch", "isCorrect": false, "explanation": "The statement is correct — Entra ID group teams dynamically reflect Azure AD group membership changes.", "explanationDe": "Die Aussage ist korrekt — Entra ID Gruppenteams spiegeln dynamisch Azure AD-Gruppenmitgliedschaftsaenderungen wider." }
    ],
    "explanation": "Entra ID group teams eliminate manual team management by inheriting membership from Azure AD security or Microsoft 365 groups.",
    "explanationDe": "Entra ID Gruppenteams eliminieren manuelles Team-Management durch Vererbung der Mitgliedschaft aus Azure AD Sicherheits- oder Microsoft 365-Gruppen.",
    "learnRef": { "title": "PL-200: Group teams", "url": "https://learn.microsoft.com/en-us/power-platform/admin/manage-group-teams" },
    "learnRefDe": { "title": "PL-200: Gruppenteams", "url": "https://learn.microsoft.com/de-de/power-platform/admin/manage-group-teams" }
  },
  {
    "id": "pl-q27",
    "certId": "pl200",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "What is the purpose of auditing in Dataverse?",
    "promptDe": "Was ist der Zweck der Ueberwachung in Dataverse?",
    "hint": "It records who changed what and when.",
    "hintDe": "Es zeichnet auf, wer was wann geaendert hat.",
    "options": [
      { "id": "opt-0", "text": "Track changes to records, including who made the change and when", "textDe": "Aenderungen an Datensaetzen verfolgen, einschliesslich wer die Aenderung vorgenommen hat und wann", "isCorrect": true, "explanation": "Auditing captures a history of field-level changes with timestamps, old/new values, and the user who made the change.", "explanationDe": "Ueberwachung erfasst eine Historie von Aenderungen auf Feldebene mit Zeitstempeln, alten/neuen Werten und dem Benutzer der die Aenderung vorgenommen hat." },
      { "id": "opt-1", "text": "Prevent unauthorized data access", "textDe": "Unbefugten Datenzugriff verhindern", "isCorrect": false, "explanation": "Auditing records changes after they occur — it does not prevent access. Security roles handle access control.", "explanationDe": "Ueberwachung zeichnet Aenderungen nach ihrem Auftreten auf — sie verhindert keinen Zugriff. Sicherheitsrollen erledigen die Zugriffskontrolle." },
      { "id": "opt-2", "text": "Automatically backup the database", "textDe": "Die Datenbank automatisch sichern", "isCorrect": false, "explanation": "Backups are managed by the Power Platform admin center — auditing only logs change history.", "explanationDe": "Backups werden vom Power Platform Admin Center verwaltet — Ueberwachung protokolliert nur die Aenderungshistorie." },
      { "id": "opt-3", "text": "Generate performance reports", "textDe": "Leistungsberichte erstellen", "isCorrect": false, "explanation": "Performance analytics come from Power Platform analytics — auditing tracks data changes, not system performance.", "explanationDe": "Leistungsanalysen kommen aus Power Platform Analytics — Ueberwachung verfolgt Datenaenderungen, nicht Systemleistung." }
    ],
    "explanation": "Dataverse auditing provides a detailed log of data changes, useful for compliance, troubleshooting, and accountability.",
    "explanationDe": "Dataverse-Ueberwachung bietet ein detailliertes Log von Datenaenderungen, nuetzlich fuer Compliance, Fehlerbehebung und Verantwortlichkeit.",
    "learnRef": { "title": "PL-200: Manage auditing", "url": "https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing" },
    "learnRefDe": { "title": "PL-200: Ueberwachung verwalten", "url": "https://learn.microsoft.com/de-de/power-platform/admin/manage-dataverse-auditing" }
  },
  {
    "id": "pl-q28",
    "certId": "pl200",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "What component of a connector defines the operations you can perform?",
    "promptDe": "Welche Komponente eines Connectors definiert die Operationen die du ausfuehren kannst?",
    "hint": "Think about triggers and actions.",
    "hintDe": "Denke an Trigger und Aktionen.",
    "options": [
      { "id": "opt-0", "text": "Triggers and actions defined by the connector", "textDe": "Trigger und Aktionen, die vom Connector definiert werden", "isCorrect": true, "explanation": "A connector exposes triggers (events that start a flow) and actions (operations the flow can perform) for its service.", "explanationDe": "Ein Connector stellt Trigger (Ereignisse die einen Flow starten) und Aktionen (Operationen die der Flow ausfuehren kann) fuer seinen Dienst bereit." },
      { "id": "opt-1", "text": "The connector icon and display name", "textDe": "Das Connector-Symbol und der Anzeigename", "isCorrect": false, "explanation": "Icons and names are cosmetic identifiers — the functional components are triggers and actions.", "explanationDe": "Symbole und Namen sind kosmetische Kennzeichner — die funktionalen Komponenten sind Trigger und Aktionen." },
      { "id": "opt-2", "text": "The licensing tier of the connector", "textDe": "Die Lizenzstufe des Connectors", "isCorrect": false, "explanation": "Licensing (standard/premium) affects access rights — the operations are defined by triggers and actions.", "explanationDe": "Lizenzierung (Standard/Premium) beeinflusst Zugriffsrechte — die Operationen werden durch Trigger und Aktionen definiert." },
      { "id": "opt-3", "text": "The geographic region of the connector", "textDe": "Die geografische Region des Connectors", "isCorrect": false, "explanation": "Region affects data residency — the connector's capabilities are defined by its triggers and actions.", "explanationDe": "Region beeinflusst Datenresidenz — die Faehigkeiten des Connectors werden durch seine Trigger und Aktionen definiert." }
    ],
    "explanation": "Connectors consist of triggers (events) and actions (operations) that abstract the underlying API into reusable low-code components.",
    "explanationDe": "Connectors bestehen aus Triggern (Ereignissen) und Aktionen (Operationen) die die zugrundeliegende API in wiederverwendbare Low-Code-Komponenten abstrahieren.",
    "learnRef": { "title": "PL-200: Connector overview", "url": "https://learn.microsoft.com/en-us/connectors/connectors" },
    "learnRefDe": { "title": "PL-200: Connector-Uebersicht", "url": "https://learn.microsoft.com/de-de/connectors/connectors" }
  },
  {
    "id": "pl-q29",
    "certId": "pl200",
    "topic": "Model-driven Apps",
    "type": "single-choice",
    "prompt": "What is the difference between personal views and system views?",
    "promptDe": "Was ist der Unterschied zwischen persoenlichen Ansichten und Systemansichten?",
    "hint": "One is private, the other is shared with all users.",
    "hintDe": "Eine ist privat, die andere wird mit allen Benutzern geteilt.",
    "options": [
      { "id": "opt-0", "text": "System views are shared with all users; personal views are private to the creator unless shared", "textDe": "Systemansichten werden mit allen Benutzern geteilt; persoenliche Ansichten sind privat fuer den Ersteller, sofern nicht geteilt", "isCorrect": true, "explanation": "System views are defined by makers/admins and visible to everyone; personal views are created by individual users for their own use.", "explanationDe": "Systemansichten werden von Makern/Admins definiert und sind fuer alle sichtbar; persoenliche Ansichten werden von einzelnen Benutzern fuer den eigenen Gebrauch erstellt." },
      { "id": "opt-1", "text": "Personal views have more columns; system views are simpler", "textDe": "Persoenliche Ansichten haben mehr Spalten; Systemansichten sind einfacher", "isCorrect": false, "explanation": "Both view types can have any number of columns — the difference is visibility and ownership, not column count.", "explanationDe": "Beide Ansichtstypen koennen beliebig viele Spalten haben — der Unterschied ist Sichtbarkeit und Besitz, nicht Spaltenanzahl." },
      { "id": "opt-2", "text": "System views only work on mobile; personal views on desktop", "textDe": "Systemansichten funktionieren nur auf Mobil; persoenliche Ansichten auf Desktop", "isCorrect": false, "explanation": "Both view types work on all form factors — there is no device restriction.", "explanationDe": "Beide Ansichtstypen funktionieren auf allen Formfaktoren — es gibt keine Geraetebeschraenkung." },
      { "id": "opt-3", "text": "There is no difference", "textDe": "Es gibt keinen Unterschied", "isCorrect": false, "explanation": "There is a clear difference in ownership and visibility — system views are global, personal views are user-scoped.", "explanationDe": "Es gibt einen klaren Unterschied in Besitz und Sichtbarkeit — Systemansichten sind global, persoenliche Ansichten benutzerbezogen." }
    ],
    "explanation": "System views are created by makers and visible to all users. Personal views are user-created and private unless explicitly shared.",
    "explanationDe": "Systemansichten werden von Makern erstellt und sind fuer alle Benutzer sichtbar. Persoenliche Ansichten sind benutzererstellte und privat, sofern nicht explizit geteilt.",
    "learnRef": { "title": "PL-200: Views overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/create-edit-views" },
    "learnRefDe": { "title": "PL-200: Ansichten Uebersicht", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/create-edit-views" }
  },
  {
    "id": "pl-q30",
    "certId": "pl200",
    "topic": "Security & Admin",
    "type": "single-choice",
    "prompt": "How should you transport customizations from a development environment to production?",
    "promptDe": "Wie solltest du Anpassungen von einer Entwicklungsumgebung in die Produktion transportieren?",
    "hint": "It involves exporting from dev and importing to prod.",
    "hintDe": "Es beinhaltet den Export aus Dev und Import in Prod.",
    "options": [
      { "id": "opt-0", "text": "Export as a managed solution from dev and import into production", "textDe": "Als verwaltete Loesung aus Dev exportieren und in Produktion importieren", "isCorrect": true, "explanation": "Exporting as managed ensures components are locked in production, preventing untracked changes.", "explanationDe": "Exportieren als verwaltet stellt sicher, dass Komponenten in Produktion gesperrt sind und unkontrollierte Aenderungen verhindert werden." },
      { "id": "opt-1", "text": "Manually recreate all components in production", "textDe": "Alle Komponenten manuell in Produktion neu erstellen", "isCorrect": false, "explanation": "Manual recreation is error-prone and not repeatable — solutions provide automated, versionable transport.", "explanationDe": "Manuelles Neuerstellen ist fehleranfaellig und nicht wiederholbar — Loesungen bieten automatisierten, versionierbaren Transport." },
      { "id": "opt-2", "text": "Copy the entire environment", "textDe": "Die gesamte Umgebung kopieren", "isCorrect": false, "explanation": "Environment copy duplicates everything including data — solution export moves only customizations.", "explanationDe": "Umgebungskopie dupliziert alles einschliesslich Daten — Loesungsexport verschiebt nur Anpassungen." },
      { "id": "opt-3", "text": "Use Power BI to synchronize metadata", "textDe": "Power BI verwenden um Metadaten zu synchronisieren", "isCorrect": false, "explanation": "Power BI is for reporting — ALM (application lifecycle management) uses solution packaging.", "explanationDe": "Power BI ist fuer Berichterstellung — ALM (Application Lifecycle Management) nutzt Loesungsverpackung." }
    ],
    "explanation": "The recommended ALM practice is: develop in unmanaged → export as managed → import managed into target environments.",
    "explanationDe": "Die empfohlene ALM-Praxis ist: in nicht verwaltet entwickeln → als verwaltet exportieren → verwaltet in Zielumgebungen importieren.",
    "learnRef": { "title": "PL-200: Solution lifecycle", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm" },
    "learnRefDe": { "title": "PL-200: Loesungs-Lebenszyklus", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-concepts-alm" }
  }
];
