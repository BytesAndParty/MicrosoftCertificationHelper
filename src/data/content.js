export const roadmapThemes = [
	{
		id: 'scope',
		title: '1. Scope and learning strategy',
		titleDe: '1. Scope und Lernstrategie',
		goal: 'Prioritize AI-900 goals and structure study time.',
		goalDe: 'AI-900-Ziele priorisieren und Lernzeit strukturieren.',
		todos: [
			'Map the skill outline into topic clusters',
			'Define weekly goals with clear time budgets',
			'Set measurable learning targets'
		],
		todosDe: [
			'Skill-Outline in Themencluster aufteilen',
			'Wochenziele mit Zeitbudget festlegen',
			'Messbare Lernziele definieren'
		]
	},
	{
		id: 'foundation',
		title: '2. Product foundation with Bun + Astro',
		titleDe: '2. Produktbasis mit Bun + Astro',
		goal: 'Build a stable and fast technical foundation.',
		goalDe: 'Technische Basis stabil und schnell aufsetzen.',
		todos: [
			'Create a responsive layout for desktop and mobile',
			'Validate build and development workflows',
			'Connect quiz, exam, and flashcard modules'
		],
		todosDe: [
			'Responsives Layout für Desktop und Mobile',
			'Build- und Dev-Workflow validieren',
			'Module für Quiz, Exam und Karten verbinden'
		]
	},
	{
		id: 'content',
		title: '3. Content model',
		titleDe: '3. Content-Modell',
		goal: 'Standardize questions, glossary terms, and flashcards.',
		goalDe: 'Fragen, Glossar und Karten einheitlich strukturieren.',
		todos: ['Standardize the question model', 'Maintain glossary quality', 'Expand flashcards per topic'],
		todosDe: ['Fragenmodell standardisieren', 'Glossar pflegen', 'Karten pro Topic ausbauen']
	},
	{
		id: 'core',
		title: '4. Core study features',
		titleDe: '4. Kern-Lernfunktionen',
		goal: 'Use quiz, feedback, and an error journal as a daily routine.',
		goalDe: 'Quiz + Feedback + Fehlerjournal als Tagesroutine nutzen.',
		todos: ['Practice with explanation-driven quizzes', 'Track misses in the error journal', 'Monitor dashboard metrics'],
		todosDe: ['Quiz mit Erklärungen', 'Fehlerjournal führen', 'Dashboard-Werte beobachten']
	},
	{
		id: 'exam',
		title: '5. Exam mode',
		titleDe: '5. Prüfungsmodus',
		goal: 'Simulate exam conditions and identify weak areas.',
		goalDe: 'Prüfungssituation simulieren und Schwachstellen erkennen.',
		todos: ['Run timed exam sessions', 'Review topic-level performance', 'Improve your best score'],
		todosDe: ['Exam mit Timer laufen lassen', 'Themenauswertung lesen', 'Bestwert verbessern']
	},
	{
		id: 'spaced',
		title: '6. Spaced Repetition',
		titleDe: '6. Spaced Repetition',
		goal: 'Retain knowledge long term.',
		goalDe: 'Wissen langfristig halten.',
		todos: ['Work through all due cards', 'Use ratings consistently', 'Keep the due queue clear'],
		todosDe: ['Fällige Karten durcharbeiten', 'Ratings konsequent nutzen', 'Due-Queue leeren']
	},
	{
		id: 'quality',
		title: '7. Iteration',
		titleDe: '7. Iteration',
		goal: 'Improve the learning system weekly.',
		goalDe: 'Lernsystem wöchentlich verbessern.',
		todos: ['Run a weekly retrospective', 'Expand the question pool', 'Plan v0.2'],
		todosDe: ['Retrospektive pro Woche', 'Fragenpool erweitern', 'v0.2 planen']
	}
];

export const quizQuestions = [
	{
		id: 'q1',
		topic: 'AI Workloads',
		prompt: 'Welche Aussage beschreibt KI-Workloads am besten?',
		hint: 'Uberlege, was alles zusammenspielen muss, damit KI ein konkretes Problem losen kann.',
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
		hint: 'Denk daran, welches Muster gut zu grossen Datenmengen passt, die nicht in Echtzeit verarbeitet werden mussen.',
		options: ['Batch Inference', 'Online Inference', 'Streaming Translation', 'Prompt Engineering'],
		answerIndex: 0,
		explanation: 'Batch Inference passt fur periodische Verarbeitung grosser Datenmengen.'
	},
	{
		id: 'q3',
		topic: 'AI Workloads',
		prompt: 'Ein Produktivmodell soll stabil bleiben. Welche Praxis hilft direkt?',
		hint: 'Was passiert, wenn sich die Daten im Laufe der Zeit verandern und niemand hinschaut?',
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
		hint: 'Preise sind keine Kategorien, sondern fortlaufende Zahlen. Welche ML-Aufgabe arbeitet mit Zahlenwerten?',
		options: ['Klassifikation', 'Regression', 'Clustering', 'Anomalieerkennung'],
		answerIndex: 1,
		explanation: 'Preise sind kontinuierliche Zahlenwerte, also Regression.'
	},
	{
		id: 'q5',
		topic: 'Machine Learning',
		prompt: 'Was ist ein typisches Zeichen fur Overfitting?',
		hint: 'Achte auf den Unterschied zwischen Trainings- und Testperformance.',
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
		hint: 'Wenn keine vordefinierten Kategorien (Labels) vorhanden sind, welche Art von Lernen kommt dann zum Einsatz?',
		options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Transfer Learning'],
		answerIndex: 1,
		explanation: 'Clustering ohne Zielvariable ist ein unsupervised Verfahren.'
	},
	{
		id: 'q7',
		topic: 'Computer Vision',
		prompt: 'Bilder in "Hund", "Katze", "Vogel" einteilen ist ...',
		hint: 'Es geht darum, einem ganzen Bild genau eine Kategorie zuzuweisen.',
		options: ['Bildklassifikation', 'Objekterkennung', 'Face Verification', 'OCR'],
		answerIndex: 0,
		explanation: 'Bildklassifikation weist dem Bild eine Klasse zu.'
	},
	{
		id: 'q8',
		topic: 'Computer Vision',
		prompt: 'Welches Szenario passt zu OCR?',
		hint: 'OCR steht fur Optical Character Recognition. Wo muss geschriebener Text aus einem visuellen Medium gelesen werden?',
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
		hint: 'Objekterkennung findet nicht nur was im Bild ist, sondern auch wo es sich befindet.',
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
		hint: 'Welche NLP-Funktion bestimmt, ob ein Text z.B. auf Deutsch, Englisch oder Franzosisch geschrieben ist?',
		options: ['Language Detection', 'Sentiment Analysis', 'OCR', 'Topic Modeling'],
		answerIndex: 0,
		explanation: 'Language Detection bestimmt die Sprache direkt.'
	},
	{
		id: 'q11',
		topic: 'NLP',
		prompt: 'Welche Funktion erkennt positive, negative oder neutrale Aussagen?',
		hint: 'Es geht um die Stimmung oder Meinung in einem Text. Welche Analyse bewertet genau das?',
		options: ['Sentiment Analysis', 'Entity Linking', 'Part-of-Speech Tagging', 'OCR'],
		answerIndex: 0,
		explanation: 'Sentiment Analysis bewertet die Stimmung in Text.'
	},
	{
		id: 'q12',
		topic: 'NLP',
		prompt: 'Named Entity Recognition dient primar dazu ...',
		hint: 'Der Name sagt es schon: Es geht um das Erkennen von benannten Dingen in Texten.',
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
		hint: 'Welcher Azure-Dienst stellt die bekannten GPT-Modelle bereit?',
		options: ['Azure OpenAI Service', 'Azure AI Search', 'Azure AI Vision', 'Azure DNS'],
		answerIndex: 0,
		explanation: 'Azure OpenAI Service stellt Modelle fur generative Prompts bereit.'
	},
	{
		id: 'q14',
		topic: 'Generative AI',
		prompt: 'Was ist ein typisches Ziel von Prompt Engineering?',
		hint: 'Beim Prompt Engineering geht es darum, wie man dem Modell seine Aufgabe am besten erklart.',
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
		hint: 'Welches Verfahren gibt dem Modell zuerst relevante Dokumente als Kontext mit?',
		options: ['RAG mit relevanten Quellen', 'Nur Temperatur erhohen', 'Context Window reduzieren', 'Nur Few-shot vermeiden'],
		answerIndex: 0,
		explanation: 'RAG liefert dem Modell passende, aktuelle Quellen als Kontext.'
	},
	{
		id: 'q16',
		topic: 'Knowledge Mining',
		prompt: 'Viele Dokumente indizieren und semantisch suchen passt zu ...',
		hint: 'Welcher Azure-Dienst ist speziell fur das Durchsuchen grosser Dokumentensammlungen gemacht?',
		options: ['Azure AI Search', 'Azure AI Face', 'Azure Batch', 'Azure Monitor'],
		answerIndex: 0,
		explanation: 'Azure AI Search ist fur Indexierung und Suche ausgelegt.'
	},
	{
		id: 'q17',
		topic: 'Knowledge Mining',
		prompt: 'Was ist ein zentraler Schritt im Knowledge-Mining-Workflow?',
		hint: 'Rohe Dokumente mussen erst aufbereitet werden, bevor man darin suchen kann.',
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
		hint: 'Denk an den Unterschied zwischen exaktem Wortabgleich und dem Verstehen der Bedeutung.',
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
		hint: 'Welches Prinzip stellt sicher, dass niemand ungerecht behandelt wird?',
		options: ['Fairness', 'Transparenz', 'Inklusivitat', 'Verantwortlichkeit'],
		answerIndex: 0,
		explanation: 'Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.'
	},
	{
		id: 'q20',
		topic: 'Responsible AI',
		prompt: 'Welche Massnahme erhoht Transparenz in KI-Systemen?',
		hint: 'Transparenz bedeutet Nachvollziehbarkeit. Was hilft, Entscheidungen verstandlich zu machen?',
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
		hint: 'Welches Responsible-AI-Prinzip kummert sich um Stabilitat und Schutz vor Fehlern?',
		options: ['Inklusivitat', 'Zuverlassigkeit und Sicherheit', 'Fairness', 'Datendichte'],
		answerIndex: 1,
		explanation: 'Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI.'
	},
	{
		id: 'q22',
		topic: 'Document AI',
		prompt: 'Rechnungsdaten wie Betrag und Datum extrahieren passt zu ...',
		hint: 'Welcher Azure-Dienst ist darauf spezialisiert, strukturierte Felder aus Dokumenten herauszulesen?',
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
		hint: 'Wann reichen die mitgelieferten Standardmodelle nicht aus?',
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
		hint: 'Was bekommt man zuruck, wenn ein Dokument analysiert wird? Denk an mehr als nur Text.',
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
		hint: 'Uberlege, ob Fairness bedeutet, Unterschiede zwischen Gruppen auszugleichen oder sie zu ignorieren.',
		correctAnswer: 'Wahr',
		explanation: 'Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung.'
	},
	{
		id: 'q26',
		type: 'true-false',
		topic: 'Generative AI',
		prompt: 'Aussage: Prompt Engineering ist nur fur Bildmodelle relevant.',
		hint: 'Denk daran, welche Arten von Modellen alle mit Prompts arbeiten (Text, Code, Bilder...).',
		correctAnswer: 'Falsch',
		explanation: 'Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral.'
	},
	{
		id: 'q27',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: Ein Modell kann auf Trainingsdaten sehr gut sein und trotzdem auf neuen Daten schwach performen.',
		hint: 'Dieses Phanomen hat einen bekannten Namen in Machine Learning. Denk an die Balance zwischen Lernen und Generalisieren.',
		correctAnswer: 'Wahr',
		explanation: 'Das ist ein typisches Verhalten bei Overfitting.'
	},
	{
		id: 'q28',
		type: 'true-false',
		topic: 'Knowledge Mining',
		prompt: 'Aussage: Semantische Suche berucksichtigt Bedeutung und Kontext statt nur exakte Keywords.',
		hint: 'Was macht semantische Suche anders als eine einfache Volltextsuche?',
		correctAnswer: 'Wahr',
		explanation: 'Genau das unterscheidet semantische Suche von reiner Keyword-Suche.'
	},
	// --- AI Workloads (erweitert) ---
	{
		id: 'q29',
		topic: 'AI Workloads',
		prompt: 'Welcher Azure-Dienst bundelt viele KI-Funktionen wie Vision, Speech und Language unter einem Dach?',
		hint: 'Frueher hiess dieser Sammeldienst "Cognitive Services". Wie heisst er heute?',
		options: ['Azure AI Services', 'Azure DevOps', 'Azure Monitor', 'Azure Logic Apps'],
		answerIndex: 0,
		explanation: 'Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.'
	},
	{
		id: 'q30',
		topic: 'AI Workloads',
		prompt: 'Was beschreibt den Prozess, ein trainiertes Modell fur Endnutzer verfugbar zu machen?',
		hint: 'Wie nennt man den Schritt, bei dem ein Modell als Endpunkt oder Service bereitgestellt wird?',
		options: ['Deployment', 'Feature Engineering', 'Data Wrangling', 'Hyperparameter Tuning'],
		answerIndex: 0,
		explanation: 'Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.'
	},
	{
		id: 'q31',
		type: 'true-false',
		topic: 'AI Workloads',
		prompt: 'Aussage: Azure AI Services konnen uber REST-APIs und SDKs angesprochen werden.',
		hint: 'Uberlege, wie Cloud-Dienste normalerweise von Entwicklern angesprochen werden.',
		correctAnswer: 'Wahr',
		explanation: 'Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen.'
	},
	// --- Machine Learning (erweitert) ---
	{
		id: 'q32',
		topic: 'Machine Learning',
		prompt: 'Welche Azure-Komponente bietet eine Drag-and-Drop-Oberflache zum Erstellen von ML-Pipelines?',
		hint: 'Es gibt ein visuelles Werkzeug in Azure ML, das keinen Code erfordert.',
		options: ['Azure Machine Learning Designer', 'Azure Data Factory', 'Azure Stream Analytics', 'Azure Synapse'],
		answerIndex: 0,
		explanation: 'Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.'
	},
	{
		id: 'q33',
		topic: 'Machine Learning',
		prompt: 'Was ist der Hauptvorteil von Automated ML (AutoML)?',
		hint: 'Was wird bei AutoML automatisiert, das man sonst muhsam von Hand machen musste?',
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
		hint: 'Welche einfache Metrik gibt den prozentualen Anteil korrekter Vorhersagen an?',
		options: ['Accuracy', 'Latency', 'Throughput', 'Overfitting-Rate'],
		answerIndex: 0,
		explanation: 'Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.'
	},
	{
		id: 'q35',
		topic: 'Machine Learning',
		prompt: 'Was beschreibt Feature Engineering?',
		hint: 'Es geht um die Vorbereitung der Eingabedaten, bevor ein Modell daraus lernt.',
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
		hint: 'Denk an einen Agenten, der durch Versuch und Irrtum lernt, ahnlich wie ein Spieler in einem Spiel.',
		options: ['Reinforcement Learning', 'Supervised Learning', 'Unsupervised Learning', 'Transfer Learning'],
		answerIndex: 0,
		explanation: 'Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.'
	},
	{
		id: 'q37',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: Bei Supervised Learning braucht man gelabelte Trainingsdaten.',
		hint: 'Was bedeutet "supervised" (beaufsichtigt)? Wer oder was gibt die Anleitung beim Lernen?',
		correctAnswer: 'Wahr',
		explanation: 'Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen.'
	},
	{
		id: 'q38',
		topic: 'Machine Learning',
		prompt: 'Du willst E-Mails als Spam oder Nicht-Spam einstufen. Welche Aufgabe ist das?',
		hint: 'Wie viele mogliche Kategorien gibt es hier? Und was heisst es, wenn es genau zwei sind?',
		options: ['Binare Klassifikation', 'Regression', 'Clustering', 'Anomalieerkennung'],
		answerIndex: 0,
		explanation: 'Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe.'
	},
	// --- Computer Vision (erweitert) ---
	{
		id: 'q39',
		topic: 'Computer Vision',
		prompt: 'Welcher Azure-Dienst bietet vorgefertigte Modelle fur Bildanalyse, Gesichtserkennung und OCR?',
		hint: 'Welcher Azure-Dienst hat "Vision" im Namen und deckt alles rund um Bildverarbeitung ab?',
		options: ['Azure AI Vision', 'Azure AI Translator', 'Azure AI Speech', 'Azure Cosmos DB'],
		answerIndex: 0,
		explanation: 'Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.'
	},
	{
		id: 'q40',
		topic: 'Computer Vision',
		prompt: 'Welche Aufgabe ordnet jedem Pixel eines Bildes eine Klasse zu?',
		hint: 'Es geht nicht um das ganze Bild, sondern um die Zuordnung auf Pixel-Ebene.',
		options: ['Semantische Segmentierung', 'Bildklassifikation', 'OCR', 'Face Detection'],
		answerIndex: 0,
		explanation: 'Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.'
	},
	{
		id: 'q41',
		topic: 'Computer Vision',
		prompt: 'Azure AI Face kann verwendet werden fur ...',
		hint: 'Der Name "Face" verrat schon viel. Was kann man mit Gesichtern in Bildern alles machen?',
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
		hint: 'Uberlege, ob moderne Bildanalyse-Dienste Bilder auch beschreiben konnen, nicht nur klassifizieren.',
		correctAnswer: 'Wahr',
		explanation: 'Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten.'
	},
	// --- NLP (erweitert) ---
	{
		id: 'q43',
		topic: 'NLP',
		prompt: 'Welcher Azure-Dienst ubersetzt Text automatisch zwischen Sprachen?',
		hint: 'Der Name dieses Dienstes beschreibt genau seine Funktion: Ubersetzung.',
		options: ['Azure AI Translator', 'Azure AI Vision', 'Azure AI Search', 'Azure Monitor'],
		answerIndex: 0,
		explanation: 'Azure AI Translator bietet neuronale maschinelle Ubersetzung.'
	},
	{
		id: 'q44',
		topic: 'NLP',
		prompt: 'Key Phrase Extraction dient dazu ...',
		hint: 'Der Name verrat es: Es werden Schlusselbegriffe (Key Phrases) aus etwas herausgezogen.',
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
		hint: 'Audio rein, Text raus. Welcher Azure-Dienst macht genau das?',
		options: ['Azure AI Speech (Speech-to-Text)', 'Azure AI Vision', 'Azure AI Search', 'Azure AI Face'],
		answerIndex: 0,
		explanation: 'Speech-to-Text transkribiert Audio in geschriebenen Text.'
	},
	{
		id: 'q46',
		topic: 'NLP',
		prompt: 'Welcher Dienst wandelt Text in gesprochene Sprache um?',
		hint: 'Diesmal andersherum: Text rein, Sprache raus. Welcher Dienst synthetisiert Sprache?',
		options: ['Azure AI Speech (Text-to-Speech)', 'Azure AI Translator', 'Azure AI Vision', 'Azure AI Search'],
		answerIndex: 0,
		explanation: 'Text-to-Speech synthetisiert naturlich klingende Sprache aus Text.'
	},
	{
		id: 'q47',
		type: 'true-false',
		topic: 'NLP',
		prompt: 'Aussage: Azure AI Language kann Frage-Antwort-Paare aus Dokumenten erstellen (Question Answering).',
		hint: 'Kann ein Sprachdienst Wissen aus Dokumenten so aufbereiten, dass Fragen darauf beantwortet werden?',
		correctAnswer: 'Wahr',
		explanation: 'Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen.'
	},
	{
		id: 'q48',
		topic: 'NLP',
		prompt: 'Ein Chatbot soll haufige Kundenanfragen automatisiert beantworten. Welche Azure-Kombination passt?',
		hint: 'Ein Chatbot braucht zwei Dinge: eine Wissensquelle fur Antworten und einen Kanal fur die Kommunikation.',
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
		hint: 'Welches bekannte Modell von OpenAI erstellt Bilder aus Textbeschreibungen?',
		options: ['DALL-E', 'Whisper', 'GPT-4', 'Ada'],
		answerIndex: 0,
		explanation: 'DALL-E generiert Bilder basierend auf Textbeschreibungen.'
	},
	{
		id: 'q50',
		topic: 'Generative AI',
		prompt: 'Was versteht man unter dem "Temperature"-Parameter bei GPT-Modellen?',
		hint: 'Temperature beeinflusst, wie vorhersehbar oder uberraschend die Antworten ausfallen.',
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
		hint: 'Jedes Modell hat eine Obergrenze fur die Menge an Text, die es auf einmal sehen kann.',
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
		hint: 'Die System Message wird vor der eigentlichen Nutzerfrage gesetzt. Was konnte sie dem Modell mitgeben?',
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
		hint: 'Uberlege, warum Microsoft die gleichen Modelle nochmals in Azure anbietet. Welchen Mehrwert bringt das?',
		correctAnswer: 'Wahr',
		explanation: 'Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance.'
	},
	{
		id: 'q54',
		topic: 'Generative AI',
		prompt: 'Was bedeutet "Grounding" im Kontext generativer KI?',
		hint: 'Grounding bedeutet woertlich "Verankerung". Worin werden die Antworten verankert?',
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
		hint: 'Copilot ist ein KI-Assistent in Microsoft-Produkten. Welche Technologie steckt dahinter?',
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
		hint: 'Skillsets fugen wahrend eines bestimmten Schritts KI-Fahigkeiten hinzu. Welcher Schritt ist das?',
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
		hint: 'Wohin gehen die angereicherten Daten, wenn man sie nicht nur fur die Suche, sondern auch fur andere Zwecke braucht?',
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
		hint: 'Uberlege, ob Azure AI Search nur eine einzige Datenquelle unterstutzt oder flexibler ist.',
		correctAnswer: 'Wahr',
		explanation: 'Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer.'
	},
	// --- Responsible AI (erweitert) ---
	{
		id: 'q59',
		topic: 'Responsible AI',
		prompt: 'Welches Responsible-AI-Prinzip fordert, dass KI-Systeme fur moglichst viele Menschen nutzbar sind?',
		hint: 'Welches Prinzip stellt sicher, dass niemand von der Nutzung ausgeschlossen wird?',
		options: ['Inklusivitat', 'Fairness', 'Transparenz', 'Datenschutz'],
		answerIndex: 0,
		explanation: 'Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.'
	},
	{
		id: 'q60',
		topic: 'Responsible AI',
		prompt: 'Welches Prinzip fordert, dass Menschen KI-Entscheidungen uberprufen und korrigieren konnen?',
		hint: 'Wer tragt am Ende die Verantwortung fur KI-Entscheidungen? Es sind nicht die Maschinen.',
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
		hint: 'Der Name "Content Safety" deutet auf den Schutz vor bestimmten Arten von Inhalten hin.',
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
		hint: 'Zahle die genannten Prinzipien durch. Sind das tatsachlich die sechs offiziellen Microsoft-Prinzipien?',
		correctAnswer: 'Wahr',
		explanation: 'Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft.'
	},
	// --- Document AI (erweitert) ---
	{
		id: 'q63',
		topic: 'Document AI',
		prompt: 'Welches vorgefertigte Modell in Document Intelligence ist speziell fur Rechnungen optimiert?',
		hint: 'Fur gaengige Dokumenttypen gibt es fertige Modelle. Welches Modell ist nach dem Dokumenttyp "Rechnung" benannt?',
		options: ['Prebuilt Invoice Model', 'Prebuilt Receipt Model', 'Custom Neural Model', 'Layout Model'],
		answerIndex: 0,
		explanation: 'Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.'
	},
	{
		id: 'q64',
		topic: 'Document AI',
		prompt: 'Was liefert das Layout-Modell von Document Intelligence?',
		hint: 'Das Layout-Modell analysiert die visuelle Struktur. Was gehoert alles zur Struktur eines Dokuments?',
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
		hint: 'Uberlege, ob der Dienst nur Standarddokumente verarbeiten kann oder auch an eigene Formate angepasst werden kann.',
		correctAnswer: 'Wahr',
		explanation: 'Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts.'
	},
	// --- Deep Learning & Transformer ---
	{
		id: 'q66',
		topic: 'Machine Learning',
		prompt: 'Was unterscheidet Deep Learning von klassischem Machine Learning?',
		hint: 'Denk an die Anzahl der Schichten in neuronalen Netzen und was das fur die Merkmalsextraktion bedeutet.',
		options: [
			'Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion',
			'Deep Learning braucht weniger Daten als klassisches ML',
			'Deep Learning funktioniert nur mit Text',
			'Deep Learning ersetzt Feature Engineering durch manuelle Regeln'
		],
		answerIndex: 0,
		explanation: 'Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.'
	},
	{
		id: 'q67',
		topic: 'Machine Learning',
		prompt: 'Was ist die Transformer-Architektur?',
		hint: 'Transformer haben einen besonderen Mechanismus, der es ihnen erlaubt, auf alle Teile der Eingabe gleichzeitig zu achten.',
		options: [
			'Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen',
			'Ein Hardware-Bauteil in GPUs',
			'Ein Datenbank-Index-Typ',
			'Ein Azure-Netzwerkprotokoll'
		],
		answerIndex: 0,
		explanation: 'Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.'
	},
	{
		id: 'q68',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: GPT und BERT basieren beide auf der Transformer-Architektur.',
		hint: 'Beide Modelle nutzen Attention-Mechanismen, aber auf unterschiedliche Weise. Haben sie eine gemeinsame Basis?',
		correctAnswer: 'Wahr',
		explanation: 'Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder).'
	},
	{
		id: 'q69',
		topic: 'Machine Learning',
		prompt: 'Was sind "Features" und "Labels" in einem ML-Dataset?',
		hint: 'Denk an eine Tabelle: Welche Spalten beschreiben die Datenpunkte, und welche Spalte soll vorhergesagt werden?',
		options: [
			'Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte',
			'Features sind Ausgaben, Labels sind Eingaben',
			'Beides sind Hyperparameter',
			'Features sind nur numerisch, Labels nur Text'
		],
		answerIndex: 0,
		explanation: 'Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.'
	},
	{
		id: 'q70',
		topic: 'Machine Learning',
		prompt: 'Warum teilt man Daten in Training- und Validierungs-Sets?',
		hint: 'Woher weisst du, ob ein Modell wirklich gelernt hat oder nur auswendig kann? Du brauchst ungesehene Daten.',
		options: [
			'Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen',
			'Weil Azure nur zwei Dateien akzeptiert',
			'Um Speicherplatz zu sparen',
			'Weil Trainingsdaten nie validiert werden mussen'
		],
		answerIndex: 0,
		explanation: 'Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.'
	},
	{
		id: 'q71',
		topic: 'Machine Learning',
		prompt: 'Welche Azure-Ressource stellt Rechenleistung fur ML-Training bereit?',
		hint: 'ML-Training braucht Rechenpower. Welche Azure-ML-Ressource liefert genau das?',
		options: [
			'Azure Machine Learning Compute (Compute Instances und Clusters)',
			'Azure DNS',
			'Azure CDN',
			'Azure Key Vault'
		],
		answerIndex: 0,
		explanation: 'Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.'
	},
	// --- Azure AI Foundry (NEU im Exam) ---
	{
		id: 'q72',
		topic: 'Generative AI',
		prompt: 'Was ist Azure AI Foundry?',
		hint: 'Frueher hiess es Azure AI Studio. Was kann man dort alles mit KI-Anwendungen machen?',
		options: [
			'Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen',
			'Ein Hardware-Hersteller',
			'Ein reiner Speicherdienst',
			'Ein Netzwerk-Monitoring-Tool'
		],
		answerIndex: 0,
		explanation: 'Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.'
	},
	{
		id: 'q73',
		topic: 'Generative AI',
		prompt: 'Was bietet der Azure AI Foundry Model Catalog?',
		hint: 'Ein Katalog ist eine Sammlung. Was findet man in einem Katalog fur KI-Modelle?',
		options: [
			'Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen',
			'Nur Microsoft-eigene Modelle',
			'Nur Bildgeneratoren',
			'Hardware-Spezifikationen'
		],
		answerIndex: 0,
		explanation: 'Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.'
	},
	{
		id: 'q74',
		type: 'true-false',
		topic: 'Generative AI',
		prompt: 'Aussage: Azure AI Foundry ermoglicht es, verschiedene LLMs aus dem Model Catalog zu vergleichen und zu testen.',
		hint: 'Wenn es einen Katalog mit vielen Modellen gibt, ware es sinnvoll, diese auch vergleichen zu konnen, oder?',
		correctAnswer: 'Wahr',
		explanation: 'Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle.'
	},
	{
		id: 'q75',
		topic: 'Generative AI',
		prompt: 'Welche Responsible-AI-Massnahme ist spezifisch fur generative KI besonders wichtig?',
		hint: 'Generative Modelle konnen problematische Inhalte erzeugen. Wie kann man das verhindern?',
		options: [
			'Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren',
			'Nur Open-Source-Modelle verwenden',
			'Alle Prompts offentlich machen',
			'Temperature immer auf Maximum setzen'
		],
		answerIndex: 0,
		explanation: 'Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.'
	},
	{
		id: 'q76',
		topic: 'NLP',
		prompt: 'Was versteht man unter Language Modeling?',
		hint: 'Denk an die Autovervollstandigung auf deinem Handy. Das Modell sagt voraus, was als Nachstes kommt.',
		options: [
			'Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext',
			'Das Ubersetzen von Programmiersprachen',
			'Das Erstellen von Sprachkursen',
			'Das Komprimieren von Textdateien'
		],
		answerIndex: 0,
		explanation: 'Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.'
	},
	{
		id: 'q77',
		topic: 'Machine Learning',
		prompt: 'Wo kann man in Azure ML trainierte Modelle als Endpunkt bereitstellen?',
		hint: 'Azure ML bietet verwaltete Endpunkte fur die Bereitstellung. Wie heissen diese?',
		options: [
			'Azure Machine Learning Managed Endpoints',
			'Azure DNS Zones',
			'Azure Active Directory',
			'Azure Key Vault'
		],
		answerIndex: 0,
		explanation: 'Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.'
	},
	{
		id: 'q78',
		type: 'true-false',
		topic: 'Machine Learning',
		prompt: 'Aussage: Convolutional Neural Networks (CNNs) werden haufig fur Bilderkennungsaufgaben eingesetzt.',
		hint: 'CNNs haben eine spezielle Architektur. Fur welche Art von Daten sind sie besonders gut geeignet?',
		correctAnswer: 'Wahr',
		explanation: 'CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert.'
	}
];

export const flashcards = [
	{
		id: 'f1',
		topic: 'ML',
		front: 'Regression vs. classification',
		back: 'Regression predicts numeric values. Classification predicts categories.',
		frontDe: 'Regression vs. Klassifikation',
		backDe: 'Regression: Zahlenwerte. Klassifikation: Klassen.'
	},
	{
		id: 'f2',
		topic: 'NLP',
		front: 'What is sentiment analysis?',
		back: 'It analyzes sentiment in text, for example positive or negative.',
		frontDe: 'Was ist Sentiment Analysis?',
		backDe: 'Stimmungsanalyse von Texten, z. B. positiv oder negativ.'
	},
	{
		id: 'f3',
		topic: 'Responsible AI',
		front: 'Name 2 Responsible AI principles.',
		back: 'For example fairness, transparency, inclusiveness, and reliability.',
		frontDe: 'Nenne 2 Responsible-AI-Prinzipien.',
		backDe: 'Zum Beispiel Fairness, Transparenz, Inklusivitat, Zuverlassigkeit.'
	},
	{
		id: 'f4',
		topic: 'GenAI',
		front: 'What does a prompt do?',
		back: 'It controls the context, tone, and output direction of a generative model.',
		frontDe: 'Was bewirkt ein Prompt?',
		backDe: 'Er steuert Kontext, Ton und Ausgaberichtung eines generativen Modells.'
	},
	{
		id: 'f5',
		topic: 'Knowledge Mining',
		front: 'What is Azure AI Search used for?',
		back: 'For indexing, semantic search, and knowledge discovery.',
		frontDe: 'Wofur nutzt man Azure AI Search?',
		backDe: 'Fur Indexierung, semantische Suche und Wissenserschliessung.'
	},
	{
		id: 'f6',
		topic: 'Document AI',
		front: 'Typical use case for Document Intelligence',
		back: 'Automatically extract fields from invoices, forms, and receipts.',
		frontDe: 'Typischer Use Case fur Document Intelligence',
		backDe: 'Felder aus Rechnungen, Formularen und Belegen automatisch extrahieren.'
	},
	{
		id: 'f7',
		topic: 'AI Workloads',
		front: 'Batch vs. Online Inference',
		back: 'Batch is for periodic bulk processing, online is for real-time responses.',
		frontDe: 'Batch vs. Online Inference',
		backDe: 'Batch fur periodische Mengenverarbeitung, Online fur Echtzeitantworten.'
	},
	{
		id: 'f8',
		topic: 'Machine Learning',
		front: 'What is overfitting?',
		back: 'Very good training results, but weak performance on new data.',
		frontDe: 'Was ist Overfitting?',
		backDe: 'Sehr gute Trainingswerte, aber schwache Ergebnisse auf neuen Daten.'
	},
	{
		id: 'f9',
		topic: 'NLP',
		front: 'What does NER stand for?',
		back: 'Named Entity Recognition extracts entities such as person, place, and organization.',
		frontDe: 'Wofur steht NER?',
		backDe: 'Named Entity Recognition extrahiert Entitaten wie Person, Ort, Organisation.'
	},
	{
		id: 'f10',
		topic: 'Responsible AI',
		front: 'Why is transparency important?',
		back: 'Decisions become understandable and auditable.',
		frontDe: 'Warum ist Transparenz wichtig?',
		backDe: 'Entscheidungen werden nachvollziehbar und auditierbar.'
	},
	{
		id: 'f11',
		topic: 'Knowledge Mining',
		front: 'What is the benefit of semantic search?',
		back: 'It understands meaning, not only exact keywords.',
		frontDe: 'Was bringt semantische Suche?',
		backDe: 'Sie erkennt Bedeutung statt nur exakte Keywords.'
	},
	{
		id: 'f12',
		topic: 'Computer Vision',
		front: 'Object detection vs. image classification',
		back: 'Object detection localizes and classifies objects, while image classification predicts one overall class.',
		frontDe: 'Objekterkennung vs. Bildklassifikation',
		backDe: 'Objekterkennung lokalisiert und klassifiziert, Bildklassifikation gibt Gesamtklasse.'
	},
	{
		id: 'f13',
		topic: 'Machine Learning',
		front: 'Supervised vs. unsupervised learning',
		back: 'Supervised uses labeled data (regression, classification). Unsupervised works without labels (clustering).',
		frontDe: 'Supervised vs. Unsupervised Learning',
		backDe: 'Supervised: gelabelte Daten (Regression, Klassifikation). Unsupervised: ohne Labels (Clustering).'
	},
	{
		id: 'f14',
		topic: 'Machine Learning',
		front: 'What does Azure AutoML do?',
		back: 'It automatically tests different algorithms and hyperparameters, then selects the best model.',
		frontDe: 'Was macht Azure AutoML?',
		backDe: 'Testet automatisch verschiedene Algorithmen und Hyperparameter, wahlt das beste Modell.'
	},
	{
		id: 'f15',
		topic: 'Machine Learning',
		front: 'What is feature engineering?',
		back: 'Selecting and transforming input variables so the model can learn better.',
		frontDe: 'Was ist Feature Engineering?',
		backDe: 'Auswahl und Transformation von Eingabevariablen, damit das Modell besser lernt.'
	},
	{
		id: 'f16',
		topic: 'GenAI',
		front: 'Temperature parameter in GPT',
		back: 'Low temperature = more deterministic/focused. High temperature = more creative/random.',
		frontDe: 'Temperature-Parameter bei GPT',
		backDe: 'Niedrig = deterministisch/fokussiert. Hoch = kreativ/zufalliger.'
	},
	{
		id: 'f17',
		topic: 'GenAI',
		front: 'What is grounding?',
		back: 'Anchoring model answers to factual, verifiable sources to reduce hallucinations.',
		frontDe: 'Was ist Grounding?',
		backDe: 'Modellantworten auf faktische, verifizierbare Quellen stutzen, um Halluzinationen zu reduzieren.'
	},
	{
		id: 'f18',
		topic: 'GenAI',
		front: 'System message vs. user message',
		back: 'System message defines role and rules. User message contains the actual request.',
		frontDe: 'System Message vs. User Message',
		backDe: 'System Message: Rolle und Regeln fur das Modell. User Message: die eigentliche Anfrage.'
	},
	{
		id: 'f19',
		topic: 'NLP',
		front: 'Speech-to-Text vs. Text-to-Speech',
		back: 'STT converts audio to text. TTS converts text to spoken language.',
		frontDe: 'Speech-to-Text vs. Text-to-Speech',
		backDe: 'STT: Audio wird zu Text. TTS: Text wird zu gesprochener Sprache.'
	},
	{
		id: 'f20',
		topic: 'NLP',
		front: 'What is key phrase extraction?',
		back: 'It identifies the most important terms and topics in a text.',
		frontDe: 'Was ist Key Phrase Extraction?',
		backDe: 'Identifiziert die wichtigsten Begriffe und Themen in einem Text.'
	},
	{
		id: 'f21',
		topic: 'Responsible AI',
		front: 'The 6 Responsible AI principles',
		back: 'Fairness, reliability & safety, privacy, inclusiveness, transparency, and accountability.',
		frontDe: 'Die 6 Responsible AI Prinzipien',
		backDe: 'Fairness, Zuverlassigkeit & Sicherheit, Datenschutz, Inklusivitat, Transparenz, Verantwortlichkeit.'
	},
	{
		id: 'f22',
		topic: 'Responsible AI',
		front: 'What does Azure AI Content Safety do?',
		back: 'It detects harmful content (violence, hate, self-harm, sexual content) in text and images.',
		frontDe: 'Was macht Azure AI Content Safety?',
		backDe: 'Erkennt schadliche Inhalte (Gewalt, Hass, Selbstverletzung, sexuelle Inhalte) in Text und Bildern.'
	},
	{
		id: 'f23',
		topic: 'Computer Vision',
		front: 'What is semantic segmentation?',
		back: 'Each pixel in an image is assigned a class (for example road, sky, person).',
		frontDe: 'Was ist semantische Segmentierung?',
		backDe: 'Jedem Pixel im Bild wird eine Klasse zugewiesen (z.B. Strasse, Himmel, Person).'
	},
	{
		id: 'f24',
		topic: 'Document AI',
		front: 'Prebuilt vs. custom models in Document Intelligence',
		back: 'Prebuilt models work for common document types. Custom models are trained for specific layouts.',
		frontDe: 'Prebuilt vs. Custom Models in Document Intelligence',
		backDe: 'Prebuilt: fertige Modelle fur Rechnungen, Belege etc. Custom: fur spezifische Dokumentlayouts trainiert.'
	},
	{
		id: 'f25',
		topic: 'Knowledge Mining',
		front: 'What are skillsets in Azure AI Search?',
		back: 'AI enrichments (OCR, NER, sentiment, etc.) that run during indexing.',
		frontDe: 'Was sind Skillsets in Azure AI Search?',
		backDe: 'KI-Anreicherungen (OCR, NER, Sentiment etc.) die wahrend der Indexierung ausgefuhrt werden.'
	},
	{
		id: 'f26',
		topic: 'AI Workloads',
		front: 'What are Azure AI Services?',
		back: 'A collection of prebuilt AI APIs (Vision, Speech, Language, Decision) in one place.',
		frontDe: 'Was sind Azure AI Services?',
		backDe: 'Sammlung vorgefertigter KI-APIs (Vision, Speech, Language, Decision) unter einem Dach.'
	},
	{
		id: 'f27',
		topic: 'GenAI',
		front: 'What is Microsoft Copilot?',
		back: 'An AI assistant based on LLMs, embedded in Microsoft products (Office, Windows, etc.).',
		frontDe: 'Was ist Microsoft Copilot?',
		backDe: 'KI-Assistent basierend auf LLMs, eingebettet in Microsoft-Produkte (Office, Windows, etc.).'
	},
	{
		id: 'f28',
		topic: 'Machine Learning',
		front: 'Deep learning vs. classical ML',
		back: 'Deep learning uses deep neural networks and learns features automatically. Classical ML often needs manual feature selection.',
		frontDe: 'Deep Learning vs. klassisches ML',
		backDe: 'Deep Learning nutzt tiefe neuronale Netze und lernt Features automatisch. Klassisches ML braucht manuelle Feature-Auswahl.'
	},
	{
		id: 'f29',
		topic: 'Machine Learning',
		front: 'What is the Transformer architecture?',
		back: 'A neural network architecture with self-attention. It is the basis for GPT, BERT, and modern LLMs.',
		frontDe: 'Was ist die Transformer-Architektur?',
		backDe: 'Neuronales Netz mit Self-Attention. Basis von GPT, BERT und modernen LLMs.'
	},
	{
		id: 'f30',
		topic: 'Machine Learning',
		front: 'Features vs. labels',
		back: 'Features are input variables (X). Labels are target values to predict (Y).',
		frontDe: 'Features vs. Labels',
		backDe: 'Features = Eingabevariablen (X). Labels = Zielwerte die vorhergesagt werden sollen (Y).'
	},
	{
		id: 'f31',
		topic: 'Machine Learning',
		front: 'Training vs. validation dataset',
		back: 'Training data teaches the model patterns. Validation data checks generalization on unseen data.',
		frontDe: 'Training vs. Validation Dataset',
		backDe: 'Training: Modell lernt Muster. Validation: Pruft Generalisierung auf ungesehenen Daten.'
	},
	{
		id: 'f32',
		topic: 'GenAI',
		front: 'What is Azure AI Foundry?',
		back: 'A central platform to build, test, and deploy AI apps (formerly Azure AI Studio).',
		frontDe: 'Was ist Azure AI Foundry?',
		backDe: 'Zentrale Plattform zum Erstellen, Testen und Bereitstellen von KI-Apps (fruher Azure AI Studio).'
	},
	{
		id: 'f33',
		topic: 'GenAI',
		front: 'Azure AI Foundry Model Catalog',
		back: 'A collection of models from different providers (Microsoft, OpenAI, Meta, etc.) for comparison and deployment.',
		frontDe: 'Azure AI Foundry Model Catalog',
		backDe: 'Sammlung von Modellen verschiedener Anbieter (Microsoft, OpenAI, Meta, etc.) zum Vergleichen und Deployen.'
	},
	{
		id: 'f34',
		topic: 'NLP',
		front: 'What is language modeling?',
		back: 'Predicting the next word/token based on context. This is the foundation of GPT and similar models.',
		frontDe: 'Was ist Language Modeling?',
		backDe: 'Vorhersage des nachsten Worts/Tokens basierend auf Kontext. Grundlage von GPT und ahnlichen Modellen.'
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
	},
	{
		term: 'Deep Learning',
		definition: 'ML-Teilgebiet mit tiefen neuronalen Netzen, die Features automatisch aus Daten lernen.'
	},
	{
		term: 'Transformer',
		definition: 'Neuronale Netzarchitektur mit Self-Attention. Basis von GPT, BERT und modernen LLMs.'
	},
	{
		term: 'Azure AI Foundry',
		definition: 'Zentrale Azure-Plattform zum Entwickeln, Testen und Bereitstellen von KI-Anwendungen (fruher AI Studio).'
	},
	{
		term: 'Model Catalog',
		definition: 'Sammlung vorgefertigter Modelle in Azure AI Foundry von verschiedenen Anbietern.'
	},
	{
		term: 'CNN',
		definition: 'Convolutional Neural Network, spezialisiert auf Bilderkennung und visuelle Datenverarbeitung.'
	},
	{
		term: 'Label',
		definition: 'Zielwert in einem ML-Dataset, den das Modell vorhersagen soll.'
	},
	{
		term: 'Feature',
		definition: 'Eingabevariable in einem ML-Dataset, die das Modell zur Vorhersage nutzt.'
	},
	{
		term: 'Validation Dataset',
		definition: 'Datensatz zum Prufen der Modellleistung auf ungesehenen Daten (Generalisierung).'
	},
	{
		term: 'Language Modeling',
		definition: 'Vorhersage des nachsten Tokens basierend auf Kontext. Grundprinzip generativer Sprachmodelle.'
	}
];
