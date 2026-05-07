import type { QuizQuestion } from '@/types/quiz';

export const pl400Questions: QuizQuestion[] = [
  {
    "id": "p4-q1",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You are designing the ALM process for a Power Platform project. You need to select a tool recommended by Microsoft to deploy solutions to downstream environments.",
    "promptDe": "Du gestaltest den ALM-Prozess für ein Power Platform-Projekt. Du musst ein von Microsoft empfohlenes Tool auswählen, um Lösungen in nachgelagerte Umgebungen bereitzustellen.",
    "hint": "Think about the built-in, no-code ALM tool that Microsoft ships natively inside Power Platform.",
    "hintDe": "Denke an das eingebaute, codelose ALM-Tool, das Microsoft nativ in Power Platform liefert.",
    "options": [
      { "id": "opt-0", "text": "Microsoft Power Platform Pipelines", "textDe": "Microsoft Power Platform Pipelines", "isCorrect": true, "explanation": "Power Platform Pipelines is Microsoft's built-in, low-code solution for deploying solutions between environments — it's the recommended first choice.", "explanationDe": "Power Platform Pipelines ist Microsofts eingebaute Low-Code-Lösung für die Bereitstellung von Lösungen zwischen Umgebungen — sie ist die empfohlene erste Wahl." },
      { "id": "opt-1", "text": "ALM Accelerator", "textDe": "ALM Accelerator", "isCorrect": false, "explanation": "ALM Accelerator is a community tool built on Azure DevOps — powerful but not the native Microsoft recommendation.", "explanationDe": "ALM Accelerator ist ein Community-Tool auf Basis von Azure DevOps — leistungsfähig, aber nicht die native Microsoft-Empfehlung." },
      { "id": "opt-2", "text": "Azure Pipelines in Azure DevOps", "textDe": "Azure Pipelines in Azure DevOps", "isCorrect": false, "explanation": "Azure Pipelines work well for advanced scenarios but require DevOps expertise — not the recommended starting point.", "explanationDe": "Azure Pipelines funktionieren gut für fortgeschrittene Szenarien, erfordern aber DevOps-Kenntnisse — kein empfohlener Einstiegspunkt." },
      { "id": "opt-3", "text": "Manual ALM", "textDe": "Manuelles ALM", "isCorrect": false, "explanation": "Manual ALM is error-prone and not recommended for any serious project.", "explanationDe": "Manuelles ALM ist fehleranfällig und für kein ernsthaftes Projekt empfohlen." },
      { "id": "opt-4", "text": "Scripts that run on an Azure VM", "textDe": "Skripte auf einer Azure VM", "isCorrect": false, "explanation": "Custom VM scripts are not a Microsoft-recommended ALM approach for Power Platform.", "explanationDe": "Benutzerdefinierte VM-Skripte sind kein von Microsoft empfohlener ALM-Ansatz für Power Platform." }
    ],
    "explanation": "Power Platform Pipelines is the Microsoft-recommended, built-in tool for managing solution deployments across environments without requiring DevOps expertise.",
    "explanationDe": "Power Platform Pipelines ist das von Microsoft empfohlene eingebaute Tool zur Verwaltung von Lösungsbereitstellungen über Umgebungen hinweg, ohne DevOps-Kenntnisse zu erfordern.",
    "learnRef": { "title": "PL-400: Overview of Power Platform Pipelines", "url": "https://learn.microsoft.com/en-us/power-platform/alm/pipelines" },
    "learnRefDe": { "title": "PL-400: Übersicht Power Platform Pipelines", "url": "https://learn.microsoft.com/de-de/power-platform/alm/pipelines" }
  },
  {
    "id": "p4-q2",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "You are designing a Power Apps solution for a heavy equipment company to manage its fleet of vehicles. The IT director asks you to use a common fleet management schema in Dataverse to expedite data model creation.",
    "promptDe": "Du gestaltest eine Power Apps-Lösung für ein Schwermaschinenbauunternehmen zur Verwaltung seiner Fahrzeugflotte. Der IT-Direktor bittet dich, ein gemeinsames Flottenmanagement-Schema in Dataverse zu verwenden.",
    "hint": "Microsoft publishes industry-specific data model packages called 'accelerators' for common domains.",
    "hintDe": "Microsoft veröffentlicht branchenspezifische Datenmodellpakete namens 'Accelerators' für gängige Bereiche.",
    "options": [
      { "id": "opt-0", "text": "automotive accelerator", "textDe": "Automotive Accelerator", "isCorrect": true, "explanation": "The Dynamics 365 Automotive Accelerator provides pre-built fleet management schemas, reducing time-to-value for vehicle-related solutions.", "explanationDe": "Der Dynamics 365 Automotive Accelerator bietet vorgefertigte Flottenmanagement-Schemas und reduziert die Time-to-Value für fahrzeugbezogene Lösungen." },
      { "id": "opt-1", "text": "default solution", "textDe": "Standardlösung", "isCorrect": false, "explanation": "The default solution is a container for unmanaged customizations — it has no industry-specific data model.", "explanationDe": "Die Standardlösung ist ein Container für nicht verwaltete Anpassungen — sie enthält kein branchenspezifisches Datenmodell." },
      { "id": "opt-2", "text": "default Common Data Model", "textDe": "Standard Common Data Model", "isCorrect": false, "explanation": "The base CDM defines core entities like Account and Contact — not fleet-specific schemas.", "explanationDe": "Das Basis-CDM definiert Kernentitäten wie Konto und Kontakt — keine flottenspezifischen Schemas." },
      { "id": "opt-3", "text": "logical data model", "textDe": "Logisches Datenmodell", "isCorrect": false, "explanation": "A logical data model is a design artifact — it is not a pre-built Dataverse package.", "explanationDe": "Ein logisches Datenmodell ist ein Designartefakt — kein vorgefertigtes Dataverse-Paket." }
    ],
    "explanation": "Microsoft Industry Accelerators (like the Automotive Accelerator) provide pre-built Dataverse schemas for specific verticals, dramatically reducing data modeling time.",
    "explanationDe": "Microsoft Industry Accelerators (wie der Automotive Accelerator) bieten vorgefertigte Dataverse-Schemas für spezifische Branchen und reduzieren die Datenmodellierungszeit erheblich.",
    "learnRef": { "title": "PL-400: Automotive accelerator", "url": "https://learn.microsoft.com/en-us/dynamics365/industry/accelerators/auto-overview" },
    "learnRefDe": { "title": "PL-400: Automotive Accelerator", "url": "https://learn.microsoft.com/de-de/dynamics365/industry/accelerators/auto-overview" }
  },
  {
    "id": "p4-q3",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "multi-choice",
    "prompt": "You are designing the data model for a Dataverse solution. You need to identify which tables form part of the Common Data Model. Select all that apply.",
    "promptDe": "Du gestaltest das Datenmodell für eine Dataverse-Lösung. Identifiziere, welche Tabellen Teil des Common Data Model sind. Alle zutreffenden auswählen.",
    "hint": "The Common Data Model defines a shared schema of standard business entities — think core CRM entities.",
    "hintDe": "Das Common Data Model definiert ein gemeinsames Schema von Standard-Geschäftsentitäten — denke an Kern-CRM-Entitäten.",
    "options": [
      { "id": "opt-0", "text": "Account", "textDe": "Konto (Account)", "isCorrect": true, "explanation": "Account is a foundational CDM entity representing organizations.", "explanationDe": "Konto (Account) ist eine grundlegende CDM-Entität, die Organisationen repräsentiert." },
      { "id": "opt-1", "text": "Business", "textDe": "Business", "isCorrect": false, "explanation": "'Business' is not a standard CDM table — Business Unit is a concept but not a CDM data entity.", "explanationDe": "'Business' ist keine Standard-CDM-Tabelle — Business Unit ist ein Konzept, aber keine CDM-Datenentität." },
      { "id": "opt-2", "text": "Grant", "textDe": "Grant", "isCorrect": false, "explanation": "Grant belongs to the nonprofit industry accelerator schema, not the core CDM.", "explanationDe": "Grant gehört zum Nonprofit-Branchenbeschleuniger-Schema, nicht zum Kern-CDM." },
      { "id": "opt-3", "text": "Marketing List", "textDe": "Marketingliste", "isCorrect": false, "explanation": "Marketing List is a legacy CRM concept and is not part of the standard Common Data Model.", "explanationDe": "Marketingliste ist ein Legacy-CRM-Konzept und nicht Teil des Standard-Common Data Model." },
      { "id": "opt-4", "text": "Task", "textDe": "Aufgabe (Task)", "isCorrect": true, "explanation": "Task is a standard CDM activity entity for tracking work items.", "explanationDe": "Aufgabe (Task) ist eine Standard-CDM-Aktivitätsentität zur Verfolgung von Arbeitselementen." },
      { "id": "opt-5", "text": "Program", "textDe": "Program", "isCorrect": false, "explanation": "Program is part of education/nonprofit accelerator schemas, not the core CDM.", "explanationDe": "Program ist Teil von Bildungs-/Nonprofit-Accelerator-Schemas, nicht des Kern-CDM." }
    ],
    "explanation": "Account and Task are core Common Data Model entities. Industry-specific entities (Grant, Program) belong to accelerators, not the base CDM.",
    "explanationDe": "Konto (Account) und Aufgabe (Task) sind Kern-Common-Data-Model-Entitäten. Branchenspezifische Entitäten (Grant, Program) gehören zu Accelerators, nicht zum Basis-CDM.",
    "learnRef": { "title": "PL-400: Common Data Model overview", "url": "https://learn.microsoft.com/en-us/common-data-model/overview" },
    "learnRefDe": { "title": "PL-400: Common Data Model Übersicht", "url": "https://learn.microsoft.com/de-de/common-data-model/overview" }
  },
  {
    "id": "p4-q4",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "A functional consultant reports that in a 1:N Dataverse relationship, related rows are left orphaned instead of being deleted when the parent is deleted. The behavior for Share and Assign works as expected. Which relationship behavior is configured?",
    "promptDe": "Ein Functional Consultant meldet, dass in einer 1:N-Dataverse-Beziehung untergeordnete Zeilen verwaist statt gelöscht werden, wenn das übergeordnete Objekt gelöscht wird. Das Verhalten für Freigeben und Zuweisen funktioniert wie erwartet. Welches Beziehungsverhalten ist konfiguriert?",
    "hint": "One behavior cascades Share and Assign but allows parent deletion, leaving children as orphans.",
    "hintDe": "Ein Verhalten kaskadiert Freigeben und Zuweisen, erlaubt aber das Löschen des übergeordneten Elements und hinterlässt Kinder als Waisen.",
    "options": [
      { "id": "opt-0", "text": "Referential", "textDe": "Referentiell", "isCorrect": true, "explanation": "Referential behavior cascades Assign and Share, but does NOT cascade Delete — parent deletion leaves child records orphaned (lookup becomes null).", "explanationDe": "Referentielles Verhalten kaskadiert Zuweisen und Freigeben, kaskadiert aber NICHT Löschen — das Löschen des übergeordneten Elements hinterlässt untergeordnete Datensätze als Waisen." },
      { "id": "opt-1", "text": "Parental", "textDe": "Übergeordnet (Parental)", "isCorrect": false, "explanation": "Parental behavior cascades ALL operations including Delete — children are deleted with the parent, no orphans.", "explanationDe": "Übergeordnetes Verhalten kaskadiert ALLE Operationen einschließlich Löschen — Kinder werden mit dem übergeordneten Element gelöscht, keine Waisen." },
      { "id": "opt-2", "text": "Referential, Restrict Delete", "textDe": "Referentiell, Löschen einschränken", "isCorrect": false, "explanation": "Restrict Delete prevents the parent from being deleted at all when children exist — no orphans are possible.", "explanationDe": "Löschen einschränken verhindert, dass das übergeordnete Element überhaupt gelöscht wird, wenn Kinder vorhanden sind — keine Waisen möglich." },
      { "id": "opt-3", "text": "Custom", "textDe": "Benutzerdefiniert", "isCorrect": false, "explanation": "Custom allows per-action configuration — the described scenario matches Referential specifically, not Custom.", "explanationDe": "Benutzerdefiniert ermöglicht eine Konfiguration pro Aktion — das beschriebene Szenario entspricht speziell Referentiell, nicht Benutzerdefiniert." }
    ],
    "explanation": "Referential relationship behavior cascades Assign and Share (matching the scenario) but allows parent deletion, leaving child records with a null lookup — orphaned.",
    "explanationDe": "Referentielles Beziehungsverhalten kaskadiert Zuweisen und Freigeben (passend zum Szenario), erlaubt aber das Löschen des übergeordneten Elements und hinterlässt untergeordnete Datensätze mit einem Null-Lookup — verwaist.",
    "learnRef": { "title": "PL-400: Table relationship behavior", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-entity-relationships#relationship-behavior" },
    "learnRefDe": { "title": "PL-400: Tabellenbeziehungsverhalten", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/create-edit-entity-relationships#relationship-behavior" }
  },
  {
    "id": "p4-q5",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "Another system needs to integrate with Dataverse to update data. The system is not aware of the GUIDs of the rows. The integration must minimize the number of requests.",
    "promptDe": "Ein anderes System muss sich mit Dataverse integrieren, um Daten zu aktualisieren. Das System kennt die GUIDs der Zeilen nicht. Die Integration muss die Anzahl der Anfragen minimieren.",
    "hint": "There is a feature that lets you identify records by a business key instead of the system-generated ID.",
    "hintDe": "Es gibt eine Funktion, mit der du Datensätze anhand eines Geschäftsschlüssels anstatt der systemgenerierten ID identifizieren kannst.",
    "options": [
      { "id": "opt-0", "text": "Alternative keys", "textDe": "Alternative Schlüssel", "isCorrect": true, "explanation": "Alternative keys let you reference records by business keys (e.g. email, product code). A single Web API upsert call with an alternate key creates or updates without needing a prior lookup.", "explanationDe": "Alternative Schlüssel ermöglichen das Referenzieren von Datensätzen per Geschäftsschlüssel. Ein einziger Web-API-Upsert mit alternativem Schlüssel erstellt oder aktualisiert ohne vorherige Suche." },
      { "id": "opt-1", "text": "Azure Service Bus", "textDe": "Azure Service Bus", "isCorrect": false, "explanation": "Azure Service Bus is a messaging service — it doesn't help with identifying records without GUIDs.", "explanationDe": "Azure Service Bus ist ein Messaging-Dienst — er hilft nicht beim Identifizieren von Datensätzen ohne GUIDs." },
      { "id": "opt-2", "text": "Change tracking", "textDe": "Änderungsverfolgung", "isCorrect": false, "explanation": "Change tracking detects what changed since last sync — it doesn't solve the GUID-less identification problem.", "explanationDe": "Änderungsverfolgung erkennt, was seit der letzten Synchronisierung geändert wurde — sie löst nicht das Problem der Identifizierung ohne GUID." },
      { "id": "opt-3", "text": "Cloud flow", "textDe": "Cloud-Flow", "isCorrect": false, "explanation": "A cloud flow automates processes but doesn't reduce the number of Web API calls for integration.", "explanationDe": "Ein Cloud-Flow automatisiert Prozesse, reduziert aber nicht die Anzahl der Web-API-Aufrufe für die Integration." }
    ],
    "explanation": "Alternative keys allow external systems to upsert Dataverse records using known business identifiers (like email or customer ID), combining the lookup and update into one request.",
    "explanationDe": "Alternative Schlüssel ermöglichen es externen Systemen, Dataverse-Datensätze mit bekannten Geschäftskennungen (wie E-Mail oder Kunden-ID) zu aktualisieren und die Suche und Aktualisierung in einer Anfrage zu kombinieren.",
    "learnRef": { "title": "PL-400: Use alternate key to create a record", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-alternate-key-create-record" },
    "learnRefDe": { "title": "PL-400: Alternativschlüssel zum Erstellen eines Datensatzes verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/use-alternate-key-create-record" }
  },
  {
    "id": "p4-q6",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You are designing an integration with another cloud-based system using an Azure service. Users must get an immediate response after a request is processed.",
    "promptDe": "Du gestaltest eine Integration mit einem anderen cloudbasierten System unter Verwendung eines Azure-Diensts. Benutzer müssen eine sofortige Antwort erhalten, nachdem eine Anfrage verarbeitet wurde.",
    "hint": "Most Azure messaging services are asynchronous. One Azure Relay service enables synchronous request-response.",
    "hintDe": "Die meisten Azure-Messaging-Dienste sind asynchron. Ein Azure Relay-Dienst ermöglicht synchrones Request-Response.",
    "options": [
      { "id": "opt-0", "text": "Relay", "textDe": "Azure Relay", "isCorrect": true, "explanation": "Azure Service Bus Relay enables synchronous, bidirectional communication — callers receive an immediate response after processing.", "explanationDe": "Azure Service Bus Relay ermöglicht synchrone, bidirektionale Kommunikation — Aufrufer erhalten eine sofortige Antwort nach der Verarbeitung." },
      { "id": "opt-1", "text": "Event Hubs", "textDe": "Event Hubs", "isCorrect": false, "explanation": "Event Hubs is designed for high-throughput event ingestion (streaming) — it is asynchronous and not suitable for immediate responses.", "explanationDe": "Event Hubs ist für hohen Durchsatz bei Ereigniserfassung (Streaming) ausgelegt — es ist asynchron und nicht für sofortige Antworten geeignet." },
      { "id": "opt-2", "text": "Service Bus queue", "textDe": "Service Bus Queue", "isCorrect": false, "explanation": "Service Bus queues are asynchronous — senders do not wait for a processing response.", "explanationDe": "Service Bus Queues sind asynchron — Absender warten nicht auf eine Verarbeitungsantwort." },
      { "id": "opt-3", "text": "Service Bus topic", "textDe": "Service Bus Topic", "isCorrect": false, "explanation": "Service Bus topics are pub/sub and asynchronous — not suitable for synchronous request-response.", "explanationDe": "Service Bus Topics sind Pub/Sub und asynchron — nicht geeignet für synchrones Request-Response." }
    ],
    "explanation": "Azure Relay creates a synchronous channel through firewalls, enabling real-time request-response integration where callers must wait for an answer.",
    "explanationDe": "Azure Relay erstellt einen synchronen Kanal durch Firewalls und ermöglicht eine Echtzeit-Request-Response-Integration, bei der Aufrufer auf eine Antwort warten müssen.",
    "learnRef": { "title": "PL-400: What is Azure Relay?", "url": "https://learn.microsoft.com/en-us/azure/azure-relay/relay-what-is-it" },
    "learnRefDe": { "title": "PL-400: Was ist Azure Relay?", "url": "https://learn.microsoft.com/de-de/azure/azure-relay/relay-what-is-it" }
  },
  {
    "id": "p4-q7",
    "certId": "pl400",
    "topic": "Integration",
    "type": "multi-choice",
    "prompt": "A credit union integrates Power Apps with a core banking system. Transaction data changes rapidly, must stay in the USA, and integration must be real time. Which characteristics describe this integration? Select all that apply.",
    "promptDe": "Eine Kreditgenossenschaft integriert Power Apps mit einem Kernbankensystem. Transaktionsdaten ändern sich schnell, müssen in den USA bleiben, und die Integration muss in Echtzeit erfolgen. Welche Merkmale beschreiben diese Integration? Alle zutreffenden auswählen.",
    "hint": "Integration characteristics describe data change frequency, compliance requirements, and latency requirements separately.",
    "hintDe": "Integrationsmerkmale beschreiben Datenänderungshäufigkeit, Compliance-Anforderungen und Latenzanforderungen separat.",
    "options": [
      { "id": "opt-0", "text": "batch", "textDe": "Stapel (Batch)", "isCorrect": false, "explanation": "Batch means periodic bulk processing — this integration requires real time, the opposite of batch.", "explanationDe": "Stapel bedeutet periodische Massenverarbeitung — diese Integration erfordert Echtzeit, das Gegenteil von Stapel." },
      { "id": "opt-1", "text": "licensed", "textDe": "Lizenziert", "isCorrect": false, "explanation": "Licensed refers to copyrighted or commercially licensed data — not applicable here.", "explanationDe": "Lizenziert bezieht sich auf urheberrechtlich geschützte oder kommerziell lizenzierte Daten — hier nicht zutreffend." },
      { "id": "opt-2", "text": "regulated", "textDe": "Reguliert", "isCorrect": true, "explanation": "Data must stay in the USA — this is a regulatory (compliance/data residency) constraint.", "explanationDe": "Daten müssen in den USA bleiben — dies ist eine regulatorische (Compliance/Datenresidenz) Anforderung." },
      { "id": "opt-3", "text": "time sensitive", "textDe": "Zeitkritisch", "isCorrect": true, "explanation": "Real-time integration means the system has strict latency requirements — it is time sensitive.", "explanationDe": "Echtzeit-Integration bedeutet, dass das System strenge Latenzanforderungen hat — es ist zeitkritisch." },
      { "id": "opt-4", "text": "volatility", "textDe": "Volatilität", "isCorrect": true, "explanation": "Transaction data changes rapidly — high change frequency is classified as high volatility.", "explanationDe": "Transaktionsdaten ändern sich schnell — hohe Änderungshäufigkeit wird als hohe Volatilität klassifiziert." },
      { "id": "opt-5", "text": "volume", "textDe": "Volumen", "isCorrect": false, "explanation": "Volume refers to data quantity — the scenario mentions speed and compliance, not large data volumes.", "explanationDe": "Volumen bezieht sich auf die Datenmenge — das Szenario erwähnt Geschwindigkeit und Compliance, nicht große Datenmengen." }
    ],
    "explanation": "This integration is regulated (US data residency), time sensitive (real-time), and high volatility (rapidly changing data). These three characteristics drive the architectural decisions.",
    "explanationDe": "Diese Integration ist reguliert (US-Datenresidenz), zeitkritisch (Echtzeit) und hochvolatil (sich schnell ändernde Daten). Diese drei Merkmale bestimmen die Architekturentscheidungen.",
    "learnRef": { "title": "PL-400: Integration patterns for Power Platform", "url": "https://learn.microsoft.com/en-us/power-platform/guidance/architecture/real-world-examples/azure-integration" },
    "learnRefDe": { "title": "PL-400: Integrationsmuster für Power Platform", "url": "https://learn.microsoft.com/de-de/power-platform/guidance/architecture/real-world-examples/azure-integration" }
  },
  {
    "id": "p4-q8",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "A retailer integrates Power Apps with an e-commerce payment platform via the Dataverse Web API. If the customer exists (by email), update them. If not, create a new customer record. Which Web API operation type should you use?",
    "promptDe": "Ein Einzelhändler integriert Power Apps mit einer E-Commerce-Zahlungsplattform über die Dataverse Web API. Wenn der Kunde (per E-Mail) existiert, aktualisiere ihn. Wenn nicht, erstelle einen neuen Kundendatensatz. Welcher Web-API-Operationstyp sollte verwendet werden?",
    "hint": "HTTP PATCH with an alternative key can do both create and update in a single call.",
    "hintDe": "HTTP PATCH mit einem alternativen Schlüssel kann in einem einzigen Aufruf sowohl erstellen als auch aktualisieren.",
    "options": [
      { "id": "opt-0", "text": "upsert", "textDe": "Upsert", "isCorrect": true, "explanation": "Dataverse Web API upsert (HTTP PATCH with alternate key) creates the record if it doesn't exist or updates it if it does — in one request.", "explanationDe": "Dataverse Web API Upsert (HTTP PATCH mit alternativem Schlüssel) erstellt den Datensatz, wenn er nicht existiert, oder aktualisiert ihn, wenn er existiert — in einer Anfrage." },
      { "id": "opt-1", "text": "execute", "textDe": "Ausführen (Execute)", "isCorrect": false, "explanation": "Execute is used to call Dataverse actions and functions — not for create/update data operations.", "explanationDe": "Ausführen wird zum Aufrufen von Dataverse-Aktionen und -Funktionen verwendet — nicht für Erstellen/Aktualisieren von Datenoperationen." },
      { "id": "opt-2", "text": "query", "textDe": "Abfrage (Query)", "isCorrect": false, "explanation": "Query (HTTP GET) retrieves data — it cannot create or update records.", "explanationDe": "Abfrage (HTTP GET) ruft Daten ab — sie kann keine Datensätze erstellen oder aktualisieren." },
      { "id": "opt-3", "text": "update", "textDe": "Aktualisieren (Update)", "isCorrect": false, "explanation": "HTTP PATCH update requires the record to already exist (by GUID) — it fails if the record doesn't exist.", "explanationDe": "HTTP PATCH Aktualisieren erfordert, dass der Datensatz bereits (per GUID) existiert — es schlägt fehl, wenn der Datensatz nicht existiert." }
    ],
    "explanation": "Upsert (HTTP PATCH + alternate key) is the correct pattern for create-or-update scenarios in the Dataverse Web API, eliminating the need for a separate existence check.",
    "explanationDe": "Upsert (HTTP PATCH + alternativer Schlüssel) ist das richtige Muster für Erstellen-oder-Aktualisieren-Szenarien in der Dataverse Web API und eliminiert die Notwendigkeit einer separaten Existenzprüfung.",
    "learnRef": { "title": "PL-400: Upsert a table row using the Web API", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/upsert-entity-using-web-api" },
    "learnRefDe": { "title": "PL-400: Upsert einer Tabellenzeile mit der Web API", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/webapi/upsert-entity-using-web-api" }
  },
  {
    "id": "p4-q9",
    "certId": "pl400",
    "topic": "PCF",
    "type": "single-choice",
    "prompt": "You need to create a custom code component that replaces the standard subgrid in a model-driven app and provides interactive data visualization. Which framework should you use?",
    "promptDe": "Du musst eine benutzerdefinierte Code-Komponente erstellen, die das Standard-Subgitter in einer modellgesteuerten App ersetzt und eine interaktive Datenvisualisierung bietet. Welches Framework solltest du verwenden?",
    "hint": "Microsoft provides a dedicated framework for custom UI controls in Power Apps.",
    "hintDe": "Microsoft stellt ein dediziertes Framework für benutzerdefinierte UI-Steuerelemente in Power Apps bereit.",
    "options": [
      { "id": "opt-0", "text": "Power Apps component framework (PCF)", "textDe": "Power Apps Component Framework (PCF)", "isCorrect": true, "explanation": "PCF allows developers to build custom controls (field and dataset types) that integrate natively into canvas and model-driven apps, including replacing standard grids.", "explanationDe": "PCF ermöglicht Entwicklern, benutzerdefinierte Steuerelemente (Feld- und Datensatztypen) zu erstellen, die nativ in Canvas- und modellgesteuerte Apps integriert werden, einschließlich des Ersatzes von Standard-Gittern." },
      { "id": "opt-1", "text": "JavaScript web resource", "textDe": "JavaScript Web-Ressource", "isCorrect": false, "explanation": "JavaScript web resources add client-side logic but cannot replace native controls like subgrids.", "explanationDe": "JavaScript Web-Ressourcen fügen clientseitige Logik hinzu, können aber native Steuerelemente wie Subgitter nicht ersetzen." },
      { "id": "opt-2", "text": "HTML web resource", "textDe": "HTML Web-Ressource", "isCorrect": false, "explanation": "HTML web resources render in an iframe — they're isolated and cannot replace native model-driven app controls.", "explanationDe": "HTML Web-Ressourcen werden in einem iframe gerendert — sie sind isoliert und können keine nativen modellgesteuerten App-Steuerelemente ersetzen." },
      { "id": "opt-3", "text": "Canvas app embedded in model-driven app", "textDe": "In modellgesteuerte App eingebettete Canvas App", "isCorrect": false, "explanation": "Embedding a canvas app adds a custom area but does not replace the subgrid control itself.", "explanationDe": "Das Einbetten einer Canvas App fügt einen benutzerdefinierten Bereich hinzu, ersetzt aber nicht das Subgitter-Steuerelement selbst." }
    ],
    "explanation": "PCF (Power Apps Component Framework) is the right tool for building custom controls that replace or extend native UI elements in model-driven and canvas apps.",
    "explanationDe": "PCF (Power Apps Component Framework) ist das richtige Tool zum Erstellen benutzerdefinierter Steuerelemente, die native UI-Elemente in modellgesteuerten und Canvas-Apps ersetzen oder erweitern.",
    "learnRef": { "title": "PL-400: Power Apps component framework overview", "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview" },
    "learnRefDe": { "title": "PL-400: Power Apps Component Framework Übersicht", "url": "https://learn.microsoft.com/de-de/power-apps/developer/component-framework/overview" }
  },
  {
    "id": "p4-q10",
    "certId": "pl400",
    "topic": "Plug-ins",
    "type": "single-choice",
    "prompt": "A Dataverse plug-in must validate data before it is written to the database, roll back the entire operation if invalid, and run in the same transaction as the core operation. Which execution stage should you register it on?",
    "promptDe": "Ein Dataverse-Plug-in muss Daten validieren, bevor sie in die Datenbank geschrieben werden, die gesamte Operation zurückrollen, wenn sie ungültig sind, und in derselben Transaktion wie die Kernaktion ausgeführt werden. Auf welcher Ausführungsstufe solltest du es registrieren?",
    "hint": "The stage that runs after security checks but before the database write, within the same transaction.",
    "hintDe": "Die Stufe, die nach Sicherheitsprüfungen, aber vor dem Datenbankschreiben ausgeführt wird, innerhalb derselben Transaktion.",
    "options": [
      { "id": "opt-0", "text": "Pre-Operation (stage 20, synchronous)", "textDe": "Pre-Operation (Stufe 20, synchron)", "isCorrect": true, "explanation": "Pre-Operation (stage 20) runs synchronously after security checks but before the database write, within the same transaction — throwing an exception rolls back the whole operation.", "explanationDe": "Pre-Operation (Stufe 20) läuft synchron nach Sicherheitsprüfungen, aber vor dem Datenbankschreiben, innerhalb derselben Transaktion — eine Ausnahme rollt die gesamte Operation zurück." },
      { "id": "opt-1", "text": "Pre-Validation (stage 10, synchronous)", "textDe": "Pre-Validation (Stufe 10, synchron)", "isCorrect": false, "explanation": "Pre-Validation runs before security checks and outside the database transaction — it cannot guarantee rollback of the core operation.", "explanationDe": "Pre-Validation läuft vor Sicherheitsprüfungen und außerhalb der Datenbanktransaktion — sie kann den Rollback der Kernaktion nicht garantieren." },
      { "id": "opt-2", "text": "Post-Operation (stage 40, synchronous)", "textDe": "Post-Operation (Stufe 40, synchron)", "isCorrect": false, "explanation": "Post-Operation runs after the database write — the data is already persisted, so validation cannot prevent the write.", "explanationDe": "Post-Operation läuft nach dem Datenbankschreiben — die Daten sind bereits gespeichert, sodass die Validierung den Schreibvorgang nicht verhindern kann." },
      { "id": "opt-3", "text": "Post-Operation (stage 40, asynchronous)", "textDe": "Post-Operation (Stufe 40, asynchron)", "isCorrect": false, "explanation": "Async post-operation runs outside the transaction entirely — no rollback capability.", "explanationDe": "Asynchrone Post-Operation läuft vollständig außerhalb der Transaktion — keine Rollback-Fähigkeit." }
    ],
    "explanation": "Pre-Operation (stage 20) is the correct stage for validation with rollback: it runs synchronously, before the DB write, inside the transaction. Throwing an InvalidPluginExecutionException rolls everything back.",
    "explanationDe": "Pre-Operation (Stufe 20) ist die richtige Stufe für Validierung mit Rollback: sie läuft synchron, vor dem DB-Schreiben, innerhalb der Transaktion. Das Auslösen einer InvalidPluginExecutionException rollt alles zurück.",
    "learnRef": { "title": "PL-400: Event execution pipeline", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/event-framework" },
    "learnRefDe": { "title": "PL-400: Ereignis-Ausführungspipeline", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/event-framework" }
  },
  {
    "id": "p4-q11",
    "certId": "pl400",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "You want to build an approval workflow that pauses until a manager responds before continuing. Which built-in Power Automate connector provides this capability?",
    "promptDe": "Du möchtest einen Genehmigungsworkflow erstellen, der pausiert, bis ein Manager antwortet, bevor er fortgesetzt wird. Welcher eingebaute Power Automate-Connector bietet diese Funktion?",
    "hint": "Power Automate ships a dedicated connector specifically for human approval steps.",
    "hintDe": "Power Automate liefert einen dedizierten Connector speziell für menschliche Genehmigungsschritte.",
    "options": [
      { "id": "opt-0", "text": "Approvals connector", "textDe": "Genehmigungen-Connector", "isCorrect": true, "explanation": "The Approvals connector provides built-in approval management with actionable emails/Teams messages, and the flow pauses until a response is received.", "explanationDe": "Der Genehmigungen-Connector bietet eingebautes Genehmigungsmanagement mit umsetzbaren E-Mails/Teams-Nachrichten und der Flow pausiert bis eine Antwort eingeht." },
      { "id": "opt-1", "text": "HTTP request action", "textDe": "HTTP-Anfrage-Aktion", "isCorrect": false, "explanation": "HTTP request calls an external endpoint — it doesn't provide built-in approval UI or pause-until-response.", "explanationDe": "HTTP-Anfrage ruft einen externen Endpunkt auf — sie bietet keine eingebaute Genehmigungs-UI oder Pause-bis-Antwort." },
      { "id": "opt-2", "text": "Condition action", "textDe": "Bedingungsaktion", "isCorrect": false, "explanation": "Condition evaluates a boolean at runtime — it doesn't pause a flow for human input.", "explanationDe": "Bedingung wertet zur Laufzeit einen booleschen Wert aus — sie pausiert keinen Flow für menschliche Eingabe." },
      { "id": "opt-3", "text": "Send email with options", "textDe": "E-Mail mit Optionen senden", "isCorrect": false, "explanation": "Send email with options provides response buttons but lacks the full approval tracking and Teams integration of the Approvals connector.", "explanationDe": "E-Mail mit Optionen senden bietet Antwortschaltflächen, aber keine vollständige Genehmigungsverfolgung und Teams-Integration wie der Genehmigungen-Connector." }
    ],
    "explanation": "The Power Automate Approvals connector is purpose-built for human-in-the-loop workflows — it handles approval routing, tracks responses, and pauses the flow until a decision is made.",
    "explanationDe": "Der Power Automate Genehmigungen-Connector ist speziell für Human-in-the-Loop-Workflows konzipiert — er verwaltet die Genehmigungsweiterleitung, verfolgt Antworten und pausiert den Flow bis eine Entscheidung getroffen wird.",
    "learnRef": { "title": "PL-400: Get started with approvals", "url": "https://learn.microsoft.com/en-us/power-automate/get-started-approvals" },
    "learnRefDe": { "title": "PL-400: Erste Schritte mit Genehmigungen", "url": "https://learn.microsoft.com/de-de/power-automate/get-started-approvals" }
  },
  {
    "id": "p4-q12",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You are setting up Power Platform environments for a project with development, testing, and production stages. Which environment type should host live data and end users?",
    "promptDe": "Du richtest Power Platform-Umgebungen für ein Projekt mit Entwicklungs-, Test- und Produktionsstufen ein. Welcher Umgebungstyp sollte Live-Daten und Endbenutzer beherbergen?",
    "hint": "Each environment type is designed for a specific phase of the development lifecycle.",
    "hintDe": "Jeder Umgebungstyp ist für eine bestimmte Phase des Entwicklungslebenszyklus konzipiert.",
    "options": [
      { "id": "opt-0", "text": "Production environment", "textDe": "Produktionsumgebung", "isCorrect": true, "explanation": "Production environments host live data, are backed up, and are the target for fully tested, deployed solutions used by end users.", "explanationDe": "Produktionsumgebungen beherbergen Live-Daten, werden gesichert und sind das Ziel für vollständig getestete, bereitgestellte Lösungen, die von Endbenutzern genutzt werden." },
      { "id": "opt-1", "text": "Sandbox environment", "textDe": "Sandbox-Umgebung", "isCorrect": false, "explanation": "Sandbox environments are for testing and UAT — they can be reset and are not suitable for production data.", "explanationDe": "Sandbox-Umgebungen sind für Tests und UAT — sie können zurückgesetzt werden und sind nicht für Produktionsdaten geeignet." },
      { "id": "opt-2", "text": "Developer environment", "textDe": "Entwicklerumgebung", "isCorrect": false, "explanation": "Developer environments are free, personal environments for individual development — not for end users or live data.", "explanationDe": "Entwicklerumgebungen sind kostenlose, persönliche Umgebungen für die individuelle Entwicklung — nicht für Endbenutzer oder Live-Daten." },
      { "id": "opt-3", "text": "Trial environment", "textDe": "Testumgebung (Trial)", "isCorrect": false, "explanation": "Trial environments expire after 30 days and are for evaluation only.", "explanationDe": "Testumgebungen laufen nach 30 Tagen ab und sind nur für die Evaluierung gedacht." }
    ],
    "explanation": "Production environments are the only type appropriate for live business data and end users — they have backup, restore, and SLA guarantees.",
    "explanationDe": "Produktionsumgebungen sind der einzige Typ, der für Live-Geschäftsdaten und Endbenutzer geeignet ist — sie haben Backup-, Wiederherstellungs- und SLA-Garantien.",
    "learnRef": { "title": "PL-400: Types of Power Platform environments", "url": "https://learn.microsoft.com/en-us/power-platform/admin/environments-overview" },
    "learnRefDe": { "title": "PL-400: Power Platform-Umgebungstypen", "url": "https://learn.microsoft.com/de-de/power-platform/admin/environments-overview" }
  },
  {
    "id": "p4-q13",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You export a solution to deploy to a target environment. Which solution type should you use to ensure components in the target environment cannot be accidentally modified?",
    "promptDe": "Du exportierst eine Lösung zur Bereitstellung in einer Zielumgebung. Welcher Lösungstyp sollte verwendet werden, um sicherzustellen, dass Komponenten in der Zielumgebung nicht versehentlich geändert werden können?",
    "hint": "One solution type locks its components in the target environment.",
    "hintDe": "Ein Lösungstyp sperrt seine Komponenten in der Zielumgebung.",
    "options": [
      { "id": "opt-0", "text": "Managed solution", "textDe": "Verwaltete Lösung", "isCorrect": true, "explanation": "Managed solutions lock their components in target environments — makers cannot directly edit managed components. They also support clean uninstall.", "explanationDe": "Verwaltete Lösungen sperren ihre Komponenten in Zielumgebungen — Maker können verwaltete Komponenten nicht direkt bearbeiten. Sie unterstützen auch eine saubere Deinstallation." },
      { "id": "opt-1", "text": "Unmanaged solution", "textDe": "Nicht verwaltete Lösung", "isCorrect": false, "explanation": "Unmanaged solutions allow full editing in any environment — components can be modified by anyone with access.", "explanationDe": "Nicht verwaltete Lösungen ermöglichen die vollständige Bearbeitung in jeder Umgebung — Komponenten können von jedem mit Zugriff geändert werden." },
      { "id": "opt-2", "text": "Default solution", "textDe": "Standardlösung", "isCorrect": false, "explanation": "The default solution contains all unmanaged customizations in an environment — not a deployment artifact.", "explanationDe": "Die Standardlösung enthält alle nicht verwalteten Anpassungen in einer Umgebung — kein Bereitstellungsartefakt." },
      { "id": "opt-3", "text": "Patch solution", "textDe": "Patch-Lösung", "isCorrect": false, "explanation": "Patch solutions are for shipping incremental updates to a managed solution — not for initial deployment control.", "explanationDe": "Patch-Lösungen dienen zur Lieferung inkrementeller Updates an eine verwaltete Lösung — nicht zur anfänglichen Bereitstellungskontrolle." }
    ],
    "explanation": "Managed solutions protect their components from modification in target environments and support clean removal — they are the correct deployment artifact for production.",
    "explanationDe": "Verwaltete Lösungen schützen ihre Komponenten vor Änderungen in Zielumgebungen und unterstützen eine saubere Entfernung — sie sind das richtige Bereitstellungsartefakt für die Produktion.",
    "learnRef": { "title": "PL-400: Managed and unmanaged solutions", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-concepts-alm#managed-and-unmanaged-solutions" },
    "learnRefDe": { "title": "PL-400: Verwaltete und nicht verwaltete Lösungen", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-concepts-alm#managed-and-unmanaged-solutions" }
  },
  {
    "id": "p4-q14",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You create a custom connector to call a third-party REST API secured with OAuth 2.0. Where do you configure the authentication in the connector definition?",
    "promptDe": "Du erstellst einen benutzerdefinierten Connector, um eine Drittanbieter-REST-API aufzurufen, die mit OAuth 2.0 gesichert ist. Wo konfigurierst du die Authentifizierung in der Connector-Definition?",
    "hint": "The connector definition has a dedicated tab for security settings.",
    "hintDe": "Die Connector-Definition hat eine dedizierte Registerkarte für Sicherheitseinstellungen.",
    "options": [
      { "id": "opt-0", "text": "In the connector definition Security tab", "textDe": "Im Sicherheits-Tab der Connector-Definition", "isCorrect": true, "explanation": "Custom connectors have a Security tab where you configure OAuth 2.0, API key, Basic auth, or no auth. Connection credentials are stored per connection, reused across flows.", "explanationDe": "Benutzerdefinierte Connectors haben einen Sicherheits-Tab, in dem OAuth 2.0, API-Schlüssel, Basic Auth oder keine Auth konfiguriert wird. Verbindungsanmeldeinformationen werden pro Verbindung gespeichert und über Flows hinweg wiederverwendet." },
      { "id": "opt-1", "text": "In each flow action that calls the connector", "textDe": "In jeder Flow-Aktion, die den Connector aufruft", "isCorrect": false, "explanation": "Authentication is not configured per action — it's defined once in the connector and reused via a connection.", "explanationDe": "Authentifizierung wird nicht pro Aktion konfiguriert — sie wird einmal im Connector definiert und über eine Verbindung wiederverwendet." },
      { "id": "opt-2", "text": "In an environment variable", "textDe": "In einer Umgebungsvariable", "isCorrect": false, "explanation": "Environment variables can store config values but are not the mechanism for connector OAuth configuration.", "explanationDe": "Umgebungsvariablen können Konfigurationswerte speichern, sind aber nicht der Mechanismus für die Connector-OAuth-Konfiguration." },
      { "id": "opt-3", "text": "In an Azure Key Vault reference", "textDe": "In einer Azure Key Vault-Referenz", "isCorrect": false, "explanation": "Key Vault references secure secrets in environment variables — connector authentication is configured in the connector definition itself.", "explanationDe": "Key Vault-Referenzen sichern Secrets in Umgebungsvariablen — die Connector-Authentifizierung wird in der Connector-Definition selbst konfiguriert." }
    ],
    "explanation": "Custom connector authentication (OAuth 2.0, API key, Basic) is configured in the Security tab of the connector definition. Users create a connection once and reuse it.",
    "explanationDe": "Die Authentifizierung benutzerdefinierter Connectors (OAuth 2.0, API-Schlüssel, Basic) wird im Sicherheits-Tab der Connector-Definition konfiguriert. Benutzer erstellen eine Verbindung einmal und verwenden sie wieder.",
    "learnRef": { "title": "PL-400: Custom connector authentication", "url": "https://learn.microsoft.com/en-us/connectors/custom-connectors/define-authentication" },
    "learnRefDe": { "title": "PL-400: Benutzerdefinierte Connector-Authentifizierung", "url": "https://learn.microsoft.com/de-de/connectors/custom-connectors/define-authentication" }
  },
  {
    "id": "p4-q15",
    "certId": "pl400",
    "topic": "Power Pages",
    "type": "single-choice",
    "prompt": "You need to allow unauthenticated visitors to submit a contact form on a Power Pages site. Which configuration is required?",
    "promptDe": "Du möchtest nicht authentifizierten Besuchern erlauben, ein Kontaktformular auf einer Power Pages-Website zu übermitteln. Welche Konfiguration ist erforderlich?",
    "hint": "Power Pages controls data access through web roles and table permissions — even for anonymous users.",
    "hintDe": "Power Pages steuert den Datenzugriff über Web-Rollen und Tabellenberechtigungen — auch für anonyme Benutzer.",
    "options": [
      { "id": "opt-0", "text": "Assign the anonymous web role Create permission on the Contact table", "textDe": "Der anonymen Web-Rolle die Erstellungsberechtigung für die Kontakttabelle zuweisen", "isCorrect": true, "explanation": "Power Pages uses web roles and table permissions to control data access. The Anonymous Users web role must be granted Create permission on the Contact table for unauthenticated form submissions.", "explanationDe": "Power Pages verwendet Web-Rollen und Tabellenberechtigungen zur Steuerung des Datenzugriffs. Der anonymen Benutzer-Web-Rolle muss die Erstellungsberechtigung für die Kontakttabelle für nicht authentifizierte Formularübermittlungen erteilt werden." },
      { "id": "opt-1", "text": "Set the site visibility to Public in site settings", "textDe": "Die Site-Sichtbarkeit in den Site-Einstellungen auf Öffentlich setzen", "isCorrect": false, "explanation": "Site visibility controls whether the site URL is accessible — it doesn't grant data write permissions.", "explanationDe": "Die Site-Sichtbarkeit kontrolliert, ob die Site-URL zugänglich ist — sie gewährt keine Datenschreibberechtigungen." },
      { "id": "opt-2", "text": "Enable the Anonymous user security group in Azure AD", "textDe": "Die anonyme Benutzer-Sicherheitsgruppe in Azure AD aktivieren", "isCorrect": false, "explanation": "Anonymous access is configured in Power Pages via web roles — not Azure AD security groups.", "explanationDe": "Anonymer Zugriff wird in Power Pages über Web-Rollen konfiguriert — nicht über Azure AD-Sicherheitsgruppen." },
      { "id": "opt-3", "text": "Configure the portal for external access in Azure Portal", "textDe": "Das Portal im Azure-Portal für externen Zugriff konfigurieren", "isCorrect": false, "explanation": "External access networking is separate from data write permissions in Power Pages.", "explanationDe": "Externer Netzwerkzugriff ist in Power Pages von Datenschreibberechtigungen getrennt." }
    ],
    "explanation": "Power Pages table permissions tied to the Anonymous Users web role are what enable unauthenticated users to submit forms. Without this, form submissions fail even if the page is publicly accessible.",
    "explanationDe": "Power Pages-Tabellenberechtigungen, die mit der anonymen Benutzer-Web-Rolle verknüpft sind, ermöglichen es nicht authentifizierten Benutzern, Formulare zu übermitteln. Ohne dies schlagen Formularübermittlungen fehl, auch wenn die Seite öffentlich zugänglich ist.",
    "learnRef": { "title": "PL-400: Power Pages table permissions", "url": "https://learn.microsoft.com/en-us/power-pages/security/table-permissions" },
    "learnRefDe": { "title": "PL-400: Power Pages Tabellenberechtigungen", "url": "https://learn.microsoft.com/de-de/power-pages/security/table-permissions" }
  },
  {
    "id": "p4-q16",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "You need to display and interact with data from an external system directly in a model-driven app without copying the data into Dataverse. Which Dataverse feature should you use?",
    "promptDe": "Du musst Daten aus einem externen System direkt in einer modellgesteuerten App anzeigen und damit interagieren, ohne die Daten in Dataverse zu kopieren. Welche Dataverse-Funktion solltest du verwenden?",
    "hint": "This feature makes external data appear as if it were a native Dataverse table.",
    "hintDe": "Diese Funktion lässt externe Daten so erscheinen, als wären sie eine native Dataverse-Tabelle.",
    "options": [
      { "id": "opt-0", "text": "Virtual tables", "textDe": "Virtuelle Tabellen", "isCorrect": true, "explanation": "Virtual tables connect to external data sources via data providers and expose that data as Dataverse tables — without storing it locally. Users can read (and sometimes write) through the virtual table.", "explanationDe": "Virtuelle Tabellen verbinden sich über Datenanbieter mit externen Datenquellen und stellen diese Daten als Dataverse-Tabellen bereit — ohne sie lokal zu speichern." },
      { "id": "opt-1", "text": "Import via dataflows", "textDe": "Import über Dataflows", "isCorrect": false, "explanation": "Dataflows copy and transform data into Dataverse — the data is duplicated, not presented live from the source.", "explanationDe": "Dataflows kopieren und transformieren Daten in Dataverse — die Daten werden dupliziert, nicht live aus der Quelle präsentiert." },
      { "id": "opt-2", "text": "Azure Synapse Link", "textDe": "Azure Synapse Link", "isCorrect": false, "explanation": "Azure Synapse Link exports Dataverse data to Azure Data Lake — it goes the other direction.", "explanationDe": "Azure Synapse Link exportiert Dataverse-Daten in Azure Data Lake — es geht in die andere Richtung." },
      { "id": "opt-3", "text": "Dual-write", "textDe": "Duales Schreiben (Dual-write)", "isCorrect": false, "explanation": "Dual-write synchronizes data bidirectionally between Dataverse and Finance & Operations — it copies data to both sides.", "explanationDe": "Duales Schreiben synchronisiert Daten bidirektional zwischen Dataverse und Finance & Operations — es kopiert Daten auf beide Seiten." }
    ],
    "explanation": "Virtual tables are the correct choice when external data must appear in Dataverse apps without being stored there — they delegate reads (and writes) to the external system via a data provider.",
    "explanationDe": "Virtuelle Tabellen sind die richtige Wahl, wenn externe Daten in Dataverse-Apps erscheinen müssen, ohne dort gespeichert zu werden — sie delegieren Lese- (und Schreib-)operationen über einen Datenanbieter an das externe System.",
    "learnRef": { "title": "PL-400: Create and edit virtual tables", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/get-started-ve" },
    "learnRefDe": { "title": "PL-400: Virtuelle Tabellen erstellen und bearbeiten", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/virtual-entities/get-started-ve" }
  },
  {
    "id": "p4-q17",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "A Dataverse table has a 'Credit Score' column that only loan officers should be able to see. Which security mechanism isolates access to that specific column?",
    "promptDe": "Eine Dataverse-Tabelle hat eine 'Kreditwürdigkeitsscore'-Spalte, die nur Kreditsachbearbeiter sehen dürfen. Welcher Sicherheitsmechanismus isoliert den Zugriff auf diese spezifische Spalte?",
    "hint": "This security mechanism operates at the individual column level, independent of the table-level security role.",
    "hintDe": "Dieser Sicherheitsmechanismus operiert auf der Ebene einzelner Spalten, unabhängig von der Sicherheitsrolle auf Tabellenebene.",
    "options": [
      { "id": "opt-0", "text": "Field-level security", "textDe": "Feldebenensicherheit", "isCorrect": true, "explanation": "Field-level security (column security profiles) restricts read, create, and update access to individual columns, independent of the table-level security role.", "explanationDe": "Feldebenensicherheit (Spaltensicherheitsprofile) schränkt den Lese-, Erstell- und Aktualisierungszugriff auf einzelne Spalten ein, unabhängig von der Sicherheitsrolle auf Tabellenebene." },
      { "id": "opt-1", "text": "Table permissions", "textDe": "Tabellenberechtigungen", "isCorrect": false, "explanation": "Table permissions control access to entire table records — not individual columns.", "explanationDe": "Tabellenberechtigungen kontrollieren den Zugriff auf gesamte Tabellendatensätze — nicht auf einzelne Spalten." },
      { "id": "opt-2", "text": "Row-level security", "textDe": "Zeilenebensicherheit", "isCorrect": false, "explanation": "Row-level security (business unit ownership) restricts which records users can see — not which columns.", "explanationDe": "Zeilenebensicherheit (Business Unit-Eigentümerschaft) schränkt ein, welche Datensätze Benutzer sehen können — nicht welche Spalten." },
      { "id": "opt-3", "text": "Business unit hierarchy", "textDe": "Business Unit-Hierarchie", "isCorrect": false, "explanation": "Business unit hierarchy controls record ownership scope — it does not operate at the column level.", "explanationDe": "Business Unit-Hierarchie kontrolliert den Bereich der Datensatzeigentümerschaft — sie operiert nicht auf Spaltenebene." }
    ],
    "explanation": "Field-level security in Dataverse uses column security profiles to grant specific users or teams access to sensitive columns, regardless of their table-level permissions.",
    "explanationDe": "Feldebenensicherheit in Dataverse verwendet Spaltensicherheitsprofile, um bestimmten Benutzern oder Teams Zugriff auf sensible Spalten zu gewähren, unabhängig von ihren Berechtigungen auf Tabellenebene.",
    "learnRef": { "title": "PL-400: Field-level security", "url": "https://learn.microsoft.com/en-us/power-platform/admin/field-level-security" },
    "learnRefDe": { "title": "PL-400: Feldebenensicherheit", "url": "https://learn.microsoft.com/de-de/power-platform/admin/field-level-security" }
  },
  {
    "id": "p4-q18",
    "certId": "pl400",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "You want a Power Automate cloud flow to continue running even when one specific action fails, and then log the failure in a subsequent step. Which setting do you configure?",
    "promptDe": "Du möchtest, dass ein Power Automate Cloud-Flow weiter läuft, auch wenn eine bestimmte Aktion fehlschlägt, und dann den Fehler in einem nachfolgenden Schritt protokolliert. Welche Einstellung konfigurierst du?",
    "hint": "Each action in a flow has a setting that controls under which conditions subsequent actions run.",
    "hintDe": "Jede Aktion in einem Flow hat eine Einstellung, die steuert, unter welchen Bedingungen nachfolgende Aktionen ausgeführt werden.",
    "options": [
      { "id": "opt-0", "text": "Configure 'run after' to include 'has failed'", "textDe": "'Ausführen nach' so konfigurieren, dass 'ist fehlgeschlagen' enthalten ist", "isCorrect": true, "explanation": "The 'run after' setting on each action controls whether it runs when the previous action succeeded, failed, timed out, or was skipped. Including 'has failed' allows subsequent steps to execute on failure.", "explanationDe": "Die 'Ausführen nach'-Einstellung jeder Aktion steuert, ob sie ausgeführt wird, wenn die vorherige Aktion erfolgreich war, fehlgeschlagen ist, eine Zeitüberschreitung hatte oder übersprungen wurde." },
      { "id": "opt-1", "text": "Enable retry policy on the failing action", "textDe": "Wiederholungsrichtlinie für die fehlschlagende Aktion aktivieren", "isCorrect": false, "explanation": "Retry policy retries the failing action — it doesn't allow subsequent steps to handle the failure.", "explanationDe": "Wiederholungsrichtlinie wiederholt die fehlschlagende Aktion — sie ermöglicht nicht, dass nachfolgende Schritte den Fehler behandeln." },
      { "id": "opt-2", "text": "Set concurrency control to 1", "textDe": "Parallelitätskontrolle auf 1 setzen", "isCorrect": false, "explanation": "Concurrency control limits parallel loop iterations — it has no effect on error handling.", "explanationDe": "Parallelitätskontrolle begrenzt parallele Schleifeniterationen — sie hat keinen Einfluss auf die Fehlerbehandlung." },
      { "id": "opt-3", "text": "Wrap all actions in a Scope and use a 'Configure run after' on the Scope", "textDe": "Alle Aktionen in einen Bereich einbetten und 'Ausführen nach' auf den Bereich anwenden", "isCorrect": false, "explanation": "Scopes with run-after work but add unnecessary complexity for a single-action failure scenario — configuring run-after on the next action directly is simpler.", "explanationDe": "Bereiche mit 'Ausführen nach' funktionieren, fügen aber unnötige Komplexität für ein Einzelaktions-Fehlerszenario hinzu." }
    ],
    "explanation": "'Run after' configuration on flow actions is the core error-handling mechanism in Power Automate — it allows steps to execute conditionally based on the status of the previous action.",
    "explanationDe": "Die 'Ausführen nach'-Konfiguration auf Flow-Aktionen ist der Kern-Fehlerbehandlungsmechanismus in Power Automate — sie ermöglicht es Schritten, bedingt basierend auf dem Status der vorherigen Aktion ausgeführt zu werden.",
    "learnRef": { "title": "PL-400: Handle errors in Power Automate", "url": "https://learn.microsoft.com/en-us/power-automate/error-handling" },
    "learnRefDe": { "title": "PL-400: Fehlerbehandlung in Power Automate", "url": "https://learn.microsoft.com/de-de/power-automate/error-handling" }
  },
  {
    "id": "p4-q19",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You want to retrieve Dataverse account records where annual revenue exceeds 1,000,000 using the Web API. Which OData query option should you use?",
    "promptDe": "Du möchtest Dataverse-Kontodatensätze abrufen, bei denen der Jahresumsatz 1.000.000 übersteigt, über die Web API. Welche OData-Abfrageoption solltest du verwenden?",
    "hint": "OData has separate query options for selecting columns, filtering rows, sorting, and expanding relationships.",
    "hintDe": "OData hat separate Abfrageoptionen für das Auswählen von Spalten, Filtern von Zeilen, Sortieren und Erweitern von Beziehungen.",
    "options": [
      { "id": "opt-0", "text": "$filter", "textDe": "$filter", "isCorrect": true, "explanation": "$filter applies conditions to restrict which records are returned. Example: $filter=revenue gt 1000000", "explanationDe": "$filter wendet Bedingungen an, um einzuschränken, welche Datensätze zurückgegeben werden. Beispiel: $filter=revenue gt 1000000" },
      { "id": "opt-1", "text": "$select", "textDe": "$select", "isCorrect": false, "explanation": "$select limits which columns are returned — it does not filter rows.", "explanationDe": "$select begrenzt, welche Spalten zurückgegeben werden — es filtert keine Zeilen." },
      { "id": "opt-2", "text": "$expand", "textDe": "$expand", "isCorrect": false, "explanation": "$expand includes related entity data in the response — it navigates relationships, not filters.", "explanationDe": "$expand enthält verwandte Entitätsdaten in der Antwort — es navigiert Beziehungen, filtert nicht." },
      { "id": "opt-3", "text": "$orderby", "textDe": "$orderby", "isCorrect": false, "explanation": "$orderby sorts the result set — it does not filter which records are included.", "explanationDe": "$orderby sortiert das Ergebnisset — es filtert nicht, welche Datensätze enthalten sind." }
    ],
    "explanation": "The OData $filter query option is used to restrict records by conditions in Dataverse Web API queries, equivalent to a SQL WHERE clause.",
    "explanationDe": "Die OData $filter-Abfrageoption wird verwendet, um Datensätze nach Bedingungen in Dataverse Web API-Abfragen einzuschränken, äquivalent zu einer SQL WHERE-Klausel.",
    "learnRef": { "title": "PL-400: Query data using the Web API", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-data-web-api" },
    "learnRefDe": { "title": "PL-400: Daten mit der Web API abfragen", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/webapi/query-data-web-api" }
  },
  {
    "id": "p4-q20",
    "certId": "pl400",
    "topic": "Power Apps",
    "type": "single-choice",
    "prompt": "A canvas app filter formula stops returning complete results once the data set exceeds 500 records. What is the most likely cause?",
    "promptDe": "Eine Canvas App Filterformel gibt keine vollständigen Ergebnisse mehr zurück, sobald der Datensatz 500 Datensätze überschreitet. Was ist die wahrscheinlichste Ursache?",
    "hint": "Canvas apps have a concept that determines whether filtering happens on the server or in the browser.",
    "hintDe": "Canvas Apps haben ein Konzept, das bestimmt, ob die Filterung auf dem Server oder im Browser erfolgt.",
    "options": [
      { "id": "opt-0", "text": "The formula uses a non-delegable function", "textDe": "Die Formel verwendet eine nicht delegierbare Funktion", "isCorrect": true, "explanation": "Non-delegable functions (like Search(), some Left()/Right() conditions) are processed client-side. Only the first 500 records (default delegation limit) are downloaded and evaluated — the rest are ignored.", "explanationDe": "Nicht delegierbare Funktionen (wie Search(), einige Left()/Right()-Bedingungen) werden clientseitig verarbeitet. Nur die ersten 500 Datensätze (Standard-Delegationslimit) werden heruntergeladen und ausgewertet — der Rest wird ignoriert." },
      { "id": "opt-1", "text": "The SharePoint connector has a row limit", "textDe": "Der SharePoint-Connector hat ein Zeilenlimit", "isCorrect": false, "explanation": "While SharePoint has limits, the 500-record symptom with filtering specifically points to a delegation problem, not a connector row limit.", "explanationDe": "Obwohl SharePoint Limits hat, deutet das 500-Datensatz-Symptom beim Filtern spezifisch auf ein Delegationsproblem hin, kein Connector-Zeilenlimit." },
      { "id": "opt-2", "text": "The app exceeds its licensed row limit", "textDe": "Die App überschreitet ihr lizenziertes Zeilenlimit", "isCorrect": false, "explanation": "Power Apps licensing does not have a row-count limit — the 500-record cutoff is the delegation limit.", "explanationDe": "Power Apps-Lizenzierung hat kein Zeilenanzahl-Limit — die 500-Datensatz-Grenze ist das Delegationslimit." },
      { "id": "opt-3", "text": "The data source is offline", "textDe": "Die Datenquelle ist offline", "isCorrect": false, "explanation": "If the data source were offline, the app would show an error — not partial results.", "explanationDe": "Wenn die Datenquelle offline wäre, würde die App einen Fehler anzeigen — keine Teilergebnisse." }
    ],
    "explanation": "Canvas app delegation means filter/sort/search is processed by the data source (server). Non-delegable functions fall back to client-side processing with a 500-record cap, silently truncating results.",
    "explanationDe": "Canvas App-Delegation bedeutet, dass Filter/Sort/Suche von der Datenquelle (Server) verarbeitet wird. Nicht delegierbare Funktionen fallen auf clientseitige Verarbeitung mit einer 500-Datensatz-Grenze zurück und schneiden Ergebnisse still ab.",
    "learnRef": { "title": "PL-400: Understand delegation in canvas apps", "url": "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview" },
    "learnRefDe": { "title": "PL-400: Delegation in Canvas Apps verstehen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/canvas-apps/delegation-overview" }
  },
  {
    "id": "p4-q21",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "You need to guide sales users through a multi-stage sales process where the flow branches depending on deal size. Which Dataverse/Power Platform feature should you implement?",
    "promptDe": "Du musst Vertriebsbenutzer durch einen mehrstufigen Verkaufsprozess führen, bei dem der Ablauf je nach Dealgröße verzweigt. Welche Dataverse/Power Platform-Funktion solltest du implementieren?",
    "hint": "This feature provides stage-by-stage navigation directly on a record form, with support for conditional branching.",
    "hintDe": "Diese Funktion bietet eine stufenweise Navigation direkt auf einem Datensatzformular, mit Unterstützung für bedingte Verzweigungen.",
    "options": [
      { "id": "opt-0", "text": "Business process flow with branches", "textDe": "Geschäftsprozessflow mit Verzweigungen", "isCorrect": true, "explanation": "Business process flows (BPF) provide guided, stage-based navigation on records. They support branching based on field conditions, making them ideal for conditional multi-stage sales processes.", "explanationDe": "Geschäftsprozessflows (BPF) bieten eine geführte, stufenbasierte Navigation auf Datensätzen. Sie unterstützen Verzweigungen basierend auf Feldbedingungen, was sie ideal für bedingte mehrstufige Verkaufsprozesse macht." },
      { "id": "opt-1", "text": "Power Automate approval flow", "textDe": "Power Automate Genehmigungsflow", "isCorrect": false, "explanation": "Approval flows handle human approval steps — they don't guide users through data entry stages on a form.", "explanationDe": "Genehmigungsflows verwalten menschliche Genehmigungsschritte — sie führen Benutzer nicht durch Dateneingabestufen auf einem Formular." },
      { "id": "opt-2", "text": "Business rules", "textDe": "Geschäftsregeln", "isCorrect": false, "explanation": "Business rules apply field-level logic (show/hide, required, default values) — they don't provide stage navigation.", "explanationDe": "Geschäftsregeln wenden Logik auf Feldebene an (Anzeigen/Verbergen, Pflichtfelder, Standardwerte) — sie bieten keine Stufennavigation." },
      { "id": "opt-3", "text": "Model-driven app form with multiple tabs", "textDe": "Modellgesteuertes App-Formular mit mehreren Registerkarten", "isCorrect": false, "explanation": "Form tabs organize UI sections — they don't enforce stage progression or branching logic.", "explanationDe": "Formular-Registerkarten organisieren UI-Abschnitte — sie erzwingen keine Stufenprogression oder Verzweigungslogik." }
    ],
    "explanation": "Business process flows with branching provide guided, conditional sales stage navigation directly on Dataverse record forms — the correct feature for this scenario.",
    "explanationDe": "Geschäftsprozessflows mit Verzweigungen bieten eine geführte, bedingte Verkaufsstufennavigation direkt auf Dataverse-Datensatzformularen — die richtige Funktion für dieses Szenario.",
    "learnRef": { "title": "PL-400: Business process flows overview", "url": "https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview" },
    "learnRefDe": { "title": "PL-400: Übersicht über Geschäftsprozessflows", "url": "https://learn.microsoft.com/de-de/power-automate/business-process-flows-overview" }
  },
  {
    "id": "p4-q22",
    "certId": "pl400",
    "topic": "PCF",
    "type": "single-choice",
    "prompt": "You are building a PCF component that receives a collection of records and renders them as a custom data visualization (like a Kanban board). Which PCF component type should you create?",
    "promptDe": "Du erstellst eine PCF-Komponente, die eine Sammlung von Datensätzen empfängt und sie als benutzerdefinierte Datenvisualisierung (wie ein Kanban-Board) rendert. Welchen PCF-Komponententyp solltest du erstellen?",
    "hint": "PCF has two component types — one for single field values and one for collections of records.",
    "hintDe": "PCF hat zwei Komponententypen — einen für einzelne Feldwerte und einen für Sammlungen von Datensätzen.",
    "options": [
      { "id": "opt-0", "text": "Dataset component", "textDe": "Datensatz-Komponente (Dataset)", "isCorrect": true, "explanation": "Dataset PCF components receive a collection of records (dataset) as input — they replace or extend grid/view controls and are ideal for custom data visualizations like Kanban boards.", "explanationDe": "Dataset-PCF-Komponenten empfangen eine Sammlung von Datensätzen als Eingabe — sie ersetzen oder erweitern Gitter/Ansicht-Steuerelemente und sind ideal für benutzerdefinierte Datenvisualisierungen wie Kanban-Boards." },
      { "id": "opt-1", "text": "Standard (field) component", "textDe": "Standard (Feld)-Komponente", "isCorrect": false, "explanation": "Field components bind to a single column value — they cannot receive multiple records.", "explanationDe": "Feld-Komponenten binden an einen einzelnen Spaltenwert — sie können keine mehrfachen Datensätze empfangen." },
      { "id": "opt-2", "text": "Page component", "textDe": "Seiten-Komponente", "isCorrect": false, "explanation": "Page components are not a PCF type — PCF has field and dataset types.", "explanationDe": "Seiten-Komponenten sind kein PCF-Typ — PCF hat Feld- und Dataset-Typen." },
      { "id": "opt-3", "text": "Command component", "textDe": "Befehls-Komponente", "isCorrect": false, "explanation": "Command components customize the command bar — they don't render data collections.", "explanationDe": "Befehls-Komponenten passen die Befehlsleiste an — sie rendern keine Datensammlungen." }
    ],
    "explanation": "PCF dataset components are designed to consume a set of records and render them in a custom way — perfect for Kanban, timeline, chart, or any grid replacement.",
    "explanationDe": "PCF-Dataset-Komponenten sind dafür ausgelegt, eine Menge von Datensätzen zu verarbeiten und sie auf benutzerdefinierte Weise zu rendern — perfekt für Kanban, Zeitlinien, Diagramme oder jeden Gitter-Ersatz.",
    "learnRef": { "title": "PL-400: Dataset component manifest", "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/sample-controls/data-set-grid-control" },
    "learnRefDe": { "title": "PL-400: Dataset-Komponenten-Manifest", "url": "https://learn.microsoft.com/de-de/power-apps/developer/component-framework/sample-controls/data-set-grid-control" }
  },
  {
    "id": "p4-q23",
    "certId": "pl400",
    "topic": "Plug-ins",
    "type": "single-choice",
    "prompt": "In a Dataverse plug-in, which interface provides the methods to create, retrieve, update, and delete records?",
    "promptDe": "In einem Dataverse-Plug-in, welches Interface stellt die Methoden zum Erstellen, Abrufen, Aktualisieren und Löschen von Datensätzen bereit?",
    "hint": "One interface is the primary gateway to all CRUD operations in the Dataverse service.",
    "hintDe": "Ein Interface ist das primäre Gateway für alle CRUD-Operationen im Dataverse-Dienst.",
    "options": [
      { "id": "opt-0", "text": "IOrganizationService", "textDe": "IOrganizationService", "isCorrect": true, "explanation": "IOrganizationService exposes Create, Retrieve, RetrieveMultiple, Update, Delete, Execute, and Associate/Disassociate — all CRUD operations for Dataverse.", "explanationDe": "IOrganizationService stellt Create, Retrieve, RetrieveMultiple, Update, Delete, Execute und Associate/Disassociate bereit — alle CRUD-Operationen für Dataverse." },
      { "id": "opt-1", "text": "IPluginExecutionContext", "textDe": "IPluginExecutionContext", "isCorrect": false, "explanation": "IPluginExecutionContext provides metadata about the triggering event (entity, message, parameters) — not CRUD methods.", "explanationDe": "IPluginExecutionContext stellt Metadaten über das auslösende Ereignis bereit (Entität, Nachricht, Parameter) — keine CRUD-Methoden." },
      { "id": "opt-2", "text": "IServiceProvider", "textDe": "IServiceProvider", "isCorrect": false, "explanation": "IServiceProvider is the entry point passed to the Execute method — you use it to retrieve other services like IOrganizationService.", "explanationDe": "IServiceProvider ist der Einstiegspunkt, der an die Execute-Methode übergeben wird — du verwendest ihn, um andere Dienste wie IOrganizationService abzurufen." },
      { "id": "opt-3", "text": "ITracingService", "textDe": "ITracingService", "isCorrect": false, "explanation": "ITracingService writes diagnostic trace messages — it has no data access methods.", "explanationDe": "ITracingService schreibt diagnostische Trace-Nachrichten — es hat keine Datenzugriffsmethoden." }
    ],
    "explanation": "IOrganizationService is the core Dataverse SDK interface for all data operations in plug-ins. You obtain it from IServiceProvider via context.GetOrganizationService().",
    "explanationDe": "IOrganizationService ist das Kern-Dataverse-SDK-Interface für alle Datenoperationen in Plug-ins. Du erhältst es von IServiceProvider über context.GetOrganizationService().",
    "learnRef": { "title": "PL-400: Use IOrganizationService in plug-ins", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/write-plug-in" },
    "learnRefDe": { "title": "PL-400: IOrganizationService in Plug-ins verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/write-plug-in" }
  },
  {
    "id": "p4-q24",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You need to store a connection string that differs between development and production. The value must be deployable without modifying any solution component. Which Power Platform feature should you use?",
    "promptDe": "Du musst eine Verbindungszeichenfolge speichern, die sich zwischen Entwicklung und Produktion unterscheidet. Der Wert muss bereitgestellt werden können, ohne eine Lösungskomponente zu ändern. Welche Power Platform-Funktion solltest du verwenden?",
    "hint": "This feature is included in solutions and allows target-environment administrators to override values during deployment.",
    "hintDe": "Diese Funktion ist in Lösungen enthalten und ermöglicht es Administratoren der Zielumgebung, Werte während der Bereitstellung zu überschreiben.",
    "options": [
      { "id": "opt-0", "text": "Environment variable", "textDe": "Umgebungsvariable", "isCorrect": true, "explanation": "Environment variables are solution components that store configuration values. During deployment to a target environment, administrators provide environment-specific values — no code changes needed.", "explanationDe": "Umgebungsvariablen sind Lösungskomponenten, die Konfigurationswerte speichern. Während der Bereitstellung in einer Zielumgebung geben Administratoren umgebungsspezifische Werte an — keine Codeänderungen erforderlich." },
      { "id": "opt-1", "text": "App settings in the canvas app", "textDe": "App-Einstellungen in der Canvas App", "isCorrect": false, "explanation": "Canvas app settings are not environment-aware by deployment — they must be manually changed per environment.", "explanationDe": "Canvas App-Einstellungen sind bei der Bereitstellung nicht umgebungsbewusst — sie müssen manuell pro Umgebung geändert werden." },
      { "id": "opt-2", "text": "Power Automate connection reference", "textDe": "Power Automate Verbindungsreferenz", "isCorrect": false, "explanation": "Connection references store connector credentials — not arbitrary configuration strings.", "explanationDe": "Verbindungsreferenzen speichern Connector-Anmeldeinformationen — keine beliebigen Konfigurationszeichenfolgen." },
      { "id": "opt-3", "text": "Custom connector URL field", "textDe": "Benutzerdefiniertes Connector-URL-Feld", "isCorrect": false, "explanation": "Connector URL fields are connector-specific — not a general-purpose configuration mechanism.", "explanationDe": "Connector-URL-Felder sind connectorspezifisch — kein allgemeiner Konfigurationsmechanismus." }
    ],
    "explanation": "Environment variables allow configuration values (strings, numbers, secrets) to be included in solutions and overridden per environment during deployment — the correct pattern for environment-specific configuration.",
    "explanationDe": "Umgebungsvariablen ermöglichen es, Konfigurationswerte (Zeichenfolgen, Zahlen, Secrets) in Lösungen einzubinden und während der Bereitstellung pro Umgebung zu überschreiben — das richtige Muster für umgebungsspezifische Konfiguration.",
    "learnRef": { "title": "PL-400: Environment variables overview", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables" },
    "learnRefDe": { "title": "PL-400: Umgebungsvariablen Übersicht", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/environmentvariables" }
  },
  {
    "id": "p4-q25",
    "certId": "pl400",
    "topic": "AI Builder",
    "type": "single-choice",
    "prompt": "You want to automatically extract invoice number, total amount, and vendor name from scanned PDF invoices. Which AI Builder model type should you use?",
    "promptDe": "Du möchtest automatisch Rechnungsnummer, Gesamtbetrag und Lieferantenname aus gescannten PDF-Rechnungen extrahieren. Welchen AI Builder-Modelltyp solltest du verwenden?",
    "hint": "One AI Builder model specializes in extracting structured fields from semi-structured business documents.",
    "hintDe": "Ein AI Builder-Modell ist darauf spezialisiert, strukturierte Felder aus halbstrukturierten Geschäftsdokumenten zu extrahieren.",
    "options": [
      { "id": "opt-0", "text": "Document processing (form processing)", "textDe": "Dokumentenverarbeitung (Formularverarbeitung)", "isCorrect": true, "explanation": "AI Builder document processing extracts structured data (fields, tables) from semi-structured documents like invoices and forms. You train it on sample documents.", "explanationDe": "AI Builder-Dokumentenverarbeitung extrahiert strukturierte Daten (Felder, Tabellen) aus halbstrukturierten Dokumenten wie Rechnungen und Formularen. Du trainierst es mit Beispieldokumenten." },
      { "id": "opt-1", "text": "Object detection", "textDe": "Objekterkennung", "isCorrect": false, "explanation": "Object detection identifies and locates visual objects in images — not for extracting text fields from documents.", "explanationDe": "Objekterkennung identifiziert und lokalisiert visuelle Objekte in Bildern — nicht zum Extrahieren von Textfeldern aus Dokumenten." },
      { "id": "opt-2", "text": "Text recognition (OCR)", "textDe": "Texterkennung (OCR)", "isCorrect": false, "explanation": "Text recognition extracts all text from an image without understanding structure — you'd still need to parse fields manually.", "explanationDe": "Texterkennung extrahiert den gesamten Text aus einem Bild ohne strukturelles Verständnis — du müsstest Felder noch manuell parsen." },
      { "id": "opt-3", "text": "Entity extraction", "textDe": "Entitätsextraktion", "isCorrect": false, "explanation": "Entity extraction identifies named entities (people, places, dates) in free text — not optimized for structured form fields.", "explanationDe": "Entitätsextraktion identifiziert benannte Entitäten (Personen, Orte, Daten) in Freitext — nicht für strukturierte Formularfelder optimiert." }
    ],
    "explanation": "AI Builder document processing (formerly form processing) is purpose-built for extracting known fields from forms and invoices — train it on sample PDFs and deploy to flows or apps.",
    "explanationDe": "AI Builder-Dokumentenverarbeitung (früher Formularverarbeitung) ist speziell zum Extrahieren bekannter Felder aus Formularen und Rechnungen entwickelt — trainiere es mit Beispiel-PDFs und setze es in Flows oder Apps ein.",
    "learnRef": { "title": "PL-400: Document processing overview", "url": "https://learn.microsoft.com/en-us/ai-builder/form-processing-model-overview" },
    "learnRefDe": { "title": "PL-400: Dokumentenverarbeitung Übersicht", "url": "https://learn.microsoft.com/de-de/ai-builder/form-processing-model-overview" }
  },
  {
    "id": "p4-q26",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You need to connect a Power Automate flow to an on-premises SQL Server database behind a corporate firewall. Which component enables this connectivity?",
    "promptDe": "Du musst einen Power Automate Flow mit einem lokalen SQL Server hinter einer Unternehmensfirewall verbinden. Welche Komponente ermöglicht diese Verbindung?",
    "hint": "Microsoft provides an agent-based bridge that runs on-premises to connect cloud services to local resources.",
    "hintDe": "Microsoft stellt eine agentenbasierte Brücke bereit, die lokal ausgeführt wird, um Cloud-Dienste mit lokalen Ressourcen zu verbinden.",
    "options": [
      { "id": "opt-0", "text": "On-premises data gateway", "textDe": "Lokales Datengateway", "isCorrect": true, "explanation": "The on-premises data gateway acts as a bridge between Power Platform cloud services and on-premises resources (SQL Server, SharePoint on-prem, Oracle) behind firewalls — installed on a local machine.", "explanationDe": "Das lokale Datengateway fungiert als Brücke zwischen Power Platform-Cloud-Diensten und lokalen Ressourcen (SQL Server, SharePoint lokal, Oracle) hinter Firewalls — auf einem lokalen Computer installiert." },
      { "id": "opt-1", "text": "Azure VPN Gateway", "textDe": "Azure VPN Gateway", "isCorrect": false, "explanation": "Azure VPN Gateway connects Azure VNets to on-premises networks — Power Automate connectors use the on-premises data gateway, not VPN.", "explanationDe": "Azure VPN Gateway verbindet Azure VNets mit lokalen Netzwerken — Power Automate-Connectors verwenden das lokale Datengateway, kein VPN." },
      { "id": "opt-2", "text": "Custom connector", "textDe": "Benutzerdefinierter Connector", "isCorrect": false, "explanation": "Custom connectors call REST APIs — they don't provide firewall traversal for on-premises databases.", "explanationDe": "Benutzerdefinierte Connectors rufen REST-APIs auf — sie bieten keine Firewall-Traversal für lokale Datenbanken." },
      { "id": "opt-3", "text": "Virtual network data gateway", "textDe": "Virtuelles Netzwerk-Datengateway", "isCorrect": false, "explanation": "The virtual network data gateway connects to resources in Azure virtual networks — not directly to on-premises SQL Server behind a firewall.", "explanationDe": "Das virtuelle Netzwerk-Datengateway verbindet sich mit Ressourcen in Azure Virtual Networks — nicht direkt mit lokalem SQL Server hinter einer Firewall." }
    ],
    "explanation": "The on-premises data gateway is the Microsoft-supported solution for connecting Power Platform (Power BI, Power Automate, Power Apps) to on-premises data sources securely.",
    "explanationDe": "Das lokale Datengateway ist die von Microsoft unterstützte Lösung zur sicheren Verbindung von Power Platform (Power BI, Power Automate, Power Apps) mit lokalen Datenquellen.",
    "learnRef": { "title": "PL-400: On-premises data gateway overview", "url": "https://learn.microsoft.com/en-us/power-platform/admin/wp-onpremises-gateway" },
    "learnRefDe": { "title": "PL-400: Lokales Datengateway Übersicht", "url": "https://learn.microsoft.com/de-de/power-platform/admin/wp-onpremises-gateway" }
  },
  {
    "id": "p4-q27",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "A managed solution was deployed to a target environment. A maker then directly customized one of the managed forms, creating an active unmanaged layer. What happens when you later update the managed solution?",
    "promptDe": "Eine verwaltete Lösung wurde in einer Zielumgebung bereitgestellt. Ein Maker hat dann direkt eines der verwalteten Formulare angepasst und eine aktive nicht verwaltete Schicht erstellt. Was passiert, wenn du die verwaltete Lösung später aktualisierst?",
    "hint": "In Dataverse solution layers, the active (unmanaged) layer always sits on top of managed layers.",
    "hintDe": "In Dataverse-Lösungsschichten liegt die aktive (nicht verwaltete) Schicht immer über den verwalteten Schichten.",
    "options": [
      { "id": "opt-0", "text": "The active customization takes precedence over the managed update", "textDe": "Die aktive Anpassung hat Vorrang vor dem verwalteten Update", "isCorrect": true, "explanation": "The active (unmanaged) layer always takes precedence over managed layers. The managed solution updates its layer, but the active customization on top still overrides it — the maker's changes remain visible.", "explanationDe": "Die aktive (nicht verwaltete) Schicht hat immer Vorrang vor verwalteten Schichten. Die verwaltete Lösung aktualisiert ihre Schicht, aber die aktive Anpassung darüber überschreibt sie weiterhin — die Änderungen des Makers bleiben sichtbar." },
      { "id": "opt-1", "text": "The active layer is overwritten automatically by the import", "textDe": "Die aktive Schicht wird automatisch durch den Import überschrieben", "isCorrect": false, "explanation": "Managed solution imports never automatically remove active layers — the active layer persists on top.", "explanationDe": "Verwaltete Lösungsimporte entfernen niemals automatisch aktive Schichten — die aktive Schicht bleibt darüber bestehen." },
      { "id": "opt-2", "text": "The solution import fails due to the conflict", "textDe": "Der Lösungsimport schlägt aufgrund des Konflikts fehl", "isCorrect": false, "explanation": "Solution imports do not fail due to active layer conflicts — the import succeeds and the active layer continues to take precedence.", "explanationDe": "Lösungsimporte schlagen nicht aufgrund von aktiven Schichtkonflikten fehl — der Import ist erfolgreich und die aktive Schicht hat weiterhin Vorrang." },
      { "id": "opt-3", "text": "The managed and active layers merge automatically", "textDe": "Die verwalteten und aktiven Schichten werden automatisch zusammengeführt", "isCorrect": false, "explanation": "Layers are not merged — they are stacked, with the active layer always winning.", "explanationDe": "Schichten werden nicht zusammengeführt — sie werden gestapelt, wobei die aktive Schicht immer gewinnt." }
    ],
    "explanation": "Dataverse solution layers stack in precedence order: active (unmanaged) always overrides managed. This can lead to the managed update being invisible until the active layer is removed.",
    "explanationDe": "Dataverse-Lösungsschichten stapeln sich in Prioritätsreihenfolge: Aktiv (nicht verwaltet) überschreibt immer verwaltet. Dies kann dazu führen, dass das verwaltete Update unsichtbar ist, bis die aktive Schicht entfernt wird.",
    "learnRef": { "title": "PL-400: Solution layers", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-layers-alm" },
    "learnRefDe": { "title": "PL-400: Lösungsschichten", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-layers-alm" }
  },
  {
    "id": "p4-q28",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "A compliance team needs to track all changes to the 'Financial Agreement' table — who changed what field and when, including the old and new values. Which Dataverse feature should you enable?",
    "promptDe": "Ein Compliance-Team muss alle Änderungen an der 'Finanzvereinbarung'-Tabelle verfolgen — wer welches Feld wann geändert hat, einschließlich alter und neuer Werte. Welche Dataverse-Funktion solltest du aktivieren?",
    "hint": "This feature must be enabled at three levels: environment, table, and column.",
    "hintDe": "Diese Funktion muss auf drei Ebenen aktiviert werden: Umgebung, Tabelle und Spalte.",
    "options": [
      { "id": "opt-0", "text": "Auditing", "textDe": "Überwachung (Auditing)", "isCorrect": true, "explanation": "Dataverse auditing logs record changes (create, update, delete), capturing who changed which field, when, and the old/new values. Must be enabled at environment, table, and column level.", "explanationDe": "Dataverse-Überwachung protokolliert Datensatzänderungen (Erstellen, Aktualisieren, Löschen) und erfasst, wer welches Feld wann geändert hat sowie die alten/neuen Werte. Muss auf Umgebungs-, Tabellen- und Spaltenebene aktiviert werden." },
      { "id": "opt-1", "text": "Change tracking", "textDe": "Änderungsverfolgung", "isCorrect": false, "explanation": "Change tracking enables efficient data sync (detecting what changed since last sync) — it doesn't store change history with old/new values.", "explanationDe": "Änderungsverfolgung ermöglicht eine effiziente Datensynchronisierung — sie speichert keine Änderungshistorie mit alten/neuen Werten." },
      { "id": "opt-2", "text": "Field-level security", "textDe": "Feldebenensicherheit", "isCorrect": false, "explanation": "Field-level security restricts access to columns — it does not log who changed them.", "explanationDe": "Feldebenensicherheit schränkt den Zugriff auf Spalten ein — sie protokolliert nicht, wer sie geändert hat." },
      { "id": "opt-3", "text": "Activity logging", "textDe": "Aktivitätsprotokollierung", "isCorrect": false, "explanation": "Activity logging (Microsoft 365 audit log) tracks read/view events — it is complementary but doesn't capture field-level old/new values.", "explanationDe": "Aktivitätsprotokollierung (Microsoft 365-Überwachungsprotokoll) verfolgt Lese-/Anzeigeereignisse — sie ist komplementär, erfasst aber keine Feldwert-Vor/Nach-Werte." }
    ],
    "explanation": "Dataverse auditing is the feature for compliance-grade change tracking — it captures who, what, when, and old/new values at the field level.",
    "explanationDe": "Dataverse-Überwachung ist die Funktion für Compliance-grade Änderungsverfolgung — sie erfasst Wer, Was, Wann und Vor/Nach-Werte auf Feldebene.",
    "learnRef": { "title": "PL-400: Manage Dataverse auditing", "url": "https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing" },
    "learnRefDe": { "title": "PL-400: Dataverse-Überwachung verwalten", "url": "https://learn.microsoft.com/de-de/power-platform/admin/manage-dataverse-auditing" }
  },
  {
    "id": "p4-q29",
    "certId": "pl400",
    "topic": "Power Apps",
    "type": "single-choice",
    "prompt": "You build a canvas app for field technicians who work in areas without internet connectivity. Which data source supports offline capability in canvas apps?",
    "promptDe": "Du erstellst eine Canvas App für Außendiensttechniker, die in Bereichen ohne Internetverbindung arbeiten. Welche Datenquelle unterstützt Offline-Funktionalität in Canvas Apps?",
    "hint": "Not all connectors support offline mode — only one Microsoft data source provides native offline capability in canvas apps.",
    "hintDe": "Nicht alle Connectors unterstützen den Offline-Modus — nur eine Microsoft-Datenquelle bietet native Offline-Funktionalität in Canvas Apps.",
    "options": [
      { "id": "opt-0", "text": "Dataverse (with offline mode enabled)", "textDe": "Dataverse (mit aktiviertem Offline-Modus)", "isCorrect": true, "explanation": "Canvas apps using the Dataverse connector can enable offline mode — data is cached on the device and synced when connectivity is restored.", "explanationDe": "Canvas Apps, die den Dataverse-Connector verwenden, können den Offline-Modus aktivieren — Daten werden auf dem Gerät zwischengespeichert und synchronisiert, wenn die Verbindung wiederhergestellt wird." },
      { "id": "opt-1", "text": "SharePoint Online", "textDe": "SharePoint Online", "isCorrect": false, "explanation": "SharePoint Online does not support offline mode in canvas apps — it requires an active internet connection.", "explanationDe": "SharePoint Online unterstützt keinen Offline-Modus in Canvas Apps — es erfordert eine aktive Internetverbindung." },
      { "id": "opt-2", "text": "SQL Server (direct connector)", "textDe": "SQL Server (direkter Connector)", "isCorrect": false, "explanation": "The SQL Server connector requires live connectivity — it has no offline caching capability in canvas apps.", "explanationDe": "Der SQL Server-Connector erfordert eine Live-Verbindung — er hat keine Offline-Caching-Fähigkeit in Canvas Apps." },
      { "id": "opt-3", "text": "Microsoft Lists", "textDe": "Microsoft Lists", "isCorrect": false, "explanation": "Microsoft Lists (SharePoint-based) does not support offline mode in canvas apps.", "explanationDe": "Microsoft Lists (SharePoint-basiert) unterstützt keinen Offline-Modus in Canvas Apps." }
    ],
    "explanation": "Dataverse is the only connector with native offline support in canvas apps — data syncs automatically when the device reconnects. Other connectors require connectivity.",
    "explanationDe": "Dataverse ist der einzige Connector mit nativer Offline-Unterstützung in Canvas Apps — Daten synchronisieren sich automatisch, wenn das Gerät wieder verbunden ist. Andere Connectors erfordern Konnektivität.",
    "learnRef": { "title": "PL-400: Develop offline-capable canvas apps", "url": "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps" },
    "learnRefDe": { "title": "PL-400: Offline-fähige Canvas Apps entwickeln", "url": "https://learn.microsoft.com/de-de/power-apps/maker/canvas-apps/offline-apps" }
  },
  {
    "id": "p4-q30",
    "certId": "pl400",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "You need a Power Automate flow that automatically runs every weekday at 8:00 AM to generate and email a report. Which flow type should you create?",
    "promptDe": "Du benötigst einen Power Automate Flow, der jeden Werktag um 8:00 Uhr automatisch ausgeführt wird, um einen Bericht zu generieren und per E-Mail zu versenden. Welchen Flow-Typ solltest du erstellen?",
    "hint": "One flow type is triggered by a recurrence schedule rather than an event.",
    "hintDe": "Ein Flow-Typ wird durch einen Wiederholungszeitplan anstatt durch ein Ereignis ausgelöst.",
    "options": [
      { "id": "opt-0", "text": "Scheduled cloud flow", "textDe": "Geplanter Cloud-Flow", "isCorrect": true, "explanation": "Scheduled cloud flows use the Recurrence trigger to run on a defined schedule — daily, weekly, at specific times, on specific days.", "explanationDe": "Geplante Cloud-Flows verwenden den Wiederholungs-Trigger, um nach einem definierten Zeitplan auszuführen — täglich, wöchentlich, zu bestimmten Zeiten, an bestimmten Tagen." },
      { "id": "opt-1", "text": "Automated cloud flow", "textDe": "Automatisierter Cloud-Flow", "isCorrect": false, "explanation": "Automated flows trigger on events (email received, record created, etc.) — not on a time schedule.", "explanationDe": "Automatisierte Flows werden durch Ereignisse ausgelöst (E-Mail erhalten, Datensatz erstellt usw.) — nicht nach einem Zeitplan." },
      { "id": "opt-2", "text": "Instant cloud flow", "textDe": "Sofortiger Cloud-Flow", "isCorrect": false, "explanation": "Instant flows are triggered manually by a user — they don't run automatically on a schedule.", "explanationDe": "Sofortige Flows werden manuell von einem Benutzer ausgelöst — sie laufen nicht automatisch nach einem Zeitplan." },
      { "id": "opt-3", "text": "Desktop flow", "textDe": "Desktop-Flow", "isCorrect": false, "explanation": "Desktop flows automate UI interactions on a local machine — they're not used for scheduled reporting workflows.", "explanationDe": "Desktop-Flows automatisieren UI-Interaktionen auf einem lokalen Computer — sie werden nicht für geplante Berichts-Workflows verwendet." }
    ],
    "explanation": "Scheduled cloud flows are the correct type for time-based automation in Power Automate — they use the Recurrence trigger with flexible scheduling (weekdays, specific times, intervals).",
    "explanationDe": "Geplante Cloud-Flows sind der richtige Typ für zeitbasierte Automatisierung in Power Automate — sie verwenden den Wiederholungs-Trigger mit flexibler Planung (Wochentage, bestimmte Zeiten, Intervalle).",
    "learnRef": { "title": "PL-400: Create a scheduled cloud flow", "url": "https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks" },
    "learnRefDe": { "title": "PL-400: Geplanten Cloud-Flow erstellen", "url": "https://learn.microsoft.com/de-de/power-automate/run-scheduled-tasks" }
  }
];
