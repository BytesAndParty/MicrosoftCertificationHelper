import type { RoadmapTheme } from '@/types/db';

export const pl600RoadmapThemes: RoadmapTheme[] = [
  {
    "id": "pl6-scope",
    "certId": "pl600",
    "title": "1. Scope and learning strategy",
    "titleDe": "1. Scope und Lernstrategie",
    "goal": "Map PL-600 exam objectives and plan study time per domain weighted by exam percentage.",
    "goalDe": "PL-600 Pruefungsziele abbilden und Lernzeit pro Domaene gewichtet nach Pruefungsprozent planen.",
    "todos": [
      "Review skill outline: Envisioning (45-50%), Architecture (35-40%), Implementation (15-20%)",
      "Set weekly study goals with time budgets — prioritize envisioning and architecture",
      "Create or access a Power Platform trial environment with Dynamics 365 trial",
      "Review the Power Platform Well-Architected framework documentation"
    ],
    "todosDe": [
      "Skill-Outline pruefen: Envisioning (45-50%), Architektur (35-40%), Implementierung (15-20%)",
      "Woechentliche Lernziele mit Zeitbudget festlegen — Envisioning und Architektur priorisieren",
      "Power Platform Trial-Umgebung mit Dynamics 365 Trial erstellen oder zugreifen",
      "Power Platform Well-Architected Framework Dokumentation durcharbeiten"
    ]
  },
  {
    "id": "pl6-envision",
    "certId": "pl600",
    "title": "2. Solution envisioning and planning",
    "titleDe": "2. Loesungsentwurf und Planung",
    "goal": "Master the initial phases of solution architecture: business assessment, org analysis, and solution planning.",
    "goalDe": "Die Anfangsphasen der Loesungsarchitektur beherrschen: Geschaeftsbewertung, Organisationsanalyse und Loesungsplanung.",
    "todos": [
      "Practice evaluating business requirements and identifying Power Platform components",
      "Learn to assess organization risk factors and define success criteria",
      "Study how to evaluate enterprise architecture and identify data sources",
      "Practice identifying existing apps, D365 apps, AppSource, and ISV components"
    ],
    "todosDe": [
      "Ueben: Geschaeftsanforderungen bewerten und Power Platform-Komponenten identifizieren",
      "Organisationsrisikofaktoren bewerten und Erfolgskriterien definieren lernen",
      "Studieren: Enterprise Architecture bewerten und Datenquellen identifizieren",
      "Ueben: Bestehende Apps, D365-Apps, AppSource und ISV-Komponenten identifizieren"
    ]
  },
  {
    "id": "pl6-requirements",
    "certId": "pl600",
    "title": "3. Requirement analysis and fit/gap",
    "titleDe": "3. Anforderungsanalyse und Fit/Gap",
    "goal": "Capture, refine, and analyze requirements. Perform fit/gap analysis to determine solution scope.",
    "goalDe": "Anforderungen erfassen, verfeinern und analysieren. Fit/Gap-Analyse durchfuehren um den Loesungsumfang zu bestimmen.",
    "todos": [
      "Practice refining high-level requirements into functional and non-functional requirements",
      "Study fit/gap analysis techniques and scope determination",
      "Evaluate D365 and AppSource options for solving requirements",
      "Learn to design future-state business processes from current-state analysis",
      "Practice identifying migration and integration effort estimates"
    ],
    "todosDe": [
      "Ueben: High-Level-Anforderungen in funktionale und nicht-funktionale Anforderungen verfeinern",
      "Fit/Gap-Analyse-Techniken und Scopebestimmung studieren",
      "D365- und AppSource-Optionen zur Losung von Anforderungen bewerten",
      "Future-State-Geschaeftsprozesse aus Current-State-Analyse entwerfen lernen",
      "Ueben: Migrations- und Integrationsaufwandsschaetzungen identifizieren"
    ]
  },
  {
    "id": "pl6-architecture",
    "certId": "pl600",
    "title": "4. Solution architecture and design",
    "titleDe": "4. Loesungsarchitektur und Design",
    "goal": "Lead the design process: solution topology, environment strategy, automation, and app design patterns.",
    "goalDe": "Den Designprozess leiten: Loesungstopologie, Umgebungsstrategie, Automatisierung und App-Designmuster.",
    "todos": [
      "Design solution topologies with environment strategies (dev, test, UAT, prod)",
      "Practice designing automation strategies using Power Automate cloud/desktop flows and BPFs",
      "Study app grouping patterns: model-driven vs canvas vs custom pages by role",
      "Learn data visualization strategies with Power BI embedded and dashboards",
      "Practice component reuse and visual system design communication"
    ],
    "todosDe": [
      "Loesungstopologien mit Umgebungsstrategien (Dev, Test, UAT, Prod) entwerfen",
      "Ueben: Automatisierungsstrategien mit Power Automate Cloud/Desktop Flows und BPFs entwerfen",
      "App-Gruppierungsmuster studieren: modellgesteuert vs Canvas vs Custom Pages nach Rolle",
      "Datenvisualisierungsstrategien mit Power BI Embedded und Dashboards lernen",
      "Komponentenwiederverwendung und visuelle Systemdesign-Kommunikation ueben"
    ]
  },
  {
    "id": "pl6-data",
    "certId": "pl600",
    "title": "5. Data model and integration design",
    "titleDe": "5. Datenmodell- und Integrationsdesign",
    "goal": "Design data models, relationships, and integration patterns across the full Power Platform ecosystem.",
    "goalDe": "Datenmodelle, Beziehungen und Integrationsmuster ueber das gesamte Power Platform-Oekosystem entwerfen.",
    "todos": [
      "Practice designing relationships, cascade behaviors, and complex data models",
      "Study when to connect to external data vs importing into Dataverse",
      "Design Teams and SharePoint collaboration integrations",
      "Learn D365, third-party, and Azure integration patterns (API Management, Functions)",
      "Study authentication strategies and RPA design with desktop flows"
    ],
    "todosDe": [
      "Ueben: Beziehungen, Kaskadierungsverhalten und komplexe Datenmodelle entwerfen",
      "Studieren: Wann externe Datenverbindung vs Import in Dataverse",
      "Teams- und SharePoint-Kollaborationsintegrationen entwerfen",
      "D365-, Drittanbieter- und Azure-Integrationsmuster lernen (API Management, Functions)",
      "Authentifizierungsstrategien und RPA-Design mit Desktop Flows studieren"
    ]
  },
  {
    "id": "pl6-security",
    "certId": "pl600",
    "title": "6. Security architecture",
    "titleDe": "6. Sicherheitsarchitektur",
    "goal": "Design comprehensive security models including roles, business units, Entra ID, and DLP policies.",
    "goalDe": "Umfassende Sicherheitsmodelle entwerfen einschliesslich Rollen, Unternehmenseinheiten, Entra ID und DLP-Richtlinien.",
    "todos": [
      "Design business unit and team structures for complex organizations",
      "Practice creating security roles with column and row-level security",
      "Study Entra ID groups, app registrations, and service principals for solutions",
      "Learn DLP policy design and external user access patterns",
      "Practice security models addressing complex multi-BU, multi-team scenarios"
    ],
    "todosDe": [
      "Unternehmenseinheits- und Teamstrukturen fuer komplexe Organisationen entwerfen",
      "Ueben: Sicherheitsrollen mit Spalten- und Zeilensicherheit erstellen",
      "Entra-ID-Gruppen, App-Registrierungen und Service Principals fuer Loesungen studieren",
      "DLP-Richtliniendesign und externe Benutzerzugriffsmuster lernen",
      "Sicherheitsmodelle fuer komplexe Multi-BU, Multi-Team-Szenarien ueben"
    ]
  },
  {
    "id": "pl6-implementation",
    "certId": "pl600",
    "title": "7. Implementation and go-live",
    "titleDe": "7. Implementierung und Go-Live",
    "goal": "Validate solution designs, resolve conflicts, and ensure successful go-live readiness.",
    "goalDe": "Loesungsdesigns validieren, Konflikte loesen und erfolgreiche Go-Live-Bereitschaft sicherstellen.",
    "todos": [
      "Study solution validation: security review, API limits, performance assessment",
      "Learn to resolve automation and integration conflicts",
      "Practice data migration troubleshooting and deployment plan review",
      "Study go-live readiness factors and remediation strategies"
    ],
    "todosDe": [
      "Loesungsvalidierung studieren: Sicherheitspruefung, API-Limits, Performance-Bewertung",
      "Automatisierungs- und Integrationskonflikte loesen lernen",
      "Datenmigrations-Troubleshooting und Deployment-Plan-Review ueben",
      "Go-Live-Bereitschaftsfaktoren und Behebungsstrategien studieren"
    ]
  },
  {
    "id": "pl6-practice",
    "certId": "pl600",
    "title": "8. Practice and iteration",
    "titleDe": "8. Uebung und Iteration",
    "goal": "Test your knowledge with scenario-based practice and refine weak areas before the exam.",
    "goalDe": "Wissen mit szenariobasierter Uebung testen und Schwachstellen vor der Pruefung verbessern.",
    "todos": [
      "Complete all quiz questions and review incorrect answers",
      "Practice scenario-based architecture decisions with real-world examples",
      "Review Microsoft Learn case studies and architecture patterns",
      "Take the official Microsoft practice assessment",
      "Focus extra study time on the highest-weighted domain (Envisioning 45-50%)"
    ],
    "todosDe": [
      "Alle Quizfragen durcharbeiten und falsche Antworten ueberpruefen",
      "Szenariobasierte Architekturentscheidungen mit realen Beispielen ueben",
      "Microsoft Learn Fallstudien und Architekturmuster durcharbeiten",
      "Das offizielle Microsoft Practice Assessment absolvieren",
      "Extra-Lernzeit auf die hoechstgewichtete Domaene fokussieren (Envisioning 45-50%)"
    ]
  }
];
