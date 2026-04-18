import type { QuizQuestion } from '@/types/quiz';

export const pl600Questions: QuizQuestion[] = [
  // ==================== Solution Envisioning (15) ====================
  {
    "id": "pl6-q1",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A retail company wants to digitize its order management process. They already use Dynamics 365 Sales and have a custom ERP system. As a Solution Architect, what should you do FIRST?",
    "promptDe": "Ein Einzelhandelsunternehmen moechte seinen Bestellprozess digitalisieren. Es nutzt bereits Dynamics 365 Sales und ein eigenes ERP-System. Was sollten Sie als Solution Architect ZUERST tun?",
    "hint": "Think about the earliest phase of solution architecture engagement.",
    "hintDe": "Denke an die frueheste Phase des Solution-Architektur-Engagements.",
    "options": [
      { "id": "opt-0", "text": "Evaluate current business processes and capture requirements through stakeholder workshops", "textDe": "Aktuelle Geschaeftsprozesse bewerten und Anforderungen durch Stakeholder-Workshops erfassen", "isCorrect": true, "explanation": "The Solution Architect must first understand the current state, business processes, and requirements before designing any solution. This is the foundation of the envisioning phase.", "explanationDe": "Der Solution Architect muss zuerst den Ist-Zustand, Geschaeftsprozesse und Anforderungen verstehen, bevor er eine Loesung entwirft. Dies ist die Grundlage der Envisioning-Phase." },
      { "id": "opt-1", "text": "Design the integration architecture between D365 Sales and the ERP system", "textDe": "Die Integrationsarchitektur zwischen D365 Sales und dem ERP-System entwerfen", "isCorrect": false, "explanation": "Integration design comes after requirements are captured and the solution scope is defined. Jumping to design without understanding requirements leads to misaligned solutions.", "explanationDe": "Integrationsdesign kommt nach der Anforderungserfassung und Scopedefinition. Ohne Anforderungsverstaendnis direkt ins Design zu springen fuehrt zu fehlausgerichteten Loesungen." },
      { "id": "opt-2", "text": "Create a proof of concept for the order management app", "textDe": "Einen Proof of Concept fuer die Bestellmanagement-App erstellen", "isCorrect": false, "explanation": "A PoC is valuable but premature without first understanding what needs to be built. Requirements and fit/gap analysis should precede any prototyping.", "explanationDe": "Ein PoC ist wertvoll, aber verfrueht ohne zuerst zu verstehen was gebaut werden muss. Anforderungen und Fit/Gap-Analyse sollten vor jedem Prototyping stehen." },
      { "id": "opt-3", "text": "Set up development, test, and production environments", "textDe": "Entwicklungs-, Test- und Produktionsumgebungen einrichten", "isCorrect": false, "explanation": "Environment setup is an implementation activity. The environment strategy should be designed after the solution architecture is defined, not before requirements are gathered.", "explanationDe": "Umgebungseinrichtung ist eine Implementierungsaktivitaet. Die Umgebungsstrategie sollte nach der Loesungsarchitektur definiert werden, nicht vor der Anforderungserfassung." },
      { "id": "opt-4", "text": "Estimate licensing costs for the proposed solution", "textDe": "Lizenzkosten fuer die vorgeschlagene Loesung schaetzen", "isCorrect": false, "explanation": "Licensing estimation requires knowing which components will be used, which is determined after requirements capture and solution design.", "explanationDe": "Lizenzschaetzung erfordert Wissen darueber welche Komponenten verwendet werden, was erst nach Anforderungserfassung und Loesungsdesign feststeht." }
    ],
    "explanation": "In the PL-600 exam, the Solution Architect's first responsibility is to perform solution envisioning by understanding current business processes, identifying stakeholders, and capturing requirements before any design or implementation work begins.",
    "explanationDe": "In der PL-600-Pruefung ist die erste Verantwortung des Solution Architects das Solution Envisioning: aktuelle Geschaeftsprozesse verstehen, Stakeholder identifizieren und Anforderungen erfassen, bevor Design- oder Implementierungsarbeiten beginnen.",
    "learnRef": { "title": "PL-600: Solution Architect role", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Solution-Architect-Rolle", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },
  {
    "id": "pl6-q2",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "During a fit/gap analysis, you discover that 80% of requirements can be met with out-of-the-box Dynamics 365 Customer Service features, but a critical workflow requires real-time integration with a legacy mainframe system. What should you recommend?",
    "promptDe": "Bei einer Fit/Gap-Analyse stellen Sie fest, dass 80% der Anforderungen mit Standard-Dynamics-365-Customer-Service-Features erfuellt werden koennen, aber ein kritischer Workflow Echtzeit-Integration mit einem Legacy-Mainframe-System erfordert. Was sollten Sie empfehlen?",
    "hint": "Consider the balance between leveraging existing platform capabilities and addressing the gap.",
    "hintDe": "Beruecksichtige das Gleichgewicht zwischen der Nutzung vorhandener Plattformfaehigkeiten und der Schliessung der Luecke.",
    "options": [
      { "id": "opt-0", "text": "Use D365 Customer Service for the 80% and design an Azure-based middleware layer for the mainframe integration", "textDe": "D365 Customer Service fuer die 80% nutzen und eine Azure-basierte Middleware-Schicht fuer die Mainframe-Integration entwerfen", "isCorrect": true, "explanation": "This leverages the platform's strengths while addressing the gap with appropriate middleware. Azure Service Bus, Logic Apps, or API Management can bridge Power Platform and legacy systems.", "explanationDe": "Dies nutzt die Plattformstaerken und schliesst die Luecke mit geeigneter Middleware. Azure Service Bus, Logic Apps oder API Management koennen Power Platform und Legacy-Systeme verbinden." },
      { "id": "opt-1", "text": "Build a fully custom solution to ensure the mainframe integration works seamlessly", "textDe": "Eine vollstaendig benutzerdefinierte Loesung erstellen um die Mainframe-Integration nahtlos zu gewaehrleisten", "isCorrect": false, "explanation": "Building everything custom wastes the 80% fit with D365 and dramatically increases cost, time, and maintenance burden.", "explanationDe": "Alles benutzerdefiniert zu bauen verschwendet die 80%-Passung mit D365 und erhoecht Kosten, Zeit und Wartungsaufwand drastisch." },
      { "id": "opt-2", "text": "Recommend replacing the legacy mainframe system before starting the Power Platform project", "textDe": "Empfehlen das Legacy-Mainframe-System vor dem Power Platform-Projekt zu ersetzen", "isCorrect": false, "explanation": "Mainframe replacement is a massive undertaking that would delay the project indefinitely. A good architect addresses integration with the current landscape.", "explanationDe": "Mainframe-Ersatz ist ein massives Unterfangen das das Projekt auf unbestimmte Zeit verzoegern wuerde. Ein guter Architekt adressiert die Integration mit der aktuellen Landschaft." },
      { "id": "opt-3", "text": "Use Power Automate desktop flows (RPA) to interact with the mainframe UI", "textDe": "Power Automate Desktop Flows (RPA) verwenden um mit der Mainframe-UI zu interagieren", "isCorrect": false, "explanation": "RPA is a fallback for systems without APIs. For real-time critical workflows, it introduces fragility and latency. An API/middleware approach is more robust and scalable.", "explanationDe": "RPA ist ein Fallback fuer Systeme ohne APIs. Fuer echtzeitkritische Workflows fuehrt es zu Fragilitaet und Latenz. Ein API-/Middleware-Ansatz ist robuster und skalierbarer." }
    ],
    "explanation": "A Solution Architect should maximize platform value (D365 for the 80%) while designing appropriate integration patterns for gaps. Azure middleware provides reliable, scalable connectivity to legacy systems.",
    "explanationDe": "Ein Solution Architect sollte den Plattformwert maximieren (D365 fuer die 80%) und gleichzeitig geeignete Integrationsmuster fuer Luecken entwerfen. Azure-Middleware bietet zuverlaessige, skalierbare Konnektivitaet zu Legacy-Systemen.",
    "learnRef": { "title": "PL-600: Integration patterns", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Integrationsmuster", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },
  {
    "id": "pl6-q3",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A healthcare organization requires that all patient data remains within the EU, response times stay under 2 seconds, and the system supports 5,000 concurrent users. Which type of requirements are these?",
    "promptDe": "Eine Gesundheitsorganisation verlangt, dass alle Patientendaten innerhalb der EU bleiben, Antwortzeiten unter 2 Sekunden liegen und das System 5.000 gleichzeitige Benutzer unterstuetzt. Welche Art von Anforderungen sind das?",
    "hint": "These requirements describe quality attributes rather than specific features.",
    "hintDe": "Diese Anforderungen beschreiben Qualitaetsmerkmale statt spezifischer Features.",
    "options": [
      { "id": "opt-0", "text": "Non-functional requirements", "textDe": "Nicht-funktionale Anforderungen", "isCorrect": true, "explanation": "Data residency, performance thresholds, and scalability targets are non-functional requirements — they define HOW the system should behave, not WHAT it does.", "explanationDe": "Datenresidenz, Performance-Schwellenwerte und Skalierbarkeitsziele sind nicht-funktionale Anforderungen — sie definieren WIE das System sich verhalten soll, nicht WAS es tut." },
      { "id": "opt-1", "text": "Functional requirements", "textDe": "Funktionale Anforderungen", "isCorrect": false, "explanation": "Functional requirements describe what the system must do (features, business rules). Data residency and performance are quality attributes, not features.", "explanationDe": "Funktionale Anforderungen beschreiben was das System tun muss (Features, Geschaeftsregeln). Datenresidenz und Performance sind Qualitaetsmerkmale, keine Features." },
      { "id": "opt-2", "text": "Technical constraints", "textDe": "Technische Einschraenkungen", "isCorrect": false, "explanation": "While related, technical constraints are a subset of non-functional requirements. The PL-600 exam uses the broader category of non-functional requirements.", "explanationDe": "Obwohl verwandt, sind technische Einschraenkungen eine Unterkategorie nicht-funktionaler Anforderungen. Die PL-600-Pruefung verwendet die breitere Kategorie." },
      { "id": "opt-3", "text": "Business rules", "textDe": "Geschaeftsregeln", "isCorrect": false, "explanation": "Business rules define data validation and process logic (e.g. 'approvals over $10K need VP sign-off'). Performance and residency are system quality attributes.", "explanationDe": "Geschaeftsregeln definieren Datenvalidierung und Prozesslogik (z.B. 'Genehmigungen ueber 10K benoetigen VP-Freigabe'). Performance und Residenz sind Systemqualitaetsmerkmale." }
    ],
    "explanation": "Non-functional requirements define system quality attributes: performance, scalability, security, compliance, and availability. A Solution Architect must capture both functional and non-functional requirements during the envisioning phase.",
    "explanationDe": "Nicht-funktionale Anforderungen definieren Systemqualitaetsmerkmale: Performance, Skalierbarkeit, Sicherheit, Compliance und Verfuegbarkeit. Ein Solution Architect muss in der Envisioning-Phase sowohl funktionale als auch nicht-funktionale Anforderungen erfassen.",
    "learnRef": { "title": "PL-600: Capture requirements", "url": "https://learn.microsoft.com/en-us/training/paths/solution-architect-data/" },
    "learnRefDe": { "title": "PL-600: Anforderungen erfassen", "url": "https://learn.microsoft.com/de-de/training/paths/solution-architect-data/" }
  },
  {
    "id": "pl6-q4",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A company has three separate systems storing customer data: a CRM, an ERP, and a marketing platform. The Solution Architect needs to assess the current state. What should they focus on FIRST?",
    "promptDe": "Ein Unternehmen hat drei separate Systeme die Kundendaten speichern: ein CRM, ein ERP und eine Marketing-Plattform. Der Solution Architect muss den Ist-Zustand bewerten. Worauf sollte er sich ZUERST konzentrieren?",
    "hint": "Think about what you need to understand before you can design a unified solution.",
    "hintDe": "Ueberlege was du verstehen musst, bevor du eine einheitliche Loesung entwerfen kannst.",
    "options": [
      { "id": "opt-0", "text": "Identify all data sources, map data flows between systems, and define quality standards for existing data", "textDe": "Alle Datenquellen identifizieren, Datenfluesse zwischen Systemen abbilden und Qualitaetsstandards fuer bestehende Daten definieren", "isCorrect": true, "explanation": "Understanding data sources, flows, and quality is essential for designing integrations and migrations. Without this, the architect cannot assess migration effort or identify data conflicts.", "explanationDe": "Das Verstaendnis von Datenquellen, Fluessen und Qualitaet ist essentiell fuer das Design von Integrationen und Migrationen. Ohne dies kann der Architekt weder den Migrationsaufwand bewerten noch Datenkonflikte identifizieren." },
      { "id": "opt-1", "text": "Immediately design a master data management strategy with Dataverse as the single source of truth", "textDe": "Sofort eine Master-Data-Management-Strategie mit Dataverse als Single Source of Truth entwerfen", "isCorrect": false, "explanation": "Designing the target state before understanding the current state is premature. You need to assess what data exists and where before deciding on a consolidation strategy.", "explanationDe": "Den Zielzustand vor dem Verstaendnis des Ist-Zustands zu entwerfen ist verfrueht. Sie muessen zuerst bewerten welche Daten wo existieren, bevor Sie eine Konsolidierungsstrategie festlegen." },
      { "id": "opt-2", "text": "Recommend replacing all three systems with Dynamics 365", "textDe": "Empfehlen alle drei Systeme durch Dynamics 365 zu ersetzen", "isCorrect": false, "explanation": "Recommending replacement without assessing fit, cost, and migration complexity is irresponsible. Each system may serve a purpose that D365 doesn't fully cover.", "explanationDe": "Ersatz ohne Bewertung von Passung, Kosten und Migrationskomplexitaet zu empfehlen ist unverantwortlich. Jedes System kann einen Zweck erfuellen den D365 nicht vollstaendig abdeckt." },
      { "id": "opt-3", "text": "Focus exclusively on the CRM system since it's most relevant to Power Platform", "textDe": "Sich ausschliesslich auf das CRM-System konzentrieren da es fuer Power Platform am relevantesten ist", "isCorrect": false, "explanation": "Ignoring systems in scope leads to integration gaps and data silos. All relevant systems must be assessed during the envisioning phase.", "explanationDe": "Systeme im Scope zu ignorieren fuehrt zu Integrationsluecken und Datensilos. Alle relevanten Systeme muessen in der Envisioning-Phase bewertet werden." }
    ],
    "explanation": "Identifying existing solutions and systems requires evaluating the enterprise architecture, identifying ALL data sources, and defining use cases and quality standards for existing data. This is a core skill in the PL-600 envisioning domain.",
    "explanationDe": "Die Identifikation bestehender Loesungen und Systeme erfordert die Bewertung der Enterprise Architecture, die Identifikation ALLER Datenquellen und die Definition von Use Cases und Qualitaetsstandards fuer bestehende Daten.",
    "learnRef": { "title": "PL-600: Identify existing solutions", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Bestehende Loesungen identifizieren", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },
  {
    "id": "pl6-q5",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A financial services company requires a case management solution. Dynamics 365 Customer Service covers 90% of their needs. The remaining 10% includes a proprietary risk scoring algorithm. What approach best addresses this gap?",
    "promptDe": "Ein Finanzdienstleistungsunternehmen benoetigt eine Case-Management-Loesung. Dynamics 365 Customer Service deckt 90% der Beduerfnisse. Die restlichen 10% umfassen einen proprietaeren Risikobewertungsalgorithmus. Welcher Ansatz schliesst diese Luecke am besten?",
    "hint": "Consider how to extend D365 without replacing it.",
    "hintDe": "Ueberlege wie D365 erweitert werden kann ohne es zu ersetzen.",
    "options": [
      { "id": "opt-0", "text": "Use D365 Customer Service as the base and integrate the risk algorithm via an Azure Function called from a Power Automate flow or plugin", "textDe": "D365 Customer Service als Basis verwenden und den Risikoalgorithmus ueber eine Azure Function integrieren die aus einem Power Automate Flow oder Plugin aufgerufen wird", "isCorrect": true, "explanation": "This maximizes platform value while extending functionality. Azure Functions can host complex logic and be called from Power Platform, keeping the algorithm maintainable and decoupled.", "explanationDe": "Dies maximiert den Plattformwert bei gleichzeitiger Funktionserweiterung. Azure Functions koennen komplexe Logik hosten und von Power Platform aufgerufen werden, wodurch der Algorithmus wartbar und entkoppelt bleibt." },
      { "id": "opt-1", "text": "Build the entire solution custom using Power Apps canvas apps to have full control", "textDe": "Die gesamte Loesung benutzerdefiniert mit Power Apps Canvas-Apps erstellen um volle Kontrolle zu haben", "isCorrect": false, "explanation": "Rebuilding 90% of existing D365 functionality in canvas apps is wasteful. Canvas apps lack the data-rich features of model-driven apps for case management.", "explanationDe": "90% der vorhandenen D365-Funktionalitaet in Canvas-Apps nachzubauen ist verschwenderisch. Canvas-Apps fehlen die datenreichen Features modellgesteuerter Apps fuer Case Management." },
      { "id": "opt-2", "text": "Search AppSource for a third-party risk scoring solution and replace the proprietary algorithm", "textDe": "AppSource nach einer Drittanbieter-Risikobewertungsloesung durchsuchen und den proprietaeren Algorithmus ersetzen", "isCorrect": false, "explanation": "The proprietary algorithm is a competitive differentiator. Replacing it with a generic solution may not meet the company's specific risk assessment needs.", "explanationDe": "Der proprietaere Algorithmus ist ein Wettbewerbsvorteil. Ihn durch eine generische Loesung zu ersetzen erfuellt moeglicherweise nicht die spezifischen Risikobewertungsbeduerfnisse." },
      { "id": "opt-3", "text": "Implement the risk scoring as a Dataverse business rule", "textDe": "Die Risikobewertung als Dataverse-Geschaeftsregel implementieren", "isCorrect": false, "explanation": "Business rules are limited to simple field validations and visibility. A proprietary scoring algorithm requires server-side compute that exceeds business rule capabilities.", "explanationDe": "Geschaeftsregeln sind auf einfache Feldvalidierungen und Sichtbarkeit beschraenkt. Ein proprietaerer Bewertungsalgorithmus erfordert serverseitige Berechnung die die Faehigkeiten von Geschaeftsregeln uebersteigt." }
    ],
    "explanation": "When a fit/gap analysis shows a high fit percentage, the architect should leverage the platform and address gaps with targeted extensions. Azure Functions provide a scalable, decoupled way to host custom business logic.",
    "explanationDe": "Wenn eine Fit/Gap-Analyse einen hohen Passungsgrad zeigt, sollte der Architekt die Plattform nutzen und Luecken mit gezielten Erweiterungen schliessen. Azure Functions bieten eine skalierbare, entkoppelte Moeglichkeit fuer benutzerdefinierte Geschaeftslogik.",
    "learnRef": { "title": "PL-600: Address functional gaps", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins" },
    "learnRefDe": { "title": "PL-600: Funktionale Luecken schliessen", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/plug-ins" }
  },
  {
    "id": "pl6-q6",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "During an organizational assessment, you identify that the company has no IT governance for Power Platform and makers are creating apps without oversight. What risk factor should you highlight?",
    "promptDe": "Bei einer Organisationsbewertung stellen Sie fest, dass das Unternehmen keine IT-Governance fuer Power Platform hat und Maker ohne Aufsicht Apps erstellen. Welchen Risikofaktor sollten Sie hervorheben?",
    "hint": "Think about what happens when there's no governance in a low-code platform.",
    "hintDe": "Ueberlege was passiert wenn es keine Governance auf einer Low-Code-Plattform gibt.",
    "options": [
      { "id": "opt-0", "text": "Shadow IT and data sprawl risk — ungoverned apps may expose sensitive data or violate DLP policies", "textDe": "Shadow-IT- und Datenwucherungsrisiko — unregulierte Apps koennen sensible Daten exponieren oder DLP-Richtlinien verletzen", "isCorrect": true, "explanation": "Ungoverned Power Platform usage creates security risks, compliance issues, and orphaned resources. The architect should recommend establishing a CoE and DLP policies.", "explanationDe": "Unregulierte Power Platform-Nutzung schafft Sicherheitsrisiken, Compliance-Probleme und verwaiste Ressourcen. Der Architekt sollte die Einrichtung eines CoE und DLP-Richtlinien empfehlen." },
      { "id": "opt-1", "text": "Performance degradation — too many apps slow down the platform", "textDe": "Performance-Verschlechterung — zu viele Apps verlangsamen die Plattform", "isCorrect": false, "explanation": "Power Platform scales per-environment. The number of apps alone doesn't cause performance issues. The real risk is governance and security, not performance.", "explanationDe": "Power Platform skaliert pro Umgebung. Die Anzahl der Apps allein verursacht keine Performance-Probleme. Das eigentliche Risiko ist Governance und Sicherheit, nicht Performance." },
      { "id": "opt-2", "text": "Licensing cost overrun — every app consumes additional licenses", "textDe": "Lizenzkostenueberschreitung — jede App verbraucht zusaetzliche Lizenzen", "isCorrect": false, "explanation": "While licensing is a concern, it's a consequence of ungoverned growth, not the primary risk. Security and data exposure are more critical.", "explanationDe": "Obwohl Lizenzierung ein Anliegen ist, ist es eine Folge unkontrollierten Wachstums, nicht das primaere Risiko. Sicherheit und Datenexponierung sind kritischer." },
      { "id": "opt-3", "text": "Technical debt — apps built without standards will need to be rebuilt", "textDe": "Technische Schulden — Apps ohne Standards muessen neu gebaut werden", "isCorrect": false, "explanation": "Technical debt is a valid concern but secondary to the immediate risk of data exposure and compliance violations from ungoverned apps.", "explanationDe": "Technische Schulden sind ein berechtigtes Anliegen, aber sekundaer gegenueber dem unmittelbaren Risiko der Datenexponierung und Compliance-Verstoesse durch unregulierte Apps." }
    ],
    "explanation": "Assessing organizational risk factors is a key skill for Solution Architects. Ungoverned Power Platform usage creates shadow IT with data security and compliance risks. Establishing a Center of Excellence (CoE) and DLP policies is the recommended remediation.",
    "explanationDe": "Die Bewertung organisatorischer Risikofaktoren ist eine Kernkompetenz fuer Solution Architects. Unregulierte Power Platform-Nutzung schafft Shadow IT mit Datensicherheits- und Compliance-Risiken.",
    "learnRef": { "title": "PL-600: Center of Excellence", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/coe/starter-kit" },
    "learnRefDe": { "title": "PL-600: Center of Excellence", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/coe/starter-kit" }
  },
  {
    "id": "pl6-q7",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A client asks you to estimate the migration effort from their on-premises Dynamics CRM 2016 to Dynamics 365 online. Which factor has the HIGHEST impact on migration complexity?",
    "promptDe": "Ein Kunde bittet Sie den Migrationsaufwand von seinem lokalen Dynamics CRM 2016 zu Dynamics 365 Online zu schaetzen. Welcher Faktor hat den HOECHSTEN Einfluss auf die Migrationskomplexitaet?",
    "hint": "Think about what makes a migration difficult beyond just moving data.",
    "hintDe": "Ueberlege was eine Migration ueber das reine Datenverschieben hinaus schwierig macht.",
    "options": [
      { "id": "opt-0", "text": "The volume and complexity of custom plugins, workflows, and JavaScript customizations that may not be compatible with online", "textDe": "Volumen und Komplexitaet benutzerdefinierter Plugins, Workflows und JavaScript-Anpassungen die moeglicherweise nicht online-kompatibel sind", "isCorrect": true, "explanation": "Custom code is the highest risk factor. On-premises customizations using deprecated APIs, direct SQL access, or unsupported patterns require significant rework for the cloud.", "explanationDe": "Benutzerdefinierter Code ist der hoechste Risikofaktor. Lokale Anpassungen mit veralteten APIs, direktem SQL-Zugriff oder nicht unterstuetzten Mustern erfordern erhebliche Nacharbeit fuer die Cloud." },
      { "id": "opt-1", "text": "The total number of user records in the database", "textDe": "Die Gesamtzahl der Benutzerdatensaetze in der Datenbank", "isCorrect": false, "explanation": "Data volume affects migration time but is typically handled with bulk data tools. Code compatibility is a much more complex challenge than data volume.", "explanationDe": "Datenvolumen beeinflusst die Migrationszeit, wird aber typischerweise mit Massendaten-Tools behandelt. Code-Kompatibilitaet ist eine viel komplexere Herausforderung." },
      { "id": "opt-2", "text": "The number of environments that need to be created in the cloud", "textDe": "Die Anzahl der Umgebungen die in der Cloud erstellt werden muessen", "isCorrect": false, "explanation": "Creating environments is straightforward. The complexity lies in migrating customizations and ensuring they work in the cloud model.", "explanationDe": "Umgebungserstellung ist unkompliziert. Die Komplexitaet liegt in der Migration von Anpassungen und der Sicherstellung ihrer Funktion im Cloud-Modell." },
      { "id": "opt-3", "text": "The current Dynamics CRM version number", "textDe": "Die aktuelle Dynamics CRM-Versionsnummer", "isCorrect": false, "explanation": "While older versions may have more deprecated features, the version alone doesn't determine complexity. The customization footprint is the primary driver.", "explanationDe": "Obwohl aeltere Versionen mehr veraltete Features haben koennen, bestimmt die Version allein nicht die Komplexitaet. Der Anpassungsumfang ist der primaere Treiber." }
    ],
    "explanation": "When estimating migration efforts, the Solution Architect must assess custom code compatibility as the highest-risk factor. Direct SQL, deprecated APIs, and unsupported extensibility patterns require analysis and potential rewrite.",
    "explanationDe": "Bei der Schaetzung des Migrationsaufwands muss der Solution Architect die Code-Kompatibilitaet als hoechsten Risikofaktor bewerten.",
    "learnRef": { "title": "PL-600: Migration planning", "url": "https://learn.microsoft.com/en-us/power-platform/alm/overview-alm" },
    "learnRefDe": { "title": "PL-600: Migrationsplanung", "url": "https://learn.microsoft.com/de-de/power-platform/alm/overview-alm" }
  },
  {
    "id": "pl6-q8",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "multi-choice",
    "prompt": "You are defining key success criteria for a Power Platform implementation at a manufacturing company. Which THREE metrics would be most appropriate to track?",
    "promptDe": "Sie definieren Erfolgskriterien fuer eine Power Platform-Implementierung bei einem Fertigungsunternehmen. Welche DREI Metriken waeren am geeignetsten zu verfolgen?",
    "hint": "Success criteria should be measurable and tied to business outcomes.",
    "hintDe": "Erfolgskriterien sollten messbar sein und an Geschaeftsergebnisse gebunden.",
    "options": [
      { "id": "opt-0", "text": "Reduction in average order processing time", "textDe": "Reduzierung der durchschnittlichen Bestellbearbeitungszeit", "isCorrect": true, "explanation": "Measurable process improvement directly tied to the business goal of operational efficiency.", "explanationDe": "Messbare Prozessverbesserung direkt verbunden mit dem Geschaeftsziel der operativen Effizienz." },
      { "id": "opt-1", "text": "User adoption rate measured by monthly active users", "textDe": "Benutzeradoptionsrate gemessen an monatlich aktiven Benutzern", "isCorrect": true, "explanation": "User adoption is a critical success metric — a solution that isn't used delivers no value regardless of technical quality.", "explanationDe": "Benutzeradoption ist eine kritische Erfolgsmetrik — eine Loesung die nicht genutzt wird liefert keinen Wert unabhaengig von technischer Qualitaet." },
      { "id": "opt-2", "text": "Number of automated workflows replacing manual tasks", "textDe": "Anzahl automatisierter Workflows die manuelle Aufgaben ersetzen", "isCorrect": true, "explanation": "Automation count directly measures the solution's impact on reducing manual work and operational costs.", "explanationDe": "Die Automatisierungsanzahl misst direkt den Einfluss der Loesung auf die Reduzierung manueller Arbeit und Betriebskosten." },
      { "id": "opt-3", "text": "Total number of Dataverse tables created", "textDe": "Gesamtzahl erstellter Dataverse-Tabellen", "isCorrect": false, "explanation": "Table count is a technical metric with no business correlation. More tables don't equal more value.", "explanationDe": "Tabellenanzahl ist eine technische Metrik ohne Geschaeftskorrelation. Mehr Tabellen bedeuten nicht mehr Wert." },
      { "id": "opt-4", "text": "Number of environments provisioned", "textDe": "Anzahl bereitgestellter Umgebungen", "isCorrect": false, "explanation": "Environment count is infrastructure, not a business success metric. It says nothing about whether the solution delivers value.", "explanationDe": "Umgebungsanzahl ist Infrastruktur, keine Geschaeftserfolgsmetrik. Sie sagt nichts darueber aus ob die Loesung Wert liefert." }
    ],
    "explanation": "Key success criteria must be measurable, business-relevant, and outcome-focused. Process efficiency, user adoption, and automation impact are strong indicators of solution success.",
    "explanationDe": "Erfolgskriterien muessen messbar, geschaeftsrelevant und ergebnisorientiert sein. Prozesseffizienz, Benutzeradoption und Automatisierungsauswirkung sind starke Indikatoren fuer Loesungserfolg.",
    "learnRef": { "title": "PL-600: Success criteria", "url": "https://learn.microsoft.com/en-us/training/paths/solution-architect-data/" },
    "learnRefDe": { "title": "PL-600: Erfolgskriterien", "url": "https://learn.microsoft.com/de-de/training/paths/solution-architect-data/" }
  },
  {
    "id": "pl6-q9",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A global logistics company needs a field service solution. They already own Microsoft 365 E5 licenses. The Solution Architect should recommend using Dynamics 365 Field Service instead of building a custom Power Apps solution primarily because:",
    "promptDe": "Ein globales Logistikunternehmen benoetigt eine Field-Service-Loesung. Es besitzt bereits Microsoft 365 E5-Lizenzen. Der Solution Architect sollte Dynamics 365 Field Service anstelle einer benutzerdefinierten Power Apps-Loesung empfehlen, weil:",
    "hint": "Think about what Dynamics 365 Field Service provides out of the box.",
    "hintDe": "Ueberlege was Dynamics 365 Field Service standardmaessig bietet.",
    "options": [
      { "id": "opt-0", "text": "D365 Field Service provides scheduling optimization, mobile offline, IoT integration, and resource management that would take months to rebuild", "textDe": "D365 Field Service bietet Terminoptimierung, mobilen Offline-Modus, IoT-Integration und Ressourcenmanagement die Monate dauern wuerden nachzubauen", "isCorrect": true, "explanation": "D365 Field Service includes complex, proven capabilities like Resource Scheduling Optimization (RSO) and IoT alerts that are impractical to rebuild in Power Apps.", "explanationDe": "D365 Field Service enthaelt komplexe, bewaehrte Faehigkeiten wie Resource Scheduling Optimization (RSO) und IoT-Alerts die in Power Apps nicht praktikabel nachzubauen sind." },
      { "id": "opt-1", "text": "The M365 E5 license already includes D365 Field Service", "textDe": "Die M365 E5-Lizenz enthaelt bereits D365 Field Service", "isCorrect": false, "explanation": "M365 E5 does NOT include Dynamics 365 licenses. D365 Field Service requires separate licensing. This is a common misconception.", "explanationDe": "M365 E5 enthaelt KEINE Dynamics 365-Lizenzen. D365 Field Service erfordert separate Lizenzierung. Dies ist ein haeufiges Missverstaendnis." },
      { "id": "opt-2", "text": "Custom Power Apps solutions cannot be used on mobile devices", "textDe": "Benutzerdefinierte Power Apps-Loesungen koennen nicht auf mobilen Geraeten verwendet werden", "isCorrect": false, "explanation": "Power Apps canvas apps work well on mobile. The advantage of D365 is its purpose-built field service features, not mobile capability.", "explanationDe": "Power Apps Canvas-Apps funktionieren gut auf Mobilgeraeten. Der Vorteil von D365 sind die zweckmaessig gebauten Field-Service-Features, nicht die mobile Faehigkeit." },
      { "id": "opt-3", "text": "Power Apps has a limit of 500 users per app", "textDe": "Power Apps hat ein Limit von 500 Benutzern pro App", "isCorrect": false, "explanation": "There is no such user limit for Power Apps. The decision should be based on feature fit and total cost of ownership, not fictional constraints.", "explanationDe": "Es gibt kein solches Benutzerlimit fuer Power Apps. Die Entscheidung sollte auf Feature-Passung und Gesamtbetriebskosten basieren, nicht auf fiktiven Einschraenkungen." }
    ],
    "explanation": "A Solution Architect must evaluate Dynamics 365 apps and AppSource options when they align with business processes. D365 Field Service provides mature, purpose-built capabilities that would be prohibitively expensive to rebuild.",
    "explanationDe": "Ein Solution Architect muss Dynamics 365-Apps und AppSource-Optionen bewerten wenn sie zu Geschaeftsprozessen passen. D365 Field Service bietet ausgereifte, zweckmaessige Faehigkeiten deren Neubau unverhaeltnismaessig teuer waere.",
    "learnRef": { "title": "PL-600: Evaluate D365 options", "url": "https://learn.microsoft.com/en-us/dynamics365/field-service/overview" },
    "learnRefDe": { "title": "PL-600: D365-Optionen bewerten", "url": "https://learn.microsoft.com/de-de/dynamics365/field-service/overview" }
  },
  {
    "id": "pl6-q10",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A Solution Architect identifies that the project scope keeps expanding during the design phase. Stakeholders continue adding new features. What should the architect do?",
    "promptDe": "Ein Solution Architect stellt fest, dass der Projektumfang waehrend der Designphase staendig waechst. Stakeholder fuegen kontinuierlich neue Features hinzu. Was sollte der Architekt tun?",
    "hint": "Think about project governance and controlled delivery.",
    "hintDe": "Denke an Projekt-Governance und kontrollierte Lieferung.",
    "options": [
      { "id": "opt-0", "text": "Implement a formal change control process and propose phased delivery with an MVP for the first release", "textDe": "Einen formalen Aenderungskontrollprozess implementieren und phasenweise Lieferung mit einem MVP fuer das erste Release vorschlagen", "isCorrect": true, "explanation": "Scope creep is managed through change control and phased delivery. An MVP ensures core value is delivered first while additional features are planned for later phases.", "explanationDe": "Scope Creep wird durch Aenderungskontrolle und phasenweise Lieferung gemanagt. Ein MVP stellt sicher dass der Kernwert zuerst geliefert wird waehrend zusaetzliche Features fuer spaetere Phasen geplant werden." },
      { "id": "opt-1", "text": "Accept all new requirements to keep stakeholders satisfied", "textDe": "Alle neuen Anforderungen akzeptieren um Stakeholder zufriedenzustellen", "isCorrect": false, "explanation": "Accepting unlimited scope leads to project failure through delayed delivery, budget overruns, and technical debt.", "explanationDe": "Unbegrenzten Scope zu akzeptieren fuehrt zu Projektscheitern durch verzoegerte Lieferung, Budgetueberschreitungen und technische Schulden." },
      { "id": "opt-2", "text": "Escalate the issue to project management and stop all design work", "textDe": "Das Problem an das Projektmanagement eskalieren und alle Designarbeiten stoppen", "isCorrect": false, "explanation": "While escalation may be needed, stopping work is extreme. The architect should propose a solution (change control + phased delivery) rather than just highlighting the problem.", "explanationDe": "Obwohl Eskalation noetig sein kann, ist das Stoppen der Arbeit extrem. Der Architekt sollte eine Loesung vorschlagen (Aenderungskontrolle + phasenweise Lieferung) statt nur das Problem hervorzuheben." },
      { "id": "opt-3", "text": "Document the new requirements but secretly exclude them from the design", "textDe": "Die neuen Anforderungen dokumentieren aber heimlich vom Design ausschliessen", "isCorrect": false, "explanation": "Lack of transparency damages trust with stakeholders. Requirements should be openly prioritized and planned, not hidden.", "explanationDe": "Mangelnde Transparenz schaedigt das Vertrauen der Stakeholder. Anforderungen sollten offen priorisiert und geplant werden, nicht versteckt." }
    ],
    "explanation": "Managing scope is a critical Solution Architect responsibility. Phased delivery with an MVP and formal change control ensures the project delivers value on time while managing stakeholder expectations.",
    "explanationDe": "Scope-Management ist eine kritische Verantwortung des Solution Architects. Phasenweise Lieferung mit MVP und formaler Aenderungskontrolle stellt sicher dass das Projekt zeitgerecht Wert liefert.",
    "learnRef": { "title": "PL-600: Determine solution scope", "url": "https://learn.microsoft.com/en-us/training/paths/solution-architect-data/" },
    "learnRefDe": { "title": "PL-600: Loesungsumfang bestimmen", "url": "https://learn.microsoft.com/de-de/training/paths/solution-architect-data/" }
  },
  // ==================== Solution Architecture (10) ====================
  {
    "id": "pl6-q11",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "You are designing the environment strategy for a large enterprise. They have 3 development teams working on different modules simultaneously. What is the recommended environment topology?",
    "promptDe": "Sie entwerfen die Umgebungsstrategie fuer ein grosses Unternehmen. Es gibt 3 Entwicklungsteams die gleichzeitig an verschiedenen Modulen arbeiten. Was ist die empfohlene Umgebungstopologie?",
    "hint": "Think about isolation for parallel development and a structured promotion path.",
    "hintDe": "Denke an Isolation fuer parallele Entwicklung und einen strukturierten Promotion-Pfad.",
    "options": [
      { "id": "opt-0", "text": "One dev environment per team, a shared integration/test environment, a UAT environment, and production — with managed solutions promoted via pipelines", "textDe": "Eine Dev-Umgebung pro Team, eine gemeinsame Integrations-/Testumgebung, eine UAT-Umgebung und Produktion — mit verwalteten Loesungen die ueber Pipelines promoted werden", "isCorrect": true, "explanation": "Per-team dev environments prevent merge conflicts. Integration testing in a shared environment catches cross-module issues. Managed solutions ensure clean deployment to UAT and production.", "explanationDe": "Pro-Team-Dev-Umgebungen verhindern Merge-Konflikte. Integrationstests in einer gemeinsamen Umgebung finden moduluebergreifende Probleme. Verwaltete Loesungen stellen saubere Bereitstellung zu UAT und Produktion sicher." },
      { "id": "opt-1", "text": "A single shared development environment for all teams with production as the second environment", "textDe": "Eine einzige gemeinsame Entwicklungsumgebung fuer alle Teams mit Produktion als zweite Umgebung", "isCorrect": false, "explanation": "Shared dev environments cause solution conflicts between teams. Deploying directly from dev to production skips critical testing stages.", "explanationDe": "Gemeinsame Dev-Umgebungen verursachen Loesungskonflikte zwischen Teams. Direkte Bereitstellung von Dev zu Produktion ueberspringt kritische Teststufen." },
      { "id": "opt-2", "text": "One environment per team with no shared environment — each team deploys independently to production", "textDe": "Eine Umgebung pro Team ohne gemeinsame Umgebung — jedes Team deployed unabhaengig in Produktion", "isCorrect": false, "explanation": "Without integration testing, cross-module conflicts will surface in production. A shared test environment is essential for validating combined solutions.", "explanationDe": "Ohne Integrationstests treten moduluebergreifende Konflikte in Produktion auf. Eine gemeinsame Testumgebung ist essentiell fuer die Validierung kombinierter Loesungen." },
      { "id": "opt-3", "text": "Use sandbox environments for development and reset them weekly to keep them clean", "textDe": "Sandbox-Umgebungen fuer Entwicklung verwenden und sie woechentlich zuruecksetzen um sie sauber zu halten", "isCorrect": false, "explanation": "Weekly resets would destroy in-progress work. Environments should be stable for development, with resets only when intentionally cleaning up.", "explanationDe": "Woechentliche Zuruecksetzungen wuerden laufende Arbeit zerstoeren. Umgebungen sollten fuer die Entwicklung stabil sein, mit Zuruecksetzungen nur bei bewusster Bereinigung." }
    ],
    "explanation": "Environment strategy for parallel teams requires isolated dev environments, shared integration testing, and a structured ALM pipeline. This is a core PL-600 architecture skill.",
    "explanationDe": "Die Umgebungsstrategie fuer parallele Teams erfordert isolierte Dev-Umgebungen, gemeinsame Integrationstests und eine strukturierte ALM-Pipeline.",
    "learnRef": { "title": "PL-600: Environment strategy", "url": "https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm" },
    "learnRefDe": { "title": "PL-600: Umgebungsstrategie", "url": "https://learn.microsoft.com/de-de/power-platform/alm/environment-strategy-alm" }
  },
  {
    "id": "pl6-q12",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A company requires both back-office staff managing complex case data and field workers using a simple mobile checklist. How should the Solution Architect design the app strategy?",
    "promptDe": "Ein Unternehmen benoetigt sowohl Backoffice-Mitarbeiter die komplexe Falldaten verwalten als auch Aussendienstmitarbeiter die eine einfache mobile Checkliste verwenden. Wie sollte der Solution Architect die App-Strategie entwerfen?",
    "hint": "Match app type to user role and task complexity.",
    "hintDe": "Ordne den App-Typ der Benutzerrolle und Aufgabenkomplexitaet zu.",
    "options": [
      { "id": "opt-0", "text": "Model-driven app for back-office (rich forms, views, dashboards) and canvas app for field workers (mobile-optimized, task-focused)", "textDe": "Modellgesteuerte App fuer Backoffice (reichhaltige Formulare, Ansichten, Dashboards) und Canvas-App fuer Aussendienstmitarbeiter (mobiloptimiert, aufgabenfokussiert)", "isCorrect": true, "explanation": "Model-driven apps excel at data-heavy CRUD operations with complex forms. Canvas apps provide pixel-perfect, mobile-first experiences ideal for simple field tasks.", "explanationDe": "Modellgesteuerte Apps eignen sich hervorragend fuer datenintensive CRUD-Operationen mit komplexen Formularen. Canvas-Apps bieten pixelgenaue, Mobile-First-Erlebnisse ideal fuer einfache Feldaufgaben." },
      { "id": "opt-1", "text": "A single model-driven app with responsive design for both user groups", "textDe": "Eine einzige modellgesteuerte App mit responsivem Design fuer beide Benutzergruppen", "isCorrect": false, "explanation": "Model-driven apps are responsive but their form-heavy interface is suboptimal for simple mobile checklists. Different roles benefit from different app types.", "explanationDe": "Modellgesteuerte Apps sind responsive, aber ihre formularreiche Oberflaeche ist suboptimal fuer einfache mobile Checklisten. Verschiedene Rollen profitieren von verschiedenen App-Typen." },
      { "id": "opt-2", "text": "Two separate canvas apps — one for back-office and one for mobile", "textDe": "Zwei separate Canvas-Apps — eine fuer Backoffice und eine fuer Mobil", "isCorrect": false, "explanation": "Canvas apps for complex case management would require rebuilding features (views, dashboards, BPFs) that model-driven apps provide natively.", "explanationDe": "Canvas-Apps fuer komplexes Case Management wuerden das Nachbauen von Features (Ansichten, Dashboards, BPFs) erfordern die modellgesteuerte Apps nativ bieten." },
      { "id": "opt-3", "text": "A Power Pages site for external field workers and a model-driven app for internal staff", "textDe": "Eine Power Pages-Site fuer externe Aussendienstmitarbeiter und eine modellgesteuerte App fuer interne Mitarbeiter", "isCorrect": false, "explanation": "Power Pages is for external-facing websites. Internal field workers should use Power Apps (canvas or model-driven), not a portal.", "explanationDe": "Power Pages ist fuer externe Websites. Interne Aussendienstmitarbeiter sollten Power Apps (Canvas oder modellgesteuert) verwenden, kein Portal." }
    ],
    "explanation": "Designing apps by grouping features based on role is a key PL-600 skill. Model-driven for data-rich back-office, canvas for mobile-first field tasks.",
    "explanationDe": "Apps nach Rollenzuordnung zu entwerfen ist eine Kernkompetenz der PL-600. Modellgesteuert fuer datenreiches Backoffice, Canvas fuer Mobile-First-Feldaufgaben.",
    "learnRef": { "title": "PL-600: App design patterns", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview" },
    "learnRefDe": { "title": "PL-600: App-Designmuster", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/model-driven-app-overview" }
  },
  {
    "id": "pl6-q13",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "An organization has multiple Power Platform solutions developed by different teams. Solution A modifies the Account table and Solution B also customizes the Account table. After deploying both as managed to production, users report missing fields. What is the likely cause?",
    "promptDe": "Eine Organisation hat mehrere Power Platform-Loesungen die von verschiedenen Teams entwickelt wurden. Loesung A modifiziert die Account-Tabelle und Loesung B passt die Account-Tabelle ebenfalls an. Nach der Bereitstellung beider als verwaltet in Produktion berichten Benutzer ueber fehlende Felder. Was ist die wahrscheinliche Ursache?",
    "hint": "Think about how managed solutions interact when they customize the same component.",
    "hintDe": "Ueberlege wie verwaltete Loesungen interagieren wenn sie dieselbe Komponente anpassen.",
    "options": [
      { "id": "opt-0", "text": "Solution layering conflict — the top layer's form definition overwrites the other solution's form customizations", "textDe": "Loesungsschichtungskonflikt — die Definition des obersten Layers ueberschreibt die Formularanpassungen der anderen Loesung", "isCorrect": true, "explanation": "When multiple managed solutions customize the same form, the topmost active layer wins. Fields added by a lower layer may not appear if the top layer defines a different form layout.", "explanationDe": "Wenn mehrere verwaltete Loesungen dasselbe Formular anpassen, gewinnt der oberste aktive Layer. Felder die von einem niedrigeren Layer hinzugefuegt wurden erscheinen moeglicherweise nicht wenn der obere Layer ein anderes Formularlayout definiert." },
      { "id": "opt-1", "text": "The solutions were deployed in the wrong order", "textDe": "Die Loesungen wurden in der falschen Reihenfolge bereitgestellt", "isCorrect": false, "explanation": "While deployment order affects layering, the root issue is overlapping form customizations. A proper architecture would use a shared base solution for common tables.", "explanationDe": "Obwohl die Bereitstellungsreihenfolge die Schichtung beeinflusst, ist das Kernproblem ueberlappende Formularanpassungen. Eine korrekte Architektur wuerde eine gemeinsame Basisloesung fuer gemeinsame Tabellen verwenden." },
      { "id": "opt-2", "text": "Managed solutions cannot modify the same table", "textDe": "Verwaltete Loesungen koennen nicht dieselbe Tabelle modifizieren", "isCorrect": false, "explanation": "Multiple managed solutions CAN customize the same table. The issue is about form-level conflicts, not a platform limitation.", "explanationDe": "Mehrere verwaltete Loesungen KOENNEN dieselbe Tabelle anpassen. Das Problem sind Formular-Konflikte, keine Plattformbeschraenkung." },
      { "id": "opt-3", "text": "The fields were accidentally deleted during the solution export", "textDe": "Die Felder wurden versehentlich waehrend des Loesungsexports geloescht", "isCorrect": false, "explanation": "Solution export doesn't delete fields. The issue is architectural — overlapping customizations cause layering conflicts.", "explanationDe": "Loesungsexport loescht keine Felder. Das Problem ist architektonischer Natur — ueberlappende Anpassungen verursachen Schichtungskonflikte." }
    ],
    "explanation": "Solution layering is a critical concept for Solution Architects. When multiple solutions customize the same component, the topmost active layer wins. The architect should design a shared base solution for common components.",
    "explanationDe": "Loesungsschichtung ist ein kritisches Konzept fuer Solution Architects. Wenn mehrere Loesungen dieselbe Komponente anpassen, gewinnt der oberste aktive Layer.",
    "learnRef": { "title": "PL-600: Solution layering", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-layers-alm" },
    "learnRefDe": { "title": "PL-600: Loesungsschichtung", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-layers-alm" }
  },
  {
    "id": "pl6-q14",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A Solution Architect needs to design the ALM strategy for a Power Platform project. The team uses Azure DevOps. What is the recommended CI/CD approach?",
    "promptDe": "Ein Solution Architect muss die ALM-Strategie fuer ein Power Platform-Projekt entwerfen. Das Team verwendet Azure DevOps. Was ist der empfohlene CI/CD-Ansatz?",
    "hint": "Think about the Power Platform-specific build tools available for Azure DevOps.",
    "hintDe": "Denke an die Power Platform-spezifischen Build-Tools fuer Azure DevOps.",
    "options": [
      { "id": "opt-0", "text": "Export unmanaged solution from dev, store in source control, use Power Platform Build Tools to pack and import as managed to downstream environments, with solution checker as a quality gate", "textDe": "Unverwaltete Loesung aus Dev exportieren, in Quellkontrolle speichern, Power Platform Build Tools zum Packen und Importieren als verwaltet in nachgelagerte Umgebungen verwenden, mit Solution Checker als Qualitaetsgate", "isCorrect": true, "explanation": "This is the Microsoft-recommended ALM approach. Source-controlling unpacked solution XML enables diff/merge, and managed imports ensure clean deployments.", "explanationDe": "Dies ist der von Microsoft empfohlene ALM-Ansatz. Quellkontrolle des entpackten Loesungs-XML ermoeglicht Diff/Merge, und verwaltete Importe stellen saubere Bereitstellungen sicher." },
      { "id": "opt-1", "text": "Manually export and import solutions between environments using the Power Platform admin center", "textDe": "Loesungen manuell zwischen Umgebungen ueber das Power Platform Admin Center exportieren und importieren", "isCorrect": false, "explanation": "Manual exports are error-prone and not repeatable. CI/CD automation ensures consistent, auditable deployments.", "explanationDe": "Manuelle Exporte sind fehleranfaellig und nicht wiederholbar. CI/CD-Automatisierung stellt konsistente, auditierbare Bereitstellungen sicher." },
      { "id": "opt-2", "text": "Use unmanaged solutions across all environments for maximum flexibility", "textDe": "Unverwaltete Loesungen in allen Umgebungen fuer maximale Flexibilitaet verwenden", "isCorrect": false, "explanation": "Unmanaged solutions in production are an anti-pattern. They merge into the default solution, making it impossible to cleanly uninstall or track what was deployed.", "explanationDe": "Unverwaltete Loesungen in Produktion sind ein Anti-Pattern. Sie verschmelzen mit der Standardloesung, was saubere Deinstallation oder Nachverfolgung unmoeglich macht." },
      { "id": "opt-3", "text": "Copy the production environment to create new dev environments whenever changes are needed", "textDe": "Die Produktionsumgebung kopieren um neue Dev-Umgebungen zu erstellen wenn Aenderungen benoetigt werden", "isCorrect": false, "explanation": "Copying production for dev is wasteful and introduces production data into development. Environments should flow forward (dev → test → prod), not backward.", "explanationDe": "Produktion fuer Dev zu kopieren ist verschwenderisch und bringt Produktionsdaten in die Entwicklung. Umgebungen sollten vorwaerts fliessen (Dev → Test → Prod), nicht rueckwaerts." }
    ],
    "explanation": "The recommended ALM approach for Power Platform uses source control, Power Platform Build Tools for CI/CD, unmanaged-to-managed promotion, and automated quality gates.",
    "explanationDe": "Der empfohlene ALM-Ansatz fuer Power Platform nutzt Quellkontrolle, Power Platform Build Tools fuer CI/CD, unverwaltet-zu-verwaltet-Promotion und automatisierte Qualitaetsgates.",
    "learnRef": { "title": "PL-600: ALM for Power Platform", "url": "https://learn.microsoft.com/en-us/power-platform/alm/overview-alm" },
    "learnRefDe": { "title": "PL-600: ALM fuer Power Platform", "url": "https://learn.microsoft.com/de-de/power-platform/alm/overview-alm" }
  },
  {
    "id": "pl6-q15",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A Power Automate flow processes 50,000 records daily from an external system. Users report that the flow frequently fails with HTTP 429 errors. What architectural change should the Solution Architect recommend?",
    "promptDe": "Ein Power Automate Flow verarbeitet taeglich 50.000 Datensaetze aus einem externen System. Benutzer berichten dass der Flow haeufig mit HTTP 429-Fehlern fehlschlaegt. Welche architektonische Aenderung sollte der Solution Architect empfehlen?",
    "hint": "HTTP 429 means Too Many Requests — the platform is throttling the flow.",
    "hintDe": "HTTP 429 bedeutet Too Many Requests — die Plattform drosselt den Flow.",
    "options": [
      { "id": "opt-0", "text": "Redesign using batch operations, implement retry-after logic, and distribute processing across time windows to stay within service protection limits", "textDe": "Neudesign mit Batch-Operationen, Retry-After-Logik implementieren und Verarbeitung ueber Zeitfenster verteilen um innerhalb der Service-Schutzlimits zu bleiben", "isCorrect": true, "explanation": "HTTP 429 indicates service protection limit violations. Batching reduces API call count, retry-after handles transient throttling, and time distribution prevents burst patterns.", "explanationDe": "HTTP 429 zeigt Verletzungen der Service-Schutzlimits an. Batching reduziert API-Aufrufe, Retry-After behandelt voruebergehende Drosselung und Zeitverteilung verhindert Burst-Muster." },
      { "id": "opt-1", "text": "Purchase Power Automate add-on capacity to increase the API limit", "textDe": "Power Automate Add-on-Kapazitaet kaufen um das API-Limit zu erhoehen", "isCorrect": false, "explanation": "Service protection limits (429 errors) cannot be increased by purchasing capacity. They protect platform stability. The architecture must be redesigned to work within limits.", "explanationDe": "Service-Schutzlimits (429-Fehler) koennen nicht durch Kapazitaetskauf erhoeht werden. Sie schuetzen die Plattformstabilitaet. Die Architektur muss innerhalb der Limits neu entworfen werden." },
      { "id": "opt-2", "text": "Switch from Power Automate to a scheduled Azure Function to bypass the limits", "textDe": "Von Power Automate zu einer geplanten Azure Function wechseln um die Limits zu umgehen", "isCorrect": false, "explanation": "Moving to Azure Functions doesn't bypass Dataverse API limits — the 429 errors come from the Dataverse API, not Power Automate itself. The same limits apply regardless of the caller.", "explanationDe": "Der Wechsel zu Azure Functions umgeht nicht die Dataverse-API-Limits — die 429-Fehler kommen von der Dataverse-API, nicht von Power Automate selbst. Dieselben Limits gelten unabhaengig vom Aufrufer." },
      { "id": "opt-3", "text": "Create multiple service accounts to distribute the load across different user contexts", "textDe": "Mehrere Service-Accounts erstellen um die Last auf verschiedene Benutzerkontexte zu verteilen", "isCorrect": false, "explanation": "Using multiple accounts to circumvent throttling is against Microsoft's terms of service and creates security/audit issues. The correct approach is to optimize the architecture.", "explanationDe": "Mehrere Accounts zur Umgehung von Drosselung zu verwenden verstoesst gegen Microsofts Nutzungsbedingungen und schafft Sicherheits-/Audit-Probleme." }
    ],
    "explanation": "Service protection limits are enforced at the API level and cannot be bought away. The Solution Architect must design architectures that respect these limits through batching, retry patterns, and load distribution.",
    "explanationDe": "Service-Schutzlimits werden auf API-Ebene erzwungen und koennen nicht weggekauft werden. Der Solution Architect muss Architekturen entwerfen die diese Limits durch Batching, Retry-Muster und Lastverteilung respektieren.",
    "learnRef": { "title": "PL-600: Service protection limits", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits" },
    "learnRefDe": { "title": "PL-600: Service-Schutzlimits", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/api-limits" }
  },
  {
    "id": "pl6-q16",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A Solution Architect needs to store configuration values (API URLs, feature flags) that differ between dev, test, and production environments. What is the recommended approach?",
    "promptDe": "Ein Solution Architect muss Konfigurationswerte (API-URLs, Feature-Flags) speichern die sich zwischen Dev-, Test- und Produktionsumgebungen unterscheiden. Was ist der empfohlene Ansatz?",
    "hint": "Think about solution-aware configuration that supports ALM.",
    "hintDe": "Denke an loesungsfaehige Konfiguration die ALM unterstuetzt.",
    "options": [
      { "id": "opt-0", "text": "Use environment variables — they are solution-aware, support different values per environment, and integrate with connection references", "textDe": "Umgebungsvariablen verwenden — sie sind loesungsfaehig, unterstuetzen verschiedene Werte pro Umgebung und integrieren mit Verbindungsreferenzen", "isCorrect": true, "explanation": "Environment variables are the Microsoft-recommended approach for environment-specific configuration. They travel with the solution and values can be set per-environment during deployment.", "explanationDe": "Umgebungsvariablen sind der von Microsoft empfohlene Ansatz fuer umgebungsspezifische Konfiguration. Sie reisen mit der Loesung und Werte koennen pro Umgebung waehrend der Bereitstellung gesetzt werden." },
      { "id": "opt-1", "text": "Hard-code the values in Power Automate flows and maintain separate flows per environment", "textDe": "Werte in Power Automate Flows hart codieren und separate Flows pro Umgebung pflegen", "isCorrect": false, "explanation": "Hard-coding creates maintenance nightmares and breaks the one-solution-many-environments principle of ALM.", "explanationDe": "Hartes Codieren schafft Wartungsalptraeume und bricht das Ein-Loesung-viele-Umgebungen-Prinzip von ALM." },
      { "id": "opt-2", "text": "Create a Dataverse configuration table with rows for each setting", "textDe": "Eine Dataverse-Konfigurationstabelle mit Zeilen fuer jede Einstellung erstellen", "isCorrect": false, "explanation": "Configuration tables work for complex, user-editable business settings. For simple key-value config that varies by environment, environment variables are simpler and ALM-native.", "explanationDe": "Konfigurationstabellen funktionieren fuer komplexe, benutzerbearbeitbare Geschaeftseinstellungen. Fuer einfache Schluessel-Wert-Konfiguration die nach Umgebung variiert sind Umgebungsvariablen einfacher und ALM-nativ." },
      { "id": "opt-3", "text": "Store configuration in a JSON file in a SharePoint document library", "textDe": "Konfiguration in einer JSON-Datei in einer SharePoint-Dokumentbibliothek speichern", "isCorrect": false, "explanation": "External file storage adds unnecessary complexity, dependency on SharePoint, and is not solution-aware for ALM deployments.", "explanationDe": "Externe Dateispeicherung fuegt unnoetige Komplexitaet, SharePoint-Abhaengigkeit hinzu und ist nicht loesungsfaehig fuer ALM-Bereitstellungen." }
    ],
    "explanation": "Environment variables are the recommended way to handle environment-specific configuration in Power Platform. They are solution-aware, support ALM, and can reference Azure Key Vault for secrets.",
    "explanationDe": "Umgebungsvariablen sind der empfohlene Weg fuer umgebungsspezifische Konfiguration in Power Platform. Sie sind loesungsfaehig, unterstuetzen ALM und koennen Azure Key Vault fuer Geheimnisse referenzieren.",
    "learnRef": { "title": "PL-600: Environment variables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables" },
    "learnRefDe": { "title": "PL-600: Umgebungsvariablen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/environmentvariables" }
  },
  {
    "id": "pl6-q17",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "multi-choice",
    "prompt": "A Solution Architect is designing the automation strategy. Which TWO scenarios are best suited for Power Automate desktop flows (RPA)?",
    "promptDe": "Ein Solution Architect entwirft die Automatisierungsstrategie. Welche ZWEI Szenarien eignen sich am besten fuer Power Automate Desktop Flows (RPA)?",
    "hint": "RPA automates UI interactions — think about when that's the only option.",
    "hintDe": "RPA automatisiert UI-Interaktionen — ueberlege wann das die einzige Option ist.",
    "options": [
      { "id": "opt-0", "text": "Automating data entry into a legacy mainframe application that has no API", "textDe": "Dateneingabe in eine Legacy-Mainframe-Anwendung automatisieren die keine API hat", "isCorrect": true, "explanation": "RPA is ideal for legacy systems without APIs where UI automation is the only integration option.", "explanationDe": "RPA ist ideal fuer Legacy-Systeme ohne APIs wo UI-Automatisierung die einzige Integrationsoption ist." },
      { "id": "opt-1", "text": "Extracting data from scanned PDF invoices and entering it into a desktop accounting application", "textDe": "Daten aus gescannten PDF-Rechnungen extrahieren und in eine Desktop-Buchhaltungsanwendung eingeben", "isCorrect": true, "explanation": "Combining document processing with UI automation of a desktop app is a classic RPA use case.", "explanationDe": "Die Kombination von Dokumentverarbeitung mit UI-Automatisierung einer Desktop-App ist ein klassischer RPA-Anwendungsfall." },
      { "id": "opt-2", "text": "Sending approval emails when a new record is created in Dataverse", "textDe": "Genehmigungs-E-Mails senden wenn ein neuer Datensatz in Dataverse erstellt wird", "isCorrect": false, "explanation": "This is a standard cloud flow scenario using the Dataverse trigger and Approvals connector — no UI automation needed.", "explanationDe": "Dies ist ein Standard-Cloud-Flow-Szenario mit Dataverse-Trigger und Approvals-Connector — keine UI-Automatisierung noetig." },
      { "id": "opt-3", "text": "Synchronizing data between Dataverse and SharePoint", "textDe": "Daten zwischen Dataverse und SharePoint synchronisieren", "isCorrect": false, "explanation": "Both Dataverse and SharePoint have robust APIs and connectors. Cloud flows handle this efficiently without RPA.", "explanationDe": "Sowohl Dataverse als auch SharePoint haben robuste APIs und Connectors. Cloud Flows erledigen dies effizient ohne RPA." },
      { "id": "opt-4", "text": "Creating a scheduled report from Power BI data", "textDe": "Einen geplanten Bericht aus Power BI-Daten erstellen", "isCorrect": false, "explanation": "Power BI has native subscription and export features. This does not require UI automation.", "explanationDe": "Power BI hat native Abonnement- und Export-Features. Dies erfordert keine UI-Automatisierung." }
    ],
    "explanation": "Desktop flows (RPA) should be used when the target system has no API — typically legacy desktop applications or mainframes. For systems with APIs, cloud flows are more reliable and scalable.",
    "explanationDe": "Desktop Flows (RPA) sollten verwendet werden wenn das Zielsystem keine API hat — typischerweise Legacy-Desktop-Anwendungen oder Mainframes. Fuer Systeme mit APIs sind Cloud Flows zuverlaessiger und skalierbarer.",
    "learnRef": { "title": "PL-600: RPA design", "url": "https://learn.microsoft.com/en-us/power-automate/desktop-flows/introduction" },
    "learnRefDe": { "title": "PL-600: RPA-Design", "url": "https://learn.microsoft.com/de-de/power-automate/desktop-flows/introduction" }
  },
  // ==================== Data Model (4) ====================
  {
    "id": "pl6-q18",
    "certId": "pl600",
    "topic": "Data Model",
    "type": "single-choice",
    "prompt": "A manufacturing company needs to store 10 million IoT sensor readings per day in Dataverse for analysis. Standard Dataverse tables have performance concerns at this volume. What should the Solution Architect recommend?",
    "promptDe": "Ein Fertigungsunternehmen muss taeglich 10 Millionen IoT-Sensordaten in Dataverse fuer Analysen speichern. Standard-Dataverse-Tabellen haben Performance-Bedenken bei diesem Volumen. Was sollte der Solution Architect empfehlen?",
    "hint": "Think about Dataverse table types designed for high-volume data.",
    "hintDe": "Denke an Dataverse-Tabellentypen die fuer hohes Datenvolumen ausgelegt sind.",
    "options": [
      { "id": "opt-0", "text": "Use Dataverse elastic tables backed by Azure Cosmos DB for the high-volume sensor data", "textDe": "Dataverse Elastic-Tabellen verwenden die von Azure Cosmos DB unterstuetzt werden fuer die hochvolumigen Sensordaten", "isCorrect": true, "explanation": "Elastic tables are designed for high-volume, semi-structured data with automatic horizontal scaling. They can handle millions of records per day without the performance constraints of standard tables.", "explanationDe": "Elastic-Tabellen sind fuer hochvolumige, semi-strukturierte Daten mit automatischer horizontaler Skalierung ausgelegt. Sie koennen Millionen von Datensaetzen pro Tag ohne die Performance-Einschraenkungen von Standardtabellen verarbeiten." },
      { "id": "opt-1", "text": "Store all sensor data in standard Dataverse tables with proper indexing", "textDe": "Alle Sensordaten in Standard-Dataverse-Tabellen mit korrekter Indizierung speichern", "isCorrect": false, "explanation": "Standard Dataverse tables are not optimized for 10M records/day. This volume would cause performance issues with views, searches, and API operations.", "explanationDe": "Standard-Dataverse-Tabellen sind nicht fuer 10M Datensaetze/Tag optimiert. Dieses Volumen wuerde Performance-Probleme bei Ansichten, Suchen und API-Operationen verursachen." },
      { "id": "opt-2", "text": "Use Azure Data Lake Storage and only bring summary data into Dataverse", "textDe": "Azure Data Lake Storage verwenden und nur zusammengefasste Daten in Dataverse bringen", "isCorrect": false, "explanation": "While this could work, it adds architectural complexity. Elastic tables keep the data within the Dataverse ecosystem while handling the volume.", "explanationDe": "Obwohl dies funktionieren koennte, fuegt es architektonische Komplexitaet hinzu. Elastic-Tabellen halten die Daten im Dataverse-Oekosystem und bewaealtigen gleichzeitig das Volumen." },
      { "id": "opt-3", "text": "Partition the data across multiple standard tables (one per month)", "textDe": "Die Daten ueber mehrere Standardtabellen partitionieren (eine pro Monat)", "isCorrect": false, "explanation": "Manual table partitioning is an anti-pattern in Dataverse. It complicates queries, security, and maintenance. Elastic tables handle partitioning automatically.", "explanationDe": "Manuelle Tabellenpartitionierung ist ein Anti-Pattern in Dataverse. Es verkompliziert Abfragen, Sicherheit und Wartung. Elastic-Tabellen behandeln Partitionierung automatisch." }
    ],
    "explanation": "Elastic tables, backed by Azure Cosmos DB, are designed for high-volume scenarios that exceed standard Dataverse table capabilities. They provide automatic horizontal scaling.",
    "explanationDe": "Elastic-Tabellen, unterstuetzt durch Azure Cosmos DB, sind fuer Hochvolumen-Szenarien ausgelegt die die Faehigkeiten von Standard-Dataverse-Tabellen uebersteigen.",
    "learnRef": { "title": "PL-600: Elastic tables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-elastic-tables" },
    "learnRefDe": { "title": "PL-600: Elastic-Tabellen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-elastic-tables" }
  },
  {
    "id": "pl6-q19",
    "certId": "pl600",
    "topic": "Data Model",
    "type": "single-choice",
    "prompt": "A company needs to display product catalog data from their existing SQL Server database in a model-driven app. The data changes frequently in the source system, and Dataverse should NOT store a copy. What should the architect recommend?",
    "promptDe": "Ein Unternehmen muss Produktkatalogdaten aus seiner bestehenden SQL Server-Datenbank in einer modellgesteuerten App anzeigen. Die Daten aendern sich haeufig im Quellsystem und Dataverse soll KEINE Kopie speichern. Was sollte der Architekt empfehlen?",
    "hint": "Think about tables that read data at runtime without local storage.",
    "hintDe": "Denke an Tabellen die Daten zur Laufzeit lesen ohne lokale Speicherung.",
    "options": [
      { "id": "opt-0", "text": "Use virtual tables with a virtual connector to map the SQL Server data into Dataverse at runtime", "textDe": "Virtuelle Tabellen mit einem virtuellen Connector verwenden um die SQL Server-Daten zur Laufzeit in Dataverse abzubilden", "isCorrect": true, "explanation": "Virtual tables retrieve external data at runtime without storing it in Dataverse, ensuring data is always current and eliminating sync concerns.", "explanationDe": "Virtuelle Tabellen rufen externe Daten zur Laufzeit ab ohne sie in Dataverse zu speichern, wodurch Daten immer aktuell sind und Sync-Bedenken entfallen." },
      { "id": "opt-1", "text": "Set up a scheduled Power Automate flow to sync SQL data to Dataverse every 5 minutes", "textDe": "Einen geplanten Power Automate Flow einrichten um SQL-Daten alle 5 Minuten mit Dataverse zu synchronisieren", "isCorrect": false, "explanation": "This creates a copy in Dataverse (violating the requirement) and introduces sync delay. Frequent syncs also consume API requests.", "explanationDe": "Dies erstellt eine Kopie in Dataverse (verletzt die Anforderung) und fuehrt Sync-Verzoegerung ein. Haeufige Syncs verbrauchen auch API-Anfragen." },
      { "id": "opt-2", "text": "Use Dataverse Dataflows to import the product catalog nightly", "textDe": "Dataverse Dataflows verwenden um den Produktkatalog naechtlich zu importieren", "isCorrect": false, "explanation": "Nightly import stores data in Dataverse (violating the requirement) and data would be up to 24 hours stale.", "explanationDe": "Naechtlicher Import speichert Daten in Dataverse (verletzt die Anforderung) und Daten waeren bis zu 24 Stunden veraltet." },
      { "id": "opt-3", "text": "Embed a Power BI report showing the SQL data within the model-driven app", "textDe": "Einen Power BI-Bericht einbetten der die SQL-Daten innerhalb der modellgesteuerten App anzeigt", "isCorrect": false, "explanation": "Power BI is for analytics, not for interactive data display in forms. Users need to work with individual records, not charts and tables.", "explanationDe": "Power BI ist fuer Analytik, nicht fuer interaktive Datenanzeige in Formularen. Benutzer muessen mit einzelnen Datensaetzen arbeiten, nicht mit Diagrammen und Tabellen." }
    ],
    "explanation": "Virtual tables are the Solution Architect's tool for real-time external data access without duplication. They map external data into the Dataverse model while keeping the source system as the single point of truth.",
    "explanationDe": "Virtuelle Tabellen sind das Werkzeug des Solution Architects fuer Echtzeit-Zugriff auf externe Daten ohne Duplizierung.",
    "learnRef": { "title": "PL-600: Virtual tables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities" },
    "learnRefDe": { "title": "PL-600: Virtuelle Tabellen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-virtual-entities" }
  },
  {
    "id": "pl6-q20",
    "certId": "pl600",
    "topic": "Data Model",
    "type": "single-choice",
    "prompt": "You are designing a data migration from a legacy CRM to Dataverse. The source system has 2 million contact records with known data quality issues including duplicates and missing fields. What is the correct migration approach?",
    "promptDe": "Sie entwerfen eine Datenmigration von einem Legacy-CRM zu Dataverse. Das Quellsystem hat 2 Millionen Kontaktdatensaetze mit bekannten Datenqualitaetsproblemen einschliesslich Duplikaten und fehlenden Feldern. Was ist der korrekte Migrationsansatz?",
    "hint": "Think about the data lifecycle: assess, clean, transform, load, validate.",
    "hintDe": "Denke an den Datenlebenszyklus: bewerten, bereinigen, transformieren, laden, validieren.",
    "options": [
      { "id": "opt-0", "text": "Profile and cleanse data before migration, use alternate keys for deduplication during load, disable plugins during bulk import, and validate row counts post-migration", "textDe": "Daten vor der Migration profilieren und bereinigen, alternative Schluessel fuer Deduplizierung waehrend des Ladens verwenden, Plugins waehrend des Massenimports deaktivieren und Zeilenanzahlen nach der Migration validieren", "isCorrect": true, "explanation": "This follows the proven migration methodology: clean first, use platform features for deduplication, optimize bulk load performance, and verify completeness.", "explanationDe": "Dies folgt der bewaehrten Migrationsmethodik: zuerst bereinigen, Plattform-Features fuer Deduplizierung nutzen, Massenladeperformance optimieren und Vollstaendigkeit verifizieren." },
      { "id": "opt-1", "text": "Import all records as-is and use Dataverse duplicate detection rules to clean up afterward", "textDe": "Alle Datensaetze unveraendert importieren und Dataverse-Duplikaterkennungsregeln zur nachtraeglichen Bereinigung verwenden", "isCorrect": false, "explanation": "Importing dirty data creates a mess. Duplicate detection generates warnings but doesn't prevent all duplicates during bulk import. Clean before load is the standard practice.", "explanationDe": "Schmutzige Daten zu importieren schafft Chaos. Duplikaterkennung generiert Warnungen, verhindert aber nicht alle Duplikate beim Massenimport. Bereinigen vor dem Laden ist die Standardpraxis." },
      { "id": "opt-2", "text": "Migrate in small batches of 100 records using Power Automate flows", "textDe": "In kleinen Chargen von 100 Datensaetzen ueber Power Automate Flows migrieren", "isCorrect": false, "explanation": "For 2 million records, Power Automate flows are too slow and consume excessive API requests. Bulk tools (SDK, Data Factory) are appropriate for this volume.", "explanationDe": "Fuer 2 Millionen Datensaetze sind Power Automate Flows zu langsam und verbrauchen uebermassig viele API-Anfragen. Massentools (SDK, Data Factory) sind fuer dieses Volumen geeignet." },
      { "id": "opt-3", "text": "Have end users manually verify and enter records from the old system", "textDe": "Endbenutzer die Datensaetze aus dem alten System manuell verifizieren und eingeben lassen", "isCorrect": false, "explanation": "Manual entry of 2 million records is completely impractical and would introduce new data quality issues.", "explanationDe": "Manuelle Eingabe von 2 Millionen Datensaetzen ist voellig unpraktikabel und wuerde neue Datenqualitaetsprobleme einfuehren." }
    ],
    "explanation": "Data migration requires a structured approach: profile, cleanse, transform, load (with optimizations like disabling plugins), and validate. This is a critical skill for the PL-600 Implementation domain.",
    "explanationDe": "Datenmigration erfordert einen strukturierten Ansatz: profilieren, bereinigen, transformieren, laden (mit Optimierungen wie Deaktivierung von Plugins) und validieren.",
    "learnRef": { "title": "PL-600: Data migration", "url": "https://learn.microsoft.com/en-us/power-platform/alm/data-migration" },
    "learnRefDe": { "title": "PL-600: Datenmigration", "url": "https://learn.microsoft.com/de-de/power-platform/alm/data-migration" }
  },
  // ==================== Integration (4) ====================
  {
    "id": "pl6-q21",
    "certId": "pl600",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "A company needs to integrate Power Platform with their SAP ERP system. The SAP system uses SOAP/BAPI protocols and requires complex message transformation. What integration pattern should the Solution Architect recommend?",
    "promptDe": "Ein Unternehmen muss Power Platform mit seinem SAP ERP-System integrieren. Das SAP-System verwendet SOAP/BAPI-Protokolle und erfordert komplexe Nachrichtentransformation. Welches Integrationsmuster sollte der Solution Architect empfehlen?",
    "hint": "Think about what sits between Power Platform and complex enterprise protocols.",
    "hintDe": "Ueberlege was zwischen Power Platform und komplexen Unternehmensprotokollen sitzt.",
    "options": [
      { "id": "opt-0", "text": "Azure API Management as a gateway with Azure Logic Apps for SOAP-to-REST transformation, consumed by Power Platform via a custom connector", "textDe": "Azure API Management als Gateway mit Azure Logic Apps fuer SOAP-zu-REST-Transformation, konsumiert von Power Platform ueber einen Custom Connector", "isCorrect": true, "explanation": "API Management provides a REST facade over complex protocols. Logic Apps handle SOAP/BAPI transformation. The custom connector makes it consumable from Power Platform. This is a proven enterprise integration pattern.", "explanationDe": "API Management bietet eine REST-Fassade ueber komplexe Protokolle. Logic Apps behandeln SOAP/BAPI-Transformation. Der Custom Connector macht es von Power Platform konsumierbar. Dies ist ein bewaehrtes Enterprise-Integrationsmuster." },
      { "id": "opt-1", "text": "Use the SAP connector directly in Power Automate cloud flows", "textDe": "Den SAP-Connector direkt in Power Automate Cloud Flows verwenden", "isCorrect": false, "explanation": "The SAP connector has limitations with complex BAPI calls and message transformations. For enterprise-grade SAP integration, middleware is more reliable and flexible.", "explanationDe": "Der SAP-Connector hat Einschraenkungen bei komplexen BAPI-Aufrufen und Nachrichtentransformationen. Fuer Enterprise-Grade SAP-Integration ist Middleware zuverlaessiger und flexibler." },
      { "id": "opt-2", "text": "Build a custom .NET web API that connects to SAP and expose it to Power Platform", "textDe": "Eine benutzerdefinierte .NET Web-API erstellen die sich mit SAP verbindet und sie Power Platform zugaenglich machen", "isCorrect": false, "explanation": "Custom code works but adds maintenance burden. Azure Logic Apps + API Management provide the same capability with built-in SAP connectors and no custom code to maintain.", "explanationDe": "Benutzerdefinierter Code funktioniert, fuegt aber Wartungsaufwand hinzu. Azure Logic Apps + API Management bieten dieselbe Faehigkeit mit eingebauten SAP-Connectors und ohne benutzerdefinierten Code." },
      { "id": "opt-3", "text": "Use Power Automate desktop flows to automate the SAP GUI directly", "textDe": "Power Automate Desktop Flows verwenden um die SAP GUI direkt zu automatisieren", "isCorrect": false, "explanation": "RPA through the SAP GUI is fragile, slow, and doesn't scale. API-based integration through middleware is far more robust for enterprise scenarios.", "explanationDe": "RPA ueber die SAP GUI ist fragil, langsam und skaliert nicht. API-basierte Integration ueber Middleware ist fuer Enterprise-Szenarien deutlich robuster." }
    ],
    "explanation": "For complex enterprise integrations (SAP, legacy SOAP), the Solution Architect should use Azure middleware (API Management + Logic Apps) as a protocol translation layer, making the integration consumable from Power Platform.",
    "explanationDe": "Fuer komplexe Enterprise-Integrationen (SAP, Legacy SOAP) sollte der Solution Architect Azure-Middleware (API Management + Logic Apps) als Protokolluebersetzungsschicht verwenden.",
    "learnRef": { "title": "PL-600: Integration design", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Integrationsdesign", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },
  {
    "id": "pl6-q22",
    "certId": "pl600",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "The client wants their Power Platform solution to authenticate with an external REST API that requires OAuth 2.0 client credentials (server-to-server). What should the Solution Architect configure?",
    "promptDe": "Der Kunde moechte dass seine Power Platform-Loesung sich bei einer externen REST-API authentifiziert die OAuth 2.0 Client Credentials (Server-zu-Server) erfordert. Was sollte der Solution Architect konfigurieren?",
    "hint": "Think about how non-interactive authentication is handled in Entra ID.",
    "hintDe": "Denke darueber nach wie nicht-interaktive Authentifizierung in Entra ID gehandhabt wird.",
    "options": [
      { "id": "opt-0", "text": "Register an application in Entra ID, configure client credentials (secret or certificate), and use an HTTP action in Power Automate with the token endpoint", "textDe": "Eine Anwendung in Entra ID registrieren, Client Credentials (Secret oder Zertifikat) konfigurieren und eine HTTP-Aktion in Power Automate mit dem Token-Endpunkt verwenden", "isCorrect": true, "explanation": "App registrations with client credentials enable server-to-server (S2S) authentication. The flow requests a token from the Entra ID token endpoint and uses it for API calls.", "explanationDe": "App-Registrierungen mit Client Credentials ermoeglichen Server-zu-Server (S2S) Authentifizierung. Der Flow fordert ein Token vom Entra ID Token-Endpunkt an und verwendet es fuer API-Aufrufe." },
      { "id": "opt-1", "text": "Use a service account with username and password stored in the flow", "textDe": "Ein Service-Account mit Benutzername und Passwort verwenden die im Flow gespeichert sind", "isCorrect": false, "explanation": "Storing credentials in flows is a security anti-pattern. Service accounts with passwords don't support modern OAuth and create compliance risks.", "explanationDe": "Credentials in Flows zu speichern ist ein Sicherheits-Anti-Pattern. Service Accounts mit Passwoertern unterstuetzen kein modernes OAuth und schaffen Compliance-Risiken." },
      { "id": "opt-2", "text": "Configure the flow to use the maker's personal credentials for API calls", "textDe": "Den Flow so konfigurieren dass er die persoenlichen Credentials des Makers fuer API-Aufrufe verwendet", "isCorrect": false, "explanation": "Personal credentials create a single point of failure (what if the user leaves?) and may grant inappropriate access levels. S2S auth is the correct pattern.", "explanationDe": "Persoenliche Credentials schaffen einen Single Point of Failure (was wenn der Benutzer geht?) und koennen unangemessene Zugriffsebenen gewaehren. S2S-Auth ist das korrekte Muster." },
      { "id": "opt-3", "text": "Use an API key stored as an environment variable", "textDe": "Einen API-Schluessel verwenden der als Umgebungsvariable gespeichert ist", "isCorrect": false, "explanation": "The question specifies OAuth 2.0 client credentials. API keys are a different authentication mechanism and don't meet the requirement.", "explanationDe": "Die Frage spezifiziert OAuth 2.0 Client Credentials. API-Schluessel sind ein anderer Authentifizierungsmechanismus und erfuellen nicht die Anforderung." }
    ],
    "explanation": "For server-to-server OAuth 2.0 authentication, the Solution Architect should use Entra ID app registrations with client credentials. This provides secure, non-interactive authentication with proper audit trails.",
    "explanationDe": "Fuer Server-zu-Server OAuth 2.0 Authentifizierung sollte der Solution Architect Entra ID App-Registrierungen mit Client Credentials verwenden.",
    "learnRef": { "title": "PL-600: Authentication strategy", "url": "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow" },
    "learnRefDe": { "title": "PL-600: Authentifizierungsstrategie", "url": "https://learn.microsoft.com/de-de/entra/identity-platform/v2-oauth2-client-creds-grant-flow" }
  },
  {
    "id": "pl6-q23",
    "certId": "pl600",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "A critical integration flow between Dataverse and an external payment processor occasionally fails due to network timeouts. How should the Solution Architect design for business continuity?",
    "promptDe": "Ein kritischer Integrationsflow zwischen Dataverse und einem externen Zahlungsabwickler schlaegt gelegentlich aufgrund von Netzwerk-Timeouts fehl. Wie sollte der Solution Architect fuer Business Continuity entwerfen?",
    "hint": "Think about resilience patterns: retry, dead-letter, monitoring.",
    "hintDe": "Denke an Resilienzmuster: Retry, Dead-Letter, Monitoring.",
    "options": [
      { "id": "opt-0", "text": "Implement exponential backoff retry logic, a dead-letter queue for persistently failed messages, idempotent operations, and alerting via Application Insights", "textDe": "Exponentielles Backoff-Retry implementieren, eine Dead-Letter-Queue fuer dauerhaft fehlgeschlagene Nachrichten, idempotente Operationen und Alarmierung ueber Application Insights", "isCorrect": true, "explanation": "This implements the full resilience pattern: transient failures are retried, persistent failures are captured for review, idempotency prevents duplicates, and monitoring ensures visibility.", "explanationDe": "Dies implementiert das vollstaendige Resilienzmuster: voruebergehende Fehler werden wiederholt, dauerhafte Fehler zur Ueberpruefung erfasst, Idempotenz verhindert Duplikate und Monitoring stellt Sichtbarkeit sicher." },
      { "id": "opt-1", "text": "Increase the timeout value to 10 minutes to wait longer for the payment processor", "textDe": "Den Timeout-Wert auf 10 Minuten erhoehen um laenger auf den Zahlungsabwickler zu warten", "isCorrect": false, "explanation": "Longer timeouts mask the underlying issue and tie up flow runs. Retry with backoff is more effective than simply waiting longer.", "explanationDe": "Laengere Timeouts verdecken das zugrundeliegende Problem und binden Flow-Runs. Retry mit Backoff ist effektiver als einfach laenger zu warten." },
      { "id": "opt-2", "text": "Add a try/catch scope and send an email to the admin on failure", "textDe": "Einen Try/Catch-Scope hinzufuegen und bei Fehler eine E-Mail an den Admin senden", "isCorrect": false, "explanation": "Error notification is only part of the solution. Without retry logic and dead-letter queuing, failed transactions are lost. Email alone doesn't ensure the payment is eventually processed.", "explanationDe": "Fehlerbenachrichtigung ist nur ein Teil der Loesung. Ohne Retry-Logik und Dead-Letter-Warteschlange gehen fehlgeschlagene Transaktionen verloren." },
      { "id": "opt-3", "text": "Run the flow in synchronous mode to ensure it completes before the user continues", "textDe": "Den Flow im synchronen Modus ausfuehren um sicherzustellen dass er abgeschlossen wird bevor der Benutzer fortfaehrt", "isCorrect": false, "explanation": "Synchronous execution doesn't solve timeout issues — it makes them worse by blocking the user. The payment processor's availability is independent of execution mode.", "explanationDe": "Synchrone Ausfuehrung loest keine Timeout-Probleme — sie verschlimmert sie durch Blockierung des Benutzers." }
    ],
    "explanation": "Business continuity for critical integrations requires defense-in-depth: retry patterns for transient failures, dead-letter queues for persistent failures, idempotency for safety, and monitoring for visibility.",
    "explanationDe": "Business Continuity fuer kritische Integrationen erfordert Defense-in-Depth: Retry-Muster fuer voruebergehende Fehler, Dead-Letter-Queues fuer dauerhafte Fehler, Idempotenz fuer Sicherheit und Monitoring fuer Sichtbarkeit.",
    "learnRef": { "title": "PL-600: Business continuity", "url": "https://learn.microsoft.com/en-us/power-automate/error-checker" },
    "learnRefDe": { "title": "PL-600: Business Continuity", "url": "https://learn.microsoft.com/de-de/power-automate/error-checker" }
  },
  // ==================== Security Model (4) ====================
  {
    "id": "pl6-q24",
    "certId": "pl600",
    "topic": "Security Model",
    "type": "single-choice",
    "prompt": "A multinational corporation has regional offices that should only see their own data, but headquarters needs to see all data across regions. How should the Solution Architect design the security model?",
    "promptDe": "Ein multinationales Unternehmen hat Regionalniederlassungen die nur ihre eigenen Daten sehen sollen, aber die Zentrale muss alle Daten aller Regionen sehen. Wie sollte der Solution Architect das Sicherheitsmodell entwerfen?",
    "hint": "Think about how business units scope data visibility in Dataverse.",
    "hintDe": "Denke darueber nach wie Unternehmenseinheiten die Datensichtbarkeit in Dataverse bestimmen.",
    "options": [
      { "id": "opt-0", "text": "Create a root business unit for headquarters and child business units per region. Give regional users BU-level access and headquarters users organization-level access", "textDe": "Eine Stammunternehmenseinheit fuer die Zentrale und untergeordnete Unternehmenseinheiten pro Region erstellen. Regionalen Benutzern BU-Level-Zugriff und Zentralbenutzern Organisations-Level-Zugriff geben", "isCorrect": true, "explanation": "Business unit hierarchy naturally segments data by region. BU-level security roles limit visibility to the user's BU. Organization-level roles at HQ see everything.", "explanationDe": "Die Unternehmenseinheits-Hierarchie segmentiert Daten natuerlich nach Region. BU-Level-Sicherheitsrollen beschraenken die Sichtbarkeit auf die BU des Benutzers. Organisations-Level-Rollen in der Zentrale sehen alles." },
      { "id": "opt-1", "text": "Use a single business unit with custom security roles that filter by a Region field on each record", "textDe": "Eine einzige Unternehmenseinheit mit benutzerdefinierten Sicherheitsrollen verwenden die nach einem Regionsfeld auf jedem Datensatz filtern", "isCorrect": false, "explanation": "Security roles cannot filter by field values. Row-level security in Dataverse is based on ownership and business unit hierarchy, not custom field conditions.", "explanationDe": "Sicherheitsrollen koennen nicht nach Feldwerten filtern. Zeilensicherheit in Dataverse basiert auf Besitz und Unternehmenseinheits-Hierarchie, nicht auf benutzerdefinierten Feldbedingungen." },
      { "id": "opt-2", "text": "Create separate Dataverse environments per region with cross-environment data sharing", "textDe": "Separate Dataverse-Umgebungen pro Region erstellen mit umgebungsuebergreifender Datenfreigabe", "isCorrect": false, "explanation": "Multiple environments add massive complexity. Business units within a single environment natively handle regional data segregation. Cross-environment sharing introduces sync and consistency challenges.", "explanationDe": "Mehrere Umgebungen fuegen massive Komplexitaet hinzu. Unternehmenseinheiten innerhalb einer einzigen Umgebung behandeln regionale Datensegregation nativ." },
      { "id": "opt-3", "text": "Use column-level security to hide sensitive fields from regional users", "textDe": "Spaltensicherheit verwenden um sensible Felder vor regionalen Benutzern zu verbergen", "isCorrect": false, "explanation": "Column-level security controls which fields are visible, not which records. The requirement is about row-level visibility (which records users can see), not field-level.", "explanationDe": "Spaltensicherheit steuert welche Felder sichtbar sind, nicht welche Datensaetze. Die Anforderung betrifft Zeilensichtbarkeit (welche Datensaetze Benutzer sehen koennen), nicht Feldebene." }
    ],
    "explanation": "Business units are the primary mechanism for row-level data segmentation in Dataverse. A well-designed BU hierarchy maps to organizational structure and controls who sees what data through access level scoping.",
    "explanationDe": "Unternehmenseinheiten sind der primaere Mechanismus fuer zeilenbasierte Datensegmentierung in Dataverse. Eine gut gestaltete BU-Hierarchie bildet die Organisationsstruktur ab.",
    "learnRef": { "title": "PL-600: Business unit structure", "url": "https://learn.microsoft.com/en-us/power-platform/admin/create-edit-business-units" },
    "learnRefDe": { "title": "PL-600: Unternehmenseinheitsstruktur", "url": "https://learn.microsoft.com/de-de/power-platform/admin/create-edit-business-units" }
  },
  {
    "id": "pl6-q25",
    "certId": "pl600",
    "topic": "Security Model",
    "type": "single-choice",
    "prompt": "A Power Platform DLP policy at the tenant level blocks the HTTP connector. A project team needs to call an external REST API from their Power Automate flows. What should the Solution Architect recommend?",
    "promptDe": "Eine Power Platform DLP-Richtlinie auf Mandantenebene blockiert den HTTP-Connector. Ein Projektteam muss eine externe REST-API aus seinen Power Automate Flows aufrufen. Was sollte der Solution Architect empfehlen?",
    "hint": "Think about how DLP policies can be scoped and what alternatives exist.",
    "hintDe": "Denke darueber nach wie DLP-Richtlinien eingegrenzt werden koennen und welche Alternativen existieren.",
    "options": [
      { "id": "opt-0", "text": "Request an environment-level DLP policy exception that allows the HTTP connector in the project's specific environment while maintaining the tenant-level block elsewhere", "textDe": "Eine DLP-Richtlinienausnahme auf Umgebungsebene beantragen die den HTTP-Connector in der spezifischen Umgebung des Projekts erlaubt waehrend die Mandantenebene-Blockierung anderswo beibehalten wird", "isCorrect": true, "explanation": "Environment-level DLP policies can override tenant-level restrictions for specific environments. This provides the project team access while maintaining governance for the rest of the tenant.", "explanationDe": "DLP-Richtlinien auf Umgebungsebene koennen Mandantenebene-Einschraenkungen fuer spezifische Umgebungen ueberschreiben. Dies gibt dem Projektteam Zugang waehrend die Governance fuer den Rest des Mandanten beibehalten wird." },
      { "id": "opt-1", "text": "Use a custom connector instead of the HTTP connector to bypass the DLP policy", "textDe": "Einen Custom Connector anstelle des HTTP-Connectors verwenden um die DLP-Richtlinie zu umgehen", "isCorrect": false, "explanation": "Custom connectors are also subject to DLP policies. You can't bypass DLP by wrapping the same functionality in a custom connector.", "explanationDe": "Custom Connectors unterliegen ebenfalls DLP-Richtlinien. Man kann DLP nicht umgehen indem man dieselbe Funktionalitaet in einen Custom Connector verpackt." },
      { "id": "opt-2", "text": "Remove the HTTP connector block from the tenant-level DLP policy", "textDe": "Die HTTP-Connector-Blockierung aus der DLP-Richtlinie auf Mandantenebene entfernen", "isCorrect": false, "explanation": "Removing the tenant-level block opens the HTTP connector for all environments, which may violate security requirements for other projects.", "explanationDe": "Die Mandantenebene-Blockierung zu entfernen oeffnet den HTTP-Connector fuer alle Umgebungen, was Sicherheitsanforderungen fuer andere Projekte verletzen kann." },
      { "id": "opt-3", "text": "Move the flow to an Azure Logic App which is not subject to DLP policies", "textDe": "Den Flow in eine Azure Logic App verschieben die nicht DLP-Richtlinien unterliegt", "isCorrect": false, "explanation": "While Logic Apps aren't governed by Power Platform DLP, this adds complexity and moves logic outside the Power Platform ecosystem. The environment-level exception is simpler.", "explanationDe": "Obwohl Logic Apps nicht der Power Platform DLP unterliegen, fuegt dies Komplexitaet hinzu und verschiebt Logik ausserhalb des Power Platform-Oekosystems." }
    ],
    "explanation": "DLP policies support environment-level exceptions. The Solution Architect should work with tenant admins to create targeted policy exceptions rather than weakening tenant-wide governance.",
    "explanationDe": "DLP-Richtlinien unterstuetzen Ausnahmen auf Umgebungsebene. Der Solution Architect sollte mit Tenant-Admins zusammenarbeiten um gezielte Richtlinienausnahmen zu erstellen.",
    "learnRef": { "title": "PL-600: DLP policies", "url": "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention" },
    "learnRefDe": { "title": "PL-600: DLP-Richtlinien", "url": "https://learn.microsoft.com/de-de/power-platform/admin/wp-data-loss-prevention" }
  },
  {
    "id": "pl6-q26",
    "certId": "pl600",
    "topic": "Security Model",
    "type": "single-choice",
    "prompt": "A consulting firm needs external consultants to access specific Dataverse records via a Power Pages portal. The consultants should only see records related to their assigned projects. How should the security be designed?",
    "promptDe": "Eine Beratungsfirma benoetigt dass externe Berater ueber ein Power Pages-Portal auf bestimmte Dataverse-Datensaetze zugreifen. Die Berater sollten nur Datensaetze sehen die ihren zugewiesenen Projekten zugeordnet sind. Wie sollte die Sicherheit entworfen werden?",
    "hint": "Think about Power Pages security constructs for external users.",
    "hintDe": "Denke an Power Pages-Sicherheitskonstrukte fuer externe Benutzer.",
    "options": [
      { "id": "opt-0", "text": "Create web roles with table permissions scoped to the contact's parent account, using relationship-based access to limit visibility to project-related records", "textDe": "Webrollen mit Tabellenberechtigungen erstellen die auf das uebergeordnete Konto des Kontakts beschraenkt sind, mit beziehungsbasiertem Zugriff um die Sichtbarkeit auf projektbezogene Datensaetze zu beschraenken", "isCorrect": true, "explanation": "Power Pages uses web roles + table permissions. Scoping to parent account with relationship-based access ensures consultants only see records related to their organization's projects.", "explanationDe": "Power Pages verwendet Webrollen + Tabellenberechtigungen. Eingrenzung auf das uebergeordnete Konto mit beziehungsbasiertem Zugriff stellt sicher dass Berater nur Datensaetze ihrer Organisationsprojekte sehen." },
      { "id": "opt-1", "text": "Give external consultants Dataverse security roles with BU-level read access", "textDe": "Externen Beratern Dataverse-Sicherheitsrollen mit BU-Level-Lesezugriff geben", "isCorrect": false, "explanation": "External portal users don't have Dataverse user records and security roles. Power Pages uses its own security model (web roles + table permissions) for external access.", "explanationDe": "Externe Portal-Benutzer haben keine Dataverse-Benutzerdatensaetze und Sicherheitsrollen. Power Pages verwendet sein eigenes Sicherheitsmodell (Webrollen + Tabellenberechtigungen)." },
      { "id": "opt-2", "text": "Create a canvas app for external consultants and share it via guest access", "textDe": "Eine Canvas-App fuer externe Berater erstellen und ueber Gastzugang teilen", "isCorrect": false, "explanation": "Canvas apps shared with guests require Entra ID B2B guest licenses. Power Pages is purpose-built for external user scenarios with its own security model.", "explanationDe": "Canvas-Apps die mit Gaesten geteilt werden erfordern Entra ID B2B Gastlizenzen. Power Pages ist zweckmaessig fuer externe Benutzerszenarien mit eigenem Sicherheitsmodell gebaut." },
      { "id": "opt-3", "text": "Use Power BI embedded reports with row-level security to show project data", "textDe": "Power BI Embedded-Berichte mit Zeilensicherheit verwenden um Projektdaten anzuzeigen", "isCorrect": false, "explanation": "Power BI is for analytics, not for interactive data access. The requirement is for consultants to access and work with records, not just view reports.", "explanationDe": "Power BI ist fuer Analytik, nicht fuer interaktiven Datenzugriff. Die Anforderung ist dass Berater mit Datensaetzen arbeiten, nicht nur Berichte ansehen." }
    ],
    "explanation": "Power Pages security for external users is based on web roles and table permissions, scoped to the portal contact's relationships. This is a critical security design skill for the PL-600.",
    "explanationDe": "Power Pages-Sicherheit fuer externe Benutzer basiert auf Webrollen und Tabellenberechtigungen, eingegrenzt auf die Beziehungen des Portal-Kontakts.",
    "learnRef": { "title": "PL-600: Power Pages security", "url": "https://learn.microsoft.com/en-us/power-pages/security/table-permissions" },
    "learnRefDe": { "title": "PL-600: Power Pages-Sicherheit", "url": "https://learn.microsoft.com/de-de/power-pages/security/table-permissions" }
  },
  {
    "id": "pl6-q27",
    "certId": "pl600",
    "topic": "Security Model",
    "type": "single-choice",
    "prompt": "The CFO requires that salary data in the Employee table is only visible to HR managers, even though other users need access to non-sensitive employee fields. What security mechanism addresses this?",
    "promptDe": "Der CFO verlangt dass Gehaltsdaten in der Mitarbeitertabelle nur fuer HR-Manager sichtbar sind, obwohl andere Benutzer Zugriff auf nicht-sensible Mitarbeiterfelder benoetigen. Welcher Sicherheitsmechanismus adressiert dies?",
    "hint": "Think about security that operates at the field level, not the record level.",
    "hintDe": "Denke an Sicherheit die auf Feldebene operiert, nicht auf Datensatzebene.",
    "options": [
      { "id": "opt-0", "text": "Field security profiles with the salary column marked as secured, granting read access only to the HR Manager profile", "textDe": "Feldsicherheitsprofile mit der Gehaltsspalte als gesichert markiert, Lesezugriff nur fuer das HR-Manager-Profil gewaehren", "isCorrect": true, "explanation": "Column-level security (field security profiles) controls read/write access to individual secured columns, independent of table-level security roles. Only users in the HR Manager profile see salary data.", "explanationDe": "Spaltensicherheit (Feldsicherheitsprofile) steuert Lese-/Schreibzugriff auf einzelne gesicherte Spalten, unabhaengig von Sicherheitsrollen auf Tabellenebene. Nur Benutzer im HR-Manager-Profil sehen Gehaltsdaten." },
      { "id": "opt-1", "text": "Create a separate Salary table linked to Employee and restrict access via security roles", "textDe": "Eine separate Gehaltstabelle erstellen die mit Mitarbeiter verknuepft ist und den Zugriff ueber Sicherheitsrollen einschraenken", "isCorrect": false, "explanation": "While this works, it over-engineers the solution. Column-level security is the built-in mechanism for protecting specific fields without restructuring the data model.", "explanationDe": "Obwohl dies funktioniert, ueberdimensioniert es die Loesung. Spaltensicherheit ist der eingebaute Mechanismus zum Schutz spezifischer Felder ohne Datenmodellumstrukturierung." },
      { "id": "opt-2", "text": "Use a business rule to hide the salary field for non-HR users", "textDe": "Eine Geschaeftsregel verwenden um das Gehaltsfeld fuer Nicht-HR-Benutzer auszublenden", "isCorrect": false, "explanation": "Business rules control UI visibility but don't enforce security. Users can still access the data via API, reports, or advanced find. Column-level security enforces at the platform level.", "explanationDe": "Geschaeftsregeln steuern UI-Sichtbarkeit, erzwingen aber keine Sicherheit. Benutzer koennen weiterhin ueber API, Berichte oder erweiterte Suche auf die Daten zugreifen." },
      { "id": "opt-3", "text": "Create two separate forms — one with salary for HR and one without for others", "textDe": "Zwei separate Formulare erstellen — eines mit Gehalt fuer HR und eines ohne fuer andere", "isCorrect": false, "explanation": "Multiple forms hide fields in the UI but don't secure the data. The salary column is still accessible via views, API, and export. Field security profiles provide actual data protection.", "explanationDe": "Mehrere Formulare verbergen Felder in der UI, sichern aber die Daten nicht. Die Gehaltsspalte ist weiterhin ueber Ansichten, API und Export zugaenglich." }
    ],
    "explanation": "Column-level security using field security profiles is the only mechanism in Dataverse that truly secures individual fields. UI-level hiding (forms, business rules) is not security — data remains accessible through other channels.",
    "explanationDe": "Spaltensicherheit mittels Feldsicherheitsprofilen ist der einzige Mechanismus in Dataverse der einzelne Felder wirklich sichert. UI-Ebenen-Ausblendung ist keine Sicherheit.",
    "learnRef": { "title": "PL-600: Column-level security", "url": "https://learn.microsoft.com/en-us/power-platform/admin/field-level-security" },
    "learnRefDe": { "title": "PL-600: Spaltensicherheit", "url": "https://learn.microsoft.com/de-de/power-platform/admin/field-level-security" }
  },
  // ==================== Implementation (4) ====================
  {
    "id": "pl6-q28",
    "certId": "pl600",
    "topic": "Implementation",
    "type": "single-choice",
    "prompt": "During go-live readiness review, you discover that the solution has 50 cloud flows triggering on record creation, and peak hours generate 10,000 new records in 30 minutes. What should you validate?",
    "promptDe": "Bei der Go-Live-Bereitschaftspruefung stellen Sie fest dass die Loesung 50 Cloud Flows hat die bei Datensatzerstellung ausgeloest werden, und Spitzenzeiten 10.000 neue Datensaetze in 30 Minuten generieren. Was sollten Sie validieren?",
    "hint": "Think about the cumulative API impact of many flows triggered simultaneously.",
    "hintDe": "Denke an die kumulative API-Auswirkung vieler gleichzeitig ausgeloester Flows.",
    "options": [
      { "id": "opt-0", "text": "Validate that the total API requests from all flows stay within service protection limits and daily entitlements, and implement throttling strategies if needed", "textDe": "Validieren dass die gesamten API-Anfragen aller Flows innerhalb der Service-Schutzlimits und taeglichen Berechtigungen bleiben und bei Bedarf Drosselungsstrategien implementieren", "isCorrect": true, "explanation": "50 flows x 10,000 records = potentially 500,000+ API operations in 30 minutes. This will likely hit service protection limits (6,000/user/5min) and possibly exceed daily entitlements.", "explanationDe": "50 Flows x 10.000 Datensaetze = potenziell 500.000+ API-Operationen in 30 Minuten. Dies wird wahrscheinlich Service-Schutzlimits (6.000/Benutzer/5Min) erreichen und moeglicherweise taegliche Berechtigungen ueberschreiten." },
      { "id": "opt-1", "text": "Ensure all 50 flows have proper error handling with try/catch scopes", "textDe": "Sicherstellen dass alle 50 Flows korrekte Fehlerbehandlung mit Try/Catch-Scopes haben", "isCorrect": false, "explanation": "Error handling is important but doesn't address the fundamental scalability concern. Even with error handling, 500K+ API calls will be throttled.", "explanationDe": "Fehlerbehandlung ist wichtig, adressiert aber nicht das grundlegende Skalierbarkeitsproblem. Selbst mit Fehlerbehandlung werden 500K+ API-Aufrufe gedrosselt." },
      { "id": "opt-2", "text": "Check that the flows are all using the latest version of connectors", "textDe": "Pruefen dass die Flows alle die neueste Version der Connectors verwenden", "isCorrect": false, "explanation": "Connector versions don't impact the API limit concern. The architectural issue is the volume of concurrent flow executions hitting API limits.", "explanationDe": "Connector-Versionen beeinflussen nicht das API-Limit-Problem. Das architektonische Problem ist das Volumen gleichzeitiger Flow-Ausfuehrungen." },
      { "id": "opt-3", "text": "Verify that the Dataverse database has enough storage capacity", "textDe": "Ueberpruefen dass die Dataverse-Datenbank genuegend Speicherkapazitaet hat", "isCorrect": false, "explanation": "Storage capacity is a valid concern but secondary to the immediate risk of API throttling causing flow failures and data processing delays.", "explanationDe": "Speicherkapazitaet ist ein berechtigtes Anliegen, aber sekundaer gegenueber dem unmittelbaren Risiko der API-Drosselung die Flow-Fehler und Datenverarbeitungsverzoegerungen verursacht." }
    ],
    "explanation": "Validating API conformance with service protection limits is a critical go-live activity. The Solution Architect must calculate cumulative API impact and design throttling strategies before production deployment.",
    "explanationDe": "Die Validierung der API-Konformitaet mit Service-Schutzlimits ist eine kritische Go-Live-Aktivitaet. Der Solution Architect muss die kumulative API-Auswirkung berechnen.",
    "learnRef": { "title": "PL-600: API limits validation", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits" },
    "learnRefDe": { "title": "PL-600: API-Limits-Validierung", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/api-limits" }
  },
  {
    "id": "pl6-q29",
    "certId": "pl600",
    "topic": "Implementation",
    "type": "single-choice",
    "prompt": "Two teams developed automation for the same Dataverse table. Team A has a plugin that updates a status field on create, and Team B has a cloud flow that also modifies the status field on create. In production, the status field shows unexpected values. What is happening?",
    "promptDe": "Zwei Teams haben Automatisierung fuer dieselbe Dataverse-Tabelle entwickelt. Team A hat ein Plugin das ein Statusfeld bei Erstellung aktualisiert, und Team B hat einen Cloud Flow der ebenfalls das Statusfeld bei Erstellung modifiziert. In Produktion zeigt das Statusfeld unerwartete Werte. Was passiert?",
    "hint": "Think about the execution order of plugins vs. flows on the same event.",
    "hintDe": "Denke an die Ausfuehrungsreihenfolge von Plugins vs. Flows beim selben Ereignis.",
    "options": [
      { "id": "opt-0", "text": "Automation conflict — the plugin and flow both fire on the same event and overwrite each other's changes, resulting in non-deterministic behavior", "textDe": "Automatisierungskonflikt — das Plugin und der Flow werden beide beim selben Ereignis ausgeloest und ueberschreiben gegenseitig ihre Aenderungen, was zu nicht-deterministischem Verhalten fuehrt", "isCorrect": true, "explanation": "Plugins execute synchronously before the flow fires. The flow then overwrites the plugin's changes. This is a classic automation conflict that the Solution Architect must resolve.", "explanationDe": "Plugins werden synchron ausgefuehrt bevor der Flow ausgeloest wird. Der Flow ueberschreibt dann die Aenderungen des Plugins. Dies ist ein klassischer Automatisierungskonflikt den der Solution Architect loesen muss." },
      { "id": "opt-1", "text": "The plugin has a bug in its code", "textDe": "Das Plugin hat einen Fehler im Code", "isCorrect": false, "explanation": "While possible, the scenario describes a design conflict between two automations, not a code bug. Both work correctly individually but conflict when combined.", "explanationDe": "Obwohl moeglich, beschreibt das Szenario einen Designkonflikt zwischen zwei Automatisierungen, keinen Code-Fehler. Beide funktionieren einzeln korrekt, kollidieren aber in Kombination." },
      { "id": "opt-2", "text": "The flow is running on a different version of the solution", "textDe": "Der Flow laeuft auf einer anderen Version der Loesung", "isCorrect": false, "explanation": "Solution versioning doesn't cause runtime field conflicts. This is an automation design issue, not a deployment issue.", "explanationDe": "Loesungsversionierung verursacht keine Laufzeit-Feldkonflikte. Dies ist ein Automatisierungsdesign-Problem, kein Bereitstellungsproblem." },
      { "id": "opt-3", "text": "Dataverse has a concurrency issue with parallel writes", "textDe": "Dataverse hat ein Parallelitaetsproblem mit gleichzeitigen Schreibvorgaengen", "isCorrect": false, "explanation": "While concurrency can cause issues, the root cause here is two automations deliberately modifying the same field. This is an architecture problem, not a platform concurrency bug.", "explanationDe": "Obwohl Parallelitaet Probleme verursachen kann, ist die Grundursache hier dass zwei Automatisierungen absichtlich dasselbe Feld modifizieren. Dies ist ein Architekturproblem." }
    ],
    "explanation": "Resolving automation conflicts is a key Implementation skill. The Solution Architect must map all automations across teams, identify overlapping triggers, and consolidate or sequence conflicting logic.",
    "explanationDe": "Das Loesen von Automatisierungskonflikten ist eine wichtige Implementierungsfaehigkeit. Der Solution Architect muss alle Automatisierungen teamuebergreifend abbilden und konfligierende Logik konsolidieren.",
    "learnRef": { "title": "PL-600: Resolve automation conflicts", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration" },
    "learnRefDe": { "title": "PL-600: Automatisierungskonflikte loesen", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/best-practices/business-logic/do-not-duplicate-plugin-step-registration" }
  },
  {
    "id": "pl6-q30",
    "certId": "pl600",
    "topic": "Implementation",
    "type": "multi-choice",
    "prompt": "A Solution Architect is conducting the final go-live readiness assessment. Which THREE items are essential to verify before production deployment?",
    "promptDe": "Ein Solution Architect fuehrt die abschliessende Go-Live-Bereitschaftsbewertung durch. Welche DREI Punkte sind vor der Produktionsbereitstellung essentiell zu ueberpruefen?",
    "hint": "Think about security, performance, and recoverability.",
    "hintDe": "Denke an Sicherheit, Performance und Wiederherstellbarkeit.",
    "options": [
      { "id": "opt-0", "text": "Security roles and DLP policies have been reviewed and tested with representative user scenarios", "textDe": "Sicherheitsrollen und DLP-Richtlinien wurden mit repraesentativen Benutzerszenarien ueberprueft und getestet", "isCorrect": true, "explanation": "Security validation ensures users can only access what they should. Untested security roles may expose sensitive data or block legitimate access.", "explanationDe": "Sicherheitsvalidierung stellt sicher dass Benutzer nur auf das zugreifen koennen was sie sollten." },
      { "id": "opt-1", "text": "A documented rollback plan exists in case the deployment needs to be reversed", "textDe": "Ein dokumentierter Rollback-Plan existiert fuer den Fall dass die Bereitstellung rueckgaengig gemacht werden muss", "isCorrect": true, "explanation": "Rollback capability is essential for risk mitigation. Without it, a failed deployment could leave production in an inconsistent state.", "explanationDe": "Rollback-Faehigkeit ist essentiell fuer Risikominderung. Ohne sie koennte eine fehlgeschlagene Bereitstellung die Produktion in einem inkonsistenten Zustand hinterlassen." },
      { "id": "opt-2", "text": "Performance testing confirms the solution operates within API limits under expected peak load", "textDe": "Performance-Tests bestaetigen dass die Loesung unter erwarteter Spitzenlast innerhalb der API-Limits operiert", "isCorrect": true, "explanation": "Performance validation under realistic load prevents production surprises. API limit violations during peak hours can bring critical processes to a halt.", "explanationDe": "Performance-Validierung unter realistischer Last verhindert Produktionsueberraschungen. API-Limit-Verletzungen waehrend Spitzenzeiten koennen kritische Prozesse zum Stillstand bringen." },
      { "id": "opt-3", "text": "All solution components have been documented in a technical specification", "textDe": "Alle Loesungskomponenten wurden in einer technischen Spezifikation dokumentiert", "isCorrect": false, "explanation": "Documentation is valuable but is not a go-live blocker. Security, performance, and recoverability directly impact production stability.", "explanationDe": "Dokumentation ist wertvoll, aber kein Go-Live-Blocker. Sicherheit, Performance und Wiederherstellbarkeit beeinflussen direkt die Produktionsstabilitaet." },
      { "id": "opt-4", "text": "The development team has been trained on the production support process", "textDe": "Das Entwicklungsteam wurde im Produktions-Support-Prozess geschult", "isCorrect": false, "explanation": "Support readiness is important but secondary to ensuring the solution itself is production-ready. Security, performance, and rollback are higher priority.", "explanationDe": "Support-Bereitschaft ist wichtig, aber sekundaer zur Sicherstellung dass die Loesung selbst produktionsbereit ist." }
    ],
    "explanation": "Go-live readiness requires validating security (who can access what), performance (can it handle the load), and recoverability (what if it fails). These are non-negotiable before production deployment.",
    "explanationDe": "Go-Live-Bereitschaft erfordert die Validierung von Sicherheit (wer kann worauf zugreifen), Performance (kann die Last bewaealtigt werden) und Wiederherstellbarkeit (was wenn es fehlschlaegt).",
    "learnRef": { "title": "PL-600: Go-live readiness", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/adoption/manage-go-live" },
    "learnRefDe": { "title": "PL-600: Go-Live-Bereitschaft", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/adoption/manage-go-live" }
  },
  {
    "id": "pl6-q31",
    "certId": "pl600",
    "topic": "Implementation",
    "type": "single-choice",
    "prompt": "During data migration testing, 5% of records fail to import due to lookup reference errors — the target records they reference don't exist yet in Dataverse. How should the Solution Architect resolve this?",
    "promptDe": "Waehrend des Datenmigrationstests schlagen 5% der Datensaetze beim Import fehl wegen Lookup-Referenzfehlern — die Zieldatensaetze auf die sie verweisen existieren noch nicht in Dataverse. Wie sollte der Solution Architect dies loesen?",
    "hint": "Think about the order in which data must be loaded.",
    "hintDe": "Denke an die Reihenfolge in der Daten geladen werden muessen.",
    "options": [
      { "id": "opt-0", "text": "Define the correct data load sequence based on table dependencies — load referenced (parent) tables first, then dependent (child) tables", "textDe": "Die korrekte Datenlade-Sequenz basierend auf Tabellenabhaengigkeiten definieren — referenzierte (uebergeordnete) Tabellen zuerst laden, dann abhaengige (untergeordnete) Tabellen", "isCorrect": true, "explanation": "Lookup references require the target record to exist. Loading parent/reference tables before child/dependent tables resolves reference errors. This is fundamental to data migration sequencing.", "explanationDe": "Lookup-Referenzen erfordern dass der Zieldatensatz existiert. Uebergeordnete/Referenztabellen vor untergeordneten/abhaengigen Tabellen zu laden loest Referenzfehler. Dies ist grundlegend fuer die Datenmigrationssequenzierung." },
      { "id": "opt-1", "text": "Import all records without lookups first, then run a second pass to populate the lookup fields", "textDe": "Alle Datensaetze ohne Lookups zuerst importieren, dann einen zweiten Durchlauf ausfuehren um die Lookup-Felder zu fuellen", "isCorrect": false, "explanation": "While this can work, it's unnecessarily complex. Proper sequencing (parents first) is simpler, faster, and the standard approach.", "explanationDe": "Obwohl dies funktionieren kann, ist es unnoetig komplex. Korrekte Sequenzierung (uebergeordnete zuerst) ist einfacher, schneller und der Standardansatz." },
      { "id": "opt-2", "text": "Disable lookup validation during import to allow all records through", "textDe": "Lookup-Validierung waehrend des Imports deaktivieren um alle Datensaetze durchzulassen", "isCorrect": false, "explanation": "Disabling validation would create orphaned references and data integrity issues. The correct solution is proper load ordering, not bypassing validation.", "explanationDe": "Validierung zu deaktivieren wuerde verwaiste Referenzen und Datenintegritaetsprobleme schaffen. Die korrekte Loesung ist richtige Ladereihenfolge, nicht Validierung zu umgehen." },
      { "id": "opt-3", "text": "Create placeholder records for all lookup targets and update them after migration", "textDe": "Platzhalter-Datensaetze fuer alle Lookup-Ziele erstellen und sie nach der Migration aktualisieren", "isCorrect": false, "explanation": "Placeholder records add unnecessary complexity and risk. Proper load sequencing is the clean, standard approach to handling dependencies.", "explanationDe": "Platzhalter-Datensaetze fuegen unnoetige Komplexitaet und Risiko hinzu. Korrekte Ladesequenzierung ist der saubere Standardansatz." }
    ],
    "explanation": "Data migration sequencing based on table dependencies is a fundamental skill. Parent/reference tables must be loaded before child/dependent tables to satisfy lookup constraints.",
    "explanationDe": "Datenmigrationssequenzierung basierend auf Tabellenabhaengigkeiten ist eine grundlegende Faehigkeit. Uebergeordnete/Referenztabellen muessen vor untergeordneten/abhaengigen Tabellen geladen werden.",
    "learnRef": { "title": "PL-600: Data migration troubleshooting", "url": "https://learn.microsoft.com/en-us/power-platform/alm/data-migration" },
    "learnRefDe": { "title": "PL-600: Datenmigrations-Troubleshooting", "url": "https://learn.microsoft.com/de-de/power-platform/alm/data-migration" }
  },
  // ==================== Additional Envisioning (4 more) ====================
  {
    "id": "pl6-q32",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A client wants to build a customer portal where external users can submit service requests, track their cases, and access a knowledge base. Which Power Platform component should the Solution Architect recommend?",
    "promptDe": "Ein Kunde moechte ein Kundenportal erstellen in dem externe Benutzer Serviceanfragen einreichen, ihre Faelle verfolgen und auf eine Wissensdatenbank zugreifen koennen. Welche Power Platform-Komponente sollte der Solution Architect empfehlen?",
    "hint": "Think about which component is designed for external-facing, authenticated experiences.",
    "hintDe": "Ueberlege welche Komponente fuer externe, authentifizierte Erlebnisse ausgelegt ist.",
    "options": [
      { "id": "opt-0", "text": "Power Pages — purpose-built for external-facing, secure websites with Dataverse integration", "textDe": "Power Pages — zweckmaessig gebaut fuer externe, sichere Websites mit Dataverse-Integration", "isCorrect": true, "explanation": "Power Pages is specifically designed for external user portals with authentication, web roles, table permissions, and Dataverse data access.", "explanationDe": "Power Pages ist speziell fuer externe Benutzerportale mit Authentifizierung, Webrollen, Tabellenberechtigungen und Dataverse-Datenzugriff konzipiert." },
      { "id": "opt-1", "text": "A canvas app shared via Entra ID B2B guest access", "textDe": "Eine Canvas-App geteilt ueber Entra ID B2B Gastzugang", "isCorrect": false, "explanation": "B2B guest access requires each external user to have an Entra ID guest account and a Power Apps license, which is costly and complex for customer-facing scenarios.", "explanationDe": "B2B-Gastzugang erfordert fuer jeden externen Benutzer ein Entra ID-Gastkonto und eine Power Apps-Lizenz, was fuer kundenorientierte Szenarien teuer und komplex ist." },
      { "id": "opt-2", "text": "A model-driven app with anonymous access enabled", "textDe": "Eine modellgesteuerte App mit aktiviertem anonymen Zugang", "isCorrect": false, "explanation": "Model-driven apps don't support anonymous access and require Dataverse licenses. They're designed for internal users, not external customer portals.", "explanationDe": "Modellgesteuerte Apps unterstuetzen keinen anonymen Zugang und erfordern Dataverse-Lizenzen. Sie sind fuer interne Benutzer konzipiert, nicht fuer externe Kundenportale." },
      { "id": "opt-3", "text": "A custom React web app connected to Dataverse via Web API", "textDe": "Eine benutzerdefinierte React-Web-App verbunden mit Dataverse ueber Web API", "isCorrect": false, "explanation": "While technically possible, building a custom web app loses the low-code advantages. Power Pages provides portal functionality out of the box with proper security.", "explanationDe": "Obwohl technisch moeglich, verliert das Erstellen einer benutzerdefinierten Web-App die Low-Code-Vorteile. Power Pages bietet Portal-Funktionalitaet mit korrekter Sicherheit standardmaessig." }
    ],
    "explanation": "Power Pages is the Power Platform component designed for external-facing websites. It provides authentication, authorization (web roles + table permissions), and Dataverse integration out of the box.",
    "explanationDe": "Power Pages ist die Power Platform-Komponente fuer externe Websites. Es bietet Authentifizierung, Autorisierung (Webrollen + Tabellenberechtigungen) und Dataverse-Integration standardmaessig.",
    "learnRef": { "title": "PL-600: Power Pages", "url": "https://learn.microsoft.com/en-us/power-pages/introduction" },
    "learnRefDe": { "title": "PL-600: Power Pages", "url": "https://learn.microsoft.com/de-de/power-pages/introduction" }
  },
  {
    "id": "pl6-q33",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "During the initial planning phase, a Solution Architect discovers that the client has an existing AppSource solution for their industry that covers 70% of requirements. The client wants to evaluate it. What should the architect recommend?",
    "promptDe": "Waehrend der anfaenglichen Planungsphase entdeckt ein Solution Architect, dass der Kunde eine bestehende AppSource-Loesung fuer seine Branche hat die 70% der Anforderungen abdeckt. Der Kunde moechte sie evaluieren. Was sollte der Architekt empfehlen?",
    "hint": "Think about evaluation criteria beyond just feature coverage.",
    "hintDe": "Denke an Bewertungskriterien jenseits der reinen Feature-Abdeckung.",
    "options": [
      { "id": "opt-0", "text": "Evaluate the ISV solution against feature fit, vendor roadmap, licensing cost, data residency, upgrade compatibility, and lock-in risk before making a recommendation", "textDe": "Die ISV-Loesung gegen Feature-Passung, Anbieter-Roadmap, Lizenzkosten, Datenresidenz, Upgrade-Kompatibilitaet und Lock-in-Risiko bewerten bevor eine Empfehlung ausgesprochen wird", "isCorrect": true, "explanation": "Evaluating AppSource/ISV solutions requires a holistic assessment beyond feature percentage. Vendor viability, TCO, and platform compatibility are equally important.", "explanationDe": "Die Bewertung von AppSource/ISV-Loesungen erfordert eine ganzheitliche Bewertung jenseits des Feature-Prozentsatzes. Anbieter-Lebensfaehigkeit, TCO und Plattformkompatibilitaet sind gleich wichtig." },
      { "id": "opt-1", "text": "Install the AppSource solution in production immediately since it covers 70% of requirements", "textDe": "Die AppSource-Loesung sofort in Produktion installieren da sie 70% der Anforderungen abdeckt", "isCorrect": false, "explanation": "Installing without evaluation is reckless. 70% coverage doesn't address vendor risk, cost, extensibility, or whether the remaining 30% gap can be reasonably closed.", "explanationDe": "Installation ohne Bewertung ist unbesonnen. 70% Abdeckung adressiert nicht Anbieterrisiko, Kosten, Erweiterbarkeit oder ob die verbleibende 30%-Luecke vernuenftig geschlossen werden kann." },
      { "id": "opt-2", "text": "Reject the AppSource solution because custom development gives more control", "textDe": "Die AppSource-Loesung ablehnen weil eigene Entwicklung mehr Kontrolle gibt", "isCorrect": false, "explanation": "Rejecting without evaluation wastes a potential advantage. AppSource solutions can significantly reduce development time and cost if they fit well.", "explanationDe": "Ohne Bewertung abzulehnen verschwendet einen potenziellen Vorteil. AppSource-Loesungen koennen Entwicklungszeit und -kosten erheblich reduzieren wenn sie gut passen." },
      { "id": "opt-3", "text": "Only consider the AppSource solution if it covers 100% of requirements", "textDe": "Die AppSource-Loesung nur in Betracht ziehen wenn sie 100% der Anforderungen abdeckt", "isCorrect": false, "explanation": "No solution covers 100% of requirements. 70% coverage with reasonable extensibility is often better than building 100% from scratch.", "explanationDe": "Keine Loesung deckt 100% der Anforderungen ab. 70% Abdeckung mit vernuenftiger Erweiterbarkeit ist oft besser als 100% von Grund auf zu bauen." }
    ],
    "explanation": "Evaluating ISV/AppSource solutions is a core PL-600 skill. The Solution Architect must assess feature fit alongside vendor health, cost, extensibility, and platform compatibility.",
    "explanationDe": "Die Bewertung von ISV/AppSource-Loesungen ist eine Kernkompetenz der PL-600. Der Solution Architect muss Feature-Passung zusammen mit Anbietergesundheit, Kosten und Erweiterbarkeit bewerten.",
    "learnRef": { "title": "PL-600: Evaluate AppSource options", "url": "https://learn.microsoft.com/en-us/training/paths/solution-architect-data/" },
    "learnRefDe": { "title": "PL-600: AppSource-Optionen bewerten", "url": "https://learn.microsoft.com/de-de/training/paths/solution-architect-data/" }
  },
  {
    "id": "pl6-q34",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A company wants real-time dashboards showing KPIs from both Dataverse and their Azure SQL Data Warehouse. The Solution Architect needs to recommend a data visualization strategy. What is the best approach?",
    "promptDe": "Ein Unternehmen moechte Echtzeit-Dashboards die KPIs aus Dataverse und seinem Azure SQL Data Warehouse zeigen. Der Solution Architect muss eine Datenvisualisierungsstrategie empfehlen. Was ist der beste Ansatz?",
    "hint": "Think about which Microsoft tool can combine multiple data sources in real-time dashboards.",
    "hintDe": "Ueberlege welches Microsoft-Tool mehrere Datenquellen in Echtzeit-Dashboards kombinieren kann.",
    "options": [
      { "id": "opt-0", "text": "Power BI with DirectQuery to both Dataverse and Azure SQL, embedded in model-driven apps for in-context analytics", "textDe": "Power BI mit DirectQuery zu sowohl Dataverse als auch Azure SQL, eingebettet in modellgesteuerte Apps fuer In-Context-Analytik", "isCorrect": true, "explanation": "Power BI supports DirectQuery for real-time data from multiple sources. Embedding in model-driven apps provides seamless in-context analytics without switching tools.", "explanationDe": "Power BI unterstuetzt DirectQuery fuer Echtzeitdaten aus mehreren Quellen. Einbettung in modellgesteuerte Apps bietet nahtlose In-Context-Analytik ohne Tool-Wechsel." },
      { "id": "opt-1", "text": "Build custom dashboards in a canvas app using multiple data connections", "textDe": "Benutzerdefinierte Dashboards in einer Canvas-App mit mehreren Datenverbindungen erstellen", "isCorrect": false, "explanation": "Canvas app dashboards have limited visualization capabilities compared to Power BI and don't scale well for complex, multi-source analytics.", "explanationDe": "Canvas-App-Dashboards haben im Vergleich zu Power BI eingeschraenkte Visualisierungsfaehigkeiten und skalieren nicht gut fuer komplexe Multi-Source-Analytik." },
      { "id": "opt-2", "text": "Import all Azure SQL data into Dataverse and use model-driven app dashboards", "textDe": "Alle Azure SQL-Daten in Dataverse importieren und Dashboards modellgesteuerter Apps verwenden", "isCorrect": false, "explanation": "Importing warehouse data into Dataverse duplicates data, increases storage costs, and model-driven dashboards have limited visualization options compared to Power BI.", "explanationDe": "Warehouse-Daten in Dataverse zu importieren dupliziert Daten, erhoeht Speicherkosten und Dashboards modellgesteuerter Apps haben eingeschraenkte Visualisierungsoptionen." },
      { "id": "opt-3", "text": "Use Azure Data Explorer dashboards for both data sources", "textDe": "Azure Data Explorer Dashboards fuer beide Datenquellen verwenden", "isCorrect": false, "explanation": "Azure Data Explorer is specialized for log analytics and time-series data. Power BI is the standard Microsoft tool for business KPI dashboards across multiple sources.", "explanationDe": "Azure Data Explorer ist spezialisiert auf Log-Analytik und Zeitreihendaten. Power BI ist das Standard-Microsoft-Tool fuer Business-KPI-Dashboards ueber mehrere Quellen." }
    ],
    "explanation": "Power BI is the recommended data visualization tool for Power Platform solutions. DirectQuery enables real-time access to multiple sources, and embedding in model-driven apps provides contextual analytics.",
    "explanationDe": "Power BI ist das empfohlene Datenvisualisierungstool fuer Power Platform-Loesungen. DirectQuery ermoeglicht Echtzeitzugriff auf mehrere Quellen.",
    "learnRef": { "title": "PL-600: Data visualization strategy", "url": "https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-embed-report-spo" },
    "learnRefDe": { "title": "PL-600: Datenvisualisierungsstrategie", "url": "https://learn.microsoft.com/de-de/power-bi/collaborate-share/service-embed-report-spo" }
  },
  {
    "id": "pl6-q35",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A Solution Architect needs to communicate the proposed solution design to both technical developers and non-technical business stakeholders. What is the recommended approach?",
    "promptDe": "Ein Solution Architect muss das vorgeschlagene Loesungsdesign sowohl technischen Entwicklern als auch nicht-technischen Business-Stakeholdern kommunizieren. Was ist der empfohlene Ansatz?",
    "hint": "Think about visual communication at different levels of abstraction.",
    "hintDe": "Denke an visuelle Kommunikation auf verschiedenen Abstraktionsebenen.",
    "options": [
      { "id": "opt-0", "text": "Create a solution topology diagram showing high-level component interactions for business stakeholders, and detailed technical architecture diagrams for developers", "textDe": "Ein Loesungstopologie-Diagramm erstellen das uebergeordnete Komponenteninteraktionen fuer Business-Stakeholder zeigt, und detaillierte technische Architekturdiagramme fuer Entwickler", "isCorrect": true, "explanation": "Visual communication at appropriate abstraction levels ensures all audiences understand the design. High-level for business decisions, detailed for implementation.", "explanationDe": "Visuelle Kommunikation auf angemessenen Abstraktionsebenen stellt sicher dass alle Zielgruppen das Design verstehen. Uebergeordnet fuer Geschaeftsentscheidungen, detailliert fuer Implementierung." },
      { "id": "opt-1", "text": "Write a detailed technical specification document and share it with everyone", "textDe": "Ein detailliertes technisches Spezifikationsdokument schreiben und mit allen teilen", "isCorrect": false, "explanation": "Technical documents are too detailed for business stakeholders. The architect should tailor communication to each audience's needs.", "explanationDe": "Technische Dokumente sind zu detailliert fuer Business-Stakeholder. Der Architekt sollte die Kommunikation auf die Beduerfnisse jeder Zielgruppe zuschneiden." },
      { "id": "opt-2", "text": "Present only the business process diagrams since everyone can understand them", "textDe": "Nur Geschaeftsprozessdiagramme praesentieren da jeder sie verstehen kann", "isCorrect": false, "explanation": "Business process diagrams don't convey technical architecture decisions (integrations, security model, environment strategy) that developers need.", "explanationDe": "Geschaeftsprozessdiagramme vermitteln keine technischen Architekturentscheidungen (Integrationen, Sicherheitsmodell, Umgebungsstrategie) die Entwickler benoetigen." },
      { "id": "opt-3", "text": "Schedule separate meetings and verbally explain the design without visual aids", "textDe": "Separate Meetings planen und das Design muendlich ohne visuelle Hilfsmittel erklaeren", "isCorrect": false, "explanation": "Complex architectures are best communicated visually. Verbal-only explanations lead to misunderstandings and lack a reference for future decision-making.", "explanationDe": "Komplexe Architekturen werden am besten visuell kommuniziert. Rein muendliche Erklaerungen fuehren zu Missverstaendnissen und fehlen als Referenz fuer zukuenftige Entscheidungen." }
    ],
    "explanation": "Communicating system design visually is a core PL-600 skill. The Solution Architect must create appropriate diagrams for different audiences — topology diagrams for business, detailed architecture for technical teams.",
    "explanationDe": "Systemdesign visuell zu kommunizieren ist eine Kernkompetenz der PL-600. Der Solution Architect muss geeignete Diagramme fuer verschiedene Zielgruppen erstellen.",
    "learnRef": { "title": "PL-600: Visual system design", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Visuelles Systemdesign", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },

  // ==================== Supplementary Questions (gap coverage) ====================

  // --- Envisioning: ISV/AppSource evaluation ---
  {
    "id": "pl6-q36",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A client needs document generation integrated with Dynamics 365 Sales. You find a well-reviewed ISV solution on AppSource that covers the requirement. What should you evaluate BEFORE recommending it?",
    "promptDe": "Ein Kunde benoetigt Dokumentgenerierung integriert mit Dynamics 365 Sales. Sie finden eine gut bewertete ISV-Loesung auf AppSource die die Anforderung abdeckt. Was sollten Sie BEVOR Sie sie empfehlen bewerten?",
    "hint": "Think beyond feature fit — what risks come with third-party dependencies?",
    "hintDe": "Denke ueber Feature-Passung hinaus — welche Risiken kommen mit Drittanbieter-Abhaengigkeiten?",
    "options": [
      { "id": "opt-0", "text": "Vendor viability, support SLA, data residency compliance, licensing model, and upgrade compatibility with future D365 releases", "textDe": "Anbieterviabilitaet, Support-SLA, Datenresidenz-Compliance, Lizenzmodell und Upgrade-Kompatibilitaet mit zukuenftigen D365-Releases", "isCorrect": true, "explanation": "ISV evaluation must go beyond features. Vendor stability, ongoing support, compliance, and platform compatibility are critical for long-term success.", "explanationDe": "ISV-Bewertung muss ueber Features hinausgehen. Anbieterstabilitaet, laufender Support, Compliance und Plattformkompatibilitaet sind entscheidend fuer langfristigen Erfolg." },
      { "id": "opt-1", "text": "Only whether it has more than 100 reviews on AppSource", "textDe": "Nur ob es mehr als 100 Bewertungen auf AppSource hat", "isCorrect": false, "explanation": "Review count is one data point but insufficient. A high review count doesn't guarantee compliance, support quality, or long-term viability.", "explanationDe": "Bewertungsanzahl ist ein Datenpunkt, aber unzureichend. Eine hohe Bewertungsanzahl garantiert weder Compliance noch Supportqualitaet oder langfristige Viabilitaet." },
      { "id": "opt-2", "text": "Whether it can be deployed in under one day", "textDe": "Ob es in unter einem Tag bereitgestellt werden kann", "isCorrect": false, "explanation": "Deployment speed is a minor consideration. Security, compliance, and architectural fit are far more important evaluation criteria.", "explanationDe": "Bereitstellungsgeschwindigkeit ist eine untergeordnete Betrachtung. Sicherheit, Compliance und architektonische Passung sind weitaus wichtigere Bewertungskriterien." },
      { "id": "opt-3", "text": "Whether Microsoft officially endorses the solution", "textDe": "Ob Microsoft die Loesung offiziell empfiehlt", "isCorrect": false, "explanation": "Microsoft doesn't endorse specific AppSource solutions. The architect must independently evaluate solutions against project requirements and organizational standards.", "explanationDe": "Microsoft empfiehlt keine spezifischen AppSource-Loesungen. Der Architekt muss Loesungen unabhaengig gegen Projektanforderungen und Organisationsstandards bewerten." }
    ],
    "explanation": "Evaluating ISV solutions requires assessing vendor stability, support, compliance, licensing, and upgrade compatibility — not just feature fit. This is a critical envisioning skill for the PL-600.",
    "explanationDe": "Die Bewertung von ISV-Loesungen erfordert die Beurteilung von Anbieterstabilitaet, Support, Compliance, Lizenzierung und Upgrade-Kompatibilitaet — nicht nur Feature-Passung.",
    "learnRef": { "title": "PL-600: Evaluate ISV solutions", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/app-source" },
    "learnRefDe": { "title": "PL-600: ISV-Loesungen bewerten", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/app-source" }
  },

  // --- Envisioning: Stakeholder management ---
  {
    "id": "pl6-q37",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "During a stakeholder workshop, the IT director insists on a custom-coded solution while the business unit leads prefer low-code Power Apps. As Solution Architect, how should you handle this conflict?",
    "promptDe": "Waehrend eines Stakeholder-Workshops besteht der IT-Direktor auf einer benutzerdefinierten Code-Loesung waehrend die Geschaeftsbereichsleiter Low-Code Power Apps bevorzugen. Wie sollten Sie als Solution Architect diesen Konflikt loesen?",
    "hint": "Think about the architect's role as a neutral advisor focused on business outcomes.",
    "hintDe": "Denke an die Rolle des Architekten als neutraler Berater mit Fokus auf Geschaeftsergebnisse.",
    "options": [
      { "id": "opt-0", "text": "Present an objective comparison showing total cost of ownership, time-to-value, maintainability, and skills availability for both approaches", "textDe": "Einen objektiven Vergleich praesentieren der Gesamtbetriebskosten, Time-to-Value, Wartbarkeit und Verfuegbarkeit von Skills fuer beide Ansaetze zeigt", "isCorrect": true, "explanation": "The Solution Architect should facilitate data-driven decisions, not take sides. An objective TCO and capability comparison helps stakeholders make informed choices.", "explanationDe": "Der Solution Architect sollte datengetriebene Entscheidungen ermoeglichen, nicht Partei ergreifen. Ein objektiver TCO- und Faehigkeitsvergleich hilft Stakeholdern informierte Entscheidungen zu treffen." },
      { "id": "opt-1", "text": "Side with the IT director since they control the technology budget", "textDe": "Sich auf die Seite des IT-Direktors stellen da er das Technologiebudget kontrolliert", "isCorrect": false, "explanation": "Taking sides based on organizational power undermines the architect's credibility and may lead to suboptimal solutions.", "explanationDe": "Partei basierend auf organisatorischer Macht zu ergreifen untergreabt die Glaubwuerdigkeit des Architekten und kann zu suboptimalen Loesungen fuehren." },
      { "id": "opt-2", "text": "Always recommend Power Apps since this is a Power Platform engagement", "textDe": "Immer Power Apps empfehlen da dies ein Power Platform-Engagement ist", "isCorrect": false, "explanation": "A good architect recommends the best solution, not just the platform they specialize in. Sometimes custom code or a hybrid approach is genuinely better.", "explanationDe": "Ein guter Architekt empfiehlt die beste Loesung, nicht nur die Plattform auf die er spezialisiert ist. Manchmal ist benutzerdefinierter Code oder ein Hybrid-Ansatz wirklich besser." },
      { "id": "opt-3", "text": "Defer the decision to a later project phase to avoid conflict", "textDe": "Die Entscheidung auf eine spaetere Projektphase verschieben um Konflikte zu vermeiden", "isCorrect": false, "explanation": "Deferring core technology decisions creates uncertainty and delays. The architect should facilitate resolution early in the envisioning phase.", "explanationDe": "Kerntechnologieentscheidungen aufzuschieben schafft Unsicherheit und Verzoegerungen. Der Architekt sollte die Loesung frueh in der Envisioning-Phase ermoeglichen." }
    ],
    "explanation": "Managing stakeholder conflicts is a critical Solution Architect responsibility. The architect serves as a neutral facilitator who presents objective, data-driven comparisons to enable informed decision-making.",
    "explanationDe": "Das Management von Stakeholder-Konflikten ist eine kritische Verantwortung des Solution Architects. Der Architekt dient als neutraler Facilitator der objektive, datengetriebene Vergleiche praesentiert.",
    "learnRef": { "title": "PL-600: Stakeholder management", "url": "https://learn.microsoft.com/en-us/training/modules/work-with-requirements/" },
    "learnRefDe": { "title": "PL-600: Stakeholder-Management", "url": "https://learn.microsoft.com/de-de/training/modules/work-with-requirements/" }
  },

  // --- Envisioning: Adoption and change management ---
  {
    "id": "pl6-q38",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "multi-choice",
    "prompt": "A Solution Architect is planning user adoption for a new Power Platform solution replacing a legacy system used by 2,000 employees. Which THREE strategies should be included in the adoption plan?",
    "promptDe": "Ein Solution Architect plant die Benutzeradoption fuer eine neue Power Platform-Loesung die ein Legacy-System ersetzt das von 2.000 Mitarbeitern genutzt wird. Welche DREI Strategien sollten im Adoptionsplan enthalten sein?",
    "hint": "Think about organizational change management, not just technical deployment.",
    "hintDe": "Denke an organisatorisches Change Management, nicht nur an technische Bereitstellung.",
    "options": [
      { "id": "opt-0", "text": "Identify and train champion users in each department to provide peer support", "textDe": "Champion-Benutzer in jeder Abteilung identifizieren und schulen um Peer-Support zu bieten", "isCorrect": true, "explanation": "Champions drive grassroots adoption and provide culturally relevant support to their peers.", "explanationDe": "Champions treiben Basisadoption voran und bieten kulturell relevanten Support fuer ihre Kollegen." },
      { "id": "opt-1", "text": "Create role-specific training materials with real business scenarios from the organization", "textDe": "Rollenspezifische Schulungsmaterialien mit echten Geschaeftsszenarien der Organisation erstellen", "isCorrect": true, "explanation": "Role-specific training with familiar scenarios increases relevance and reduces resistance to change.", "explanationDe": "Rollenspezifische Schulung mit vertrauten Szenarien erhoet die Relevanz und reduziert Widerstand gegen Veraenderung." },
      { "id": "opt-2", "text": "Plan a phased rollout starting with a pilot group to gather feedback before full deployment", "textDe": "Einen phasenweisen Rollout planen beginnend mit einer Pilotgruppe um Feedback vor der vollstaendigen Bereitstellung zu sammeln", "isCorrect": true, "explanation": "Phased rollout reduces risk, allows iterative improvement, and builds organizational confidence through early wins.", "explanationDe": "Phasenweiser Rollout reduziert Risiko, ermoeglicht iterative Verbesserung und baut organisatorisches Vertrauen durch fruehe Erfolge auf." },
      { "id": "opt-3", "text": "Disable the legacy system immediately on go-live day to force adoption", "textDe": "Das Legacy-System am Go-Live-Tag sofort deaktivieren um Adoption zu erzwingen", "isCorrect": false, "explanation": "Forced cutover without transition creates chaos and resistance. A parallel-run period is usually recommended for critical systems.", "explanationDe": "Erzwungene Umstellung ohne Uebergang schafft Chaos und Widerstand. Ein Parallelbetrieb wird fuer kritische Systeme empfohlen." },
      { "id": "opt-4", "text": "Send a single company-wide email announcing the new system", "textDe": "Eine einzelne unternehmensweite E-Mail senden die das neue System ankuendigt", "isCorrect": false, "explanation": "A single email is insufficient for change management. Effective adoption requires ongoing communication, training, and support structures.", "explanationDe": "Eine einzelne E-Mail ist fuer Change Management unzureichend. Effektive Adoption erfordert laufende Kommunikation, Schulung und Supportstrukturen." }
    ],
    "explanation": "User adoption planning requires champion networks, role-specific training, and phased rollouts. The Solution Architect must advocate for organizational change management alongside technical delivery.",
    "explanationDe": "Benutzeradoptionsplanung erfordert Champion-Netzwerke, rollenspezifische Schulung und phasenweise Rollouts. Der Solution Architect muss organisatorisches Change Management neben der technischen Bereitstellung vertreten.",
    "learnRef": { "title": "PL-600: User adoption", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/adoption/strategy" },
    "learnRefDe": { "title": "PL-600: Benutzeradoption", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/adoption/strategy" }
  },

  // --- Envisioning: CoE and governance strategy ---
  {
    "id": "pl6-q39",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "An enterprise with 50,000 employees is adopting Power Platform. The CTO asks the Solution Architect to recommend a governance model. What should the architect recommend as the FIRST step?",
    "promptDe": "Ein Unternehmen mit 50.000 Mitarbeitern fuehrt Power Platform ein. Der CTO bittet den Solution Architect ein Governance-Modell zu empfehlen. Was sollte der Architekt als ERSTEN Schritt empfehlen?",
    "hint": "Think about centralized governance for large-scale platform adoption.",
    "hintDe": "Denke an zentralisierte Governance fuer grossflaechige Plattformadoption.",
    "options": [
      { "id": "opt-0", "text": "Establish a Center of Excellence (CoE) with the CoE Starter Kit to gain visibility into current usage and define governance policies", "textDe": "Ein Center of Excellence (CoE) mit dem CoE Starter Kit einrichten um Transparenz ueber aktuelle Nutzung zu gewinnen und Governance-Richtlinien zu definieren", "isCorrect": true, "explanation": "The CoE Starter Kit provides immediate visibility into Power Platform usage, maker activity, and app inventory — essential data for designing governance policies at enterprise scale.", "explanationDe": "Das CoE Starter Kit bietet sofortige Transparenz ueber Power Platform-Nutzung, Maker-Aktivitaet und App-Inventar — essentielle Daten fuer die Gestaltung von Governance-Richtlinien im Unternehmensmasstab." },
      { "id": "opt-1", "text": "Block all Power Platform access until governance policies are finalized", "textDe": "Allen Power Platform-Zugriff blockieren bis Governance-Richtlinien finalisiert sind", "isCorrect": false, "explanation": "Blocking access stifles innovation and creates user frustration. Governance should enable, not prevent, productive use of the platform.", "explanationDe": "Zugriff zu blockieren erstickt Innovation und erzeugt Benutzerfrustation. Governance sollte produktive Plattformnutzung ermoeglichen, nicht verhindern." },
      { "id": "opt-2", "text": "Create a 200-page governance document before any platform configuration", "textDe": "Ein 200-Seiten-Governance-Dokument erstellen bevor die Plattform konfiguriert wird", "isCorrect": false, "explanation": "A massive upfront document is impractical and will be outdated quickly. Start with data-driven governance using the CoE toolkit, then iterate policies based on real usage patterns.", "explanationDe": "Ein massives Vorab-Dokument ist unpraktisch und schnell veraltet. Starten Sie mit datengesteuerter Governance mittels CoE-Toolkit, dann iterieren Sie Richtlinien basierend auf realen Nutzungsmustern." },
      { "id": "opt-3", "text": "Assign one Power Platform admin and let them manage everything manually", "textDe": "Einen Power Platform-Admin zuweisen und alles manuell verwalten lassen", "isCorrect": false, "explanation": "One admin cannot govern a 50,000-user environment. Enterprise-scale governance requires automated tooling, defined processes, and a dedicated CoE team.", "explanationDe": "Ein Admin kann keine 50.000-Benutzer-Umgebung regieren. Governance im Unternehmensmasstab erfordert automatisierte Tools, definierte Prozesse und ein dediziertes CoE-Team." }
    ],
    "explanation": "For enterprise-scale Power Platform adoption, establishing a Center of Excellence is the recommended first step. The CoE Starter Kit provides the visibility and tooling needed to define effective governance policies.",
    "explanationDe": "Fuer Power Platform-Adoption im Unternehmensmasstab ist die Einrichtung eines Center of Excellence der empfohlene erste Schritt. Das CoE Starter Kit bietet die Transparenz und Tools fuer effektive Governance-Richtlinien.",
    "learnRef": { "title": "PL-600: CoE Starter Kit", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/coe/starter-kit" },
    "learnRefDe": { "title": "PL-600: CoE Starter Kit", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/coe/starter-kit" }
  },

  // --- Envisioning: Project methodology ---
  {
    "id": "pl6-q40",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A client wants to implement a complex D365 + Power Platform solution with unclear requirements that are expected to evolve. Which project delivery approach should the Solution Architect recommend?",
    "promptDe": "Ein Kunde moechte eine komplexe D365 + Power Platform-Loesung implementieren mit unklaren Anforderungen die sich voraussichtlich weiterentwickeln werden. Welchen Projektlieferansatz sollte der Solution Architect empfehlen?",
    "hint": "Think about which methodology handles evolving requirements best.",
    "hintDe": "Ueberlege welche Methodik sich am besten fuer sich weiterentwickelnde Anforderungen eignet.",
    "options": [
      { "id": "opt-0", "text": "An agile/iterative approach with sprints, allowing requirements to be refined based on working demos and stakeholder feedback", "textDe": "Einen agilen/iterativen Ansatz mit Sprints, der es ermoeglicht Anforderungen basierend auf funktionierenden Demos und Stakeholder-Feedback zu verfeinern", "isCorrect": true, "explanation": "Agile is ideal for evolving requirements. Sprint demos provide regular feedback loops, and Power Platform's low-code nature supports rapid iteration.", "explanationDe": "Agil ist ideal fuer sich weiterentwickelnde Anforderungen. Sprint-Demos bieten regelmaessige Feedback-Schleifen, und Power Platforms Low-Code-Natur unterstuetzt schnelle Iteration." },
      { "id": "opt-1", "text": "A waterfall approach with extensive upfront documentation to lock down all requirements before development", "textDe": "Einen Wasserfallansatz mit umfangreicher Vorab-Dokumentation um alle Anforderungen vor der Entwicklung festzulegen", "isCorrect": false, "explanation": "Waterfall assumes stable requirements. When requirements are unclear and evolving, locking them down upfront leads to misaligned solutions and costly change requests.", "explanationDe": "Wasserfall setzt stabile Anforderungen voraus. Bei unklaren, sich weiterentwickelnden Anforderungen fuehrt das Festlegen zu fehlausgerichteten Loesungen und kostspieligen Aenderungsantraegen." },
      { "id": "opt-2", "text": "Skip formal methodology and let the team build features as stakeholders request them", "textDe": "Formale Methodik ueberspringen und das Team Features bauen lassen wenn Stakeholder sie anfordern", "isCorrect": false, "explanation": "No methodology leads to uncontrolled scope, quality issues, and delivery failures. Even agile requires structured ceremonies and backlog management.", "explanationDe": "Keine Methodik fuehrt zu unkontrolliertem Scope, Qualitaetsproblemen und Lieferversagen. Selbst agil erfordert strukturierte Zeremonien und Backlog-Management." },
      { "id": "opt-3", "text": "Start with a 6-month proof of concept before committing to any delivery approach", "textDe": "Mit einem 6-monatigen Proof of Concept beginnen bevor ein Lieferansatz festgelegt wird", "isCorrect": false, "explanation": "A 6-month PoC is excessive. A focused PoC (2-4 weeks) for high-risk areas combined with agile delivery is more appropriate.", "explanationDe": "Ein 6-monatiger PoC ist uebertrieben. Ein fokussierter PoC (2-4 Wochen) fuer Hochrisikobereiche kombiniert mit agiler Lieferung ist angemessener." }
    ],
    "explanation": "Microsoft recommends agile delivery for Power Platform projects, especially when requirements are evolving. The Solution Architect should advocate for iterative delivery with regular stakeholder feedback.",
    "explanationDe": "Microsoft empfiehlt agile Lieferung fuer Power Platform-Projekte, besonders bei sich weiterentwickelnden Anforderungen. Der Solution Architect sollte iterative Lieferung mit regelmaessigem Stakeholder-Feedback vertreten.",
    "learnRef": { "title": "PL-600: Implementation approaches", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/implementation-guide/implementing-cloud-solutions" },
    "learnRefDe": { "title": "PL-600: Implementierungsansaetze", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/implementation-guide/implementing-cloud-solutions" }
  },

  // --- Envisioning: Licensing impact on architecture ---
  {
    "id": "pl6-q41",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A company plans to build 15 Power Apps used by different departments. Some apps are used by all 3,000 employees, others by only 50 specialists. What licensing strategy should the Solution Architect recommend?",
    "promptDe": "Ein Unternehmen plant 15 Power Apps zu bauen die von verschiedenen Abteilungen genutzt werden. Manche Apps werden von allen 3.000 Mitarbeitern genutzt, andere nur von 50 Spezialisten. Welche Lizenzierungsstrategie sollte der Solution Architect empfehlen?",
    "hint": "Think about Power Apps per-user vs per-app licensing economics.",
    "hintDe": "Denke an Power Apps Pro-Benutzer vs Pro-App-Lizenzierungsoekonomie.",
    "options": [
      { "id": "opt-0", "text": "Per-user licenses for heavy users accessing multiple apps, and per-app licenses for specialists who only need 1-2 specific apps", "textDe": "Pro-Benutzer-Lizenzen fuer Heavy User die mehrere Apps nutzen, und Pro-App-Lizenzen fuer Spezialisten die nur 1-2 spezifische Apps benoetigen", "isCorrect": true, "explanation": "A mixed licensing strategy optimizes cost. Per-user is economical for users accessing many apps; per-app is cheaper for users who only need specific apps.", "explanationDe": "Eine gemischte Lizenzierungsstrategie optimiert Kosten. Pro-Benutzer ist wirtschaftlich fuer Benutzer die viele Apps nutzen; Pro-App ist guenstiger fuer Benutzer die nur spezifische Apps benoetigen." },
      { "id": "opt-1", "text": "Per-user licenses for all 3,000 employees to keep it simple", "textDe": "Pro-Benutzer-Lizenzen fuer alle 3.000 Mitarbeiter um es einfach zu halten", "isCorrect": false, "explanation": "Per-user for everyone is the simplest but most expensive approach. Many users only need 1-2 apps, making per-app licensing more cost-effective for them.", "explanationDe": "Pro-Benutzer fuer alle ist der einfachste aber teuerste Ansatz. Viele Benutzer benoetigen nur 1-2 Apps, was Pro-App-Lizenzierung fuer sie kosteneffizienter macht." },
      { "id": "opt-2", "text": "Build all apps as canvas apps embedded in Teams to avoid Power Apps licensing entirely", "textDe": "Alle Apps als Canvas-Apps in Teams einbetten um Power Apps-Lizenzierung vollstaendig zu vermeiden", "isCorrect": false, "explanation": "Teams-embedded apps using standard connectors may use seeded M365 licenses, but premium connectors (including Dataverse) still require Power Apps licenses. This approach also sacrifices model-driven app capabilities.", "explanationDe": "In Teams eingebettete Apps mit Standard-Connectors koennen geseedete M365-Lizenzen nutzen, aber Premium-Connectors (einschliesslich Dataverse) erfordern weiterhin Power Apps-Lizenzen." },
      { "id": "opt-3", "text": "Use Power Pages for all apps to leverage per-login pricing", "textDe": "Power Pages fuer alle Apps verwenden um pro-Login-Preise zu nutzen", "isCorrect": false, "explanation": "Power Pages is designed for external-facing portals, not internal business apps. Using it for internal apps would sacrifice functionality and user experience.", "explanationDe": "Power Pages ist fuer externe Portale konzipiert, nicht fuer interne Business-Apps. Die Nutzung fuer interne Apps wuerde Funktionalitaet und Benutzererfahrung opfern." }
    ],
    "explanation": "Licensing strategy is a critical envisioning consideration. The Solution Architect must understand Power Apps per-user vs per-app economics and recommend the optimal mix based on usage patterns.",
    "explanationDe": "Lizenzierungsstrategie ist eine kritische Envisioning-Betrachtung. Der Solution Architect muss die Power Apps Pro-Benutzer vs Pro-App-Oekonomie verstehen und den optimalen Mix basierend auf Nutzungsmustern empfehlen.",
    "learnRef": { "title": "PL-600: Licensing considerations", "url": "https://learn.microsoft.com/en-us/power-platform/admin/pricing-billing-skus" },
    "learnRefDe": { "title": "PL-600: Lizenzierungsaspekte", "url": "https://learn.microsoft.com/de-de/power-platform/admin/pricing-billing-skus" }
  },

  // --- Envisioning: Current-state to future-state ---
  {
    "id": "pl6-q42",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "An insurance company has a paper-based claims process with 12 manual steps, 3 approval layers, and an average processing time of 14 days. The Solution Architect is designing the future-state process. What is the recommended approach?",
    "promptDe": "Eine Versicherungsgesellschaft hat einen papierbasierten Schadensprozess mit 12 manuellen Schritten, 3 Genehmigungsebenen und einer durchschnittlichen Bearbeitungszeit von 14 Tagen. Der Solution Architect entwirft den Future-State-Prozess. Was ist der empfohlene Ansatz?",
    "hint": "Don't just digitize the existing process — rethink it.",
    "hintDe": "Digitalisiere nicht nur den bestehenden Prozess — ueberdenke ihn.",
    "options": [
      { "id": "opt-0", "text": "Analyze each step for elimination or automation potential, redesign the process to remove unnecessary approvals, then map the optimized process to Power Platform capabilities", "textDe": "Jeden Schritt auf Eliminations- oder Automatisierungspotenzial analysieren, den Prozess neu gestalten um unnoetige Genehmigungen zu entfernen, dann den optimierten Prozess auf Power Platform-Faehigkeiten abbilden", "isCorrect": true, "explanation": "Process optimization before digitization is essential. The architect should challenge existing steps, eliminate waste, and then design the optimized process using appropriate platform tools.", "explanationDe": "Prozessoptimierung vor Digitalisierung ist essenziell. Der Architekt sollte bestehende Schritte hinterfragen, Verschwendung eliminieren und dann den optimierten Prozess mit geeigneten Plattformtools entwerfen." },
      { "id": "opt-1", "text": "Replicate all 12 steps and 3 approval layers exactly in a Power Automate cloud flow", "textDe": "Alle 12 Schritte und 3 Genehmigungsebenen exakt in einem Power Automate Cloud Flow replizieren", "isCorrect": false, "explanation": "Digitizing an inefficient process without optimization just creates a fast bad process. The architect should redesign before implementing.", "explanationDe": "Einen ineffizienten Prozess ohne Optimierung zu digitalisieren schafft nur einen schnellen schlechten Prozess. Der Architekt sollte vor der Implementierung neu gestalten." },
      { "id": "opt-2", "text": "Use Power Automate desktop flows to automate the paper-based steps via RPA", "textDe": "Power Automate Desktop Flows verwenden um die papierbasierten Schritte per RPA zu automatisieren", "isCorrect": false, "explanation": "RPA for paper processes makes no sense — RPA automates UI interactions with digital systems. The process needs fundamental redesign, not UI automation.", "explanationDe": "RPA fuer Papierprozesse ergibt keinen Sinn — RPA automatisiert UI-Interaktionen mit digitalen Systemen. Der Prozess braucht grundlegende Neugestaltung, nicht UI-Automatisierung." },
      { "id": "opt-3", "text": "Immediately build a model-driven app and add business process flows matching the current steps", "textDe": "Sofort eine modellgesteuerte App bauen und Business Process Flows erstellen die den aktuellen Schritten entsprechen", "isCorrect": false, "explanation": "Building without process analysis locks in inefficiency. The architect must map current-state to future-state before designing the technical solution.", "explanationDe": "Bauen ohne Prozessanalyse zementiert Ineffizienz. Der Architekt muss den Ist-Zustand auf den Soll-Zustand abbilden bevor die technische Loesung entworfen wird." }
    ],
    "explanation": "Designing future-state business processes requires analyzing and optimizing the current state, not just digitizing it. The Solution Architect must challenge existing steps, eliminate waste, and then map the optimized process to platform capabilities.",
    "explanationDe": "Das Design von Soll-Geschaeftsprozessen erfordert Analyse und Optimierung des Ist-Zustands, nicht nur Digitalisierung. Der Solution Architect muss bestehende Schritte hinterfragen und den optimierten Prozess auf Plattformfaehigkeiten abbilden.",
    "learnRef": { "title": "PL-600: Business process design", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/implementation-guide/process-focused-solution" },
    "learnRefDe": { "title": "PL-600: Geschaeftsprozessdesign", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/implementation-guide/process-focused-solution" }
  },

  // --- Architecture: Power Automate patterns ---
  {
    "id": "pl6-q43",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A manufacturing company needs to automate three processes: (1) a multi-stage production approval with visibility into current stage, (2) nightly data sync from SAP, and (3) generating PDF invoices from a legacy Windows desktop application. Which Power Automate architecture is correct?",
    "promptDe": "Ein Fertigungsunternehmen muss drei Prozesse automatisieren: (1) eine mehrstufige Produktionsgenehmigung mit Sichtbarkeit des aktuellen Stadiums, (2) naechtliche Datensynchronisation von SAP, und (3) PDF-Rechnungserstellung aus einer Legacy-Windows-Desktopanwendung. Welche Power Automate-Architektur ist korrekt?",
    "hint": "Match each process type to the right automation technology.",
    "hintDe": "Ordne jeden Prozesstyp der richtigen Automatisierungstechnologie zu.",
    "options": [
      { "id": "opt-0", "text": "Business Process Flow for (1) stage tracking, scheduled cloud flow for (2) SAP sync, and unattended desktop flow for (3) legacy PDF generation", "textDe": "Business Process Flow fuer (1) Stadien-Tracking, geplanter Cloud Flow fuer (2) SAP-Sync, und unbeaufsichtigter Desktop Flow fuer (3) Legacy-PDF-Generierung", "isCorrect": true, "explanation": "BPFs provide visual stage tracking in model-driven apps. Scheduled cloud flows handle timed integrations. Unattended desktop flows automate legacy UI without user interaction.", "explanationDe": "BPFs bieten visuelles Stadien-Tracking in modellgesteuerten Apps. Geplante Cloud Flows behandeln zeitgesteuerte Integrationen. Unbeaufsichtigte Desktop Flows automatisieren Legacy-UI ohne Benutzerinteraktion." },
      { "id": "opt-1", "text": "Cloud flows for all three processes since they can handle any automation scenario", "textDe": "Cloud Flows fuer alle drei Prozesse da sie jedes Automatisierungsszenario behandeln koennen", "isCorrect": false, "explanation": "Cloud flows cannot interact with desktop application UIs (scenario 3) and don't provide visual stage tracking in model-driven apps (scenario 1). Each automation type has its purpose.", "explanationDe": "Cloud Flows koennen nicht mit Desktop-Anwendungs-UIs interagieren (Szenario 3) und bieten kein visuelles Stadien-Tracking in modellgesteuerten Apps (Szenario 1)." },
      { "id": "opt-2", "text": "Desktop flows for all three to keep the architecture consistent", "textDe": "Desktop Flows fuer alle drei um die Architektur konsistent zu halten", "isCorrect": false, "explanation": "Desktop flows require a machine to run on and are designed for UI automation. Using them for cloud integrations (SAP sync) and stage tracking is inappropriate.", "explanationDe": "Desktop Flows benoetigen eine Maschine und sind fuer UI-Automatisierung konzipiert. Sie fuer Cloud-Integrationen (SAP-Sync) und Stadien-Tracking zu verwenden ist unangemessen." },
      { "id": "opt-3", "text": "Business Process Flows for all three since they provide the best user visibility", "textDe": "Business Process Flows fuer alle drei da sie die beste Benutzersichtbarkeit bieten", "isCorrect": false, "explanation": "BPFs guide users through stages but cannot perform data integration or desktop automation. They are designed for user-driven process guidance, not system automation.", "explanationDe": "BPFs fuehren Benutzer durch Stadien, koennen aber keine Datenintegration oder Desktop-Automatisierung durchfuehren. Sie sind fuer benutzergesteuerte Prozessfuehrung konzipiert." }
    ],
    "explanation": "The Solution Architect must select the right automation tool for each scenario: BPFs for guided user processes, cloud flows for integrations and scheduled tasks, desktop flows for legacy UI automation.",
    "explanationDe": "Der Solution Architect muss das richtige Automatisierungstool fuer jedes Szenario waehlen: BPFs fuer gefuehrte Benutzerprozesse, Cloud Flows fuer Integrationen und geplante Aufgaben, Desktop Flows fuer Legacy-UI-Automatisierung.",
    "learnRef": { "title": "PL-600: Automation architecture", "url": "https://learn.microsoft.com/en-us/power-automate/guidance/planning/introduction" },
    "learnRefDe": { "title": "PL-600: Automatisierungsarchitektur", "url": "https://learn.microsoft.com/de-de/power-automate/guidance/planning/introduction" }
  },

  // --- Architecture: Power Apps patterns (model-driven vs canvas vs custom pages) ---
  {
    "id": "pl6-q44",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A company needs three app experiences: (1) data-heavy case management for service agents, (2) a simple time-entry form for field workers on mobile, and (3) a custom dashboard with drag-and-drop scheduling inside the case management app. Which app architecture is most appropriate?",
    "promptDe": "Ein Unternehmen benoetigt drei App-Erfahrungen: (1) datenintensives Case Management fuer Service-Agenten, (2) ein einfaches Zeiterfassungsformular fuer Aussendienstmitarbeiter auf Mobilgeraeten, und (3) ein benutzerdefiniertes Dashboard mit Drag-and-Drop-Planung innerhalb der Case-Management-App. Welche App-Architektur ist am geeignetsten?",
    "hint": "Think about which app type best serves each user role and use case.",
    "hintDe": "Ueberlege welcher App-Typ jede Benutzerrolle und jeden Use Case am besten bedient.",
    "options": [
      { "id": "opt-0", "text": "Model-driven app for (1), canvas app for (2), and a custom page embedded in the model-driven app for (3)", "textDe": "Modellgesteuerte App fuer (1), Canvas-App fuer (2), und eine Custom Page eingebettet in die modellgesteuerte App fuer (3)", "isCorrect": true, "explanation": "Model-driven apps excel at data-rich forms and views. Canvas apps provide flexible mobile UX. Custom pages bring canvas-app flexibility inside model-driven apps for specialized experiences.", "explanationDe": "Modellgesteuerte Apps eignen sich hervorragend fuer datenreiche Formulare und Ansichten. Canvas-Apps bieten flexible mobile UX. Custom Pages bringen Canvas-App-Flexibilitaet in modellgesteuerte Apps fuer spezialisierte Erfahrungen." },
      { "id": "opt-1", "text": "Canvas apps for all three to maximize design flexibility", "textDe": "Canvas-Apps fuer alle drei um maximale Designflexibilitaet zu erreichen", "isCorrect": false, "explanation": "Canvas apps require building every UI element manually, making data-heavy case management very expensive to build and maintain. Model-driven apps auto-generate forms from the data model.", "explanationDe": "Canvas-Apps erfordern den manuellen Aufbau jedes UI-Elements, was datenintensives Case Management sehr teuer in Erstellung und Wartung macht. Modellgesteuerte Apps generieren Formulare automatisch aus dem Datenmodell." },
      { "id": "opt-2", "text": "Model-driven apps for all three since all data is in Dataverse", "textDe": "Modellgesteuerte Apps fuer alle drei da alle Daten in Dataverse sind", "isCorrect": false, "explanation": "Model-driven apps have limited mobile UX flexibility for simple data entry, and don't support drag-and-drop custom UIs natively. The right tool depends on the user experience needed.", "explanationDe": "Modellgesteuerte Apps haben begrenzte mobile UX-Flexibilitaet fuer einfache Dateneingabe und unterstuetzen nativ keine Drag-and-Drop-UIs. Das richtige Tool haengt von der benoetigten Benutzererfahrung ab." },
      { "id": "opt-3", "text": "One Power Pages site covering all three use cases", "textDe": "Eine Power Pages-Site die alle drei Use Cases abdeckt", "isCorrect": false, "explanation": "Power Pages is designed for external-facing portals, not internal operational apps. It lacks the rich data management capabilities of model-driven apps.", "explanationDe": "Power Pages ist fuer externe Portale konzipiert, nicht fuer interne operative Apps. Es fehlen die reichhaltigen Datenverwaltungsfaehigkeiten modellgesteuerter Apps." }
    ],
    "explanation": "App architecture decisions must match app type to user needs. Model-driven for data-rich operations, canvas for flexible mobile UX, and custom pages for embedding tailored experiences within model-driven apps.",
    "explanationDe": "App-Architekturentscheidungen muessen den App-Typ an Benutzerbeduerfnisse anpassen. Modellgesteuert fuer datenreiche Operationen, Canvas fuer flexible mobile UX, und Custom Pages fuer eingebettete massgeschneiderte Erfahrungen.",
    "learnRef": { "title": "PL-600: App design patterns", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-app-page-overview" },
    "learnRefDe": { "title": "PL-600: App-Designmuster", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/model-app-page-overview" }
  },

  // --- Architecture: ALM and solution segmentation ---
  {
    "id": "pl6-q45",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A project has three development teams working in parallel on the same Dataverse environment: Team A on customer management, Team B on inventory, and Team C on shared components used by both. What solution segmentation strategy should the architect recommend?",
    "promptDe": "Ein Projekt hat drei Entwicklungsteams die parallel in derselben Dataverse-Umgebung arbeiten: Team A an Kundenverwaltung, Team B an Inventar und Team C an gemeinsamen Komponenten die von beiden genutzt werden. Welche Loesungssegmentierungsstrategie sollte der Architekt empfehlen?",
    "hint": "Think about solution dependencies and independent deployability.",
    "hintDe": "Denke an Loesungsabhaengigkeiten und unabhaengige Bereitstellbarkeit.",
    "options": [
      { "id": "opt-0", "text": "A base solution for shared components (Team C), with separate dependent solutions for customer management (Team A) and inventory (Team B)", "textDe": "Eine Basisoesung fuer gemeinsame Komponenten (Team C), mit separaten abhaengigen Loesungen fuer Kundenverwaltung (Team A) und Inventar (Team B)", "isCorrect": true, "explanation": "This composite solution pattern allows independent deployment of domain solutions while sharing common components through the base layer. Teams can develop and deploy independently.", "explanationDe": "Dieses Composite-Loesungsmuster ermoeglicht unabhaengige Bereitstellung von Domainoesungen bei gleichzeitiger gemeinsamer Nutzung von Komponenten durch die Basisschicht." },
      { "id": "opt-1", "text": "One single solution containing all components from all three teams", "textDe": "Eine einzelne Loesung die alle Komponenten aller drei Teams enthaelt", "isCorrect": false, "explanation": "A monolithic solution creates merge conflicts, blocks independent deployment, and increases deployment risk. Any change requires deploying everything.", "explanationDe": "Eine monolithische Loesung erzeugt Merge-Konflikte, blockiert unabhaengige Bereitstellung und erhoeht das Bereitstellungsrisiko. Jede Aenderung erfordert die Bereitstellung von allem." },
      { "id": "opt-2", "text": "Three completely independent solutions with duplicated shared components", "textDe": "Drei vollstaendig unabhaengige Loesungen mit duplizierten gemeinsamen Komponenten", "isCorrect": false, "explanation": "Duplicating shared components creates maintenance nightmares and version conflicts. Changes to shared components must be synchronized across all copies.", "explanationDe": "Das Duplizieren gemeinsamer Komponenten schafft Wartungs-Albtraeume und Versionskonflikte. Aenderungen an gemeinsamen Komponenten muessen ueber alle Kopien synchronisiert werden." },
      { "id": "opt-3", "text": "Use unmanaged solutions for all teams to avoid solution layering complexity", "textDe": "Unverwaltete Loesungen fuer alle Teams verwenden um Loesungsschichtungs-Komplexitaet zu vermeiden", "isCorrect": false, "explanation": "Unmanaged solutions in production are an anti-pattern. They cannot be cleanly removed or updated, and create ungoverned component changes.", "explanationDe": "Unverwaltete Loesungen in Produktion sind ein Anti-Pattern. Sie koennen nicht sauber entfernt oder aktualisiert werden und erzeugen unregulierte Komponentenaenderungen." }
    ],
    "explanation": "Solution segmentation with a base/dependent pattern enables parallel team development, independent deployability, and clean ALM. This is a key architecture skill tested in PL-600.",
    "explanationDe": "Loesungssegmentierung mit einem Basis-/Abhaengigkeitsmuster ermoeglicht parallele Teamarbeit, unabhaengige Bereitstellbarkeit und sauberes ALM. Dies ist eine Schluesselarchitektur-Kompetenz in PL-600.",
    "learnRef": { "title": "PL-600: Solution segmentation", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm" },
    "learnRefDe": { "title": "PL-600: Loesungssegmentierung", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-concepts-alm" }
  },

  // --- Architecture: Environment strategy ---
  {
    "id": "pl6-q46",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "multi-choice",
    "prompt": "A multinational company with teams in Germany, the US, and Japan is designing their Power Platform environment strategy. Which THREE factors should drive the environment topology?",
    "promptDe": "Ein multinationales Unternehmen mit Teams in Deutschland, den USA und Japan plant seine Power Platform-Umgebungsstrategie. Welche DREI Faktoren sollten die Umgebungstopologie bestimmen?",
    "hint": "Think about legal, operational, and deployment considerations for multi-region enterprises.",
    "hintDe": "Denke an rechtliche, operative und Bereitstellungsaspekte fuer Multi-Region-Unternehmen.",
    "options": [
      { "id": "opt-0", "text": "Data residency requirements — EU data must stay in EU data centers to comply with GDPR", "textDe": "Datenresidenz-Anforderungen — EU-Daten muessen in EU-Rechenzentren bleiben um die DSGVO einzuhalten", "isCorrect": true, "explanation": "GDPR and other regulations require data to reside in specific geographic regions. Environments must be provisioned in the correct regions.", "explanationDe": "DSGVO und andere Vorschriften erfordern, dass Daten in bestimmten geografischen Regionen gespeichert werden. Umgebungen muessen in den korrekten Regionen bereitgestellt werden." },
      { "id": "opt-1", "text": "ALM isolation — separate dev/test/UAT/prod environments per workstream to enable safe deployment pipelines", "textDe": "ALM-Isolation — separate Dev/Test/UAT/Prod-Umgebungen pro Workstream um sichere Bereitstellungspipelines zu ermoeglichen", "isCorrect": true, "explanation": "ALM best practice requires isolated environments for each deployment stage. This prevents development work from affecting production.", "explanationDe": "ALM-Best-Practice erfordert isolierte Umgebungen fuer jede Bereitstellungsstufe. Dies verhindert, dass Entwicklungsarbeit die Produktion beeinflusst." },
      { "id": "opt-2", "text": "Security boundary separation — different business units or subsidiaries may need isolated environments to prevent cross-access", "textDe": "Sicherheitsgrenzentrennung — verschiedene Geschaeftsbereiche oder Tochtergesellschaften benoetigen moeglicherweise isolierte Umgebungen um Cross-Access zu verhindern", "isCorrect": true, "explanation": "Business units with different security or compliance requirements may need separate environments to maintain proper data isolation.", "explanationDe": "Geschaeftsbereiche mit unterschiedlichen Sicherheits- oder Compliance-Anforderungen benoetigen moeglicherweise separate Umgebungen zur Aufrechterhaltung der Datenisolierung." },
      { "id": "opt-3", "text": "Minimizing the total number of environments to reduce licensing costs", "textDe": "Die Gesamtzahl der Umgebungen minimieren um Lizenzkosten zu reduzieren", "isCorrect": false, "explanation": "While cost matters, environment strategy should be driven by compliance, ALM, and security needs. Under-provisioning environments creates governance and deployment risks.", "explanationDe": "Obwohl Kosten wichtig sind, sollte die Umgebungsstrategie von Compliance, ALM und Sicherheitsbeduerfnissen bestimmt werden. Zu wenige Umgebungen schaffen Governance- und Bereitstellungsrisiken." },
      { "id": "opt-4", "text": "Using the same time zone across all environments for consistency", "textDe": "Dieselbe Zeitzone fuer alle Umgebungen verwenden fuer Konsistenz", "isCorrect": false, "explanation": "Time zones are a minor operational detail, not a driver for environment topology. Data residency, ALM, and security are the primary factors.", "explanationDe": "Zeitzonen sind ein untergeordnetes operatives Detail, kein Treiber fuer Umgebungstopologie. Datenresidenz, ALM und Sicherheit sind die primaeren Faktoren." }
    ],
    "explanation": "Environment strategy for multinational organizations must address data residency compliance, ALM pipeline isolation, and security boundary requirements. These are the primary architectural drivers.",
    "explanationDe": "Die Umgebungsstrategie fuer multinationale Organisationen muss Datenresidenz-Compliance, ALM-Pipeline-Isolation und Sicherheitsgrenzanforderungen adressieren.",
    "learnRef": { "title": "PL-600: Environment strategy", "url": "https://learn.microsoft.com/en-us/power-platform/admin/environments-overview" },
    "learnRefDe": { "title": "PL-600: Umgebungsstrategie", "url": "https://learn.microsoft.com/de-de/power-platform/admin/environments-overview" }
  },

  // --- Integration: Virtual tables vs data sync ---
  {
    "id": "pl6-q47",
    "certId": "pl600",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "A company wants Dataverse users to view product catalog data from their SAP system. The catalog has 500,000 products updated nightly. Users need to search and filter products but never modify them in Dataverse. What integration approach should the architect recommend?",
    "promptDe": "Ein Unternehmen moechte dass Dataverse-Benutzer Produktkatalogdaten aus ihrem SAP-System anzeigen koennen. Der Katalog hat 500.000 Produkte die naechtlich aktualisiert werden. Benutzer muessen Produkte suchen und filtern, aber nie in Dataverse aendern. Welchen Integrationsansatz sollte der Architekt empfehlen?",
    "hint": "Consider read-only access to large external datasets vs. importing all data.",
    "hintDe": "Beruecksichtige den Nur-Lese-Zugriff auf grosse externe Datensaetze vs. den Import aller Daten.",
    "options": [
      { "id": "opt-0", "text": "Use virtual tables to expose SAP data in Dataverse without importing it, leveraging the virtual table provider for real-time reads", "textDe": "Virtuelle Tabellen verwenden um SAP-Daten in Dataverse anzuzeigen ohne sie zu importieren, unter Nutzung des Virtual-Table-Providers fuer Echtzeit-Lesezugriffe", "isCorrect": true, "explanation": "Virtual tables are ideal for read-only access to large external datasets. They avoid data duplication, storage costs, and sync complexity while providing a native Dataverse experience.", "explanationDe": "Virtuelle Tabellen sind ideal fuer Nur-Lese-Zugriff auf grosse externe Datensaetze. Sie vermeiden Datenduplizierung, Speicherkosten und Sync-Komplexitaet bei nativer Dataverse-Erfahrung." },
      { "id": "opt-1", "text": "Import all 500,000 products into Dataverse nightly using a Data Import flow", "textDe": "Alle 500.000 Produkte naechtlich per Data Import Flow in Dataverse importieren", "isCorrect": false, "explanation": "Importing 500K read-only records wastes Dataverse storage, increases API consumption, and creates unnecessary sync complexity for data users never modify.", "explanationDe": "500K Nur-Lese-Datensaetze zu importieren verschwendet Dataverse-Speicher, erhoeht API-Verbrauch und erzeugt unnoetige Sync-Komplexitaet fuer Daten die Benutzer nie aendern." },
      { "id": "opt-2", "text": "Build a custom connector and query SAP directly from each canvas app", "textDe": "Einen Custom Connector bauen und SAP direkt aus jeder Canvas-App abfragen", "isCorrect": false, "explanation": "Direct SAP queries from each app create tight coupling, inconsistent data access patterns, and no centralized data governance. Virtual tables provide a single access layer.", "explanationDe": "Direkte SAP-Abfragen aus jeder App erzeugen enge Kopplung, inkonsistente Datenzugriffsmuster und keine zentrale Datengovernance. Virtuelle Tabellen bieten eine einheitliche Zugriffsschicht." },
      { "id": "opt-3", "text": "Use Dual-write to keep Dataverse and SAP in sync", "textDe": "Dual-write verwenden um Dataverse und SAP synchron zu halten", "isCorrect": false, "explanation": "Dual-write is designed for bidirectional sync between D365 Finance/Operations and Dataverse, not for generic SAP integration. It's also overkill for read-only scenarios.", "explanationDe": "Dual-write ist fuer bidirektionale Synchronisation zwischen D365 Finance/Operations und Dataverse konzipiert, nicht fuer generische SAP-Integration. Fuer Nur-Lese-Szenarien ist es uebertrieben." }
    ],
    "explanation": "Virtual tables provide read-only access to external data sources without importing data into Dataverse. This is the recommended pattern for large, read-only external datasets.",
    "explanationDe": "Virtuelle Tabellen bieten Nur-Lese-Zugriff auf externe Datenquellen ohne Daten in Dataverse zu importieren. Dies ist das empfohlene Muster fuer grosse, externe Nur-Lese-Datensaetze.",
    "learnRef": { "title": "PL-600: Virtual tables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-virtual-entities" },
    "learnRefDe": { "title": "PL-600: Virtuelle Tabellen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-virtual-entities" }
  },

  // --- Integration: Event-driven architecture ---
  {
    "id": "pl6-q48",
    "certId": "pl600",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "An e-commerce company needs Dataverse to notify three downstream systems (warehouse, accounting, loyalty) whenever an order status changes. Each system processes the notification independently. What integration pattern should the architect use?",
    "promptDe": "Ein E-Commerce-Unternehmen muss drei nachgelagerte Systeme (Lager, Buchhaltung, Treueprogramm) benachrichtigen wenn sich ein Bestellstatus in Dataverse aendert. Jedes System verarbeitet die Benachrichtigung unabhaengig. Welches Integrationsmuster sollte der Architekt verwenden?",
    "hint": "Think about decoupled, one-to-many event distribution.",
    "hintDe": "Denke an entkoppelte Eins-zu-Viele-Ereignisverteilung.",
    "options": [
      { "id": "opt-0", "text": "Publish Dataverse events to Azure Service Bus topics, with each downstream system subscribing independently", "textDe": "Dataverse-Ereignisse an Azure Service Bus Topics publizieren, wobei jedes nachgelagerte System unabhaengig subskribiert", "isCorrect": true, "explanation": "Service Bus topics with subscriptions provide a publish-subscribe pattern. Dataverse can publish events via webhooks or the Service Bus plugin, and each subscriber processes independently.", "explanationDe": "Service Bus Topics mit Subscriptions bieten ein Publish-Subscribe-Muster. Dataverse kann Ereignisse ueber Webhooks oder das Service Bus Plugin publizieren, und jeder Subscriber verarbeitet unabhaengig." },
      { "id": "opt-1", "text": "Create three separate Power Automate flows each triggered by the same Dataverse record change", "textDe": "Drei separate Power Automate Flows erstellen die jeweils durch dieselbe Dataverse-Datensatzaenderung ausgeloest werden", "isCorrect": false, "explanation": "While functional, multiple flows on the same trigger don't guarantee delivery, lack dead-letter handling, and create tight coupling. Service Bus provides reliable, decoupled messaging.", "explanationDe": "Obwohl funktional, garantieren mehrere Flows auf demselben Trigger keine Zustellung, haben kein Dead-Letter-Handling und erzeugen enge Kopplung. Service Bus bietet zuverlaessiges, entkoppeltes Messaging." },
      { "id": "opt-2", "text": "Write a single plugin that calls all three system APIs synchronously in the post-operation pipeline", "textDe": "Ein einzelnes Plugin schreiben das alle drei System-APIs synchron in der Post-Operation-Pipeline aufruft", "isCorrect": false, "explanation": "Synchronous calls to three external systems in a plugin creates cascading failure risk, increases transaction time, and makes the Dataverse operation dependent on all three systems being available.", "explanationDe": "Synchrone Aufrufe zu drei externen Systemen in einem Plugin erzeugen kaskadierende Ausfallrisiken, erhoehen die Transaktionszeit und machen die Dataverse-Operation von der Verfuegbarkeit aller drei Systeme abhaengig." },
      { "id": "opt-3", "text": "Have each downstream system poll the Dataverse API every minute for status changes", "textDe": "Jedes nachgelagerte System jede Minute die Dataverse-API nach Statusaenderungen abfragen lassen", "isCorrect": false, "explanation": "Polling is inefficient, wastes API request entitlements, introduces latency, and doesn't scale well. Event-driven architecture with Service Bus is the recommended pattern.", "explanationDe": "Polling ist ineffizient, verschwendet API-Kontingente, fuehrt Latenz ein und skaliert schlecht. Ereignisgesteuerte Architektur mit Service Bus ist das empfohlene Muster." }
    ],
    "explanation": "Event-driven integration using Azure Service Bus topics and subscriptions provides reliable, decoupled, one-to-many event distribution. This is a key integration pattern for the PL-600 exam.",
    "explanationDe": "Ereignisgesteuerte Integration mit Azure Service Bus Topics und Subscriptions bietet zuverlaessige, entkoppelte Eins-zu-Viele-Ereignisverteilung. Dies ist ein Schluessel-Integrationsmuster fuer die PL-600-Pruefung.",
    "learnRef": { "title": "PL-600: Event-driven integration", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-webhooks" },
    "learnRefDe": { "title": "PL-600: Ereignisgesteuerte Integration", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/use-webhooks" }
  },

  // --- Data Model: Elastic tables and complex relationships ---
  {
    "id": "pl6-q49",
    "certId": "pl600",
    "topic": "Data Model",
    "type": "single-choice",
    "prompt": "An IoT solution generates 2 million telemetry records per day that need to be stored and queried alongside Dataverse operational data. Standard Dataverse tables are not suitable for this volume. What should the architect recommend?",
    "promptDe": "Eine IoT-Loesung generiert 2 Millionen Telemetriedatensaetze pro Tag die neben Dataverse-Betriebsdaten gespeichert und abgefragt werden muessen. Standard-Dataverse-Tabellen sind fuer dieses Volumen nicht geeignet. Was sollte der Architekt empfehlen?",
    "hint": "Think about Dataverse table types designed for high-volume, semi-structured data.",
    "hintDe": "Denke an Dataverse-Tabellentypen die fuer hochvolumige, semi-strukturierte Daten konzipiert sind.",
    "options": [
      { "id": "opt-0", "text": "Use Dataverse elastic tables backed by Azure Cosmos DB for the telemetry data, with relationships to standard tables for operational context", "textDe": "Dataverse Elastic Tables gestuetzt auf Azure Cosmos DB fuer die Telemetriedaten verwenden, mit Beziehungen zu Standardtabellen fuer operativen Kontext", "isCorrect": true, "explanation": "Elastic tables handle high-volume, semi-structured data with automatic horizontal scaling. They integrate natively with Dataverse while leveraging Cosmos DB for massive throughput.", "explanationDe": "Elastic Tables behandeln hochvolumige, semi-strukturierte Daten mit automatischer horizontaler Skalierung. Sie integrieren nativ mit Dataverse bei Nutzung von Cosmos DB fuer massiven Durchsatz." },
      { "id": "opt-1", "text": "Store all telemetry in standard Dataverse tables and increase the database capacity add-on", "textDe": "Alle Telemetrie in Standard-Dataverse-Tabellen speichern und das Datenbankkapazitaets-Add-on erhoehen", "isCorrect": false, "explanation": "Standard Dataverse tables aren't designed for IoT-scale ingestion rates. Even with added capacity, performance degrades with millions of daily inserts and the relational model is inefficient for time-series data.", "explanationDe": "Standard-Dataverse-Tabellen sind nicht fuer IoT-Skala-Aufnahmeraten konzipiert. Selbst mit zusaetzlicher Kapazitaet verschlechtert sich die Performance bei Millionen taeglicher Einfuegungen." },
      { "id": "opt-2", "text": "Store telemetry in a separate Azure SQL database with no Dataverse integration", "textDe": "Telemetrie in einer separaten Azure SQL-Datenbank ohne Dataverse-Integration speichern", "isCorrect": false, "explanation": "Separate storage without integration creates data silos. Users would need to switch contexts to correlate telemetry with operational data. Elastic tables provide native integration.", "explanationDe": "Separate Speicherung ohne Integration erzeugt Datensilos. Benutzer muessten den Kontext wechseln um Telemetrie mit Betriebsdaten zu korrelieren. Elastic Tables bieten native Integration." },
      { "id": "opt-3", "text": "Use Dataverse data retention policies to keep only the last 7 days of telemetry in standard tables", "textDe": "Dataverse-Datenaufbewahrungsrichtlinien verwenden um nur die letzten 7 Tage Telemetrie in Standardtabellen zu behalten", "isCorrect": false, "explanation": "Retention policies help with long-term storage management but don't solve the ingest rate problem. 2M records/day still overwhelms standard tables even with a 7-day window.", "explanationDe": "Aufbewahrungsrichtlinien helfen bei langfristigem Speichermanagement, loesen aber nicht das Aufnahmeraten-Problem. 2M Datensaetze/Tag ueberfordern Standardtabellen auch mit einem 7-Tage-Fenster." }
    ],
    "explanation": "Elastic tables are the recommended Dataverse solution for high-volume, semi-structured data like IoT telemetry. They provide Cosmos DB-backed horizontal scaling while maintaining Dataverse integration.",
    "explanationDe": "Elastic Tables sind die empfohlene Dataverse-Loesung fuer hochvolumige, semi-strukturierte Daten wie IoT-Telemetrie. Sie bieten Cosmos DB-gestuetzte horizontale Skalierung bei gleichzeitiger Dataverse-Integration.",
    "learnRef": { "title": "PL-600: Elastic tables", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-elastic-tables" },
    "learnRefDe": { "title": "PL-600: Elastic Tables", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-elastic-tables" }
  },

  // --- Security: Complex multi-BU scenario ---
  {
    "id": "pl6-q50",
    "certId": "pl600",
    "topic": "Security Model",
    "type": "single-choice",
    "prompt": "A company has three subsidiaries that should not see each other's data, but the corporate headquarters needs read access to all subsidiaries' records for reporting. How should the security architecture be designed?",
    "promptDe": "Ein Unternehmen hat drei Tochtergesellschaften die gegenseitig keine Daten sehen sollen, aber die Konzernzentrale benoetigt Lesezugriff auf alle Datensaetze der Tochtergesellschaften fuer Reporting. Wie sollte die Sicherheitsarchitektur gestaltet werden?",
    "hint": "Think about business unit hierarchy and security role scope.",
    "hintDe": "Denke an die Unternehmenseinheits-Hierarchie und den Sicherheitsrollen-Scope.",
    "options": [
      { "id": "opt-0", "text": "Create a root business unit for HQ, three child business units for subsidiaries, give subsidiary users BU-level access, and grant HQ users a security role with parent-child (organization-level) read access", "textDe": "Eine Root-Unternehmenseinheit fuer HQ erstellen, drei Kind-Unternehmenseinheiten fuer Tochtergesellschaften, Tochtergesellschafts-Benutzern BU-Level-Zugriff geben und HQ-Benutzern eine Sicherheitsrolle mit Parent-Child (organisationsweitem) Lesezugriff gewaehren", "isCorrect": true, "explanation": "The BU hierarchy naturally enforces data isolation between siblings while allowing parent-level access for HQ. This is the standard multi-BU security pattern.", "explanationDe": "Die BU-Hierarchie erzwingt natuerlich Datenisolierung zwischen Geschwistern waehrend sie Parent-Level-Zugriff fuer HQ ermoeglicht. Dies ist das Standard-Multi-BU-Sicherheitsmuster." },
      { "id": "opt-1", "text": "Put all users in the same business unit and use shared record-level access for each subsidiary", "textDe": "Alle Benutzer in dieselbe Unternehmenseinheit setzen und gemeinsamen datensatzbasierten Zugriff fuer jede Tochtergesellschaft verwenden", "isCorrect": false, "explanation": "A single BU means all users potentially see all data. Record-level sharing at scale is complex, fragile, and doesn't provide the clean isolation that BU hierarchy offers.", "explanationDe": "Eine einzelne BU bedeutet, dass alle Benutzer potenziell alle Daten sehen. Datensatzbasierte Freigabe im grossen Massstab ist komplex, fragil und bietet nicht die saubere Isolation der BU-Hierarchie." },
      { "id": "opt-2", "text": "Use three separate Dataverse environments, one per subsidiary, with Power BI connecting to all three for HQ reporting", "textDe": "Drei separate Dataverse-Umgebungen verwenden, eine pro Tochtergesellschaft, mit Power BI das fuer HQ-Reporting alle drei verbindet", "isCorrect": false, "explanation": "Separate environments provide isolation but make cross-subsidiary processes, shared reference data, and unified user management extremely complex. BU hierarchy solves this within one environment.", "explanationDe": "Separate Umgebungen bieten Isolation, machen aber uebergreifende Prozesse, gemeinsame Referenzdaten und einheitliche Benutzerverwaltung extrem komplex. BU-Hierarchie loest dies innerhalb einer Umgebung." },
      { "id": "opt-3", "text": "Create one security role per subsidiary and rely on column-level security to hide cross-subsidiary data", "textDe": "Eine Sicherheitsrolle pro Tochtergesellschaft erstellen und auf Spaltensicherheit vertrauen um tochtergesellschaftsuebergreifende Daten auszublenden", "isCorrect": false, "explanation": "Column-level security hides specific fields, not entire records. Row-level access through BU hierarchy is the correct mechanism for record-level data isolation.", "explanationDe": "Spaltensicherheit verbirgt spezifische Felder, nicht ganze Datensaetze. Zeilenzugriff durch BU-Hierarchie ist der korrekte Mechanismus fuer datensatzbasierte Datenisolierung." }
    ],
    "explanation": "Business unit hierarchy is the foundation of Dataverse row-level security. Child BUs isolate subsidiary data while parent BU access enables HQ reporting — a core PL-600 security architecture pattern.",
    "explanationDe": "Die Unternehmenseinheits-Hierarchie ist das Fundament der Dataverse-Zeilensicherheit. Kind-BUs isolieren Tochtergesellschaftsdaten waehrend Parent-BU-Zugriff HQ-Reporting ermoeglicht.",
    "learnRef": { "title": "PL-600: Business unit security", "url": "https://learn.microsoft.com/en-us/power-platform/admin/wp-security-cds" },
    "learnRefDe": { "title": "PL-600: Unternehmenseinheits-Sicherheit", "url": "https://learn.microsoft.com/de-de/power-platform/admin/wp-security-cds" }
  }
];
