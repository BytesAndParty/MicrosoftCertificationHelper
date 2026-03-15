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
	},
	{
		"id": "q79",
		"topic": "Computer Vision",
		"prompt": "Which Azure AI Vision capability generates a natural-language sentence describing an image?",
		"hint": "Think about which feature produces human-readable text about the visual content of a photo.",
		"options": [
			"Image tagging",
			"Image captioning",
			"Smart cropping",
			"Spatial analysis"
		],
		"optionExplanations": [
			"\"Image tagging\" is not the best fit for this question. The correct answer is \"Image captioning\". Image tagging returns individual keywords, not full sentences describing the scene.",
			"Correct: Image captioning generates a natural-language description of the image content.",
			"\"Smart cropping\" is not the best fit for this question. The correct answer is \"Image captioning\". Smart cropping identifies areas of interest for thumbnails but does not produce text descriptions.",
			"\"Spatial analysis\" is not the best fit for this question. The correct answer is \"Image captioning\". Spatial analysis detects people movement in video feeds, not text descriptions of images."
		],
		"answerIndex": 1,
		"explanation": "Image captioning in Azure AI Vision analyzes an image and returns a human-readable sentence describing its content.",
		"promptDe": "Welche Funktion von Azure AI Vision erzeugt einen naturlichsprachlichen Satz, der ein Bild beschreibt?",
		"hintDe": "Uberlege, welches Feature menschlich lesbaren Text uber den visuellen Inhalt eines Fotos erstellt.",
		"explanationDe": "Bildbeschriftung in Azure AI Vision analysiert ein Bild und gibt einen menschlich lesbaren Satz zuruck, der den Inhalt beschreibt.",
		"optionsDe": [
			"Bild-Tagging",
			"Bildbeschriftung",
			"Smart Cropping",
			"Raumliche Analyse"
		],
		"optionExplanationsDe": [
			"\"Bild-Tagging\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bildbeschriftung\". Bild-Tagging gibt einzelne Schlusselworter zuruck, keine vollstandigen Satze.",
			"Richtig: Bildbeschriftung erzeugt eine naturlichsprachliche Beschreibung des Bildinhalts.",
			"\"Smart Cropping\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bildbeschriftung\". Smart Cropping identifiziert Interessenbereiche fur Thumbnails, erzeugt aber keine Textbeschreibungen.",
			"\"Raumliche Analyse\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Bildbeschriftung\". Raumliche Analyse erkennt Personenbewegungen in Videofeeds, nicht Textbeschreibungen von Bildern."
		],
		"learnRef": {
			"title": "Analyze images with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		},
		"learnRefDe": {
			"title": "Analyze images with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		}
	},
	{
		"id": "q80",
		"topic": "Computer Vision",
		"prompt": "What does the image tagging feature in Azure AI Vision return?",
		"hint": "Consider the difference between individual labels and full sentences.",
		"options": [
			"A single confidence score for the whole image",
			"A list of relevant tags with confidence scores",
			"A bounding box around every object",
			"A translated caption in multiple languages"
		],
		"optionExplanations": [
			"\"A single confidence score for the whole image\" is not the best fit for this question. The correct answer is \"A list of relevant tags with confidence scores\". Image tagging returns multiple tags, not a single overall score.",
			"Correct: Image tagging returns a set of relevant keyword tags, each with an associated confidence score.",
			"\"A bounding box around every object\" is not the best fit for this question. The correct answer is \"A list of relevant tags with confidence scores\". Bounding boxes are returned by object detection, not by tagging.",
			"\"A translated caption in multiple languages\" is not the best fit for this question. The correct answer is \"A list of relevant tags with confidence scores\". Translated captions are not the output of image tagging."
		],
		"answerIndex": 1,
		"explanation": "Image tagging analyzes visual content and returns keyword tags, each with a confidence score indicating how likely the tag applies.",
		"promptDe": "Was gibt die Bild-Tagging-Funktion in Azure AI Vision zuruck?",
		"hintDe": "Uberlege den Unterschied zwischen einzelnen Labels und ganzen Satzen.",
		"explanationDe": "Bild-Tagging analysiert den visuellen Inhalt und gibt eine Liste von Schlusselwort-Tags zuruck, jeweils mit einem Konfidenzwert.",
		"optionsDe": [
			"Einen einzelnen Konfidenzwert fur das gesamte Bild",
			"Eine Liste relevanter Tags mit Konfidenzwerten",
			"Einen Begrenzungsrahmen um jedes Objekt",
			"Eine ubersetzte Beschriftung in mehreren Sprachen"
		],
		"optionExplanationsDe": [
			"\"Einen einzelnen Konfidenzwert fur das gesamte Bild\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Liste relevanter Tags mit Konfidenzwerten\". Bild-Tagging gibt mehrere Tags zuruck, nicht einen einzelnen Gesamtwert.",
			"Richtig: Bild-Tagging gibt eine Reihe relevanter Schlusselwort-Tags zuruck, jeweils mit einem Konfidenzwert.",
			"\"Einen Begrenzungsrahmen um jedes Objekt\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Liste relevanter Tags mit Konfidenzwerten\". Begrenzungsrahmen werden durch Objekterkennung geliefert, nicht durch Tagging.",
			"\"Eine ubersetzte Beschriftung in mehreren Sprachen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Liste relevanter Tags mit Konfidenzwerten\". Ubersetzte Beschriftungen sind nicht die Ausgabe von Bild-Tagging."
		],
		"learnRef": {
			"title": "Analyze images with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		},
		"learnRefDe": {
			"title": "Analyze images with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		}
	},
	{
		"id": "q81",
		"topic": "Computer Vision",
		"prompt": "Which Azure AI Vision feature automatically selects the most visually interesting region when generating a thumbnail?",
		"hint": "Think about which feature focuses on the area of interest rather than just center-cropping.",
		"options": [
			"Object detection",
			"Smart cropping",
			"Optical character recognition",
			"Image classification"
		],
		"optionExplanations": [
			"\"Object detection\" is not the best fit for this question. The correct answer is \"Smart cropping\". Object detection identifies and locates objects but does not generate thumbnails.",
			"Correct: Smart cropping uses area-of-interest detection to create thumbnails focused on the most important part of the image.",
			"\"Optical character recognition\" is not the best fit for this question. The correct answer is \"Smart cropping\". OCR extracts text from images and is unrelated to thumbnail generation.",
			"\"Image classification\" is not the best fit for this question. The correct answer is \"Smart cropping\". Image classification assigns category labels, it does not generate thumbnails."
		],
		"answerIndex": 1,
		"explanation": "Smart cropping in Azure AI Vision identifies the area of interest in an image and generates a thumbnail focused on that region.",
		"promptDe": "Welche Azure AI Vision-Funktion wahlt automatisch den visuell interessantesten Bereich beim Erstellen eines Thumbnails aus?",
		"hintDe": "Uberlege, welche Funktion sich auf den Interessenbereich konzentriert, statt nur in der Mitte zu beschneiden.",
		"explanationDe": "Smart Cropping in Azure AI Vision identifiziert den Interessenbereich in einem Bild und erstellt ein Thumbnail, das auf diesen Bereich fokussiert ist.",
		"optionsDe": [
			"Objekterkennung",
			"Smart Cropping",
			"Optische Zeichenerkennung",
			"Bildklassifizierung"
		],
		"optionExplanationsDe": [
			"\"Objekterkennung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Smart Cropping\". Objekterkennung identifiziert und lokalisiert Objekte, erstellt aber keine Thumbnails.",
			"Richtig: Smart Cropping nutzt die Erkennung von Interessenbereichen, um Thumbnails zu erstellen, die auf den wichtigsten Teil des Bildes fokussiert sind.",
			"\"Optische Zeichenerkennung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Smart Cropping\". OCR extrahiert Text aus Bildern und hat nichts mit Thumbnail-Erstellung zu tun.",
			"\"Bildklassifizierung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Smart Cropping\". Bildklassifizierung weist Kategorielabels zu, erstellt aber keine Thumbnails."
		],
		"learnRef": {
			"title": "Analyze images with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		},
		"learnRefDe": {
			"title": "Analyze images with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-images/"
		}
	},
	{
		"id": "q82",
		"topic": "Computer Vision",
		"prompt": "Which Azure AI Vision capability can detect and track people moving through a defined zone in a video feed?",
		"hint": "Consider which feature is designed for monitoring physical spaces in real time.",
		"options": [
			"Image captioning",
			"Custom Vision classification",
			"Spatial analysis",
			"OCR"
		],
		"optionExplanations": [
			"\"Image captioning\" is not the best fit for this question. The correct answer is \"Spatial analysis\". Image captioning generates text descriptions of static images, it does not track movement.",
			"\"Custom Vision classification\" is not the best fit for this question. The correct answer is \"Spatial analysis\". Custom Vision classifies images into categories but does not perform real-time people tracking.",
			"Correct: Spatial analysis in Azure AI Vision can detect people, track their movement, and monitor defined zones in video feeds.",
			"\"OCR\" is not the best fit for this question. The correct answer is \"Spatial analysis\". OCR extracts text from images and is not related to people tracking."
		],
		"answerIndex": 2,
		"explanation": "Spatial analysis uses video feeds to detect people and understand their movement through physical spaces.",
		"promptDe": "Welche Azure AI Vision-Funktion kann Personen erkennen und verfolgen, die sich durch eine definierte Zone in einem Videofeed bewegen?",
		"hintDe": "Uberlege, welches Feature fur die Uberwachung physischer Raume in Echtzeit konzipiert ist.",
		"explanationDe": "Raumliche Analyse nutzt Videofeeds, um Personen zu erkennen und ihre Bewegung durch physische Raume zu verstehen.",
		"optionsDe": [
			"Bildbeschriftung",
			"Custom Vision Klassifizierung",
			"Raumliche Analyse",
			"OCR"
		],
		"optionExplanationsDe": [
			"\"Bildbeschriftung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Raumliche Analyse\". Bildbeschriftung erzeugt Textbeschreibungen statischer Bilder, verfolgt keine Bewegungen.",
			"\"Custom Vision Klassifizierung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Raumliche Analyse\". Custom Vision klassifiziert Bilder, fuhrt aber keine Personenverfolgung durch.",
			"Richtig: Raumliche Analyse kann Personen erkennen, ihre Bewegung verfolgen und definierte Zonen uberwachen.",
			"\"OCR\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Raumliche Analyse\". OCR extrahiert Text aus Bildern."
		],
		"learnRef": {
			"title": "Analyze video with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
		},
		"learnRefDe": {
			"title": "Analyze video with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
		}
	},
	{
		"id": "q83",
		"topic": "Computer Vision",
		"prompt": "What is the primary difference between face detection and face verification in Azure AI Face?",
		"hint": "One finds faces in an image, the other checks if two faces belong to the same person.",
		"options": [
			"Face detection identifies a specific person; face verification finds faces",
			"Face detection locates faces in an image; face verification checks if two faces match the same person",
			"Face detection requires enrollment; face verification does not",
			"There is no difference; they are the same operation"
		],
		"optionExplanations": [
			"\"Face detection identifies a specific person; face verification finds faces\" is not the best fit for this question. The correct answer is \"Face detection locates faces in an image; face verification checks if two faces match the same person\". This reverses the definitions.",
			"Correct: Face detection locates and returns bounding boxes for faces, while face verification performs a one-to-one match between two faces.",
			"\"Face detection requires enrollment; face verification does not\" is not the best fit for this question. The correct answer is \"Face detection locates faces in an image; face verification checks if two faces match the same person\". Face detection does not require enrollment.",
			"\"There is no difference; they are the same operation\" is not the best fit for this question. The correct answer is \"Face detection locates faces in an image; face verification checks if two faces match the same person\". They are distinct operations."
		],
		"answerIndex": 1,
		"explanation": "Face detection finds faces and returns locations. Face verification is a one-to-one comparison checking whether two faces belong to the same individual.",
		"promptDe": "Was ist der Hauptunterschied zwischen Gesichtserkennung und Gesichtsverifizierung in Azure AI Face?",
		"hintDe": "Eine findet Gesichter in einem Bild, die andere pruft, ob zwei Gesichter zur selben Person gehoren.",
		"explanationDe": "Gesichtserkennung findet Gesichter und gibt deren Positionen zuruck. Gesichtsverifizierung ist ein Eins-zu-eins-Vergleich.",
		"optionsDe": [
			"Gesichtserkennung identifiziert eine bestimmte Person; Gesichtsverifizierung findet Gesichter",
			"Gesichtserkennung lokalisiert Gesichter; Gesichtsverifizierung pruft, ob zwei Gesichter zur selben Person gehoren",
			"Gesichtserkennung erfordert Registrierung; Gesichtsverifizierung nicht",
			"Es gibt keinen Unterschied; es ist dieselbe Operation"
		],
		"optionExplanationsDe": [
			"\"Gesichtserkennung identifiziert eine bestimmte Person; Gesichtsverifizierung findet Gesichter\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung lokalisiert Gesichter; Gesichtsverifizierung pruft, ob zwei Gesichter zur selben Person gehoren\". Dies vertauscht die Definitionen.",
			"Richtig: Gesichtserkennung lokalisiert Gesichter und gibt Begrenzungsrahmen zuruck, wahrend Gesichtsverifizierung einen Eins-zu-eins-Vergleich durchfuhrt.",
			"\"Gesichtserkennung erfordert Registrierung; Gesichtsverifizierung nicht\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung lokalisiert Gesichter; Gesichtsverifizierung pruft, ob zwei Gesichter zur selben Person gehoren\". Gesichtserkennung erfordert keine Registrierung.",
			"\"Es gibt keinen Unterschied; es ist dieselbe Operation\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Gesichtserkennung lokalisiert Gesichter; Gesichtsverifizierung pruft, ob zwei Gesichter zur selben Person gehoren\". Es sind verschiedene Operationen."
		],
		"learnRef": {
			"title": "Detect and analyze faces with Azure AI Face",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		},
		"learnRefDe": {
			"title": "Detect and analyze faces with Azure AI Face (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		}
	},
	{
		"id": "q84",
		"topic": "Computer Vision",
		"prompt": "What does face identification do in Azure AI Face, compared to face verification?",
		"hint": "One is a one-to-one check, the other searches among many enrolled faces.",
		"options": [
			"It detects faces without matching them",
			"It performs a one-to-one comparison between two face images",
			"It matches a detected face against a group of enrolled persons to determine who it is",
			"It generates a synthetic face image from text"
		],
		"optionExplanations": [
			"\"It detects faces without matching them\" is not the best fit for this question. The correct answer is \"It matches a detected face against a group of enrolled persons to determine who it is\". Detecting without matching is face detection.",
			"\"It performs a one-to-one comparison between two face images\" is not the best fit for this question. The correct answer is \"It matches a detected face against a group of enrolled persons to determine who it is\". A one-to-one comparison is face verification.",
			"Correct: Face identification performs a one-to-many search, matching a detected face against enrolled persons to determine identity.",
			"\"It generates a synthetic face image from text\" is not the best fit for this question. The correct answer is \"It matches a detected face against a group of enrolled persons to determine who it is\". That is an image generation task."
		],
		"answerIndex": 2,
		"explanation": "Face identification is a one-to-many operation comparing a detected face against a group of enrolled persons to determine identity.",
		"promptDe": "Was macht Gesichtsidentifizierung in Azure AI Face im Vergleich zur Gesichtsverifizierung?",
		"hintDe": "Eine ist ein Eins-zu-eins-Vergleich, die andere sucht unter vielen registrierten Gesichtern.",
		"explanationDe": "Gesichtsidentifizierung ist eine Eins-zu-viele-Operation, die ein erkanntes Gesicht mit registrierten Personen abgleicht.",
		"optionsDe": [
			"Sie erkennt Gesichter, ohne sie zuzuordnen",
			"Sie fuhrt einen Eins-zu-eins-Vergleich durch",
			"Sie gleicht ein erkanntes Gesicht mit einer Gruppe registrierter Personen ab",
			"Sie generiert ein synthetisches Gesichtsbild aus Text"
		],
		"optionExplanationsDe": [
			"\"Sie erkennt Gesichter, ohne sie zuzuordnen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie gleicht ein erkanntes Gesicht mit einer Gruppe registrierter Personen ab\". Das ist Gesichtserkennung, nicht Identifizierung.",
			"\"Sie fuhrt einen Eins-zu-eins-Vergleich durch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie gleicht ein erkanntes Gesicht mit einer Gruppe registrierter Personen ab\". Ein Eins-zu-eins-Vergleich ist Verifizierung.",
			"Richtig: Gesichtsidentifizierung fuhrt eine Eins-zu-viele-Suche durch und gleicht ein erkanntes Gesicht mit registrierten Personen ab.",
			"\"Sie generiert ein synthetisches Gesichtsbild aus Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sie gleicht ein erkanntes Gesicht mit einer Gruppe registrierter Personen ab\". Das ist eine Bildgenerierungsaufgabe."
		],
		"learnRef": {
			"title": "Detect and analyze faces with Azure AI Face",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		},
		"learnRefDe": {
			"title": "Detect and analyze faces with Azure AI Face (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		}
	},
	{
		"id": "q85",
		"topic": "Computer Vision",
		"prompt": "What is liveness detection in Azure AI Face used for?",
		"hint": "Think about preventing someone from holding up a photo to impersonate another person.",
		"options": [
			"Determining the age and gender of a detected face",
			"Verifying that the face in front of the camera is a real person and not a photo or mask",
			"Identifying which person in a database a face belongs to",
			"Detecting emotional expressions on a face"
		],
		"optionExplanations": [
			"\"Determining the age and gender of a detected face\" is not the best fit for this question. The correct answer is \"Verifying that the face in front of the camera is a real person and not a photo or mask\". Age estimation is face attribute analysis, not liveness.",
			"Correct: Liveness detection determines whether the face presented to the camera is a live person, preventing spoofing attacks using photos, videos, or masks.",
			"\"Identifying which person in a database a face belongs to\" is not the best fit for this question. The correct answer is \"Verifying that the face in front of the camera is a real person and not a photo or mask\". That is face identification.",
			"\"Detecting emotional expressions on a face\" is not the best fit for this question. The correct answer is \"Verifying that the face in front of the camera is a real person and not a photo or mask\". Emotion detection does not verify liveness."
		],
		"answerIndex": 1,
		"explanation": "Liveness detection verifies that the face presented to the camera belongs to a real, physically present person, preventing spoofing with photos, videos, or masks.",
		"promptDe": "Wofur wird die Liveness-Erkennung in Azure AI Face verwendet?",
		"hintDe": "Denke daran, dass jemand ein Foto vorhalten konnte, um sich als andere Person auszugeben.",
		"explanationDe": "Liveness-Erkennung verifiziert, dass das Gesicht vor der Kamera einer echten, physisch anwesenden Person gehort.",
		"optionsDe": [
			"Bestimmung von Alter und Geschlecht eines erkannten Gesichts",
			"Verifizierung, dass das Gesicht vor der Kamera eine echte Person ist und kein Foto oder eine Maske",
			"Identifizierung, welcher Person in einer Datenbank ein Gesicht gehort",
			"Erkennung emotionaler Ausdrucke auf einem Gesicht"
		],
		"optionExplanationsDe": [
			"\"Bestimmung von Alter und Geschlecht\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verifizierung, dass das Gesicht vor der Kamera eine echte Person ist und kein Foto oder eine Maske\". Altersschatzung ist Gesichtsattribut-Analyse.",
			"Richtig: Liveness-Erkennung bestimmt, ob das Gesicht einer lebenden Person gehort, und verhindert Spoofing-Angriffe.",
			"\"Identifizierung, welcher Person ein Gesicht gehort\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verifizierung, dass das Gesicht vor der Kamera eine echte Person ist und kein Foto oder eine Maske\". Das ist Gesichtsidentifizierung.",
			"\"Erkennung emotionaler Ausdrucke\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Verifizierung, dass das Gesicht vor der Kamera eine echte Person ist und kein Foto oder eine Maske\". Emotionserkennung pruft keine Liveness."
		],
		"learnRef": {
			"title": "Detect and analyze faces with Azure AI Face",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		},
		"learnRefDe": {
			"title": "Detect and analyze faces with Azure AI Face (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-analyze-faces/"
		}
	},
	{
		"id": "q86",
		"topic": "Computer Vision",
		"prompt": "Which Azure AI Vision feature can extract printed and handwritten text from images?",
		"hint": "Think about which capability reads characters from visual media like photos or scanned documents.",
		"options": [
			"Image captioning",
			"Image tagging",
			"OCR (Read API)",
			"Smart cropping"
		],
		"optionExplanations": [
			"\"Image captioning\" is not the best fit for this question. The correct answer is \"OCR (Read API)\". Image captioning describes the scene in natural language, it does not extract text characters.",
			"\"Image tagging\" is not the best fit for this question. The correct answer is \"OCR (Read API)\". Image tagging returns keyword labels for visual content, not text extraction.",
			"Correct: The OCR Read API in Azure AI Vision extracts both printed and handwritten text from images and documents.",
			"\"Smart cropping\" is not the best fit for this question. The correct answer is \"OCR (Read API)\". Smart cropping generates thumbnails focused on areas of interest."
		],
		"answerIndex": 2,
		"explanation": "The OCR Read API in Azure AI Vision can extract both printed and handwritten text from images, PDFs, and other documents.",
		"promptDe": "Welche Azure AI Vision-Funktion kann gedruckten und handgeschriebenen Text aus Bildern extrahieren?",
		"hintDe": "Uberlege, welche Fahigkeit Zeichen aus visuellen Medien wie Fotos oder gescannten Dokumenten liest.",
		"explanationDe": "Die OCR Read API in Azure AI Vision kann sowohl gedruckten als auch handgeschriebenen Text aus Bildern und Dokumenten extrahieren.",
		"optionsDe": [
			"Bildbeschriftung",
			"Bild-Tagging",
			"OCR (Read API)",
			"Smart Cropping"
		],
		"optionExplanationsDe": [
			"\"Bildbeschriftung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"OCR (Read API)\". Bildbeschriftung beschreibt die Szene in naturlicher Sprache.",
			"\"Bild-Tagging\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"OCR (Read API)\". Bild-Tagging gibt Schlusselwort-Labels fur visuellen Inhalt zuruck.",
			"Richtig: Die OCR Read API extrahiert sowohl gedruckten als auch handgeschriebenen Text aus Bildern und Dokumenten.",
			"\"Smart Cropping\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"OCR (Read API)\". Smart Cropping erstellt Thumbnails."
		],
		"learnRef": {
			"title": "Read text with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/read-text-images-documents-with-computer-vision-service/"
		},
		"learnRefDe": {
			"title": "Read text with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/read-text-images-documents-with-computer-vision-service/"
		}
	},
	{
		"id": "q87",
		"topic": "Computer Vision",
		"prompt": "What is the difference between semantic segmentation and instance segmentation?",
		"hint": "Both label pixels, but one distinguishes individual objects of the same class while the other does not.",
		"options": [
			"Semantic segmentation labels each pixel with a class; instance segmentation also separates individual objects of the same class",
			"Instance segmentation labels pixels; semantic segmentation draws bounding boxes",
			"They are identical techniques with different names",
			"Semantic segmentation only works on video; instance segmentation only on images"
		],
		"optionExplanations": [
			"Correct: Semantic segmentation assigns a class to each pixel. Instance segmentation goes further by distinguishing between separate objects of the same class.",
			"\"Instance segmentation labels pixels; semantic segmentation draws bounding boxes\" is not the best fit for this question. The correct answer is \"Semantic segmentation labels each pixel with a class; instance segmentation also separates individual objects of the same class\". Both label pixels; bounding boxes are from object detection.",
			"\"They are identical techniques with different names\" is not the best fit for this question. The correct answer is \"Semantic segmentation labels each pixel with a class; instance segmentation also separates individual objects of the same class\". They differ in how individual instances are handled.",
			"\"Semantic segmentation only works on video; instance segmentation only on images\" is not the best fit for this question. The correct answer is \"Semantic segmentation labels each pixel with a class; instance segmentation also separates individual objects of the same class\". Both can work on images and video."
		],
		"answerIndex": 0,
		"explanation": "Semantic segmentation assigns a class label to every pixel. Instance segmentation additionally distinguishes individual objects of the same class.",
		"promptDe": "Was ist der Unterschied zwischen semantischer Segmentierung und Instanz-Segmentierung?",
		"hintDe": "Beide labeln Pixel, aber eine unterscheidet einzelne Objekte derselben Klasse, die andere nicht.",
		"explanationDe": "Semantische Segmentierung weist jedem Pixel ein Klassenlabel zu. Instanz-Segmentierung unterscheidet zusatzlich einzelne Objekte derselben Klasse.",
		"optionsDe": [
			"Semantische Segmentierung labelt jedes Pixel mit einer Klasse; Instanz-Segmentierung trennt auch einzelne Objekte derselben Klasse",
			"Instanz-Segmentierung labelt Pixel; semantische Segmentierung zeichnet Begrenzungsrahmen",
			"Es sind identische Techniken mit verschiedenen Namen",
			"Semantische Segmentierung funktioniert nur bei Video; Instanz-Segmentierung nur bei Bildern"
		],
		"optionExplanationsDe": [
			"Richtig: Semantische Segmentierung weist jedem Pixel eine Klasse zu. Instanz-Segmentierung unterscheidet zusatzlich einzelne Objekte derselben Klasse.",
			"\"Instanz-Segmentierung labelt Pixel; semantische Segmentierung zeichnet Begrenzungsrahmen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Semantische Segmentierung labelt jedes Pixel mit einer Klasse; Instanz-Segmentierung trennt auch einzelne Objekte derselben Klasse\". Begrenzungsrahmen stammen von der Objekterkennung.",
			"\"Es sind identische Techniken\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Semantische Segmentierung labelt jedes Pixel mit einer Klasse; Instanz-Segmentierung trennt auch einzelne Objekte derselben Klasse\". Sie unterscheiden sich.",
			"\"Semantische Segmentierung funktioniert nur bei Video\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Semantische Segmentierung labelt jedes Pixel mit einer Klasse; Instanz-Segmentierung trennt auch einzelne Objekte derselben Klasse\". Beide konnen auf Bildern und Video arbeiten."
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
		"id": "q88",
		"topic": "Computer Vision",
		"prompt": "What does Custom Vision allow you to do?",
		"hint": "Think about what happens when the pre-built models do not cover your specific use case.",
		"options": [
			"Train custom image classification or object detection models with your own labeled images",
			"Only use pre-built Microsoft models without customization",
			"Generate new images from text descriptions",
			"Translate text between languages"
		],
		"optionExplanations": [
			"Correct: Custom Vision lets you upload labeled images and train custom classifiers or object detectors for domain-specific scenarios.",
			"\"Only use pre-built Microsoft models without customization\" is not the best fit for this question. The correct answer is \"Train custom image classification or object detection models with your own labeled images\". Custom Vision is specifically for training custom models.",
			"\"Generate new images from text descriptions\" is not the best fit for this question. The correct answer is \"Train custom image classification or object detection models with your own labeled images\". Image generation from text is DALL-E.",
			"\"Translate text between languages\" is not the best fit for this question. The correct answer is \"Train custom image classification or object detection models with your own labeled images\". Translation is Azure AI Translator."
		],
		"answerIndex": 0,
		"explanation": "Custom Vision allows you to train custom image classification and object detection models using your own labeled images.",
		"promptDe": "Was ermoglicht Custom Vision?",
		"hintDe": "Uberlege, was passiert, wenn die vorgefertigten Modelle deinen spezifischen Anwendungsfall nicht abdecken.",
		"explanationDe": "Custom Vision ermoglicht das Training eigener Bildklassifizierungs- und Objekterkennungsmodelle mit eigenen gelabelten Bildern.",
		"optionsDe": [
			"Eigene Bildklassifizierungs- oder Objekterkennungsmodelle mit eigenen gelabelten Bildern trainieren",
			"Nur vorgefertigte Microsoft-Modelle ohne Anpassung verwenden",
			"Neue Bilder aus Textbeschreibungen generieren",
			"Text zwischen Sprachen ubersetzen"
		],
		"optionExplanationsDe": [
			"Richtig: Custom Vision ermoglicht das Hochladen eigener gelabelter Bilder und das Training benutzerdefinierter Klassifikatoren oder Objektdetektoren.",
			"\"Nur vorgefertigte Microsoft-Modelle\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eigene Bildklassifizierungs- oder Objekterkennungsmodelle mit eigenen gelabelten Bildern trainieren\". Custom Vision ist fur eigene Modelle konzipiert.",
			"\"Neue Bilder aus Textbeschreibungen generieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eigene Bildklassifizierungs- oder Objekterkennungsmodelle mit eigenen gelabelten Bildern trainieren\". Bildgenerierung ist DALL-E.",
			"\"Text zwischen Sprachen ubersetzen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eigene Bildklassifizierungs- oder Objekterkennungsmodelle mit eigenen gelabelten Bildern trainieren\". Ubersetzung ist Azure AI Translator."
		],
		"learnRef": {
			"title": "Classify images with Custom Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		},
		"learnRefDe": {
			"title": "Classify images with Custom Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		}
	},
	{
		"id": "q89",
		"topic": "Computer Vision",
		"prompt": "A retail company wants to automatically detect when shelves are empty. Which computer vision approach is most appropriate?",
		"hint": "Think about which technique can identify specific objects or their absence in an image.",
		"options": [
			"Sentiment analysis",
			"Speech recognition",
			"Object detection with a custom model trained on shelf images",
			"Language translation"
		],
		"optionExplanations": [
			"\"Sentiment analysis\" is not the best fit for this question. The correct answer is \"Object detection with a custom model trained on shelf images\". Sentiment analysis evaluates text mood, not visual shelf monitoring.",
			"\"Speech recognition\" is not the best fit for this question. The correct answer is \"Object detection with a custom model trained on shelf images\". Speech recognition converts audio to text.",
			"Correct: Object detection with a custom model can be trained to recognize empty shelf regions, enabling automated inventory monitoring.",
			"\"Language translation\" is not the best fit for this question. The correct answer is \"Object detection with a custom model trained on shelf images\". Language translation has nothing to do with shelf monitoring."
		],
		"answerIndex": 2,
		"explanation": "Object detection with a custom model trained on shelf images can identify empty shelf areas and trigger alerts for restocking.",
		"promptDe": "Ein Einzelhandelsunternehmen mochte automatisch erkennen, wenn Regale leer sind. Welcher Computer-Vision-Ansatz ist am besten geeignet?",
		"hintDe": "Uberlege, welche Technik bestimmte Objekte oder deren Abwesenheit in einem Bild erkennen kann.",
		"explanationDe": "Objekterkennung mit einem auf Regalbilder trainierten Modell kann leere Regalbereiche identifizieren und Nachfullwarnungen auslosen.",
		"optionsDe": [
			"Sentimentanalyse",
			"Spracherkennung",
			"Objekterkennung mit einem auf Regalbilder trainierten Modell",
			"Sprachubersetzung"
		],
		"optionExplanationsDe": [
			"\"Sentimentanalyse\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Objekterkennung mit einem auf Regalbilder trainierten Modell\". Sentimentanalyse bewertet Textstimmung.",
			"\"Spracherkennung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Objekterkennung mit einem auf Regalbilder trainierten Modell\". Spracherkennung wandelt Audio in Text um.",
			"Richtig: Objekterkennung mit einem benutzerdefinierten Modell kann leere Regalbereiche erkennen und automatische Bestandsuberwachung ermoglichen.",
			"\"Sprachubersetzung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Objekterkennung mit einem auf Regalbilder trainierten Modell\". Sprachubersetzung hat nichts mit Regaluberwachung zu tun."
		],
		"learnRef": {
			"title": "Detect objects in images",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images/"
		},
		"learnRefDe": {
			"title": "Detect objects in images (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/detect-objects-images/"
		}
	},
	{
		"id": "q90",
		"type": "true-false",
		"topic": "Computer Vision",
		"prompt": "Statement: Azure AI Vision can detect and count people in a video feed using spatial analysis.",
		"hint": "Consider the spatial analysis capability and what it monitors in video streams.",
		"correctAnswer": "True",
		"explanation": "Spatial analysis in Azure AI Vision can detect people in video feeds, count them, and track their movement through defined zones.",
		"promptDe": "Aussage: Azure AI Vision kann mit raumlicher Analyse Personen in einem Videofeed erkennen und zahlen.",
		"hintDe": "Denke an die Fahigkeit der raumlichen Analyse und was sie in Videostreams uberwacht.",
		"explanationDe": "Raumliche Analyse in Azure AI Vision kann Personen in Videofeeds erkennen, zahlen und ihre Bewegung verfolgen.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Spatial analysis can detect people in video feeds, count them, and track their movement.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Spatial analysis can detect people in video feeds, count them, and track their movement."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Raumliche Analyse kann Personen in Videofeeds erkennen, zahlen und ihre Bewegung verfolgen.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Raumliche Analyse kann Personen in Videofeeds erkennen, zahlen und ihre Bewegung verfolgen."
		},
		"learnRef": {
			"title": "Analyze video with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
		},
		"learnRefDe": {
			"title": "Analyze video with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-video/"
		}
	},
	{
		"id": "q91",
		"type": "true-false",
		"topic": "Computer Vision",
		"prompt": "Statement: The OCR Read API in Azure AI Vision can only extract printed text, not handwritten text.",
		"hint": "Think about whether modern OCR can handle different writing styles.",
		"correctAnswer": "False",
		"explanation": "The OCR Read API can extract both printed and handwritten text from images and documents.",
		"promptDe": "Aussage: Die OCR Read API in Azure AI Vision kann nur gedruckten Text extrahieren, keinen handgeschriebenen.",
		"hintDe": "Uberlege, ob moderne OCR verschiedene Schreibstile verarbeiten kann.",
		"explanationDe": "Die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren.",
		"correctAnswerDe": "Falsch",
		"optionExplanations": {
			"true": "\"true\" is not the best fit for this question. The correct answer is \"False\". Not correct in this statement. The OCR Read API can extract both printed and handwritten text.",
			"false": "Correct: Correct in this statement. The OCR Read API can extract both printed and handwritten text from images and documents."
		},
		"optionExplanationsDe": {
			"wahr": "\"wahr\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Falsch\". In dieser Aussage nicht korrekt. Die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren.",
			"falsch": "Richtig: Richtig in dieser Aussage. Die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren."
		},
		"learnRef": {
			"title": "Read text with Azure AI Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/read-text-images-documents-with-computer-vision-service/"
		},
		"learnRefDe": {
			"title": "Read text with Azure AI Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/read-text-images-documents-with-computer-vision-service/"
		}
	},
	{
		"id": "q92",
		"topic": "Computer Vision",
		"prompt": "A manufacturing company wants to identify defective parts on a production line using cameras. Which approach is most suitable?",
		"hint": "Think about training a model to distinguish between good and defective parts based on images.",
		"options": [
			"Azure AI Translator",
			"Custom Vision trained on images of good and defective parts",
			"Azure AI Speech",
			"Azure AI Search"
		],
		"optionExplanations": [
			"\"Azure AI Translator\" is not the best fit for this question. The correct answer is \"Custom Vision trained on images of good and defective parts\". Translator handles language translation, not visual inspection.",
			"Correct: Custom Vision can be trained with labeled images of good and defective parts to classify items on a production line.",
			"\"Azure AI Speech\" is not the best fit for this question. The correct answer is \"Custom Vision trained on images of good and defective parts\". Speech handles audio, not visual quality inspection.",
			"\"Azure AI Search\" is not the best fit for this question. The correct answer is \"Custom Vision trained on images of good and defective parts\". Search indexes documents, not production line images."
		],
		"answerIndex": 1,
		"explanation": "Custom Vision can be trained with labeled images to perform automated visual quality inspection on a production line.",
		"promptDe": "Ein Fertigungsunternehmen mochte fehlerhafte Teile an einer Produktionslinie per Kamera erkennen. Welcher Ansatz ist am besten geeignet?",
		"hintDe": "Uberlege, ein Modell zu trainieren, das anhand von Bildern zwischen guten und fehlerhaften Teilen unterscheidet.",
		"explanationDe": "Custom Vision kann mit gelabelten Bildern guter und fehlerhafter Teile trainiert werden fur automatische visuelle Qualitatsprufung.",
		"optionsDe": [
			"Azure AI Translator",
			"Custom Vision trainiert mit Bildern von guten und fehlerhaften Teilen",
			"Azure AI Speech",
			"Azure AI Search"
		],
		"optionExplanationsDe": [
			"\"Azure AI Translator\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Custom Vision trainiert mit Bildern von guten und fehlerhaften Teilen\". Translator ubersetzt Sprachen.",
			"Richtig: Custom Vision kann mit gelabelten Bildern guter und fehlerhafter Teile trainiert werden, um Artikel automatisch zu klassifizieren.",
			"\"Azure AI Speech\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Custom Vision trainiert mit Bildern von guten und fehlerhaften Teilen\". Speech verarbeitet Audio.",
			"\"Azure AI Search\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Custom Vision trainiert mit Bildern von guten und fehlerhaften Teilen\". Search indexiert Dokumente."
		],
		"learnRef": {
			"title": "Classify images with Custom Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		},
		"learnRefDe": {
			"title": "Classify images with Custom Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		}
	},
	{
		"id": "q93",
		"type": "true-false",
		"topic": "Computer Vision",
		"prompt": "Statement: Custom Vision requires thousands of training images to create a working model.",
		"hint": "Consider how many images Custom Vision typically needs to get started.",
		"correctAnswer": "False",
		"explanation": "Custom Vision can train effective models with as few as a handful of images per class. It does not require thousands.",
		"promptDe": "Aussage: Custom Vision benotigt tausende Trainingsbilder, um ein funktionierendes Modell zu erstellen.",
		"hintDe": "Uberlege, wie viele Bilder Custom Vision normalerweise zum Start benotigt.",
		"explanationDe": "Custom Vision kann mit wenigen Bildern pro Klasse effektive Modelle trainieren. Es werden keine tausende benotigt.",
		"correctAnswerDe": "Falsch",
		"optionExplanations": {
			"true": "\"true\" is not the best fit for this question. The correct answer is \"False\". Not correct in this statement. Custom Vision can train effective models with relatively few images per class.",
			"false": "Correct: Correct in this statement. Custom Vision can start with a small number of images per class and still produce useful models."
		},
		"optionExplanationsDe": {
			"wahr": "\"wahr\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Falsch\". In dieser Aussage nicht korrekt. Custom Vision kann mit wenigen Bildern pro Klasse effektive Modelle trainieren.",
			"falsch": "Richtig: Richtig in dieser Aussage. Custom Vision kann mit einer kleinen Anzahl von Bildern pro Klasse starten und nutzliche Modelle erstellen."
		},
		"learnRef": {
			"title": "Classify images with Custom Vision",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		},
		"learnRefDe": {
			"title": "Classify images with Custom Vision (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/classify-images/"
		}
	},
	{
		"id": "q94",
		"topic": "Generative AI",
		"prompt": "What is Azure AI Foundry?",
		"hint": "Think about a unified platform for building, evaluating, and deploying AI solutions.",
		"options": [
			"A unified platform for building, testing, and deploying generative AI applications",
			"A virtual machine service for hosting websites",
			"A relational database management system",
			"A network security monitoring tool"
		],
		"optionExplanations": [
			"Correct: Azure AI Foundry (formerly Azure AI Studio) is a unified platform for building, evaluating, and deploying generative AI applications with prompt flow, model catalog, and safety tools.",
			"\"A virtual machine service for hosting websites\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing, and deploying generative AI applications\". Virtual machine hosting is Azure Virtual Machines.",
			"\"A relational database management system\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing, and deploying generative AI applications\". Relational databases are Azure SQL.",
			"\"A network security monitoring tool\" is not the best fit for this question. The correct answer is \"A unified platform for building, testing, and deploying generative AI applications\". Network security monitoring is Azure Network Watcher."
		],
		"answerIndex": 0,
		"explanation": "Azure AI Foundry is a unified platform for building, evaluating, and deploying generative AI applications, featuring prompt flow, model catalog, and safety tools.",
		"promptDe": "Was ist Azure AI Foundry?",
		"hintDe": "Denke an eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Losungen.",
		"explanationDe": "Azure AI Foundry ist eine einheitliche Plattform zum Erstellen, Evaluieren und Bereitstellen generativer KI-Anwendungen mit Prompt Flow, Modellkatalog und Sicherheitstools.",
		"optionsDe": [
			"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen generativer KI-Anwendungen",
			"Ein Virtual-Machine-Dienst zum Hosten von Websites",
			"Ein relationales Datenbankmanagementsystem",
			"Ein Netzwerksicherheits-Uberwachungstool"
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Foundry ist eine einheitliche Plattform zum Erstellen, Evaluieren und Bereitstellen generativer KI-Anwendungen.",
			"\"Ein Virtual-Machine-Dienst\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen generativer KI-Anwendungen\". VM-Hosting ist Azure Virtual Machines.",
			"\"Ein relationales Datenbankmanagementsystem\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen generativer KI-Anwendungen\". Relationale Datenbanken sind Azure SQL.",
			"\"Ein Netzwerksicherheits-Uberwachungstool\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen generativer KI-Anwendungen\". Netzwerkuberwachung ist Azure Network Watcher."
		],
		"learnRef": {
			"title": "Get started with Azure AI Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "Get started with Azure AI Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
	},
	{
		"id": "q95",
		"topic": "Generative AI",
		"prompt": "What is prompt flow in Azure AI Foundry used for?",
		"hint": "Think about visually chaining together prompts, tools, and logic into a workflow.",
		"options": [
			"Designing and orchestrating multi-step LLM workflows visually",
			"Managing Azure virtual network configurations",
			"Creating relational database schemas",
			"Monitoring CPU usage on virtual machines"
		],
		"optionExplanations": [
			"Correct: Prompt flow enables designing, testing, and deploying multi-step LLM-based workflows with a visual authoring experience.",
			"\"Managing Azure virtual network configurations\" is not the best fit for this question. The correct answer is \"Designing and orchestrating multi-step LLM workflows visually\". Network configuration is done in Azure Networking.",
			"\"Creating relational database schemas\" is not the best fit for this question. The correct answer is \"Designing and orchestrating multi-step LLM workflows visually\". Database schemas are managed in Azure SQL.",
			"\"Monitoring CPU usage on virtual machines\" is not the best fit for this question. The correct answer is \"Designing and orchestrating multi-step LLM workflows visually\". CPU monitoring is Azure Monitor."
		],
		"answerIndex": 0,
		"explanation": "Prompt flow in Azure AI Foundry allows you to visually design, test, and deploy multi-step workflows that chain LLM calls, tools, and logic together.",
		"promptDe": "Wofur wird Prompt Flow in Azure AI Foundry verwendet?",
		"hintDe": "Denke an das visuelle Verketten von Prompts, Tools und Logik in einem Workflow.",
		"explanationDe": "Prompt Flow in Azure AI Foundry ermoglicht das visuelle Entwerfen, Testen und Bereitstellen mehrstufiger LLM-basierter Workflows.",
		"optionsDe": [
			"Visuelles Entwerfen und Orchestrieren mehrstufiger LLM-Workflows",
			"Verwaltung von Azure-Virtual-Network-Konfigurationen",
			"Erstellen relationaler Datenbank-Schemas",
			"Uberwachung der CPU-Auslastung auf virtuellen Maschinen"
		],
		"optionExplanationsDe": [
			"Richtig: Prompt Flow ermoglicht das Entwerfen, Testen und Bereitstellen mehrstufiger LLM-basierter Workflows mit einer visuellen Oberflache.",
			"\"Verwaltung von Netzwerkkonfigurationen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Visuelles Entwerfen und Orchestrieren mehrstufiger LLM-Workflows\".",
			"\"Erstellen relationaler Datenbank-Schemas\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Visuelles Entwerfen und Orchestrieren mehrstufiger LLM-Workflows\".",
			"\"Uberwachung der CPU-Auslastung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Visuelles Entwerfen und Orchestrieren mehrstufiger LLM-Workflows\"."
		],
		"learnRef": {
			"title": "Get started with Azure AI Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "Get started with Azure AI Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
	},
	{
		"id": "q96",
		"topic": "Generative AI",
		"prompt": "Which capability does Azure AI Foundry provide for testing model quality before deployment?",
		"hint": "Think about measuring how well a model performs across various metrics before going to production.",
		"options": [
			"Model evaluation with built-in metrics like groundedness and relevance",
			"Automatic GPU scaling",
			"DNS zone management",
			"Virtual machine backup scheduling"
		],
		"optionExplanations": [
			"Correct: Azure AI Foundry provides model evaluation tools that measure metrics like groundedness, relevance, coherence, and fluency.",
			"\"Automatic GPU scaling\" is not the best fit for this question. The correct answer is \"Model evaluation with built-in metrics like groundedness and relevance\". GPU scaling is an infrastructure concern, not model quality testing.",
			"\"DNS zone management\" is not the best fit for this question. The correct answer is \"Model evaluation with built-in metrics like groundedness and relevance\". DNS is unrelated to model evaluation.",
			"\"Virtual machine backup scheduling\" is not the best fit for this question. The correct answer is \"Model evaluation with built-in metrics like groundedness and relevance\". VM backups are unrelated to model quality."
		],
		"answerIndex": 0,
		"explanation": "Azure AI Foundry includes model evaluation tools that measure quality metrics such as groundedness, relevance, coherence, and fluency before deploying models.",
		"promptDe": "Welche Fahigkeit bietet Azure AI Foundry zum Testen der Modellqualitat vor der Bereitstellung?",
		"hintDe": "Denke an das Messen, wie gut ein Modell anhand verschiedener Metriken abschneidet, bevor es in Produktion geht.",
		"explanationDe": "Azure AI Foundry bietet Modellevaluierungstools, die Qualitatsmetriken wie Groundedness, Relevanz, Koharenz und Flussigkeit messen.",
		"optionsDe": [
			"Modellevaluierung mit integrierten Metriken wie Groundedness und Relevanz",
			"Automatische GPU-Skalierung",
			"DNS-Zonenverwaltung",
			"Backup-Planung fur virtuelle Maschinen"
		],
		"optionExplanationsDe": [
			"Richtig: Azure AI Foundry bietet Modellevaluierungstools, die Metriken wie Groundedness, Relevanz, Koharenz und Flussigkeit messen.",
			"\"Automatische GPU-Skalierung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellevaluierung mit integrierten Metriken wie Groundedness und Relevanz\".",
			"\"DNS-Zonenverwaltung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellevaluierung mit integrierten Metriken wie Groundedness und Relevanz\".",
			"\"Backup-Planung fur virtuelle Maschinen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellevaluierung mit integrierten Metriken wie Groundedness und Relevanz\"."
		],
		"learnRef": {
			"title": "Get started with Azure AI Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "Get started with Azure AI Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
	},
	{
		"id": "q97",
		"topic": "Generative AI",
		"prompt": "How does content filtering work in Azure AI Foundry and Azure OpenAI Service?",
		"hint": "Think about what happens to both the input prompts and the model outputs before they reach the user.",
		"options": [
			"It only filters user inputs, not model outputs",
			"It filters both input prompts and model outputs for harmful content categories like violence, hate, and self-harm",
			"It only compresses the text to reduce token count",
			"It translates content to English before processing"
		],
		"optionExplanations": [
			"\"It only filters user inputs, not model outputs\" is not the best fit for this question. The correct answer is \"It filters both input prompts and model outputs for harmful content categories like violence, hate, and self-harm\". Content filtering applies to both input and output.",
			"Correct: Content filtering in Azure OpenAI scans both prompts and responses for categories including violence, hate, sexual content, and self-harm, blocking or flagging harmful content.",
			"\"It only compresses the text to reduce token count\" is not the best fit for this question. The correct answer is \"It filters both input prompts and model outputs for harmful content categories like violence, hate, and self-harm\". Compression is unrelated to content safety.",
			"\"It translates content to English before processing\" is not the best fit for this question. The correct answer is \"It filters both input prompts and model outputs for harmful content categories like violence, hate, and self-harm\". Translation is a separate service."
		],
		"answerIndex": 1,
		"explanation": "Content filtering in Azure OpenAI and AI Foundry scans both user prompts and model responses for harmful content categories, helping ensure safe AI outputs.",
		"promptDe": "Wie funktioniert die Inhaltsfilterung in Azure AI Foundry und Azure OpenAI Service?",
		"hintDe": "Denke daran, was sowohl mit den Eingabe-Prompts als auch mit den Modellausgaben passiert, bevor sie den Nutzer erreichen.",
		"explanationDe": "Inhaltsfilterung in Azure OpenAI und AI Foundry pruft sowohl Nutzer-Prompts als auch Modellantworten auf schadliche Inhaltskategorien.",
		"optionsDe": [
			"Es filtert nur Nutzereingaben, nicht Modellausgaben",
			"Es filtert sowohl Eingabe-Prompts als auch Modellausgaben auf schadliche Inhaltskategorien wie Gewalt, Hass und Selbstverletzung",
			"Es komprimiert nur den Text, um die Token-Anzahl zu reduzieren",
			"Es ubersetzt Inhalte vor der Verarbeitung ins Englische"
		],
		"optionExplanationsDe": [
			"\"Es filtert nur Nutzereingaben\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es filtert sowohl Eingabe-Prompts als auch Modellausgaben auf schadliche Inhaltskategorien wie Gewalt, Hass und Selbstverletzung\". Inhaltsfilterung gilt fur Ein- und Ausgabe.",
			"Richtig: Inhaltsfilterung pruft sowohl Prompts als auch Antworten auf Kategorien wie Gewalt, Hass, sexuelle Inhalte und Selbstverletzung.",
			"\"Es komprimiert nur den Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es filtert sowohl Eingabe-Prompts als auch Modellausgaben auf schadliche Inhaltskategorien wie Gewalt, Hass und Selbstverletzung\".",
			"\"Es ubersetzt Inhalte vor der Verarbeitung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es filtert sowohl Eingabe-Prompts als auch Modellausgaben auf schadliche Inhaltskategorien wie Gewalt, Hass und Selbstverletzung\"."
		],
		"learnRef": {
			"title": "Responsible generative AI",
			"url": "https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/"
		},
		"learnRefDe": {
			"title": "Responsible generative AI (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/"
		}
	},
	{
		"id": "q98",
		"topic": "Generative AI",
		"prompt": "Which models are available in Azure OpenAI Service?",
		"hint": "Think about the family of models Microsoft offers through its partnership with OpenAI.",
		"options": [
			"GPT-4, GPT-4o, DALL-E, and Whisper",
			"Only GPT-3 and nothing else",
			"Only image models, no text models",
			"Only speech models"
		],
		"optionExplanations": [
			"Correct: Azure OpenAI Service offers GPT-4, GPT-4o, DALL-E for image generation, and Whisper for speech transcription, among other models.",
			"\"Only GPT-3 and nothing else\" is not the best fit for this question. The correct answer is \"GPT-4, GPT-4o, DALL-E, and Whisper\". Azure OpenAI includes multiple model families beyond GPT-3.",
			"\"Only image models, no text models\" is not the best fit for this question. The correct answer is \"GPT-4, GPT-4o, DALL-E, and Whisper\". Azure OpenAI includes both text and image models.",
			"\"Only speech models\" is not the best fit for this question. The correct answer is \"GPT-4, GPT-4o, DALL-E, and Whisper\". Azure OpenAI includes text, image, and speech models."
		],
		"answerIndex": 0,
		"explanation": "Azure OpenAI Service provides access to GPT-4, GPT-4o, DALL-E for images, Whisper for speech, and other models from OpenAI.",
		"promptDe": "Welche Modelle sind in Azure OpenAI Service verfugbar?",
		"hintDe": "Denke an die Modellfamilien, die Microsoft durch seine Partnerschaft mit OpenAI anbietet.",
		"explanationDe": "Azure OpenAI Service bietet Zugang zu GPT-4, GPT-4o, DALL-E fur Bildgenerierung und Whisper fur Sprachtranskription.",
		"optionsDe": [
			"GPT-4, GPT-4o, DALL-E und Whisper",
			"Nur GPT-3 und sonst nichts",
			"Nur Bildmodelle, keine Textmodelle",
			"Nur Sprachmodelle"
		],
		"optionExplanationsDe": [
			"Richtig: Azure OpenAI Service bietet GPT-4, GPT-4o, DALL-E fur Bildgenerierung und Whisper fur Sprachtranskription an.",
			"\"Nur GPT-3 und sonst nichts\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"GPT-4, GPT-4o, DALL-E und Whisper\". Azure OpenAI umfasst mehrere Modellfamilien.",
			"\"Nur Bildmodelle\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"GPT-4, GPT-4o, DALL-E und Whisper\". Azure OpenAI umfasst sowohl Text- als auch Bildmodelle.",
			"\"Nur Sprachmodelle\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"GPT-4, GPT-4o, DALL-E und Whisper\". Azure OpenAI umfasst Text-, Bild- und Sprachmodelle."
		],
		"learnRef": {
			"title": "Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "Get started with generative AI and agents in Microsoft Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
	},
	{
		"id": "q99",
		"topic": "Generative AI",
		"prompt": "What makes a multimodal AI model different from a text-only model?",
		"hint": "Think about how many types of input or output the model can handle.",
		"options": [
			"It can only process text input",
			"It can process and generate multiple types of content such as text, images, and audio",
			"It runs exclusively on mobile devices",
			"It can only generate images, not text"
		],
		"optionExplanations": [
			"\"It can only process text input\" is not the best fit for this question. The correct answer is \"It can process and generate multiple types of content such as text, images, and audio\". Text-only processing is a unimodal model.",
			"Correct: Multimodal models like GPT-4o can accept and produce multiple content types including text, images, and audio in a single interaction.",
			"\"It runs exclusively on mobile devices\" is not the best fit for this question. The correct answer is \"It can process and generate multiple types of content such as text, images, and audio\". Device platform is unrelated to modality.",
			"\"It can only generate images, not text\" is not the best fit for this question. The correct answer is \"It can process and generate multiple types of content such as text, images, and audio\". Image-only generation would be a single-modal model."
		],
		"answerIndex": 1,
		"explanation": "Multimodal models can process and generate multiple types of content (text, images, audio) in a single interaction, unlike text-only models.",
		"promptDe": "Was unterscheidet ein multimodales KI-Modell von einem reinen Textmodell?",
		"hintDe": "Denke daran, wie viele Arten von Eingaben oder Ausgaben das Modell verarbeiten kann.",
		"explanationDe": "Multimodale Modelle konnen mehrere Inhaltstypen (Text, Bilder, Audio) in einer einzigen Interaktion verarbeiten und generieren.",
		"optionsDe": [
			"Es kann nur Texteingaben verarbeiten",
			"Es kann mehrere Inhaltstypen wie Text, Bilder und Audio verarbeiten und generieren",
			"Es lauft ausschliesslich auf Mobilgeraten",
			"Es kann nur Bilder generieren, keinen Text"
		],
		"optionExplanationsDe": [
			"\"Es kann nur Texteingaben verarbeiten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es kann mehrere Inhaltstypen wie Text, Bilder und Audio verarbeiten und generieren\". Nur-Text-Verarbeitung ist ein unimodales Modell.",
			"Richtig: Multimodale Modelle wie GPT-4o konnen mehrere Inhaltstypen in einer einzigen Interaktion akzeptieren und produzieren.",
			"\"Es lauft ausschliesslich auf Mobilgeraten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es kann mehrere Inhaltstypen wie Text, Bilder und Audio verarbeiten und generieren\".",
			"\"Es kann nur Bilder generieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es kann mehrere Inhaltstypen wie Text, Bilder und Audio verarbeiten und generieren\"."
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
		"id": "q100",
		"topic": "Generative AI",
		"prompt": "Which of the following is NOT a typical generative AI scenario?",
		"hint": "Think about what generative AI creates versus what it classifies.",
		"options": [
			"Code generation from natural language descriptions",
			"Summarizing long documents into key points",
			"Sorting physical packages by weight on a conveyor belt",
			"Creating marketing copy from a product description"
		],
		"optionExplanations": [
			"\"Code generation from natural language descriptions\" is not the best fit for this question. The correct answer is \"Sorting physical packages by weight on a conveyor belt\". Code generation is a common generative AI use case.",
			"\"Summarizing long documents into key points\" is not the best fit for this question. The correct answer is \"Sorting physical packages by weight on a conveyor belt\". Summarization is a core generative AI capability.",
			"Correct: Sorting physical packages by weight is a mechanical/industrial task that does not involve content generation and is not a generative AI scenario.",
			"\"Creating marketing copy from a product description\" is not the best fit for this question. The correct answer is \"Sorting physical packages by weight on a conveyor belt\". Content creation is a typical generative AI use case."
		],
		"answerIndex": 2,
		"explanation": "Sorting physical packages by weight is a mechanical task, not a generative AI scenario. Generative AI is about creating new content like text, code, or images.",
		"promptDe": "Welches der folgenden ist KEIN typisches Generative-AI-Szenario?",
		"hintDe": "Denke daran, was generative KI erstellt im Gegensatz zu dem, was sie klassifiziert.",
		"explanationDe": "Das Sortieren physischer Pakete nach Gewicht ist eine mechanische Aufgabe, kein Generative-AI-Szenario. Generative KI erstellt neue Inhalte wie Text, Code oder Bilder.",
		"optionsDe": [
			"Codegenerierung aus naturlichsprachlichen Beschreibungen",
			"Zusammenfassung langer Dokumente in Kernpunkte",
			"Sortieren physischer Pakete nach Gewicht auf einem Forderband",
			"Erstellen von Marketingtexten aus einer Produktbeschreibung"
		],
		"optionExplanationsDe": [
			"\"Codegenerierung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sortieren physischer Pakete nach Gewicht auf einem Forderband\". Codegenerierung ist ein typischer Generative-AI-Anwendungsfall.",
			"\"Zusammenfassung langer Dokumente\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sortieren physischer Pakete nach Gewicht auf einem Forderband\". Zusammenfassung ist eine Kernfahigkeit generativer KI.",
			"Richtig: Das Sortieren physischer Pakete nach Gewicht ist eine mechanische Aufgabe und kein Generative-AI-Szenario.",
			"\"Erstellen von Marketingtexten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Sortieren physischer Pakete nach Gewicht auf einem Forderband\". Inhaltserstellung ist ein typischer Generative-AI-Anwendungsfall."
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
		"id": "q101",
		"topic": "Generative AI",
		"prompt": "What is a hallucination in the context of generative AI?",
		"hint": "Think about when the model generates something that sounds plausible but is factually wrong.",
		"options": [
			"A model generating content that is factually incorrect or fabricated but presented as true",
			"A hardware error causing visual artifacts on screen",
			"A type of data augmentation technique",
			"A method for improving model training speed"
		],
		"optionExplanations": [
			"Correct: A hallucination occurs when a generative AI model produces content that sounds plausible but is factually incorrect, fabricated, or unsupported by the input data.",
			"\"A hardware error causing visual artifacts on screen\" is not the best fit for this question. The correct answer is \"A model generating content that is factually incorrect or fabricated but presented as true\". Hardware errors are unrelated to AI hallucinations.",
			"\"A type of data augmentation technique\" is not the best fit for this question. The correct answer is \"A model generating content that is factually incorrect or fabricated but presented as true\". Data augmentation is a training technique.",
			"\"A method for improving model training speed\" is not the best fit for this question. The correct answer is \"A model generating content that is factually incorrect or fabricated but presented as true\". Training speed optimization is unrelated."
		],
		"answerIndex": 0,
		"explanation": "A hallucination in generative AI is when the model produces plausible-sounding but factually incorrect or fabricated content. Grounding and RAG help mitigate this.",
		"promptDe": "Was ist eine Halluzination im Kontext generativer KI?",
		"hintDe": "Denke daran, wenn das Modell etwas erzeugt, das plausibel klingt, aber faktisch falsch ist.",
		"explanationDe": "Eine Halluzination in generativer KI liegt vor, wenn das Modell plausibel klingende, aber faktisch falsche oder erfundene Inhalte produziert. Grounding und RAG helfen, dies zu reduzieren.",
		"optionsDe": [
			"Ein Modell, das faktisch falsche oder erfundene Inhalte generiert, die als wahr prasentiert werden",
			"Ein Hardwarefehler, der visuelle Artefakte auf dem Bildschirm verursacht",
			"Eine Art Datenaugmentierungstechnik",
			"Eine Methode zur Verbesserung der Modelltrainingsgeschwindigkeit"
		],
		"optionExplanationsDe": [
			"Richtig: Eine Halluzination tritt auf, wenn ein generatives KI-Modell plausibel klingende, aber faktisch falsche oder erfundene Inhalte produziert.",
			"\"Ein Hardwarefehler\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein Modell, das faktisch falsche oder erfundene Inhalte generiert, die als wahr prasentiert werden\". Hardwarefehler sind nicht mit KI-Halluzinationen verwandt.",
			"\"Eine Art Datenaugmentierungstechnik\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein Modell, das faktisch falsche oder erfundene Inhalte generiert, die als wahr prasentiert werden\".",
			"\"Eine Methode zur Verbesserung der Trainingsgeschwindigkeit\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein Modell, das faktisch falsche oder erfundene Inhalte generiert, die als wahr prasentiert werden\"."
		],
		"learnRef": {
			"title": "Responsible generative AI",
			"url": "https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/"
		},
		"learnRefDe": {
			"title": "Responsible generative AI (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/responsible-generative-ai/"
		}
	},
	{
		"id": "q102",
		"topic": "Generative AI",
		"prompt": "What does DALL-E do in Azure OpenAI Service?",
		"hint": "Think about creating visual content from written descriptions.",
		"options": [
			"Transcribes audio recordings into text",
			"Generates images from text descriptions",
			"Translates text between languages",
			"Detects faces in photographs"
		],
		"optionExplanations": [
			"\"Transcribes audio recordings into text\" is not the best fit for this question. The correct answer is \"Generates images from text descriptions\". Audio transcription is done by Whisper, not DALL-E.",
			"Correct: DALL-E generates images based on natural language text descriptions, enabling creative image generation from prompts.",
			"\"Translates text between languages\" is not the best fit for this question. The correct answer is \"Generates images from text descriptions\". Translation is handled by Azure AI Translator.",
			"\"Detects faces in photographs\" is not the best fit for this question. The correct answer is \"Generates images from text descriptions\". Face detection is done by Azure AI Face."
		],
		"answerIndex": 1,
		"explanation": "DALL-E in Azure OpenAI Service generates images from natural language text descriptions, enabling creative visual content creation.",
		"promptDe": "Was macht DALL-E in Azure OpenAI Service?",
		"hintDe": "Denke an das Erstellen visueller Inhalte aus geschriebenen Beschreibungen.",
		"explanationDe": "DALL-E in Azure OpenAI Service generiert Bilder aus naturlichsprachlichen Textbeschreibungen und ermoglicht kreative visuelle Inhaltserstellung.",
		"optionsDe": [
			"Transkribiert Audioaufnahmen in Text",
			"Generiert Bilder aus Textbeschreibungen",
			"Ubersetzt Text zwischen Sprachen",
			"Erkennt Gesichter in Fotografien"
		],
		"optionExplanationsDe": [
			"\"Transkribiert Audioaufnahmen in Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Generiert Bilder aus Textbeschreibungen\". Audiotranskription wird von Whisper durchgefuhrt.",
			"Richtig: DALL-E generiert Bilder basierend auf naturlichsprachlichen Textbeschreibungen.",
			"\"Ubersetzt Text zwischen Sprachen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Generiert Bilder aus Textbeschreibungen\". Ubersetzung ist Azure AI Translator.",
			"\"Erkennt Gesichter in Fotografien\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Generiert Bilder aus Textbeschreibungen\". Gesichtserkennung ist Azure AI Face."
		],
		"learnRef": {
			"title": "Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "Get started with generative AI and agents in Microsoft Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
	},
	{
		"id": "q103",
		"topic": "Generative AI",
		"prompt": "How does Microsoft Copilot integrate with Microsoft 365 applications?",
		"hint": "Think about an AI assistant embedded directly within the productivity tools you already use.",
		"options": [
			"It replaces Microsoft 365 entirely with a new application",
			"It acts as an AI assistant within apps like Word, Excel, and Teams, using LLMs with access to your organizational data",
			"It only works as a standalone web application",
			"It only generates images, not text"
		],
		"optionExplanations": [
			"\"It replaces Microsoft 365 entirely\" is not the best fit for this question. The correct answer is \"It acts as an AI assistant within apps like Word, Excel, and Teams, using LLMs with access to your organizational data\". Copilot enhances existing apps, it does not replace them.",
			"Correct: Microsoft Copilot is embedded within Microsoft 365 apps and uses LLMs grounded in organizational data to assist with tasks like drafting, summarizing, and analyzing.",
			"\"It only works as a standalone web application\" is not the best fit for this question. The correct answer is \"It acts as an AI assistant within apps like Word, Excel, and Teams, using LLMs with access to your organizational data\". Copilot is integrated into Microsoft 365 apps.",
			"\"It only generates images, not text\" is not the best fit for this question. The correct answer is \"It acts as an AI assistant within apps like Word, Excel, and Teams, using LLMs with access to your organizational data\". Copilot primarily assists with text-based productivity tasks."
		],
		"answerIndex": 1,
		"explanation": "Microsoft Copilot is embedded within Microsoft 365 apps like Word, Excel, and Teams, using LLMs grounded in organizational data to assist with productivity tasks.",
		"promptDe": "Wie integriert sich Microsoft Copilot in Microsoft 365-Anwendungen?",
		"hintDe": "Denke an einen KI-Assistenten, der direkt in die Produktivitatstools eingebettet ist, die du bereits nutzt.",
		"explanationDe": "Microsoft Copilot ist in Microsoft 365-Apps wie Word, Excel und Teams eingebettet und nutzt LLMs mit Zugriff auf Organisationsdaten fur Produktivitatsaufgaben.",
		"optionsDe": [
			"Es ersetzt Microsoft 365 vollstandig durch eine neue Anwendung",
			"Es fungiert als KI-Assistent in Apps wie Word, Excel und Teams und nutzt LLMs mit Zugriff auf Organisationsdaten",
			"Es funktioniert nur als eigenstandige Webanwendung",
			"Es generiert nur Bilder, keinen Text"
		],
		"optionExplanationsDe": [
			"\"Es ersetzt Microsoft 365 vollstandig\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es fungiert als KI-Assistent in Apps wie Word, Excel und Teams und nutzt LLMs mit Zugriff auf Organisationsdaten\". Copilot erweitert bestehende Apps.",
			"Richtig: Microsoft Copilot ist in Microsoft 365-Apps eingebettet und nutzt LLMs mit Organisationsdaten fur Aufgaben wie Entwurf, Zusammenfassung und Analyse.",
			"\"Es funktioniert nur als eigenstandige Webanwendung\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es fungiert als KI-Assistent in Apps wie Word, Excel und Teams und nutzt LLMs mit Zugriff auf Organisationsdaten\". Copilot ist in Microsoft 365-Apps integriert.",
			"\"Es generiert nur Bilder\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Es fungiert als KI-Assistent in Apps wie Word, Excel und Teams und nutzt LLMs mit Zugriff auf Organisationsdaten\"."
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
		"id": "q104",
		"topic": "Generative AI",
		"prompt": "What is the key difference between fine-tuning and prompt engineering?",
		"hint": "One modifies the model itself, the other only changes how you communicate with it.",
		"options": [
			"Fine-tuning changes the model weights with additional training data; prompt engineering crafts better instructions without changing the model",
			"Prompt engineering requires retraining the model; fine-tuning does not",
			"They are the same thing with different names",
			"Fine-tuning only works with images; prompt engineering only works with text"
		],
		"optionExplanations": [
			"Correct: Fine-tuning modifies the model weights by training on additional data, while prompt engineering improves results by crafting better prompts without changing the model itself.",
			"\"Prompt engineering requires retraining the model; fine-tuning does not\" is not the best fit for this question. The correct answer is \"Fine-tuning changes the model weights with additional training data; prompt engineering crafts better instructions without changing the model\". This reverses the definitions.",
			"\"They are the same thing with different names\" is not the best fit for this question. The correct answer is \"Fine-tuning changes the model weights with additional training data; prompt engineering crafts better instructions without changing the model\". They are fundamentally different approaches.",
			"\"Fine-tuning only works with images; prompt engineering only works with text\" is not the best fit for this question. The correct answer is \"Fine-tuning changes the model weights with additional training data; prompt engineering crafts better instructions without changing the model\". Both can apply to various modalities."
		],
		"answerIndex": 0,
		"explanation": "Fine-tuning modifies the model weights by training on domain-specific data. Prompt engineering improves results by crafting better prompts without changing the model.",
		"promptDe": "Was ist der wesentliche Unterschied zwischen Fine-Tuning und Prompt Engineering?",
		"hintDe": "Eines verandert das Modell selbst, das andere andert nur, wie man mit ihm kommuniziert.",
		"explanationDe": "Fine-Tuning verandert die Modellgewichte durch Training mit zusatzlichen Daten. Prompt Engineering verbessert Ergebnisse durch bessere Prompts, ohne das Modell zu andern.",
		"optionsDe": [
			"Fine-Tuning andert die Modellgewichte mit zusatzlichen Trainingsdaten; Prompt Engineering erstellt bessere Anweisungen, ohne das Modell zu andern",
			"Prompt Engineering erfordert Neutraining des Modells; Fine-Tuning nicht",
			"Es ist dasselbe mit verschiedenen Namen",
			"Fine-Tuning funktioniert nur mit Bildern; Prompt Engineering nur mit Text"
		],
		"optionExplanationsDe": [
			"Richtig: Fine-Tuning modifiziert die Modellgewichte durch Training mit zusatzlichen Daten, wahrend Prompt Engineering Ergebnisse durch bessere Prompts verbessert, ohne das Modell zu andern.",
			"\"Prompt Engineering erfordert Neutraining\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fine-Tuning andert die Modellgewichte mit zusatzlichen Trainingsdaten; Prompt Engineering erstellt bessere Anweisungen, ohne das Modell zu andern\". Dies vertauscht die Definitionen.",
			"\"Es ist dasselbe\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fine-Tuning andert die Modellgewichte mit zusatzlichen Trainingsdaten; Prompt Engineering erstellt bessere Anweisungen, ohne das Modell zu andern\". Es sind grundlegend verschiedene Ansatze.",
			"\"Fine-Tuning funktioniert nur mit Bildern\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Fine-Tuning andert die Modellgewichte mit zusatzlichen Trainingsdaten; Prompt Engineering erstellt bessere Anweisungen, ohne das Modell zu andern\"."
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
		"id": "q105",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: Azure AI Foundry includes a model catalog that lets you browse and deploy models from Microsoft, OpenAI, and open-source providers.",
		"hint": "Consider whether Azure AI Foundry is limited to Microsoft models or supports a broader selection.",
		"correctAnswer": "True",
		"explanation": "Azure AI Foundry features a model catalog with models from Microsoft, OpenAI, Meta, Hugging Face, and other providers.",
		"promptDe": "Aussage: Azure AI Foundry enthalt einen Modellkatalog, mit dem man Modelle von Microsoft, OpenAI und Open-Source-Anbietern durchsuchen und bereitstellen kann.",
		"hintDe": "Uberlege, ob Azure AI Foundry auf Microsoft-Modelle beschrankt ist oder eine breitere Auswahl unterstutzt.",
		"explanationDe": "Azure AI Foundry bietet einen Modellkatalog mit Modellen von Microsoft, OpenAI, Meta, Hugging Face und anderen Anbietern.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Azure AI Foundry features a model catalog with models from multiple providers including Microsoft, OpenAI, and open-source.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Azure AI Foundry includes a model catalog with models from multiple providers."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Azure AI Foundry bietet einen Modellkatalog mit Modellen von mehreren Anbietern einschliesslich Microsoft, OpenAI und Open-Source.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Azure AI Foundry enthalt einen Modellkatalog mit Modellen von mehreren Anbietern."
		},
		"learnRef": {
			"title": "Get started with Azure AI Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		},
		"learnRefDe": {
			"title": "Get started with Azure AI Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/"
		}
	},
	{
		"id": "q106",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: Grounding techniques like RAG help reduce hallucinations by providing the model with relevant source data.",
		"hint": "Think about what happens when a model has access to factual reference material when generating answers.",
		"correctAnswer": "True",
		"explanation": "RAG (Retrieval-Augmented Generation) retrieves relevant documents and includes them in the prompt, helping the model base its answers on factual data and reducing hallucinations.",
		"promptDe": "Aussage: Grounding-Techniken wie RAG helfen, Halluzinationen zu reduzieren, indem sie dem Modell relevante Quelldaten bereitstellen.",
		"hintDe": "Denke daran, was passiert, wenn ein Modell beim Generieren von Antworten Zugriff auf faktisches Referenzmaterial hat.",
		"explanationDe": "RAG (Retrieval-Augmented Generation) ruft relevante Dokumente ab und fugt sie in den Prompt ein, sodass das Modell Antworten auf faktischen Daten basiert und Halluzinationen reduziert werden.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. RAG retrieves relevant documents and includes them in the prompt, helping ground the model's answers in factual data.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. RAG provides factual context that helps reduce hallucinations."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. RAG ruft relevante Dokumente ab und fugt sie in den Prompt ein, was hilft, die Antworten des Modells auf faktischen Daten zu grunden.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. RAG liefert faktischen Kontext, der Halluzinationen reduziert."
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
		"id": "q107",
		"topic": "Generative AI",
		"prompt": "Which model in Azure OpenAI Service is specifically designed for audio transcription?",
		"hint": "Think about which OpenAI model converts spoken language into written text.",
		"options": [
			"GPT-4",
			"DALL-E",
			"Whisper",
			"Ada"
		],
		"optionExplanations": [
			"\"GPT-4\" is not the best fit for this question. The correct answer is \"Whisper\". GPT-4 is a text and multimodal model, not specifically designed for audio transcription.",
			"\"DALL-E\" is not the best fit for this question. The correct answer is \"Whisper\". DALL-E generates images from text, it does not transcribe audio.",
			"Correct: Whisper is OpenAI's speech recognition model available in Azure OpenAI Service, designed for accurate audio transcription.",
			"\"Ada\" is not the best fit for this question. The correct answer is \"Whisper\". Ada is an embedding model, not an audio transcription model."
		],
		"answerIndex": 2,
		"explanation": "Whisper is OpenAI's speech recognition model, available through Azure OpenAI Service, specifically designed for transcribing audio into text.",
		"promptDe": "Welches Modell in Azure OpenAI Service ist speziell fur Audio-Transkription konzipiert?",
		"hintDe": "Uberlege, welches OpenAI-Modell gesprochene Sprache in geschriebenen Text umwandelt.",
		"explanationDe": "Whisper ist OpenAIs Spracherkennungsmodell, verfugbar uber Azure OpenAI Service, speziell fur die Transkription von Audio in Text konzipiert.",
		"optionsDe": [
			"GPT-4",
			"DALL-E",
			"Whisper",
			"Ada"
		],
		"optionExplanationsDe": [
			"\"GPT-4\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Whisper\". GPT-4 ist ein Text- und Multimodal-Modell, nicht speziell fur Audio-Transkription.",
			"\"DALL-E\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Whisper\". DALL-E generiert Bilder aus Text.",
			"Richtig: Whisper ist OpenAIs Spracherkennungsmodell, verfugbar in Azure OpenAI Service, fur genaue Audio-Transkription konzipiert.",
			"\"Ada\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Whisper\". Ada ist ein Embedding-Modell."
		],
		"learnRef": {
			"title": "Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "Get started with generative AI and agents in Microsoft Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
	},
	{
		"id": "q108",
		"type": "true-false",
		"topic": "Generative AI",
		"prompt": "Statement: GPT-4o is a multimodal model that can accept both text and image inputs.",
		"hint": "Consider what the 'o' in GPT-4o stands for and what capabilities it adds.",
		"correctAnswer": "True",
		"explanation": "GPT-4o (omni) is a multimodal model that can process text, images, and audio inputs, making it more versatile than text-only models.",
		"promptDe": "Aussage: GPT-4o ist ein multimodales Modell, das sowohl Text- als auch Bildeingaben akzeptieren kann.",
		"hintDe": "Uberlege, wofur das 'o' in GPT-4o steht und welche Fahigkeiten es hinzufugt.",
		"explanationDe": "GPT-4o (omni) ist ein multimodales Modell, das Text-, Bild- und Audioeingaben verarbeiten kann.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. GPT-4o is a multimodal model that can process text, images, and audio inputs.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. GPT-4o is a multimodal model capable of processing multiple input types."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. GPT-4o ist ein multimodales Modell, das Text-, Bild- und Audioeingaben verarbeiten kann.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. GPT-4o ist ein multimodales Modell, das mehrere Eingabetypen verarbeiten kann."
		},
		"learnRef": {
			"title": "Get started with generative AI and agents in Microsoft Foundry",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		},
		"learnRefDe": {
			"title": "Get started with generative AI and agents in Microsoft Foundry (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/"
		}
	},
	{
		"id": "q109",
		"topic": "NLP",
		"prompt": "What can Azure AI Translator do besides translating text between languages?",
		"hint": "Think about what information the service can determine about a text before translating it.",
		"options": [
			"Only translate from English to French",
			"Detect the language of input text and translate entire documents while preserving formatting",
			"Generate images from text",
			"Train custom speech models"
		],
		"optionExplanations": [
			"\"Only translate from English to French\" is not the best fit for this question. The correct answer is \"Detect the language of input text and translate entire documents while preserving formatting\". Azure AI Translator supports dozens of language pairs, not just English to French.",
			"Correct: Azure AI Translator can detect the source language automatically and translate entire documents while preserving their original formatting and structure.",
			"\"Generate images from text\" is not the best fit for this question. The correct answer is \"Detect the language of input text and translate entire documents while preserving formatting\". Image generation is done by DALL-E.",
			"\"Train custom speech models\" is not the best fit for this question. The correct answer is \"Detect the language of input text and translate entire documents while preserving formatting\". Custom speech models are part of Azure AI Speech."
		],
		"answerIndex": 1,
		"explanation": "Azure AI Translator can detect the source language, translate text and entire documents across dozens of language pairs, and preserve document formatting.",
		"promptDe": "Was kann Azure AI Translator neben der Ubersetzung von Text zwischen Sprachen?",
		"hintDe": "Uberlege, welche Informationen der Dienst uber einen Text ermitteln kann, bevor er ihn ubersetzt.",
		"explanationDe": "Azure AI Translator kann die Quellsprache erkennen, Text und ganze Dokumente uber Dutzende von Sprachpaaren ubersetzen und die Dokumentformatierung beibehalten.",
		"optionsDe": [
			"Nur von Englisch nach Franzosisch ubersetzen",
			"Die Sprache des Eingabetexts erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen",
			"Bilder aus Text generieren",
			"Benutzerdefinierte Sprachmodelle trainieren"
		],
		"optionExplanationsDe": [
			"\"Nur von Englisch nach Franzosisch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die Sprache des Eingabetexts erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen\". Azure AI Translator unterstutzt Dutzende von Sprachpaaren.",
			"Richtig: Azure AI Translator kann die Quellsprache automatisch erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen.",
			"\"Bilder aus Text generieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die Sprache des Eingabetexts erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen\". Bildgenerierung ist DALL-E.",
			"\"Benutzerdefinierte Sprachmodelle trainieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Die Sprache des Eingabetexts erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen\". Benutzerdefinierte Sprachmodelle sind Teil von Azure AI Speech."
		],
		"learnRef": {
			"title": "Translate text and documents with Azure AI Translator",
			"url": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translation-service/"
		},
		"learnRefDe": {
			"title": "Translate text and documents with Azure AI Translator (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translation-service/"
		}
	},
	{
		"id": "q110",
		"topic": "NLP",
		"prompt": "What is Conversational Language Understanding (CLU) in Azure AI Language used for?",
		"hint": "Think about extracting the user's intention and relevant details from a natural language sentence.",
		"options": [
			"Extracting intents and entities from natural language utterances to understand what a user wants",
			"Generating images from spoken commands",
			"Translating audio between languages in real time",
			"Indexing documents for keyword search"
		],
		"optionExplanations": [
			"Correct: CLU extracts intents (what the user wants to do) and entities (relevant details) from natural language utterances, enabling applications to understand user requests.",
			"\"Generating images from spoken commands\" is not the best fit for this question. The correct answer is \"Extracting intents and entities from natural language utterances to understand what a user wants\". Image generation is not a CLU capability.",
			"\"Translating audio between languages in real time\" is not the best fit for this question. The correct answer is \"Extracting intents and entities from natural language utterances to understand what a user wants\". Real-time audio translation is Azure AI Speech translation.",
			"\"Indexing documents for keyword search\" is not the best fit for this question. The correct answer is \"Extracting intents and entities from natural language utterances to understand what a user wants\". Document indexing is Azure AI Search."
		],
		"answerIndex": 0,
		"explanation": "CLU extracts intents (what the user wants) and entities (key details) from natural language, enabling applications to understand and respond to user requests.",
		"promptDe": "Wofur wird Conversational Language Understanding (CLU) in Azure AI Language verwendet?",
		"hintDe": "Denke an das Extrahieren der Absicht des Nutzers und relevanter Details aus einem naturlichsprachlichen Satz.",
		"explanationDe": "CLU extrahiert Intents (was der Nutzer will) und Entitaten (wichtige Details) aus naturlicher Sprache, damit Anwendungen Nutzeranfragen verstehen konnen.",
		"optionsDe": [
			"Extrahieren von Intents und Entitaten aus naturlichsprachlichen Ausserungen, um zu verstehen, was ein Nutzer mochte",
			"Generieren von Bildern aus gesprochenen Befehlen",
			"Ubersetzen von Audio zwischen Sprachen in Echtzeit",
			"Indexieren von Dokumenten fur Schlusselwortsuche"
		],
		"optionExplanationsDe": [
			"Richtig: CLU extrahiert Intents und Entitaten aus naturlichsprachlichen Ausserungen, damit Anwendungen Nutzeranfragen verstehen konnen.",
			"\"Generieren von Bildern aus gesprochenen Befehlen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Extrahieren von Intents und Entitaten aus naturlichsprachlichen Ausserungen, um zu verstehen, was ein Nutzer mochte\".",
			"\"Ubersetzen von Audio in Echtzeit\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Extrahieren von Intents und Entitaten aus naturlichsprachlichen Ausserungen, um zu verstehen, was ein Nutzer mochte\".",
			"\"Indexieren von Dokumenten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Extrahieren von Intents und Entitaten aus naturlichsprachlichen Ausserungen, um zu verstehen, was ein Nutzer mochte\"."
		],
		"learnRef": {
			"title": "Build a conversational language understanding model",
			"url": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/"
		},
		"learnRefDe": {
			"title": "Build a conversational language understanding model (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/build-language-understanding-model/"
		}
	},
	{
		"id": "q111",
		"topic": "NLP",
		"prompt": "What is custom question answering in Azure AI Language?",
		"hint": "Think about creating a knowledge base from your own documents that can answer user questions.",
		"options": [
			"A feature that lets you create question-answer knowledge bases from your documents, FAQs, and URLs",
			"A service that generates random quiz questions",
			"A tool for translating questions between languages",
			"A feature that detects the emotional tone of questions"
		],
		"optionExplanations": [
			"Correct: Custom question answering lets you build knowledge bases from documents, FAQs, and URLs that can then answer user questions in natural language.",
			"\"A service that generates random quiz questions\" is not the best fit for this question. The correct answer is \"A feature that lets you create question-answer knowledge bases from your documents, FAQs, and URLs\". Custom QA answers real user questions from curated knowledge.",
			"\"A tool for translating questions between languages\" is not the best fit for this question. The correct answer is \"A feature that lets you create question-answer knowledge bases from your documents, FAQs, and URLs\". Translation is Azure AI Translator.",
			"\"A feature that detects the emotional tone of questions\" is not the best fit for this question. The correct answer is \"A feature that lets you create question-answer knowledge bases from your documents, FAQs, and URLs\". Emotion detection is sentiment analysis."
		],
		"answerIndex": 0,
		"explanation": "Custom question answering in Azure AI Language lets you build knowledge bases from documents, FAQs, and URLs to answer user questions automatically.",
		"promptDe": "Was ist benutzerdefiniertes Frage-Antwort in Azure AI Language?",
		"hintDe": "Denke an das Erstellen einer Wissensdatenbank aus eigenen Dokumenten, die Nutzerfragen beantworten kann.",
		"explanationDe": "Benutzerdefiniertes Frage-Antwort in Azure AI Language ermoglicht das Erstellen von Wissensdatenbanken aus Dokumenten, FAQs und URLs zur automatischen Beantwortung von Nutzerfragen.",
		"optionsDe": [
			"Eine Funktion zum Erstellen von Frage-Antwort-Wissensdatenbanken aus eigenen Dokumenten, FAQs und URLs",
			"Ein Dienst, der zufallige Quizfragen generiert",
			"Ein Tool zum Ubersetzen von Fragen zwischen Sprachen",
			"Eine Funktion zur Erkennung des emotionalen Tons von Fragen"
		],
		"optionExplanationsDe": [
			"Richtig: Benutzerdefiniertes Frage-Antwort ermoglicht das Erstellen von Wissensdatenbanken aus Dokumenten, FAQs und URLs zur Beantwortung von Nutzerfragen.",
			"\"Ein Dienst, der zufallige Quizfragen generiert\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zum Erstellen von Frage-Antwort-Wissensdatenbanken aus eigenen Dokumenten, FAQs und URLs\".",
			"\"Ein Tool zum Ubersetzen von Fragen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zum Erstellen von Frage-Antwort-Wissensdatenbanken aus eigenen Dokumenten, FAQs und URLs\".",
			"\"Eine Funktion zur Erkennung des emotionalen Tons\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zum Erstellen von Frage-Antwort-Wissensdatenbanken aus eigenen Dokumenten, FAQs und URLs\"."
		],
		"learnRef": {
			"title": "Create a question answering solution",
			"url": "https://learn.microsoft.com/en-us/training/modules/create-question-answer-solution-ai-language/"
		},
		"learnRefDe": {
			"title": "Create a question answering solution (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/create-question-answer-solution-ai-language/"
		}
	},
	{
		"id": "q112",
		"topic": "NLP",
		"prompt": "What is the difference between real-time and batch transcription in Azure AI Speech?",
		"hint": "Think about processing audio as it happens versus processing pre-recorded audio files.",
		"options": [
			"Real-time transcription processes live audio streams; batch transcription processes pre-recorded audio files asynchronously",
			"Batch transcription is always faster than real-time transcription",
			"Real-time transcription only works with English; batch supports all languages",
			"There is no difference; they produce identical results at the same speed"
		],
		"optionExplanations": [
			"Correct: Real-time transcription processes audio as it is spoken, while batch transcription processes pre-recorded audio files asynchronously, ideal for large volumes of recordings.",
			"\"Batch transcription is always faster than real-time transcription\" is not the best fit for this question. The correct answer is \"Real-time transcription processes live audio streams; batch transcription processes pre-recorded audio files asynchronously\". Batch processes large volumes but is not necessarily faster per file.",
			"\"Real-time transcription only works with English\" is not the best fit for this question. The correct answer is \"Real-time transcription processes live audio streams; batch transcription processes pre-recorded audio files asynchronously\". Both support multiple languages.",
			"\"There is no difference\" is not the best fit for this question. The correct answer is \"Real-time transcription processes live audio streams; batch transcription processes pre-recorded audio files asynchronously\". They serve different use cases."
		],
		"answerIndex": 0,
		"explanation": "Real-time transcription processes live audio as it is spoken. Batch transcription processes pre-recorded audio files asynchronously, suitable for large volumes.",
		"promptDe": "Was ist der Unterschied zwischen Echtzeit- und Batch-Transkription in Azure AI Speech?",
		"hintDe": "Denke an die Verarbeitung von Audio wahrend es passiert versus die Verarbeitung voraufgezeichneter Audiodateien.",
		"explanationDe": "Echtzeit-Transkription verarbeitet Live-Audio wahrend es gesprochen wird. Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron, geeignet fur grosse Mengen.",
		"optionsDe": [
			"Echtzeit-Transkription verarbeitet Live-Audiostreams; Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron",
			"Batch-Transkription ist immer schneller als Echtzeit-Transkription",
			"Echtzeit-Transkription funktioniert nur mit Englisch; Batch unterstutzt alle Sprachen",
			"Es gibt keinen Unterschied; sie liefern identische Ergebnisse mit gleicher Geschwindigkeit"
		],
		"optionExplanationsDe": [
			"Richtig: Echtzeit-Transkription verarbeitet Audio wahrend es gesprochen wird, wahrend Batch-Transkription voraufgezeichnete Dateien asynchron verarbeitet.",
			"\"Batch ist immer schneller\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Transkription verarbeitet Live-Audiostreams; Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron\".",
			"\"Echtzeit funktioniert nur mit Englisch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Transkription verarbeitet Live-Audiostreams; Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron\". Beide unterstutzen mehrere Sprachen.",
			"\"Es gibt keinen Unterschied\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Transkription verarbeitet Live-Audiostreams; Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron\"."
		],
		"learnRef": {
			"title": "Recognize and synthesize speech",
			"url": "https://learn.microsoft.com/en-us/training/modules/recognize-synthesize-speech/"
		},
		"learnRefDe": {
			"title": "Recognize and synthesize speech (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/recognize-synthesize-speech/"
		}
	},
	{
		"id": "q113",
		"topic": "NLP",
		"prompt": "What is Custom Neural Voice in Azure AI Speech?",
		"hint": "Think about creating a unique, branded synthetic voice for your organization.",
		"options": [
			"A feature that creates a custom synthetic voice using your own audio recordings for text-to-speech",
			"A service that only plays pre-recorded audio clips",
			"A tool for translating spoken language between two people",
			"A feature for detecting keywords in audio"
		],
		"optionExplanations": [
			"Correct: Custom Neural Voice allows you to create a unique, branded synthetic voice by training a model on your own voice recordings for use in text-to-speech applications.",
			"\"A service that only plays pre-recorded audio clips\" is not the best fit for this question. The correct answer is \"A feature that creates a custom synthetic voice using your own audio recordings for text-to-speech\". Custom Neural Voice generates new speech, it does not play recordings.",
			"\"A tool for translating spoken language between two people\" is not the best fit for this question. The correct answer is \"A feature that creates a custom synthetic voice using your own audio recordings for text-to-speech\". Speech translation is a separate feature.",
			"\"A feature for detecting keywords in audio\" is not the best fit for this question. The correct answer is \"A feature that creates a custom synthetic voice using your own audio recordings for text-to-speech\". Keyword detection is a different Speech capability."
		],
		"answerIndex": 0,
		"explanation": "Custom Neural Voice in Azure AI Speech lets you create a unique synthetic voice by training on your own voice recordings, enabling branded text-to-speech experiences.",
		"promptDe": "Was ist Custom Neural Voice in Azure AI Speech?",
		"hintDe": "Denke an das Erstellen einer einzigartigen, markenbezogenen synthetischen Stimme fur deine Organisation.",
		"explanationDe": "Custom Neural Voice in Azure AI Speech ermoglicht das Erstellen einer einzigartigen synthetischen Stimme durch Training mit eigenen Sprachaufnahmen fur Text-to-Speech-Anwendungen.",
		"optionsDe": [
			"Eine Funktion zur Erstellung einer benutzerdefinierten synthetischen Stimme mit eigenen Audioaufnahmen fur Text-to-Speech",
			"Ein Dienst, der nur voraufgezeichnete Audioclips abspielt",
			"Ein Tool zur Ubersetzung gesprochener Sprache zwischen zwei Personen",
			"Eine Funktion zur Erkennung von Schlusselwortern in Audio"
		],
		"optionExplanationsDe": [
			"Richtig: Custom Neural Voice ermoglicht das Erstellen einer einzigartigen synthetischen Stimme durch Training mit eigenen Sprachaufnahmen.",
			"\"Ein Dienst, der nur Audioclips abspielt\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zur Erstellung einer benutzerdefinierten synthetischen Stimme mit eigenen Audioaufnahmen fur Text-to-Speech\". Custom Neural Voice generiert neue Sprache.",
			"\"Ein Tool zur Ubersetzung gesprochener Sprache\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zur Erstellung einer benutzerdefinierten synthetischen Stimme mit eigenen Audioaufnahmen fur Text-to-Speech\".",
			"\"Eine Funktion zur Erkennung von Schlusselwortern\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Funktion zur Erstellung einer benutzerdefinierten synthetischen Stimme mit eigenen Audioaufnahmen fur Text-to-Speech\"."
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
		"id": "q114",
		"topic": "NLP",
		"prompt": "Which Azure AI Language feature can automatically detect the language of a given text?",
		"hint": "Think about which feature determines whether text is written in English, German, French, or another language.",
		"options": [
			"Named Entity Recognition",
			"Language detection",
			"Key Phrase Extraction",
			"Text-to-Speech"
		],
		"optionExplanations": [
			"\"Named Entity Recognition\" is not the best fit for this question. The correct answer is \"Language detection\". NER extracts entities like names and locations, it does not identify the language.",
			"Correct: Language detection in Azure AI Language identifies the language of input text and returns a language code with a confidence score.",
			"\"Key Phrase Extraction\" is not the best fit for this question. The correct answer is \"Language detection\". Key Phrase Extraction identifies central themes, not the language.",
			"\"Text-to-Speech\" is not the best fit for this question. The correct answer is \"Language detection\". Text-to-Speech converts text to spoken audio, it does not detect the language of text."
		],
		"answerIndex": 1,
		"explanation": "Language detection in Azure AI Language identifies the language of input text and returns a language code with a confidence score.",
		"promptDe": "Welche Azure AI Language-Funktion kann automatisch die Sprache eines gegebenen Textes erkennen?",
		"hintDe": "Uberlege, welche Funktion bestimmt, ob ein Text auf Englisch, Deutsch, Franzosisch oder einer anderen Sprache geschrieben ist.",
		"explanationDe": "Spracherkennung in Azure AI Language identifiziert die Sprache des Eingabetexts und gibt einen Sprachcode mit Konfidenzwert zuruck.",
		"optionsDe": [
			"Named Entity Recognition",
			"Spracherkennung",
			"Key Phrase Extraction",
			"Text-to-Speech"
		],
		"optionExplanationsDe": [
			"\"Named Entity Recognition\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Spracherkennung\". NER extrahiert Entitaten wie Namen und Orte, identifiziert nicht die Sprache.",
			"Richtig: Spracherkennung in Azure AI Language identifiziert die Sprache des Eingabetexts und gibt einen Sprachcode mit Konfidenzwert zuruck.",
			"\"Key Phrase Extraction\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Spracherkennung\". Key Phrase Extraction identifiziert zentrale Themen, nicht die Sprache.",
			"\"Text-to-Speech\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Spracherkennung\". Text-to-Speech wandelt Text in gesprochenes Audio um."
		],
		"learnRef": {
			"title": "Analyze text with Azure AI Language",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-text-analytics-service/"
		},
		"learnRefDe": {
			"title": "Analyze text with Azure AI Language (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/analyze-text-with-text-analytics-service/"
		}
	},
	{
		"id": "q115",
		"topic": "NLP",
		"prompt": "What is custom text classification in Azure AI Language?",
		"hint": "Think about training a model to assign your own domain-specific categories to text documents.",
		"options": [
			"Training a model to categorize text into your own custom-defined classes",
			"Automatically translating text into all available languages",
			"Converting text to speech with a custom voice",
			"Extracting tables from PDF documents"
		],
		"optionExplanations": [
			"Correct: Custom text classification lets you define your own categories and train a model to automatically classify text documents into those categories.",
			"\"Automatically translating text into all available languages\" is not the best fit for this question. The correct answer is \"Training a model to categorize text into your own custom-defined classes\". Translation is Azure AI Translator.",
			"\"Converting text to speech with a custom voice\" is not the best fit for this question. The correct answer is \"Training a model to categorize text into your own custom-defined classes\". Custom voice is Azure AI Speech.",
			"\"Extracting tables from PDF documents\" is not the best fit for this question. The correct answer is \"Training a model to categorize text into your own custom-defined classes\". Table extraction is Azure AI Document Intelligence."
		],
		"answerIndex": 0,
		"explanation": "Custom text classification in Azure AI Language lets you define your own categories and train a model to automatically classify text documents.",
		"promptDe": "Was ist benutzerdefinierte Textklassifizierung in Azure AI Language?",
		"hintDe": "Denke an das Trainieren eines Modells, das deine eigenen domainspezifischen Kategorien auf Textdokumente anwendet.",
		"explanationDe": "Benutzerdefinierte Textklassifizierung in Azure AI Language ermoglicht es, eigene Kategorien zu definieren und ein Modell zu trainieren, das Textdokumente automatisch klassifiziert.",
		"optionsDe": [
			"Trainieren eines Modells zur Kategorisierung von Text in eigene benutzerdefinierte Klassen",
			"Automatisches Ubersetzen von Text in alle verfugbaren Sprachen",
			"Umwandlung von Text in Sprache mit einer benutzerdefinierten Stimme",
			"Extrahieren von Tabellen aus PDF-Dokumenten"
		],
		"optionExplanationsDe": [
			"Richtig: Benutzerdefinierte Textklassifizierung ermoglicht es, eigene Kategorien zu definieren und ein Modell zur automatischen Klassifizierung von Textdokumenten zu trainieren.",
			"\"Automatisches Ubersetzen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Trainieren eines Modells zur Kategorisierung von Text in eigene benutzerdefinierte Klassen\". Ubersetzung ist Azure AI Translator.",
			"\"Umwandlung von Text in Sprache\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Trainieren eines Modells zur Kategorisierung von Text in eigene benutzerdefinierte Klassen\". Benutzerdefinierte Stimme ist Azure AI Speech.",
			"\"Extrahieren von Tabellen aus PDF\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Trainieren eines Modells zur Kategorisierung von Text in eigene benutzerdefinierte Klassen\". Tabellenextraktion ist Azure AI Document Intelligence."
		],
		"learnRef": {
			"title": "Custom text classification with Azure AI Language",
			"url": "https://learn.microsoft.com/en-us/training/modules/custom-text-classification/"
		},
		"learnRefDe": {
			"title": "Custom text classification with Azure AI Language (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/custom-text-classification/"
		}
	},
	{
		"id": "q116",
		"type": "true-false",
		"topic": "NLP",
		"prompt": "Statement: Azure AI Translator can translate entire documents while preserving their original formatting.",
		"hint": "Consider whether the translation service handles full documents or only individual sentences.",
		"correctAnswer": "True",
		"explanation": "Azure AI Translator's document translation feature can translate entire documents in supported formats while preserving the original document structure and formatting.",
		"promptDe": "Aussage: Azure AI Translator kann ganze Dokumente ubersetzen und dabei die ursprungliche Formatierung beibehalten.",
		"hintDe": "Uberlege, ob der Ubersetzungsdienst ganze Dokumente oder nur einzelne Satze verarbeitet.",
		"explanationDe": "Die Dokumentubersetzungsfunktion von Azure AI Translator kann ganze Dokumente in unterstutzten Formaten ubersetzen und die ursprungliche Dokumentstruktur und Formatierung beibehalten.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Azure AI Translator's document translation can translate entire documents while preserving formatting.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Azure AI Translator supports full document translation with format preservation."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Die Dokumentubersetzung von Azure AI Translator kann ganze Dokumente unter Beibehaltung der Formatierung ubersetzen.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Azure AI Translator unterstutzt vollstandige Dokumentubersetzung mit Formatbeibehaltung."
		},
		"learnRef": {
			"title": "Translate text and documents with Azure AI Translator",
			"url": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translation-service/"
		},
		"learnRefDe": {
			"title": "Translate text and documents with Azure AI Translator (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/translate-text-with-translation-service/"
		}
	},
	{
		"id": "q117",
		"topic": "Machine Learning",
		"prompt": "What is the difference between a compute instance and a compute cluster in Azure Machine Learning?",
		"hint": "Think about a personal development workstation versus a scalable pool of machines for training jobs.",
		"options": [
			"A compute instance is a single VM for development; a compute cluster is a scalable pool of VMs for training jobs",
			"A compute cluster is for development; a compute instance is for training",
			"They are identical but with different pricing tiers",
			"A compute instance can only run notebooks; a compute cluster can only run pipelines"
		],
		"optionExplanations": [
			"Correct: A compute instance is a single managed VM for interactive development and notebooks, while a compute cluster is a scalable group of VMs for running training jobs.",
			"\"A compute cluster is for development; a compute instance is for training\" is not the best fit for this question. The correct answer is \"A compute instance is a single VM for development; a compute cluster is a scalable pool of VMs for training jobs\". This reverses the definitions.",
			"\"They are identical but with different pricing tiers\" is not the best fit for this question. The correct answer is \"A compute instance is a single VM for development; a compute cluster is a scalable pool of VMs for training jobs\". They serve different purposes.",
			"\"A compute instance can only run notebooks; a compute cluster can only run pipelines\" is not the best fit for this question. The correct answer is \"A compute instance is a single VM for development; a compute cluster is a scalable pool of VMs for training jobs\". Both can run various workloads."
		],
		"answerIndex": 0,
		"explanation": "A compute instance is a single managed VM for development and notebooks. A compute cluster is a scalable pool of VMs for running training jobs efficiently.",
		"promptDe": "Was ist der Unterschied zwischen einer Compute-Instanz und einem Compute-Cluster in Azure Machine Learning?",
		"hintDe": "Denke an eine personliche Entwicklungsworkstation versus einen skalierbaren Pool von Maschinen fur Trainingsjobs.",
		"explanationDe": "Eine Compute-Instanz ist eine einzelne verwaltete VM fur Entwicklung und Notebooks. Ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs.",
		"optionsDe": [
			"Eine Compute-Instanz ist eine einzelne VM fur Entwicklung; ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs",
			"Ein Compute-Cluster ist fur Entwicklung; eine Compute-Instanz ist fur Training",
			"Sie sind identisch, aber mit verschiedenen Preisstufen",
			"Eine Compute-Instanz kann nur Notebooks ausfuhren; ein Compute-Cluster nur Pipelines"
		],
		"optionExplanationsDe": [
			"Richtig: Eine Compute-Instanz ist eine einzelne verwaltete VM fur interaktive Entwicklung, wahrend ein Compute-Cluster eine skalierbare Gruppe von VMs fur Trainingsjobs ist.",
			"\"Cluster fur Entwicklung; Instanz fur Training\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Compute-Instanz ist eine einzelne VM fur Entwicklung; ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs\". Dies vertauscht die Definitionen.",
			"\"Sie sind identisch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Compute-Instanz ist eine einzelne VM fur Entwicklung; ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs\".",
			"\"Instanz nur Notebooks; Cluster nur Pipelines\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Compute-Instanz ist eine einzelne VM fur Entwicklung; ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q118",
		"topic": "Machine Learning",
		"prompt": "What is the Azure ML model registry used for?",
		"hint": "Think about a central place to track, version, and manage trained models.",
		"options": [
			"A centralized repository for registering, versioning, and managing trained models",
			"A tool for creating virtual networks",
			"A database for storing raw training data",
			"A service for deploying web applications"
		],
		"optionExplanations": [
			"Correct: The model registry is a centralized repository where you register, version, and manage trained ML models, making them available for deployment.",
			"\"A tool for creating virtual networks\" is not the best fit for this question. The correct answer is \"A centralized repository for registering, versioning, and managing trained models\". Virtual networking is an Azure infrastructure service.",
			"\"A database for storing raw training data\" is not the best fit for this question. The correct answer is \"A centralized repository for registering, versioning, and managing trained models\". Data storage is handled by data assets and datastores.",
			"\"A service for deploying web applications\" is not the best fit for this question. The correct answer is \"A centralized repository for registering, versioning, and managing trained models\". Web app deployment is Azure App Service."
		],
		"answerIndex": 0,
		"explanation": "The Azure ML model registry is a centralized repository for registering, versioning, and managing trained models, making them available for deployment.",
		"promptDe": "Wofur wird die Azure ML-Modellregistrierung verwendet?",
		"hintDe": "Denke an einen zentralen Ort zum Verfolgen, Versionieren und Verwalten trainierter Modelle.",
		"explanationDe": "Die Azure ML-Modellregistrierung ist ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle fur die Bereitstellung.",
		"optionsDe": [
			"Ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle",
			"Ein Tool zum Erstellen virtueller Netzwerke",
			"Eine Datenbank zum Speichern roher Trainingsdaten",
			"Ein Dienst zum Bereitstellen von Webanwendungen"
		],
		"optionExplanationsDe": [
			"Richtig: Die Modellregistrierung ist ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter ML-Modelle.",
			"\"Ein Tool zum Erstellen virtueller Netzwerke\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle\".",
			"\"Eine Datenbank zum Speichern roher Trainingsdaten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle\".",
			"\"Ein Dienst zum Bereitstellen von Webanwendungen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q119",
		"topic": "Machine Learning",
		"prompt": "What is the difference between real-time and batch endpoints in Azure Machine Learning?",
		"hint": "Think about instant responses for individual requests versus processing many requests at once.",
		"options": [
			"Real-time endpoints return predictions immediately for individual requests; batch endpoints process large datasets asynchronously",
			"Batch endpoints are faster than real-time endpoints",
			"Real-time endpoints only support image data; batch endpoints only support text data",
			"There is no difference; they are interchangeable"
		],
		"optionExplanations": [
			"Correct: Real-time endpoints serve predictions instantly for each request, while batch endpoints process large datasets asynchronously and return results when complete.",
			"\"Batch endpoints are faster than real-time endpoints\" is not the best fit for this question. The correct answer is \"Real-time endpoints return predictions immediately for individual requests; batch endpoints process large datasets asynchronously\". Real-time is faster per request; batch handles volume.",
			"\"Real-time only supports image data; batch only supports text\" is not the best fit for this question. The correct answer is \"Real-time endpoints return predictions immediately for individual requests; batch endpoints process large datasets asynchronously\". Both support various data types.",
			"\"There is no difference\" is not the best fit for this question. The correct answer is \"Real-time endpoints return predictions immediately for individual requests; batch endpoints process large datasets asynchronously\". They serve different use cases."
		],
		"answerIndex": 0,
		"explanation": "Real-time endpoints return predictions immediately for each request. Batch endpoints process large datasets asynchronously, returning results when all processing is complete.",
		"promptDe": "Was ist der Unterschied zwischen Echtzeit- und Batch-Endpunkten in Azure Machine Learning?",
		"hintDe": "Denke an sofortige Antworten fur einzelne Anfragen versus das Verarbeiten vieler Anfragen auf einmal.",
		"explanationDe": "Echtzeit-Endpunkte geben Vorhersagen sofort fur jede Anfrage zuruck. Batch-Endpunkte verarbeiten grosse Datensatze asynchron und geben Ergebnisse zuruck, wenn alles fertig ist.",
		"optionsDe": [
			"Echtzeit-Endpunkte geben Vorhersagen sofort fur einzelne Anfragen zuruck; Batch-Endpunkte verarbeiten grosse Datensatze asynchron",
			"Batch-Endpunkte sind schneller als Echtzeit-Endpunkte",
			"Echtzeit-Endpunkte unterstutzen nur Bilddaten; Batch-Endpunkte nur Textdaten",
			"Es gibt keinen Unterschied; sie sind austauschbar"
		],
		"optionExplanationsDe": [
			"Richtig: Echtzeit-Endpunkte liefern Vorhersagen sofort pro Anfrage, wahrend Batch-Endpunkte grosse Datensatze asynchron verarbeiten.",
			"\"Batch ist schneller\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Endpunkte geben Vorhersagen sofort fur einzelne Anfragen zuruck; Batch-Endpunkte verarbeiten grosse Datensatze asynchron\".",
			"\"Echtzeit nur Bilddaten; Batch nur Text\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Endpunkte geben Vorhersagen sofort fur einzelne Anfragen zuruck; Batch-Endpunkte verarbeiten grosse Datensatze asynchron\".",
			"\"Es gibt keinen Unterschied\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Echtzeit-Endpunkte geben Vorhersagen sofort fur einzelne Anfragen zuruck; Batch-Endpunkte verarbeiten grosse Datensatze asynchron\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q120",
		"topic": "Machine Learning",
		"prompt": "What is an ML pipeline in Azure Machine Learning?",
		"hint": "Think about automating the sequence of steps from data preparation to model training and evaluation.",
		"options": [
			"A sequence of automated steps for data processing, model training, and evaluation that can be scheduled and rerun",
			"A network cable connecting Azure data centers",
			"A single API call that deploys a model",
			"A tool for monitoring website traffic"
		],
		"optionExplanations": [
			"Correct: An ML pipeline is a sequence of automated, reusable steps such as data preparation, training, and evaluation that can be scheduled and rerun.",
			"\"A network cable connecting Azure data centers\" is not the best fit for this question. The correct answer is \"A sequence of automated steps for data processing, model training, and evaluation that can be scheduled and rerun\". Network cables are infrastructure.",
			"\"A single API call that deploys a model\" is not the best fit for this question. The correct answer is \"A sequence of automated steps for data processing, model training, and evaluation that can be scheduled and rerun\". Model deployment is done via endpoints.",
			"\"A tool for monitoring website traffic\" is not the best fit for this question. The correct answer is \"A sequence of automated steps for data processing, model training, and evaluation that can be scheduled and rerun\". Traffic monitoring is Azure Monitor."
		],
		"answerIndex": 0,
		"explanation": "An ML pipeline is a sequence of automated, reusable steps for data processing, model training, and evaluation that can be scheduled and rerun for reproducibility.",
		"promptDe": "Was ist eine ML-Pipeline in Azure Machine Learning?",
		"hintDe": "Denke an die Automatisierung der Schrittfolge von Datenaufbereitung uber Modelltraining bis zur Evaluierung.",
		"explanationDe": "Eine ML-Pipeline ist eine Folge automatisierter, wiederverwendbarer Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen.",
		"optionsDe": [
			"Eine Folge automatisierter Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen",
			"Ein Netzwerkkabel, das Azure-Rechenzentren verbindet",
			"Ein einzelner API-Aufruf, der ein Modell bereitstellt",
			"Ein Tool zur Uberwachung von Website-Traffic"
		],
		"optionExplanationsDe": [
			"Richtig: Eine ML-Pipeline ist eine Folge automatisierter, wiederverwendbarer Schritte fur Datenverarbeitung, Training und Evaluierung.",
			"\"Ein Netzwerkkabel\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Folge automatisierter Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen\".",
			"\"Ein einzelner API-Aufruf\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Folge automatisierter Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen\".",
			"\"Ein Tool zur Uberwachung von Website-Traffic\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Eine Folge automatisierter Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q121",
		"topic": "Machine Learning",
		"prompt": "What does the Responsible AI dashboard in Azure Machine Learning help you do?",
		"hint": "Think about understanding model behavior, identifying errors, and checking for fairness issues.",
		"options": [
			"Analyze model errors, evaluate fairness, and understand model explanations in a single view",
			"Automatically retrain models on new data",
			"Generate synthetic training data",
			"Deploy models to mobile devices"
		],
		"optionExplanations": [
			"Correct: The Responsible AI dashboard provides tools for error analysis, fairness assessment, model interpretability, and causal analysis in a unified interface.",
			"\"Automatically retrain models on new data\" is not the best fit for this question. The correct answer is \"Analyze model errors, evaluate fairness, and understand model explanations in a single view\". Automatic retraining is a separate pipeline feature.",
			"\"Generate synthetic training data\" is not the best fit for this question. The correct answer is \"Analyze model errors, evaluate fairness, and understand model explanations in a single view\". Data generation is not the purpose of the RAI dashboard.",
			"\"Deploy models to mobile devices\" is not the best fit for this question. The correct answer is \"Analyze model errors, evaluate fairness, and understand model explanations in a single view\". Mobile deployment is a separate concern."
		],
		"answerIndex": 0,
		"explanation": "The Responsible AI dashboard provides error analysis, fairness assessment, model interpretability, and causal analysis in a unified interface.",
		"promptDe": "Was hilft Ihnen das Responsible AI Dashboard in Azure Machine Learning?",
		"hintDe": "Denke an das Verstehen des Modellverhaltens, das Identifizieren von Fehlern und das Prufen auf Fairness-Probleme.",
		"explanationDe": "Das Responsible AI Dashboard bietet Fehleranalyse, Fairness-Bewertung, Modellinterpretierbarkeit und Kausalanalyse in einer einheitlichen Oberflache.",
		"optionsDe": [
			"Modellfehler analysieren, Fairness bewerten und Modellerklarungen in einer einzelnen Ansicht verstehen",
			"Modelle automatisch mit neuen Daten neu trainieren",
			"Synthetische Trainingsdaten generieren",
			"Modelle auf Mobilgeraten bereitstellen"
		],
		"optionExplanationsDe": [
			"Richtig: Das Responsible AI Dashboard bietet Fehleranalyse, Fairness-Bewertung, Modellinterpretierbarkeit und Kausalanalyse in einer einheitlichen Oberflache.",
			"\"Modelle automatisch neu trainieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellfehler analysieren, Fairness bewerten und Modellerklarungen in einer einzelnen Ansicht verstehen\".",
			"\"Synthetische Trainingsdaten generieren\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellfehler analysieren, Fairness bewerten und Modellerklarungen in einer einzelnen Ansicht verstehen\".",
			"\"Modelle auf Mobilgeraten bereitstellen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Modellfehler analysieren, Fairness bewerten und Modellerklarungen in einer einzelnen Ansicht verstehen\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q122",
		"topic": "Machine Learning",
		"prompt": "What is data labeling in Azure Machine Learning used for?",
		"hint": "Think about the process of annotating raw data with labels so it can be used for supervised learning.",
		"options": [
			"Annotating data with labels such as classes or bounding boxes to prepare it for supervised training",
			"Encrypting data at rest in Azure storage",
			"Compressing datasets to reduce storage costs",
			"Converting data between different file formats"
		],
		"optionExplanations": [
			"Correct: Data labeling in Azure ML provides tools for annotating images, text, and other data with labels like classes or bounding boxes for supervised learning.",
			"\"Encrypting data at rest in Azure storage\" is not the best fit for this question. The correct answer is \"Annotating data with labels such as classes or bounding boxes to prepare it for supervised training\". Encryption is a security feature.",
			"\"Compressing datasets to reduce storage costs\" is not the best fit for this question. The correct answer is \"Annotating data with labels such as classes or bounding boxes to prepare it for supervised training\". Data compression is not data labeling.",
			"\"Converting data between different file formats\" is not the best fit for this question. The correct answer is \"Annotating data with labels such as classes or bounding boxes to prepare it for supervised training\". Format conversion is data processing."
		],
		"answerIndex": 0,
		"explanation": "Data labeling in Azure ML provides tools for annotating images, text, and other data with labels like classes or bounding boxes, preparing data for supervised training.",
		"promptDe": "Wofur wird Data Labeling in Azure Machine Learning verwendet?",
		"hintDe": "Denke an den Prozess des Annotierens von Rohdaten mit Labels, damit sie fur uberwachtes Lernen verwendet werden konnen.",
		"explanationDe": "Data Labeling in Azure ML bietet Tools zum Annotieren von Bildern, Text und anderen Daten mit Labels wie Klassen oder Begrenzungsrahmen fur uberwachtes Training.",
		"optionsDe": [
			"Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen zur Vorbereitung fur uberwachtes Training",
			"Verschlusseln von Daten im Ruhezustand in Azure Storage",
			"Komprimieren von Datensatzen zur Reduzierung der Speicherkosten",
			"Konvertieren von Daten zwischen verschiedenen Dateiformaten"
		],
		"optionExplanationsDe": [
			"Richtig: Data Labeling in Azure ML bietet Tools zum Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen fur uberwachtes Lernen.",
			"\"Verschlusseln von Daten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen zur Vorbereitung fur uberwachtes Training\".",
			"\"Komprimieren von Datensatzen\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen zur Vorbereitung fur uberwachtes Training\".",
			"\"Konvertieren von Daten\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen zur Vorbereitung fur uberwachtes Training\"."
		],
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	},
	{
		"id": "q123",
		"type": "true-false",
		"topic": "Machine Learning",
		"prompt": "Statement: Azure Machine Learning Designer allows you to build ML pipelines using a drag-and-drop interface without writing code.",
		"hint": "Consider whether there is a no-code visual tool for building ML workflows in Azure ML.",
		"correctAnswer": "True",
		"explanation": "Azure Machine Learning Designer provides a drag-and-drop canvas for building ML pipelines visually, making it accessible to users without coding experience.",
		"promptDe": "Aussage: Azure Machine Learning Designer ermoglicht das Erstellen von ML-Pipelines mit einer Drag-and-Drop-Oberflache ohne Code zu schreiben.",
		"hintDe": "Uberlege, ob es ein No-Code-Visualtool zum Erstellen von ML-Workflows in Azure ML gibt.",
		"explanationDe": "Azure Machine Learning Designer bietet eine Drag-and-Drop-Leinwand zum visuellen Erstellen von ML-Pipelines, zuganglich fur Nutzer ohne Programmiererfahrung.",
		"correctAnswerDe": "Wahr",
		"optionExplanations": {
			"true": "Correct: Correct in this statement. Azure Machine Learning Designer provides a drag-and-drop canvas for building ML pipelines visually without writing code.",
			"false": "\"false\" is not the best fit for this question. The correct answer is \"True\". Not correct in this statement. Azure Machine Learning Designer provides a visual, no-code pipeline builder."
		},
		"optionExplanationsDe": {
			"wahr": "Richtig: Richtig in dieser Aussage. Azure Machine Learning Designer bietet eine Drag-and-Drop-Leinwand zum visuellen Erstellen von ML-Pipelines ohne Code.",
			"falsch": "\"falsch\" passt fur diese Frage nicht am besten. Die richtige Antwort ist \"Wahr\". In dieser Aussage nicht korrekt. Azure Machine Learning Designer bietet einen visuellen, codelosen Pipeline-Builder."
		},
		"learnRef": {
			"title": "Get started with machine learning in Azure",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		},
		"learnRefDe": {
			"title": "Einstieg in Machine Learning in Azure (Microsoft Learn)",
			"url": "https://learn.microsoft.com/en-us/training/modules/design-machine-learning-model-training-solution/"
		}
	}
];
