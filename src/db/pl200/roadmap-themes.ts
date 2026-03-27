import type { RoadmapTheme } from '@/types/db';

export const pl200RoadmapThemes: RoadmapTheme[] = [
  {
    "id": "pl-scope",
    "certId": "pl200",
    "title": "1. Scope and learning strategy",
    "titleDe": "1. Scope und Lernstrategie",
    "goal": "Map PL-200 exam objectives and plan study time per domain.",
    "goalDe": "PL-200 Pruefungsziele abbilden und Lernzeit pro Domaine planen.",
    "todos": [
      "Review skill outline: Dataverse (25-30%), Apps (25-30%), Automation (25-30%), Environments (15-20%)",
      "Set weekly study goals with time budgets",
      "Create or access a Power Platform trial environment"
    ],
    "todosDe": [
      "Skill-Outline pruefen: Dataverse (25-30%), Apps (25-30%), Automatisierung (25-30%), Umgebungen (15-20%)",
      "Woechentliche Lernziele mit Zeitbudget festlegen",
      "Power Platform Trial-Umgebung erstellen oder zugreifen"
    ]
  },
  {
    "id": "pl-dataverse",
    "certId": "pl200",
    "title": "2. Configure Microsoft Dataverse",
    "titleDe": "2. Microsoft Dataverse konfigurieren",
    "goal": "Master data modeling, security, and administration in Dataverse.",
    "goalDe": "Datenmodellierung, Sicherheit und Administration in Dataverse beherrschen.",
    "todos": [
      "Practice creating standard, activity, and virtual tables",
      "Configure 1:N and N:N relationships with cascade behaviors",
      "Set up business units, security roles, and column security",
      "Configure Dataverse search, auditing, and duplicate detection",
      "Learn bulk delete and data import/export options"
    ],
    "todosDe": [
      "Ueben: Standard-, Aktivitaets- und virtuelle Tabellen erstellen",
      "1:N und N:N Beziehungen mit Kaskadierungsverhalten konfigurieren",
      "Unternehmenseinheiten, Sicherheitsrollen und Spaltensicherheit einrichten",
      "Dataverse-Suche, Ueberwachung und Duplikaterkennung konfigurieren",
      "Massenloeschung und Datenimport/-export Optionen lernen"
    ]
  },
  {
    "id": "pl-apps",
    "certId": "pl200",
    "title": "3. Create apps with Power Apps",
    "titleDe": "3. Apps mit Power Apps erstellen",
    "goal": "Build model-driven apps, understand canvas apps, and configure Power Pages.",
    "goalDe": "Modellgesteuerte Apps erstellen, Canvas-Apps verstehen und Power Pages konfigurieren.",
    "todos": [
      "Create model-driven app with multiple form types (main, quick create, card)",
      "Configure views, custom pages, and modern commanding",
      "Embed a canvas app in a model-driven form",
      "Understand canvas app structure, navigation, and collections",
      "Build a Power Pages site with forms, lists, web roles, and authentication"
    ],
    "todosDe": [
      "Modellgesteuerte App mit mehreren Formulartypen erstellen (Haupt, Schnellerstellung, Karte)",
      "Ansichten, benutzerdefinierte Seiten und modernes Commanding konfigurieren",
      "Canvas-App in ein modellgesteuertes Formular einbetten",
      "Canvas-App-Struktur, Navigation und Sammlungen verstehen",
      "Power Pages-Website mit Formularen, Listen, Webrollen und Authentifizierung erstellen"
    ]
  },
  {
    "id": "pl-automation",
    "certId": "pl200",
    "title": "4. Logic and process automation",
    "titleDe": "4. Logik und Prozessautomatisierung",
    "goal": "Master cloud flows, BPFs, classic workflows, and low-code plug-ins.",
    "goalDe": "Cloud Flows, BPFs, klassische Workflows und Low-Code Plug-ins beherrschen.",
    "todos": [
      "Build automated, instant, and scheduled cloud flows",
      "Implement error handling with run-after and Scope actions",
      "Create a business process flow with stages and branching",
      "Configure classic Dataverse workflows and manage logs",
      "Create low-code plug-ins and business rules"
    ],
    "todosDe": [
      "Automatisierte, sofortige und geplante Cloud Flows erstellen",
      "Fehlerbehandlung mit Run-After und Scope-Aktionen implementieren",
      "Geschaeftsprozessflow mit Phasen und Verzweigungen erstellen",
      "Klassische Dataverse-Workflows konfigurieren und Logs verwalten",
      "Low-Code Plug-ins und Geschaeftsregeln erstellen"
    ]
  },
  {
    "id": "pl-environments",
    "certId": "pl200",
    "title": "5. Manage environments and ALM",
    "titleDe": "5. Umgebungen und ALM verwalten",
    "goal": "Master solution management, environment strategy, and integrations.",
    "goalDe": "Loesungsmanagement, Umgebungsstrategie und Integrationen beherrschen.",
    "todos": [
      "Create managed and unmanaged solutions; learn the ALM lifecycle",
      "Run solution checker and app checker before deployment",
      "Export managed solutions and import into target environments",
      "Configure SharePoint document management and email integration",
      "Practice using Word templates with Dataverse data"
    ],
    "todosDe": [
      "Verwaltete und nicht verwaltete Loesungen erstellen; ALM-Lebenszyklus lernen",
      "Loesungspruefer und App-Pruefer vor Deployment ausfuehren",
      "Verwaltete Loesungen exportieren und in Zielumgebungen importieren",
      "SharePoint-Dokumentenmanagement und E-Mail-Integration konfigurieren",
      "Word-Vorlagen mit Dataverse-Daten verwenden ueben"
    ]
  },
  {
    "id": "pl-exam",
    "certId": "pl200",
    "title": "6. Exam preparation",
    "titleDe": "6. Pruefungsvorbereitung",
    "goal": "Final review, practice exams, and confidence building.",
    "goalDe": "Abschliessende Wiederholung, Uebungspruefungen und Sicherheit aufbauen.",
    "todos": [
      "Complete all quiz questions and review incorrect answers",
      "Review flashcards for all topics",
      "Take a timed practice exam",
      "Review Microsoft Learn modules for weak areas",
      "Schedule the exam when quiz scores consistently exceed 85%"
    ],
    "todosDe": [
      "Alle Quizfragen abschliessen und falsche Antworten ueberpruefen",
      "Flashcards fuer alle Themen durchgehen",
      "Zeitgesteuerte Uebungspruefung ablegen",
      "Microsoft Learn-Module fuer schwache Bereiche ueberpruefen",
      "Pruefung planen wenn Quizergebnisse konstant ueber 85% liegen"
    ]
  }
];
