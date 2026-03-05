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
			"\"Every AI use case uses the same model and data flow.\" is not the best fit for this question. The correct answer is \"An AI workload combines data, model and inference for a specific goal.\". AI workloads vary by task, data, and operating constraints; they are not all identical.",
			"Correct: a workload is the complete path from data to model output for a defined business goal.",
			"\"An AI workload consists only of visualization.\" is not the best fit for this question. The correct answer is \"An AI workload combines data, model and inference for a specific goal.\". Visualization can be part of a solution, but it is not the workload itself.",
			"\"An AI workload only describes infrastructure costs.\" is not the best fit for this question. The correct answer is \"An AI workload combines data, model and inference for a specific goal.\". Infrastructure cost is one aspect, not the definition of an AI workload."
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
			"\"Jeder KI-Use-Case nutzt dasselbe Modell und denselben Datenfluss.\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.\". KI-Workloads unterscheiden sich je nach Aufgabe, Daten und Betriebsbedingungen.",
			"Richtig: Ein Workload umfasst den gesamten Weg von Daten bis zur Modellantwort fur ein klares Ziel.",
			"\"Ein KI-Workload besteht nur aus Visualisierung.\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.\". Visualisierung kann Teil der Losung sein, ist aber nicht der ganze Workload.",
			"\"Ein KI-Workload beschreibt nur Infrastrukturkosten.\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.\". Infrastrukturkosten sind nur ein Aspekt und nicht die Definition eines KI-Workloads."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
			"\"Online inference\" is not the best fit for this question. Online inference is intended for low-latency per-request predictions. The correct answer is \"Batch inference\". Online inference is designed for immediate per-request predictions.",
			"\"Streaming Translation\" is not the best fit for this question. The correct answer is \"Batch inference\". Streaming translation is a language task, not a general log-processing inference pattern.",
			"\"Prompt engineering\" is not the best fit for this question. Prompt engineering shapes model instructions and is not an inference execution mode. The correct answer is \"Batch inference\". Prompt engineering improves model prompts and is not an inference execution pattern."
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
			"\"Online Inference\" passt fur diese Frage nicht am besten. Online Inference ist fur Vorhersagen mit niedriger Latenz pro Anfrage ausgelegt. Die richtige Antwort ist \"Batch Inference\". Online Inference ist fur direkte Einzelvorhersagen in Echtzeit gedacht.",
			"\"Streaming Translation\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Batch Inference\". Streaming Translation ist eine Sprachaufgabe und kein allgemeines Inferenzmuster fur Logauswertung.",
			"\"Prompt Engineering\" passt fur diese Frage nicht am besten. Prompt Engineering gestaltet Instruktionen fur Modelle, ist aber kein Inferenzmodus. Die richtige Antwort ist \"Batch Inference\". Prompt Engineering verbessert Prompts, ist aber kein Ausfuhrungsmuster fur Inferenz."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
			"\"Deploy the model without monitoring\" is not the best fit for this question. The correct answer is \"Continuously monitor drift and performance\". Without monitoring, degradation can stay unnoticed in production.",
			"\"Work only with training metrics\" is not the best fit for this question. The correct answer is \"Continuously monitor drift and performance\". Training metrics alone do not reveal real-world drift or serving issues.",
			"Correct: continuous monitoring catches drift, quality drops, and failures early.",
			"\"Hide feedback\" is not the best fit for this question. The correct answer is \"Continuously monitor drift and performance\". Hiding feedback removes a key signal needed for model improvement."
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
			"\"Modell ohne Monitoring deployen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Drift und Performance kontinuierlich uberwachen\". Ohne Monitoring bleiben Verschlechterungen im Produktivbetrieb oft unbemerkt.",
			"\"Nur mit Trainingsmetriken arbeiten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Drift und Performance kontinuierlich uberwachen\". Trainingsmetriken allein zeigen keine Drift oder Serving-Probleme in der Praxis.",
			"Richtig: Kontinuierliches Monitoring erkennt Drift, Qualitatsverlust und Fehler fruhzeitig.",
			"\"Feedback ausblenden\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Drift und Performance kontinuierlich uberwachen\". Ohne Feedback fehlen wichtige Signale fur Verbesserungen am Modell."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
			"\"classification\" is not the best fit for this question. Classification predicts discrete labels rather than continuous values. The correct answer is \"Regression\". Classification predicts discrete classes, not continuous numeric values like price.",
			"Correct: regression predicts continuous numerical outputs such as house prices.",
			"\"Clustering\" is not the best fit for this question. Clustering groups data points without labeled target values. The correct answer is \"Regression\". Clustering groups similar points without predicting a target value.",
			"\"Anomaly detection\" is not the best fit for this question. The correct answer is \"Regression\". Anomaly detection flags outliers and is not a direct price prediction task."
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
			"\"Klassifikation\" passt fur diese Frage nicht am besten. Klassifikation sagt diskrete Klassen voraus, keine kontinuierlichen Zahlenwerte. Die richtige Antwort ist \"Regression\". Klassifikation sagt diskrete Klassen voraus, nicht kontinuierliche Zahlen wie Preise.",
			"Richtig: Regression sagt kontinuierliche numerische Zielwerte wie Hauspreise voraus.",
			"\"Clustering\" passt fur diese Frage nicht am besten. Clustering gruppiert Datenpunkte ohne gelabelte Zielvariable. Die richtige Antwort ist \"Regression\". Clustering gruppiert ahnliche Datenpunkte ohne expliziten Zielwert.",
			"\"Anomalieerkennung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Regression\". Anomalieerkennung findet Ausreisser und ist keine direkte Preisvorhersage."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
			"\"Training and testing are both bad\" is not the best fit for this question. The correct answer is \"Training is very good, testing is significantly worse\". If both are bad, that often indicates underfitting, not overfitting.",
			"Correct: strong training performance with weak test performance is the classic overfitting pattern.",
			"\"Model improves after each new data set\" is not the best fit for this question. The correct answer is \"Training is very good, testing is significantly worse\". Improvement after more data can happen and does not define overfitting.",
			"\"Training data is not used\" is not the best fit for this question. The correct answer is \"Training is very good, testing is significantly worse\". Overfitting still uses training data heavily; the problem is poor generalization."
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
			"\"Training und Test sind beide schlecht\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Training ist sehr gut, Test deutlich schlechter\". Sind Training und Test beide schlecht, spricht das eher fur Underfitting als fur Overfitting.",
			"Richtig: Sehr gute Trainingswerte bei deutlich schwacheren Testwerten sind das typische Overfitting-Muster.",
			"\"Modell verbessert sich nach jedem neuen Datensatz\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Training ist sehr gut, Test deutlich schlechter\". Verbesserung mit mehr Daten kann vorkommen und ist kein Overfitting-Kriterium.",
			"\"Trainingsdaten werden nicht benutzt\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Training ist sehr gut, Test deutlich schlechter\". Overfitting nutzt Trainingsdaten stark; das Problem ist die schwache Generalisierung."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"\"Supervised learning\" is not the best fit for this question. Supervised learning requires labeled training examples. The correct answer is \"Unsupervised learning\". Clustering without target variables is an unsupervised procedure.",
			"Correct: Clustering without target variables is an unsupervised procedure.",
			"\"Reinforcement learning\" is not the best fit for this question. Reinforcement learning optimizes action policies using reward signals. The correct answer is \"Unsupervised learning\". Reinforcement learning optimizes actions based on reward signals. Here the correct answer is \"Unsupervised learning\".",
			"\"Transfer learning\" is not the best fit for this question. Transfer learning reuses prior model knowledge and is not the core task type here. The correct answer is \"Unsupervised learning\". Clustering without target variables is an unsupervised procedure."
		],
		"optionExplanationsDe": [
			"\"Supervised Learning\" passt fur diese Frage nicht am besten. Supervised Learning braucht gelabelte Trainingsdaten. Die richtige Antwort ist \"Unsupervised Learning\". Clustering ohne Zielvariable ist ein unsupervised Verfahren.",
			"Richtig: Clustering ohne Zielvariable ist ein unsupervised Verfahren.",
			"\"Reinforcement Learning\" passt fur diese Frage nicht am besten. Reinforcement Learning optimiert Aktionen uber Reward-Signale. Die richtige Antwort ist \"Unsupervised Learning\". Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen. Hier ist die richtige Antwort \"Unsupervised Learning\".",
			"\"Transfer Learning\" passt fur diese Frage nicht am besten. Transfer Learning ubertragt vorhandenes Wissen, ist aber hier nicht der zentrale Aufgabentyp. Die richtige Antwort ist \"Unsupervised Learning\". Clustering ohne Zielvariable ist ein unsupervised Verfahren."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Image classification assigns a class to the image.",
			"\"Object detection\" is not the best fit for this question. Object detection localizes objects with bounding boxes, which is different from classifying a whole item. The correct answer is \"Image classification\". Image classification assigns a class to the image.",
			"\"Face verification\" is not the best fit for this question. Face verification checks whether two faces belong to the same person. The correct answer is \"Image classification\". Image classification assigns a class to the image.",
			"\"OCR\" is not the best fit for this question. OCR is focused on extracting text from images and documents. The correct answer is \"Image classification\". Image classification assigns a class to the image."
		],
		"optionExplanationsDe": [
			"Richtig: Bildklassifikation weist dem Bild eine Klasse zu.",
			"\"Objekterkennung\" passt fur diese Frage nicht am besten. Objekterkennung lokalisiert Objekte mit Bounding Boxes und ist etwas anderes als reine Klassifikation. Die richtige Antwort ist \"Bildklassifikation\". Bildklassifikation weist dem Bild eine Klasse zu.",
			"\"Face Verification\" passt fur diese Frage nicht am besten. Face Verification pruft, ob zwei Gesichter zur gleichen Person gehoren. Die richtige Antwort ist \"Bildklassifikation\". Bildklassifikation weist dem Bild eine Klasse zu.",
			"\"OCR\" passt fur diese Frage nicht am besten. OCR extrahiert Text aus Bildern oder Dokumenten. Die richtige Antwort ist \"Bildklassifikation\". Bildklassifikation weist dem Bild eine Klasse zu."
		],
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		],
		"optionExplanations": [
			"\"Recognize sentiment in customer feedback\" is not the best fit for this question. The correct answer is \"Read text on scanned forms\". OCR extracts text from images and scanned documents.",
			"Correct: OCR extracts text from images and scanned documents.",
			"\"Track objects in real time\" is not the best fit for this question. The correct answer is \"Read text on scanned forms\". OCR extracts text from images and scanned documents.",
			"\"Detect speech in audio\" is not the best fit for this question. The correct answer is \"Read text on scanned forms\". OCR extracts text from images and scanned documents."
		],
		"optionExplanationsDe": [
			"\"Stimmung in Kundenfeedback erkennen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Text auf gescannten Formularen auslesen\". OCR extrahiert Text aus Bildern und gescannten Dokumenten.",
			"Richtig: OCR extrahiert Text aus Bildern und gescannten Dokumenten.",
			"\"Objekte in Echtzeit tracken\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Text auf gescannten Formularen auslesen\". OCR extrahiert Text aus Bildern und gescannten Dokumenten.",
			"\"Sprache in Audio erkennen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Text auf gescannten Formularen auslesen\". OCR extrahiert Text aus Bildern und gescannten Dokumenten."
		],
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		],
		"optionExplanations": [
			"\"a single class probability for the whole image\" is not the best fit for this question. The correct answer is \"Bounding boxes and classes for recognized objects\". Object detection locates objects and classifies them.",
			"Correct: Object detection locates objects and classifies them.",
			"\"just sentiment values\" is not the best fit for this question. The correct answer is \"Bounding boxes and classes for recognized objects\". Object detection locates objects and classifies them.",
			"\"just a text summary\" is not the best fit for this question. The correct answer is \"Bounding boxes and classes for recognized objects\". Object detection locates objects and classifies them."
		],
		"optionExplanationsDe": [
			"\"eine einzelne Klassenwahrscheinlichkeit fur das ganze Bild\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bounding Boxes und Klassen fur erkannte Objekte\". Objekterkennung lokalisiert Objekte und klassifiziert sie.",
			"Richtig: Objekterkennung lokalisiert Objekte und klassifiziert sie.",
			"\"nur Sentimentwerte\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bounding Boxes und Klassen fur erkannte Objekte\". Objekterkennung lokalisiert Objekte und klassifiziert sie.",
			"\"nur eine Textzusammenfassung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bounding Boxes und Klassen fur erkannte Objekte\". Objekterkennung lokalisiert Objekte und klassifiziert sie."
		],
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Language detection determines the language directly.",
			"\"Sentiment Analysis\" is not the best fit for this question. The correct answer is \"Language Detection\". Sentiment Analysis evaluates the mood in text. Here the correct answer is \"Language Detection\".",
			"\"OCR\" is not the best fit for this question. OCR is focused on extracting text from images and documents. The correct answer is \"Language Detection\". Language detection determines the language directly.",
			"\"Topic Modeling\" is not the best fit for this question. The correct answer is \"Language Detection\". Language detection determines the language directly."
		],
		"optionExplanationsDe": [
			"Richtig: Language Detection bestimmt die Sprache direkt.",
			"\"Sentiment Analysis\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Language Detection\". Sentiment Analysis bewertet die Stimmung in Text. Hier ist die richtige Antwort \"Language Detection\".",
			"\"OCR\" passt fur diese Frage nicht am besten. OCR extrahiert Text aus Bildern oder Dokumenten. Die richtige Antwort ist \"Language Detection\". Language Detection bestimmt die Sprache direkt.",
			"\"Topic Modeling\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Language Detection\". Language Detection bestimmt die Sprache direkt."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Sentiment Analysis evaluates the mood in text.",
			"\"Entity linking\" is not the best fit for this question. The correct answer is \"Sentiment Analysis\". Sentiment Analysis evaluates the mood in text.",
			"\"Part-of-speech tagging\" is not the best fit for this question. The correct answer is \"Sentiment Analysis\". Sentiment Analysis evaluates the mood in text.",
			"\"OCR\" is not the best fit for this question. OCR is focused on extracting text from images and documents. The correct answer is \"Sentiment Analysis\". Sentiment Analysis evaluates the mood in text."
		],
		"optionExplanationsDe": [
			"Richtig: Sentiment Analysis bewertet die Stimmung in Text.",
			"\"Entity Linking\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sentiment Analysis\". Sentiment Analysis bewertet die Stimmung in Text.",
			"\"Part-of-Speech Tagging\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sentiment Analysis\". Sentiment Analysis bewertet die Stimmung in Text.",
			"\"OCR\" passt fur diese Frage nicht am besten. OCR extrahiert Text aus Bildern oder Dokumenten. Die richtige Antwort ist \"Sentiment Analysis\". Sentiment Analysis bewertet die Stimmung in Text."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"\"Divide images into categories\" is not the best fit for this question. The correct answer is \"Extract entities such as people, places and organizations\". NER highlights and classifies relevant entities in the text.",
			"Correct: NER highlights and classifies relevant entities in the text.",
			"\"Transcribe audio\" is not the best fit for this question. The correct answer is \"Extract entities such as people, places and organizations\". NER highlights and classifies relevant entities in the text.",
			"\"Retrain models\" is not the best fit for this question. The correct answer is \"Extract entities such as people, places and organizations\". NER highlights and classifies relevant entities in the text."
		],
		"optionExplanationsDe": [
			"\"Bilder in Kategorien einzuteilen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Entitaten wie Personen, Orte und Organisationen zu extrahieren\". NER markiert und klassifiziert relevante Entitaten im Text.",
			"Richtig: NER markiert und klassifiziert relevante Entitaten im Text.",
			"\"Audio zu transkribieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Entitaten wie Personen, Orte und Organisationen zu extrahieren\". NER markiert und klassifiziert relevante Entitaten im Text.",
			"\"Modelle neu zu trainieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Entitaten wie Personen, Orte und Organisationen zu extrahieren\". NER markiert und klassifiziert relevante Entitaten im Text."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure OpenAI Service provides models for generative prompts.",
			"\"Azure AI Search\" is not the best fit for this question. The correct answer is \"Azure OpenAI Service\". Azure AI Search is designed for indexing and search. Here the correct answer is \"Azure OpenAI Service\".",
			"\"Azure AI Vision\" is not the best fit for this question. Azure AI Vision focuses on image and video understanding tasks. The correct answer is \"Azure OpenAI Service\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis. Here the correct answer is \"Azure OpenAI Service\".",
			"\"Azure DNS\" is not the best fit for this question. The correct answer is \"Azure OpenAI Service\". Azure OpenAI Service provides models for generative prompts."
		],
		"optionExplanationsDe": [
			"Richtig: Azure OpenAI Service stellt Modelle fur generative Prompts bereit.",
			"\"Azure AI Search\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure OpenAI Service\". Azure AI Search ist fur Indexierung und Suche ausgelegt. Hier ist die richtige Antwort \"Azure OpenAI Service\".",
			"\"Azure AI Vision\" passt fur diese Frage nicht am besten. Azure AI Vision ist fur Bild- und Videoverstehen gedacht. Die richtige Antwort ist \"Azure OpenAI Service\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen. Hier ist die richtige Antwort \"Azure OpenAI Service\".",
			"\"Azure DNS\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure OpenAI Service\". Azure OpenAI Service stellt Modelle fur generative Prompts bereit."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"\"Optimize GPU temperature\" is not the best fit for this question. The correct answer is \"Improve model outputs with clear instructions and context\". Prompt engineering controls the quality and relevance of output.",
			"Correct: Prompt engineering controls the quality and relevance of output.",
			"\"Replace database indexes\" is not the best fit for this question. The correct answer is \"Improve model outputs with clear instructions and context\". Prompt engineering controls the quality and relevance of output.",
			"\"Just halve the latency\" is not the best fit for this question. The correct answer is \"Improve model outputs with clear instructions and context\". Prompt engineering controls the quality and relevance of output."
		],
		"optionExplanationsDe": [
			"\"GPU-Temperatur optimieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellausgaben durch klare Anweisungen und Kontext verbessern\". Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.",
			"Richtig: Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.",
			"\"Datenbankindizes ersetzen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellausgaben durch klare Anweisungen und Kontext verbessern\". Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.",
			"\"Nur die Latenz halbieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellausgaben durch klare Anweisungen und Kontext verbessern\". Prompt Engineering steuert Qualitat und Relevanz der Ausgaben."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: RAG provides the model with appropriate, current sources as context.",
			"\"Just increase the temperature\" is not the best fit for this question. The correct answer is \"RAG with relevant sources\". RAG provides the model with appropriate, current sources as context.",
			"\"Reduce context window\" is not the best fit for this question. The correct answer is \"RAG with relevant sources\". RAG provides the model with appropriate, current sources as context.",
			"\"Just avoid few-shot\" is not the best fit for this question. The correct answer is \"RAG with relevant sources\". RAG provides the model with appropriate, current sources as context."
		],
		"optionExplanationsDe": [
			"Richtig: RAG liefert dem Modell passende, aktuelle Quellen als Kontext.",
			"\"Nur Temperatur erhohen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"RAG mit relevanten Quellen\". RAG liefert dem Modell passende, aktuelle Quellen als Kontext.",
			"\"Context Window reduzieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"RAG mit relevanten Quellen\". RAG liefert dem Modell passende, aktuelle Quellen als Kontext.",
			"\"Nur Few-shot vermeiden\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"RAG mit relevanten Quellen\". RAG liefert dem Modell passende, aktuelle Quellen als Kontext."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Search is designed for indexing and search.",
			"\"Azure AI Face\" is not the best fit for this question. The correct answer is \"Azure AI Search\". Azure AI Search is designed for indexing and search.",
			"\"Azure Batch\" is not the best fit for this question. The correct answer is \"Azure AI Search\". Azure AI Search is designed for indexing and search.",
			"\"Azure Monitor\" is not the best fit for this question. The correct answer is \"Azure AI Search\". Azure AI Search is designed for indexing and search."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Search ist fur Indexierung und Suche ausgelegt.",
			"\"Azure AI Face\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Search\". Azure AI Search ist fur Indexierung und Suche ausgelegt.",
			"\"Azure Batch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Search\". Azure AI Search ist fur Indexierung und Suche ausgelegt.",
			"\"Azure Monitor\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Search\". Azure AI Search ist fur Indexierung und Suche ausgelegt."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"\"Ignore documents\" is not the best fit for this question. The correct answer is \"Enrich and index content\". Enrichment and indexing make content searchable.",
			"Correct: Enrichment and indexing make content searchable.",
			"\"Only train models locally\" is not the best fit for this question. The correct answer is \"Enrich and index content\". Enrichment and indexing make content searchable.",
			"\"Manual search without index\" is not the best fit for this question. The correct answer is \"Enrich and index content\". Enrichment and indexing make content searchable."
		],
		"optionExplanationsDe": [
			"\"Dokumente ignorieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inhalte anreichern und indexieren\". Anreicherung und Indexierung machen Inhalte durchsuchbar.",
			"Richtig: Anreicherung und Indexierung machen Inhalte durchsuchbar.",
			"\"Nur Modelle lokal trainieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inhalte anreichern und indexieren\". Anreicherung und Indexierung machen Inhalte durchsuchbar.",
			"\"Manuelle Suche ohne Index\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inhalte anreichern und indexieren\". Anreicherung und Indexierung machen Inhalte durchsuchbar."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"\"just faster response time\" is not the best fit for this question. The correct answer is \"Understanding meaning and context\". Semantic search takes the meaning of the content into account.",
			"Correct: Semantic search takes the meaning of the content into account.",
			"\"less computing power per request\" is not the best fit for this question. The correct answer is \"Understanding meaning and context\". Semantic search takes the meaning of the content into account.",
			"\"Forced to use relational databases\" is not the best fit for this question. The correct answer is \"Understanding meaning and context\". Semantic search takes the meaning of the content into account."
		],
		"optionExplanationsDe": [
			"\"nur schnellere Antwortzeit\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verstandnis von Bedeutung und Kontext\". Semantische Suche berucksichtigt die inhaltliche Bedeutung.",
			"Richtig: Semantische Suche berucksichtigt die inhaltliche Bedeutung.",
			"\"weniger Rechenleistung pro Anfrage\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verstandnis von Bedeutung und Kontext\". Semantische Suche berucksichtigt die inhaltliche Bedeutung.",
			"\"Zwang zu relationalen Datenbanken\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verstandnis von Bedeutung und Kontext\". Semantische Suche berucksichtigt die inhaltliche Bedeutung."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: Unequal treatment between groups is a fairness problem.",
			"\"transparency\" is not the best fit for this question. The correct answer is \"fairness\". Unequal treatment between groups is a fairness problem.",
			"\"Inclusivity\" is not the best fit for this question. The correct answer is \"fairness\". Inclusivity ensures that AI solutions do not exclude anyone. Here the correct answer is \"fairness\".",
			"\"responsibility\" is not the best fit for this question. The correct answer is \"fairness\". Unequal treatment between groups is a fairness problem."
		],
		"optionExplanationsDe": [
			"Richtig: Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.",
			"\"Transparenz\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fairness\". Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.",
			"\"Inklusivitat\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fairness\". Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen. Hier ist die richtige Antwort \"Fairness\".",
			"\"Verantwortlichkeit\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fairness\". Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"\"Deliver decisions without justification\" is not the best fit for this question. The correct answer is \"Document model inputs and decision logic\". Documentation and explainability make AI more understandable.",
			"Correct: Documentation and explainability make AI more understandable.",
			"\"Only allow proprietary formats\" is not the best fit for this question. The correct answer is \"Document model inputs and decision logic\". Documentation and explainability make AI more understandable.",
			"\"Do not log errors\" is not the best fit for this question. The correct answer is \"Document model inputs and decision logic\". Documentation and explainability make AI more understandable."
		],
		"optionExplanationsDe": [
			"\"Entscheidungen ohne Begrundung liefern\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellinputs und Entscheidungslogik dokumentieren\". Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.",
			"Richtig: Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.",
			"\"Nur proprietare Formate erlauben\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellinputs und Entscheidungslogik dokumentieren\". Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.",
			"\"Fehler nicht protokollieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellinputs und Entscheidungslogik dokumentieren\". Dokumentation und Erklarbarkeit machen KI nachvollziehbarer."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"\"Inclusivity\" is not the best fit for this question. The correct answer is \"Reliability and security\". Inclusivity ensures that AI solutions do not exclude anyone. Here the correct answer is \"Reliability and security\".",
			"Correct: Reliability and safety are core principles of responsible AI.",
			"\"fairness\" is not the best fit for this question. The correct answer is \"Reliability and security\". Unequal treatment between groups is a fairness problem. Here the correct answer is \"Reliability and security\".",
			"\"Data density\" is not the best fit for this question. The correct answer is \"Reliability and security\". Reliability and safety are core principles of responsible AI."
		],
		"optionExplanationsDe": [
			"\"Inklusivitat\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Zuverlassigkeit und Sicherheit\". Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen. Hier ist die richtige Antwort \"Zuverlassigkeit und Sicherheit\".",
			"Richtig: Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI.",
			"\"Fairness\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Zuverlassigkeit und Sicherheit\". Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem. Hier ist die richtige Antwort \"Zuverlassigkeit und Sicherheit\".",
			"\"Datendichte\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Zuverlassigkeit und Sicherheit\". Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"Correct: Document Intelligence extracts structured information from documents.",
			"\"Azure AI Translator\" is not the best fit for this question. Translator focuses on language translation rather than sentiment or entity extraction. The correct answer is \"Azure AI Document Intelligence\". Azure AI Translator offers neural machine translation. Here the correct answer is \"Azure AI Document Intelligence\".",
			"\"Azure AI Speech\" is not the best fit for this question. Azure AI Speech focuses on speech recognition and speech synthesis. The correct answer is \"Azure AI Document Intelligence\". Document Intelligence extracts structured information from documents.",
			"\"Azure AI Content Safety\" is not the best fit for this question. The correct answer is \"Azure AI Document Intelligence\". Document Intelligence extracts structured information from documents."
		],
		"optionExplanationsDe": [
			"Richtig: Document Intelligence extrahiert strukturierte Informationen aus Dokumenten.",
			"\"Azure AI Translator\" passt fur diese Frage nicht am besten. Translator ist fur Ubersetzung, nicht fur Sentiment- oder Entitatenanalyse gedacht. Die richtige Antwort ist \"Azure AI Document Intelligence\". Azure AI Translator bietet neuronale maschinelle Ubersetzung. Hier ist die richtige Antwort \"Azure AI Document Intelligence\".",
			"\"Azure AI Speech\" passt fur diese Frage nicht am besten. Azure AI Speech ist fur Spracherkennung und Sprachsynthese gedacht. Die richtige Antwort ist \"Azure AI Document Intelligence\". Document Intelligence extrahiert strukturierte Informationen aus Dokumenten.",
			"\"Azure AI Content Safety\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Document Intelligence\". Document Intelligence extrahiert strukturierte Informationen aus Dokumenten."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: Custom models help with specific forms or layouts.",
			"\"If there is no data\" is not the best fit for this question. The correct answer is \"When standard models do not cover the document structure well\". Custom models help with specific forms or layouts.",
			"\"When only audio is processed\" is not the best fit for this question. The correct answer is \"When standard models do not cover the document structure well\". Custom models help with specific forms or layouts.",
			"\"If you don't want to recognize any fields\" is not the best fit for this question. The correct answer is \"When standard models do not cover the document structure well\". Custom models help with specific forms or layouts."
		],
		"optionExplanationsDe": [
			"Richtig: Custom-Modelle helfen bei spezifischen Formularen oder Layouts.",
			"\"Wenn keine Daten vorhanden sind\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken\". Custom-Modelle helfen bei spezifischen Formularen oder Layouts.",
			"\"Wenn nur Audio verarbeitet wird\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken\". Custom-Modelle helfen bei spezifischen Formularen oder Layouts.",
			"\"Wenn man keine Felder erkennen will\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken\". Custom-Modelle helfen bei spezifischen Formularen oder Layouts."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"\"Just a PNG as output\" is not the best fit for this question. The correct answer is \"Structured fields including confidence values\". Extraction results usually contain recognized fields plus confidences.",
			"Correct: Extraction results usually contain recognized fields plus confidences.",
			"\"Just a numerical score\" is not the best fit for this question. The correct answer is \"Structured fields including confidence values\". Extraction results usually contain recognized fields plus confidences.",
			"\"Just prediction of language\" is not the best fit for this question. The correct answer is \"Structured fields including confidence values\". Extraction results usually contain recognized fields plus confidences."
		],
		"optionExplanationsDe": [
			"\"Nur ein PNG als Ausgabe\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Strukturierte Felder inklusive Konfidenzwerten\". Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.",
			"Richtig: Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.",
			"\"Nur ein numerischer Score\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Strukturierte Felder inklusive Konfidenzwerten\". Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.",
			"\"Nur Vorhersage der Sprache\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Strukturierte Felder inklusive Konfidenzwerten\". Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Fairness aims at fair treatment and avoids systematic disadvantage.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Fairness aims at fair treatment and avoids systematic disadvantage."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung."
		},
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		"correctAnswerDe": "Falsch",
		"optionExplanations": {
			"true": "\"true\" is not the best fit for this question. The correct answer is \"False\". Not correct in this statement. Prompt engineering is particularly central to text and code models.",
			"false": "Correct: Correct in this statement. Prompt engineering is particularly central to text and code models."
		},
		"optionExplanationsDe": {
			"wahr": "\"wahr\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Falsch\". In dieser Aussage nicht korrekt. Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral.",
			"falsch": "Richtig: Richtig in dieser Aussage. Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral."
		},
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. This is typical behavior with overfitting.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. This is typical behavior with overfitting."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Das ist ein typisches Verhalten bei Overfitting.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Das ist ein typisches Verhalten bei Overfitting."
		},
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. This is exactly what distinguishes semantic search from pure keyword search.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. This is exactly what distinguishes semantic search from pure keyword search."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Genau das unterscheidet semantische Suche von reiner Keyword-Suche.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Genau das unterscheidet semantische Suche von reiner Keyword-Suche."
		},
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
			"\"Azure DevOps\" is not the best fit for this question. The correct answer is \"Azure AI Services\". Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
			"\"Azure Monitor\" is not the best fit for this question. The correct answer is \"Azure AI Services\". Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
			"\"Azure Logic Apps\" is not the best fit for this question. The correct answer is \"Azure AI Services\". Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.",
			"\"Azure DevOps\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Services\". Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.",
			"\"Azure Monitor\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Services\". Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.",
			"\"Azure Logic Apps\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Services\". Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten."
		],
		"learnRef": {
			"title": "(AI-900) Get started with Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
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
		],
		"optionExplanations": [
			"Correct: Deployment is the act of making a model available as an endpoint or service.",
			"\"Feature engineering\" is not the best fit for this question. The correct answer is \"Deployment\". Deployment is the act of making a model available as an endpoint or service.",
			"\"Data wrangling\" is not the best fit for this question. The correct answer is \"Deployment\". Deployment is the act of making a model available as an endpoint or service.",
			"\"Hyperparameter tuning\" is not the best fit for this question. The correct answer is \"Deployment\". Deployment is the act of making a model available as an endpoint or service."
		],
		"optionExplanationsDe": [
			"Richtig: Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.",
			"\"Feature Engineering\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deployment\". Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.",
			"\"Data Wrangling\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deployment\". Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.",
			"\"Hyperparameter Tuning\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deployment\". Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service."
		],
		"learnRef": {
			"title": "(AI-900) Get started with Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. All Azure AI Services offer REST endpoints and client SDKs in multiple languages.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. All Azure AI Services offer REST endpoints and client SDKs in multiple languages."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen."
		},
		"learnRef": {
			"title": "(AI-900) Get started with Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
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
		],
		"optionExplanations": [
			"Correct: The designer enables visual creation of ML workflows without code.",
			"\"Azure Data Factory\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Designer\". The designer enables visual creation of ML workflows without code.",
			"\"Azure Stream Analytics\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Designer\". The designer enables visual creation of ML workflows without code.",
			"\"Azure Synapse\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Designer\". The designer enables visual creation of ML workflows without code."
		],
		"optionExplanationsDe": [
			"Richtig: Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.",
			"\"Azure Data Factory\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Designer\". Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.",
			"\"Azure Stream Analytics\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Designer\". Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.",
			"\"Azure Synapse\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Designer\". Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
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
		],
		"optionExplanations": [
			"Correct: AutoML automates model selection and tuning to find the best model.",
			"\"It completely replaces data collection\" is not the best fit for this question. The correct answer is \"It automatically tests various algorithms and hyperparameters\". AutoML automates model selection and tuning to find the best model.",
			"\"It doesn't require any data\" is not the best fit for this question. The correct answer is \"It automatically tests various algorithms and hyperparameters\". AutoML automates model selection and tuning to find the best model.",
			"\"It only works with image data\" is not the best fit for this question. The correct answer is \"It automatically tests various algorithms and hyperparameters\". AutoML automates model selection and tuning to find the best model."
		],
		"optionExplanationsDe": [
			"Richtig: AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.",
			"\"Es ersetzt die Datensammlung komplett\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es testet automatisch verschiedene Algorithmen und Hyperparameter\". AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.",
			"\"Es braucht keinerlei Daten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es testet automatisch verschiedene Algorithmen und Hyperparameter\". AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.",
			"\"Es funktioniert nur mit Bilddaten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es testet automatisch verschiedene Algorithmen und Hyperparameter\". AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
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
		],
		"optionExplanations": [
			"Correct: Accuracy is the proportion of correct predictions out of the total.",
			"\"Latency\" is not the best fit for this question. The correct answer is \"Accuracy\". Accuracy is the proportion of correct predictions out of the total.",
			"\"Throughput\" is not the best fit for this question. The correct answer is \"Accuracy\". Accuracy is the proportion of correct predictions out of the total.",
			"\"Overfitting rate\" is not the best fit for this question. The correct answer is \"Accuracy\". Accuracy is the proportion of correct predictions out of the total."
		],
		"optionExplanationsDe": [
			"Richtig: Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.",
			"\"Latency\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Accuracy\". Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.",
			"\"Throughput\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Accuracy\". Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.",
			"\"Overfitting-Rate\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Accuracy\". Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Feature engineering optimizes the input data so that the model learns better.",
			"\"Deploying a model to the cloud\" is not the best fit for this question. The correct answer is \"Selecting and transforming input variables for a model\". Feature engineering optimizes the input data so that the model learns better.",
			"\"Deleting all training data\" is not the best fit for this question. The correct answer is \"Selecting and transforming input variables for a model\". Feature engineering optimizes the input data so that the model learns better.",
			"\"Classifying images manually\" is not the best fit for this question. The correct answer is \"Selecting and transforming input variables for a model\". Feature engineering optimizes the input data so that the model learns better."
		],
		"optionExplanationsDe": [
			"Richtig: Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.",
			"\"Das Deployen eines Modells in die Cloud\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell\". Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.",
			"\"Das Loschen aller Trainingsdaten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell\". Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.",
			"\"Das manuelle Klassifizieren von Bildern\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell\". Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Reinforcement learning optimizes actions based on reward signals.",
			"\"Supervised learning\" is not the best fit for this question. Supervised learning requires labeled training examples. The correct answer is \"Reinforcement learning\". Reinforcement learning optimizes actions based on reward signals.",
			"\"Unsupervised learning\" is not the best fit for this question. Unsupervised learning is used when labeled targets are not available. The correct answer is \"Reinforcement learning\". Clustering without target variables is an unsupervised procedure. Here the correct answer is \"Reinforcement learning\".",
			"\"Transfer learning\" is not the best fit for this question. Transfer learning reuses prior model knowledge and is not the core task type here. The correct answer is \"Reinforcement learning\". Reinforcement learning optimizes actions based on reward signals."
		],
		"optionExplanationsDe": [
			"Richtig: Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.",
			"\"Supervised Learning\" passt fur diese Frage nicht am besten. Supervised Learning braucht gelabelte Trainingsdaten. Die richtige Antwort ist \"Reinforcement Learning\". Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.",
			"\"Unsupervised Learning\" passt fur diese Frage nicht am besten. Unsupervised Learning wird genutzt, wenn keine gelabelten Zielwerte vorliegen. Die richtige Antwort ist \"Reinforcement Learning\". Clustering ohne Zielvariable ist ein unsupervised Verfahren. Hier ist die richtige Antwort \"Reinforcement Learning\".",
			"\"Transfer Learning\" passt fur diese Frage nicht am besten. Transfer Learning ubertragt vorhandenes Wissen, ist aber hier nicht der zentrale Aufgabentyp. Die richtige Antwort ist \"Reinforcement Learning\". Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Supervised learning uses input-output pairs (labels) for learning.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Supervised learning uses input-output pairs (labels) for learning."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen."
		},
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Two classes (spam/non-spam) are a binary classification task.",
			"\"Regression\" is not the best fit for this question. Regression predicts continuous numeric values, not category labels. The correct answer is \"Binary classification\". Correct: regression predicts continuous numerical outputs such as house prices. Here the correct answer is \"Binary classification\".",
			"\"Clustering\" is not the best fit for this question. Clustering groups data points without labeled target values. The correct answer is \"Binary classification\". Clustering groups similar points without predicting a target value. Here the correct answer is \"Binary classification\".",
			"\"Anomaly detection\" is not the best fit for this question. The correct answer is \"Binary classification\". Anomaly detection flags outliers and is not a direct price prediction task. Here the correct answer is \"Binary classification\"."
		],
		"optionExplanationsDe": [
			"Richtig: Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe.",
			"\"Regression\" passt fur diese Frage nicht am besten. Regression sagt kontinuierliche numerische Werte voraus. Die richtige Antwort ist \"Binare Klassifikation\". Richtig: Regression sagt kontinuierliche numerische Zielwerte wie Hauspreise voraus. Hier ist die richtige Antwort \"Binare Klassifikation\".",
			"\"Clustering\" passt fur diese Frage nicht am besten. Clustering gruppiert Datenpunkte ohne gelabelte Zielvariable. Die richtige Antwort ist \"Binare Klassifikation\". Clustering gruppiert ahnliche Datenpunkte ohne expliziten Zielwert. Hier ist die richtige Antwort \"Binare Klassifikation\".",
			"\"Anomalieerkennung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Binare Klassifikation\". Anomalieerkennung findet Ausreisser und ist keine direkte Preisvorhersage. Hier ist die richtige Antwort \"Binare Klassifikation\"."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
			"\"Azure AI Translator\" is not the best fit for this question. Translator focuses on language translation rather than sentiment or entity extraction. The correct answer is \"Azure AI Vision\". Azure AI Translator offers neural machine translation. Here the correct answer is \"Azure AI Vision\".",
			"\"Azure AI Speech\" is not the best fit for this question. Azure AI Speech focuses on speech recognition and speech synthesis. The correct answer is \"Azure AI Vision\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
			"\"Azure Cosmos DB\" is not the best fit for this question. The correct answer is \"Azure AI Vision\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.",
			"\"Azure AI Translator\" passt fur diese Frage nicht am besten. Translator ist fur Ubersetzung, nicht fur Sentiment- oder Entitatenanalyse gedacht. Die richtige Antwort ist \"Azure AI Vision\". Azure AI Translator bietet neuronale maschinelle Ubersetzung. Hier ist die richtige Antwort \"Azure AI Vision\".",
			"\"Azure AI Speech\" passt fur diese Frage nicht am besten. Azure AI Speech ist fur Spracherkennung und Sprachsynthese gedacht. Die richtige Antwort ist \"Azure AI Vision\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.",
			"\"Azure Cosmos DB\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Vision\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen."
		],
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Semantic segmentation classifies each pixel rather than just the entire image.",
			"\"Image classification\" is not the best fit for this question. Image classification assigns one label to an entire image. The correct answer is \"Semantic segmentation\". Image classification assigns a class to the image. Here the correct answer is \"Semantic segmentation\".",
			"\"OCR\" is not the best fit for this question. OCR is focused on extracting text from images and documents. The correct answer is \"Semantic segmentation\". Semantic segmentation classifies each pixel rather than just the entire image.",
			"\"Face detection\" is not the best fit for this question. The correct answer is \"Semantic segmentation\". Semantic segmentation classifies each pixel rather than just the entire image."
		],
		"optionExplanationsDe": [
			"Richtig: Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.",
			"\"Bildklassifikation\" passt fur diese Frage nicht am besten. Bildklassifikation weist einem gesamten Bild eine Klasse zu. Die richtige Antwort ist \"Semantische Segmentierung\". Bildklassifikation weist dem Bild eine Klasse zu. Hier ist die richtige Antwort \"Semantische Segmentierung\".",
			"\"OCR\" passt fur diese Frage nicht am besten. OCR extrahiert Text aus Bildern oder Dokumenten. Die richtige Antwort ist \"Semantische Segmentierung\". Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.",
			"\"Face Detection\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Semantische Segmentierung\". Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild."
		],
		"learnRef": {
			"title": "Introduction to computer vision concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/"
		},
		"learnRefDe": {
			"title": "Introduction to computer vision concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Face recognizes, analyzes and verifies faces in images.",
			"\"Speech recognition in audio data\" is not the best fit for this question. The correct answer is \"Facial recognition and verification\". Azure AI Face recognizes, analyzes and verifies faces in images.",
			"\"Text translation\" is not the best fit for this question. The correct answer is \"Facial recognition and verification\". Azure AI Face recognizes, analyzes and verifies faces in images.",
			"\"Database queries\" is not the best fit for this question. The correct answer is \"Facial recognition and verification\". Azure AI Face recognizes, analyzes and verifies faces in images."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.",
			"\"Spracherkennung in Audiodaten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung und Verifizierung\". Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.",
			"\"Textubersetzung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung und Verifizierung\". Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.",
			"\"Datenbankabfragen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung und Verifizierung\". Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern."
		],
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. The Image Captioning function creates automatic descriptions of image content.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. The Image Captioning function creates automatic descriptions of image content."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten."
		},
		"learnRef": {
			"title": "(AI-900) Get started with computer vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Computer Vision in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Translator offers neural machine translation.",
			"\"Azure AI Vision\" is not the best fit for this question. Azure AI Vision focuses on image and video understanding tasks. The correct answer is \"Azure AI Translator\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis. Here the correct answer is \"Azure AI Translator\".",
			"\"Azure AI Search\" is not the best fit for this question. The correct answer is \"Azure AI Translator\". Azure AI Search is designed for indexing and search. Here the correct answer is \"Azure AI Translator\".",
			"\"Azure Monitor\" is not the best fit for this question. The correct answer is \"Azure AI Translator\". Azure AI Translator offers neural machine translation."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Translator bietet neuronale maschinelle Ubersetzung.",
			"\"Azure AI Vision\" passt fur diese Frage nicht am besten. Azure AI Vision ist fur Bild- und Videoverstehen gedacht. Die richtige Antwort ist \"Azure AI Translator\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen. Hier ist die richtige Antwort \"Azure AI Translator\".",
			"\"Azure AI Search\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Translator\". Azure AI Search ist fur Indexierung und Suche ausgelegt. Hier ist die richtige Antwort \"Azure AI Translator\".",
			"\"Azure Monitor\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Translator\". Azure AI Translator bietet neuronale maschinelle Ubersetzung."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Key Phrase Extraction identifies the central themes of a text.",
			"\"Classify images\" is not the best fit for this question. The correct answer is \"extract the most important terms from a text\". Key Phrase Extraction identifies the central themes of a text.",
			"\"Convert audio to text\" is not the best fit for this question. The correct answer is \"extract the most important terms from a text\". Key Phrase Extraction identifies the central themes of a text.",
			"\"Index databases\" is not the best fit for this question. The correct answer is \"extract the most important terms from a text\". Key Phrase Extraction identifies the central themes of a text."
		],
		"optionExplanationsDe": [
			"Richtig: Key Phrase Extraction identifiziert die zentralen Themen eines Texts.",
			"\"Bilder zu klassifizieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"die wichtigsten Begriffe aus einem Text herauszuziehen\". Key Phrase Extraction identifiziert die zentralen Themen eines Texts.",
			"\"Audio in Text umzuwandeln\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"die wichtigsten Begriffe aus einem Text herauszuziehen\". Key Phrase Extraction identifiziert die zentralen Themen eines Texts.",
			"\"Datenbanken zu indexieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"die wichtigsten Begriffe aus einem Text herauszuziehen\". Key Phrase Extraction identifiziert die zentralen Themen eines Texts."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Speech-to-Text transcribes audio into written text.",
			"\"Azure AI Vision\" is not the best fit for this question. Azure AI Vision focuses on image and video understanding tasks. The correct answer is \"Azure AI Speech (Speech-to-Text)\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis. Here the correct answer is \"Azure AI Speech (Speech-to-Text)\".",
			"\"Azure AI Search\" is not the best fit for this question. The correct answer is \"Azure AI Speech (Speech-to-Text)\". Azure AI Search is designed for indexing and search. Here the correct answer is \"Azure AI Speech (Speech-to-Text)\".",
			"\"Azure AI Face\" is not the best fit for this question. The correct answer is \"Azure AI Speech (Speech-to-Text)\". Speech-to-Text transcribes audio into written text."
		],
		"optionExplanationsDe": [
			"Richtig: Speech-to-Text transkribiert Audio in geschriebenen Text.",
			"\"Azure AI Vision\" passt fur diese Frage nicht am besten. Azure AI Vision ist fur Bild- und Videoverstehen gedacht. Die richtige Antwort ist \"Azure AI Speech (Speech-to-Text)\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen. Hier ist die richtige Antwort \"Azure AI Speech (Speech-to-Text)\".",
			"\"Azure AI Search\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Speech (Speech-to-Text)\". Azure AI Search ist fur Indexierung und Suche ausgelegt. Hier ist die richtige Antwort \"Azure AI Speech (Speech-to-Text)\".",
			"\"Azure AI Face\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Speech (Speech-to-Text)\". Speech-to-Text transkribiert Audio in geschriebenen Text."
		],
		"learnRef": {
			"title": "(AI-900) Get started with speech in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/recognize-synthesize-speech/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Speech in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/recognize-synthesize-speech/"
		}
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
		],
		"optionExplanations": [
			"Correct: Text-to-speech synthesizes natural-sounding speech from text.",
			"\"Azure AI Translator\" is not the best fit for this question. Translator focuses on language translation rather than sentiment or entity extraction. The correct answer is \"Azure AI Speech (Text-to-Speech)\". Azure AI Translator offers neural machine translation. Here the correct answer is \"Azure AI Speech (Text-to-Speech)\".",
			"\"Azure AI Vision\" is not the best fit for this question. Azure AI Vision focuses on image and video understanding tasks. The correct answer is \"Azure AI Speech (Text-to-Speech)\". Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis. Here the correct answer is \"Azure AI Speech (Text-to-Speech)\".",
			"\"Azure AI Search\" is not the best fit for this question. The correct answer is \"Azure AI Speech (Text-to-Speech)\". Azure AI Search is designed for indexing and search. Here the correct answer is \"Azure AI Speech (Text-to-Speech)\"."
		],
		"optionExplanationsDe": [
			"Richtig: Text-to-Speech synthetisiert naturlich klingende Sprache aus Text.",
			"\"Azure AI Translator\" passt fur diese Frage nicht am besten. Translator ist fur Ubersetzung, nicht fur Sentiment- oder Entitatenanalyse gedacht. Die richtige Antwort ist \"Azure AI Speech (Text-to-Speech)\". Azure AI Translator bietet neuronale maschinelle Ubersetzung. Hier ist die richtige Antwort \"Azure AI Speech (Text-to-Speech)\".",
			"\"Azure AI Vision\" passt fur diese Frage nicht am besten. Azure AI Vision ist fur Bild- und Videoverstehen gedacht. Die richtige Antwort ist \"Azure AI Speech (Text-to-Speech)\". Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen. Hier ist die richtige Antwort \"Azure AI Speech (Text-to-Speech)\".",
			"\"Azure AI Search\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Speech (Text-to-Speech)\". Azure AI Search ist fur Indexierung und Suche ausgelegt. Hier ist die richtige Antwort \"Azure AI Speech (Text-to-Speech)\"."
		],
		"learnRef": {
			"title": "Introduction to AI speech concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/"
		},
		"learnRefDe": {
			"title": "Introduction to AI speech concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Custom Question Answering makes it possible to create knowledge bases from documents.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Custom Question Answering makes it possible to create knowledge bases from documents."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen."
		},
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Question Answering provides the answers, Bot Service provides the chatbot channel.",
			"\"Azure AI Vision + Azure Batch\" is not the best fit for this question. The correct answer is \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering provides the answers, Bot Service provides the chatbot channel.",
			"\"Azure AI Search + Azure DNS\" is not the best fit for this question. The correct answer is \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering provides the answers, Bot Service provides the chatbot channel.",
			"\"Azure AI Face + Azure Monitor\" is not the best fit for this question. The correct answer is \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering provides the answers, Bot Service provides the chatbot channel."
		],
		"optionExplanationsDe": [
			"Richtig: Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.",
			"\"Azure AI Vision + Azure Batch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.",
			"\"Azure AI Search + Azure DNS\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.",
			"\"Azure AI Face + Azure Monitor\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure AI Language (Question Answering) + Azure Bot Service\". Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit."
		],
		"learnRef": {
			"title": "(AI-900) Get started with natural language processing in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in NLP in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: DALL-E generates images based on text descriptions.",
			"\"Whispers\" is not the best fit for this question. The correct answer is \"DALL E\". DALL-E generates images based on text descriptions.",
			"\"GPT-4\" is not the best fit for this question. The correct answer is \"DALL E\". DALL-E generates images based on text descriptions.",
			"\"Ada\" is not the best fit for this question. The correct answer is \"DALL E\". DALL-E generates images based on text descriptions."
		],
		"optionExplanationsDe": [
			"Richtig: DALL-E generiert Bilder basierend auf Textbeschreibungen.",
			"\"Whisper\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"DALL-E\". DALL-E generiert Bilder basierend auf Textbeschreibungen.",
			"\"GPT-4\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"DALL-E\". DALL-E generiert Bilder basierend auf Textbeschreibungen.",
			"\"Ada\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"DALL-E\". DALL-E generiert Bilder basierend auf Textbeschreibungen."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
			"\"It determines the GPU temperature\" is not the best fit for this question. The correct answer is \"He controls the creativity or randomness of the expenditure\". Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
			"\"He sets the response time\" is not the best fit for this question. The correct answer is \"He controls the creativity or randomness of the expenditure\". Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
			"\"It sets the maximum token length\" is not the best fit for this question. The correct answer is \"He controls the creativity or randomness of the expenditure\". Higher temperature results in more creative answers, lower temperature results in more deterministic answers."
		],
		"optionExplanationsDe": [
			"Richtig: Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.",
			"\"Er bestimmt die GPU-Temperatur\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben\". Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.",
			"\"Er legt die Antwortzeit fest\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben\". Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.",
			"\"Er setzt die maximale Tokenlange\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben\". Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: The context window limits input + output tokens per request.",
			"\"The window in the Azure UI\" is not the best fit for this question. The correct answer is \"The maximum amount of text (tokens) the model can process at one time\". The context window limits input + output tokens per request.",
			"\"The number of GPU cores\" is not the best fit for this question. The correct answer is \"The maximum amount of text (tokens) the model can process at one time\". The context window limits input + output tokens per request.",
			"\"The training duration in hours\" is not the best fit for this question. The correct answer is \"The maximum amount of text (tokens) the model can process at one time\". The context window limits input + output tokens per request."
		],
		"optionExplanationsDe": [
			"Richtig: Das Context Window begrenzt Input + Output Tokens pro Anfrage.",
			"\"Das Fenster in der Azure-UI\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann\". Das Context Window begrenzt Input + Output Tokens pro Anfrage.",
			"\"Die Anzahl der GPU-Kerne\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann\". Das Context Window begrenzt Input + Output Tokens pro Anfrage.",
			"\"Die Trainingsdauer in Stunden\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann\". Das Context Window begrenzt Input + Output Tokens pro Anfrage."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: The system message defines persona, rules and context for the model.",
			"\"An error message from the server\" is not the best fit for this question. The correct answer is \"A statement that specifies the behavior and role of the model\". The system message defines persona, rules and context for the model.",
			"\"A log entry in Azure Monitor\" is not the best fit for this question. The correct answer is \"A statement that specifies the behavior and role of the model\". The system message defines persona, rules and context for the model.",
			"\"An automatically generated report\" is not the best fit for this question. The correct answer is \"A statement that specifies the behavior and role of the model\". The system message defines persona, rules and context for the model."
		],
		"optionExplanationsDe": [
			"Richtig: Die System Message definiert Persona, Regeln und Kontext fur das Modell.",
			"\"Eine Fehlermeldung vom Server\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt\". Die System Message definiert Persona, Regeln und Kontext fur das Modell.",
			"\"Ein Log-Eintrag in Azure Monitor\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt\". Die System Message definiert Persona, Regeln und Kontext fur das Modell.",
			"\"Ein automatisch generierter Report\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt\". Die System Message definiert Persona, Regeln und Kontext fur das Modell."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Azure OpenAI combines OpenAI models with Azure network security, RBAC, and compliance.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Azure OpenAI combines OpenAI models with Azure network security, RBAC, and compliance."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance."
		},
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Grounding connects model answers with real, current data sources.",
			"\"Physically ground the model\" is not the best fit for this question. The correct answer is \"Base answers on factual, verifiable information\". Grounding connects model answers with real, current data sources.",
			"\"Regulate GPU voltage\" is not the best fit for this question. The correct answer is \"Base answers on factual, verifiable information\". Grounding connects model answers with real, current data sources.",
			"\"Minimize network latency\" is not the best fit for this question. The correct answer is \"Base answers on factual, verifiable information\". Grounding connects model answers with real, current data sources."
		],
		"optionExplanationsDe": [
			"Richtig: Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.",
			"\"Das Modell physisch erden\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Antworten auf faktische, verifizierbare Informationen stutzen\". Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.",
			"\"GPU-Spannung regulieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Antworten auf faktische, verifizierbare Informationen stutzen\". Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.",
			"\"Netzwerklatenz minimieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Antworten auf faktische, verifizierbare Informationen stutzen\". Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
			"\"Rule-based if-then decisions\" is not the best fit for this question. The correct answer is \"Large language models (LLMs) with access to user data and context\". Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
			"\"Keyword search only\" is not the best fit for this question. The correct answer is \"Large language models (LLMs) with access to user data and context\". Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
			"\"Only locally trained models\" is not the best fit for this question. The correct answer is \"Large language models (LLMs) with access to user data and context\". Copilot uses LLMs and connects them to the user's context (documents, emails, etc.)."
		],
		"optionExplanationsDe": [
			"Richtig: Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).",
			"\"Regelbasierten If-Then-Entscheidungen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext\". Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).",
			"\"Nur Keyword-Suche\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext\". Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).",
			"\"Ausschliesslich lokal trainierten Modellen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext\". Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.)."
		],
		"learnRef": {
			"title": "Introduction to generative AI and agents",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		},
		"learnRefDe": {
			"title": "Introduction to generative AI and agents (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/"
		}
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
		],
		"optionExplanations": [
			"Correct: Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
			"\"You define user permissions\" is not the best fit for this question. The correct answer is \"They enrich documents with AI capabilities during indexing\". Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
			"\"You control the network configuration\" is not the best fit for this question. The correct answer is \"They enrich documents with AI capabilities during indexing\". Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
			"\"You define backup strategies\" is not the best fit for this question. The correct answer is \"They enrich documents with AI capabilities during indexing\". Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing."
		],
		"optionExplanationsDe": [
			"Richtig: Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.",
			"\"Sie definieren Benutzerberechtigungen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an\". Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.",
			"\"Sie steuern die Netzwerkkonfiguration\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an\". Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.",
			"\"Sie legen Backup-Strategien fest\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an\". Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: The Knowledge Store stores extracted and enriched data for analysis outside of search.",
			"\"A Git repository for code\" is not the best fit for this question. The correct answer is \"A secondary storage for enriched content for further processing\". The Knowledge Store stores extracted and enriched data for analysis outside of search.",
			"\"A DNS record\" is not the best fit for this question. The correct answer is \"A secondary storage for enriched content for further processing\". The Knowledge Store stores extracted and enriched data for analysis outside of search.",
			"\"A backup database\" is not the best fit for this question. The correct answer is \"A secondary storage for enriched content for further processing\". The Knowledge Store stores extracted and enriched data for analysis outside of search."
		],
		"optionExplanationsDe": [
			"Richtig: Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.",
			"\"Ein Git-Repository fur Code\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung\". Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.",
			"\"Ein DNS-Eintrag\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung\". Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.",
			"\"Eine Backup-Datenbank\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung\". Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Azure AI Search supports multiple data sources via built-in indexers.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Azure AI Search supports multiple data sources via built-in indexers."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer."
		},
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: Inclusivity ensures that AI solutions do not exclude anyone.",
			"\"fairness\" is not the best fit for this question. The correct answer is \"Inclusivity\". Unequal treatment between groups is a fairness problem. Here the correct answer is \"Inclusivity\".",
			"\"transparency\" is not the best fit for this question. The correct answer is \"Inclusivity\". Inclusivity ensures that AI solutions do not exclude anyone.",
			"\"Data protection\" is not the best fit for this question. The correct answer is \"Inclusivity\". Inclusivity ensures that AI solutions do not exclude anyone."
		],
		"optionExplanationsDe": [
			"Richtig: Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.",
			"\"Fairness\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inklusivitat\". Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem. Hier ist die richtige Antwort \"Inklusivitat\".",
			"\"Transparenz\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inklusivitat\". Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.",
			"\"Datenschutz\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Inklusivitat\". Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"Correct: Accountability means that people remain in control and bear responsibility.",
			"\"Data protection\" is not the best fit for this question. The correct answer is \"Accountability\". Accountability means that people remain in control and bear responsibility.",
			"\"Creativity\" is not the best fit for this question. The correct answer is \"Accountability\". Accountability means that people remain in control and bear responsibility.",
			"\"performance\" is not the best fit for this question. The correct answer is \"Accountability\". Accountability means that people remain in control and bear responsibility."
		],
		"optionExplanationsDe": [
			"Richtig: Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.",
			"\"Datenschutz\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verantwortlichkeit (Accountability)\". Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.",
			"\"Kreativitat\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verantwortlichkeit (Accountability)\". Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.",
			"\"Performance\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verantwortlichkeit (Accountability)\". Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"Correct: Content Safety detects violence, hate, self-harm and sexual content.",
			"\"Optimize GPU performance\" is not the best fit for this question. The correct answer is \"Detect harmful or inappropriate content in text and images\". Content Safety detects violence, hate, self-harm and sexual content.",
			"\"Encrypt network traffic\" is not the best fit for this question. The correct answer is \"Detect harmful or inappropriate content in text and images\". Content Safety detects violence, hate, self-harm and sexual content.",
			"\"Compress databases\" is not the best fit for this question. The correct answer is \"Detect harmful or inappropriate content in text and images\". Content Safety detects violence, hate, self-harm and sexual content."
		],
		"optionExplanationsDe": [
			"Richtig: Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.",
			"\"GPU-Leistung zu optimieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen\". Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.",
			"\"Netzwerktraffic zu verschlusseln\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen\". Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.",
			"\"Datenbanken zu komprimieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen\". Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte."
		],
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. These are Microsoft’s six core Responsible AI principles.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. These are Microsoft’s six core Responsible AI principles."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft."
		},
		"learnRef": {
			"title": "Introduction to AI concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		},
		"learnRefDe": {
			"title": "Introduction to AI concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/"
		}
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
		],
		"optionExplanations": [
			"Correct: The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
			"\"Prebuilt Receipt Model\" is not the best fit for this question. The correct answer is \"Prebuilt Invoice Model\". The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
			"\"Custom Neural Model\" is not the best fit for this question. The correct answer is \"Prebuilt Invoice Model\". The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
			"\"Layout model\" is not the best fit for this question. The correct answer is \"Prebuilt Invoice Model\". The Invoice Model extracts typical invoice fields such as amount, date, supplier."
		],
		"optionExplanationsDe": [
			"Richtig: Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.",
			"\"Prebuilt Receipt Model\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Prebuilt Invoice Model\". Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.",
			"\"Custom Neural Model\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Prebuilt Invoice Model\". Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.",
			"\"Layout Model\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Prebuilt Invoice Model\". Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: The layout model recognizes the visual structure including tables and checkboxes.",
			"\"Just plain text without position data\" is not the best fit for this question. The correct answer is \"Text lines, tables, selection marks and document structure\". The layout model recognizes the visual structure including tables and checkboxes.",
			"\"Only images from the document\" is not the best fit for this question. The correct answer is \"Text lines, tables, selection marks and document structure\". The layout model recognizes the visual structure including tables and checkboxes.",
			"\"Just the page number\" is not the best fit for this question. The correct answer is \"Text lines, tables, selection marks and document structure\". The layout model recognizes the visual structure including tables and checkboxes."
		],
		"optionExplanationsDe": [
			"Richtig: Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.",
			"\"Nur den reinen Text ohne Positionsdaten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur\". Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.",
			"\"Nur Bilder aus dem Dokument\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur\". Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.",
			"\"Nur die Seitenzahl\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur\". Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen."
		],
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. There are prebuilt models for common documents and custom models for specific layouts.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. There are prebuilt models for common documents and custom models for specific layouts."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts."
		},
		"learnRef": {
			"title": "(AI-900) Get started with AI-powered information extraction in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in AI-gestutzte Informationsextraktion in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/"
		}
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
		],
		"optionExplanations": [
			"Correct: Deep neural networks automatically learn hierarchical features from large amounts of data.",
			"\"Deep learning requires less data than classic ML\" is not the best fit for this question. The correct answer is \"Deep learning uses neural networks with many layers for automatic feature extraction\". Deep neural networks automatically learn hierarchical features from large amounts of data.",
			"\"Deep learning only works with text\" is not the best fit for this question. The correct answer is \"Deep learning uses neural networks with many layers for automatic feature extraction\". Deep neural networks automatically learn hierarchical features from large amounts of data.",
			"\"Deep learning replaces feature engineering with manual rules\" is not the best fit for this question. The correct answer is \"Deep learning uses neural networks with many layers for automatic feature extraction\". Deep neural networks automatically learn hierarchical features from large amounts of data."
		],
		"optionExplanationsDe": [
			"Richtig: Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.",
			"\"Deep Learning braucht weniger Daten als klassisches ML\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion\". Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.",
			"\"Deep Learning funktioniert nur mit Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion\". Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.",
			"\"Deep Learning ersetzt Feature Engineering durch manuelle Regeln\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion\". Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
			"\"A hardware component in GPUs\" is not the best fit for this question. The correct answer is \"A neural network that uses self-attention to learn contextual relationships\". Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
			"\"A database index type\" is not the best fit for this question. The correct answer is \"A neural network that uses self-attention to learn contextual relationships\". Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
			"\"An Azure network protocol\" is not the best fit for this question. The correct answer is \"A neural network that uses self-attention to learn contextual relationships\". Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing."
		],
		"optionExplanationsDe": [
			"Richtig: Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.",
			"\"Ein Hardware-Bauteil in GPUs\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen\". Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.",
			"\"Ein Datenbank-Index-Typ\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen\". Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.",
			"\"Ein Azure-Netzwerkprotokoll\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen\". Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Both model families use transformers, but GPT is generative (decoder) and BERT is bidirectional (encoder).",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Both model families use transformers, but GPT is generative (decoder) and BERT is bidirectional (encoder)."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder).",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder)."
		},
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Features (X) describe the data points, labels (Y) are the desired prediction targets.",
			"\"Features are outputs, labels are inputs\" is not the best fit for this question. The correct answer is \"Features are input variables, labels are the target values ​​to be predicted\". Features (X) describe the data points, labels (Y) are the desired prediction targets.",
			"\"Both are hyperparameters\" is not the best fit for this question. The correct answer is \"Features are input variables, labels are the target values ​​to be predicted\". Features (X) describe the data points, labels (Y) are the desired prediction targets.",
			"\"Features are numeric only, labels are text only\" is not the best fit for this question. The correct answer is \"Features are input variables, labels are the target values ​​to be predicted\". Features (X) describe the data points, labels (Y) are the desired prediction targets."
		],
		"optionExplanationsDe": [
			"Richtig: Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.",
			"\"Features sind Ausgaben, Labels sind Eingaben\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte\". Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.",
			"\"Beides sind Hyperparameter\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte\". Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.",
			"\"Features sind nur numerisch, Labels nur Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte\". Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Validation data simulates new, unseen data and shows whether the model generalizes.",
			"\"Because Azure only accepts two files\" is not the best fit for this question. The correct answer is \"To check model performance on unseen data and detect overfitting\". Validation data simulates new, unseen data and shows whether the model generalizes.",
			"\"To save storage space\" is not the best fit for this question. The correct answer is \"To check model performance on unseen data and detect overfitting\". Validation data simulates new, unseen data and shows whether the model generalizes.",
			"\"Because training data never needs to be validated\" is not the best fit for this question. The correct answer is \"To check model performance on unseen data and detect overfitting\". Validation data simulates new, unseen data and shows whether the model generalizes."
		],
		"optionExplanationsDe": [
			"Richtig: Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.",
			"\"Weil Azure nur zwei Dateien akzeptiert\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen\". Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.",
			"\"Um Speicherplatz zu sparen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen\". Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.",
			"\"Weil Trainingsdaten nie validiert werden mussen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen\". Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert."
		],
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
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
		],
		"optionExplanations": [
			"Correct: Compute Instances are for development, Compute Clusters are for scalable training.",
			"\"Azure DNS\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Compute (Compute Instances and Clusters)\". Compute Instances are for development, Compute Clusters are for scalable training.",
			"\"Azure CDN\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Compute (Compute Instances and Clusters)\". Compute Instances are for development, Compute Clusters are for scalable training.",
			"\"Azure Key Vault\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Compute (Compute Instances and Clusters)\". Compute Instances are for development, Compute Clusters are for scalable training."
		],
		"optionExplanationsDe": [
			"Richtig: Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.",
			"\"Azure DNS\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Compute (Compute Instances und Clusters)\". Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.",
			"\"Azure CDN\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Compute (Compute Instances und Clusters)\". Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.",
			"\"Azure Key Vault\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Compute (Compute Instances und Clusters)\". Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
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
		],
		"optionExplanations": [
			"Correct: Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
			"\"A hardware manufacturer\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing and deploying AI applications\". Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
			"\"A pure storage service\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing and deploying AI applications\". Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
			"\"A network monitoring tool\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing and deploying AI applications\". Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure."
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.",
			"\"Ein Hardware-Hersteller\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen\". Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.",
			"\"Ein reiner Speicherdienst\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen\". Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.",
			"\"Ein Netzwerk-Monitoring-Tool\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen\". Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
			"\"Microsoft proprietary models only\" is not the best fit for this question. The correct answer is \"A collection of pre-built AI models from various vendors for testing and deployment\". The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
			"\"Image generators only\" is not the best fit for this question. The correct answer is \"A collection of pre-built AI models from various vendors for testing and deployment\". The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
			"\"Hardware specifications\" is not the best fit for this question. The correct answer is \"A collection of pre-built AI models from various vendors for testing and deployment\". The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others."
		],
		"optionExplanationsDe": [
			"Richtig: Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.",
			"\"Nur Microsoft-eigene Modelle\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen\". Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.",
			"\"Nur Bildgeneratoren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen\". Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.",
			"\"Hardware-Spezifikationen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen\". Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. The Model Catalog provides benchmarks and playground tests for various models.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. The Model Catalog provides benchmarks and playground tests for various models."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle."
		},
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Content filters in Azure OpenAI check prompts and responses for malicious content.",
			"\"Use only open source models\" is not the best fit for this question. The correct answer is \"Content filtering to block malicious input and output\". Content filters in Azure OpenAI check prompts and responses for malicious content.",
			"\"Make all prompts public\" is not the best fit for this question. The correct answer is \"Content filtering to block malicious input and output\". Content filters in Azure OpenAI check prompts and responses for malicious content.",
			"\"Always set the temperature to maximum\" is not the best fit for this question. The correct answer is \"Content filtering to block malicious input and output\". Content filters in Azure OpenAI check prompts and responses for malicious content."
		],
		"optionExplanationsDe": [
			"Richtig: Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.",
			"\"Nur Open-Source-Modelle verwenden\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren\". Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.",
			"\"Alle Prompts offentlich machen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren\". Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.",
			"\"Temperature immer auf Maximum setzen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren\". Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte."
		],
		"learnRef": {
			"title": "(AI-900) Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "(AI-900) Einstieg in Generative AI und Agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
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
		],
		"optionExplanations": [
			"Correct: Language models learn statistical patterns in language and can generate or complete text.",
			"\"Translating programming languages\" is not the best fit for this question. The correct answer is \"Predicting the next word or token based on context\". Language models learn statistical patterns in language and can generate or complete text.",
			"\"Creating language courses\" is not the best fit for this question. The correct answer is \"Predicting the next word or token based on context\". Language models learn statistical patterns in language and can generate or complete text.",
			"\"Compressing text files\" is not the best fit for this question. The correct answer is \"Predicting the next word or token based on context\". Language models learn statistical patterns in language and can generate or complete text."
		],
		"optionExplanationsDe": [
			"Richtig: Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.",
			"\"Das Ubersetzen von Programmiersprachen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext\". Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.",
			"\"Das Erstellen von Sprachkursen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext\". Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.",
			"\"Das Komprimieren von Textdateien\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext\". Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen."
		],
		"learnRef": {
			"title": "Introduction to natural language processing concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-language/"
		},
		"learnRefDe": {
			"title": "Introduction to natural language processing concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/introduction-language/"
		}
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
		],
		"optionExplanations": [
			"Correct: Managed endpoints enable real-time and batch inference for deployed models.",
			"\"Azure DNS Zones\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Managed Endpoints\". Managed endpoints enable real-time and batch inference for deployed models.",
			"\"Azure Active Directory\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Managed Endpoints\". Managed endpoints enable real-time and batch inference for deployed models.",
			"\"Azure Key Vault\" is not the best fit for this question. The correct answer is \"Azure Machine Learning Managed Endpoints\". Managed endpoints enable real-time and batch inference for deployed models."
		],
		"optionExplanationsDe": [
			"Richtig: Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.",
			"\"Azure DNS Zones\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Managed Endpoints\". Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.",
			"\"Azure Active Directory\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Managed Endpoints\". Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.",
			"\"Azure Key Vault\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Azure Machine Learning Managed Endpoints\". Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
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
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. CNNs are specifically optimized for processing grid-shaped data such as images.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. CNNs are specifically optimized for processing grid-shaped data such as images."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert."
		},
		"learnRef": {
			"title": "Introduction to machine learning concepts",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		},
		"learnRefDe": {
			"title": "Introduction to machine learning concepts (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/fundamentals-machine-learning/"
		}
	}
];
