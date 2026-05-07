import type { RoadmapTheme } from '@/types/db';

export const pl600RoadmapThemes: RoadmapTheme[] = [
  {
    "id": "p6-scope",
    "certId": "pl600",
    "title": "1. Architect Mindset & Exam Scope",
    "titleDe": "1. Architect-Denkweise & Prüfungsumfang",
    "goal": "Understand the PL-600 exam structure and adopt the solution architect mindset.",
    "goalDe": "Die PL-600-Prüfungsstruktur verstehen und die Denkweise eines Solution Architects annehmen.",
    "todos": [
      "Download the official PL-600 skill outline from Microsoft Learn",
      "Understand the three exam domains: Envisioning (35-40%), Architect (40-45%), Implement (15-25%)",
      "Study the difference between architect vs. developer role in Power Platform projects",
      "Review Microsoft's Power Platform guidance and architecture documentation",
      "Identify weak areas across security, data, integration, and ALM domains",
      "Book your exam date to create a commitment deadline"
    ],
    "todosDe": [
      "Offiziellen PL-600 Skill-Outline von Microsoft Learn herunterladen",
      "Die drei Prüfungsbereiche verstehen: Envisioning (35-40%), Architect (40-45%), Implementieren (15-25%)",
      "Den Unterschied zwischen Architect- und Entwickler-Rolle in Power Platform-Projekten studieren",
      "Microsofts Power Platform-Leitfaden und Architekturdokumentation überprüfen",
      "Schwache Bereiche in Sicherheit, Daten, Integration und ALM-Domänen identifizieren",
      "Prüfungsdatum buchen, um eine Verpflichtungsdeadline zu schaffen"
    ]
  },
  {
    "id": "p6-envisioning",
    "certId": "pl600",
    "title": "2. Solution Envisioning & Requirements",
    "titleDe": "2. Lösungsenvisioning & Anforderungen",
    "goal": "Master fit-gap analysis, requirements elicitation, and technical feasibility assessment.",
    "goalDe": "Fit-Gap-Analyse, Anforderungserhebung und technische Machbarkeitsbewertung beherrschen.",
    "todos": [
      "Practice fit-gap analysis: identify OOB, configuration, customization, third-party, and accept-gap options",
      "Learn to recognize when requirements exceed Power Platform's capabilities",
      "Study industry accelerators (Automotive, Healthcare, Nonprofit, Financial Services)",
      "Understand how to translate business requirements into Power Platform architecture decisions",
      "Practice mapping requirements to the correct Power Platform product (Apps, Automate, Pages, Copilot Studio)",
      "Learn stakeholder communication patterns for architects"
    ],
    "todosDe": [
      "Fit-Gap-Analyse üben: OOB-, Konfigurations-, Anpassungs-, Drittanbieter- und Lücke-akzeptieren-Optionen identifizieren",
      "Lernen, wann Anforderungen die Fähigkeiten von Power Platform übersteigen",
      "Branchenbeschleuniger studieren (Automotive, Gesundheitswesen, Nonprofit, Finanzdienstleistungen)",
      "Verstehen, wie Geschäftsanforderungen in Power Platform-Architekturentscheidungen übersetzt werden",
      "Anforderungen dem richtigen Power Platform-Produkt zuordnen (Apps, Automate, Pages, Copilot Studio)",
      "Stakeholder-Kommunikationsmuster für Architects lernen"
    ]
  },
  {
    "id": "p6-security",
    "certId": "pl600",
    "title": "3. Security Architecture",
    "titleDe": "3. Sicherheitsarchitektur",
    "goal": "Design comprehensive Dataverse security models covering all layers of the security stack.",
    "goalDe": "Umfassende Dataverse-Sicherheitsmodelle entwerfen, die alle Schichten des Sicherheits-Stacks abdecken.",
    "todos": [
      "Design a BU hierarchy for a multi-department, multi-country organization",
      "Configure hierarchy security (Manager and Position hierarchy modes)",
      "Implement DLP policies to prevent connector mixing (classify connectors into tiers)",
      "Distinguish between Dataverse auditing (changes) and activity logging (read access)",
      "Design least-privilege access with record sharing for temporary cross-BU access",
      "Understand field-level security and when to use it vs. row-level security",
      "Practice the 5 security layers: org, BU, security role depth, FLS, record sharing"
    ],
    "todosDe": [
      "BU-Hierarchie für eine Mehrfachabteilungs-, Mehrländer-Organisation entwerfen",
      "Hierarchiesicherheit konfigurieren (Manager- und Positions-Hierarchiemodi)",
      "DLP-Richtlinien implementieren, um Connector-Mischung zu verhindern (Connectors in Stufen klassifizieren)",
      "Unterschied zwischen Dataverse-Überwachung (Änderungen) und Aktivitätsprotokollierung (Lesezugriff) unterscheiden",
      "Least-Privilege-Zugriff mit Datensatzfreigabe für temporären BU-übergreifenden Zugriff entwerfen",
      "Feldebenensicherheit verstehen und wann sie vs. Zeilenebensicherheit verwendet werden soll",
      "Die 5 Sicherheitsschichten üben: Org, BU, Sicherheitsrollen-Tiefe, FLS, Datensatzfreigabe"
    ]
  },
  {
    "id": "p6-data-integration",
    "certId": "pl600",
    "title": "4. Data & Integration Architecture",
    "titleDe": "4. Daten- & Integrationsarchitektur",
    "goal": "Design data models, storage strategies, and integration patterns for enterprise Power Platform solutions.",
    "goalDe": "Datenmodelle, Speicherstrategien und Integrationsmuster für Enterprise-Power-Platform-Lösungen entwerfen.",
    "todos": [
      "Understand when to use Dataverse vs. Azure SQL vs. SharePoint vs. Azure Data Lake",
      "Design incremental data warehouse sync using Dataverse change tracking",
      "Configure Azure Synapse Link for large-scale Dataverse analytics",
      "Choose the right Azure messaging service: Service Bus Queue/Topic, Event Hubs, Relay",
      "Design bidirectional sync with loop prevention (source tagging pattern)",
      "Classify integrations by dimension: volume, volatility, time sensitivity, regulated, licensed",
      "Configure SharePoint document integration with Dataverse records"
    ],
    "todosDe": [
      "Verstehen, wann Dataverse vs. Azure SQL vs. SharePoint vs. Azure Data Lake verwendet werden soll",
      "Inkrementelle Data-Warehouse-Synchronisierung mit Dataverse-Änderungsverfolgung entwerfen",
      "Azure Synapse Link für groß angelegte Dataverse-Analysen konfigurieren",
      "Den richtigen Azure-Messaging-Dienst wählen: Service Bus Queue/Topic, Event Hubs, Relay",
      "Bidirektionale Synchronisierung mit Schleifen-Prävention entwerfen (Quell-Kennzeichnungsmuster)",
      "Integrationen nach Dimension klassifizieren: Volumen, Volatilität, Zeitkritisch, Reguliert, Lizenziert",
      "SharePoint-Dokumentintegration mit Dataverse-Datensätzen konfigurieren"
    ]
  },
  {
    "id": "p6-alm-governance",
    "certId": "pl600",
    "title": "5. ALM, DevOps & Governance",
    "titleDe": "5. ALM, DevOps & Governance",
    "goal": "Implement enterprise-grade ALM governance, source control, and automated deployment pipelines.",
    "goalDe": "Enterprise-grade ALM-Governance, Quellcodeverwaltung und automatisierte Bereitstellungspipelines implementieren.",
    "todos": [
      "Design a multi-environment strategy (developer → sandbox → production)",
      "Configure managed properties to prevent target environment customizations",
      "Set up Power Platform Build Tools in Azure DevOps for CI/CD",
      "Use pac solution unpack for Git-compatible source control",
      "Configure environment variables and connection references for deployment",
      "Understand solution layer precedence (active layer always overrides managed)",
      "Design automated testing strategy using test flows in Azure DevOps pipelines"
    ],
    "todosDe": [
      "Mehrfachumgebungsstrategie entwerfen (Entwickler → Sandbox → Produktion)",
      "Verwaltete Eigenschaften konfigurieren, um Anpassungen in Zielumgebungen zu verhindern",
      "Power Platform Build Tools in Azure DevOps für CI/CD einrichten",
      "pac solution unpack für Git-kompatible Quellcodeverwaltung verwenden",
      "Umgebungsvariablen und Verbindungsreferenzen für die Bereitstellung konfigurieren",
      "Lösungsschicht-Priorität verstehen (aktive Schicht überschreibt immer verwaltete)",
      "Automatisierte Teststrategie mit Test-Flows in Azure DevOps-Pipelines entwerfen"
    ]
  },
  {
    "id": "p6-analytics-ai",
    "certId": "pl600",
    "title": "6. Analytics, AI & Solution Implementation",
    "titleDe": "6. Analysen, KI & Lösungsimplementierung",
    "goal": "Architect analytics solutions, AI capabilities, and lead successful Power Platform project implementations.",
    "goalDe": "Analyselösungen, KI-Funktionen entwerfen und erfolgreiche Power Platform-Projektimplementierungen leiten.",
    "todos": [
      "Design Power BI integration: embedded reports, external sharing, DirectQuery vs. import",
      "Configure Copilot Studio with SharePoint knowledge sources for AI-powered Q&A",
      "Choose the right AI Builder model: text classification, document processing, entity extraction, object detection",
      "Design RPA workflows with desktop flows for legacy application integration",
      "Define UAT strategy: sandbox environment, production data copy, test acceptance criteria",
      "Understand Power Platform adoption patterns: CoE Starter Kit, governance frameworks",
      "Practice end-to-end solution design: from requirements to deployed architecture"
    ],
    "todosDe": [
      "Power BI-Integration entwerfen: eingebettete Berichte, externe Freigabe, DirectQuery vs. Import",
      "Copilot Studio mit SharePoint-Wissensquellen für KI-gestützte Q&A konfigurieren",
      "Das richtige AI Builder-Modell wählen: Textklassifizierung, Dokumentenverarbeitung, Entitätsextraktion, Objekterkennung",
      "RPA-Workflows mit Desktop-Flows für Legacy-Anwendungsintegration entwerfen",
      "UAT-Strategie definieren: Sandbox-Umgebung, Produktionsdatenkopie, Test-Akzeptanzkriterien",
      "Power Platform-Adoptionsmuster verstehen: CoE Starter Kit, Governance-Frameworks",
      "End-to-End-Lösungsdesign üben: von Anforderungen zu bereitgestellter Architektur"
    ]
  }
];
