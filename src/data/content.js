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
		"id": "q1",
		"topic": "AI Workloads",
		"prompt": "Which statement best describes AI workloads?",
		"hint": "Think about everything that has to come together for AI to solve a specific problem.",
			"options": [
				"Every AI use case uses the same model and data flow.",
				"An AI workload combines data, model and inference for a specific goal.",
				"An AI workload consists only of visualization.",
				"An AI workload only describes infrastructure costs."
			],
			"optionExplanations": [
				"AI workloads vary by task, data, and operating constraints; they are not all identical.",
				"Correct: a workload is the complete path from data to model output for a defined business goal.",
				"Visualization can be part of a solution, but it is not the workload itself.",
				"Infrastructure cost is one aspect, not the definition of an AI workload."
			],
			"answerIndex": 1,
			"explanation": "A workload describes the end-to-end use of AI for a specific problem.",
			"promptDe": "Welche Aussage beschreibt KI-Workloads am besten?",
			"hintDe": "Uberlege, was alles zusammenspielen muss, damit KI ein konkretes Problem losen kann.",
			"explanationDe": "Ein Workload beschreibt den End-to-End-Einsatz von KI fur ein konkretes Problem.",
			"optionsDe": [
				"Jeder KI-Use-Case nutzt dasselbe Modell und denselben Datenfluss.",
				"Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.",
				"Ein KI-Workload besteht nur aus Visualisierung.",
				"Ein KI-Workload beschreibt nur Infrastrukturkosten."
			],
			"optionExplanationsDe": [
				"KI-Workloads unterscheiden sich je nach Aufgabe, Daten und Betriebsbedingungen.",
				"Richtig: Ein Workload umfasst den gesamten Weg von Daten bis zur Modellantwort fur ein klares Ziel.",
				"Visualisierung kann Teil der Losung sein, ist aber nicht der ganze Workload.",
				"Infrastrukturkosten sind nur ein Aspekt und nicht die Definition eines KI-Workloads."
			]
		},
		{
		"id": "q2",
		"topic": "AI Workloads",
		"prompt": "You want to evaluate night logs collectively. Which inference pattern fits best?",
		"hint": "Think about which pattern works well with large amounts of data that don't need to be processed in real time.",
			"options": [
				"Batch inference",
				"Online inference",
				"Streaming Translation",
				"Prompt engineering"
			],
			"optionExplanations": [
				"Correct: batch inference fits periodic, large-scale, non-real-time processing.",
				"Online inference is designed for immediate per-request predictions.",
				"Streaming translation is a language task, not a general log-processing inference pattern.",
				"Prompt engineering improves model prompts and is not an inference execution pattern."
			],
			"answerIndex": 0,
			"explanation": "Batch inference is suitable for periodic processing of large amounts of data.",
			"promptDe": "Du willst Nachtlogs gesammelt auswerten. Welches Inferenzmuster passt am besten?",
			"hintDe": "Denk daran, welches Muster gut zu grossen Datenmengen passt, die nicht in Echtzeit verarbeitet werden mussen.",
			"explanationDe": "Batch Inference passt fur periodische Verarbeitung grosser Datenmengen.",
			"optionsDe": [
				"Batch Inference",
				"Online Inference",
				"Streaming Translation",
				"Prompt Engineering"
			],
			"optionExplanationsDe": [
				"Richtig: Batch Inference passt zu periodischer Verarbeitung grosser Datenmengen ohne Echtzeitanforderung.",
				"Online Inference ist fur direkte Einzelvorhersagen in Echtzeit gedacht.",
				"Streaming Translation ist eine Sprachaufgabe und kein allgemeines Inferenzmuster fur Logauswertung.",
				"Prompt Engineering verbessert Prompts, ist aber kein Ausfuhrungsmuster fur Inferenz."
			]
		},
		{
		"id": "q3",
		"topic": "AI Workloads",
		"prompt": "A productive model should remain stable. Which practice helps directly?",
		"hint": "What happens if the data changes over time and no one is looking?",
			"options": [
				"Deploy the model without monitoring",
				"Work only with training metrics",
				"Continuously monitor drift and performance",
				"Hide feedback"
			],
			"optionExplanations": [
				"Without monitoring, degradation can stay unnoticed in production.",
				"Training metrics alone do not reveal real-world drift or serving issues.",
				"Correct: continuous monitoring catches drift, quality drops, and failures early.",
				"Hiding feedback removes a key signal needed for model improvement."
			],
			"answerIndex": 2,
			"explanation": "Monitoring helps to detect data and model drift early.",
			"promptDe": "Ein Produktivmodell soll stabil bleiben. Welche Praxis hilft direkt?",
			"hintDe": "Was passiert, wenn sich die Daten im Laufe der Zeit verandern und niemand hinschaut?",
			"explanationDe": "Monitoring hilft, Daten- und Modell-Drift fruh zu erkennen.",
			"optionsDe": [
				"Modell ohne Monitoring deployen",
				"Nur mit Trainingsmetriken arbeiten",
				"Drift und Performance kontinuierlich uberwachen",
				"Feedback ausblenden"
			],
			"optionExplanationsDe": [
				"Ohne Monitoring bleiben Verschlechterungen im Produktivbetrieb oft unbemerkt.",
				"Trainingsmetriken allein zeigen keine Drift oder Serving-Probleme in der Praxis.",
				"Richtig: Kontinuierliches Monitoring erkennt Drift, Qualitatsverlust und Fehler fruhzeitig.",
				"Ohne Feedback fehlen wichtige Signale fur Verbesserungen am Modell."
			]
		},
		{
		"id": "q4",
		"topic": "Machine Learning",
		"prompt": "You want to predict house prices. Which task is suitable?",
		"hint": "Prices are not categories, but sequential numbers. Which ML task works with numerical values?",
			"options": [
				"classification",
				"Regression",
				"Clustering",
				"Anomaly detection"
			],
			"optionExplanations": [
				"Classification predicts discrete classes, not continuous numeric values like price.",
				"Correct: regression predicts continuous numerical outputs such as house prices.",
				"Clustering groups similar points without predicting a target value.",
				"Anomaly detection flags outliers and is not a direct price prediction task."
			],
			"answerIndex": 1,
			"explanation": "Prices are continuous numerical values, i.e. regression.",
			"promptDe": "Du willst Hauspreise vorhersagen. Welche Aufgabe passt?",
			"hintDe": "Preise sind keine Kategorien, sondern fortlaufende Zahlen. Welche ML-Aufgabe arbeitet mit Zahlenwerten?",
			"explanationDe": "Preise sind kontinuierliche Zahlenwerte, also Regression.",
			"optionsDe": [
				"Klassifikation",
				"Regression",
				"Clustering",
				"Anomalieerkennung"
			],
			"optionExplanationsDe": [
				"Klassifikation sagt diskrete Klassen voraus, nicht kontinuierliche Zahlen wie Preise.",
				"Richtig: Regression sagt kontinuierliche numerische Zielwerte wie Hauspreise voraus.",
				"Clustering gruppiert ahnliche Datenpunkte ohne expliziten Zielwert.",
				"Anomalieerkennung findet Ausreisser und ist keine direkte Preisvorhersage."
			]
		},
		{
		"id": "q5",
		"topic": "Machine Learning",
		"prompt": "What is a typical sign of overfitting?",
		"hint": "Pay attention to the difference between training and test performance.",
			"options": [
				"Training and testing are both bad",
				"Training is very good, testing is significantly worse",
				"Model improves after each new data set",
				"Training data is not used"
			],
			"optionExplanations": [
				"If both are bad, that often indicates underfitting, not overfitting.",
				"Correct: strong training performance with weak test performance is the classic overfitting pattern.",
				"Improvement after more data can happen and does not define overfitting.",
				"Overfitting still uses training data heavily; the problem is poor generalization."
			],
			"answerIndex": 1,
			"explanation": "Overfitting often shows high training performance and weak generalization.",
			"promptDe": "Was ist ein typisches Zeichen fur Overfitting?",
			"hintDe": "Achte auf den Unterschied zwischen Trainings- und Testperformance.",
			"explanationDe": "Overfitting zeigt oft hohe Trainingsleistung und schwache Generalisierung.",
			"optionsDe": [
				"Training und Test sind beide schlecht",
				"Training ist sehr gut, Test deutlich schlechter",
				"Modell verbessert sich nach jedem neuen Datensatz",
				"Trainingsdaten werden nicht benutzt"
			],
			"optionExplanationsDe": [
				"Sind Training und Test beide schlecht, spricht das eher fur Underfitting als fur Overfitting.",
				"Richtig: Sehr gute Trainingswerte bei deutlich schwacheren Testwerten sind das typische Overfitting-Muster.",
				"Verbesserung mit mehr Daten kann vorkommen und ist kein Overfitting-Kriterium.",
				"Overfitting nutzt Trainingsdaten stark; das Problem ist die schwache Generalisierung."
			]
		},
	{
		"id": "q6",
		"topic": "Machine Learning",
		"prompt": "Finding customer segments without labels is...",
		"hint": "If there are no predefined categories (labels), what type of learning is used?",
		"options": [
			"Supervised learning",
			"Unsupervised learning",
			"Reinforcement learning",
			"Transfer learning"
		],
		"answerIndex": 1,
		"explanation": "Clustering without target variables is an unsupervised procedure.",
		"promptDe": "Kundensegmente ohne Labels finden ist ...",
		"hintDe": "Wenn keine vordefinierten Kategorien (Labels) vorhanden sind, welche Art von Lernen kommt dann zum Einsatz?",
		"explanationDe": "Clustering ohne Zielvariable ist ein unsupervised Verfahren.",
		"optionsDe": [
			"Supervised Learning",
			"Unsupervised Learning",
			"Reinforcement Learning",
			"Transfer Learning"
		]
	},
	{
		"id": "q7",
		"topic": "Computer Vision",
		"prompt": "Divide images into \"dog\", \"cat\", \"bird\" is...",
		"hint": "It's about assigning exactly one category to an entire image.",
		"options": [
			"Image classification",
			"Object detection",
			"Face verification",
			"OCR"
		],
		"answerIndex": 0,
		"explanation": "Image classification assigns a class to the image.",
		"promptDe": "Bilder in \"Hund\", \"Katze\", \"Vogel\" einteilen ist ...",
		"hintDe": "Es geht darum, einem ganzen Bild genau eine Kategorie zuzuweisen.",
		"explanationDe": "Bildklassifikation weist dem Bild eine Klasse zu.",
		"optionsDe": [
			"Bildklassifikation",
			"Objekterkennung",
			"Face Verification",
			"OCR"
		]
	},
	{
		"id": "q8",
		"topic": "Computer Vision",
		"prompt": "Which scenario suits OCR?",
		"hint": "OCR stands for Optical Character Recognition. Where does written text need to be read from a visual medium?",
		"options": [
			"Recognize sentiment in customer feedback",
			"Read text on scanned forms",
			"Track objects in real time",
			"Detect speech in audio"
		],
		"answerIndex": 1,
		"explanation": "OCR extracts text from images and scanned documents.",
		"promptDe": "Welches Szenario passt zu OCR?",
		"hintDe": "OCR steht fur Optical Character Recognition. Wo muss geschriebener Text aus einem visuellen Medium gelesen werden?",
		"explanationDe": "OCR extrahiert Text aus Bildern und gescannten Dokumenten.",
		"optionsDe": [
			"Stimmung in Kundenfeedback erkennen",
			"Text auf gescannten Formularen auslesen",
			"Objekte in Echtzeit tracken",
			"Sprache in Audio erkennen"
		]
	},
	{
		"id": "q9",
		"topic": "Computer Vision",
		"prompt": "Object detection typically provides...",
		"hint": "Object detection not only finds what is in the image, but also where it is located.",
		"options": [
			"a single class probability for the whole image",
			"Bounding boxes and classes for recognized objects",
			"just sentiment values",
			"just a text summary"
		],
		"answerIndex": 1,
		"explanation": "Object detection locates objects and classifies them.",
		"promptDe": "Objekterkennung liefert typischerweise ...",
		"hintDe": "Objekterkennung findet nicht nur was im Bild ist, sondern auch wo es sich befindet.",
		"explanationDe": "Objekterkennung lokalisiert Objekte und klassifiziert sie.",
		"optionsDe": [
			"eine einzelne Klassenwahrscheinlichkeit fur das ganze Bild",
			"Bounding Boxes und Klassen fur erkannte Objekte",
			"nur Sentimentwerte",
			"nur eine Textzusammenfassung"
		]
	},
	{
		"id": "q10",
		"topic": "NLP",
		"prompt": "A service should automatically recognize the language in texts.",
		"hint": "Which NLP function determines whether a text is written in German, English or French, for example?",
		"options": [
			"Language Detection",
			"Sentiment Analysis",
			"OCR",
			"Topic Modeling"
		],
		"answerIndex": 0,
		"explanation": "Language detection determines the language directly.",
		"promptDe": "Ein Dienst soll automatisch die Sprache in Texten erkennen.",
		"hintDe": "Welche NLP-Funktion bestimmt, ob ein Text z.B. auf Deutsch, Englisch oder Franzosisch geschrieben ist?",
		"explanationDe": "Language Detection bestimmt die Sprache direkt.",
		"optionsDe": [
			"Language Detection",
			"Sentiment Analysis",
			"OCR",
			"Topic Modeling"
		]
	},
	{
		"id": "q11",
		"topic": "NLP",
		"prompt": "Which function recognizes positive, negative or neutral statements?",
		"hint": "It's about the mood or opinion in a text. What analysis evaluates exactly that?",
		"options": [
			"Sentiment Analysis",
			"Entity linking",
			"Part-of-speech tagging",
			"OCR"
		],
		"answerIndex": 0,
		"explanation": "Sentiment Analysis evaluates the mood in text.",
		"promptDe": "Welche Funktion erkennt positive, negative oder neutrale Aussagen?",
		"hintDe": "Es geht um die Stimmung oder Meinung in einem Text. Welche Analyse bewertet genau das?",
		"explanationDe": "Sentiment Analysis bewertet die Stimmung in Text.",
		"optionsDe": [
			"Sentiment Analysis",
			"Entity Linking",
			"Part-of-Speech Tagging",
			"OCR"
		]
	},
	{
		"id": "q12",
		"topic": "NLP",
		"prompt": "Named Entity Recognition is primarily used to...",
		"hint": "The name says it all: it's about recognizing named things in texts.",
		"options": [
			"Divide images into categories",
			"Extract entities such as people, places and organizations",
			"Transcribe audio",
			"Retrain models"
		],
		"answerIndex": 1,
		"explanation": "NER highlights and classifies relevant entities in the text.",
		"promptDe": "Named Entity Recognition dient primar dazu ...",
		"hintDe": "Der Name sagt es schon: Es geht um das Erkennen von benannten Dingen in Texten.",
		"explanationDe": "NER markiert und klassifiziert relevante Entitaten im Text.",
		"optionsDe": [
			"Bilder in Kategorien einzuteilen",
			"Entitaten wie Personen, Orte und Organisationen zu extrahieren",
			"Audio zu transkribieren",
			"Modelle neu zu trainieren"
		]
	},
	{
		"id": "q13",
		"topic": "Generative AI",
		"prompt": "Which Azure service is intended for prompt-based text generation?",
		"hint": "Which Azure service provides the well-known GPT models?",
		"options": [
			"Azure OpenAI Service",
			"Azure AI Search",
			"Azure AI Vision",
			"Azure DNS"
		],
		"answerIndex": 0,
		"explanation": "Azure OpenAI Service provides models for generative prompts.",
		"promptDe": "Welcher Azure-Dienst ist fur promptbasierte Textgenerierung gedacht?",
		"hintDe": "Welcher Azure-Dienst stellt die bekannten GPT-Modelle bereit?",
		"explanationDe": "Azure OpenAI Service stellt Modelle fur generative Prompts bereit.",
		"optionsDe": [
			"Azure OpenAI Service",
			"Azure AI Search",
			"Azure AI Vision",
			"Azure DNS"
		]
	},
	{
		"id": "q14",
		"topic": "Generative AI",
		"prompt": "What is a typical goal of prompt engineering?",
		"hint": "Prompt engineering is about how best to explain its task to the model.",
		"options": [
			"Optimize GPU temperature",
			"Improve model outputs with clear instructions and context",
			"Replace database indexes",
			"Just halve the latency"
		],
		"answerIndex": 1,
		"explanation": "Prompt engineering controls the quality and relevance of output.",
		"promptDe": "Was ist ein typisches Ziel von Prompt Engineering?",
		"hintDe": "Beim Prompt Engineering geht es darum, wie man dem Modell seine Aufgabe am besten erklart.",
		"explanationDe": "Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.",
		"optionsDe": [
			"GPU-Temperatur optimieren",
			"Modellausgaben durch klare Anweisungen und Kontext verbessern",
			"Datenbankindizes ersetzen",
			"Nur die Latenz halbieren"
		]
	},
	{
		"id": "q15",
		"topic": "Generative AI",
		"prompt": "Which approach reduces hallucinations in company data responses?",
		"hint": "Which procedure first provides the model with relevant documents as context?",
		"options": [
			"RAG with relevant sources",
			"Just increase the temperature",
			"Reduce context window",
			"Just avoid few-shot"
		],
		"answerIndex": 0,
		"explanation": "RAG provides the model with appropriate, current sources as context.",
		"promptDe": "Welcher Ansatz reduziert Halluzinationen in Antworten auf Unternehmensdaten?",
		"hintDe": "Welches Verfahren gibt dem Modell zuerst relevante Dokumente als Kontext mit?",
		"explanationDe": "RAG liefert dem Modell passende, aktuelle Quellen als Kontext.",
		"optionsDe": [
			"RAG mit relevanten Quellen",
			"Nur Temperatur erhohen",
			"Context Window reduzieren",
			"Nur Few-shot vermeiden"
		]
	},
	{
		"id": "q16",
		"topic": "Knowledge Mining",
		"prompt": "Indexing many documents and searching semantically fits...",
		"hint": "Which Azure service is specifically designed for searching large collections of documents?",
		"options": [
			"Azure AI Search",
			"Azure AI Face",
			"Azure Batch",
			"Azure Monitor"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Search is designed for indexing and search.",
		"promptDe": "Viele Dokumente indizieren und semantisch suchen passt zu ...",
		"hintDe": "Welcher Azure-Dienst ist speziell fur das Durchsuchen grosser Dokumentensammlungen gemacht?",
		"explanationDe": "Azure AI Search ist fur Indexierung und Suche ausgelegt.",
		"optionsDe": [
			"Azure AI Search",
			"Azure AI Face",
			"Azure Batch",
			"Azure Monitor"
		]
	},
	{
		"id": "q17",
		"topic": "Knowledge Mining",
		"prompt": "What is a key step in the knowledge mining workflow?",
		"hint": "Raw documents must first be prepared before they can be searched.",
		"options": [
			"Ignore documents",
			"Enrich and index content",
			"Only train models locally",
			"Manual search without index"
		],
		"answerIndex": 1,
		"explanation": "Enrichment and indexing make content searchable.",
		"promptDe": "Was ist ein zentraler Schritt im Knowledge-Mining-Workflow?",
		"hintDe": "Rohe Dokumente mussen erst aufbereitet werden, bevor man darin suchen kann.",
		"explanationDe": "Anreicherung und Indexierung machen Inhalte durchsuchbar.",
		"optionsDe": [
			"Dokumente ignorieren",
			"Inhalte anreichern und indexieren",
			"Nur Modelle lokal trainieren",
			"Manuelle Suche ohne Index"
		]
	},
	{
		"id": "q18",
		"topic": "Knowledge Mining",
		"prompt": "Semantic search differs from simple keyword search primarily in...",
		"hint": "Remember the difference between exact word matching and understanding meaning.",
		"options": [
			"just faster response time",
			"Understanding meaning and context",
			"less computing power per request",
			"Forced to use relational databases"
		],
		"answerIndex": 1,
		"explanation": "Semantic search takes the meaning of the content into account.",
		"promptDe": "Semantische Suche unterscheidet sich von einfacher Keyword-Suche vor allem durch ...",
		"hintDe": "Denk an den Unterschied zwischen exaktem Wortabgleich und dem Verstehen der Bedeutung.",
		"explanationDe": "Semantische Suche berucksichtigt die inhaltliche Bedeutung.",
		"optionsDe": [
			"nur schnellere Antwortzeit",
			"Verstandnis von Bedeutung und Kontext",
			"weniger Rechenleistung pro Anfrage",
			"Zwang zu relationalen Datenbanken"
		]
	},
	{
		"id": "q19",
		"topic": "Responsible AI",
		"prompt": "A model systematically disadvantages a group. Which principle is affected?",
		"hint": "What principle ensures that no one is treated unfairly?",
		"options": [
			"fairness",
			"transparency",
			"Inclusivity",
			"responsibility"
		],
		"answerIndex": 0,
		"explanation": "Unequal treatment between groups is a fairness problem.",
		"promptDe": "Ein Modell benachteiligt eine Gruppe systematisch. Welches Prinzip ist betroffen?",
		"hintDe": "Welches Prinzip stellt sicher, dass niemand ungerecht behandelt wird?",
		"explanationDe": "Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.",
		"optionsDe": [
			"Fairness",
			"Transparenz",
			"Inklusivitat",
			"Verantwortlichkeit"
		]
	},
	{
		"id": "q20",
		"topic": "Responsible AI",
		"prompt": "Which measure increases transparency in AI systems?",
		"hint": "Transparency means traceability. What helps to make decisions understandable?",
		"options": [
			"Deliver decisions without justification",
			"Document model inputs and decision logic",
			"Only allow proprietary formats",
			"Do not log errors"
		],
		"answerIndex": 1,
		"explanation": "Documentation and explainability make AI more understandable.",
		"promptDe": "Welche Massnahme erhoht Transparenz in KI-Systemen?",
		"hintDe": "Transparenz bedeutet Nachvollziehbarkeit. Was hilft, Entscheidungen verstandlich zu machen?",
		"explanationDe": "Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.",
		"optionsDe": [
			"Entscheidungen ohne Begrundung liefern",
			"Modellinputs und Entscheidungslogik dokumentieren",
			"Nur proprietare Formate erlauben",
			"Fehler nicht protokollieren"
		]
	},
	{
		"id": "q21",
		"topic": "Responsible AI",
		"prompt": "Which principle requires robust, safe model use?",
		"hint": "Which Responsible AI principle cares about stability and protection against errors?",
		"options": [
			"Inclusivity",
			"Reliability and security",
			"fairness",
			"Data density"
		],
		"answerIndex": 1,
		"explanation": "Reliability and safety are core principles of responsible AI.",
		"promptDe": "Welches Prinzip fordert robuste, sichere Modellnutzung?",
		"hintDe": "Welches Responsible-AI-Prinzip kummert sich um Stabilitat und Schutz vor Fehlern?",
		"explanationDe": "Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI.",
		"optionsDe": [
			"Inklusivitat",
			"Zuverlassigkeit und Sicherheit",
			"Fairness",
			"Datendichte"
		]
	},
	{
		"id": "q22",
		"topic": "Document AI",
		"prompt": "Extract invoice data such as amount and date matches...",
		"hint": "Which Azure service specializes in reading structured fields from documents?",
		"options": [
			"Azure AI Document Intelligence",
			"Azure AI Translator",
			"Azure AI Speech",
			"Azure AI Content Safety"
		],
		"answerIndex": 0,
		"explanation": "Document Intelligence extracts structured information from documents.",
		"promptDe": "Rechnungsdaten wie Betrag und Datum extrahieren passt zu ...",
		"hintDe": "Welcher Azure-Dienst ist darauf spezialisiert, strukturierte Felder aus Dokumenten herauszulesen?",
		"explanationDe": "Document Intelligence extrahiert strukturierte Informationen aus Dokumenten.",
		"optionsDe": [
			"Azure AI Document Intelligence",
			"Azure AI Translator",
			"Azure AI Speech",
			"Azure AI Content Safety"
		]
	},
	{
		"id": "q23",
		"topic": "Document AI",
		"prompt": "When do you use a custom extraction model?",
		"hint": "When are the standard models supplied not enough?",
		"options": [
			"When standard models do not cover the document structure well",
			"If there is no data",
			"When only audio is processed",
			"If you don't want to recognize any fields"
		],
		"answerIndex": 0,
		"explanation": "Custom models help with specific forms or layouts.",
		"promptDe": "Wann nutzt man ein benutzerdefiniertes Extraktionsmodell?",
		"hintDe": "Wann reichen die mitgelieferten Standardmodelle nicht aus?",
		"explanationDe": "Custom-Modelle helfen bei spezifischen Formularen oder Layouts.",
		"optionsDe": [
			"Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken",
			"Wenn keine Daten vorhanden sind",
			"Wenn nur Audio verarbeitet wird",
			"Wenn man keine Felder erkennen will"
		]
	},
	{
		"id": "q24",
		"topic": "Document AI",
		"prompt": "What result is typical with document intelligence?",
		"hint": "What do you get back when a document is analyzed? Think about more than just text.",
		"options": [
			"Just a PNG as output",
			"Structured fields including confidence values",
			"Just a numerical score",
			"Just prediction of language"
		],
		"answerIndex": 1,
		"explanation": "Extraction results usually contain recognized fields plus confidences.",
		"promptDe": "Welches Ergebnis ist bei Document Intelligence typisch?",
		"hintDe": "Was bekommt man zuruck, wenn ein Dokument analysiert wird? Denk an mehr als nur Text.",
		"explanationDe": "Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.",
		"optionsDe": [
			"Nur ein PNG als Ausgabe",
			"Strukturierte Felder inklusive Konfidenzwerten",
			"Nur ein numerischer Score",
			"Nur Vorhersage der Sprache"
		]
	},
	{
		"id": "q25",
		"type": "true-false",
		"topic": "Responsible AI",
		"prompt": "Statement: Fairness in AI means that all user groups should be treated equally.",
		"hint": "Consider whether fairness means balancing differences between groups or ignoring them.",
		"correctAnswer": "True",
		"explanation": "Fairness aims at fair treatment and avoids systematic disadvantage.",
		"promptDe": "Aussage: Fairness in KI bedeutet, dass alle Nutzergruppen gleich behandelt werden sollen.",
		"hintDe": "Uberlege, ob Fairness bedeutet, Unterschiede zwischen Gruppen auszugleichen oder sie zu ignorieren.",
		"explanationDe": "Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q26",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: Prompt engineering is only relevant for image models.",
		"hint": "Remember what types of models all work with prompts (text, code, images...).",
		"correctAnswer": "False",
		"explanation": "Prompt engineering is particularly central to text and code models.",
		"promptDe": "Aussage: Prompt Engineering ist nur fur Bildmodelle relevant.",
		"hintDe": "Denk daran, welche Arten von Modellen alle mit Prompts arbeiten (Text, Code, Bilder...).",
		"explanationDe": "Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral.",
		"correctAnswerDe": "Falsch"
	},
	{
		"id": "q27",
		"type": "true-false",
		"topic": "Machine Learning",
		"prompt": "Statement: A model can be very good on training data and still perform poorly on new data.",
		"hint": "This phenomenon has a well-known name in machine learning. Think about the balance between learning and generalizing.",
		"correctAnswer": "True",
		"explanation": "This is typical behavior with overfitting.",
		"promptDe": "Aussage: Ein Modell kann auf Trainingsdaten sehr gut sein und trotzdem auf neuen Daten schwach performen.",
		"hintDe": "Dieses Phanomen hat einen bekannten Namen in Machine Learning. Denk an die Balance zwischen Lernen und Generalisieren.",
		"explanationDe": "Das ist ein typisches Verhalten bei Overfitting.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q28",
		"type": "true-false",
		"topic": "Knowledge Mining",
		"prompt": "Statement: Semantic search takes meaning and context into account rather than just exact keywords.",
		"hint": "What makes semantic search different than a simple full-text search?",
		"correctAnswer": "True",
		"explanation": "This is exactly what distinguishes semantic search from pure keyword search.",
		"promptDe": "Aussage: Semantische Suche berucksichtigt Bedeutung und Kontext statt nur exakte Keywords.",
		"hintDe": "Was macht semantische Suche anders als eine einfache Volltextsuche?",
		"explanationDe": "Genau das unterscheidet semantische Suche von reiner Keyword-Suche.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q29",
		"topic": "AI Workloads",
		"prompt": "Which Azure service bundles many AI functions such as vision, speech and language under one roof?",
		"hint": "This collection service was previously called “Cognitive Services”. What is his name today?",
		"options": [
			"Azure AI Services",
			"Azure DevOps",
			"Azure Monitor",
			"Azure Logic Apps"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
		"promptDe": "Welcher Azure-Dienst bundelt viele KI-Funktionen wie Vision, Speech und Language unter einem Dach?",
		"hintDe": "Frueher hiess dieser Sammeldienst \"Cognitive Services\". Wie heisst er heute?",
		"explanationDe": "Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.",
		"optionsDe": [
			"Azure AI Services",
			"Azure DevOps",
			"Azure Monitor",
			"Azure Logic Apps"
		]
	},
	{
		"id": "q30",
		"topic": "AI Workloads",
		"prompt": "What describes the process of making a trained model available to end users?",
		"hint": "What do you call the step of deploying a model as an endpoint or service?",
		"options": [
			"Deployment",
			"Feature engineering",
			"Data wrangling",
			"Hyperparameter tuning"
		],
		"answerIndex": 0,
		"explanation": "Deployment is the act of making a model available as an endpoint or service.",
		"promptDe": "Was beschreibt den Prozess, ein trainiertes Modell fur Endnutzer verfugbar zu machen?",
		"hintDe": "Wie nennt man den Schritt, bei dem ein Modell als Endpunkt oder Service bereitgestellt wird?",
		"explanationDe": "Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.",
		"optionsDe": [
			"Deployment",
			"Feature Engineering",
			"Data Wrangling",
			"Hyperparameter Tuning"
		]
	},
	{
		"id": "q31",
		"type": "true-false",
		"topic": "AI Workloads",
		"prompt": "Statement: Azure AI Services can be accessed via REST APIs and SDKs.",
		"hint": "Consider how cloud services are typically addressed by developers.",
		"correctAnswer": "True",
		"explanation": "All Azure AI Services offer REST endpoints and client SDKs in multiple languages.",
		"promptDe": "Aussage: Azure AI Services konnen uber REST-APIs und SDKs angesprochen werden.",
		"hintDe": "Uberlege, wie Cloud-Dienste normalerweise von Entwicklern angesprochen werden.",
		"explanationDe": "Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q32",
		"topic": "Machine Learning",
		"prompt": "Which Azure component provides a drag-and-drop interface for building ML pipelines?",
		"hint": "There is a visual tool in Azure ML that requires no code.",
		"options": [
			"Azure Machine Learning Designer",
			"Azure Data Factory",
			"Azure Stream Analytics",
			"Azure Synapse"
		],
		"answerIndex": 0,
		"explanation": "The designer enables visual creation of ML workflows without code.",
		"promptDe": "Welche Azure-Komponente bietet eine Drag-and-Drop-Oberflache zum Erstellen von ML-Pipelines?",
		"hintDe": "Es gibt ein visuelles Werkzeug in Azure ML, das keinen Code erfordert.",
		"explanationDe": "Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.",
		"optionsDe": [
			"Azure Machine Learning Designer",
			"Azure Data Factory",
			"Azure Stream Analytics",
			"Azure Synapse"
		]
	},
	{
		"id": "q33",
		"topic": "Machine Learning",
		"prompt": "What is the main advantage of Automated ML (AutoML)?",
		"hint": "What does AutoML automate that would otherwise have to be laboriously done by hand?",
		"options": [
			"It automatically tests various algorithms and hyperparameters",
			"It completely replaces data collection",
			"It doesn't require any data",
			"It only works with image data"
		],
		"answerIndex": 0,
		"explanation": "AutoML automates model selection and tuning to find the best model.",
		"promptDe": "Was ist der Hauptvorteil von Automated ML (AutoML)?",
		"hintDe": "Was wird bei AutoML automatisiert, das man sonst muhsam von Hand machen musste?",
		"explanationDe": "AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.",
		"optionsDe": [
			"Es testet automatisch verschiedene Algorithmen und Hyperparameter",
			"Es ersetzt die Datensammlung komplett",
			"Es braucht keinerlei Daten",
			"Es funktioniert nur mit Bilddaten"
		]
	},
	{
		"id": "q34",
		"topic": "Machine Learning",
		"prompt": "What metric measures how often a classification model is right?",
		"hint": "What simple metric indicates the percentage of correct predictions?",
		"options": [
			"Accuracy",
			"Latency",
			"Throughput",
			"Overfitting rate"
		],
		"answerIndex": 0,
		"explanation": "Accuracy is the proportion of correct predictions out of the total.",
		"promptDe": "Welche Metrik misst, wie oft ein Klassifikationsmodell richtig liegt?",
		"hintDe": "Welche einfache Metrik gibt den prozentualen Anteil korrekter Vorhersagen an?",
		"explanationDe": "Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.",
		"optionsDe": [
			"Accuracy",
			"Latency",
			"Throughput",
			"Overfitting-Rate"
		]
	},
	{
		"id": "q35",
		"topic": "Machine Learning",
		"prompt": "What describes feature engineering?",
		"hint": "It's about preparing the input data before a model learns from it.",
		"options": [
			"Selecting and transforming input variables for a model",
			"Deploying a model to the cloud",
			"Deleting all training data",
			"Classifying images manually"
		],
		"answerIndex": 0,
		"explanation": "Feature engineering optimizes the input data so that the model learns better.",
		"promptDe": "Was beschreibt Feature Engineering?",
		"hintDe": "Es geht um die Vorbereitung der Eingabedaten, bevor ein Modell daraus lernt.",
		"explanationDe": "Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.",
		"optionsDe": [
			"Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell",
			"Das Deployen eines Modells in die Cloud",
			"Das Loschen aller Trainingsdaten",
			"Das manuelle Klassifizieren von Bildern"
		]
	},
	{
		"id": "q36",
		"topic": "Machine Learning",
		"prompt": "Which method learns through rewards and punishments?",
		"hint": "Think of an agent learning through trial and error, much like a player in a game.",
		"options": [
			"Reinforcement learning",
			"Supervised learning",
			"Unsupervised learning",
			"Transfer learning"
		],
		"answerIndex": 0,
		"explanation": "Reinforcement learning optimizes actions based on reward signals.",
		"promptDe": "Welches Verfahren lernt durch Belohnungen und Bestrafungen?",
		"hintDe": "Denk an einen Agenten, der durch Versuch und Irrtum lernt, ahnlich wie ein Spieler in einem Spiel.",
		"explanationDe": "Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.",
		"optionsDe": [
			"Reinforcement Learning",
			"Supervised Learning",
			"Unsupervised Learning",
			"Transfer Learning"
		]
	},
	{
		"id": "q37",
		"type": "true-false",
		"topic": "Machine Learning",
		"prompt": "Statement: Supervised learning requires labeled training data.",
		"hint": "What does “supervised” mean? Who or what provides guidance when learning?",
		"correctAnswer": "True",
		"explanation": "Supervised learning uses input-output pairs (labels) for learning.",
		"promptDe": "Aussage: Bei Supervised Learning braucht man gelabelte Trainingsdaten.",
		"hintDe": "Was bedeutet \"supervised\" (beaufsichtigt)? Wer oder was gibt die Anleitung beim Lernen?",
		"explanationDe": "Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q38",
		"topic": "Machine Learning",
		"prompt": "You want to classify emails as spam or non-spam. What task is that?",
		"hint": "How many possible categories are there here? And what does it mean when there are exactly two?",
		"options": [
			"Binary classification",
			"Regression",
			"Clustering",
			"Anomaly detection"
		],
		"answerIndex": 0,
		"explanation": "Two classes (spam/non-spam) are a binary classification task.",
		"promptDe": "Du willst E-Mails als Spam oder Nicht-Spam einstufen. Welche Aufgabe ist das?",
		"hintDe": "Wie viele mogliche Kategorien gibt es hier? Und was heisst es, wenn es genau zwei sind?",
		"explanationDe": "Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe.",
		"optionsDe": [
			"Binare Klassifikation",
			"Regression",
			"Clustering",
			"Anomalieerkennung"
		]
	},
	{
		"id": "q39",
		"topic": "Computer Vision",
		"prompt": "Which Azure service offers pre-built models for image analysis, facial recognition and OCR?",
		"hint": "Which Azure service has “Vision” in its name and covers everything related to image processing?",
		"options": [
			"Azure AI Vision",
			"Azure AI Translator",
			"Azure AI Speech",
			"Azure Cosmos DB"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
		"promptDe": "Welcher Azure-Dienst bietet vorgefertigte Modelle fur Bildanalyse, Gesichtserkennung und OCR?",
		"hintDe": "Welcher Azure-Dienst hat \"Vision\" im Namen und deckt alles rund um Bildverarbeitung ab?",
		"explanationDe": "Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.",
		"optionsDe": [
			"Azure AI Vision",
			"Azure AI Translator",
			"Azure AI Speech",
			"Azure Cosmos DB"
		]
	},
	{
		"id": "q40",
		"topic": "Computer Vision",
		"prompt": "Which task assigns a class to each pixel of an image?",
		"hint": "It's not about the whole image, but about mapping at the pixel level.",
		"options": [
			"Semantic segmentation",
			"Image classification",
			"OCR",
			"Face detection"
		],
		"answerIndex": 0,
		"explanation": "Semantic segmentation classifies each pixel rather than just the entire image.",
		"promptDe": "Welche Aufgabe ordnet jedem Pixel eines Bildes eine Klasse zu?",
		"hintDe": "Es geht nicht um das ganze Bild, sondern um die Zuordnung auf Pixel-Ebene.",
		"explanationDe": "Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.",
		"optionsDe": [
			"Semantische Segmentierung",
			"Bildklassifikation",
			"OCR",
			"Face Detection"
		]
	},
	{
		"id": "q41",
		"topic": "Computer Vision",
		"prompt": "Azure AI Face can be used for...",
		"hint": "The name “Face” reveals a lot. What can you do with faces in pictures?",
		"options": [
			"Facial recognition and verification",
			"Speech recognition in audio data",
			"Text translation",
			"Database queries"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Face recognizes, analyzes and verifies faces in images.",
		"promptDe": "Azure AI Face kann verwendet werden fur ...",
		"hintDe": "Der Name \"Face\" verrat schon viel. Was kann man mit Gesichtern in Bildern alles machen?",
		"explanationDe": "Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.",
		"optionsDe": [
			"Gesichtserkennung und Verifizierung",
			"Spracherkennung in Audiodaten",
			"Textubersetzung",
			"Datenbankabfragen"
		]
	},
	{
		"id": "q42",
		"type": "true-false",
		"topic": "Computer Vision",
		"prompt": "Statement: Azure AI Vision can automatically generate captions.",
		"hint": "Consider whether modern image analysis services can also describe images, not just classify them.",
		"correctAnswer": "True",
		"explanation": "The Image Captioning function creates automatic descriptions of image content.",
		"promptDe": "Aussage: Azure AI Vision kann automatisch Bildunterschriften (Captions) generieren.",
		"hintDe": "Uberlege, ob moderne Bildanalyse-Dienste Bilder auch beschreiben konnen, nicht nur klassifizieren.",
		"explanationDe": "Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q43",
		"topic": "NLP",
		"prompt": "Which Azure service automatically translates text between languages?",
		"hint": "The name of this service accurately describes its function: translation.",
		"options": [
			"Azure AI Translator",
			"Azure AI Vision",
			"Azure AI Search",
			"Azure Monitor"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Translator offers neural machine translation.",
		"promptDe": "Welcher Azure-Dienst ubersetzt Text automatisch zwischen Sprachen?",
		"hintDe": "Der Name dieses Dienstes beschreibt genau seine Funktion: Ubersetzung.",
		"explanationDe": "Azure AI Translator bietet neuronale maschinelle Ubersetzung.",
		"optionsDe": [
			"Azure AI Translator",
			"Azure AI Vision",
			"Azure AI Search",
			"Azure Monitor"
		]
	},
	{
		"id": "q44",
		"topic": "NLP",
		"prompt": "Key Phrase Extraction is used to...",
		"hint": "The name gives it away: Key phrases are extracted from something.",
		"options": [
			"extract the most important terms from a text",
			"Classify images",
			"Convert audio to text",
			"Index databases"
		],
		"answerIndex": 0,
		"explanation": "Key Phrase Extraction identifies the central themes of a text.",
		"promptDe": "Key Phrase Extraction dient dazu ...",
		"hintDe": "Der Name verrat es: Es werden Schlusselbegriffe (Key Phrases) aus etwas herausgezogen.",
		"explanationDe": "Key Phrase Extraction identifiziert die zentralen Themen eines Texts.",
		"optionsDe": [
			"die wichtigsten Begriffe aus einem Text herauszuziehen",
			"Bilder zu klassifizieren",
			"Audio in Text umzuwandeln",
			"Datenbanken zu indexieren"
		]
	},
	{
		"id": "q45",
		"topic": "NLP",
		"prompt": "Which service converts spoken language into text?",
		"hint": "Audio in, text out. Which Azure service does exactly this?",
		"options": [
			"Azure AI Speech (Speech-to-Text)",
			"Azure AI Vision",
			"Azure AI Search",
			"Azure AI Face"
		],
		"answerIndex": 0,
		"explanation": "Speech-to-Text transcribes audio into written text.",
		"promptDe": "Welcher Dienst wandelt gesprochene Sprache in Text um?",
		"hintDe": "Audio rein, Text raus. Welcher Azure-Dienst macht genau das?",
		"explanationDe": "Speech-to-Text transkribiert Audio in geschriebenen Text.",
		"optionsDe": [
			"Azure AI Speech (Speech-to-Text)",
			"Azure AI Vision",
			"Azure AI Search",
			"Azure AI Face"
		]
	},
	{
		"id": "q46",
		"topic": "NLP",
		"prompt": "Which service converts text into spoken speech?",
		"hint": "This time the other way around: text in, language out. Which service synthesizes speech?",
		"options": [
			"Azure AI Speech (Text-to-Speech)",
			"Azure AI Translator",
			"Azure AI Vision",
			"Azure AI Search"
		],
		"answerIndex": 0,
		"explanation": "Text-to-speech synthesizes natural-sounding speech from text.",
		"promptDe": "Welcher Dienst wandelt Text in gesprochene Sprache um?",
		"hintDe": "Diesmal andersherum: Text rein, Sprache raus. Welcher Dienst synthetisiert Sprache?",
		"explanationDe": "Text-to-Speech synthetisiert naturlich klingende Sprache aus Text.",
		"optionsDe": [
			"Azure AI Speech (Text-to-Speech)",
			"Azure AI Translator",
			"Azure AI Vision",
			"Azure AI Search"
		]
	},
	{
		"id": "q47",
		"type": "true-false",
		"topic": "NLP",
		"prompt": "Statement: Azure AI Language can create question-answer pairs from documents (Question Answering).",
		"hint": "Can a language service prepare knowledge from documents in such a way that questions can be answered?",
		"correctAnswer": "True",
		"explanation": "Custom Question Answering makes it possible to create knowledge bases from documents.",
		"promptDe": "Aussage: Azure AI Language kann Frage-Antwort-Paare aus Dokumenten erstellen (Question Answering).",
		"hintDe": "Kann ein Sprachdienst Wissen aus Dokumenten so aufbereiten, dass Fragen darauf beantwortet werden?",
		"explanationDe": "Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q48",
		"topic": "NLP",
		"prompt": "A chatbot is intended to answer common customer queries automatically. Which Azure combination is suitable?",
		"hint": "A chatbot needs two things: a source of knowledge for answers and a channel for communication.",
		"options": [
			"Azure AI Language (Question Answering) + Azure Bot Service",
			"Azure AI Vision + Azure Batch",
			"Azure AI Search + Azure DNS",
			"Azure AI Face + Azure Monitor"
		],
		"answerIndex": 0,
		"explanation": "Question Answering provides the answers, Bot Service provides the chatbot channel.",
		"promptDe": "Ein Chatbot soll haufige Kundenanfragen automatisiert beantworten. Welche Azure-Kombination passt?",
		"hintDe": "Ein Chatbot braucht zwei Dinge: eine Wissensquelle fur Antworten und einen Kanal fur die Kommunikation.",
		"explanationDe": "Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.",
		"optionsDe": [
			"Azure AI Language (Question Answering) + Azure Bot Service",
			"Azure AI Vision + Azure Batch",
			"Azure AI Search + Azure DNS",
			"Azure AI Face + Azure Monitor"
		]
	},
	{
		"id": "q49",
		"topic": "Generative AI",
		"prompt": "Which model in Azure OpenAI can generate images?",
		"hint": "Which well-known model of OpenAI creates images from text descriptions?",
		"options": [
			"DALL E",
			"Whispers",
			"GPT-4",
			"Ada"
		],
		"answerIndex": 0,
		"explanation": "DALL-E generates images based on text descriptions.",
		"promptDe": "Welches Modell in Azure OpenAI kann Bilder generieren?",
		"hintDe": "Welches bekannte Modell von OpenAI erstellt Bilder aus Textbeschreibungen?",
		"explanationDe": "DALL-E generiert Bilder basierend auf Textbeschreibungen.",
		"optionsDe": [
			"DALL-E",
			"Whisper",
			"GPT-4",
			"Ada"
		]
	},
	{
		"id": "q50",
		"topic": "Generative AI",
		"prompt": "What is meant by the “Temperature” parameter in GPT models?",
		"hint": "Temperature affects how predictable or surprising the answers are.",
		"options": [
			"He controls the creativity or randomness of the expenditure",
			"It determines the GPU temperature",
			"He sets the response time",
			"It sets the maximum token length"
		],
		"answerIndex": 0,
		"explanation": "Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
		"promptDe": "Was versteht man unter dem \"Temperature\"-Parameter bei GPT-Modellen?",
		"hintDe": "Temperature beeinflusst, wie vorhersehbar oder uberraschend die Antworten ausfallen.",
		"explanationDe": "Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.",
		"optionsDe": [
			"Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben",
			"Er bestimmt die GPU-Temperatur",
			"Er legt die Antwortzeit fest",
			"Er setzt die maximale Tokenlange"
		]
	},
	{
		"id": "q51",
		"topic": "Generative AI",
		"prompt": "What is the “Context Window” of an LLM?",
		"hint": "Each model has a cap on the amount of text it can see at once.",
		"options": [
			"The maximum amount of text (tokens) the model can process at one time",
			"The window in the Azure UI",
			"The number of GPU cores",
			"The training duration in hours"
		],
		"answerIndex": 0,
		"explanation": "The context window limits input + output tokens per request.",
		"promptDe": "Was ist das \"Context Window\" eines LLM?",
		"hintDe": "Jedes Modell hat eine Obergrenze fur die Menge an Text, die es auf einmal sehen kann.",
		"explanationDe": "Das Context Window begrenzt Input + Output Tokens pro Anfrage.",
		"optionsDe": [
			"Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann",
			"Das Fenster in der Azure-UI",
			"Die Anzahl der GPU-Kerne",
			"Die Trainingsdauer in Stunden"
		]
	},
	{
		"id": "q52",
		"topic": "Generative AI",
		"prompt": "What is a \"System Message\" in Azure OpenAI?",
		"hint": "The system message is placed before the actual user question. What could she give the model?",
		"options": [
			"A statement that specifies the behavior and role of the model",
			"An error message from the server",
			"A log entry in Azure Monitor",
			"An automatically generated report"
		],
		"answerIndex": 0,
		"explanation": "The system message defines persona, rules and context for the model.",
		"promptDe": "Was ist ein \"System Message\" bei Azure OpenAI?",
		"hintDe": "Die System Message wird vor der eigentlichen Nutzerfrage gesetzt. Was konnte sie dem Modell mitgeben?",
		"explanationDe": "Die System Message definiert Persona, Regeln und Kontext fur das Modell.",
		"optionsDe": [
			"Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt",
			"Eine Fehlermeldung vom Server",
			"Ein Log-Eintrag in Azure Monitor",
			"Ein automatisch generierter Report"
		]
	},
	{
		"id": "q53",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: Azure OpenAI Service offers the same models as OpenAI, but with Azure security features.",
		"hint": "Consider why Microsoft offers the same models again in Azure. What added value does this bring?",
		"correctAnswer": "True",
		"explanation": "Azure OpenAI combines OpenAI models with Azure network security, RBAC, and compliance.",
		"promptDe": "Aussage: Azure OpenAI Service bietet dieselben Modelle wie OpenAI, aber mit Azure-Sicherheitsfeatures.",
		"hintDe": "Uberlege, warum Microsoft die gleichen Modelle nochmals in Azure anbietet. Welchen Mehrwert bringt das?",
		"explanationDe": "Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q54",
		"topic": "Generative AI",
		"prompt": "What does “grounding” mean in the context of generative AI?",
		"hint": "Grounding literally means “anchoring”. What are the answers anchored in?",
		"options": [
			"Base answers on factual, verifiable information",
			"Physically ground the model",
			"Regulate GPU voltage",
			"Minimize network latency"
		],
		"answerIndex": 0,
		"explanation": "Grounding connects model answers with real, current data sources.",
		"promptDe": "Was bedeutet \"Grounding\" im Kontext generativer KI?",
		"hintDe": "Grounding bedeutet woertlich \"Verankerung\". Worin werden die Antworten verankert?",
		"explanationDe": "Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.",
		"optionsDe": [
			"Antworten auf faktische, verifizierbare Informationen stutzen",
			"Das Modell physisch erden",
			"GPU-Spannung regulieren",
			"Netzwerklatenz minimieren"
		]
	},
	{
		"id": "q55",
		"topic": "Generative AI",
		"prompt": "Microsoft Copilot is primarily based on...",
		"hint": "Copilot is an AI assistant in Microsoft products. What technology is behind it?",
		"options": [
			"Large language models (LLMs) with access to user data and context",
			"Rule-based if-then decisions",
			"Keyword search only",
			"Only locally trained models"
		],
		"answerIndex": 0,
		"explanation": "Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
		"promptDe": "Microsoft Copilot basiert primaer auf ...",
		"hintDe": "Copilot ist ein KI-Assistent in Microsoft-Produkten. Welche Technologie steckt dahinter?",
		"explanationDe": "Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).",
		"optionsDe": [
			"Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext",
			"Regelbasierten If-Then-Entscheidungen",
			"Nur Keyword-Suche",
			"Ausschliesslich lokal trainierten Modellen"
		]
	},
	{
		"id": "q56",
		"topic": "Knowledge Mining",
		"prompt": "What role do “skill sets” play in Azure AI Search?",
		"hint": "Skillsets add AI skills during a specific step. Which step is this?",
		"options": [
			"They enrich documents with AI capabilities during indexing",
			"You define user permissions",
			"You control the network configuration",
			"You define backup strategies"
		],
		"answerIndex": 0,
		"explanation": "Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
		"promptDe": "Welche Rolle spielen \"Skillsets\" in Azure AI Search?",
		"hintDe": "Skillsets fugen wahrend eines bestimmten Schritts KI-Fahigkeiten hinzu. Welcher Schritt ist das?",
		"explanationDe": "Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.",
		"optionsDe": [
			"Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an",
			"Sie definieren Benutzerberechtigungen",
			"Sie steuern die Netzwerkkonfiguration",
			"Sie legen Backup-Strategien fest"
		]
	},
	{
		"id": "q57",
		"topic": "Knowledge Mining",
		"prompt": "What is a knowledge store in Azure AI Search?",
		"hint": "Where does the enriched data go if you need it not only for search but also for other purposes?",
		"options": [
			"A secondary storage for enriched content for further processing",
			"A Git repository for code",
			"A DNS record",
			"A backup database"
		],
		"answerIndex": 0,
		"explanation": "The Knowledge Store stores extracted and enriched data for analysis outside of search.",
		"promptDe": "Was ist ein \"Knowledge Store\" in Azure AI Search?",
		"hintDe": "Wohin gehen die angereicherten Daten, wenn man sie nicht nur fur die Suche, sondern auch fur andere Zwecke braucht?",
		"explanationDe": "Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.",
		"optionsDe": [
			"Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung",
			"Ein Git-Repository fur Code",
			"Ein DNS-Eintrag",
			"Eine Backup-Datenbank"
		]
	},
	{
		"id": "q58",
		"type": "true-false",
		"topic": "Knowledge Mining",
		"prompt": "Statement: Azure AI Search can index data from Blob Storage, SQL and Cosmos DB.",
		"hint": "Consider whether Azure AI Search only supports a single data source or is more flexible.",
		"correctAnswer": "True",
		"explanation": "Azure AI Search supports multiple data sources via built-in indexers.",
		"promptDe": "Aussage: Azure AI Search kann Daten aus Blob Storage, SQL und Cosmos DB indexieren.",
		"hintDe": "Uberlege, ob Azure AI Search nur eine einzige Datenquelle unterstutzt oder flexibler ist.",
		"explanationDe": "Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q59",
		"topic": "Responsible AI",
		"prompt": "Which Responsible AI principle requires that AI systems be usable for as many people as possible?",
		"hint": "Which principle ensures that no one is excluded from use?",
		"options": [
			"Inclusivity",
			"fairness",
			"transparency",
			"Data protection"
		],
		"answerIndex": 0,
		"explanation": "Inclusivity ensures that AI solutions do not exclude anyone.",
		"promptDe": "Welches Responsible-AI-Prinzip fordert, dass KI-Systeme fur moglichst viele Menschen nutzbar sind?",
		"hintDe": "Welches Prinzip stellt sicher, dass niemand von der Nutzung ausgeschlossen wird?",
		"explanationDe": "Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.",
		"optionsDe": [
			"Inklusivitat",
			"Fairness",
			"Transparenz",
			"Datenschutz"
		]
	},
	{
		"id": "q60",
		"topic": "Responsible AI",
		"prompt": "What principle requires that humans be able to review and correct AI decisions?",
		"hint": "Who is ultimately responsible for AI decisions? It's not the machines.",
		"options": [
			"Accountability",
			"Data protection",
			"Creativity",
			"performance"
		],
		"answerIndex": 0,
		"explanation": "Accountability means that people remain in control and bear responsibility.",
		"promptDe": "Welches Prinzip fordert, dass Menschen KI-Entscheidungen uberprufen und korrigieren konnen?",
		"hintDe": "Wer tragt am Ende die Verantwortung fur KI-Entscheidungen? Es sind nicht die Maschinen.",
		"explanationDe": "Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.",
		"optionsDe": [
			"Verantwortlichkeit (Accountability)",
			"Datenschutz",
			"Kreativitat",
			"Performance"
		]
	},
	{
		"id": "q61",
		"topic": "Responsible AI",
		"prompt": "Azure AI Content Safety is primarily used to...",
		"hint": "The name “Content Safety” suggests protection against certain types of content.",
		"options": [
			"Detect harmful or inappropriate content in text and images",
			"Optimize GPU performance",
			"Encrypt network traffic",
			"Compress databases"
		],
		"answerIndex": 0,
		"explanation": "Content Safety detects violence, hate, self-harm and sexual content.",
		"promptDe": "Azure AI Content Safety dient primaer dazu ...",
		"hintDe": "Der Name \"Content Safety\" deutet auf den Schutz vor bestimmten Arten von Inhalten hin.",
		"explanationDe": "Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.",
		"optionsDe": [
			"schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen",
			"GPU-Leistung zu optimieren",
			"Netzwerktraffic zu verschlusseln",
			"Datenbanken zu komprimieren"
		]
	},
	{
		"id": "q62",
		"type": "true-false",
		"topic": "Responsible AI",
		"prompt": "Statement: Microsoft's Responsible AI principles include fairness, reliability, privacy, inclusiveness, transparency and accountability.",
		"hint": "Pay attention to the principles mentioned. Are these actually the six official Microsoft principles?",
		"correctAnswer": "True",
		"explanation": "These are Microsoft’s six core Responsible AI principles.",
		"promptDe": "Aussage: Microsofts Responsible AI Prinzipien umfassen Fairness, Zuverlassigkeit, Datenschutz, Inklusivitat, Transparenz und Verantwortlichkeit.",
		"hintDe": "Zahle die genannten Prinzipien durch. Sind das tatsachlich die sechs offiziellen Microsoft-Prinzipien?",
		"explanationDe": "Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q63",
		"topic": "Document AI",
		"prompt": "Which prebuilt model in Document Intelligence is specifically optimized for invoices?",
		"hint": "There are ready-made models for common document types. Which model is named after the document type \"Invoice\"?",
		"options": [
			"Prebuilt Invoice Model",
			"Prebuilt Receipt Model",
			"Custom Neural Model",
			"Layout model"
		],
		"answerIndex": 0,
		"explanation": "The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
		"promptDe": "Welches vorgefertigte Modell in Document Intelligence ist speziell fur Rechnungen optimiert?",
		"hintDe": "Fur gaengige Dokumenttypen gibt es fertige Modelle. Welches Modell ist nach dem Dokumenttyp \"Rechnung\" benannt?",
		"explanationDe": "Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.",
		"optionsDe": [
			"Prebuilt Invoice Model",
			"Prebuilt Receipt Model",
			"Custom Neural Model",
			"Layout Model"
		]
	},
	{
		"id": "q64",
		"topic": "Document AI",
		"prompt": "What does the Document Intelligence layout model provide?",
		"hint": "The layout model analyzes the visual structure. What goes into the structure of a document?",
		"options": [
			"Text lines, tables, selection marks and document structure",
			"Just plain text without position data",
			"Only images from the document",
			"Just the page number"
		],
		"answerIndex": 0,
		"explanation": "The layout model recognizes the visual structure including tables and checkboxes.",
		"promptDe": "Was liefert das Layout-Modell von Document Intelligence?",
		"hintDe": "Das Layout-Modell analysiert die visuelle Struktur. Was gehoert alles zur Struktur eines Dokuments?",
		"explanationDe": "Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.",
		"optionsDe": [
			"Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur",
			"Nur den reinen Text ohne Positionsdaten",
			"Nur Bilder aus dem Dokument",
			"Nur die Seitenzahl"
		]
	},
	{
		"id": "q65",
		"type": "true-false",
		"topic": "Document AI",
		"prompt": "Statement: Document Intelligence can use both pre-built and custom models.",
		"hint": "Consider whether the service can only process standard documents or can also be adapted to your own formats.",
		"correctAnswer": "True",
		"explanation": "There are prebuilt models for common documents and custom models for specific layouts.",
		"promptDe": "Aussage: Document Intelligence kann sowohl vorgefertigte als auch benutzerdefinierte Modelle nutzen.",
		"hintDe": "Uberlege, ob der Dienst nur Standarddokumente verarbeiten kann oder auch an eigene Formate angepasst werden kann.",
		"explanationDe": "Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q66",
		"topic": "Machine Learning",
		"prompt": "What distinguishes deep learning from classic machine learning?",
		"hint": "Think about the number of layers in neural networks and what that means for feature extraction.",
		"options": [
			"Deep learning uses neural networks with many layers for automatic feature extraction",
			"Deep learning requires less data than classic ML",
			"Deep learning only works with text",
			"Deep learning replaces feature engineering with manual rules"
		],
		"answerIndex": 0,
		"explanation": "Deep neural networks automatically learn hierarchical features from large amounts of data.",
		"promptDe": "Was unterscheidet Deep Learning von klassischem Machine Learning?",
		"hintDe": "Denk an die Anzahl der Schichten in neuronalen Netzen und was das fur die Merkmalsextraktion bedeutet.",
		"explanationDe": "Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.",
		"optionsDe": [
			"Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion",
			"Deep Learning braucht weniger Daten als klassisches ML",
			"Deep Learning funktioniert nur mit Text",
			"Deep Learning ersetzt Feature Engineering durch manuelle Regeln"
		]
	},
	{
		"id": "q67",
		"topic": "Machine Learning",
		"prompt": "What is the Transformer Architecture?",
		"hint": "Transformers have a special mechanism that allows them to pay attention to all parts of the input at the same time.",
		"options": [
			"A neural network that uses self-attention to learn contextual relationships",
			"A hardware component in GPUs",
			"A database index type",
			"An Azure network protocol"
		],
		"answerIndex": 0,
		"explanation": "Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
		"promptDe": "Was ist die Transformer-Architektur?",
		"hintDe": "Transformer haben einen besonderen Mechanismus, der es ihnen erlaubt, auf alle Teile der Eingabe gleichzeitig zu achten.",
		"explanationDe": "Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.",
		"optionsDe": [
			"Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen",
			"Ein Hardware-Bauteil in GPUs",
			"Ein Datenbank-Index-Typ",
			"Ein Azure-Netzwerkprotokoll"
		]
	},
	{
		"id": "q68",
		"type": "true-false",
		"topic": "Machine Learning",
		"prompt": "Statement: GPT and BERT are both based on the Transformer architecture.",
		"hint": "Both models use attention mechanisms, but in different ways. Do they have common ground?",
		"correctAnswer": "True",
		"explanation": "Both model families use transformers, but GPT is generative (decoder) and BERT is bidirectional (encoder).",
		"promptDe": "Aussage: GPT und BERT basieren beide auf der Transformer-Architektur.",
		"hintDe": "Beide Modelle nutzen Attention-Mechanismen, aber auf unterschiedliche Weise. Haben sie eine gemeinsame Basis?",
		"explanationDe": "Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder).",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q69",
		"topic": "Machine Learning",
		"prompt": "What are “features” and “labels” in an ML dataset?",
		"hint": "Think of a table: Which columns describe the data points, and which column should be predicted?",
		"options": [
			"Features are input variables, labels are the target values ​​to be predicted",
			"Features are outputs, labels are inputs",
			"Both are hyperparameters",
			"Features are numeric only, labels are text only"
		],
		"answerIndex": 0,
		"explanation": "Features (X) describe the data points, labels (Y) are the desired prediction targets.",
		"promptDe": "Was sind \"Features\" und \"Labels\" in einem ML-Dataset?",
		"hintDe": "Denk an eine Tabelle: Welche Spalten beschreiben die Datenpunkte, und welche Spalte soll vorhergesagt werden?",
		"explanationDe": "Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.",
		"optionsDe": [
			"Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte",
			"Features sind Ausgaben, Labels sind Eingaben",
			"Beides sind Hyperparameter",
			"Features sind nur numerisch, Labels nur Text"
		]
	},
	{
		"id": "q70",
		"topic": "Machine Learning",
		"prompt": "Why divide data into training and validation sets?",
		"hint": "How do you know whether a model has really learned or just memorized? You need unseen data.",
		"options": [
			"To check model performance on unseen data and detect overfitting",
			"Because Azure only accepts two files",
			"To save storage space",
			"Because training data never needs to be validated"
		],
		"answerIndex": 0,
		"explanation": "Validation data simulates new, unseen data and shows whether the model generalizes.",
		"promptDe": "Warum teilt man Daten in Training- und Validierungs-Sets?",
		"hintDe": "Woher weisst du, ob ein Modell wirklich gelernt hat oder nur auswendig kann? Du brauchst ungesehene Daten.",
		"explanationDe": "Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.",
		"optionsDe": [
			"Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen",
			"Weil Azure nur zwei Dateien akzeptiert",
			"Um Speicherplatz zu sparen",
			"Weil Trainingsdaten nie validiert werden mussen"
		]
	},
	{
		"id": "q71",
		"topic": "Machine Learning",
		"prompt": "Which Azure resource provides computing power for ML training?",
		"hint": "ML training requires computing power. Which Azure ML resource delivers exactly that?",
		"options": [
			"Azure Machine Learning Compute (Compute Instances and Clusters)",
			"Azure DNS",
			"Azure CDN",
			"Azure Key Vault"
		],
		"answerIndex": 0,
		"explanation": "Compute Instances are for development, Compute Clusters are for scalable training.",
		"promptDe": "Welche Azure-Ressource stellt Rechenleistung fur ML-Training bereit?",
		"hintDe": "ML-Training braucht Rechenpower. Welche Azure-ML-Ressource liefert genau das?",
		"explanationDe": "Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.",
		"optionsDe": [
			"Azure Machine Learning Compute (Compute Instances und Clusters)",
			"Azure DNS",
			"Azure CDN",
			"Azure Key Vault"
		]
	},
	{
		"id": "q72",
		"topic": "Generative AI",
		"prompt": "What is Azure AI Foundry?",
		"hint": "It used to be called Azure AI Studio. What can you do there with AI applications?",
		"options": [
			"A unified platform for building, testing and deploying AI applications",
			"A hardware manufacturer",
			"A pure storage service",
			"A network monitoring tool"
		],
		"answerIndex": 0,
		"explanation": "Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
		"promptDe": "Was ist Azure AI Foundry?",
		"hintDe": "Frueher hiess es Azure AI Studio. Was kann man dort alles mit KI-Anwendungen machen?",
		"explanationDe": "Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.",
		"optionsDe": [
			"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen",
			"Ein Hardware-Hersteller",
			"Ein reiner Speicherdienst",
			"Ein Netzwerk-Monitoring-Tool"
		]
	},
	{
		"id": "q73",
		"topic": "Generative AI",
		"prompt": "What does the Azure AI Foundry Model Catalog offer?",
		"hint": "A catalog is a collection. What can you find in an AI model catalog?",
		"options": [
			"A collection of pre-built AI models from various vendors for testing and deployment",
			"Microsoft proprietary models only",
			"Image generators only",
			"Hardware specifications"
		],
		"answerIndex": 0,
		"explanation": "The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
		"promptDe": "Was bietet der Azure AI Foundry Model Catalog?",
		"hintDe": "Ein Katalog ist eine Sammlung. Was findet man in einem Katalog fur KI-Modelle?",
		"explanationDe": "Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.",
		"optionsDe": [
			"Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen",
			"Nur Microsoft-eigene Modelle",
			"Nur Bildgeneratoren",
			"Hardware-Spezifikationen"
		]
	},
	{
		"id": "q74",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: Azure AI Foundry makes it possible to compare and test different LLMs from the Model Catalog.",
		"hint": "If there is a catalog with many models, it would make sense to be able to compare them, right?",
		"correctAnswer": "True",
		"explanation": "The Model Catalog provides benchmarks and playground tests for various models.",
		"promptDe": "Aussage: Azure AI Foundry ermoglicht es, verschiedene LLMs aus dem Model Catalog zu vergleichen und zu testen.",
		"hintDe": "Wenn es einen Katalog mit vielen Modellen gibt, ware es sinnvoll, diese auch vergleichen zu konnen, oder?",
		"explanationDe": "Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle.",
		"correctAnswerDe": "Wahr"
	},
	{
		"id": "q75",
		"topic": "Generative AI",
		"prompt": "Which Responsible AI measure is particularly important specifically for generative AI?",
		"hint": "Generative models can generate problematic content. How can you prevent this?",
		"options": [
			"Content filtering to block malicious input and output",
			"Use only open source models",
			"Make all prompts public",
			"Always set the temperature to maximum"
		],
		"answerIndex": 0,
		"explanation": "Content filters in Azure OpenAI check prompts and responses for malicious content.",
		"promptDe": "Welche Responsible-AI-Massnahme ist spezifisch fur generative KI besonders wichtig?",
		"hintDe": "Generative Modelle konnen problematische Inhalte erzeugen. Wie kann man das verhindern?",
		"explanationDe": "Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.",
		"optionsDe": [
			"Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren",
			"Nur Open-Source-Modelle verwenden",
			"Alle Prompts offentlich machen",
			"Temperature immer auf Maximum setzen"
		]
	},
	{
		"id": "q76",
		"topic": "NLP",
		"prompt": "What is meant by language modeling?",
		"hint": "Think about autocomplete on your phone. The model predicts what comes next.",
		"options": [
			"Predicting the next word or token based on context",
			"Translating programming languages",
			"Creating language courses",
			"Compressing text files"
		],
		"answerIndex": 0,
		"explanation": "Language models learn statistical patterns in language and can generate or complete text.",
		"promptDe": "Was versteht man unter Language Modeling?",
		"hintDe": "Denk an die Autovervollstandigung auf deinem Handy. Das Modell sagt voraus, was als Nachstes kommt.",
		"explanationDe": "Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.",
		"optionsDe": [
			"Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext",
			"Das Ubersetzen von Programmiersprachen",
			"Das Erstellen von Sprachkursen",
			"Das Komprimieren von Textdateien"
		]
	},
	{
		"id": "q77",
		"topic": "Machine Learning",
		"prompt": "Where to deploy models trained in Azure ML as an endpoint?",
		"hint": "Azure ML provides managed endpoints for deployment. What are these called?",
		"options": [
			"Azure Machine Learning Managed Endpoints",
			"Azure DNS Zones",
			"Azure Active Directory",
			"Azure Key Vault"
		],
		"answerIndex": 0,
		"explanation": "Managed endpoints enable real-time and batch inference for deployed models.",
		"promptDe": "Wo kann man in Azure ML trainierte Modelle als Endpunkt bereitstellen?",
		"hintDe": "Azure ML bietet verwaltete Endpunkte fur die Bereitstellung. Wie heissen diese?",
		"explanationDe": "Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.",
		"optionsDe": [
			"Azure Machine Learning Managed Endpoints",
			"Azure DNS Zones",
			"Azure Active Directory",
			"Azure Key Vault"
		]
	},
	{
		"id": "q78",
		"type": "true-false",
		"topic": "Machine Learning",
		"prompt": "Statement: Convolutional Neural Networks (CNNs) are often used for image recognition tasks.",
		"hint": "CNNs have a special architecture. What type of data are they particularly suitable for?",
		"correctAnswer": "True",
		"explanation": "CNNs are specifically optimized for processing grid-shaped data such as images.",
		"promptDe": "Aussage: Convolutional Neural Networks (CNNs) werden haufig fur Bilderkennungsaufgaben eingesetzt.",
		"hintDe": "CNNs haben eine spezielle Architektur. Fur welche Art von Daten sind sie besonders gut geeignet?",
		"explanationDe": "CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert.",
		"correctAnswerDe": "Wahr"
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
		back: 'It classifies text sentiment, typically as positive, neutral, or negative.',
		frontDe: 'Was ist Sentiment Analysis?',
		backDe: 'Sie klassifiziert die Stimmung in Texten, typischerweise als positiv, neutral oder negativ.'
	},
	{
		id: 'f3',
		topic: 'Responsible AI',
		front: 'Name 2 Responsible AI principles.',
		back: 'Examples: fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability.',
		frontDe: 'Nenne 2 Responsible-AI-Prinzipien.',
		backDe: 'Beispiele: Fairness, Zuverlassigkeit und Sicherheit, Datenschutz und Sicherheit, Inklusivitat, Transparenz, Verantwortlichkeit.'
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
		back: 'For indexing, retrieval, and semantic search across large content collections.',
		frontDe: 'Wofur nutzt man Azure AI Search?',
		backDe: 'Fur Indexierung, Retrieval und semantische Suche in grossen Inhaltsbestanden.'
	},
	{
		id: 'f6',
		topic: 'Document AI',
		front: 'Typical use case for Document Intelligence',
		back: 'Automatically extract structured fields (for example totals, dates, vendor names) from invoices, forms, and receipts.',
		frontDe: 'Typischer Use Case fur Document Intelligence',
		backDe: 'Strukturierte Felder (z. B. Gesamtbetrag, Datum, Lieferant) aus Rechnungen, Formularen und Belegen automatisch extrahieren.'
	},
	{
		id: 'f7',
		topic: 'AI Workloads',
		front: 'Batch vs. Online Inference',
		back: 'Batch inference is for periodic bulk scoring; online inference is for low-latency real-time predictions.',
		frontDe: 'Batch vs. Online Inference',
		backDe: 'Batch-Inferenz ist fur periodische Mengenverarbeitung; Online-Inferenz fur Echtzeitvorhersagen mit niedriger Latenz.'
	},
	{
		id: 'f8',
		topic: 'Machine Learning',
		front: 'What is overfitting?',
		back: 'The model performs well on training data but poorly on unseen validation/test data.',
		frontDe: 'Was ist Overfitting?',
		backDe: 'Das Modell ist auf Trainingsdaten sehr gut, aber auf unbekannten Validierungs-/Testdaten schwach.'
	},
	{
		id: 'f9',
		topic: 'NLP',
		front: 'What does NER stand for?',
		back: 'Named Entity Recognition identifies and classifies entities like persons, locations, and organizations.',
		frontDe: 'Wofur steht NER?',
		backDe: 'Named Entity Recognition erkennt und klassifiziert Entitaten wie Personen, Orte und Organisationen.'
	},
	{
		id: 'f10',
		topic: 'Responsible AI',
		front: 'Why is transparency important?',
		back: 'It makes AI behavior and decisions explainable, traceable, and easier to audit.',
		frontDe: 'Warum ist Transparenz wichtig?',
		backDe: 'Sie macht KI-Verhalten und Entscheidungen erklarbar, nachvollziehbar und besser auditierbar.'
	},
	{
		id: 'f11',
		topic: 'Knowledge Mining',
		front: 'What is the benefit of semantic search?',
		back: 'It matches intent and context, not just exact keyword overlap.',
		frontDe: 'Was bringt semantische Suche?',
		backDe: 'Sie berucksichtigt Intention und Kontext statt nur exakter Keyword-Ubereinstimmung.'
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
		back: 'It automates model/algorithm selection and hyperparameter tuning to find a strong model faster.',
		frontDe: 'Was macht Azure AutoML?',
		backDe: 'Es automatisiert Modell-/Algorithmusauswahl und Hyperparameter-Tuning, um schneller ein starkes Modell zu finden.'
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
		back: 'Temperature controls output randomness: low is more deterministic, high is more diverse/creative.',
		frontDe: 'Temperature-Parameter bei GPT',
		backDe: 'Temperature steuert die Zufalligkeit: niedrig ist deterministischer, hoch ist variabler/kreativer.'
	},
	{
		id: 'f17',
		topic: 'GenAI',
		front: 'What is grounding?',
		back: 'Grounding ties model responses to trusted source context (for example via RAG) to reduce hallucinations.',
		frontDe: 'Was ist Grounding?',
		backDe: 'Grounding verankert Modellantworten in vertrauenswurdigem Quellenkontext (z. B. via RAG), um Halluzinationen zu reduzieren.'
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
		back: 'Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.',
		frontDe: 'Die 6 Responsible AI Prinzipien',
		backDe: 'Fairness, Zuverlassigkeit und Sicherheit, Datenschutz und Sicherheit, Inklusivitat, Transparenz und Verantwortlichkeit.'
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
		back: 'Prebuilt models cover common document types (invoices, receipts, IDs). Custom models are trained for domain-specific layouts.',
		frontDe: 'Prebuilt vs. Custom Models in Document Intelligence',
		backDe: 'Prebuilt-Modelle decken gängige Dokumenttypen ab (Rechnungen, Belege, Ausweise). Custom-Modelle werden fur domanenspezifische Layouts trainiert.'
	},
	{
		id: 'f25',
		topic: 'Knowledge Mining',
		front: 'What are skillsets in Azure AI Search?',
		back: 'Skillsets define enrichment steps (OCR, NER, sentiment, etc.) executed during indexing pipelines.',
		frontDe: 'Was sind Skillsets in Azure AI Search?',
		backDe: 'Skillsets definieren Anreicherungsschritte (OCR, NER, Sentiment usw.), die in der Indexierungspipeline laufen.'
	},
	{
		id: 'f26',
		topic: 'AI Workloads',
		front: 'What are Azure AI Services?',
		back: 'A collection of prebuilt AI APIs (for example Vision, Speech, Language, and Document Intelligence).',
		frontDe: 'Was sind Azure AI Services?',
		backDe: 'Eine Sammlung vorgefertigter KI-APIs (z. B. Vision, Speech, Language und Document Intelligence).'
	},
	{
		id: 'f27',
		topic: 'GenAI',
		front: 'What is Microsoft Copilot?',
		back: 'An AI assistant experience built on LLMs and integrated into Microsoft products with grounded enterprise context.',
		frontDe: 'Was ist Microsoft Copilot?',
		backDe: 'Ein KI-Assistent auf Basis von LLMs, integriert in Microsoft-Produkte und mit geerdetem Unternehmenskontext.'
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
		back: 'A central platform to build, evaluate, and deploy generative AI apps and agents (formerly Azure AI Studio).',
		frontDe: 'Was ist Azure AI Foundry?',
		backDe: 'Zentrale Plattform zum Erstellen, Bewerten und Bereitstellen generativer KI-Apps und Agenten (fruher Azure AI Studio).'
	},
	{
		id: 'f33',
		topic: 'GenAI',
		front: 'Azure AI Foundry Model Catalog',
		back: 'A catalog of foundation models from multiple providers for comparison, evaluation, and deployment.',
		frontDe: 'Azure AI Foundry Model Catalog',
		backDe: 'Ein Katalog von Foundation-Modellen verschiedener Anbieter zum Vergleichen, Bewerten und Bereitstellen.'
	},
	{
		id: 'f34',
		topic: 'NLP',
		front: 'What is language modeling?',
		back: 'Predicting the next token from prior context; this is the core training objective behind many LLMs.',
		frontDe: 'Was ist Language Modeling?',
		backDe: 'Vorhersage des nachsten Tokens aus vorherigem Kontext; das ist das Kern-Trainingsziel vieler LLMs.'
	}
];

export const glossaryTerms = [
	{
		term: 'Accountability',
		definition: 'People remain responsible for AI systems and their outcomes.',
		definitionDe: 'Menschen bleiben für KI-Systeme und deren Ergebnisse verantwortlich.'
	},
	{
		term: 'AI Agent',
		definition: 'Autonomous AI system that can plan, reason, and execute multi-step tasks.',
		definitionDe: 'Autonomes KI-System, das mehrstufige Aufgaben planen, bewerten und ausführen kann.'
	},
	{
		term: 'AutoML',
		definition: 'Automated model selection and hyperparameter tuning in Azure Machine Learning.',
		definitionDe: 'Automatisierte Modellauswahl und Hyperparameter-Tuning in Azure Machine Learning.'
	},
	{
		term: 'Azure AI Content Safety',
		definition: 'Azure service for detecting harmful content (violence, hate, etc.) in text and images.',
		definitionDe: 'Erkennung schädlicher Inhalte (Gewalt, Hass, etc.) in Text und Bildern.'
	},
	{
		term: 'Azure AI Document Intelligence',
		definition: 'OCR plus structured extraction of document fields.',
		definitionDe: 'OCR plus strukturierte Extraktion von Dokumentfeldern.'
	},
	{
		term: 'Azure AI Face',
		definition: 'Azure service for face detection, verification, identification, and facial attribute analysis.',
		definitionDe: 'Azure-Dienst für Gesichtserkennung, Verifizierung, Identifizierung und Gesichtsattribut-Analyse.'
	},
	{
		term: 'Azure AI Foundry',
		definition: 'Central Azure platform for developing, testing, and deploying AI applications (formerly AI Studio).',
		definitionDe: 'Zentrale Azure-Plattform zum Entwickeln, Testen und Bereitstellen von KI-Anwendungen (früher AI Studio).'
	},
	{
		term: 'Azure AI Language',
		definition: 'NLP service for sentiment analysis, NER, key phrases, question answering, and more.',
		definitionDe: 'NLP-Dienst für Sentiment, NER, Key Phrases, Question Answering und mehr.'
	},
	{
		term: 'Azure AI Search',
		definition: 'Azure service for AI-powered search with cognitive enrichment and semantic ranking.',
		definitionDe: 'Azure-Dienst für KI-gestützte Suche mit kognitiver Anreicherung und semantischem Ranking.'
	},
	{
		term: 'Azure AI Speech',
		definition: 'Azure service for speech-to-text, text-to-speech, and speech translation.',
		definitionDe: 'Dienst für Speech-to-Text, Text-to-Speech und Sprachübersetzung.'
	},
	{
		term: 'Azure AI Vision',
		definition: 'Azure service for image analysis, OCR, face detection, and image captioning.',
		definitionDe: 'Azure-Dienst für Bildanalyse, OCR, Gesichtserkennung und Bildunterschriften.'
	},
	{
		term: 'Azure Bot Service',
		definition: 'Platform for building and deploying chatbots across multiple channels.',
		definitionDe: 'Plattform zum Erstellen und Bereitstellen von Chatbots über mehrere Kanäle.'
	},
	{
		term: 'Azure Machine Learning',
		definition: 'Azure platform for building, training, deploying, and managing ML models at scale.',
		definitionDe: 'Azure-Plattform zum Erstellen, Trainieren, Bereitstellen und Verwalten von ML-Modellen.'
	},
	{
		term: 'Azure OpenAI Service',
		definition: 'Azure service for accessing generative foundation models.',
		definitionDe: 'Azure-Dienst für Zugriff auf generative Foundation Models.'
	},
	{
		term: 'CNN',
		definition: 'Convolutional Neural Network, specialized in image recognition and visual data processing.',
		definitionDe: 'Convolutional Neural Network, spezialisiert auf Bilderkennung und visuelle Datenverarbeitung.'
	},
	{
		term: 'Classification',
		definition: 'ML technique that predicts a categorical label for given input data.',
		definitionDe: 'ML-Technik, die eine kategoriale Bezeichnung für Eingabedaten vorhersagt.'
	},
	{
		term: 'Clustering',
		definition: 'Unsupervised technique that groups data points based on similarity without predefined labels.',
		definitionDe: 'Unüberwachte Technik, die Datenpunkte ohne vordefinierte Labels nach Ähnlichkeit gruppiert.'
	},
	{
		term: 'Computer Vision',
		definition: 'AI field for image and video understanding.',
		definitionDe: 'KI-Bereich für Bild- und Videoverständnis.'
	},
	{
		term: 'Copilot',
		definition: 'Microsoft AI assistant based on LLMs, embedded in products like Office and Windows.',
		definitionDe: 'Microsofts KI-Assistent basierend auf LLMs, eingebettet in Produkte wie Office und Windows.'
	},
	{
		term: 'Deep Learning',
		definition: 'Subfield of ML using deep neural networks that automatically learn features from data.',
		definitionDe: 'ML-Teilgebiet mit tiefen neuronalen Netzen, die Features automatisch aus Daten lernen.'
	},
	{
		term: 'Facial Detection',
		definition: 'Detecting the presence and location of human faces in images.',
		definitionDe: 'Erkennung und Lokalisierung menschlicher Gesichter in Bildern.'
	},
	{
		term: 'Fairness',
		definition: 'Avoiding bias so AI systems treat all groups equitably.',
		definitionDe: 'Vermeidung von Vorurteilen, damit KI alle Gruppen fair behandelt.'
	},
	{
		term: 'Feature',
		definition: 'Input variable in an ML dataset that the model uses for prediction.',
		definitionDe: 'Eingabevariable in einem ML-Dataset, die das Modell zur Vorhersage nutzt.'
	},
	{
		term: 'Feature Engineering',
		definition: 'Selection and transformation of input variables for better model performance.',
		definitionDe: 'Auswahl und Transformation von Eingabevariablen für bessere Modellleistung.'
	},
	{
		term: 'Generative AI',
		definition: 'Models that generate new content such as text, images, or code.',
		definitionDe: 'Modelle erzeugen neue Inhalte wie Text, Bilder oder Code.'
	},
	{
		term: 'Grounding',
		definition: 'Anchoring AI responses in factual, verifiable sources.',
		definitionDe: 'Verankerung von KI-Antworten in faktischen, verifizierbaren Quellen.'
	},
	{
		term: 'Halluzination',
		definition: 'When an LLM generates plausible-sounding but incorrect information.',
		definitionDe: 'Wenn ein LLM plausibel klingende, aber falsche Informationen generiert.'
	},
	{
		term: 'Image Classification',
		definition: 'Categorizing an entire image into a predefined class or category.',
		definitionDe: 'Einordnung eines gesamten Bildes in eine vordefinierte Klasse oder Kategorie.'
	},
	{
		term: 'Inclusiveness',
		definition: 'Designing AI that empowers and engages all people regardless of ability.',
		definitionDe: 'KI-Design, das alle Menschen unabhängig von Fähigkeiten einbezieht.'
	},
	{
		term: 'Inference',
		definition: 'Applying a trained model to new data.',
		definitionDe: 'Anwendung eines trainierten Modells auf neue Daten.'
	},
	{
		term: 'Key Phrase Extraction',
		definition: 'Identifying the main concepts and key phrases in unstructured text.',
		definitionDe: 'Identifikation der wichtigsten Konzepte und Schlüsselbegriffe in unstrukturiertem Text.'
	},
	{
		term: 'Knowledge Store',
		definition: 'Secondary storage for enriched content from Azure AI Search.',
		definitionDe: 'Sekundärer Speicher für angereicherte Inhalte aus Azure AI Search.'
	},
	{
		term: 'Label',
		definition: 'Target value in an ML dataset that the model should predict.',
		definitionDe: 'Zielwert in einem ML-Dataset, den das Modell vorhersagen soll.'
	},
	{
		term: 'Language Modeling',
		definition: 'Predicting the next token based on context. Core principle of generative language models.',
		definitionDe: 'Vorhersage des nächsten Tokens basierend auf Kontext. Grundprinzip generativer Sprachmodelle.'
	},
	{
		term: 'Large Language Model',
		definition: 'Neural network trained on massive text datasets to understand and generate language.',
		definitionDe: 'Neuronales Netz, trainiert auf riesigen Textdatensätzen zum Verstehen und Generieren von Sprache.'
	},
	{
		term: 'Machine Learning',
		definition: 'Models learn patterns from data and make predictions.',
		definitionDe: 'Modelle lernen Muster aus Daten und treffen Vorhersagen.'
	},
	{
		term: 'Model Catalog',
		definition: 'Collection of pre-built models in Azure AI Foundry from various providers.',
		definitionDe: 'Sammlung vorgefertigter Modelle in Azure AI Foundry von verschiedenen Anbietern.'
	},
	{
		term: 'Model Drift',
		definition: 'Shift in data patterns that can degrade model performance over time.',
		definitionDe: 'Verschiebung von Datenmustern, die Modellleistung über Zeit verschlechtern kann.'
	},
	{
		term: 'NLP',
		definition: 'Natural Language Processing: processing and understanding human language and text.',
		definitionDe: 'Natural Language Processing verarbeitet Sprache und Text.'
	},
	{
		term: 'Named Entity Recognition',
		definition: 'Identifying and classifying named entities such as people, places, and organizations in text.',
		definitionDe: 'Erkennung und Klassifikation benannter Entitäten wie Personen, Orte und Organisationen.'
	},
	{
		term: 'OCR',
		definition: 'Optical Character Recognition: extracting printed or handwritten text from images.',
		definitionDe: 'Optische Zeichenerkennung: Extraktion von gedrucktem oder handgeschriebenem Text aus Bildern.'
	},
	{
		term: 'Object Detection',
		definition: 'Identifying and locating specific objects within an image using bounding boxes.',
		definitionDe: 'Erkennung und Lokalisierung von Objekten in Bildern mittels Begrenzungsrahmen.'
	},
	{
		term: 'Overfitting',
		definition: 'Model fits training data too closely and generalizes poorly.',
		definitionDe: 'Modell passt zu stark auf Trainingsdaten und generalisiert schlechter.'
	},
	{
		term: 'Privacy and Security',
		definition: 'Protecting user data and ensuring AI systems resist unauthorized access.',
		definitionDe: 'Schutz von Nutzerdaten und Absicherung gegen unbefugten Zugriff.'
	},
	{
		term: 'Prompt',
		definition: 'Instruction given to a generative model.',
		definitionDe: 'Anweisung an ein generatives Modell.'
	},
	{
		term: 'Prompt Engineering',
		definition: 'Designing and optimizing prompts to get better, more relevant responses from AI models.',
		definitionDe: 'Entwerfen und Optimieren von Prompts für bessere, relevantere KI-Antworten.'
	},
	{
		term: 'RAG',
		definition: 'Retrieval-Augmented Generation: combining LLM responses with external sources.',
		definitionDe: 'Retrieval-Augmented Generation verbindet LLM-Antworten mit externen Quellen.'
	},
	{
		term: 'Regression',
		definition: 'ML technique that predicts continuous numeric values from input features.',
		definitionDe: 'ML-Technik, die kontinuierliche numerische Werte aus Eingabemerkmalen vorhersagt.'
	},
	{
		term: 'Reinforcement Learning',
		definition: 'Learning method where an agent learns optimal actions through rewards and penalties.',
		definitionDe: 'Agent lernt durch Belohnungen und Bestrafungen optimale Aktionen.'
	},
	{
		term: 'Reliability and Safety',
		definition: 'Ensuring AI behaves consistently and operates safely under expected conditions.',
		definitionDe: 'Sicherstellen, dass KI konsistent und unter erwarteten Bedingungen sicher arbeitet.'
	},
	{
		term: 'Responsible AI',
		definition: 'Principles for fair, safe, and transparent AI.',
		definitionDe: 'Prinzipien für faire, sichere und nachvollziehbare KI.'
	},
	{
		term: 'Semantic Search',
		definition: 'Search based on meaning and context, not just exact terms.',
		definitionDe: 'Suche auf Basis von Bedeutung und Kontext, nicht nur exakten Begriffen.'
	},
	{
		term: 'Sentiment Analysis',
		definition: 'Determining whether text expresses positive, negative, or neutral sentiment.',
		definitionDe: 'Bestimmung, ob ein Text positive, negative oder neutrale Stimmung ausdrückt.'
	},
	{
		term: 'Skillset',
		definition: 'AI enrichments in Azure AI Search applied during indexing.',
		definitionDe: 'KI-Anreicherungen in Azure AI Search, die beim Indexieren angewendet werden.'
	},
	{
		term: 'Speech Recognition',
		definition: 'Converting spoken language into text (Speech-to-Text).',
		definitionDe: 'Umwandlung gesprochener Sprache in Text (Speech-to-Text).'
	},
	{
		term: 'Speech Synthesis',
		definition: 'Generating natural-sounding speech from text (Text-to-Speech).',
		definitionDe: 'Erzeugung natürlich klingender Sprache aus Text (Text-to-Speech).'
	},
	{
		term: 'Supervised Learning',
		definition: 'Learning method using labeled training data (input-output pairs).',
		definitionDe: 'Lernverfahren mit gelabelten Trainingsdaten (Eingabe-Ausgabe-Paare).'
	},
	{
		term: 'Temperature',
		definition: 'LLM parameter: low = focused/deterministic, high = creative/more random.',
		definitionDe: 'Parameter bei LLMs: niedrig = fokussiert/deterministisch, hoch = kreativ/zufälliger.'
	},
	{
		term: 'Training Dataset',
		definition: 'Dataset used to train a model by learning patterns from labeled examples.',
		definitionDe: 'Datensatz zum Trainieren eines Modells anhand gelabelter Beispiele.'
	},
	{
		term: 'Transformer',
		definition: 'Neural network architecture with self-attention. Foundation of GPT, BERT, and modern LLMs.',
		definitionDe: 'Neuronale Netzarchitektur mit Self-Attention. Basis von GPT, BERT und modernen LLMs.'
	},
	{
		term: 'Translation',
		definition: 'Converting text or speech from one language to another using AI models.',
		definitionDe: 'Übersetzung von Text oder Sprache in eine andere Sprache mithilfe von KI-Modellen.'
	},
	{
		term: 'Transparency',
		definition: 'Making AI decisions understandable and explainable to users.',
		definitionDe: 'KI-Entscheidungen für Nutzer nachvollziehbar und erklärbar machen.'
	},
	{
		term: 'Unsupervised Learning',
		definition: 'Learning method without labels that finds patterns and structures independently (e.g. clustering).',
		definitionDe: 'Lernverfahren ohne Labels, findet Muster und Strukturen eigenständig (z.B. Clustering).'
	},
	{
		term: 'Validation Dataset',
		definition: 'Dataset for evaluating model performance on unseen data (generalization).',
		definitionDe: 'Datensatz zum Prüfen der Modellleistung auf ungesehenen Daten (Generalisierung).'
	}
];
