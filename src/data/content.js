export const roadmapThemes = [
	{
		id: 'scope',
		title: '1. Scope und Lernstrategie',
		goal: 'AI-900-Ziele priorisieren und Lernzeit strukturieren.',
		todos: [
			'Skill-Outline in Themencluster aufteilen',
			'Wochenziele mit Zeitbudget festlegen',
			'Messbare Lernziele definieren'
		]
	},
	{
		id: 'foundation',
		title: '2. Produktbasis mit Bun + Astro',
		goal: 'Technische Basis stabil und schnell aufsetzen.',
		todos: [
			'Responsives Layout fur Desktop und Mobile',
			'Build- und Dev-Workflow validieren',
			'Module fur Quiz, Exam und Karten verbinden'
		]
	},
	{
		id: 'content',
		title: '3. Content-Modell',
		goal: 'Fragen, Glossar und Karten einheitlich strukturieren.',
		todos: ['Fragenmodell standardisieren', 'Glossar pflegen', 'Karten pro Topic ausbauen']
	},
	{
		id: 'core',
		title: '4. Kern-Lernfunktionen',
		goal: 'Quiz + Feedback + Fehlerjournal als Tagesroutine nutzen.',
		todos: ['Quiz mit Erklarungen', 'Fehlerjournal fuhren', 'Dashboard-Werte beobachten']
	},
	{
		id: 'exam',
		title: '5. Prufungsmodus',
		goal: 'Prufungssituation simulieren und Schwachstellen erkennen.',
		todos: ['Exam mit Timer laufen lassen', 'Themenauswertung lesen', 'Bestwert verbessern']
	},
	{
		id: 'spaced',
		title: '6. Spaced Repetition',
		goal: 'Wissen langfristig halten.',
		todos: ['Fallige Karten durcharbeiten', 'Ratings konsequent nutzen', 'Due-Queue leeren']
	},
	{
		id: 'quality',
		title: '7. Iteration',
		goal: 'Lernsystem wochentlich verbessern.',
		todos: ['Retrospektive pro Woche', 'Fragenpool erweitern', 'v0.2 planen']
	}
];

export const quizQuestions = [
	{
		id: 'q1',
		topic: 'AI Workloads',
		prompt: 'Welche Aussage beschreibt KI-Workloads am besten?',
		options: [
			'Jeder KI-Use-Case nutzt dasselbe Modell und denselben Datenfluss.',
			'Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.',
			'Ein KI-Workload besteht nur aus Visualisierung.',
			'Ein KI-Workload beschreibt nur Infrastrukturkosten.'
		],
		answerIndex: 1,
		explanation: 'Ein Workload beschreibt den End-to-End-Einsatz von KI fur ein konkretes Problem.'
	},
	{
		id: 'q2',
		topic: 'AI Workloads',
		prompt: 'Du willst Nachtlogs gesammelt auswerten. Welches Inferenzmuster passt am besten?',
		options: ['Batch Inference', 'Online Inference', 'Streaming Translation', 'Prompt Engineering'],
		answerIndex: 0,
		explanation: 'Batch Inference passt fur periodische Verarbeitung grosser Datenmengen.'
	},
	{
		id: 'q3',
		topic: 'AI Workloads',
		prompt: 'Ein Produktivmodell soll stabil bleiben. Welche Praxis hilft direkt?',
		options: [
			'Modell ohne Monitoring deployen',
			'Nur mit Trainingsmetriken arbeiten',
			'Drift und Performance kontinuierlich uberwachen',
			'Feedback ausblenden'
		],
		answerIndex: 2,
		explanation: 'Monitoring hilft, Daten- und Modell-Drift fruh zu erkennen.'
	},
	{
		id: 'q4',
		topic: 'Machine Learning',
		prompt: 'Du willst Hauspreise vorhersagen. Welche Aufgabe passt?',
		options: ['Klassifikation', 'Regression', 'Clustering', 'Anomalieerkennung'],
		answerIndex: 1,
		explanation: 'Preise sind kontinuierliche Zahlenwerte, also Regression.'
	},
	{
		id: 'q5',
		topic: 'Machine Learning',
		prompt: 'Was ist ein typisches Zeichen fur Overfitting?',
		options: [
			'Training und Test sind beide schlecht',
			'Training ist sehr gut, Test deutlich schlechter',
			'Modell verbessert sich nach jedem neuen Datensatz',
			'Trainingsdaten werden nicht benutzt'
		],
		answerIndex: 1,
		explanation: 'Overfitting zeigt oft hohe Trainingsleistung und schwache Generalisierung.'
	},
	{
		id: 'q6',
		topic: 'Machine Learning',
		prompt: 'Kundensegmente ohne Labels finden ist ...',
		options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Transfer Learning'],
		answerIndex: 1,
		explanation: 'Clustering ohne Zielvariable ist ein unsupervised Verfahren.'
	},
	{
		id: 'q7',
		topic: 'Computer Vision',
		prompt: 'Bilder in "Hund", "Katze", "Vogel" einteilen ist ...',
		options: ['Bildklassifikation', 'Objekterkennung', 'Face Verification', 'OCR'],
		answerIndex: 0,
		explanation: 'Bildklassifikation weist dem Bild eine Klasse zu.'
	},
	{
		id: 'q8',
		topic: 'Computer Vision',
		prompt: 'Welches Szenario passt zu OCR?',
		options: [
			'Stimmung in Kundenfeedback erkennen',
			'Text auf gescannten Formularen auslesen',
			'Objekte in Echtzeit tracken',
			'Sprache in Audio erkennen'
		],
		answerIndex: 1,
		explanation: 'OCR extrahiert Text aus Bildern und gescannten Dokumenten.'
	},
	{
		id: 'q9',
		topic: 'Computer Vision',
		prompt: 'Objekterkennung liefert typischerweise ...',
		options: [
			'eine einzelne Klassenwahrscheinlichkeit fur das ganze Bild',
			'Bounding Boxes und Klassen fur erkannte Objekte',
			'nur Sentimentwerte',
			'nur eine Textzusammenfassung'
		],
		answerIndex: 1,
		explanation: 'Objekterkennung lokalisiert Objekte und klassifiziert sie.'
	},
	{
		id: 'q10',
		topic: 'NLP',
		prompt: 'Ein Dienst soll automatisch die Sprache in Texten erkennen.',
		options: ['Language Detection', 'Sentiment Analysis', 'OCR', 'Topic Modeling'],
		answerIndex: 0,
		explanation: 'Language Detection bestimmt die Sprache direkt.'
	},
	{
		id: 'q11',
		topic: 'NLP',
		prompt: 'Welche Funktion erkennt positive, negative oder neutrale Aussagen?',
		options: ['Sentiment Analysis', 'Entity Linking', 'Part-of-Speech Tagging', 'OCR'],
		answerIndex: 0,
		explanation: 'Sentiment Analysis bewertet die Stimmung in Text.'
	},
	{
		id: 'q12',
		topic: 'NLP',
		prompt: 'Named Entity Recognition dient primar dazu ...',
		options: [
			'Bilder in Kategorien einzuteilen',
			'Entitaten wie Personen, Orte und Organisationen zu extrahieren',
			'Audio zu transkribieren',
			'Modelle neu zu trainieren'
		],
		answerIndex: 1,
		explanation: 'NER markiert und klassifiziert relevante Entitaten im Text.'
	},
	{
		id: 'q13',
		topic: 'Generative AI',
		prompt: 'Welcher Azure-Dienst ist fur promptbasierte Textgenerierung gedacht?',
		options: ['Azure OpenAI Service', 'Azure AI Search', 'Azure AI Vision', 'Azure DNS'],
		answerIndex: 0,
		explanation: 'Azure OpenAI Service stellt Modelle fur generative Prompts bereit.'
	},
	{
		id: 'q14',
		topic: 'Generative AI',
		prompt: 'Was ist ein typisches Ziel von Prompt Engineering?',
		options: [
			'GPU-Temperatur optimieren',
			'Modellausgaben durch klare Anweisungen und Kontext verbessern',
			'Datenbankindizes ersetzen',
			'Nur die Latenz halbieren'
		],
		answerIndex: 1,
		explanation: 'Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.'
	},
	{
		id: 'q15',
		topic: 'Generative AI',
		prompt: 'Welcher Ansatz reduziert Halluzinationen in Antworten auf Unternehmensdaten?',
		options: ['RAG mit relevanten Quellen', 'Nur Temperatur erhohen', 'Context Window reduzieren', 'Nur Few-shot vermeiden'],
		answerIndex: 0,
		explanation: 'RAG liefert dem Modell passende, aktuelle Quellen als Kontext.'
	},
	{
		id: 'q16',
		topic: 'Knowledge Mining',
		prompt: 'Viele Dokumente indizieren und semantisch suchen passt zu ...',
		options: ['Azure AI Search', 'Azure AI Face', 'Azure Batch', 'Azure Monitor'],
		answerIndex: 0,
		explanation: 'Azure AI Search ist fur Indexierung und Suche ausgelegt.'
	},
	{
		id: 'q17',
		topic: 'Knowledge Mining',
		prompt: 'Was ist ein zentraler Schritt im Knowledge-Mining-Workflow?',
		options: [
			'Dokumente ignorieren',
			'Inhalte anreichern und indexieren',
			'Nur Modelle lokal trainieren',
			'Manuelle Suche ohne Index'
		],
		answerIndex: 1,
		explanation: 'Anreicherung und Indexierung machen Inhalte durchsuchbar.'
	},
	{
		id: 'q18',
		topic: 'Knowledge Mining',
		prompt: 'Semantische Suche unterscheidet sich von einfacher Keyword-Suche vor allem durch ...',
		options: [
			'nur schnellere Antwortzeit',
			'Verstandnis von Bedeutung und Kontext',
			'weniger Rechenleistung pro Anfrage',
			'Zwang zu relationalen Datenbanken'
		],
		answerIndex: 1,
		explanation: 'Semantische Suche berucksichtigt die inhaltliche Bedeutung.'
	},
	{
		id: 'q19',
		topic: 'Responsible AI',
		prompt: 'Ein Modell benachteiligt eine Gruppe systematisch. Welches Prinzip ist betroffen?',
		options: ['Fairness', 'Transparenz', 'Inklusivitat', 'Verantwortlichkeit'],
		answerIndex: 0,
		explanation: 'Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.'
	},
	{
		id: 'q20',
		topic: 'Responsible AI',
		prompt: 'Welche Massnahme erhoht Transparenz in KI-Systemen?',
		options: [
			'Entscheidungen ohne Begrundung liefern',
			'Modellinputs und Entscheidungslogik dokumentieren',
			'Nur proprietare Formate erlauben',
			'Fehler nicht protokollieren'
		],
		answerIndex: 1,
		explanation: 'Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.'
	},
	{
		id: 'q21',
		topic: 'Responsible AI',
		prompt: 'Welches Prinzip fordert robuste, sichere Modellnutzung?',
		options: ['Inklusivitat', 'Zuverlassigkeit und Sicherheit', 'Fairness', 'Datendichte'],
		answerIndex: 1,
		explanation: 'Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI.'
	},
	{
		id: 'q22',
		topic: 'Document AI',
		prompt: 'Rechnungsdaten wie Betrag und Datum extrahieren passt zu ...',
		options: [
			'Azure AI Document Intelligence',
			'Azure AI Translator',
			'Azure AI Speech',
			'Azure AI Content Safety'
		],
		answerIndex: 0,
		explanation: 'Document Intelligence extrahiert strukturierte Informationen aus Dokumenten.'
	},
	{
		id: 'q23',
		topic: 'Document AI',
		prompt: 'Wann nutzt man ein benutzerdefiniertes Extraktionsmodell?',
		options: [
			'Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken',
			'Wenn keine Daten vorhanden sind',
			'Wenn nur Audio verarbeitet wird',
			'Wenn man keine Felder erkennen will'
		],
		answerIndex: 0,
		explanation: 'Custom-Modelle helfen bei spezifischen Formularen oder Layouts.'
	},
	{
		id: 'q24',
		topic: 'Document AI',
		prompt: 'Welches Ergebnis ist bei Document Intelligence typisch?',
		options: [
			'Nur ein PNG als Ausgabe',
			'Strukturierte Felder inklusive Konfidenzwerten',
			'Nur ein numerischer Score',
			'Nur Vorhersage der Sprache'
		],
		answerIndex: 1,
		explanation: 'Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.'
	},
	{
		id: 'q25',
		type: 'true-false',
		topic: 'Responsible AI',
		prompt: 'Aussage: Fairness in KI bedeutet, dass alle Nutzergruppen gleich behandelt werden sollen.',
		correctAnswer: 'Wahr',
		explanation: 'Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung.'
	},
	{
		id: 'q26',
		type: 'true-false',
		topic: 'Generative AI',
		prompt: 'Aussage: Prompt Engineering ist nur fur Bildmodelle relevant.',
		correctAnswer: 'Falsch',
		explanation: 'Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral.'
	},
	{
		id: 'q27',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: Ein Modell kann auf Trainingsdaten sehr gut sein und trotzdem auf neuen Daten schwach performen.',
		correctAnswer: 'Wahr',
		explanation: 'Das ist ein typisches Verhalten bei Overfitting.'
	},
	{
		id: 'q28',
		type: 'true-false',
		topic: 'Knowledge Mining',
		prompt: 'Aussage: Semantische Suche berucksichtigt Bedeutung und Kontext statt nur exakte Keywords.',
		correctAnswer: 'Wahr',
		explanation: 'Genau das unterscheidet semantische Suche von reiner Keyword-Suche.'
	},
	// --- AI Workloads (erweitert) ---
	{
		id: 'q29',
		topic: 'AI Workloads',
		prompt: 'Welcher Azure-Dienst bundelt viele KI-Funktionen wie Vision, Speech und Language unter einem Dach?',
		options: ['Azure AI Services', 'Azure DevOps', 'Azure Monitor', 'Azure Logic Apps'],
		answerIndex: 0,
		explanation: 'Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.'
	},
	{
		id: 'q30',
		topic: 'AI Workloads',
		prompt: 'Was beschreibt den Prozess, ein trainiertes Modell fur Endnutzer verfugbar zu machen?',
		options: ['Deployment', 'Feature Engineering', 'Data Wrangling', 'Hyperparameter Tuning'],
		answerIndex: 0,
		explanation: 'Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.'
	},
	{
		id: 'q31',
		type: 'true-false',
		topic: 'AI Workloads',
		prompt: 'Aussage: Azure AI Services konnen uber REST-APIs und SDKs angesprochen werden.',
		correctAnswer: 'Wahr',
		explanation: 'Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen.'
	},
	// --- Machine Learning (erweitert) ---
	{
		id: 'q32',
		topic: 'Machine Learning',
		prompt: 'Welche Azure-Komponente bietet eine Drag-and-Drop-Oberflache zum Erstellen von ML-Pipelines?',
		options: ['Azure Machine Learning Designer', 'Azure Data Factory', 'Azure Stream Analytics', 'Azure Synapse'],
		answerIndex: 0,
		explanation: 'Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.'
	},
	{
		id: 'q33',
		topic: 'Machine Learning',
		prompt: 'Was ist der Hauptvorteil von Automated ML (AutoML)?',
		options: [
			'Es testet automatisch verschiedene Algorithmen und Hyperparameter',
			'Es ersetzt die Datensammlung komplett',
			'Es braucht keinerlei Daten',
			'Es funktioniert nur mit Bilddaten'
		],
		answerIndex: 0,
		explanation: 'AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.'
	},
	{
		id: 'q34',
		topic: 'Machine Learning',
		prompt: 'Welche Metrik misst, wie oft ein Klassifikationsmodell richtig liegt?',
		options: ['Accuracy', 'Latency', 'Throughput', 'Overfitting-Rate'],
		answerIndex: 0,
		explanation: 'Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.'
	},
	{
		id: 'q35',
		topic: 'Machine Learning',
		prompt: 'Was beschreibt Feature Engineering?',
		options: [
			'Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell',
			'Das Deployen eines Modells in die Cloud',
			'Das Loschen aller Trainingsdaten',
			'Das manuelle Klassifizieren von Bildern'
		],
		answerIndex: 0,
		explanation: 'Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.'
	},
	{
		id: 'q36',
		topic: 'Machine Learning',
		prompt: 'Welches Verfahren lernt durch Belohnungen und Bestrafungen?',
		options: ['Reinforcement Learning', 'Supervised Learning', 'Unsupervised Learning', 'Transfer Learning'],
		answerIndex: 0,
		explanation: 'Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.'
	},
	{
		id: 'q37',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: Bei Supervised Learning braucht man gelabelte Trainingsdaten.',
		correctAnswer: 'Wahr',
		explanation: 'Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen.'
	},
	{
		id: 'q38',
		topic: 'Machine Learning',
		prompt: 'Du willst E-Mails als Spam oder Nicht-Spam einstufen. Welche Aufgabe ist das?',
		options: ['Binare Klassifikation', 'Regression', 'Clustering', 'Anomalieerkennung'],
		answerIndex: 0,
		explanation: 'Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe.'
	},
	// --- Computer Vision (erweitert) ---
	{
		id: 'q39',
		topic: 'Computer Vision',
		prompt: 'Welcher Azure-Dienst bietet vorgefertigte Modelle fur Bildanalyse, Gesichtserkennung und OCR?',
		options: ['Azure AI Vision', 'Azure AI Translator', 'Azure AI Speech', 'Azure Cosmos DB'],
		answerIndex: 0,
		explanation: 'Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.'
	},
	{
		id: 'q40',
		topic: 'Computer Vision',
		prompt: 'Welche Aufgabe ordnet jedem Pixel eines Bildes eine Klasse zu?',
		options: ['Semantische Segmentierung', 'Bildklassifikation', 'OCR', 'Face Detection'],
		answerIndex: 0,
		explanation: 'Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.'
	},
	{
		id: 'q41',
		topic: 'Computer Vision',
		prompt: 'Azure AI Face kann verwendet werden fur ...',
		options: [
			'Gesichtserkennung und Verifizierung',
			'Spracherkennung in Audiodaten',
			'Textubersetzung',
			'Datenbankabfragen'
		],
		answerIndex: 0,
		explanation: 'Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.'
	},
	{
		id: 'q42',
		type: 'true-false',
		topic: 'Computer Vision',
		prompt: 'Aussage: Azure AI Vision kann automatisch Bildunterschriften (Captions) generieren.',
		correctAnswer: 'Wahr',
		explanation: 'Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten.'
	},
	// --- NLP (erweitert) ---
	{
		id: 'q43',
		topic: 'NLP',
		prompt: 'Welcher Azure-Dienst ubersetzt Text automatisch zwischen Sprachen?',
		options: ['Azure AI Translator', 'Azure AI Vision', 'Azure AI Search', 'Azure Monitor'],
		answerIndex: 0,
		explanation: 'Azure AI Translator bietet neuronale maschinelle Ubersetzung.'
	},
	{
		id: 'q44',
		topic: 'NLP',
		prompt: 'Key Phrase Extraction dient dazu ...',
		options: [
			'die wichtigsten Begriffe aus einem Text herauszuziehen',
			'Bilder zu klassifizieren',
			'Audio in Text umzuwandeln',
			'Datenbanken zu indexieren'
		],
		answerIndex: 0,
		explanation: 'Key Phrase Extraction identifiziert die zentralen Themen eines Texts.'
	},
	{
		id: 'q45',
		topic: 'NLP',
		prompt: 'Welcher Dienst wandelt gesprochene Sprache in Text um?',
		options: ['Azure AI Speech (Speech-to-Text)', 'Azure AI Vision', 'Azure AI Search', 'Azure AI Face'],
		answerIndex: 0,
		explanation: 'Speech-to-Text transkribiert Audio in geschriebenen Text.'
	},
	{
		id: 'q46',
		topic: 'NLP',
		prompt: 'Welcher Dienst wandelt Text in gesprochene Sprache um?',
		options: ['Azure AI Speech (Text-to-Speech)', 'Azure AI Translator', 'Azure AI Vision', 'Azure AI Search'],
		answerIndex: 0,
		explanation: 'Text-to-Speech synthetisiert naturlich klingende Sprache aus Text.'
	},
	{
		id: 'q47',
		type: 'true-false',
		topic: 'NLP',
		prompt: 'Aussage: Azure AI Language kann Frage-Antwort-Paare aus Dokumenten erstellen (Question Answering).',
		correctAnswer: 'Wahr',
		explanation: 'Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen.'
	},
	{
		id: 'q48',
		topic: 'NLP',
		prompt: 'Ein Chatbot soll haufige Kundenanfragen automatisiert beantworten. Welche Azure-Kombination passt?',
		options: [
			'Azure AI Language (Question Answering) + Azure Bot Service',
			'Azure AI Vision + Azure Batch',
			'Azure AI Search + Azure DNS',
			'Azure AI Face + Azure Monitor'
		],
		answerIndex: 0,
		explanation: 'Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.'
	},
	// --- Generative AI (erweitert) ---
	{
		id: 'q49',
		topic: 'Generative AI',
		prompt: 'Welches Modell in Azure OpenAI kann Bilder generieren?',
		options: ['DALL-E', 'Whisper', 'GPT-4', 'Ada'],
		answerIndex: 0,
		explanation: 'DALL-E generiert Bilder basierend auf Textbeschreibungen.'
	},
	{
		id: 'q50',
		topic: 'Generative AI',
		prompt: 'Was versteht man unter dem "Temperature"-Parameter bei GPT-Modellen?',
		options: [
			'Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben',
			'Er bestimmt die GPU-Temperatur',
			'Er legt die Antwortzeit fest',
			'Er setzt die maximale Tokenlange'
		],
		answerIndex: 0,
		explanation: 'Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.'
	},
	{
		id: 'q51',
		topic: 'Generative AI',
		prompt: 'Was ist das "Context Window" eines LLM?',
		options: [
			'Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann',
			'Das Fenster in der Azure-UI',
			'Die Anzahl der GPU-Kerne',
			'Die Trainingsdauer in Stunden'
		],
		answerIndex: 0,
		explanation: 'Das Context Window begrenzt Input + Output Tokens pro Anfrage.'
	},
	{
		id: 'q52',
		topic: 'Generative AI',
		prompt: 'Was ist ein "System Message" bei Azure OpenAI?',
		options: [
			'Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt',
			'Eine Fehlermeldung vom Server',
			'Ein Log-Eintrag in Azure Monitor',
			'Ein automatisch generierter Report'
		],
		answerIndex: 0,
		explanation: 'Die System Message definiert Persona, Regeln und Kontext fur das Modell.'
	},
	{
		id: 'q53',
		type: 'true-false',
		topic: 'Generative AI',
		prompt: 'Aussage: Azure OpenAI Service bietet dieselben Modelle wie OpenAI, aber mit Azure-Sicherheitsfeatures.',
		correctAnswer: 'Wahr',
		explanation: 'Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance.'
	},
	{
		id: 'q54',
		topic: 'Generative AI',
		prompt: 'Was bedeutet "Grounding" im Kontext generativer KI?',
		options: [
			'Antworten auf faktische, verifizierbare Informationen stutzen',
			'Das Modell physisch erden',
			'GPU-Spannung regulieren',
			'Netzwerklatenz minimieren'
		],
		answerIndex: 0,
		explanation: 'Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.'
	},
	{
		id: 'q55',
		topic: 'Generative AI',
		prompt: 'Microsoft Copilot basiert primaer auf ...',
		options: [
			'Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext',
			'Regelbasierten If-Then-Entscheidungen',
			'Nur Keyword-Suche',
			'Ausschliesslich lokal trainierten Modellen'
		],
		answerIndex: 0,
		explanation: 'Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).'
	},
	// --- Knowledge Mining (erweitert) ---
	{
		id: 'q56',
		topic: 'Knowledge Mining',
		prompt: 'Welche Rolle spielen "Skillsets" in Azure AI Search?',
		options: [
			'Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an',
			'Sie definieren Benutzerberechtigungen',
			'Sie steuern die Netzwerkkonfiguration',
			'Sie legen Backup-Strategien fest'
		],
		answerIndex: 0,
		explanation: 'Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.'
	},
	{
		id: 'q57',
		topic: 'Knowledge Mining',
		prompt: 'Was ist ein "Knowledge Store" in Azure AI Search?',
		options: [
			'Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung',
			'Ein Git-Repository fur Code',
			'Ein DNS-Eintrag',
			'Eine Backup-Datenbank'
		],
		answerIndex: 0,
		explanation: 'Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.'
	},
	{
		id: 'q58',
		type: 'true-false',
		topic: 'Knowledge Mining',
		prompt: 'Aussage: Azure AI Search kann Daten aus Blob Storage, SQL und Cosmos DB indexieren.',
		correctAnswer: 'Wahr',
		explanation: 'Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer.'
	},
	// --- Responsible AI (erweitert) ---
	{
		id: 'q59',
		topic: 'Responsible AI',
		prompt: 'Welches Responsible-AI-Prinzip fordert, dass KI-Systeme fur moglichst viele Menschen nutzbar sind?',
		options: ['Inklusivitat', 'Fairness', 'Transparenz', 'Datenschutz'],
		answerIndex: 0,
		explanation: 'Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.'
	},
	{
		id: 'q60',
		topic: 'Responsible AI',
		prompt: 'Welches Prinzip fordert, dass Menschen KI-Entscheidungen uberprufen und korrigieren konnen?',
		options: [
			'Verantwortlichkeit (Accountability)',
			'Datenschutz',
			'Kreativitat',
			'Performance'
		],
		answerIndex: 0,
		explanation: 'Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.'
	},
	{
		id: 'q61',
		topic: 'Responsible AI',
		prompt: 'Azure AI Content Safety dient primaer dazu ...',
		options: [
			'schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen',
			'GPU-Leistung zu optimieren',
			'Netzwerktraffic zu verschlusseln',
			'Datenbanken zu komprimieren'
		],
		answerIndex: 0,
		explanation: 'Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.'
	},
	{
		id: 'q62',
		type: 'true-false',
		topic: 'Responsible AI',
		prompt: 'Aussage: Microsofts Responsible AI Prinzipien umfassen Fairness, Zuverlassigkeit, Datenschutz, Inklusivitat, Transparenz und Verantwortlichkeit.',
		correctAnswer: 'Wahr',
		explanation: 'Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft.'
	},
	// --- Document AI (erweitert) ---
	{
		id: 'q63',
		topic: 'Document AI',
		prompt: 'Welches vorgefertigte Modell in Document Intelligence ist speziell fur Rechnungen optimiert?',
		options: ['Prebuilt Invoice Model', 'Prebuilt Receipt Model', 'Custom Neural Model', 'Layout Model'],
		answerIndex: 0,
		explanation: 'Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.'
	},
	{
		id: 'q64',
		topic: 'Document AI',
		prompt: 'Was liefert das Layout-Modell von Document Intelligence?',
		options: [
			'Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur',
			'Nur den reinen Text ohne Positionsdaten',
			'Nur Bilder aus dem Dokument',
			'Nur die Seitenzahl'
		],
		answerIndex: 0,
		explanation: 'Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.'
	},
	{
		id: 'q65',
		type: 'true-false',
		topic: 'Document AI',
		prompt: 'Aussage: Document Intelligence kann sowohl vorgefertigte als auch benutzerdefinierte Modelle nutzen.',
		correctAnswer: 'Wahr',
		explanation: 'Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts.'
	}
];

export const flashcards = [
	{
		id: 'f1',
		topic: 'ML',
		front: 'Regression vs. Klassifikation',
		back: 'Regression: Zahlenwerte. Klassifikation: Klassen.'
	},
	{
		id: 'f2',
		topic: 'NLP',
		front: 'Was ist Sentiment Analysis?',
		back: 'Stimmungsanalyse von Texten, z. B. positiv oder negativ.'
	},
	{
		id: 'f3',
		topic: 'Responsible AI',
		front: 'Nenne 2 Responsible-AI-Prinzipien.',
		back: 'Zum Beispiel Fairness, Transparenz, Inklusivitat, Zuverlassigkeit.'
	},
	{
		id: 'f4',
		topic: 'GenAI',
		front: 'Was bewirkt ein Prompt?',
		back: 'Er steuert Kontext, Ton und Ausgaberichtung eines generativen Modells.'
	},
	{
		id: 'f5',
		topic: 'Knowledge Mining',
		front: 'Wofur nutzt man Azure AI Search?',
		back: 'Fur Indexierung, semantische Suche und Wissenserschliessung.'
	},
	{
		id: 'f6',
		topic: 'Document AI',
		front: 'Typischer Use Case fur Document Intelligence',
		back: 'Felder aus Rechnungen, Formularen und Belegen automatisch extrahieren.'
	},
	{
		id: 'f7',
		topic: 'AI Workloads',
		front: 'Batch vs. Online Inference',
		back: 'Batch fur periodische Mengenverarbeitung, Online fur Echtzeitantworten.'
	},
	{
		id: 'f8',
		topic: 'Machine Learning',
		front: 'Was ist Overfitting?',
		back: 'Sehr gute Trainingswerte, aber schwache Ergebnisse auf neuen Daten.'
	},
	{
		id: 'f9',
		topic: 'NLP',
		front: 'Wofur steht NER?',
		back: 'Named Entity Recognition extrahiert Entitaten wie Person, Ort, Organisation.'
	},
	{
		id: 'f10',
		topic: 'Responsible AI',
		front: 'Warum ist Transparenz wichtig?',
		back: 'Entscheidungen werden nachvollziehbar und auditierbar.'
	},
	{
		id: 'f11',
		topic: 'Knowledge Mining',
		front: 'Was bringt semantische Suche?',
		back: 'Sie erkennt Bedeutung statt nur exakte Keywords.'
	},
	{
		id: 'f12',
		topic: 'Computer Vision',
		front: 'Objekterkennung vs. Bildklassifikation',
		back: 'Objekterkennung lokalisiert und klassifiziert, Bildklassifikation gibt Gesamtklasse.'
	},
	{
		id: 'f13',
		topic: 'Machine Learning',
		front: 'Supervised vs. Unsupervised Learning',
		back: 'Supervised: gelabelte Daten (Regression, Klassifikation). Unsupervised: ohne Labels (Clustering).'
	},
	{
		id: 'f14',
		topic: 'Machine Learning',
		front: 'Was macht Azure AutoML?',
		back: 'Testet automatisch verschiedene Algorithmen und Hyperparameter, wahlt das beste Modell.'
	},
	{
		id: 'f15',
		topic: 'Machine Learning',
		front: 'Was ist Feature Engineering?',
		back: 'Auswahl und Transformation von Eingabevariablen, damit das Modell besser lernt.'
	},
	{
		id: 'f16',
		topic: 'GenAI',
		front: 'Temperature-Parameter bei GPT',
		back: 'Niedrig = deterministisch/fokussiert. Hoch = kreativ/zufalliger.'
	},
	{
		id: 'f17',
		topic: 'GenAI',
		front: 'Was ist Grounding?',
		back: 'Modellantworten auf faktische, verifizierbare Quellen stutzen, um Halluzinationen zu reduzieren.'
	},
	{
		id: 'f18',
		topic: 'GenAI',
		front: 'System Message vs. User Message',
		back: 'System Message: Rolle und Regeln fur das Modell. User Message: die eigentliche Anfrage.'
	},
	{
		id: 'f19',
		topic: 'NLP',
		front: 'Speech-to-Text vs. Text-to-Speech',
		back: 'STT: Audio wird zu Text. TTS: Text wird zu gesprochener Sprache.'
	},
	{
		id: 'f20',
		topic: 'NLP',
		front: 'Was ist Key Phrase Extraction?',
		back: 'Identifiziert die wichtigsten Begriffe und Themen in einem Text.'
	},
	{
		id: 'f21',
		topic: 'Responsible AI',
		front: 'Die 6 Responsible AI Prinzipien',
		back: 'Fairness, Zuverlassigkeit & Sicherheit, Datenschutz, Inklusivitat, Transparenz, Verantwortlichkeit.'
	},
	{
		id: 'f22',
		topic: 'Responsible AI',
		front: 'Was macht Azure AI Content Safety?',
		back: 'Erkennt schadliche Inhalte (Gewalt, Hass, Selbstverletzung, sexuelle Inhalte) in Text und Bildern.'
	},
	{
		id: 'f23',
		topic: 'Computer Vision',
		front: 'Was ist semantische Segmentierung?',
		back: 'Jedem Pixel im Bild wird eine Klasse zugewiesen (z.B. Strasse, Himmel, Person).'
	},
	{
		id: 'f24',
		topic: 'Document AI',
		front: 'Prebuilt vs. Custom Models in Document Intelligence',
		back: 'Prebuilt: fertige Modelle fur Rechnungen, Belege etc. Custom: fur spezifische Dokumentlayouts trainiert.'
	},
	{
		id: 'f25',
		topic: 'Knowledge Mining',
		front: 'Was sind Skillsets in Azure AI Search?',
		back: 'KI-Anreicherungen (OCR, NER, Sentiment etc.) die wahrend der Indexierung ausgefuhrt werden.'
	},
	{
		id: 'f26',
		topic: 'AI Workloads',
		front: 'Was sind Azure AI Services?',
		back: 'Sammlung vorgefertigter KI-APIs (Vision, Speech, Language, Decision) unter einem Dach.'
	},
	{
		id: 'f27',
		topic: 'GenAI',
		front: 'Was ist Microsoft Copilot?',
		back: 'KI-Assistent basierend auf LLMs, eingebettet in Microsoft-Produkte (Office, Windows, etc.).'
	}
];

export const glossaryTerms = [
	{
		term: 'Machine Learning',
		definition: 'Modelle lernen Muster aus Daten und treffen Vorhersagen.'
	},
	{
		term: 'Generative AI',
		definition: 'Modelle erzeugen neue Inhalte wie Text, Bilder oder Code.'
	},
	{
		term: 'Prompt',
		definition: 'Anweisung an ein generatives Modell.'
	},
	{
		term: 'Inference',
		definition: 'Anwendung eines trainierten Modells auf neue Daten.'
	},
	{
		term: 'Overfitting',
		definition: 'Modell passt zu stark auf Trainingsdaten und generalisiert schlechter.'
	},
	{
		term: 'Computer Vision',
		definition: 'KI-Bereich fur Bild- und Videoverstandnis.'
	},
	{
		term: 'NLP',
		definition: 'Natural Language Processing verarbeitet Sprache und Text.'
	},
	{
		term: 'Responsible AI',
		definition: 'Prinzipien fur faire, sichere und nachvollziehbare KI.'
	},
	{
		term: 'Azure OpenAI Service',
		definition: 'Azure-Dienst fur Zugriff auf generative Foundation Models.'
	},
	{
		term: 'Azure AI Document Intelligence',
		definition: 'OCR plus strukturierte Extraktion von Dokumentfeldern.'
	},
	{
		term: 'RAG',
		definition: 'Retrieval-Augmented Generation verbindet LLM-Antworten mit externen Quellen.'
	},
	{
		term: 'Semantic Search',
		definition: 'Suche auf Basis von Bedeutung und Kontext, nicht nur exakten Begriffen.'
	},
	{
		term: 'Model Drift',
		definition: 'Verschiebung von Datenmustern, die Modellleistung uber Zeit verschlechtern kann.'
	},
	{
		term: 'Supervised Learning',
		definition: 'Lernverfahren mit gelabelten Trainingsdaten (Eingabe-Ausgabe-Paare).'
	},
	{
		term: 'Unsupervised Learning',
		definition: 'Lernverfahren ohne Labels, findet Muster und Strukturen eigenstandig (z.B. Clustering).'
	},
	{
		term: 'Reinforcement Learning',
		definition: 'Agent lernt durch Belohnungen und Bestrafungen optimale Aktionen.'
	},
	{
		term: 'AutoML',
		definition: 'Automatisierte Modellauswahl und Hyperparameter-Tuning in Azure Machine Learning.'
	},
	{
		term: 'Feature Engineering',
		definition: 'Auswahl und Transformation von Eingabevariablen fur bessere Modellleistung.'
	},
	{
		term: 'Azure AI Vision',
		definition: 'Azure-Dienst fur Bildanalyse, OCR, Gesichtserkennung und Bildunterschriften.'
	},
	{
		term: 'Azure AI Speech',
		definition: 'Dienst fur Speech-to-Text, Text-to-Speech und Sprachubersetzung.'
	},
	{
		term: 'Azure AI Language',
		definition: 'NLP-Dienst fur Sentiment, NER, Key Phrases, Question Answering und mehr.'
	},
	{
		term: 'Azure Bot Service',
		definition: 'Plattform zum Erstellen und Bereitstellen von Chatbots uber mehrere Kanale.'
	},
	{
		term: 'Azure AI Content Safety',
		definition: 'Erkennung schadlicher Inhalte (Gewalt, Hass, etc.) in Text und Bildern.'
	},
	{
		term: 'Temperature',
		definition: 'Parameter bei LLMs: niedrig = fokussiert/deterministisch, hoch = kreativ/zufalliger.'
	},
	{
		term: 'Grounding',
		definition: 'Verankerung von KI-Antworten in faktischen, verifizierbaren Quellen.'
	},
	{
		term: 'Halluzination',
		definition: 'Wenn ein LLM plausibel klingende, aber falsche Informationen generiert.'
	},
	{
		term: 'Copilot',
		definition: 'Microsofts KI-Assistent basierend auf LLMs, eingebettet in Produkte wie Office und Windows.'
	},
	{
		term: 'Skillset',
		definition: 'KI-Anreicherungen in Azure AI Search, die beim Indexieren angewendet werden.'
	},
	{
		term: 'Knowledge Store',
		definition: 'Sekundarer Speicher fur angereicherte Inhalte aus Azure AI Search.'
	}
];
