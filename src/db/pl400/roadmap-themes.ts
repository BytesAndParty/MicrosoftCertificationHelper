import type { RoadmapTheme } from '@/types/db';

export const pl400RoadmapThemes: RoadmapTheme[] = [
  {
    "id": "p4-scope",
    "certId": "pl400",
    "title": "1. Scope & Study Strategy",
    "titleDe": "1. Umfang & Lernstrategie",
    "goal": "Understand the PL-400 exam structure and define your personal study plan.",
    "goalDe": "Die PL-400-Prüfungsstruktur verstehen und einen persönlichen Lernplan definieren.",
    "todos": [
      "Download the official PL-400 skill outline from Microsoft Learn",
      "Map each exam domain to your current knowledge level",
      "Identify your top 2 weak areas and prioritize them",
      "Set weekly study goals (e.g., 1 domain per week)",
      "Book your exam date to create a deadline"
    ],
    "todosDe": [
      "Offiziellen PL-400 Skill-Outline von Microsoft Learn herunterladen",
      "Jeden Prüfungsbereich dem aktuellen Wissensniveau zuordnen",
      "Die 2 schwächsten Bereiche identifizieren und priorisieren",
      "Wöchentliche Lernziele setzen (z.B. 1 Bereich pro Woche)",
      "Prüfungsdatum buchen, um eine Deadline zu schaffen"
    ]
  },
  {
    "id": "p4-dataverse",
    "certId": "pl400",
    "title": "2. Dataverse & Data Modeling",
    "titleDe": "2. Dataverse & Datenmodellierung",
    "goal": "Master Dataverse tables, relationships, security, and advanced features tested in PL-400.",
    "goalDe": "Dataverse-Tabellen, Beziehungen, Sicherheit und erweiterte Funktionen beherrschen, die in PL-400 geprüft werden.",
    "todos": [
      "Understand relationship behaviors: Parental, Referential, Referential Restrict Delete",
      "Configure alternate keys and practice Web API upsert",
      "Set up field-level security with column security profiles",
      "Enable auditing at environment, table, and column level",
      "Create and test a virtual table with an external data source",
      "Practice FetchXML queries with related entity joins"
    ],
    "todosDe": [
      "Beziehungsverhalten verstehen: Übergeordnet, Referentiell, Referentiell Löschen einschränken",
      "Alternative Schlüssel konfigurieren und Web API Upsert üben",
      "Feldebenensicherheit mit Spaltensicherheitsprofilen einrichten",
      "Überwachung auf Umgebungs-, Tabellen- und Spaltenebene aktivieren",
      "Eine virtuelle Tabelle mit einer externen Datenquelle erstellen und testen",
      "FetchXML-Abfragen mit verwandten Entitätsjoins üben"
    ]
  },
  {
    "id": "p4-extend",
    "certId": "pl400",
    "title": "3. Plug-ins & Platform Extensibility",
    "titleDe": "3. Plug-ins & Plattform-Erweiterbarkeit",
    "goal": "Build and register Dataverse plug-ins and understand the full extensibility toolkit.",
    "goalDe": "Dataverse-Plug-ins erstellen und registrieren und das vollständige Erweiterbarkeits-Toolkit verstehen.",
    "todos": [
      "Write a synchronous Pre-Operation plug-in with validation and rollback",
      "Use IOrganizationService to create/update related records in a plug-in",
      "Use ITracingService for diagnostic logging",
      "Register a plug-in with Plugin Registration Tool (PRT)",
      "Understand the difference between Pre-Validation, Pre-Operation, Post-Operation",
      "Create a custom workflow activity",
      "Add client-side JavaScript to a model-driven app form"
    ],
    "todosDe": [
      "Synchrones Pre-Operation-Plug-in mit Validierung und Rollback schreiben",
      "IOrganizationService zum Erstellen/Aktualisieren verwandter Datensätze in einem Plug-in verwenden",
      "ITracingService für diagnostische Protokollierung verwenden",
      "Plug-in mit Plugin Registration Tool (PRT) registrieren",
      "Unterschied zwischen Pre-Validation, Pre-Operation, Post-Operation verstehen",
      "Eine benutzerdefinierte Workflow-Aktivität erstellen",
      "Clientseitiges JavaScript zu einem modellgesteuerten App-Formular hinzufügen"
    ]
  },
  {
    "id": "p4-pcf",
    "certId": "pl400",
    "title": "4. PCF Components",
    "titleDe": "4. PCF-Komponenten",
    "goal": "Build PCF field and dataset components and deploy them to Power Apps.",
    "goalDe": "PCF-Feld- und Dataset-Komponenten erstellen und in Power Apps bereitstellen.",
    "todos": [
      "Scaffold a PCF field component with pac pcf init",
      "Implement the init, updateView, and getOutputs lifecycle methods",
      "Build a dataset component that renders records as a custom list",
      "Test with pac pcf push in a developer environment",
      "Package and import as a solution",
      "Understand when to use field vs dataset component"
    ],
    "todosDe": [
      "PCF-Feld-Komponente mit pac pcf init einrüsten",
      "Die Lebenszyklus-Methoden init, updateView und getOutputs implementieren",
      "Eine Dataset-Komponente erstellen, die Datensätze als benutzerdefinierte Liste rendert",
      "Mit pac pcf push in einer Entwicklerumgebung testen",
      "Als Lösung verpacken und importieren",
      "Verstehen, wann Feld- vs. Dataset-Komponente verwendet werden soll"
    ]
  },
  {
    "id": "p4-integration",
    "certId": "pl400",
    "title": "5. Integration & APIs",
    "titleDe": "5. Integration & APIs",
    "goal": "Design and implement Power Platform integrations using Web API, custom connectors, and Azure services.",
    "goalDe": "Power Platform-Integrationen mit Web API, benutzerdefinierten Connectors und Azure-Diensten entwerfen und implementieren.",
    "todos": [
      "Practice OData queries: $filter, $select, $expand, $orderby",
      "Implement Web API upsert with alternate keys",
      "Create a custom connector with OAuth 2.0 authentication",
      "Install and configure the on-premises data gateway",
      "Integrate with Azure Service Bus from Dataverse (service endpoint registration)",
      "Understand when to use Relay (sync) vs Service Bus (async) vs Event Hubs (streaming)"
    ],
    "todosDe": [
      "OData-Abfragen üben: $filter, $select, $expand, $orderby",
      "Web API Upsert mit alternativen Schlüsseln implementieren",
      "Benutzerdefinierten Connector mit OAuth 2.0-Authentifizierung erstellen",
      "Lokales Datengateway installieren und konfigurieren",
      "Mit Azure Service Bus von Dataverse aus integrieren (Service-Endpoint-Registrierung)",
      "Verstehen, wann Relay (sync) vs. Service Bus (async) vs. Event Hubs (Streaming) verwendet werden soll"
    ]
  },
  {
    "id": "p4-alm",
    "certId": "pl400",
    "title": "6. ALM & DevOps",
    "titleDe": "6. ALM & DevOps",
    "goal": "Implement a professional ALM process with pipelines, source control, and managed solutions.",
    "goalDe": "Einen professionellen ALM-Prozess mit Pipelines, Quellcodeverwaltung und verwalteten Lösungen implementieren.",
    "todos": [
      "Set up Power Platform Pipelines for Dev → Test → Prod deployment",
      "Export and unpack a solution with Power Platform CLI (pac solution unpack)",
      "Check solution files into Git and practice diff-based reviews",
      "Understand managed vs unmanaged solution behavior in target environments",
      "Configure environment variables with different values per environment",
      "Use connection references to decouple connector credentials from flows",
      "Study solution layer precedence (active layer always wins)"
    ],
    "todosDe": [
      "Power Platform Pipelines für Dev → Test → Prod-Bereitstellung einrichten",
      "Eine Lösung mit Power Platform CLI exportieren und entpacken (pac solution unpack)",
      "Lösungsdateien in Git einchecken und diff-basierte Überprüfungen üben",
      "Verwaltete vs. nicht verwaltete Lösungsverhalten in Zielumgebungen verstehen",
      "Umgebungsvariablen mit unterschiedlichen Werten pro Umgebung konfigurieren",
      "Verbindungsreferenzen verwenden, um Connector-Anmeldeinformationen von Flows zu entkoppeln",
      "Lösungsschicht-Priorität studieren (aktive Schicht gewinnt immer)"
    ]
  }
];
