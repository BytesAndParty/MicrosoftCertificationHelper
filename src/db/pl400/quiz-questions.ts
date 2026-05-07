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
,
  {
    "id": "p4-q31",
    "certId": "pl400",
    "topic": "Plug-ins",
    "type": "single-choice",
    "prompt": "A Dataverse plug-in needs to read a configuration value that changes per environment (e.g., an API endpoint URL) without redeploying the assembly. Which approach should you use?",
    "promptDe": "Ein Dataverse-Plug-in muss einen Konfigurationswert lesen, der sich pro Umgebung ändert (z.B. eine API-Endpunkt-URL), ohne die Assembly neu bereitzustellen. Welchen Ansatz solltest du verwenden?",
    "hint": "Plug-ins can read values stored in Dataverse — one feature is specifically designed for environment-specific configuration.",
    "hintDe": "Plug-ins können in Dataverse gespeicherte Werte lesen — eine Funktion ist speziell für umgebungsspezifische Konfiguration konzipiert.",
    "options": [
      { "id": "opt-0", "text": "Read from an environment variable via IOrganizationService", "textDe": "Aus einer Umgebungsvariable über IOrganizationService lesen", "isCorrect": true, "explanation": "Environment variables are stored in Dataverse as environmentvariablevalue records and can be queried by plug-ins via IOrganizationService — no redeployment needed when values change.", "explanationDe": "Umgebungsvariablen werden in Dataverse als environmentvariablevalue-Datensätze gespeichert und können von Plug-ins über IOrganizationService abgefragt werden — keine erneute Bereitstellung erforderlich, wenn sich Werte ändern." },
      { "id": "opt-1", "text": "Hardcode the value in the plug-in and redeploy", "textDe": "Den Wert im Plug-in fest codieren und neu bereitstellen", "isCorrect": false, "explanation": "Hardcoding requires recompiling and redeploying the assembly for every environment change — not maintainable.", "explanationDe": "Fest codieren erfordert das Neukompilieren und erneute Bereitstellen der Assembly für jede Umgebungsänderung — nicht wartbar." },
      { "id": "opt-2", "text": "Store the value in a custom Dataverse table row", "textDe": "Den Wert in einer benutzerdefinierten Dataverse-Tabellenzeile speichern", "isCorrect": false, "explanation": "A custom config table works but is less formal than environment variables, which are built for exactly this purpose and include solution deployment support.", "explanationDe": "Eine benutzerdefinierte Konfigurationstabelle funktioniert, ist aber weniger formal als Umgebungsvariablen, die genau für diesen Zweck entwickelt wurden und die Lösungsbereitstellung unterstützen." },
      { "id": "opt-3", "text": "Use plug-in unsecure configuration in the Plugin Registration Tool", "textDe": "Unsichere Plug-in-Konfiguration im Plugin Registration Tool verwenden", "isCorrect": false, "explanation": "Unsecure configuration is set at registration time and requires re-registration to change — not suitable for per-environment values managed at deployment.", "explanationDe": "Unsichere Konfiguration wird zum Registrierungszeitpunkt festgelegt und erfordert eine Neuregistrierung zum Ändern — nicht geeignet für pro-Umgebungs-Werte, die bei der Bereitstellung verwaltet werden." }
    ],
    "explanation": "Environment variables in Dataverse are the correct pattern for environment-specific configuration in plug-ins — queryable via IOrganizationService without redeployment.",
    "explanationDe": "Umgebungsvariablen in Dataverse sind das richtige Muster für umgebungsspezifische Konfiguration in Plug-ins — über IOrganizationService ohne erneute Bereitstellung abfragbar.",
    "learnRef": { "title": "PL-400: Use environment variables in plug-ins", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables" },
    "learnRefDe": { "title": "PL-400: Umgebungsvariablen in Plug-ins verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/environmentvariables" }
  },
  {
    "id": "p4-q32",
    "certId": "pl400",
    "topic": "Plug-ins",
    "type": "single-choice",
    "prompt": "You register a Dataverse plug-in on the Create message of the Account table. During testing, the plug-in throws an unhandled exception. What happens to the Create operation?",
    "promptDe": "Du registrierst ein Dataverse-Plug-in auf der Create-Nachricht der Konto-Tabelle. Während des Testens löst das Plug-in eine unbehandelte Ausnahme aus. Was passiert mit der Create-Operation?",
    "hint": "For synchronous plug-ins, any unhandled exception has a specific effect on the triggering operation.",
    "hintDe": "Bei synchronen Plug-ins hat jede unbehandelte Ausnahme einen spezifischen Effekt auf die auslösende Operation.",
    "options": [
      { "id": "opt-0", "text": "The Create operation is rolled back and an error is returned to the caller", "textDe": "Die Create-Operation wird zurückgerollt und ein Fehler wird an den Aufrufer zurückgegeben", "isCorrect": true, "explanation": "Synchronous plug-ins run in the same transaction as the core operation. Any unhandled exception causes a rollback of the entire transaction and returns the error to the user.", "explanationDe": "Synchrone Plug-ins laufen in derselben Transaktion wie die Kernaktion. Jede unbehandelte Ausnahme verursacht einen Rollback der gesamten Transaktion und gibt den Fehler an den Benutzer zurück." },
      { "id": "opt-1", "text": "The Create operation succeeds and the error is logged silently", "textDe": "Die Create-Operation ist erfolgreich und der Fehler wird still protokolliert", "isCorrect": false, "explanation": "Synchronous plug-in exceptions are never silently ignored — they always roll back the operation.", "explanationDe": "Synchrone Plug-in-Ausnahmen werden nie still ignoriert — sie rollen immer die Operation zurück." },
      { "id": "opt-2", "text": "The plug-in is disabled automatically after the exception", "textDe": "Das Plug-in wird nach der Ausnahme automatisch deaktiviert", "isCorrect": false, "explanation": "Dataverse does not auto-disable plug-ins on exceptions — it rolls back the operation.", "explanationDe": "Dataverse deaktiviert Plug-ins bei Ausnahmen nicht automatisch — es rollt die Operation zurück." },
      { "id": "opt-3", "text": "The Create operation succeeds; the plug-in retries up to 3 times", "textDe": "Die Create-Operation ist erfolgreich; das Plug-in versucht es bis zu 3 Mal erneut", "isCorrect": false, "explanation": "Retry behavior applies to async plug-ins only. Synchronous plug-in exceptions immediately roll back the operation.", "explanationDe": "Wiederholungsverhalten gilt nur für asynchrone Plug-ins. Synchrone Plug-in-Ausnahmen rollen die Operation sofort zurück." }
    ],
    "explanation": "Synchronous plug-in exceptions roll back the triggering operation and return an error to the caller — the entire transaction is atomic.",
    "explanationDe": "Synchrone Plug-in-Ausnahmen rollen die auslösende Operation zurück und geben einen Fehler an den Aufrufer zurück — die gesamte Transaktion ist atomar.",
    "learnRef": { "title": "PL-400: Plug-in exceptions and error handling", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/handle-exceptions-plugins" },
    "learnRefDe": { "title": "PL-400: Plug-in-Ausnahmen und Fehlerbehandlung", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/handle-exceptions-plugins" }
  },
  {
    "id": "p4-q33",
    "certId": "pl400",
    "topic": "Plug-ins",
    "type": "single-choice",
    "prompt": "You need a plug-in to run after a record is created but it should NOT block the user — even if it fails. Which execution mode should you use?",
    "promptDe": "Du benötigst ein Plug-in, das nach der Erstellung eines Datensatzes ausgeführt wird, aber den Benutzer NICHT blockieren soll — auch wenn es fehlschlägt. Welchen Ausführungsmodus solltest du verwenden?",
    "hint": "One mode runs outside the main transaction and doesn't affect the user experience on failure.",
    "hintDe": "Ein Modus läuft außerhalb der Haupttransaktion und beeinträchtigt die Benutzererfahrung bei einem Fehler nicht.",
    "options": [
      { "id": "opt-0", "text": "Asynchronous Post-Operation", "textDe": "Asynchrones Post-Operation", "isCorrect": true, "explanation": "Async Post-Operation plug-ins are queued and executed by the async service after the main transaction completes — failures don't affect the user's operation.", "explanationDe": "Asynchrone Post-Operation-Plug-ins werden in die Warteschlange gestellt und vom asynchronen Dienst ausgeführt, nachdem die Haupttransaktion abgeschlossen ist — Fehler beeinträchtigen die Benutzeroperation nicht." },
      { "id": "opt-1", "text": "Synchronous Post-Operation", "textDe": "Synchrones Post-Operation", "isCorrect": false, "explanation": "Sync Post-Operation runs in the same transaction — a failure rolls back the record creation and blocks the user.", "explanationDe": "Synchrones Post-Operation läuft in derselben Transaktion — ein Fehler rollt die Datensatzerstellung zurück und blockiert den Benutzer." },
      { "id": "opt-2", "text": "Synchronous Pre-Operation", "textDe": "Synchrones Pre-Operation", "isCorrect": false, "explanation": "Sync Pre-Operation runs before the DB write in the same transaction — a failure blocks and rolls back.", "explanationDe": "Synchrones Pre-Operation läuft vor dem DB-Schreiben in derselben Transaktion — ein Fehler blockiert und rollt zurück." },
      { "id": "opt-3", "text": "Synchronous Pre-Validation", "textDe": "Synchrones Pre-Validation", "isCorrect": false, "explanation": "Pre-Validation runs before security checks — it blocks the operation on failure.", "explanationDe": "Pre-Validation läuft vor Sicherheitsprüfungen — es blockiert die Operation bei einem Fehler." }
    ],
    "explanation": "Asynchronous Post-Operation is the mode for fire-and-forget background processing — it doesn't block users and failures are queued for retry without rolling back the original operation.",
    "explanationDe": "Asynchrones Post-Operation ist der Modus für Fire-and-Forget-Hintergrundverarbeitung — es blockiert keine Benutzer und Fehler werden zur Wiederholung in die Warteschlange gestellt, ohne die ursprüngliche Operation zurückzurollen.",
    "learnRef": { "title": "PL-400: Asynchronous plug-ins", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/asynchronous-service" },
    "learnRefDe": { "title": "PL-400: Asynchrone Plug-ins", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/asynchronous-service" }
  },
  {
    "id": "p4-q34",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You need to call the Dataverse Web API from an external application without using a user's credentials. The app must authenticate as itself (not on behalf of a user). Which authentication method should you use?",
    "promptDe": "Du musst die Dataverse Web API von einer externen Anwendung aus aufrufen, ohne die Anmeldeinformationen eines Benutzers zu verwenden. Die App muss sich selbst authentifizieren (nicht im Namen eines Benutzers). Welche Authentifizierungsmethode solltest du verwenden?",
    "hint": "OAuth 2.0 has a specific flow for server-to-server authentication without user interaction.",
    "hintDe": "OAuth 2.0 hat einen spezifischen Flow für Server-zu-Server-Authentifizierung ohne Benutzerinteraktion.",
    "options": [
      { "id": "opt-0", "text": "OAuth 2.0 Client Credentials flow with an Azure AD app registration", "textDe": "OAuth 2.0 Client Credentials Flow mit einer Azure AD App-Registrierung", "isCorrect": true, "explanation": "The Client Credentials flow authenticates as the application itself using client ID + secret (or certificate) — no user interaction or delegated permissions needed.", "explanationDe": "Der Client Credentials Flow authentifiziert sich als die Anwendung selbst mit Client-ID + Secret (oder Zertifikat) — keine Benutzerinteraktion oder delegierte Berechtigungen erforderlich." },
      { "id": "opt-1", "text": "Basic authentication with a service account username/password", "textDe": "Basic-Authentifizierung mit einem Service-Account-Benutzernamen/Passwort", "isCorrect": false, "explanation": "Basic auth is not supported for Dataverse Web API — modern authentication (OAuth 2.0) is required.", "explanationDe": "Basic-Auth wird für die Dataverse Web API nicht unterstützt — moderne Authentifizierung (OAuth 2.0) ist erforderlich." },
      { "id": "opt-2", "text": "API key authentication in the request header", "textDe": "API-Schlüssel-Authentifizierung im Anfrage-Header", "isCorrect": false, "explanation": "Dataverse Web API does not support API key authentication — it requires OAuth 2.0 bearer tokens.", "explanationDe": "Dataverse Web API unterstützt keine API-Schlüssel-Authentifizierung — es erfordert OAuth 2.0 Bearer Tokens." },
      { "id": "opt-3", "text": "OAuth 2.0 Authorization Code flow with user login", "textDe": "OAuth 2.0 Authorization Code Flow mit Benutzeranmeldung", "isCorrect": false, "explanation": "Authorization Code flow requires a user to interactively sign in — not suitable for server-to-server / daemon applications.", "explanationDe": "Authorization Code Flow erfordert, dass sich ein Benutzer interaktiv anmeldet — nicht geeignet für Server-zu-Server-/Daemon-Anwendungen." }
    ],
    "explanation": "OAuth 2.0 Client Credentials flow with an Azure AD app registration is the correct pattern for server-to-server Dataverse API calls — the app authenticates as itself without user involvement.",
    "explanationDe": "OAuth 2.0 Client Credentials Flow mit einer Azure AD App-Registrierung ist das richtige Muster für Server-zu-Server-Dataverse-API-Aufrufe — die App authentifiziert sich ohne Benutzerbeteiligung als sich selbst.",
    "learnRef": { "title": "PL-400: Authenticate to Dataverse with OAuth", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/authenticate-oauth" },
    "learnRefDe": { "title": "PL-400: Mit OAuth bei Dataverse authentifizieren", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/authenticate-oauth" }
  },
  {
    "id": "p4-q35",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You need to call a Dataverse action from the Web API that performs a complex multi-step business process. Which HTTP method and endpoint pattern should you use?",
    "promptDe": "Du musst eine Dataverse-Aktion über die Web API aufrufen, die einen komplexen mehrstufigen Geschäftsprozess ausführt. Welches HTTP-Methode und Endpunktmuster solltest du verwenden?",
    "hint": "Dataverse actions are invoked differently from CRUD operations in the Web API.",
    "hintDe": "Dataverse-Aktionen werden in der Web API anders aufgerufen als CRUD-Operationen.",
    "options": [
      { "id": "opt-0", "text": "HTTP POST to /api/data/v9.2/actionname", "textDe": "HTTP POST an /api/data/v9.2/aktionsname", "isCorrect": true, "explanation": "Dataverse custom actions and bound/unbound functions are invoked via HTTP POST to the action endpoint. The request body contains the input parameters.", "explanationDe": "Benutzerdefinierte Dataverse-Aktionen und gebundene/ungebundene Funktionen werden über HTTP POST an den Aktionsendpunkt aufgerufen. Der Anfrage-Body enthält die Eingabeparameter." },
      { "id": "opt-1", "text": "HTTP GET to /api/data/v9.2/actionname", "textDe": "HTTP GET an /api/data/v9.2/aktionsname", "isCorrect": false, "explanation": "HTTP GET is used for retrieving data (functions) — actions that modify state use POST.", "explanationDe": "HTTP GET wird zum Abrufen von Daten (Funktionen) verwendet — Aktionen, die den Zustand ändern, verwenden POST." },
      { "id": "opt-2", "text": "HTTP PATCH to /api/data/v9.2/actionname", "textDe": "HTTP PATCH an /api/data/v9.2/aktionsname", "isCorrect": false, "explanation": "HTTP PATCH is for updating entity records — not for invoking actions.", "explanationDe": "HTTP PATCH ist zum Aktualisieren von Entitätsdatensätzen — nicht zum Aufrufen von Aktionen." },
      { "id": "opt-3", "text": "HTTP PUT to /api/data/v9.2/actionname", "textDe": "HTTP PUT an /api/data/v9.2/aktionsname", "isCorrect": false, "explanation": "HTTP PUT replaces an entire record — not used for invoking actions.", "explanationDe": "HTTP PUT ersetzt einen gesamten Datensatz — wird nicht zum Aufrufen von Aktionen verwendet." }
    ],
    "explanation": "Dataverse Web API actions are invoked with HTTP POST — they can have input/output parameters and are used for operations that go beyond simple CRUD.",
    "explanationDe": "Dataverse Web API-Aktionen werden mit HTTP POST aufgerufen — sie können Ein-/Ausgabeparameter haben und werden für Operationen verwendet, die über einfaches CRUD hinausgehen.",
    "learnRef": { "title": "PL-400: Use Web API actions", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/use-web-api-actions" },
    "learnRefDe": { "title": "PL-400: Web API-Aktionen verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/webapi/use-web-api-actions" }
  },
  {
    "id": "p4-q36",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You want to check a Power Platform solution for coding violations, deprecated components, and unsupported customizations before deploying. Which tool should you use?",
    "promptDe": "Du möchtest eine Power Platform-Lösung auf Codeverletzungen, veraltete Komponenten und nicht unterstützte Anpassungen prüfen, bevor du sie bereitstellst. Welches Tool solltest du verwenden?",
    "hint": "Microsoft provides a static analysis tool specifically for Power Platform solutions.",
    "hintDe": "Microsoft stellt ein statisches Analysetool speziell für Power Platform-Lösungen bereit.",
    "options": [
      { "id": "opt-0", "text": "Power Apps Solution Checker (Power Platform Checker)", "textDe": "Power Apps Solution Checker (Power Platform Checker)", "isCorrect": true, "explanation": "Solution Checker performs static analysis of solution components against a rule set covering performance, reliability, and supportability — integrated into the maker portal and pipelines.", "explanationDe": "Solution Checker führt eine statische Analyse von Lösungskomponenten anhand eines Regelwerks durch, das Leistung, Zuverlässigkeit und Unterstützbarkeit abdeckt — in das Maker-Portal und Pipelines integriert." },
      { "id": "opt-1", "text": "Visual Studio Code with Power Platform extension", "textDe": "Visual Studio Code mit Power Platform-Erweiterung", "isCorrect": false, "explanation": "VS Code with Power Platform tools helps with development but doesn't perform solution-level static analysis against Microsoft's rule set.", "explanationDe": "VS Code mit Power Platform-Tools hilft bei der Entwicklung, führt aber keine Lösungsebenen-Statikanalyse anhand des Microsoft-Regelwerks durch." },
      { "id": "opt-2", "text": "Azure DevOps code review", "textDe": "Azure DevOps Code-Review", "isCorrect": false, "explanation": "Code review is a manual process — it doesn't automatically check for Power Platform-specific violations.", "explanationDe": "Code-Review ist ein manueller Prozess — er prüft nicht automatisch auf Power Platform-spezifische Verletzungen." },
      { "id": "opt-3", "text": "Power Automate flow checker", "textDe": "Power Automate Flow-Prüfer", "isCorrect": false, "explanation": "The flow checker validates individual flow configurations — not solution-wide static analysis.", "explanationDe": "Der Flow-Prüfer validiert individuelle Flow-Konfigurationen — keine lösungsweite statische Analyse." }
    ],
    "explanation": "Power Apps Solution Checker is the tool for automated static analysis of solutions — run it before deployment to catch violations early, and integrate it into CI/CD pipelines.",
    "explanationDe": "Power Apps Solution Checker ist das Tool für automatisierte statische Analyse von Lösungen — vor der Bereitstellung ausführen, um Verletzungen frühzeitig zu erkennen, und in CI/CD-Pipelines integrieren.",
    "learnRef": { "title": "PL-400: Use Solution Checker", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/use-powerapps-checker" },
    "learnRefDe": { "title": "PL-400: Solution Checker verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/use-powerapps-checker" }
  },
  {
    "id": "p4-q37",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You are using Azure DevOps to build a CI/CD pipeline for a Power Platform solution. Which Power Platform CLI command exports the solution as source-control-friendly files?",
    "promptDe": "Du verwendest Azure DevOps, um eine CI/CD-Pipeline für eine Power Platform-Lösung zu erstellen. Welcher Power Platform CLI-Befehl exportiert die Lösung als quellcodeverwaltungsfreundliche Dateien?",
    "hint": "Two CLI commands are needed: one to export, one to unpack into individual files.",
    "hintDe": "Zwei CLI-Befehle sind erforderlich: einer zum Exportieren, einer zum Entpacken in einzelne Dateien.",
    "options": [
      { "id": "opt-0", "text": "pac solution export, then pac solution unpack", "textDe": "pac solution export, dann pac solution unpack", "isCorrect": true, "explanation": "pac solution export downloads the .zip, pac solution unpack extracts it into individual XML/JSON files per component — producing diff-friendly files for Git.", "explanationDe": "pac solution export lädt die .zip herunter, pac solution unpack extrahiert sie in einzelne XML/JSON-Dateien pro Komponente — erzeugt diff-freundliche Dateien für Git." },
      { "id": "opt-1", "text": "pac solution clone", "textDe": "pac solution clone", "isCorrect": false, "explanation": "pac solution clone combines export + unpack in one step but is less commonly used in pipeline scripts than the two-step approach.", "explanationDe": "pac solution clone kombiniert Export + Entpacken in einem Schritt, wird aber in Pipeline-Skripten weniger häufig verwendet als der zweistufige Ansatz." },
      { "id": "opt-2", "text": "pac solution publish", "textDe": "pac solution publish", "isCorrect": false, "explanation": "pac solution publish publishes customizations in an environment — it doesn't export or unpack solutions.", "explanationDe": "pac solution publish veröffentlicht Anpassungen in einer Umgebung — es exportiert oder entpackt keine Lösungen." },
      { "id": "opt-3", "text": "pac solution import", "textDe": "pac solution import", "isCorrect": false, "explanation": "pac solution import deploys a solution to an environment — the opposite direction of what's needed here.", "explanationDe": "pac solution import stellt eine Lösung in einer Umgebung bereit — die entgegengesetzte Richtung von dem, was hier benötigt wird." }
    ],
    "explanation": "The standard CI pattern: pac solution export (downloads zip) → pac solution unpack (extracts to files) → git commit. Reverse on deploy: pac solution pack → pac solution import.",
    "explanationDe": "Das Standard-CI-Muster: pac solution export (lädt zip herunter) → pac solution unpack (extrahiert in Dateien) → git commit. Umgekehrt bei Bereitstellung: pac solution pack → pac solution import.",
    "learnRef": { "title": "PL-400: Power Platform CLI solution commands", "url": "https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/solution" },
    "learnRefDe": { "title": "PL-400: Power Platform CLI Lösungsbefehle", "url": "https://learn.microsoft.com/de-de/power-platform/developer/cli/reference/solution" }
  },
  {
    "id": "p4-q38",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "You need to retrieve Dataverse records using a complex query with multiple joined tables, filtered by related record values. Which query technology is most appropriate in a server-side plug-in?",
    "promptDe": "Du musst Dataverse-Datensätze mit einer komplexen Abfrage mit mehreren verknüpften Tabellen abrufen, gefiltert nach verwandten Datensatzwerten. Welche Abfragetechnologie ist in einem serverseitigen Plug-in am geeignetsten?",
    "hint": "One Dataverse query API is XML-based and designed for complex joins and filtering in server-side code.",
    "hintDe": "Eine Dataverse-Abfrage-API ist XML-basiert und für komplexe Joins und Filterung in serverseitigem Code konzipiert.",
    "options": [
      { "id": "opt-0", "text": "FetchXML with IOrganizationService.RetrieveMultiple", "textDe": "FetchXML mit IOrganizationService.RetrieveMultiple", "isCorrect": true, "explanation": "FetchXML is Dataverse's native XML-based query language — it supports joins (link-entity), conditions, ordering, and aggregates. Used via IOrganizationService.RetrieveMultiple in plug-ins.", "explanationDe": "FetchXML ist Dataverses native XML-basierte Abfragesprache — sie unterstützt Joins (link-entity), Bedingungen, Sortierung und Aggregate. Wird über IOrganizationService.RetrieveMultiple in Plug-ins verwendet." },
      { "id": "opt-1", "text": "LINQ with early-bound entities", "textDe": "LINQ mit früh gebundenen Entitäten", "isCorrect": false, "explanation": "LINQ queries via OrganizationServiceContext work for simple queries but have limited join support and are converted to FetchXML internally — FetchXML is more powerful for complex scenarios.", "explanationDe": "LINQ-Abfragen über OrganizationServiceContext funktionieren für einfache Abfragen, haben aber begrenzte Join-Unterstützung und werden intern in FetchXML konvertiert — FetchXML ist für komplexe Szenarien leistungsfähiger." },
      { "id": "opt-2", "text": "OData $filter via HTTP GET in the plug-in", "textDe": "OData $filter über HTTP GET im Plug-in", "isCorrect": false, "explanation": "Making HTTP Web API calls from within a plug-in is an anti-pattern — use IOrganizationService directly.", "explanationDe": "HTTP Web API-Aufrufe innerhalb eines Plug-ins zu machen ist ein Anti-Pattern — stattdessen direkt IOrganizationService verwenden." },
      { "id": "opt-3", "text": "SQL query via database connection string", "textDe": "SQL-Abfrage über Datenbankverbindungszeichenfolge", "isCorrect": false, "explanation": "Direct SQL access to the Dataverse database is not supported or permitted — all access must go through the SDK or Web API.", "explanationDe": "Direkter SQL-Zugriff auf die Dataverse-Datenbank wird nicht unterstützt oder erlaubt — der gesamte Zugriff muss über das SDK oder die Web API erfolgen." }
    ],
    "explanation": "FetchXML via IOrganizationService.RetrieveMultiple is the correct approach for complex multi-table queries in Dataverse plug-ins — it's native, powerful, and doesn't require HTTP calls.",
    "explanationDe": "FetchXML über IOrganizationService.RetrieveMultiple ist der richtige Ansatz für komplexe Mehrtabellen-Abfragen in Dataverse-Plug-ins — er ist nativ, leistungsfähig und erfordert keine HTTP-Aufrufe.",
    "learnRef": { "title": "PL-400: Build queries with FetchXML", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-fetchxml-construct-query" },
    "learnRefDe": { "title": "PL-400: Abfragen mit FetchXML erstellen", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/use-fetchxml-construct-query" }
  },
  {
    "id": "p4-q39",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "A Dataverse table needs a column that is always calculated as the sum of all related order line amounts. The calculation must update automatically when line items change. Which column type should you use?",
    "promptDe": "Eine Dataverse-Tabelle benötigt eine Spalte, die immer als Summe aller verwandten Bestellpositionsbeträge berechnet wird. Die Berechnung muss automatisch aktualisiert werden, wenn Positionen sich ändern. Welchen Spaltentyp solltest du verwenden?",
    "hint": "One column type aggregates values from related child records on a schedule.",
    "hintDe": "Ein Spaltentyp aggregiert Werte aus verwandten untergeordneten Datensätzen nach einem Zeitplan.",
    "options": [
      { "id": "opt-0", "text": "Rollup column", "textDe": "Rollup-Spalte", "isCorrect": true, "explanation": "Rollup columns aggregate data (SUM, COUNT, MIN, MAX, AVG) from related child records. They recalculate on a schedule and on demand — perfect for order total calculations.", "explanationDe": "Rollup-Spalten aggregieren Daten (SUM, COUNT, MIN, MAX, AVG) aus verwandten untergeordneten Datensätzen. Sie berechnen sich nach einem Zeitplan und auf Abruf neu — perfekt für Bestellgesamtberechnungen." },
      { "id": "opt-1", "text": "Formula column", "textDe": "Formel-Spalte", "isCorrect": false, "explanation": "Formula columns compute values from fields on the same record row — they cannot aggregate child records.", "explanationDe": "Formel-Spalten berechnen Werte aus Feldern derselben Datensatzzeile — sie können keine untergeordneten Datensätze aggregieren." },
      { "id": "opt-2", "text": "Calculated column", "textDe": "Berechnete Spalte", "isCorrect": false, "explanation": "Calculated columns (legacy) can use related record values but in limited ways and don't support aggregate functions from child records the way Rollup does.", "explanationDe": "Berechnete Spalten (Legacy) können verwandte Datensatzwerte verwenden, aber auf begrenzte Weise und unterstützen keine Aggregatfunktionen aus untergeordneten Datensätzen wie Rollup." },
      { "id": "opt-3", "text": "Custom plug-in that calculates on every child record change", "textDe": "Benutzerdefiniertes Plug-in, das bei jeder Änderung eines untergeordneten Datensatzes berechnet", "isCorrect": false, "explanation": "A plug-in would work but is over-engineering — Rollup columns handle this natively without custom code.", "explanationDe": "Ein Plug-in würde funktionieren, ist aber überentwickelt — Rollup-Spalten verarbeiten dies nativ ohne benutzerdefinierten Code." }
    ],
    "explanation": "Rollup columns are purpose-built for aggregating child record values (SUM, COUNT, etc.) — they're the no-code solution for calculated totals from related records.",
    "explanationDe": "Rollup-Spalten sind speziell für die Aggregation von untergeordneten Datensatzwerten (SUM, COUNT usw.) entwickelt — sie sind die No-Code-Lösung für berechnete Summen aus verwandten Datensätzen.",
    "learnRef": { "title": "PL-400: Define rollup columns", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/define-rollup-fields" },
    "learnRefDe": { "title": "PL-400: Rollup-Spalten definieren", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/define-rollup-fields" }
  },
  {
    "id": "p4-q40",
    "certId": "pl400",
    "topic": "Power Apps",
    "type": "single-choice",
    "prompt": "You need to add client-side validation to a model-driven app form that shows an error message when a field value is empty on form save, without writing JavaScript. Which feature should you use?",
    "promptDe": "Du musst einer modellgesteuerten App-Formular eine clientseitige Validierung hinzufügen, die eine Fehlermeldung anzeigt, wenn ein Feldwert beim Speichern des Formulars leer ist, ohne JavaScript zu schreiben. Welche Funktion solltest du verwenden?",
    "hint": "This feature allows declarative field-level logic on model-driven app forms.",
    "hintDe": "Diese Funktion ermöglicht deklarative Logik auf Feldebene in modellgesteuerten App-Formularen.",
    "options": [
      { "id": "opt-0", "text": "Business rule", "textDe": "Geschäftsregel", "isCorrect": true, "explanation": "Business rules allow declarative form logic (show/hide, required, set value, show error) without JavaScript. Setting a field as required with a custom error message is a classic business rule use case.", "explanationDe": "Geschäftsregeln ermöglichen deklarative Formularlogik (Anzeigen/Verbergen, Pflichtfeld, Wert setzen, Fehler anzeigen) ohne JavaScript. Ein Pflichtfeld mit einer benutzerdefinierten Fehlermeldung zu setzen ist ein klassischer Geschäftsregelanwendungsfall." },
      { "id": "opt-1", "text": "JavaScript OnSave event handler", "textDe": "JavaScript OnSave-Ereignishandler", "isCorrect": false, "explanation": "A JavaScript OnSave handler can do this but requires code — the question asks for a no-code approach.", "explanationDe": "Ein JavaScript OnSave-Handler kann dies tun, erfordert aber Code — die Frage fragt nach einem No-Code-Ansatz." },
      { "id": "opt-2", "text": "Power Automate cloud flow triggered on record save", "textDe": "Power Automate Cloud-Flow ausgelöst beim Datensatz-Speichern", "isCorrect": false, "explanation": "A cloud flow runs asynchronously after save — it can't block the save or show a real-time form error.", "explanationDe": "Ein Cloud-Flow läuft asynchron nach dem Speichern — er kann das Speichern nicht blockieren oder einen Echtzeit-Formularfehler anzeigen." },
      { "id": "opt-3", "text": "Plug-in on Pre-Validation that returns an error", "textDe": "Plug-in auf Pre-Validation, das einen Fehler zurückgibt", "isCorrect": false, "explanation": "A plug-in can enforce validation server-side but requires code and doesn't provide a friendly inline form error — business rules are the no-code solution.", "explanationDe": "Ein Plug-in kann die Validierung serverseitig erzwingen, erfordert aber Code und bietet keinen freundlichen Inline-Formularfehler — Geschäftsregeln sind die No-Code-Lösung." }
    ],
    "explanation": "Business rules are the declarative, no-code way to add field validation, required constraints, and error messages to model-driven app forms.",
    "explanationDe": "Geschäftsregeln sind der deklarative, codelose Weg, um Feldvalidierung, Pflichtfeld-Einschränkungen und Fehlermeldungen zu modellgesteuerten App-Formularen hinzuzufügen.",
    "learnRef": { "title": "PL-400: Create business rules", "url": "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-create-business-rule" },
    "learnRefDe": { "title": "PL-400: Geschäftsregeln erstellen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/data-platform/data-platform-create-business-rule" }
  },
  {
    "id": "p4-q41",
    "certId": "pl400",
    "topic": "Power Apps",
    "type": "single-choice",
    "prompt": "You need to customize the model-driven app command bar to add a button that calls a JavaScript function when clicked. Which tool should you use?",
    "promptDe": "Du musst die Befehlsleiste der modellgesteuerten App anpassen, um eine Schaltfläche hinzuzufügen, die beim Klicken eine JavaScript-Funktion aufruft. Welches Tool solltest du verwenden?",
    "hint": "Microsoft replaced the legacy Ribbon Workbench with a modern in-app tool for command bar customization.",
    "hintDe": "Microsoft hat die Legacy-Ribbon Workbench durch ein modernes In-App-Tool für die Anpassung der Befehlsleiste ersetzt.",
    "options": [
      { "id": "opt-0", "text": "Command Designer (modern command bar editor)", "textDe": "Command Designer (moderner Befehlsleisten-Editor)", "isCorrect": true, "explanation": "The Command Designer is the modern, in-app tool for customizing model-driven app command bars — add, edit, remove buttons and configure JavaScript actions without external tools.", "explanationDe": "Der Command Designer ist das moderne In-App-Tool zur Anpassung von modellgesteuerten App-Befehlsleisten — Schaltflächen hinzufügen, bearbeiten, entfernen und JavaScript-Aktionen konfigurieren ohne externe Tools." },
      { "id": "opt-1", "text": "Ribbon Workbench (XrmToolBox)", "textDe": "Ribbon Workbench (XrmToolBox)", "isCorrect": false, "explanation": "Ribbon Workbench is a community tool that works but is the legacy approach — the Command Designer is Microsoft's supported modern replacement.", "explanationDe": "Ribbon Workbench ist ein Community-Tool, das funktioniert, aber der Legacy-Ansatz ist — der Command Designer ist Microsofts unterstützter moderner Ersatz." },
      { "id": "opt-2", "text": "Direct XML customization in the solution", "textDe": "Direkte XML-Anpassung in der Lösung", "isCorrect": false, "explanation": "Editing ribbon XML directly is error-prone and unsupported — use the Command Designer.", "explanationDe": "Das direkte Bearbeiten von Ribbon-XML ist fehleranfällig und nicht unterstützt — den Command Designer verwenden." },
      { "id": "opt-3", "text": "PCF component with command type", "textDe": "PCF-Komponente mit Befehlstyp", "isCorrect": false, "explanation": "PCF components are for custom controls (fields/grids), not command bar buttons.", "explanationDe": "PCF-Komponenten sind für benutzerdefinierte Steuerelemente (Felder/Gitter), nicht für Befehlsleisten-Schaltflächen." }
    ],
    "explanation": "The Command Designer is the modern Microsoft-supported tool for customizing model-driven app command bars — replaces Ribbon Workbench for new development.",
    "explanationDe": "Der Command Designer ist das moderne, von Microsoft unterstützte Tool zur Anpassung von modellgesteuerten App-Befehlsleisten — ersetzt Ribbon Workbench für neue Entwicklung.",
    "learnRef": { "title": "PL-400: Customize the command bar", "url": "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer" },
    "learnRefDe": { "title": "PL-400: Befehlsleiste anpassen", "url": "https://learn.microsoft.com/de-de/power-apps/maker/model-driven-apps/use-command-designer" }
  },
  {
    "id": "p4-q42",
    "certId": "pl400",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "A Power Automate cloud flow processes items from a SharePoint list. You want to process multiple items simultaneously to reduce total execution time. Which action setting should you configure?",
    "promptDe": "Ein Power Automate Cloud-Flow verarbeitet Elemente aus einer SharePoint-Liste. Du möchtest mehrere Elemente gleichzeitig verarbeiten, um die Gesamtausführungszeit zu reduzieren. Welche Aktionseinstellung solltest du konfigurieren?",
    "hint": "Apply to each loops have a setting that controls how many iterations run at the same time.",
    "hintDe": "'Auf jedes anwenden'-Schleifen haben eine Einstellung, die steuert, wie viele Iterationen gleichzeitig ausgeführt werden.",
    "options": [
      { "id": "opt-0", "text": "Enable concurrency control on the Apply to each loop", "textDe": "Parallelitätskontrolle für die 'Auf jedes anwenden'-Schleife aktivieren", "isCorrect": true, "explanation": "The concurrency control setting on Apply to each allows up to 50 parallel iterations — significantly reducing total processing time for independent items.", "explanationDe": "Die Parallelitätskontrolleinstellung für 'Auf jedes anwenden' erlaubt bis zu 50 parallele Iterationen — reduziert die Gesamtverarbeitungszeit für unabhängige Elemente erheblich." },
      { "id": "opt-1", "text": "Set run-after to run all branches in parallel", "textDe": "'Ausführen nach' so einstellen, dass alle Zweige parallel laufen", "isCorrect": false, "explanation": "Run-after controls step execution order based on prior step status — it doesn't enable loop parallelism.", "explanationDe": "'Ausführen nach' steuert die Schrittausführungsreihenfolge basierend auf dem Status des vorherigen Schritts — es ermöglicht keine Schleifenparallelität." },
      { "id": "opt-2", "text": "Split the flow into multiple flows triggered in parallel", "textDe": "Den Flow in mehrere parallel ausgelöste Flows aufteilen", "isCorrect": false, "explanation": "Splitting into multiple flows is over-engineering — concurrency control on Apply to each achieves the same result within one flow.", "explanationDe": "Das Aufteilen in mehrere Flows ist überentwickelt — Parallelitätskontrolle auf 'Auf jedes anwenden' erreicht dasselbe Ergebnis innerhalb eines Flows." },
      { "id": "opt-3", "text": "Use a scheduled flow instead of an automated flow", "textDe": "Einen geplanten Flow anstelle eines automatisierten Flows verwenden", "isCorrect": false, "explanation": "The trigger type doesn't affect how items in a loop are processed — concurrency control is the right setting.", "explanationDe": "Der Trigger-Typ beeinflusst nicht, wie Elemente in einer Schleife verarbeitet werden — Parallelitätskontrolle ist die richtige Einstellung." }
    ],
    "explanation": "Concurrency control on Apply to each loops allows parallel processing of list items — reduces total run time when items are independent (not order-dependent).",
    "explanationDe": "Parallelitätskontrolle für 'Auf jedes anwenden'-Schleifen ermöglicht parallele Verarbeitung von Listenelementen — reduziert die Gesamtlaufzeit, wenn Elemente unabhängig (nicht reihenfolgeabhängig) sind.",
    "learnRef": { "title": "PL-400: Optimize flows with concurrency", "url": "https://learn.microsoft.com/en-us/power-automate/apply-to-each" },
    "learnRefDe": { "title": "PL-400: Flows mit Parallelität optimieren", "url": "https://learn.microsoft.com/de-de/power-automate/apply-to-each" }
  },
  {
    "id": "p4-q43",
    "certId": "pl400",
    "topic": "Power Automate",
    "type": "single-choice",
    "prompt": "You need to call an HTTP endpoint from a Power Automate cloud flow and parse the JSON response to extract specific values. Which built-in actions should you use?",
    "promptDe": "Du musst einen HTTP-Endpunkt von einem Power Automate Cloud-Flow aus aufrufen und die JSON-Antwort parsen, um bestimmte Werte zu extrahieren. Welche eingebauten Aktionen solltest du verwenden?",
    "hint": "Two separate built-in actions handle the HTTP call and the JSON schema parsing.",
    "hintDe": "Zwei separate eingebaute Aktionen verarbeiten den HTTP-Aufruf und das JSON-Schema-Parsing.",
    "options": [
      { "id": "opt-0", "text": "HTTP action, then Parse JSON action", "textDe": "HTTP-Aktion, dann JSON parsen-Aktion", "isCorrect": true, "explanation": "The HTTP action calls the endpoint and returns the response body. Parse JSON then processes that body against a schema, making individual fields available as dynamic content in subsequent steps.", "explanationDe": "Die HTTP-Aktion ruft den Endpunkt auf und gibt den Antwort-Body zurück. JSON parsen verarbeitet dann diesen Body anhand eines Schemas und macht einzelne Felder als dynamischen Inhalt in nachfolgenden Schritten verfügbar." },
      { "id": "opt-1", "text": "HTTP action only — the response is automatically parsed", "textDe": "Nur HTTP-Aktion — die Antwort wird automatisch geparst", "isCorrect": false, "explanation": "The HTTP action returns the raw response body as a string or object — Parse JSON is needed to extract typed properties as dynamic content.", "explanationDe": "Die HTTP-Aktion gibt den rohen Antwort-Body als Zeichenfolge oder Objekt zurück — JSON parsen wird benötigt, um typisierte Eigenschaften als dynamischen Inhalt zu extrahieren." },
      { "id": "opt-2", "text": "Custom connector action with response schema", "textDe": "Benutzerdefinierte Connector-Aktion mit Antwortschema", "isCorrect": false, "explanation": "A custom connector would work but requires building the connector first — the HTTP + Parse JSON approach works without a connector.", "explanationDe": "Ein benutzerdefinierter Connector würde funktionieren, erfordert aber zuerst den Aufbau des Connectors — der HTTP + JSON parsen-Ansatz funktioniert ohne Connector." },
      { "id": "opt-3", "text": "Dataverse HTTP request action", "textDe": "Dataverse HTTP-Anfrage-Aktion", "isCorrect": false, "explanation": "The Dataverse HTTP request action calls Dataverse-specific endpoints — not arbitrary external HTTP APIs.", "explanationDe": "Die Dataverse HTTP-Anfrage-Aktion ruft Dataverse-spezifische Endpunkte auf — keine beliebigen externen HTTP-APIs." }
    ],
    "explanation": "HTTP action → Parse JSON is the standard pattern for consuming external REST APIs in Power Automate — HTTP fetches, Parse JSON makes the response properties usable as dynamic content.",
    "explanationDe": "HTTP-Aktion → JSON parsen ist das Standardmuster für die Nutzung externer REST-APIs in Power Automate — HTTP ruft ab, JSON parsen macht die Antworteigenschaften als dynamischen Inhalt nutzbar.",
    "learnRef": { "title": "PL-400: Call HTTP endpoints in Power Automate", "url": "https://learn.microsoft.com/en-us/power-automate/desktop-flows/actions-reference/web" },
    "learnRefDe": { "title": "PL-400: HTTP-Endpunkte in Power Automate aufrufen", "url": "https://learn.microsoft.com/de-de/power-automate/desktop-flows/actions-reference/web" }
  },
  {
    "id": "p4-q44",
    "certId": "pl400",
    "topic": "PCF",
    "type": "single-choice",
    "prompt": "In a PCF field component, which lifecycle method is called every time the bound column value or related properties change in the host app?",
    "promptDe": "In einer PCF-Feld-Komponente, welche Lebenszyklus-Methode wird jedes Mal aufgerufen, wenn sich der gebundene Spaltenwert oder verwandte Eigenschaften in der Host-App ändern?",
    "hint": "PCF has three core lifecycle methods: init (once), one for updates, one for output.",
    "hintDe": "PCF hat drei Kern-Lebenszyklus-Methoden: init (einmal), eine für Updates, eine für Ausgabe.",
    "options": [
      { "id": "opt-0", "text": "updateView", "textDe": "updateView", "isCorrect": true, "explanation": "updateView is called whenever the component's bound properties change — this is where you re-render the component with the latest data from the host.", "explanationDe": "updateView wird aufgerufen, wann immer sich die gebundenen Eigenschaften der Komponente ändern — hier rendern Sie die Komponente mit den neuesten Daten vom Host neu." },
      { "id": "opt-1", "text": "init", "textDe": "init", "isCorrect": false, "explanation": "init is called once when the component is first loaded — not on subsequent value changes.", "explanationDe": "init wird einmal beim ersten Laden der Komponente aufgerufen — nicht bei nachfolgenden Wertänderungen." },
      { "id": "opt-2", "text": "getOutputs", "textDe": "getOutputs", "isCorrect": false, "explanation": "getOutputs is called by the framework when it needs to retrieve the component's output values — it's triggered by notifyOutputChanged, not by input changes.", "explanationDe": "getOutputs wird vom Framework aufgerufen, wenn es die Ausgabewerte der Komponente abrufen muss — es wird durch notifyOutputChanged ausgelöst, nicht durch Eingabeänderungen." },
      { "id": "opt-3", "text": "destroy", "textDe": "destroy", "isCorrect": false, "explanation": "destroy is called when the component is removed from the DOM — for cleanup only.", "explanationDe": "destroy wird aufgerufen, wenn die Komponente aus dem DOM entfernt wird — nur für die Bereinigung." }
    ],
    "explanation": "updateView is the PCF lifecycle method for reactive re-rendering — called every time bound properties (column values, context) change, making the component respond to data updates.",
    "explanationDe": "updateView ist die PCF-Lebenszyklus-Methode für reaktives Re-Rendering — aufgerufen, wann immer sich gebundene Eigenschaften (Spaltenwerte, Kontext) ändern, wodurch die Komponente auf Datenaktualisierungen reagiert.",
    "learnRef": { "title": "PL-400: PCF component lifecycle", "url": "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/control" },
    "learnRefDe": { "title": "PL-400: PCF-Komponentenlebenszyklus", "url": "https://learn.microsoft.com/de-de/power-apps/developer/component-framework/reference/control" }
  },
  {
    "id": "p4-q45",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You need to trigger a Dataverse custom action from an external system via the Web API. The action creates a follow-up task and sends an email. Which HTTP method is correct?",
    "promptDe": "Du musst eine benutzerdefinierte Dataverse-Aktion von einem externen System über die Web API auslösen. Die Aktion erstellt eine Folgeaufgabe und sendet eine E-Mail. Welche HTTP-Methode ist korrekt?",
    "hint": "Dataverse actions that perform work (vs. querying) use a specific HTTP method.",
    "hintDe": "Dataverse-Aktionen, die Arbeit ausführen (vs. Abfragen), verwenden eine spezifische HTTP-Methode.",
    "options": [
      { "id": "opt-0", "text": "HTTP POST", "textDe": "HTTP POST", "isCorrect": true, "explanation": "Custom Dataverse actions are always invoked with HTTP POST — the request body contains input parameters in JSON format.", "explanationDe": "Benutzerdefinierte Dataverse-Aktionen werden immer mit HTTP POST aufgerufen — der Anfrage-Body enthält Eingabeparameter im JSON-Format." },
      { "id": "opt-1", "text": "HTTP GET", "textDe": "HTTP GET", "isCorrect": false, "explanation": "HTTP GET is for OData functions (read-only operations) — actions that modify state use POST.", "explanationDe": "HTTP GET ist für OData-Funktionen (schreibgeschützte Operationen) — Aktionen, die den Zustand ändern, verwenden POST." },
      { "id": "opt-2", "text": "HTTP PATCH", "textDe": "HTTP PATCH", "isCorrect": false, "explanation": "HTTP PATCH updates entity records (and performs upsert with alternate keys) — not for invoking custom actions.", "explanationDe": "HTTP PATCH aktualisiert Entitätsdatensätze (und führt Upsert mit alternativen Schlüsseln durch) — nicht zum Aufrufen benutzerdefinierter Aktionen." },
      { "id": "opt-3", "text": "HTTP DELETE", "textDe": "HTTP DELETE", "isCorrect": false, "explanation": "HTTP DELETE removes records — not for invoking actions.", "explanationDe": "HTTP DELETE entfernt Datensätze — nicht zum Aufrufen von Aktionen." }
    ],
    "explanation": "All Dataverse Web API actions (bound and unbound) are invoked with HTTP POST. Functions (read-only) use GET. This distinction is frequently tested in PL-400.",
    "explanationDe": "Alle Dataverse Web API-Aktionen (gebunden und ungebunden) werden mit HTTP POST aufgerufen. Funktionen (schreibgeschützt) verwenden GET. Diese Unterscheidung wird in PL-400 häufig geprüft.",
    "learnRef": { "title": "PL-400: Use Web API actions", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/use-web-api-actions" },
    "learnRefDe": { "title": "PL-400: Web API-Aktionen verwenden", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/webapi/use-web-api-actions" }
  },
  {
    "id": "p4-q46",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "true-false",
    "prompt": "A Dataverse plug-in registered as asynchronous Post-Operation runs within the same database transaction as the triggering operation.",
    "promptDe": "Ein als asynchrones Post-Operation registriertes Dataverse-Plug-in läuft innerhalb derselben Datenbanktransaktion wie die auslösende Operation.",
    "hint": "Think about what 'asynchronous' means for the execution context and transaction boundary.",
    "hintDe": "Denke darüber nach, was 'asynchron' für den Ausführungskontext und die Transaktionsgrenze bedeutet.",
    "options": [
      { "id": "opt-0", "text": "True", "textDe": "Wahr", "isCorrect": false, "explanation": "Asynchronous plug-ins run OUTSIDE the main transaction — they are queued and executed by the async service after the core operation commits.", "explanationDe": "Asynchrone Plug-ins laufen AUSSERHALB der Haupttransaktion — sie werden in die Warteschlange gestellt und nach dem Commit der Kernaktion vom asynchronen Dienst ausgeführt." },
      { "id": "opt-1", "text": "False", "textDe": "Falsch", "isCorrect": true, "explanation": "Async Post-Operation plug-ins run outside the transaction — this is why they can't roll back the triggering operation. Only synchronous plug-ins share the transaction.", "explanationDe": "Asynchrone Post-Operation-Plug-ins laufen außerhalb der Transaktion — deshalb können sie die auslösende Operation nicht zurückrollen. Nur synchrone Plug-ins teilen die Transaktion." }
    ],
    "explanation": "False — Async plug-ins execute outside the main database transaction. Only synchronous plug-ins (Pre-Validation, Pre-Operation, sync Post-Operation) run within the transaction.",
    "explanationDe": "Falsch — Asynchrone Plug-ins werden außerhalb der Hauptdatenbanktransaktion ausgeführt. Nur synchrone Plug-ins (Pre-Validation, Pre-Operation, sync Post-Operation) laufen innerhalb der Transaktion.",
    "learnRef": { "title": "PL-400: Event execution pipeline", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/event-framework" },
    "learnRefDe": { "title": "PL-400: Ereignis-Ausführungspipeline", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/event-framework" }
  },
  {
    "id": "p4-q47",
    "certId": "pl400",
    "topic": "ALM",
    "type": "true-false",
    "prompt": "When you import a managed solution update into a target environment, any active (unmanaged) customizations on top of managed components are automatically removed.",
    "promptDe": "Wenn du ein Update einer verwalteten Lösung in eine Zielumgebung importierst, werden aktive (nicht verwaltete) Anpassungen auf verwalteten Komponenten automatisch entfernt.",
    "hint": "Think about how solution layers work and which layer has precedence.",
    "hintDe": "Denke darüber nach, wie Lösungsschichten funktionieren und welche Schicht Vorrang hat.",
    "options": [
      { "id": "opt-0", "text": "True", "textDe": "Wahr", "isCorrect": false, "explanation": "Managed solution imports do NOT remove active layers — the active (unmanaged) layer persists and continues to take precedence over the updated managed layer.", "explanationDe": "Verwaltete Lösungsimporte entfernen KEINE aktiven Schichten — die aktive (nicht verwaltete) Schicht bleibt bestehen und hat weiterhin Vorrang vor der aktualisierten verwalteten Schicht." },
      { "id": "opt-1", "text": "False", "textDe": "Falsch", "isCorrect": true, "explanation": "Active (unmanaged) layers always take precedence and are NOT removed by managed solution updates. Administrators must manually remove the active layer to reveal the managed layer update.", "explanationDe": "Aktive (nicht verwaltete) Schichten haben immer Vorrang und werden NICHT durch Updates verwalteter Lösungen entfernt. Administratoren müssen die aktive Schicht manuell entfernen, um das Update der verwalteten Schicht zu sehen." }
    ],
    "explanation": "False — active layers persist through managed solution updates and always take precedence. This is a critical ALM concept tested in PL-400.",
    "explanationDe": "Falsch — aktive Schichten bleiben bei Updates verwalteter Lösungen erhalten und haben immer Vorrang. Dies ist ein kritisches ALM-Konzept, das in PL-400 geprüft wird.",
    "learnRef": { "title": "PL-400: Solution layers", "url": "https://learn.microsoft.com/en-us/power-platform/alm/solution-layers-alm" },
    "learnRefDe": { "title": "PL-400: Lösungsschichten", "url": "https://learn.microsoft.com/de-de/power-platform/alm/solution-layers-alm" }
  },
  {
    "id": "p4-q48",
    "certId": "pl400",
    "topic": "Integration",
    "type": "single-choice",
    "prompt": "You need to register a Dataverse service endpoint so that when an Account record is created, a message is automatically sent to an Azure Service Bus queue. Where do you configure this?",
    "promptDe": "Du musst einen Dataverse-Dienstendpunkt registrieren, damit beim Erstellen eines Kontodatensatzes automatisch eine Nachricht an eine Azure Service Bus-Queue gesendet wird. Wo konfigurierst du dies?",
    "hint": "A specific Dataverse tool manages service endpoint registrations and plug-in step associations.",
    "hintDe": "Ein spezifisches Dataverse-Tool verwaltet Dienstendpunkt-Registrierungen und Plug-in-Schrittzuordnungen.",
    "options": [
      { "id": "opt-0", "text": "Plugin Registration Tool (PRT)", "textDe": "Plugin Registration Tool (PRT)", "isCorrect": true, "explanation": "The Plugin Registration Tool registers service endpoints (Azure Service Bus, Event Hubs, webhooks) and associates them with steps (entity + message) — just like plug-in registration.", "explanationDe": "Das Plugin Registration Tool registriert Dienstendpunkte (Azure Service Bus, Event Hubs, Webhooks) und verknüpft sie mit Schritten (Entität + Nachricht) — genau wie die Plug-in-Registrierung." },
      { "id": "opt-1", "text": "Power Automate with a Service Bus connector", "textDe": "Power Automate mit einem Service Bus-Connector", "isCorrect": false, "explanation": "Power Automate can send messages to Service Bus but requires a flow trigger (not native Dataverse event pipeline registration).", "explanationDe": "Power Automate kann Nachrichten an Service Bus senden, erfordert aber einen Flow-Trigger (keine native Dataverse-Ereignispipeline-Registrierung)." },
      { "id": "opt-2", "text": "Azure Portal Service Bus configuration", "textDe": "Azure Portal Service Bus-Konfiguration", "isCorrect": false, "explanation": "The Azure Portal configures the Service Bus namespace itself — the connection to Dataverse events is configured in the Plugin Registration Tool.", "explanationDe": "Das Azure Portal konfiguriert den Service Bus-Namespace selbst — die Verbindung zu Dataverse-Ereignissen wird im Plugin Registration Tool konfiguriert." },
      { "id": "opt-3", "text": "Power Platform admin center", "textDe": "Power Platform Admin Center", "isCorrect": false, "explanation": "The admin center handles environment management — not service endpoint registration for event pipeline integrations.", "explanationDe": "Das Admin Center verwaltet Umgebungen — keine Dienstendpunkt-Registrierung für Ereignispipeline-Integrationen." }
    ],
    "explanation": "The Plugin Registration Tool registers both plug-ins AND service endpoints (Azure Service Bus, webhooks, Event Hubs). Service endpoint steps define which Dataverse events forward messages to the endpoint.",
    "explanationDe": "Das Plugin Registration Tool registriert sowohl Plug-ins ALS AUCH Dienstendpunkte (Azure Service Bus, Webhooks, Event Hubs). Dienstendpunktschritte definieren, welche Dataverse-Ereignisse Nachrichten an den Endpunkt weiterleiten.",
    "learnRef": { "title": "PL-400: Azure integration with Dataverse", "url": "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/azure-integration" },
    "learnRefDe": { "title": "PL-400: Azure-Integration mit Dataverse", "url": "https://learn.microsoft.com/de-de/power-apps/developer/data-platform/azure-integration" }
  },
  {
    "id": "p4-q49",
    "certId": "pl400",
    "topic": "Dataverse",
    "type": "single-choice",
    "prompt": "You need to prevent duplicate Account records based on matching name and email address. Which Dataverse feature should you configure?",
    "promptDe": "Du musst doppelte Kontodatensätze basierend auf übereinstimmenden Name und E-Mail-Adresse verhindern. Welche Dataverse-Funktion solltest du konfigurieren?",
    "hint": "This feature uses configurable matching rules and can warn or block on duplicates.",
    "hintDe": "Diese Funktion verwendet konfigurierbare Abgleichregeln und kann bei Duplikaten warnen oder blockieren.",
    "options": [
      { "id": "opt-0", "text": "Duplicate detection rules", "textDe": "Duplikaterkennungsregeln", "isCorrect": true, "explanation": "Duplicate detection rules define which fields to compare and when to check (on create, update, or import). They can warn or block when a potential duplicate is found.", "explanationDe": "Duplikaterkennungsregeln definieren, welche Felder verglichen werden sollen und wann geprüft wird (beim Erstellen, Aktualisieren oder Importieren). Sie können bei einem potenziellen Duplikat warnen oder blockieren." },
      { "id": "opt-1", "text": "Alternate keys with unique constraint", "textDe": "Alternative Schlüssel mit Unique-Constraint", "isCorrect": false, "explanation": "Alternate keys enforce database-level uniqueness on a field combination — but they reject duplicates with a generic error, not a user-friendly 'possible duplicate' experience.", "explanationDe": "Alternative Schlüssel erzwingen Eindeutigkeit auf Datenbankebene für eine Feldkombination — sie lehnen Duplikate jedoch mit einem generischen Fehler ab, nicht mit einer benutzerfreundlichen 'mögliches Duplikat'-Erfahrung." },
      { "id": "opt-2", "text": "Business rule with a condition on name and email", "textDe": "Geschäftsregel mit einer Bedingung auf Name und E-Mail", "isCorrect": false, "explanation": "Business rules validate field values on the current record — they cannot compare against existing records in the database.", "explanationDe": "Geschäftsregeln validieren Feldwerte im aktuellen Datensatz — sie können nicht mit vorhandenen Datensätzen in der Datenbank verglichen werden." },
      { "id": "opt-3", "text": "Plug-in on Pre-Operation that queries for existing records", "textDe": "Plug-in auf Pre-Operation, das nach vorhandenen Datensätzen sucht", "isCorrect": false, "explanation": "A plug-in can do this but is over-engineering — duplicate detection rules handle exactly this use case declaratively.", "explanationDe": "Ein Plug-in kann dies tun, ist aber überentwickelt — Duplikaterkennungsregeln verarbeiten genau diesen Anwendungsfall deklarativ." }
    ],
    "explanation": "Duplicate detection rules are the built-in, no-code solution for preventing duplicate Dataverse records based on configurable field matching rules.",
    "explanationDe": "Duplikaterkennungsregeln sind die eingebaute, codelose Lösung zur Verhinderung doppelter Dataverse-Datensätze basierend auf konfigurierbaren Feldabgleichregeln.",
    "learnRef": { "title": "PL-400: Set up duplicate detection rules", "url": "https://learn.microsoft.com/en-us/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean" },
    "learnRefDe": { "title": "PL-400: Duplikaterkennungsregeln einrichten", "url": "https://learn.microsoft.com/de-de/power-platform/admin/set-up-duplicate-detection-rules-keep-data-clean" }
  },
  {
    "id": "p4-q50",
    "certId": "pl400",
    "topic": "ALM",
    "type": "single-choice",
    "prompt": "You have two developers working on the same solution in separate developer environments. How should you merge their changes into one solution without conflicts?",
    "promptDe": "Du hast zwei Entwickler, die in separaten Entwicklerumgebungen an derselben Lösung arbeiten. Wie solltest du ihre Änderungen ohne Konflikte in eine Lösung zusammenführen?",
    "hint": "Git-based workflows with unpacked solution files are the key to collaborative Power Platform development.",
    "hintDe": "Git-basierte Workflows mit entpackten Lösungsdateien sind der Schlüssel für kollaborative Power Platform-Entwicklung.",
    "options": [
      { "id": "opt-0", "text": "Each developer unpacks their solution to Git, merge branches, pack and import", "textDe": "Jeder Entwickler entpackt seine Lösung in Git, Branches zusammenführen, packen und importieren", "isCorrect": true, "explanation": "Using pac solution unpack + Git allows standard source control workflows: each developer works on a branch, changes are reviewed and merged via pull request, then repacked and imported.", "explanationDe": "Die Verwendung von pac solution unpack + Git ermöglicht Standard-Quellcodeverwaltungs-Workflows: Jeder Entwickler arbeitet an einem Branch, Änderungen werden über Pull Requests überprüft und zusammengeführt, dann neu gepackt und importiert." },
      { "id": "opt-1", "text": "Export both solutions as managed and import them sequentially", "textDe": "Beide Lösungen als verwaltet exportieren und sequentiell importieren", "isCorrect": false, "explanation": "Importing two managed solutions sequentially doesn't merge their components — the second import would conflict or overwrite.", "explanationDe": "Das sequentielle Importieren zweier verwalteter Lösungen führt deren Komponenten nicht zusammen — der zweite Import würde Konflikte verursachen oder überschreiben." },
      { "id": "opt-2", "text": "Manually copy components between environments using the maker portal", "textDe": "Komponenten manuell zwischen Umgebungen über das Maker-Portal kopieren", "isCorrect": false, "explanation": "Manual copying is error-prone and doesn't scale — source control with Git is the correct approach.", "explanationDe": "Manuelles Kopieren ist fehleranfällig und skaliert nicht — Quellcodeverwaltung mit Git ist der richtige Ansatz." },
      { "id": "opt-3", "text": "Create one shared sandbox environment and have both developers work in it", "textDe": "Eine gemeinsame Sandbox-Umgebung erstellen und beide Entwickler darin arbeiten lassen", "isCorrect": false, "explanation": "Sharing one environment leads to conflicts and no isolation — individual developer environments + Git is the recommended approach.", "explanationDe": "Eine gemeinsame Umgebung führt zu Konflikten und keiner Isolation — individuelle Entwicklerumgebungen + Git ist der empfohlene Ansatz." }
    ],
    "explanation": "Git-based workflows with unpacked solutions (pac solution unpack) are the correct approach for multi-developer Power Platform ALM — enables branch-based development and conflict resolution.",
    "explanationDe": "Git-basierte Workflows mit entpackten Lösungen (pac solution unpack) sind der richtige Ansatz für Multi-Entwickler Power Platform ALM — ermöglicht Branch-basierte Entwicklung und Konfliktlösung.",
    "learnRef": { "title": "PL-400: Team development with solutions", "url": "https://learn.microsoft.com/en-us/power-platform/alm/team-development-alm" },
    "learnRefDe": { "title": "PL-400: Teamentwicklung mit Lösungen", "url": "https://learn.microsoft.com/de-de/power-platform/alm/team-development-alm" }
  }
];
