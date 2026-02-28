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
	}
];
