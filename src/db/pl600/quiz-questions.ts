import type { QuizQuestion } from '@/types/quiz';

export const pl600Questions: QuizQuestion[] = [
  {
    "id": "p6-q1",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "During requirements analysis, a customer requirement cannot be met by any standard Power Platform feature or configuration. What should the solution architect do?",
    "promptDe": "Während der Anforderungsanalyse kann eine Kundenanforderung von keiner Standard-Power-Platform-Funktion oder -Konfiguration erfüllt werden. Was sollte der Solution Architect tun?",
    "hint": "Fit-gap analysis identifies where standard functionality ends and custom work begins.",
    "hintDe": "Fit-Gap-Analyse identifiziert, wo Standardfunktionalität endet und benutzerdefinierte Arbeit beginnt.",
    "options": [
      { "id": "opt-0", "text": "Document the gap and assess customization or third-party options", "textDe": "Die Lücke dokumentieren und Anpassungs- oder Drittanbieter-Optionen bewerten", "isCorrect": true, "explanation": "In fit-gap analysis, gaps are documented and assessed — the architect evaluates OOB extensions, custom development, or third-party solutions before recommending an approach.", "explanationDe": "In der Fit-Gap-Analyse werden Lücken dokumentiert und bewertet — der Architect bewertet OOB-Erweiterungen, benutzerdefinierte Entwicklung oder Drittanbieterlösungen, bevor er einen Ansatz empfiehlt." },
      { "id": "opt-1", "text": "Reject the requirement as out of scope", "textDe": "Die Anforderung als außerhalb des Umfangs ablehnen", "isCorrect": false, "explanation": "Rejecting requirements without analysis is not the architect's role — gaps must be documented and options assessed.", "explanationDe": "Das Ablehnen von Anforderungen ohne Analyse ist nicht die Rolle des Architects — Lücken müssen dokumentiert und Optionen bewertet werden." },
      { "id": "opt-2", "text": "Immediately recommend a fully custom Azure-based solution", "textDe": "Sofort eine vollständig benutzerdefinierte Azure-basierte Lösung empfehlen", "isCorrect": false, "explanation": "Custom Azure development should only be recommended after OOB and low-code options have been exhausted.", "explanationDe": "Benutzerdefinierte Azure-Entwicklung sollte erst empfohlen werden, nachdem OOB- und Low-Code-Optionen ausgeschöpft sind." },
      { "id": "opt-3", "text": "Change the requirement to fit the platform", "textDe": "Die Anforderung ändern, damit sie zur Plattform passt", "isCorrect": false, "explanation": "Changing business requirements to fit technology is poor architecture practice — the solution should serve the business need.", "explanationDe": "Geschäftsanforderungen zu ändern, um zur Technologie zu passen, ist schlechte Architekturpraxis — die Lösung sollte dem Geschäftsbedarf dienen." }
    ],
    "explanation": "Fit-gap analysis is the core envisioning technique: document gaps, assess all options (OOB, configuration, customization, third-party), then recommend the most appropriate approach.",
    "explanationDe": "Fit-Gap-Analyse ist die Kern-Envisioning-Technik: Lücken dokumentieren, alle Optionen bewerten (OOB, Konfiguration, Anpassung, Drittanbieter), dann den am besten geeigneten Ansatz empfehlen.",
    "learnRef": { "title": "PL-600: Solution envisioning", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/solution-envisioning" },
    "learnRefDe": { "title": "PL-600: Lösungsenvisioning", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/solution-envisioning" }
  },
  {
    "id": "p6-q2",
    "certId": "pl600",
    "topic": "Security Architecture",
    "type": "single-choice",
    "prompt": "A global company has departments in different countries with strict data isolation requirements. Each department's team should only see records owned by their department. How should you structure Dataverse security?",
    "promptDe": "Ein globales Unternehmen hat Abteilungen in verschiedenen Ländern mit strengen Datenisolierungsanforderungen. Jedes Abteilungsteam soll nur Datensätze sehen, die seiner Abteilung gehören. Wie solltest du die Dataverse-Sicherheit strukturieren?",
    "hint": "One Dataverse concept defines data ownership boundaries and controls what users can access by default.",
    "hintDe": "Ein Dataverse-Konzept definiert Dateneigentumsgrenzen und steuert, auf was Benutzer standardmäßig zugreifen können.",
    "options": [
      { "id": "opt-0", "text": "One business unit per country/department", "textDe": "Eine Business Unit pro Land/Abteilung", "isCorrect": true, "explanation": "Business units define data ownership scope. Users in one BU cannot access records owned by another BU unless explicitly granted — one BU per organizational unit provides the required isolation.", "explanationDe": "Business Units definieren den Dateneigentümlichkeitsbereich. Benutzer in einer BU können nicht auf Datensätze zugreifen, die einer anderen BU gehören, es sei denn, dies wird explizit gewährt — eine BU pro Organisationseinheit bietet die erforderliche Isolation." },
      { "id": "opt-1", "text": "One business unit per user", "textDe": "Eine Business Unit pro Benutzer", "isCorrect": false, "explanation": "One BU per user is unmanageable and doesn't represent the organizational data isolation required.", "explanationDe": "Eine BU pro Benutzer ist nicht handhabbar und repräsentiert nicht die erforderliche organisatorische Datenisolation." },
      { "id": "opt-2", "text": "Use record sharing rules for each department", "textDe": "Datensatz-Freigaberegeln für jede Abteilung verwenden", "isCorrect": false, "explanation": "Sharing rules are for granting individual access — they don't define the primary ownership boundaries required for broad isolation.", "explanationDe": "Freigaberegeln dienen zur Gewährung von individuellem Zugriff — sie definieren nicht die primären Eigentumsgrenzen, die für eine breite Isolation erforderlich sind." },
      { "id": "opt-3", "text": "Use field-level security for all sensitive fields", "textDe": "Feldebenensicherheit für alle sensiblen Felder verwenden", "isCorrect": false, "explanation": "Field-level security restricts column access — it doesn't provide record-level isolation between departments.", "explanationDe": "Feldebenensicherheit schränkt den Spaltenzugriff ein — sie bietet keine Datensatz-Isolation zwischen Abteilungen." }
    ],
    "explanation": "Business units are the primary mechanism for data isolation in Dataverse. Each BU owns its records, and users only see BU-owned records unless granted additional access.",
    "explanationDe": "Business Units sind der primäre Mechanismus für Datenisolation in Dataverse. Jede BU besitzt ihre Datensätze, und Benutzer sehen nur BU-eigene Datensätze, es sei denn, ihnen wird zusätzlicher Zugriff gewährt.",
    "learnRef": { "title": "PL-600: Create and edit business units", "url": "https://learn.microsoft.com/en-us/power-platform/admin/create-edit-business-units" },
    "learnRefDe": { "title": "PL-600: Business Units erstellen und bearbeiten", "url": "https://learn.microsoft.com/de-de/power-platform/admin/create-edit-business-units" }
  },
  {
    "id": "p6-q3",
    "certId": "pl600",
    "topic": "Data Architecture",
    "type": "single-choice",
    "prompt": "A company needs to archive 5 years of transaction data for regulatory reporting. The data must be queryable with SQL but is accessed infrequently. Which storage architecture is most cost-effective?",
    "promptDe": "Ein Unternehmen muss 5 Jahre Transaktionsdaten für regulatorische Berichte archivieren. Die Daten müssen mit SQL abfragbar sein, werden aber selten abgerufen. Welche Speicherarchitektur ist am kosteneffektivsten?",
    "hint": "Dataverse is expensive for large data volumes. Azure has storage optimized for infrequently accessed analytical data.",
    "hintDe": "Dataverse ist teuer für große Datenmengen. Azure hat Speicher, der für selten abgerufene analytische Daten optimiert ist.",
    "options": [
      { "id": "opt-0", "text": "Azure Data Lake Storage + Azure Synapse Analytics", "textDe": "Azure Data Lake Storage + Azure Synapse Analytics", "isCorrect": true, "explanation": "Azure Data Lake Storage provides low-cost archival storage. Synapse Analytics provides serverless SQL querying on top — cost-effective for infrequently queried large datasets.", "explanationDe": "Azure Data Lake Storage bietet kostengünstigen Archivspeicher. Synapse Analytics bietet serverloses SQL-Abfragen darüber — kosteneffektiv für selten abgefragte große Datensätze." },
      { "id": "opt-1", "text": "Dataverse tables", "textDe": "Dataverse-Tabellen", "isCorrect": false, "explanation": "Dataverse storage is expensive per GB — not suitable for archiving years of large transaction datasets.", "explanationDe": "Dataverse-Speicher ist teuer pro GB — nicht geeignet für die Archivierung von Jahren großer Transaktionsdatensätze." },
      { "id": "opt-2", "text": "SharePoint document library", "textDe": "SharePoint-Dokumentbibliothek", "isCorrect": false, "explanation": "SharePoint is for file/document storage — not for structured transactional data queryable with SQL.", "explanationDe": "SharePoint ist für Datei-/Dokumentspeicherung — nicht für strukturierte Transaktionsdaten, die mit SQL abfragbar sind." },
      { "id": "opt-3", "text": "Power BI dataflows", "textDe": "Power BI Dataflows", "isCorrect": false, "explanation": "Power BI dataflows transform and prepare data for reporting — they are not an archival storage solution.", "explanationDe": "Power BI Dataflows transformieren und bereiten Daten für Berichte vor — sie sind keine Archivspeicherlösung." }
    ],
    "explanation": "For large-volume archival with SQL queryability, Azure Data Lake (cheap storage) + Synapse Analytics (serverless SQL) is the standard cost-effective pattern.",
    "explanationDe": "Für groß angelegte Archivierung mit SQL-Abfragemöglichkeit ist Azure Data Lake (günstiger Speicher) + Synapse Analytics (serverloses SQL) das Standard-kosteneffektive Muster.",
    "learnRef": { "title": "PL-600: Azure Synapse Link for Dataverse", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/azure-synapse-link-select-faq" },
    "learnRefDe": { "title": "PL-600: Azure Synapse Link für Dataverse", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/azure-synapse-link-select-faq" }
  },
  {
    "id": "p6-q4",
    "certId": "pl600",
    "topic": "Integration Architecture",
    "type": "single-choice",
    "prompt": "An on-premises ERP pushes order updates to Power Platform every 5 minutes. Power Platform must process updates in arrival order and retry on failure. Which Azure integration service should you recommend?",
    "promptDe": "Ein lokales ERP überträgt alle 5 Minuten Bestellaktualisierungen an Power Platform. Power Platform muss Aktualisierungen in Eingangsreihenfolge verarbeiten und bei Fehlern erneut versuchen. Welchen Azure-Integrationsdienst solltest du empfehlen?",
    "hint": "Ordered delivery with retry and dead-lettering is a specific messaging pattern.",
    "hintDe": "Geordnete Lieferung mit Wiederholung und Dead-Lettering ist ein spezifisches Messaging-Muster.",
    "options": [
      { "id": "opt-0", "text": "Azure Service Bus queue", "textDe": "Azure Service Bus Queue", "isCorrect": true, "explanation": "Service Bus queues provide FIFO ordering, guaranteed delivery, configurable retry policies, and dead-lettering — exactly the requirements described.", "explanationDe": "Service Bus Queues bieten FIFO-Reihenfolge, garantierte Lieferung, konfigurierbare Wiederholungsrichtlinien und Dead-Lettering — genau die beschriebenen Anforderungen." },
      { "id": "opt-1", "text": "Azure Event Hubs", "textDe": "Azure Event Hubs", "isCorrect": false, "explanation": "Event Hubs is optimized for high-throughput event streaming — it doesn't guarantee FIFO ordering or provide built-in retry.", "explanationDe": "Event Hubs ist für hohen Durchsatz bei Ereignis-Streaming optimiert — es garantiert keine FIFO-Reihenfolge und bietet kein eingebautes Retry." },
      { "id": "opt-2", "text": "Azure Relay", "textDe": "Azure Relay", "isCorrect": false, "explanation": "Azure Relay is synchronous request-reply — it doesn't queue messages or provide ordered delivery.", "explanationDe": "Azure Relay ist synchrones Request-Reply — es queued keine Nachrichten und bietet keine geordnete Lieferung." },
      { "id": "opt-3", "text": "Direct HTTP calls to Dataverse Web API", "textDe": "Direkte HTTP-Aufrufe zur Dataverse Web API", "isCorrect": false, "explanation": "Direct HTTP calls have no built-in retry, ordering guarantee, or resilience for transient failures.", "explanationDe": "Direkte HTTP-Aufrufe haben kein eingebautes Retry, keine Reihenfolgegarantie oder Resilienz für vorübergehende Fehler." }
    ],
    "explanation": "Azure Service Bus queues are the correct choice for ordered, reliable message delivery with retry — the standard pattern for resilient ERP integrations.",
    "explanationDe": "Azure Service Bus Queues sind die richtige Wahl für geordnete, zuverlässige Nachrichtenlieferung mit Wiederholung — das Standardmuster für resiliente ERP-Integrationen.",
    "learnRef": { "title": "PL-600: Azure Service Bus messaging", "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview" },
    "learnRefDe": { "title": "PL-600: Azure Service Bus Messaging", "url": "https://learn.microsoft.com/de-de/azure/service-bus-messaging/service-bus-messaging-overview" }
  },
  {
    "id": "p6-q5",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "You are setting up environments for a 5-developer Power Platform project. Developers need isolated environments to work independently without impacting each other. What environment strategy should you recommend?",
    "promptDe": "Du richtest Umgebungen für ein 5-Entwickler-Power-Platform-Projekt ein. Entwickler benötigen isolierte Umgebungen, um unabhängig voneinander zu arbeiten. Welche Umgebungsstrategie solltest du empfehlen?",
    "hint": "Microsoft provides a free environment type specifically designed for individual developer isolation.",
    "hintDe": "Microsoft bietet einen kostenlosen Umgebungstyp, der speziell für individuelle Entwicklerisolierung konzipiert ist.",
    "options": [
      { "id": "opt-0", "text": "Each developer gets their own developer environment", "textDe": "Jeder Entwickler erhält seine eigene Entwicklerumgebung", "isCorrect": true, "explanation": "Developer environments are free, isolated, personal environments — ideal for individual development without conflicts. Each developer works independently.", "explanationDe": "Entwicklerumgebungen sind kostenlos, isoliert, persönliche Umgebungen — ideal für individuelle Entwicklung ohne Konflikte. Jeder Entwickler arbeitet unabhängig." },
      { "id": "opt-1", "text": "All developers share one sandbox environment", "textDe": "Alle Entwickler teilen eine Sandbox-Umgebung", "isCorrect": false, "explanation": "A shared sandbox leads to conflicts — developers overwrite each other's work and cannot test independently.", "explanationDe": "Eine gemeinsame Sandbox führt zu Konflikten — Entwickler überschreiben gegenseitig ihre Arbeit und können nicht unabhängig testen." },
      { "id": "opt-2", "text": "Use trial environments for each developer", "textDe": "Trial-Umgebungen für jeden Entwickler verwenden", "isCorrect": false, "explanation": "Trial environments expire after 30 days — not suitable for ongoing development.", "explanationDe": "Trial-Umgebungen laufen nach 30 Tagen ab — nicht geeignet für laufende Entwicklung." },
      { "id": "opt-3", "text": "Use the production environment for development", "textDe": "Die Produktionsumgebung für die Entwicklung verwenden", "isCorrect": false, "explanation": "Developing directly in production risks data corruption and service disruption for live users.", "explanationDe": "Die direkte Entwicklung in der Produktion riskiert Datenbeschädigung und Dienstunterbrechung für Live-Benutzer." }
    ],
    "explanation": "The recommended environment strategy for multi-developer projects is: developer environments per person → shared sandbox for testing/UAT → production for live data.",
    "explanationDe": "Die empfohlene Umgebungsstrategie für Mehrfachentwicklerprojekte ist: Entwicklerumgebungen pro Person → gemeinsame Sandbox für Tests/UAT → Produktion für Live-Daten.",
    "learnRef": { "title": "PL-600: Environment strategy for ALM", "url": "https://learn.microsoft.com/en-us/power-platform/alm/environment-strategy-alm" },
    "learnRefDe": { "title": "PL-600: Umgebungsstrategie für ALM", "url": "https://learn.microsoft.com/de-de/power-platform/alm/environment-strategy-alm" }
  },
  {
    "id": "p6-q6",
    "certId": "pl600",
    "topic": "Analytics",
    "type": "single-choice",
    "prompt": "Business users need to analyze trends in Dataverse data over time, create ad-hoc reports, and share dashboards with external stakeholders who don't have Dataverse access. What should you recommend?",
    "promptDe": "Geschäftsbenutzer müssen Trends in Dataverse-Daten im Zeitverlauf analysieren, Ad-hoc-Berichte erstellen und Dashboards mit externen Stakeholdern teilen, die keinen Dataverse-Zugriff haben. Was solltest du empfehlen?",
    "hint": "One Microsoft tool is purpose-built for self-service analytics, trend analysis, and sharing with external users.",
    "hintDe": "Ein Microsoft-Tool ist speziell für Self-Service-Analysen, Trendanalysen und das Teilen mit externen Benutzern konzipiert.",
    "options": [
      { "id": "opt-0", "text": "Power BI reports embedded in or shared from Power BI service", "textDe": "Power BI-Berichte, eingebettet in oder geteilt vom Power BI-Dienst", "isCorrect": true, "explanation": "Power BI provides rich self-service analytics, trend analysis, and flexible sharing (including with external users via public links or B2B). It's the standard recommendation for analytical reporting.", "explanationDe": "Power BI bietet umfangreiche Self-Service-Analysen, Trendanalysen und flexibles Teilen (einschließlich mit externen Benutzern über öffentliche Links oder B2B). Es ist die Standardempfehlung für analytische Berichte." },
      { "id": "opt-1", "text": "Canvas app with chart controls", "textDe": "Canvas App mit Diagrammsteuerelementen", "isCorrect": false, "explanation": "Canvas app charts are limited and not designed for ad-hoc analytics or sharing with external stakeholders.", "explanationDe": "Canvas App-Diagramme sind begrenzt und nicht für Ad-hoc-Analysen oder das Teilen mit externen Stakeholdern konzipiert." },
      { "id": "opt-2", "text": "Model-driven app dashboards", "textDe": "Modellgesteuerte App-Dashboards", "isCorrect": false, "explanation": "Model-driven app dashboards require Dataverse licenses and cannot be shared with external users who lack access.", "explanationDe": "Modellgesteuerte App-Dashboards erfordern Dataverse-Lizenzen und können nicht mit externen Benutzern geteilt werden, die keinen Zugriff haben." },
      { "id": "opt-3", "text": "Azure Synapse Analytics with a custom web frontend", "textDe": "Azure Synapse Analytics mit einem benutzerdefinierten Web-Frontend", "isCorrect": false, "explanation": "Synapse + custom frontend is over-engineered for this scenario — Power BI solves all stated requirements with no custom development.", "explanationDe": "Synapse + benutzerdefiniertes Frontend ist für dieses Szenario überdimensioniert — Power BI löst alle genannten Anforderungen ohne benutzerdefinierte Entwicklung." }
    ],
    "explanation": "Power BI is the recommended analytics tool for Dataverse data — it connects natively via the Dataverse connector and supports sharing, embedding, and external access.",
    "explanationDe": "Power BI ist das empfohlene Analysetool für Dataverse-Daten — es verbindet sich nativ über den Dataverse-Connector und unterstützt Teilen, Einbetten und externen Zugriff.",
    "learnRef": { "title": "PL-600: Use Power BI with Dataverse", "url": "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery-with-dataverse" },
    "learnRefDe": { "title": "PL-600: Power BI mit Dataverse verwenden", "url": "https://learn.microsoft.com/de-de/power-bi/connect-data/desktop-use-directquery-with-dataverse" }
  },
  {
    "id": "p6-q7",
    "certId": "pl600",
    "topic": "Automation Architecture",
    "type": "single-choice",
    "prompt": "A business process requires data entry into an on-premises legacy application that has no API. The data should come from Dataverse automatically. What automation approach should you recommend?",
    "promptDe": "Ein Geschäftsprozess erfordert die Dateneingabe in eine lokale Legacy-Anwendung ohne API. Die Daten sollen automatisch aus Dataverse kommen. Welchen Automatisierungsansatz solltest du empfehlen?",
    "hint": "When there is no API, UI automation is the appropriate pattern.",
    "hintDe": "Wenn keine API vorhanden ist, ist UI-Automatisierung das geeignete Muster.",
    "options": [
      { "id": "opt-0", "text": "Power Automate desktop flow (RPA)", "textDe": "Power Automate Desktop-Flow (RPA)", "isCorrect": true, "explanation": "Robotic Process Automation (RPA) via Power Automate desktop flows automates UI interactions with legacy applications that have no API. It can be triggered from cloud flows with Dataverse data.", "explanationDe": "Robotic Process Automation (RPA) über Power Automate Desktop-Flows automatisiert UI-Interaktionen mit Legacy-Anwendungen ohne API. Es kann von Cloud-Flows mit Dataverse-Daten ausgelöst werden." },
      { "id": "opt-1", "text": "Power Automate cloud flow with HTTP connector", "textDe": "Power Automate Cloud-Flow mit HTTP-Connector", "isCorrect": false, "explanation": "The HTTP connector calls REST APIs — it cannot interact with a UI-only legacy application.", "explanationDe": "Der HTTP-Connector ruft REST-APIs auf — er kann nicht mit einer rein UI-basierten Legacy-Anwendung interagieren." },
      { "id": "opt-2", "text": "Custom Dataverse plug-in", "textDe": "Benutzerdefiniertes Dataverse Plug-in", "isCorrect": false, "explanation": "Plug-ins run in Dataverse context — they cannot control external application UIs.", "explanationDe": "Plug-ins laufen im Dataverse-Kontext — sie können keine externen Anwendungs-UIs steuern." },
      { "id": "opt-3", "text": "Azure Function with Dataverse trigger", "textDe": "Azure Function mit Dataverse-Trigger", "isCorrect": false, "explanation": "Azure Functions call code/APIs — they cannot automate UI interactions with a legacy application.", "explanationDe": "Azure Functions rufen Code/APIs auf — sie können keine UI-Interaktionen mit einer Legacy-Anwendung automatisieren." }
    ],
    "explanation": "RPA (Power Automate desktop flows) is the correct pattern for automating UI-based interactions with legacy systems that expose no API.",
    "explanationDe": "RPA (Power Automate Desktop-Flows) ist das richtige Muster zur Automatisierung von UI-basierten Interaktionen mit Legacy-Systemen, die keine API bereitstellen.",
    "learnRef": { "title": "PL-600: Introduction to desktop flows", "url": "https://learn.microsoft.com/en-us/power-automate/desktop-flows/introduction" },
    "learnRefDe": { "title": "PL-600: Einführung in Desktop-Flows", "url": "https://learn.microsoft.com/de-de/power-automate/desktop-flows/introduction" }
  },
  {
    "id": "p6-q8",
    "certId": "pl600",
    "topic": "Security Architecture",
    "type": "single-choice",
    "prompt": "A salesperson needs temporary read access to a specific account record owned by another business unit, without changing their security role or BU membership. What is the most appropriate mechanism?",
    "promptDe": "Ein Vertriebsmitarbeiter benötigt vorübergehenden Lesezugriff auf einen bestimmten Kontodatensatz einer anderen Business Unit, ohne seine Sicherheitsrolle oder BU-Mitgliedschaft zu ändern. Was ist der geeignetste Mechanismus?",
    "hint": "This mechanism grants targeted access to individual records without changing security roles.",
    "hintDe": "Dieser Mechanismus gewährt gezielten Zugriff auf einzelne Datensätze, ohne Sicherheitsrollen zu ändern.",
    "options": [
      { "id": "opt-0", "text": "Record sharing", "textDe": "Datensatzfreigabe", "isCorrect": true, "explanation": "Record sharing in Dataverse grants specific users or teams access to individual records, independent of business units and security roles — the least-privileged approach for temporary targeted access.", "explanationDe": "Datensatzfreigabe in Dataverse gewährt bestimmten Benutzern oder Teams Zugriff auf einzelne Datensätze, unabhängig von Business Units und Sicherheitsrollen — der Ansatz mit geringstem Privileg für temporären, gezielten Zugriff." },
      { "id": "opt-1", "text": "Change the record's ownership to the salesperson", "textDe": "Den Datensatzeigentümer auf den Vertriebsmitarbeiter ändern", "isCorrect": false, "explanation": "Changing ownership permanently transfers the record — not appropriate for temporary access.", "explanationDe": "Das Ändern des Eigentümers überträgt den Datensatz dauerhaft — nicht geeignet für temporären Zugriff." },
      { "id": "opt-2", "text": "Add the salesperson to the other business unit", "textDe": "Den Vertriebsmitarbeiter zur anderen Business Unit hinzufügen", "isCorrect": false, "explanation": "Adding to another BU gives access to all records in that BU — not just the specific record.", "explanationDe": "Das Hinzufügen zu einer anderen BU gibt Zugriff auf alle Datensätze in dieser BU — nicht nur auf den spezifischen Datensatz." },
      { "id": "opt-3", "text": "Modify the salesperson's security role to include cross-BU access", "textDe": "Die Sicherheitsrolle des Vertriebsmitarbeiters ändern, um BU-übergreifenden Zugriff einzuschließen", "isCorrect": false, "explanation": "Widening a security role gives access to all records matching the broader scope — violating least-privilege for temporary single-record access.", "explanationDe": "Das Erweitern einer Sicherheitsrolle gibt Zugriff auf alle Datensätze, die dem breiteren Umfang entsprechen — verletzt das Least-Privilege-Prinzip für temporären Einzeldatensatz-Zugriff." }
    ],
    "explanation": "Record sharing is the least-privileged mechanism for temporary, targeted access to specific Dataverse records across business unit boundaries.",
    "explanationDe": "Datensatzfreigabe ist der Mechanismus mit geringstem Privileg für temporären, gezielten Zugriff auf bestimmte Dataverse-Datensätze über Business Unit-Grenzen hinweg.",
    "learnRef": { "title": "PL-600: Dataverse security concepts", "url": "https://learn.microsoft.com/en-us/power-platform/admin/wp-security-cds" },
    "learnRefDe": { "title": "PL-600: Dataverse-Sicherheitskonzepte", "url": "https://learn.microsoft.com/de-de/power-platform/admin/wp-security-cds" }
  },
  {
    "id": "p6-q9",
    "certId": "pl600",
    "topic": "Data Architecture",
    "type": "multi-choice",
    "prompt": "You are designing a Dataverse data model. You need to identify which tables are part of the standard Common Data Model. Select all that apply.",
    "promptDe": "Du gestaltest ein Dataverse-Datenmodell. Identifiziere, welche Tabellen Teil des Standard-Common Data Model sind. Alle zutreffenden auswählen.",
    "hint": "The Common Data Model defines a shared schema of universal business entities recognized across Microsoft products.",
    "hintDe": "Das Common Data Model definiert ein gemeinsames Schema universeller Geschäftsentitäten, die in Microsoft-Produkten anerkannt werden.",
    "options": [
      { "id": "opt-0", "text": "Account", "textDe": "Konto (Account)", "isCorrect": true, "explanation": "Account is a foundational CDM entity representing organizations, present in all Dataverse environments.", "explanationDe": "Konto (Account) ist eine grundlegende CDM-Entität, die Organisationen repräsentiert, in allen Dataverse-Umgebungen vorhanden." },
      { "id": "opt-1", "text": "Business", "textDe": "Business", "isCorrect": false, "explanation": "'Business' is not a standard CDM table name.", "explanationDe": "'Business' ist kein Standard-CDM-Tabellenname." },
      { "id": "opt-2", "text": "Grant", "textDe": "Grant", "isCorrect": false, "explanation": "Grant belongs to the nonprofit industry accelerator, not the core Common Data Model.", "explanationDe": "Grant gehört zum Nonprofit-Branchenbeschleuniger, nicht zum Kern-Common Data Model." },
      { "id": "opt-3", "text": "Marketing List", "textDe": "Marketingliste", "isCorrect": false, "explanation": "Marketing List is a legacy CRM entity, not part of the standard CDM.", "explanationDe": "Marketingliste ist eine Legacy-CRM-Entität, kein Teil des Standard-CDM." },
      { "id": "opt-4", "text": "Task", "textDe": "Aufgabe (Task)", "isCorrect": true, "explanation": "Task is a standard CDM activity entity for tracking work, present in all Dataverse environments.", "explanationDe": "Aufgabe (Task) ist eine Standard-CDM-Aktivitätsentität zur Arbeitsverfolgung, in allen Dataverse-Umgebungen vorhanden." },
      { "id": "opt-5", "text": "Program", "textDe": "Program", "isCorrect": false, "explanation": "Program is part of education/nonprofit accelerator schemas, not the base CDM.", "explanationDe": "Program ist Teil von Bildungs-/Nonprofit-Accelerator-Schemas, nicht des Basis-CDM." }
    ],
    "explanation": "Account and Task are core Common Data Model entities. Industry-specific entities like Grant and Program belong to vertical accelerators.",
    "explanationDe": "Konto (Account) und Aufgabe (Task) sind Kern-Common-Data-Model-Entitäten. Branchenspezifische Entitäten wie Grant und Program gehören zu vertikalen Accelerators.",
    "learnRef": { "title": "PL-600: Common Data Model overview", "url": "https://learn.microsoft.com/en-us/common-data-model/overview" },
    "learnRefDe": { "title": "PL-600: Common Data Model Übersicht", "url": "https://learn.microsoft.com/de-de/common-data-model/overview" }
  },
  {
    "id": "p6-q10",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A team needs an application to manage complex Dataverse records with multiple related tables, business rules, and role-based views. Which app type should the architect recommend?",
    "promptDe": "Ein Team benötigt eine Anwendung zur Verwaltung komplexer Dataverse-Datensätze mit mehreren verwandten Tabellen, Geschäftsregeln und rollenbasierten Ansichten. Welchen App-Typ sollte der Architect empfehlen?",
    "hint": "One app type is generated from the data model and automatically handles relationships, security roles, and views.",
    "hintDe": "Ein App-Typ wird aus dem Datenmodell generiert und verwaltet automatisch Beziehungen, Sicherheitsrollen und Ansichten.",
    "options": [
      { "id": "opt-0", "text": "Model-driven app", "textDe": "Modellgesteuerte App", "isCorrect": true, "explanation": "Model-driven apps are designed for complex Dataverse data management — they automatically generate UI from the data model, respect security roles, and handle relationship navigation.", "explanationDe": "Modellgesteuerte Apps sind für komplexes Dataverse-Datenmanagement konzipiert — sie generieren automatisch UI aus dem Datenmodell, respektieren Sicherheitsrollen und verwalten die Beziehungsnavigation." },
      { "id": "opt-1", "text": "Canvas app", "textDe": "Canvas App", "isCorrect": false, "explanation": "Canvas apps offer full UI flexibility but require manual relationship navigation and security handling — higher development effort for complex data scenarios.", "explanationDe": "Canvas Apps bieten volle UI-Flexibilität, erfordern aber manuelle Beziehungsnavigation und Sicherheitsverwaltung — höherer Entwicklungsaufwand für komplexe Datenszenarien." },
      { "id": "opt-2", "text": "Power Pages portal", "textDe": "Power Pages-Portal", "isCorrect": false, "explanation": "Power Pages is for external-facing web portals — not for internal complex data management.", "explanationDe": "Power Pages ist für extern ausgerichtete Web-Portale — nicht für internes komplexes Datenmanagement." },
      { "id": "opt-3", "text": "Power BI report", "textDe": "Power BI-Bericht", "isCorrect": false, "explanation": "Power BI is for read-only analytics — it cannot manage (create/update) Dataverse records.", "explanationDe": "Power BI ist für schreibgeschützte Analysen — es kann keine Dataverse-Datensätze verwalten (erstellen/aktualisieren)." }
    ],
    "explanation": "Model-driven apps are the correct choice for internal users managing complex Dataverse records — security roles, relationship views, and business rules are handled automatically.",
    "explanationDe": "Modellgesteuerte Apps sind die richtige Wahl für interne Benutzer, die komplexe Dataverse-Datensätze verwalten — Sicherheitsrollen, Beziehungsansichten und Geschäftsregeln werden automatisch verwaltet.",
    "learnRef": { "title": "PL-600: Model-driven apps overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview" },
    "learnRefDe": { "title": "PL-600: Modellgesteuerte Apps Übersicht", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/model-driven-app-overview" }
  },
  {
    "id": "p6-q11",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "Your team uses Azure DevOps to version-control Power Platform solutions. Which export format produces diff-friendly files suitable for Git-based source control?",
    "promptDe": "Dein Team verwendet Azure DevOps zur Versionskontrolle von Power Platform-Lösungen. Welches Exportformat erzeugt diff-freundliche Dateien, die für Git-basierte Quellcodeverwaltung geeignet sind?",
    "hint": "The Power Platform CLI has a command that splits solution zip files into individual component files.",
    "hintDe": "Die Power Platform CLI hat einen Befehl, der Lösungs-Zip-Dateien in einzelne Komponentendateien aufteilt.",
    "options": [
      { "id": "opt-0", "text": "Solution unpacked with Power Platform CLI (pac solution unpack)", "textDe": "Mit Power Platform CLI entpackte Lösung (pac solution unpack)", "isCorrect": true, "explanation": "pac solution unpack extracts the solution into individual XML/JSON files per component. These text files produce meaningful diffs in Git — the correct format for source control.", "explanationDe": "pac solution unpack extrahiert die Lösung in einzelne XML/JSON-Dateien pro Komponente. Diese Textdateien erzeugen aussagekräftige Diffs in Git — das richtige Format für die Quellcodeverwaltung." },
      { "id": "opt-1", "text": "Managed solution .zip file", "textDe": "Verwaltete Lösung .zip-Datei", "isCorrect": false, "explanation": "Managed solution zip files are binary-encoded — Git shows them as binary changes with no meaningful diff.", "explanationDe": "Verwaltete Lösungs-Zip-Dateien sind binär codiert — Git zeigt sie als binäre Änderungen ohne aussagekräftigen Diff." },
      { "id": "opt-2", "text": "Unmanaged solution .zip file", "textDe": "Nicht verwaltete Lösung .zip-Datei", "isCorrect": false, "explanation": "Unmanaged zip files have the same issue as managed — binary format, poor Git diffs.", "explanationDe": "Nicht verwaltete Zip-Dateien haben das gleiche Problem wie verwaltete — binäres Format, schlechte Git-Diffs." },
      { "id": "opt-3", "text": "XML export from the maker portal", "textDe": "XML-Export aus dem Maker-Portal", "isCorrect": false, "explanation": "The maker portal doesn't offer a component-level XML export for source control — use the Power Platform CLI.", "explanationDe": "Das Maker-Portal bietet keinen Komponentenebenen-XML-Export für die Quellcodeverwaltung — verwende die Power Platform CLI." }
    ],
    "explanation": "pac solution unpack (Power Platform CLI) is the standard approach for source-controlling solutions — it produces individual text files that can be meaningfully diffed in Git.",
    "explanationDe": "pac solution unpack (Power Platform CLI) ist der Standardansatz für die Quellcodeverwaltung von Lösungen — es erzeugt einzelne Textdateien, die in Git aussagekräftig verglichen werden können.",
    "learnRef": { "title": "PL-600: Use Power Platform CLI with solutions", "url": "https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/solution" },
    "learnRefDe": { "title": "PL-600: Power Platform CLI mit Lösungen verwenden", "url": "https://learn.microsoft.com/de-de/power-platform/developer/cli/reference/solution" }
  },
  {
    "id": "p6-q12",
    "certId": "pl600",
    "topic": "Data Architecture",
    "type": "single-choice",
    "prompt": "A data warehouse needs to receive only records that changed in Dataverse since the last synchronization, without exporting all data each time. Which mechanism should you recommend?",
    "promptDe": "Ein Data Warehouse muss nur Datensätze empfangen, die seit der letzten Synchronisierung in Dataverse geändert wurden, ohne jedes Mal alle Daten zu exportieren. Welchen Mechanismus solltest du empfehlen?",
    "hint": "Dataverse has a built-in mechanism that tracks what changed since a given token.",
    "hintDe": "Dataverse hat einen eingebauten Mechanismus, der verfolgt, was seit einem gegebenen Token geändert wurde.",
    "options": [
      { "id": "opt-0", "text": "Change tracking with the Dataverse Web API", "textDe": "Änderungsverfolgung mit der Dataverse Web API", "isCorrect": true, "explanation": "Dataverse change tracking returns only rows that changed since a given delta token — efficient incremental sync for data warehouse integration without full exports.", "explanationDe": "Dataverse-Änderungsverfolgung gibt nur Zeilen zurück, die sich seit einem gegebenen Delta-Token geändert haben — effiziente inkrementelle Synchronisierung für Data-Warehouse-Integration ohne vollständige Exporte." },
      { "id": "opt-1", "text": "Export all data daily with Azure Data Factory", "textDe": "Alle Daten täglich mit Azure Data Factory exportieren", "isCorrect": false, "explanation": "Full daily exports are inefficient for large tables — change tracking provides incremental sync.", "explanationDe": "Vollständige tägliche Exporte sind für große Tabellen ineffizient — Änderungsverfolgung bietet inkrementelle Synchronisierung." },
      { "id": "opt-2", "text": "Azure Event Hubs integration from Dataverse", "textDe": "Azure Event Hubs-Integration von Dataverse", "isCorrect": false, "explanation": "Event Hubs integration streams events in real time — it's not designed for batch delta sync with state tracking.", "explanationDe": "Event Hubs-Integration streamt Ereignisse in Echtzeit — sie ist nicht für Batch-Delta-Sync mit Zustandsverfolgung konzipiert." },
      { "id": "opt-3", "text": "FetchXML query filtered by ModifiedOn timestamp", "textDe": "FetchXML-Abfrage gefiltert nach ModifiedOn-Zeitstempel", "isCorrect": false, "explanation": "Timestamp filtering can miss deleted records and has race conditions — change tracking handles deletes and is more reliable.", "explanationDe": "Zeitstempel-Filterung kann gelöschte Datensätze übersehen und hat Race Conditions — Änderungsverfolgung behandelt Löschungen und ist zuverlässiger." }
    ],
    "explanation": "Dataverse change tracking is the recommended pattern for incremental data warehouse sync — it tracks all changes (including deletes) and uses a delta token to paginate through changes.",
    "explanationDe": "Dataverse-Änderungsverfolgung ist das empfohlene Muster für inkrementelle Data-Warehouse-Synchronisierung — es verfolgt alle Änderungen (einschließlich Löschungen) und verwendet ein Delta-Token zur Paginierung durch Änderungen.",
    "learnRef": { "title": "PL-600: Use change tracking to synchronize data", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-change-tracking-synchronize-data-external-systems" },
    "learnRefDe": { "title": "PL-600: Änderungsverfolgung zur Datensynchronisierung verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/use-change-tracking-synchronize-data-external-systems" }
  },
  {
    "id": "p6-q13",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "You want to add a conversational AI interface that answers customer questions using your company's SharePoint knowledge base. Which architecture requires the least custom development?",
    "promptDe": "Du möchtest eine konversationelle KI-Schnittstelle hinzufügen, die Kundenfragen mit der SharePoint-Wissensdatenbank deines Unternehmens beantwortet. Welche Architektur erfordert die wenigste benutzerdefinierte Entwicklung?",
    "hint": "One Microsoft low-code product can connect directly to SharePoint as a knowledge source for generative AI answers.",
    "hintDe": "Ein Microsoft Low-Code-Produkt kann sich direkt mit SharePoint als Wissensquelle für generative KI-Antworten verbinden.",
    "options": [
      { "id": "opt-0", "text": "Copilot Studio with SharePoint as a knowledge source", "textDe": "Copilot Studio mit SharePoint als Wissensquelle", "isCorrect": true, "explanation": "Copilot Studio can connect directly to SharePoint as a knowledge source, enabling generative AI answers from existing documents — no custom development needed.", "explanationDe": "Copilot Studio kann sich direkt mit SharePoint als Wissensquelle verbinden und ermöglicht generative KI-Antworten aus vorhandenen Dokumenten — keine benutzerdefinierte Entwicklung erforderlich." },
      { "id": "opt-1", "text": "Azure OpenAI Service with a custom RAG pipeline", "textDe": "Azure OpenAI Service mit einer benutzerdefinierten RAG-Pipeline", "isCorrect": false, "explanation": "Azure OpenAI with RAG is powerful but requires significant custom development — Copilot Studio achieves the same result with no code.", "explanationDe": "Azure OpenAI mit RAG ist leistungsfähig, erfordert aber erhebliche benutzerdefinierte Entwicklung — Copilot Studio erreicht dasselbe Ergebnis ohne Code." },
      { "id": "opt-2", "text": "Power Automate flow with AI Builder text recognition", "textDe": "Power Automate Flow mit AI Builder-Texterkennung", "isCorrect": false, "explanation": "Text recognition extracts text from documents — it doesn't provide a conversational Q&A interface.", "explanationDe": "Texterkennung extrahiert Text aus Dokumenten — sie bietet keine konversationelle Q&A-Schnittstelle." },
      { "id": "opt-3", "text": "Power Virtual Agents standalone (legacy)", "textDe": "Power Virtual Agents standalone (Legacy)", "isCorrect": false, "explanation": "Power Virtual Agents has been replaced by Copilot Studio, which has superior generative AI and knowledge source capabilities.", "explanationDe": "Power Virtual Agents wurde durch Copilot Studio ersetzt, das überlegene generative KI- und Wissensquellenfähigkeiten hat." }
    ],
    "explanation": "Copilot Studio is the lowest-code path to building a knowledge-base chatbot using SharePoint content — direct knowledge source integration with generative AI answers.",
    "explanationDe": "Copilot Studio ist der Low-Code-Pfad zum Erstellen eines Wissensdatenbank-Chatbots mit SharePoint-Inhalten — direkte Wissensquellen-Integration mit generativen KI-Antworten.",
    "learnRef": { "title": "PL-600: Add knowledge to a copilot", "url": "https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-existing-copilot" },
    "learnRefDe": { "title": "PL-600: Wissen zu einem Copilot hinzufügen", "url": "https://learn.microsoft.com/de-de/microsoft-copilot-studio/knowledge-add-existing-copilot" }
  },
  {
    "id": "p6-q14",
    "certId": "pl600",
    "topic": "Security Architecture",
    "type": "single-choice",
    "prompt": "The compliance team needs to know which admin users viewed specific sensitive records, even when no changes were made. Which feature provides this read-access tracking?",
    "promptDe": "Das Compliance-Team muss wissen, welche Admin-Benutzer bestimmte sensible Datensätze angesehen haben, auch wenn keine Änderungen vorgenommen wurden. Welche Funktion bietet diese Lesezugriff-Verfolgung?",
    "hint": "Standard Dataverse auditing tracks changes. There is a separate feature for tracking read/view events.",
    "hintDe": "Standard-Dataverse-Überwachung verfolgt Änderungen. Es gibt eine separate Funktion zur Verfolgung von Lese-/Anzeigeereignissen.",
    "options": [
      { "id": "opt-0", "text": "Activity logging (Microsoft 365 unified audit log)", "textDe": "Aktivitätsprotokollierung (Microsoft 365 unified audit log)", "isCorrect": true, "explanation": "Activity logging logs record view/read events to the Microsoft 365 audit log — capturing who accessed a record even without making changes. Distinct from Dataverse auditing (which only tracks writes).", "explanationDe": "Aktivitätsprotokollierung protokolliert Datensatzanzeige-/Leseereignisse im Microsoft 365-Überwachungsprotokoll — erfasst, wer auf einen Datensatz zugegriffen hat, auch ohne Änderungen. Unterschiedlich von Dataverse-Überwachung (die nur Schreibvorgänge verfolgt)." },
      { "id": "opt-1", "text": "Dataverse auditing", "textDe": "Dataverse-Überwachung", "isCorrect": false, "explanation": "Dataverse auditing tracks data changes (create, update, delete) — it does not log read/view events.", "explanationDe": "Dataverse-Überwachung verfolgt Datenänderungen (Erstellen, Aktualisieren, Löschen) — sie protokolliert keine Lese-/Anzeigeereignisse." },
      { "id": "opt-2", "text": "Field-level security logs", "textDe": "Feldebenensicherheitsprotokolle", "isCorrect": false, "explanation": "Field-level security restricts access but does not generate read-access audit logs.", "explanationDe": "Feldebenensicherheit schränkt den Zugriff ein, erstellt aber keine Lesezugriff-Prüfprotokolle." },
      { "id": "opt-3", "text": "Power Platform DLP policy logs", "textDe": "Power Platform DLP-Richtlinienprotokolle", "isCorrect": false, "explanation": "DLP policies control connector usage — they don't log record-level read access.", "explanationDe": "DLP-Richtlinien steuern die Connector-Nutzung — sie protokollieren keinen Datensatz-Lesezugriff." }
    ],
    "explanation": "Activity logging (Microsoft 365 unified audit log) is the feature for tracking read/view access to Dataverse records — complementary to Dataverse auditing which only tracks writes.",
    "explanationDe": "Aktivitätsprotokollierung (Microsoft 365 unified audit log) ist die Funktion zur Verfolgung des Lese-/Anzeigezugriffs auf Dataverse-Datensätze — ergänzend zur Dataverse-Überwachung, die nur Schreibvorgänge verfolgt.",
    "learnRef": { "title": "PL-600: Activity logging for Power Platform", "url": "https://learn.microsoft.com/en-us/power-platform/admin/enable-use-comprehensive-auditing" },
    "learnRefDe": { "title": "PL-600: Aktivitätsprotokollierung für Power Platform", "url": "https://learn.microsoft.com/de-de/power-platform/admin/enable-use-comprehensive-auditing" }
  },
  {
    "id": "p6-q15",
    "certId": "pl600",
    "topic": "Solution Envisioning",
    "type": "single-choice",
    "prompt": "A business stakeholder requests a Power Platform integration with a financial trading system requiring sub-millisecond latency. What should the solution architect advise?",
    "promptDe": "Ein Geschäftsstakeholder fordert eine Power Platform-Integration mit einem Finanzhandelssystem, das Sub-Millisekunden-Latenz erfordert. Was sollte der Solution Architect empfehlen?",
    "hint": "Solution architects must know the boundaries of what Power Platform is designed for.",
    "hintDe": "Solution Architects müssen die Grenzen dessen kennen, wofür Power Platform konzipiert ist.",
    "options": [
      { "id": "opt-0", "text": "Advise that Power Platform is not designed for sub-millisecond latency", "textDe": "Empfehlen, dass Power Platform nicht für Sub-Millisekunden-Latenz konzipiert ist", "isCorrect": true, "explanation": "Power Platform is designed for business productivity (seconds to minutes). Sub-millisecond latency requires specialized Azure event processing or custom high-frequency trading infrastructure — the architect must set correct expectations.", "explanationDe": "Power Platform ist für Unternehmensproduktivität (Sekunden bis Minuten) konzipiert. Sub-Millisekunden-Latenz erfordert spezialisierte Azure-Ereignisverarbeitung oder benutzerdefinierte Hochfrequenzhandel-Infrastruktur — der Architect muss korrekte Erwartungen setzen." },
      { "id": "opt-1", "text": "Use Azure Relay for synchronous real-time integration", "textDe": "Azure Relay für synchrone Echtzeit-Integration verwenden", "isCorrect": false, "explanation": "Azure Relay provides synchronous integration but still operates at milliseconds to seconds — not sub-millisecond for financial trading.", "explanationDe": "Azure Relay bietet synchrone Integration, operiert aber immer noch im Millisekunden-bis-Sekunden-Bereich — nicht Sub-Millisekunden für den Finanzhandel." },
      { "id": "opt-2", "text": "Use premium Power Platform connectors for lower latency", "textDe": "Premium Power Platform Connectors für geringere Latenz verwenden", "isCorrect": false, "explanation": "Premium connectors don't reduce latency to sub-millisecond — they provide access to more data sources but with similar latency characteristics.", "explanationDe": "Premium-Connectors reduzieren die Latenz nicht auf Sub-Millisekunden — sie bieten Zugriff auf mehr Datenquellen, aber mit ähnlichen Latenzeigenschaften." },
      { "id": "opt-3", "text": "Agree and design the integration anyway", "textDe": "Zustimmen und die Integration trotzdem gestalten", "isCorrect": false, "explanation": "Agreeing to requirements the platform cannot meet sets the project up for failure — the architect's role is to align expectations with platform capabilities.", "explanationDe": "Anforderungen zuzustimmen, die die Plattform nicht erfüllen kann, führt das Projekt zum Scheitern — die Rolle des Architects ist es, Erwartungen mit Plattformfähigkeiten in Einklang zu bringen." }
    ],
    "explanation": "A key architect skill is knowing platform boundaries. Power Platform operates in the seconds-to-minutes range — sub-millisecond latency requires a different technology stack.",
    "explanationDe": "Eine Schlüsselkompetenz des Architects ist das Kennen von Plattformgrenzen. Power Platform operiert im Sekunden-bis-Minuten-Bereich — Sub-Millisekunden-Latenz erfordert einen anderen Technologie-Stack.",
    "learnRef": { "title": "PL-600: When to use Power Platform", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/overview" },
    "learnRefDe": { "title": "PL-600: Wann Power Platform verwendet werden soll", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/overview" }
  },
  {
    "id": "p6-q16",
    "certId": "pl600",
    "topic": "Data Architecture",
    "type": "single-choice",
    "prompt": "Users need to store and collaborate on large video files (up to 2GB) with version history. The files are loosely linked to Dataverse records. Which storage approach should you recommend?",
    "promptDe": "Benutzer müssen große Videodateien (bis zu 2 GB) mit Versionsverlauf speichern und daran zusammenarbeiten. Die Dateien sind lose mit Dataverse-Datensätzen verknüpft. Welchen Speicheransatz solltest du empfehlen?",
    "hint": "Dataverse has file column size limits and is expensive for large media storage.",
    "hintDe": "Dataverse hat Dateigrößenbeschränkungen für Dateispalten und ist teuer für die Speicherung großer Medien.",
    "options": [
      { "id": "opt-0", "text": "SharePoint document library with Dataverse-SharePoint integration", "textDe": "SharePoint-Dokumentbibliothek mit Dataverse-SharePoint-Integration", "isCorrect": true, "explanation": "SharePoint provides large file support, versioning, and Office 365 collaboration. The native Dataverse-SharePoint integration links documents to records without duplicating storage.", "explanationDe": "SharePoint bietet große Dateiunterstützung, Versionierung und Office 365-Zusammenarbeit. Die native Dataverse-SharePoint-Integration verknüpft Dokumente mit Datensätzen ohne Speicherduplizierung." },
      { "id": "opt-1", "text": "Dataverse file columns", "textDe": "Dataverse-Dateispalten", "isCorrect": false, "explanation": "Dataverse file columns have a 128MB size limit and are expensive for large binary data — not suitable for 2GB videos.", "explanationDe": "Dataverse-Dateispalten haben ein 128-MB-Größenlimit und sind teuer für große binäre Daten — nicht geeignet für 2-GB-Videos." },
      { "id": "opt-2", "text": "Azure Blob Storage with custom application layer", "textDe": "Azure Blob Storage mit benutzerdefinierter Anwendungsschicht", "isCorrect": false, "explanation": "Azure Blob Storage works technically but requires custom development for Dataverse record linking — SharePoint integration is already built-in.", "explanationDe": "Azure Blob Storage funktioniert technisch, erfordert aber benutzerdefinierte Entwicklung für die Verknüpfung von Dataverse-Datensätzen — SharePoint-Integration ist bereits eingebaut." },
      { "id": "opt-3", "text": "SQL Server FILESTREAM", "textDe": "SQL Server FILESTREAM", "isCorrect": false, "explanation": "SQL Server FILESTREAM is not a Power Platform native option and requires significant infrastructure management.", "explanationDe": "SQL Server FILESTREAM ist keine native Power Platform-Option und erfordert erhebliche Infrastrukturverwaltung." }
    ],
    "explanation": "SharePoint document libraries with Dataverse integration are the recommended architecture for large file storage linked to Dataverse records — native support, versioning, collaboration included.",
    "explanationDe": "SharePoint-Dokumentbibliotheken mit Dataverse-Integration sind die empfohlene Architektur für die Speicherung großer Dateien, die mit Dataverse-Datensätzen verknüpft sind — native Unterstützung, Versionierung, Zusammenarbeit inklusive.",
    "learnRef": { "title": "PL-600: Manage SharePoint documents with Dataverse", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/sharepoint-onedrive-onenote-intro" },
    "learnRefDe": { "title": "PL-600: SharePoint-Dokumente mit Dataverse verwalten", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/sharepoint-onedrive-onenote-intro" }
  },
  {
    "id": "p6-q17",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "You deploy a managed solution to a customer environment. You want to prevent their makers from customizing the table forms included in your solution. What should you configure?",
    "promptDe": "Du stellst eine verwaltete Lösung in einer Kundenumgebung bereit. Du möchtest verhindern, dass ihre Maker die in deiner Lösung enthaltenen Tabellenformulare anpassen. Was solltest du konfigurieren?",
    "hint": "Managed solutions have a property that controls whether components can be customized after deployment.",
    "hintDe": "Verwaltete Lösungen haben eine Eigenschaft, die steuert, ob Komponenten nach der Bereitstellung angepasst werden können.",
    "options": [
      { "id": "opt-0", "text": "Set the managed property 'Allow customizations' to false", "textDe": "Die verwaltete Eigenschaft 'Anpassungen zulassen' auf false setzen", "isCorrect": true, "explanation": "Managed properties control which aspects of a solution component can be customized after deployment. Setting 'Allow customizations' to false prevents makers from modifying managed forms.", "explanationDe": "Verwaltete Eigenschaften steuern, welche Aspekte einer Lösungskomponente nach der Bereitstellung angepasst werden können. Das Setzen von 'Anpassungen zulassen' auf false verhindert, dass Maker verwaltete Formulare ändern." },
      { "id": "opt-1", "text": "Export as a patch solution", "textDe": "Als Patch-Lösung exportieren", "isCorrect": false, "explanation": "Patch solutions provide incremental updates — they don't control customization rights on components.", "explanationDe": "Patch-Lösungen bieten inkrementelle Updates — sie steuern keine Anpassungsrechte für Komponenten." },
      { "id": "opt-2", "text": "Mark the forms as read-only in the XML before import", "textDe": "Die Formulare vor dem Import im XML als schreibgeschützt markieren", "isCorrect": false, "explanation": "Manually editing solution XML is fragile and not the supported mechanism for restricting customization.", "explanationDe": "Das manuelle Bearbeiten von Lösungs-XML ist fragil und kein unterstützter Mechanismus zur Einschränkung von Anpassungen." },
      { "id": "opt-3", "text": "Lock the solution with a password", "textDe": "Die Lösung mit einem Passwort sperren", "isCorrect": false, "explanation": "Power Platform solutions do not have password-based locking for components.", "explanationDe": "Power Platform-Lösungen haben keine passwortbasierte Sperrung für Komponenten." }
    ],
    "explanation": "Managed properties are the correct mechanism to prevent customization of managed solution components in target environments — configured before solution export.",
    "explanationDe": "Verwaltete Eigenschaften sind der richtige Mechanismus, um die Anpassung verwalteter Lösungskomponenten in Zielumgebungen zu verhindern — vor dem Lösungsexport konfiguriert.",
    "learnRef": { "title": "PL-600: Use managed properties", "url": "https://learn.microsoft.com/en-us/power-platform/alm/use-managed-properties" },
    "learnRefDe": { "title": "PL-600: Verwaltete Eigenschaften verwenden", "url": "https://learn.microsoft.com/de-de/power-platform/alm/use-managed-properties" }
  },
  {
    "id": "p6-q18",
    "certId": "pl600",
    "topic": "Integration Architecture",
    "type": "single-choice",
    "prompt": "Two systems have bidirectional data synchronization. Changes in system A flow to system B, and vice versa. What mechanism prevents an infinite sync loop?",
    "promptDe": "Zwei Systeme haben eine bidirektionale Datensynchronisierung. Änderungen in System A fließen zu System B und umgekehrt. Welcher Mechanismus verhindert eine endlose Synchronisierungsschleife?",
    "hint": "The sync job needs to know the origin of a change to decide whether to propagate it.",
    "hintDe": "Der Sync-Job muss den Ursprung einer Änderung kennen, um zu entscheiden, ob er sie weitergeben soll.",
    "options": [
      { "id": "opt-0", "text": "Track the sync source and skip records that originated from the other system", "textDe": "Sync-Quelle verfolgen und Datensätze überspringen, die aus dem anderen System stammen", "isCorrect": true, "explanation": "Mark each synced record with its origin (e.g., a 'SyncSource' field). When a sync job processes a record, it checks the origin — if it came from the other system, skip propagation to break the loop.", "explanationDe": "Jeden synchronisierten Datensatz mit seinem Ursprung markieren (z.B. ein 'SyncSource'-Feld). Wenn ein Sync-Job einen Datensatz verarbeitet, prüft er den Ursprung — wenn er aus dem anderen System kam, Weitergabe überspringen um die Schleife zu unterbrechen." },
      { "id": "opt-1", "text": "Use timestamps and only sync records modified in the last hour", "textDe": "Zeitstempel verwenden und nur Datensätze synchronisieren, die in der letzten Stunde geändert wurden", "isCorrect": false, "explanation": "Timestamp-based filtering doesn't break loops — a record synced from A to B would have a new timestamp and be synced back.", "explanationDe": "Zeitstempel-basierte Filterung bricht keine Schleifen — ein von A zu B synchronisierter Datensatz hätte einen neuen Zeitstempel und würde zurück synchronisiert." },
      { "id": "opt-2", "text": "Use Azure Service Bus dead-letter queue as a loop breaker", "textDe": "Azure Service Bus Dead-Letter Queue als Schleifenunterbrecher verwenden", "isCorrect": false, "explanation": "Dead-letter queues handle unprocessable messages — they don't prevent bidirectional sync loops.", "explanationDe": "Dead-Letter Queues behandeln nicht verarbeitbare Nachrichten — sie verhindern keine bidirektionalen Synchronisierungsschleifen." },
      { "id": "opt-3", "text": "Enable change tracking on both systems to detect the original change", "textDe": "Änderungsverfolgung in beiden Systemen aktivieren, um die ursprüngliche Änderung zu erkennen", "isCorrect": false, "explanation": "Change tracking detects what changed but doesn't inherently identify the origin — a loop can still form.", "explanationDe": "Änderungsverfolgung erkennt, was sich geändert hat, identifiziert aber nicht inhärent den Ursprung — eine Schleife kann sich trotzdem bilden." }
    ],
    "explanation": "Bidirectional sync loop prevention requires tagging records with their origin. When a sync job sees its own previously synced data, it skips propagation — breaking the loop.",
    "explanationDe": "Bidirektionale Sync-Schleifen-Prävention erfordert das Kennzeichnen von Datensätzen mit ihrem Ursprung. Wenn ein Sync-Job seine eigenen zuvor synchronisierten Daten sieht, überspringt er die Weitergabe — bricht die Schleife.",
    "learnRef": { "title": "PL-600: Integration patterns for Power Platform", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/azure-integration" },
    "learnRefDe": { "title": "PL-600: Integrationsmuster für Power Platform", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/azure-integration" }
  },
  {
    "id": "p6-q19",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "A company wants to prevent users from connecting Dataverse flows to personal email accounts (like Gmail). Which Power Platform governance feature should you configure?",
    "promptDe": "Ein Unternehmen möchte verhindern, dass Benutzer Dataverse-Flows mit persönlichen E-Mail-Konten (wie Gmail) verbinden. Welche Power Platform-Governance-Funktion solltest du konfigurieren?",
    "hint": "This feature classifies connectors into tiers to prevent certain connector combinations.",
    "hintDe": "Diese Funktion klassifiziert Connectors in Stufen, um bestimmte Connector-Kombinationen zu verhindern.",
    "options": [
      { "id": "opt-0", "text": "Data Loss Prevention (DLP) policies", "textDe": "Data Loss Prevention (DLP)-Richtlinien", "isCorrect": true, "explanation": "DLP policies classify connectors into Business, Non-Business, or Blocked tiers. By placing Dataverse in Business and Gmail in Non-Business (or Blocked), you prevent them from being used together in the same flow.", "explanationDe": "DLP-Richtlinien klassifizieren Connectors in Business-, Non-Business- oder Blockierte Stufen. Indem Dataverse in Business und Gmail in Non-Business (oder Blockiert) platziert wird, wird verhindert, dass sie im selben Flow verwendet werden." },
      { "id": "opt-1", "text": "Power Platform environment settings", "textDe": "Power Platform-Umgebungseinstellungen", "isCorrect": false, "explanation": "Environment settings control environment-level configuration — they don't classify connector pairings.", "explanationDe": "Umgebungseinstellungen steuern die Konfiguration auf Umgebungsebene — sie klassifizieren keine Connector-Paarungen." },
      { "id": "opt-2", "text": "Azure Conditional Access policies", "textDe": "Azure Conditional Access-Richtlinien", "isCorrect": false, "explanation": "Conditional Access controls user authentication — it doesn't restrict which connectors can be used together.", "explanationDe": "Conditional Access steuert die Benutzerauthentifizierung — es schränkt nicht ein, welche Connectors zusammen verwendet werden können." },
      { "id": "opt-3", "text": "Power Platform admin roles", "textDe": "Power Platform-Administratorrollen", "isCorrect": false, "explanation": "Admin roles control who can manage the platform — they don't block specific connector pairings for users.", "explanationDe": "Administratorrollen steuern, wer die Plattform verwalten kann — sie blockieren keine spezifischen Connector-Paarungen für Benutzer." }
    ],
    "explanation": "DLP policies are the primary data governance mechanism in Power Platform — they prevent mixing business data connectors (Dataverse) with personal/non-business connectors (Gmail, personal OneDrive).",
    "explanationDe": "DLP-Richtlinien sind der primäre Daten-Governance-Mechanismus in Power Platform — sie verhindern die Vermischung von Geschäftsdaten-Connectors (Dataverse) mit persönlichen/Nicht-Geschäfts-Connectors (Gmail, persönliches OneDrive).",
    "learnRef": { "title": "PL-600: Data loss prevention policies", "url": "https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention" },
    "learnRefDe": { "title": "PL-600: Data Loss Prevention-Richtlinien", "url": "https://learn.microsoft.com/de-de/power-platform/admin/wp-data-loss-prevention" }
  },
  {
    "id": "p6-q20",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "A Power Platform project is ready for UAT. Business users will test the solution with realistic data in a controlled environment before go-live. Which environment type should host UAT?",
    "promptDe": "Ein Power Platform-Projekt ist für UAT bereit. Geschäftsbenutzer werden die Lösung vor dem Go-Live mit realistischen Daten in einer kontrollierten Umgebung testen. Welcher Umgebungstyp sollte UAT beherbergen?",
    "hint": "This environment type can have a copy of production data created and supports being reset after testing.",
    "hintDe": "Dieser Umgebungstyp kann eine Kopie der Produktionsdaten erstellen lassen und unterstützt das Zurücksetzen nach dem Test.",
    "options": [
      { "id": "opt-0", "text": "Sandbox environment", "textDe": "Sandbox-Umgebung", "isCorrect": true, "explanation": "Sandbox environments support database copy from production (for realistic test data), can be reset after UAT, and are purpose-built for testing and validation.", "explanationDe": "Sandbox-Umgebungen unterstützen das Kopieren der Datenbank aus der Produktion (für realistische Testdaten), können nach UAT zurückgesetzt werden und sind speziell für Tests und Validierung entwickelt." },
      { "id": "opt-1", "text": "Developer environment", "textDe": "Entwicklerumgebung", "isCorrect": false, "explanation": "Developer environments are personal and free — they lack the management features needed for shared UAT with business users.", "explanationDe": "Entwicklerumgebungen sind persönlich und kostenlos — ihnen fehlen die Verwaltungsfunktionen, die für gemeinsame UAT mit Geschäftsbenutzern benötigt werden." },
      { "id": "opt-2", "text": "Production environment", "textDe": "Produktionsumgebung", "isCorrect": false, "explanation": "UAT should never be performed in production — testing in prod risks data corruption and disruption to live users.", "explanationDe": "UAT sollte niemals in der Produktion durchgeführt werden — Tests in der Produktion riskieren Datenbeschädigung und Störung für Live-Benutzer." },
      { "id": "opt-3", "text": "Default environment", "textDe": "Standardumgebung", "isCorrect": false, "explanation": "The default environment is shared by all users in the tenant and uncontrolled — not appropriate for UAT.", "explanationDe": "Die Standardumgebung wird von allen Benutzern im Mandanten geteilt und ist unkontrolliert — nicht geeignet für UAT." }
    ],
    "explanation": "Sandbox environments are purpose-built for UAT — they can be seeded with production data copies, reset after testing, and isolate test activity from live systems.",
    "explanationDe": "Sandbox-Umgebungen sind speziell für UAT entwickelt — sie können mit Produktionsdatenkopien befüllt, nach dem Test zurückgesetzt werden und isolieren Testaktivitäten von Live-Systemen.",
    "learnRef": { "title": "PL-600: Power Platform environment types", "url": "https://learn.microsoft.com/en-us/power-platform/admin/environments-overview" },
    "learnRefDe": { "title": "PL-600: Power Platform-Umgebungstypen", "url": "https://learn.microsoft.com/de-de/power-platform/admin/environments-overview" }
  },
  {
    "id": "p6-q21",
    "certId": "pl600",
    "topic": "Automation Architecture",
    "type": "single-choice",
    "prompt": "A customer service team receives thousands of emails daily that need to be automatically categorized by topic (billing, technical support, general inquiry) for routing to the right team. Which AI Builder model should you recommend?",
    "promptDe": "Ein Kundenserviceteam erhält täglich Tausende von E-Mails, die automatisch nach Thema (Abrechnung, technischer Support, allgemeine Anfrage) kategorisiert werden müssen, um sie an das richtige Team weiterzuleiten. Welches AI Builder-Modell solltest du empfehlen?",
    "hint": "One AI Builder model is specifically designed for categorizing text into predefined classes.",
    "hintDe": "Ein AI Builder-Modell ist speziell für die Kategorisierung von Text in vordefinierte Klassen konzipiert.",
    "options": [
      { "id": "opt-0", "text": "Text classification", "textDe": "Textklassifizierung", "isCorrect": true, "explanation": "AI Builder text classification models categorize text (emails, tickets) into predefined categories. Train with labeled examples and it automatically routes new items.", "explanationDe": "AI Builder-Textklassifizierungsmodelle kategorisieren Text (E-Mails, Tickets) in vordefinierte Kategorien. Mit beschrifteten Beispielen trainieren und es leitet automatisch neue Elemente weiter." },
      { "id": "opt-1", "text": "Document processing", "textDe": "Dokumentenverarbeitung", "isCorrect": false, "explanation": "Document processing extracts fields from forms/invoices — it's not designed for free-text email classification.", "explanationDe": "Dokumentenverarbeitung extrahiert Felder aus Formularen/Rechnungen — sie ist nicht für die Klassifizierung von Freitext-E-Mails konzipiert." },
      { "id": "opt-2", "text": "Entity extraction", "textDe": "Entitätsextraktion", "isCorrect": false, "explanation": "Entity extraction finds named entities (names, dates, places) — it doesn't classify the overall topic/category.", "explanationDe": "Entitätsextraktion findet benannte Entitäten (Namen, Daten, Orte) — sie klassifiziert nicht das Gesamtthema/die Kategorie." },
      { "id": "opt-3", "text": "Object detection", "textDe": "Objekterkennung", "isCorrect": false, "explanation": "Object detection identifies visual objects in images — not applicable to email text classification.", "explanationDe": "Objekterkennung identifiziert visuelle Objekte in Bildern — nicht anwendbar auf E-Mail-Textklassifizierung." }
    ],
    "explanation": "AI Builder text classification is the right model for categorizing free-text content like emails into predefined topics — train with examples, deploy to flows for automatic routing.",
    "explanationDe": "AI Builder-Textklassifizierung ist das richtige Modell zur Kategorisierung von Freitext-Inhalten wie E-Mails in vordefinierte Themen — mit Beispielen trainieren, in Flows für automatisches Routing einsetzen.",
    "learnRef": { "title": "PL-600: Text classification in AI Builder", "url": "https://learn.microsoft.com/en-us/ai-builder/text-classification-overview" },
    "learnRefDe": { "title": "PL-600: Textklassifizierung in AI Builder", "url": "https://learn.microsoft.com/de-de/ai-builder/text-classification-overview" }
  },
  {
    "id": "p6-q22",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A company needs automated processing when an email arrives in a shared mailbox — extract attachments, update Dataverse, and notify a team. No conversational interface is needed. What should you use?",
    "promptDe": "Ein Unternehmen benötigt automatisierte Verarbeitung, wenn eine E-Mail in einem gemeinsamen Postfach ankommt — Anhänge extrahieren, Dataverse aktualisieren und ein Team benachrichtigen. Keine konversationelle Schnittstelle benötigt. Was solltest du verwenden?",
    "hint": "Choose the right automation tool based on whether you need conversation, scheduled tasks, event triggers, or UI automation.",
    "hintDe": "Wähle das richtige Automatisierungstool basierend darauf, ob du Konversation, geplante Aufgaben, Ereignis-Trigger oder UI-Automatisierung benötigst.",
    "options": [
      { "id": "opt-0", "text": "Power Automate automated cloud flow", "textDe": "Power Automate automatisierter Cloud-Flow", "isCorrect": true, "explanation": "Automated cloud flows trigger on events (new email in mailbox). They can extract attachments, update Dataverse, and send Teams notifications — exactly this scenario.", "explanationDe": "Automatisierte Cloud-Flows werden durch Ereignisse ausgelöst (neue E-Mail im Postfach). Sie können Anhänge extrahieren, Dataverse aktualisieren und Teams-Benachrichtigungen senden — genau dieses Szenario." },
      { "id": "opt-1", "text": "Copilot Studio", "textDe": "Copilot Studio", "isCorrect": false, "explanation": "Copilot Studio is for conversational AI chatbots — it's not used for event-driven email processing automation.", "explanationDe": "Copilot Studio ist für konversationelle KI-Chatbots — es wird nicht für ereignisgesteuerte E-Mail-Verarbeitungsautomatisierung verwendet." },
      { "id": "opt-2", "text": "Power Automate desktop flow", "textDe": "Power Automate Desktop-Flow", "isCorrect": false, "explanation": "Desktop flows automate UI interactions — the email connector in cloud flows handles this scenario without UI automation.", "explanationDe": "Desktop-Flows automatisieren UI-Interaktionen — der E-Mail-Connector in Cloud-Flows verarbeitet dieses Szenario ohne UI-Automatisierung." },
      { "id": "opt-3", "text": "Azure Logic Apps", "textDe": "Azure Logic Apps", "isCorrect": false, "explanation": "Logic Apps is an enterprise-grade option but requires Azure subscription management — Power Automate is the native, simpler Power Platform solution.", "explanationDe": "Logic Apps ist eine Enterprise-grade-Option, erfordert aber Azure-Abonnementverwaltung — Power Automate ist die native, einfachere Power Platform-Lösung." }
    ],
    "explanation": "Power Automate automated cloud flows are triggered by events like new emails — they handle attachment processing, Dataverse updates, and notifications natively.",
    "explanationDe": "Power Automate automatisierte Cloud-Flows werden durch Ereignisse wie neue E-Mails ausgelöst — sie verarbeiten Anhänge, Dataverse-Updates und Benachrichtigungen nativ.",
    "learnRef": { "title": "PL-600: Create an automated cloud flow", "url": "https://learn.microsoft.com/en-us/power-automate/get-started-logic-flow" },
    "learnRefDe": { "title": "PL-600: Automatisierten Cloud-Flow erstellen", "url": "https://learn.microsoft.com/de-de/power-automate/get-started-logic-flow" }
  },
  {
    "id": "p6-q23",
    "certId": "pl600",
    "topic": "Security Architecture",
    "type": "single-choice",
    "prompt": "A sales organization needs managers to automatically have read access to all records owned by their direct reports and subordinates. Which Dataverse security feature provides this?",
    "promptDe": "Eine Vertriebsorganisation benötigt, dass Manager automatisch Lesezugriff auf alle Datensätze haben, die ihren direkten Mitarbeitern und Untergeordneten gehören. Welches Dataverse-Sicherheitsmerkmal bietet dies?",
    "hint": "This feature uses the organizational hierarchy (manager-employee or position) to define automatic access.",
    "hintDe": "Diese Funktion verwendet die Organisationshierarchie (Manager-Mitarbeiter oder Position), um automatischen Zugriff zu definieren.",
    "options": [
      { "id": "opt-0", "text": "Hierarchy security (Manager or Position hierarchy)", "textDe": "Hierarchiesicherheit (Manager- oder Positionshierarchie)", "isCorrect": true, "explanation": "Hierarchy security provides managers automatic read (or read+write) access to records owned by subordinates in the hierarchy — without explicit sharing or BU changes.", "explanationDe": "Hierarchiesicherheit gibt Managern automatischen Lese- (oder Lese+Schreib-)Zugriff auf Datensätze, die Untergeordneten in der Hierarchie gehören — ohne explizite Freigabe oder BU-Änderungen." },
      { "id": "opt-1", "text": "Business unit hierarchy with inheritance", "textDe": "Business Unit-Hierarchie mit Vererbung", "isCorrect": false, "explanation": "BU hierarchy gives access to all records in child BUs — it's broader than just the manager's direct reports.", "explanationDe": "BU-Hierarchie gibt Zugriff auf alle Datensätze in untergeordneten BUs — das ist breiter als nur die direkten Berichte des Managers." },
      { "id": "opt-2", "text": "Manual record sharing for each subordinate's records", "textDe": "Manuelle Datensatzfreigabe für jeden Datensatz eines Untergeordneten", "isCorrect": false, "explanation": "Manual sharing doesn't scale for manager-report relationships — hierarchy security automates this.", "explanationDe": "Manuelle Freigabe skaliert nicht für Manager-Bericht-Beziehungen — Hierarchiesicherheit automatisiert dies." },
      { "id": "opt-3", "text": "Team-based access with managers in each team", "textDe": "Team-basierter Zugriff mit Managern in jedem Team", "isCorrect": false, "explanation": "Team-based access requires manual maintenance — hierarchy security derives access from the org chart automatically.", "explanationDe": "Team-basierter Zugriff erfordert manuelle Wartung — Hierarchiesicherheit leitet den Zugriff automatisch aus dem Organigramm ab." }
    ],
    "explanation": "Hierarchy security in Dataverse uses the manager-employee or position hierarchy to grant automatic read access down the org chart — no manual sharing required.",
    "explanationDe": "Hierarchiesicherheit in Dataverse verwendet die Manager-Mitarbeiter- oder Positionshierarchie, um automatischen Lesezugriff im Organigramm zu gewähren — keine manuelle Freigabe erforderlich.",
    "learnRef": { "title": "PL-600: Hierarchy security", "url": "https://learn.microsoft.com/en-us/power-platform/admin/hierarchy-security" },
    "learnRefDe": { "title": "PL-600: Hierarchiesicherheit", "url": "https://learn.microsoft.com/de-de/power-platform/admin/hierarchy-security" }
  },
  {
    "id": "p6-q24",
    "certId": "pl600",
    "topic": "Data Architecture",
    "type": "single-choice",
    "prompt": "Users in a large Dataverse environment with millions of records need full-text search across multiple tables simultaneously. What feature should you enable?",
    "promptDe": "Benutzer in einer großen Dataverse-Umgebung mit Millionen von Datensätzen benötigen eine Volltextsuche über mehrere Tabellen gleichzeitig. Welche Funktion solltest du aktivieren?",
    "hint": "Dataverse has an Azure Cognitive Search-powered search feature that indexes all searchable tables together.",
    "hintDe": "Dataverse hat eine von Azure Cognitive Search betriebene Suchfunktion, die alle durchsuchbaren Tabellen zusammen indiziert.",
    "options": [
      { "id": "opt-0", "text": "Dataverse search (formerly Relevance Search)", "textDe": "Dataverse-Suche (früher Relevanzsuche)", "isCorrect": true, "explanation": "Dataverse search uses Azure Cognitive Search to provide full-text, cross-table search with relevance ranking and near-real-time indexing — designed for large environments.", "explanationDe": "Dataverse-Suche verwendet Azure Cognitive Search für Volltext-, tabellenübergreifende Suche mit Relevanzranking und nahezu Echtzeit-Indizierung — für große Umgebungen konzipiert." },
      { "id": "opt-1", "text": "Quick Find views", "textDe": "Quick Find-Ansichten", "isCorrect": false, "explanation": "Quick Find searches one table at a time and has limitations at large scale — it doesn't provide cross-table search.", "explanationDe": "Quick Find sucht jeweils eine Tabelle und hat Einschränkungen bei großer Skalierung — es bietet keine tabellenübergreifende Suche." },
      { "id": "opt-2", "text": "FetchXML full-text search with LIKE operator", "textDe": "FetchXML-Volltextsuche mit LIKE-Operator", "isCorrect": false, "explanation": "FetchXML LIKE queries are SQL-level pattern matches — not full-text indexed, slow at scale, and single-table.", "explanationDe": "FetchXML LIKE-Abfragen sind SQL-Niveau-Musterabgleiche — nicht volltext-indiziert, langsam bei großer Skalierung und eine Tabelle." },
      { "id": "opt-3", "text": "Power BI full-text search report", "textDe": "Power BI-Volltextsuche-Bericht", "isCorrect": false, "explanation": "Power BI is for analytics and reporting — it doesn't provide real-time search across Dataverse tables in the app.", "explanationDe": "Power BI ist für Analysen und Berichte — es bietet keine Echtzeit-Suche über Dataverse-Tabellen in der App." }
    ],
    "explanation": "Dataverse search provides Azure Cognitive Search-powered full-text search across all indexed tables simultaneously — the correct feature for large-scale, multi-table search.",
    "explanationDe": "Dataverse-Suche bietet eine von Azure Cognitive Search betriebene Volltextsuche über alle indizierten Tabellen gleichzeitig — die richtige Funktion für groß angelegte, tabellenübergreifende Suche.",
    "learnRef": { "title": "PL-600: Configure Dataverse search", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/configure-relevance-search-organization" },
    "learnRefDe": { "title": "PL-600: Dataverse-Suche konfigurieren", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/configure-relevance-search-organization" }
  },
  {
    "id": "p6-q25",
    "certId": "pl600",
    "topic": "Integration Architecture",
    "type": "multi-choice",
    "prompt": "A credit union integrates Power Apps with a core banking system. Transaction data changes rapidly, must stay in the USA, and integration must be real time. Which characteristics describe this integration? Select all that apply.",
    "promptDe": "Eine Kreditgenossenschaft integriert Power Apps mit einem Kernbankensystem. Transaktionsdaten ändern sich schnell, müssen in den USA bleiben, und die Integration muss in Echtzeit erfolgen. Welche Merkmale beschreiben diese Integration? Alle zutreffenden auswählen.",
    "hint": "Classify each requirement separately: data change frequency, latency requirement, compliance constraint.",
    "hintDe": "Jede Anforderung separat klassifizieren: Datenänderungshäufigkeit, Latenzanforderung, Compliance-Einschränkung.",
    "options": [
      { "id": "opt-0", "text": "batch", "textDe": "Stapel (Batch)", "isCorrect": false, "explanation": "Batch is periodic bulk processing — this integration requires real time.", "explanationDe": "Stapel ist periodische Massenverarbeitung — diese Integration erfordert Echtzeit." },
      { "id": "opt-1", "text": "licensed", "textDe": "Lizenziert", "isCorrect": false, "explanation": "Licensed refers to copyrighted data — not applicable to this scenario.", "explanationDe": "Lizenziert bezieht sich auf urheberrechtlich geschützte Daten — in diesem Szenario nicht anwendbar." },
      { "id": "opt-2", "text": "regulated", "textDe": "Reguliert", "isCorrect": true, "explanation": "Data must stay in the USA — this is a regulatory/compliance (data residency) requirement.", "explanationDe": "Daten müssen in den USA bleiben — dies ist eine regulatorische/Compliance-(Datenresidenz-)Anforderung." },
      { "id": "opt-3", "text": "time sensitive", "textDe": "Zeitkritisch", "isCorrect": true, "explanation": "Real-time integration means strict latency requirements — the integration is time sensitive.", "explanationDe": "Echtzeit-Integration bedeutet strenge Latenzanforderungen — die Integration ist zeitkritisch." },
      { "id": "opt-4", "text": "volatility", "textDe": "Volatilität", "isCorrect": true, "explanation": "Transaction data changes rapidly — high change frequency is classified as high volatility.", "explanationDe": "Transaktionsdaten ändern sich schnell — hohe Änderungshäufigkeit wird als hohe Volatilität klassifiziert." },
      { "id": "opt-5", "text": "volume", "textDe": "Volumen", "isCorrect": false, "explanation": "Volume (data quantity) is not mentioned — the scenario focuses on speed and compliance.", "explanationDe": "Volumen (Datenmenge) wird nicht erwähnt — das Szenario konzentriert sich auf Geschwindigkeit und Compliance." }
    ],
    "explanation": "This integration is regulated (US data residency), time sensitive (real-time requirement), and high volatility (rapidly changing data) — these drive the architecture toward real-time, compliant integration patterns.",
    "explanationDe": "Diese Integration ist reguliert (US-Datenresidenz), zeitkritisch (Echtzeit-Anforderung) und hochvolatil (sich schnell ändernde Daten) — diese treiben die Architektur zu Echtzeit-, konformen Integrationsmustern.",
    "learnRef": { "title": "PL-600: Integration considerations for architects", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/azure-integration" },
    "learnRefDe": { "title": "PL-600: Integrationsüberlegungen für Architects", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/azure-integration" }
  },
  {
    "id": "p6-q26",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "A Power Automate flow connects to Azure SQL Server. The connection string differs between dev and production. Which Power Platform feature stores this configuration so it can be updated at deployment without modifying the flow?",
    "promptDe": "Ein Power Automate Flow verbindet sich mit Azure SQL Server. Die Verbindungszeichenfolge unterscheidet sich zwischen Entwicklung und Produktion. Welche Power Platform-Funktion speichert diese Konfiguration, damit sie bei der Bereitstellung ohne Änderung des Flows aktualisiert werden kann?",
    "hint": "This feature is included in solutions and supports a 'secret' type for sensitive values.",
    "hintDe": "Diese Funktion ist in Lösungen enthalten und unterstützt einen 'Secret'-Typ für sensible Werte.",
    "options": [
      { "id": "opt-0", "text": "Environment variable (secret type)", "textDe": "Umgebungsvariable (Secret-Typ)", "isCorrect": true, "explanation": "Environment variables of type Secret store sensitive configuration (connection strings, API keys) that vary per environment. Administrators provide values at deployment time without touching flow logic.", "explanationDe": "Umgebungsvariablen vom Typ Secret speichern sensible Konfiguration (Verbindungszeichenfolgen, API-Schlüssel), die pro Umgebung variieren. Administratoren geben Werte zur Bereitstellungszeit an, ohne die Flow-Logik zu berühren." },
      { "id": "opt-1", "text": "Hardcode in the flow action", "textDe": "Im Flow-Aktion fest codieren", "isCorrect": false, "explanation": "Hardcoding requires flow modification for each environment — poor practice for ALM.", "explanationDe": "Fest codieren erfordert eine Flow-Modifikation für jede Umgebung — schlechte Praxis für ALM." },
      { "id": "opt-2", "text": "Connection reference", "textDe": "Verbindungsreferenz", "isCorrect": false, "explanation": "Connection references store connector credentials (who is connecting) — not arbitrary configuration strings like connection strings.", "explanationDe": "Verbindungsreferenzen speichern Connector-Anmeldeinformationen (wer sich verbindet) — keine beliebigen Konfigurationszeichenfolgen wie Verbindungszeichenfolgen." },
      { "id": "opt-3", "text": "Custom connector URL setting", "textDe": "Benutzerdefinierte Connector-URL-Einstellung", "isCorrect": false, "explanation": "Connector URL settings are connector-specific — not a general-purpose ALM configuration mechanism.", "explanationDe": "Connector-URL-Einstellungen sind connectorspezifisch — kein allgemeiner ALM-Konfigurationsmechanismus." }
    ],
    "explanation": "Environment variables (secret type) are the correct ALM pattern for environment-specific sensitive configuration — values are provided at deployment without modifying solution components.",
    "explanationDe": "Umgebungsvariablen (Secret-Typ) sind das richtige ALM-Muster für umgebungsspezifische sensible Konfiguration — Werte werden bei der Bereitstellung ohne Änderung von Lösungskomponenten angegeben.",
    "learnRef": { "title": "PL-600: Environment variables overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables" },
    "learnRefDe": { "title": "PL-600: Umgebungsvariablen Übersicht", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/environmentvariables" }
  },
  {
    "id": "p6-q27",
    "certId": "pl600",
    "topic": "ALM & Governance",
    "type": "single-choice",
    "prompt": "You want to automatically test Power Automate flows after each deployment to a test environment, without manual execution. Which tooling should you recommend?",
    "promptDe": "Du möchtest Power Automate Flows nach jeder Bereitstellung in einer Testumgebung automatisch testen, ohne manuelle Ausführung. Welches Tooling solltest du empfehlen?",
    "hint": "Microsoft provides build tools that integrate Power Platform with CI/CD pipelines.",
    "hintDe": "Microsoft stellt Build-Tools bereit, die Power Platform in CI/CD-Pipelines integrieren.",
    "options": [
      { "id": "opt-0", "text": "Azure DevOps with Power Platform Build Tools and test flows", "textDe": "Azure DevOps mit Power Platform Build Tools und Test-Flows", "isCorrect": true, "explanation": "Power Platform Build Tools for Azure DevOps provide tasks for deploying solutions and triggering test flows as part of CI/CD pipelines — enabling automated post-deployment testing.", "explanationDe": "Power Platform Build Tools für Azure DevOps bieten Aufgaben für die Bereitstellung von Lösungen und das Auslösen von Test-Flows als Teil von CI/CD-Pipelines — ermöglicht automatisierte Tests nach der Bereitstellung." },
      { "id": "opt-1", "text": "Power Apps Test Studio", "textDe": "Power Apps Test Studio", "isCorrect": false, "explanation": "Power Apps Test Studio tests canvas apps — not Power Automate flows.", "explanationDe": "Power Apps Test Studio testet Canvas Apps — keine Power Automate Flows." },
      { "id": "opt-2", "text": "Power Automate flow testing mode", "textDe": "Power Automate Flow-Testmodus", "isCorrect": false, "explanation": "Flow testing mode is a manual, interactive feature — it cannot be automated in a deployment pipeline.", "explanationDe": "Flow-Testmodus ist eine manuelle, interaktive Funktion — sie kann nicht in einer Bereitstellungspipeline automatisiert werden." },
      { "id": "opt-3", "text": "Manual test scripts executed by the QA team", "textDe": "Manuelle Testskripte, die vom QA-Team ausgeführt werden", "isCorrect": false, "explanation": "Manual testing doesn't provide automated, repeatable post-deployment verification.", "explanationDe": "Manuelles Testen bietet keine automatisierte, wiederholbare Verifikation nach der Bereitstellung." }
    ],
    "explanation": "Power Platform Build Tools for Azure DevOps enable CI/CD pipelines for Power Platform — including automated solution deployment, solution checker, and test flow execution.",
    "explanationDe": "Power Platform Build Tools für Azure DevOps ermöglichen CI/CD-Pipelines für Power Platform — einschließlich automatisierter Lösungsbereitstellung, Solution Checker und Test-Flow-Ausführung.",
    "learnRef": { "title": "PL-600: Microsoft Power Platform Build Tools", "url": "https://learn.microsoft.com/en-us/power-platform/alm/devops-build-tools" },
    "learnRefDe": { "title": "PL-600: Microsoft Power Platform Build Tools", "url": "https://learn.microsoft.com/de-de/power-platform/alm/devops-build-tools" }
  },
  {
    "id": "p6-q28",
    "certId": "pl600",
    "topic": "Solution Architecture",
    "type": "single-choice",
    "prompt": "A solution architect is asked to select the data storage platform for a new Power Platform project. The data will be used in model-driven apps, processed by plug-ins, and queried via Web API. What is the correct choice?",
    "promptDe": "Ein Solution Architect wird gebeten, die Datenspeicherplattform für ein neues Power Platform-Projekt auszuwählen. Die Daten werden in modellgesteuerten Apps verwendet, von Plug-ins verarbeitet und über Web API abgefragt. Was ist die richtige Wahl?",
    "hint": "All Power Platform components (model-driven apps, plug-ins, Web API) are built on one data platform.",
    "hintDe": "Alle Power Platform-Komponenten (modellgesteuerte Apps, Plug-ins, Web API) sind auf einer Datenplattform aufgebaut.",
    "options": [
      { "id": "opt-0", "text": "Microsoft Dataverse", "textDe": "Microsoft Dataverse", "isCorrect": true, "explanation": "Dataverse is the native data platform for Power Platform. Model-driven apps are built directly on Dataverse tables, plug-ins execute within Dataverse's event pipeline, and the Web API is Dataverse's REST interface.", "explanationDe": "Dataverse ist die native Datenplattform für Power Platform. Modellgesteuerte Apps werden direkt auf Dataverse-Tabellen aufgebaut, Plug-ins werden innerhalb der Dataverse-Ereignispipeline ausgeführt, und die Web API ist Dataverse's REST-Schnittstelle." },
      { "id": "opt-1", "text": "Azure SQL Database", "textDe": "Azure SQL-Datenbank", "isCorrect": false, "explanation": "Azure SQL can be connected via custom connectors but doesn't natively support model-driven apps, plug-ins, or the Dataverse Web API.", "explanationDe": "Azure SQL kann über benutzerdefinierte Connectors verbunden werden, unterstützt aber nicht nativ modellgesteuerte Apps, Plug-ins oder die Dataverse Web API." },
      { "id": "opt-2", "text": "SharePoint Online lists", "textDe": "SharePoint Online-Listen", "isCorrect": false, "explanation": "SharePoint lists support canvas apps but not model-driven apps, Dataverse plug-ins, or the Dataverse Web API.", "explanationDe": "SharePoint-Listen unterstützen Canvas Apps, aber keine modellgesteuerten Apps, Dataverse-Plug-ins oder die Dataverse Web API." },
      { "id": "opt-3", "text": "Azure Cosmos DB", "textDe": "Azure Cosmos DB", "isCorrect": false, "explanation": "Cosmos DB can be used via virtual tables but is not the native data platform for Power Platform components.", "explanationDe": "Cosmos DB kann über virtuelle Tabellen verwendet werden, ist aber nicht die native Datenplattform für Power Platform-Komponenten." }
    ],
    "explanation": "Microsoft Dataverse is the mandatory data platform for model-driven apps, Dataverse plug-ins, and the Dataverse Web API — all three require Dataverse as their data store.",
    "explanationDe": "Microsoft Dataverse ist die obligatorische Datenplattform für modellgesteuerte Apps, Dataverse-Plug-ins und die Dataverse Web API — alle drei erfordern Dataverse als ihren Datenspeicher.",
    "learnRef": { "title": "PL-600: Dataverse overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro" },
    "learnRefDe": { "title": "PL-600: Dataverse Übersicht", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/data-platform-intro" }
  }
];
