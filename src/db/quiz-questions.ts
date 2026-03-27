import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    "id": "q1",
    "topic": "AI Workloads",
    "type": "single-choice",
    "prompt": "Which statement best describes AI workloads?",
    "promptDe": "Welche Aussage beschreibt KI-Workloads am besten?",
    "hint": "Think about everything that has to come together for AI to solve a specific problem.",
    "hintDe": "Uberlege, was alles zusammenspielen muss, damit KI ein konkretes Problem losen kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "Every AI use case uses the same model and data flow.",
        "textDe": "Jeder KI-Use-Case nutzt dasselbe Modell und denselben Datenfluss.",
        "isCorrect": false,
        "explanation": "AI workloads vary by task, data, and operating constraints; they are not all identical.",
        "explanationDe": "KI-Workloads unterscheiden sich je nach Aufgabe, Daten und Betriebsbedingungen."
      },
      {
        "id": "opt-1",
        "text": "An AI workload combines data, model and inference for a specific goal.",
        "textDe": "Ein KI-Workload kombiniert Daten, Modell und Inferenz fur ein konkretes Ziel.",
        "isCorrect": true,
        "explanation": "A workload is the complete path from data to model output for a defined business goal.",
        "explanationDe": "Ein Workload umfasst den gesamten Weg von Daten bis zur Modellantwort fur ein klares Ziel."
      },
      {
        "id": "opt-2",
        "text": "An AI workload consists only of visualization.",
        "textDe": "Ein KI-Workload besteht nur aus Visualisierung.",
        "isCorrect": false,
        "explanation": "Visualization can be part of a solution, but it is not the workload itself.",
        "explanationDe": "Visualisierung kann Teil der Losung sein, ist aber nicht der ganze Workload."
      },
      {
        "id": "opt-3",
        "text": "An AI workload only describes infrastructure costs.",
        "textDe": "Ein KI-Workload beschreibt nur Infrastrukturkosten.",
        "isCorrect": false,
        "explanation": "Infrastructure cost is one aspect, not the definition of an AI workload.",
        "explanationDe": "Infrastrukturkosten sind nur ein Aspekt und nicht die Definition eines KI-Workloads."
      }
    ],
    "explanation": "A workload describes the end-to-end use of AI for a specific problem.",
    "explanationDe": "Ein Workload beschreibt den End-to-End-Einsatz von KI fur ein konkretes Problem.",
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
    "type": "single-choice",
    "prompt": "You want to evaluate night logs collectively. Which inference pattern fits best?",
    "promptDe": "Du willst Nachtlogs gesammelt auswerten. Welches Inferenzmuster passt am besten?",
    "hint": "Think about which pattern works well with large amounts of data that don't need to be processed in real time.",
    "hintDe": "Denk daran, welches Muster gut zu grossen Datenmengen passt, die nicht in Echtzeit verarbeitet werden mussen.",
    "options": [
      {
        "id": "opt-0",
        "text": "Batch inference",
        "textDe": "Batch Inference",
        "isCorrect": true,
        "explanation": "Batch inference fits periodic, large-scale, non-real-time processing.",
        "explanationDe": "Batch Inference passt zu periodischer Verarbeitung grosser Datenmengen ohne Echtzeitanforderung."
      },
      {
        "id": "opt-1",
        "text": "Online inference",
        "textDe": "Online Inference",
        "isCorrect": false,
        "explanation": "Online inference is designed for immediate, low-latency per-request predictions — not for batch processing of collected logs.",
        "explanationDe": "Online Inference ist fuer sofortige Vorhersagen mit niedriger Latenz pro Anfrage gedacht — nicht fuer die gesammelte Verarbeitung von Logs."
      },
      {
        "id": "opt-2",
        "text": "Streaming Translation",
        "textDe": "Streaming Translation",
        "isCorrect": false,
        "explanation": "Streaming translation is a language task, not a general log-processing inference pattern.",
        "explanationDe": "Streaming Translation ist eine Sprachaufgabe und kein allgemeines Inferenzmuster fur Logauswertung."
      },
      {
        "id": "opt-3",
        "text": "Prompt engineering",
        "textDe": "Prompt Engineering",
        "isCorrect": false,
        "explanation": "Prompt engineering shapes how instructions are given to a model, but it is not an inference execution pattern.",
        "explanationDe": "Prompt Engineering gestaltet Modellanweisungen, ist aber kein Inferenz-Ausfuehrungsmuster."
      }
    ],
    "explanation": "Batch inference is suitable for periodic processing of large amounts of data.",
    "explanationDe": "Batch Inference passt fur periodische Verarbeitung grosser Datenmengen.",
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
    "type": "single-choice",
    "prompt": "A productive model should remain stable. Which practice helps directly?",
    "promptDe": "Ein Produktivmodell soll stabil bleiben. Welche Praxis hilft direkt?",
    "hint": "What happens if the data changes over time and no one is looking?",
    "hintDe": "Was passiert, wenn sich die Daten im Laufe der Zeit verandern und niemand hinschaut?",
    "options": [
      {
        "id": "opt-0",
        "text": "Deploy the model without monitoring",
        "textDe": "Modell ohne Monitoring deployen",
        "isCorrect": false,
        "explanation": "Without monitoring, degradation can stay unnoticed in production.",
        "explanationDe": "Ohne Monitoring bleiben Verschlechterungen im Produktivbetrieb oft unbemerkt."
      },
      {
        "id": "opt-1",
        "text": "Work only with training metrics",
        "textDe": "Nur mit Trainingsmetriken arbeiten",
        "isCorrect": false,
        "explanation": "Training metrics alone do not reveal real-world drift or serving issues.",
        "explanationDe": "Trainingsmetriken allein zeigen keine Drift oder Serving-Probleme in der Praxis."
      },
      {
        "id": "opt-2",
        "text": "Continuously monitor drift and performance",
        "textDe": "Drift und Performance kontinuierlich uberwachen",
        "isCorrect": true,
        "explanation": "Continuous monitoring catches drift, quality drops, and failures early.",
        "explanationDe": "Kontinuierliches Monitoring erkennt Drift, Qualitatsverlust und Fehler fruhzeitig."
      },
      {
        "id": "opt-3",
        "text": "Hide feedback",
        "textDe": "Feedback ausblenden",
        "isCorrect": false,
        "explanation": "Hiding feedback removes a key signal needed for model improvement.",
        "explanationDe": "Ohne Feedback fehlen wichtige Signale fur Verbesserungen am Modell."
      }
    ],
    "explanation": "Monitoring helps to detect data and model drift early.",
    "explanationDe": "Monitoring hilft, Daten- und Modell-Drift fruh zu erkennen.",
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
    "type": "single-choice",
    "prompt": "You want to predict house prices. Which task is suitable?",
    "promptDe": "Du willst Hauspreise vorhersagen. Welche Aufgabe passt?",
    "hint": "Prices are not categories, but sequential numbers. Which ML task works with numerical values?",
    "hintDe": "Preise sind keine Kategorien, sondern fortlaufende Zahlen. Welche ML-Aufgabe arbeitet mit Zahlenwerten?",
    "options": [
      {
        "id": "opt-0",
        "text": "classification",
        "textDe": "Klassifikation",
        "isCorrect": false,
        "explanation": "Classification predicts discrete labels rather than continuous values. Classification predicts discrete classes, not continuous numeric values like price.",
        "explanationDe": "Klassifikation sagt diskrete Klassen voraus, keine kontinuierlichen Zahlenwerte. Klassifikation sagt diskrete Klassen voraus, nicht kontinuierliche Zahlen wie Preise."
      },
      {
        "id": "opt-1",
        "text": "Regression",
        "textDe": "Regression",
        "isCorrect": true,
        "explanation": "Regression predicts continuous numerical outputs such as house prices.",
        "explanationDe": "Regression sagt kontinuierliche numerische Zielwerte wie Hauspreise voraus."
      },
      {
        "id": "opt-2",
        "text": "Clustering",
        "textDe": "Clustering",
        "isCorrect": false,
        "explanation": "Clustering groups similar points without predicting a target value.",
        "explanationDe": "Clustering gruppiert ahnliche Datenpunkte ohne expliziten Zielwert."
      },
      {
        "id": "opt-3",
        "text": "Anomaly detection",
        "textDe": "Anomalieerkennung",
        "isCorrect": false,
        "explanation": "Anomaly detection flags outliers and is not a direct price prediction task.",
        "explanationDe": "Anomalieerkennung findet Ausreisser und ist keine direkte Preisvorhersage."
      }
    ],
    "explanation": "Prices are continuous numerical values, i.e. regression.",
    "explanationDe": "Preise sind kontinuierliche Zahlenwerte, also Regression.",
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
    "type": "single-choice",
    "prompt": "What is a typical sign of overfitting?",
    "promptDe": "Was ist ein typisches Zeichen fur Overfitting?",
    "hint": "Pay attention to the difference between training and test performance.",
    "hintDe": "Achte auf den Unterschied zwischen Trainings- und Testperformance.",
    "options": [
      {
        "id": "opt-0",
        "text": "Training and testing are both bad",
        "textDe": "Training und Test sind beide schlecht",
        "isCorrect": false,
        "explanation": "If both are bad, that often indicates underfitting, not overfitting.",
        "explanationDe": "Sind Training und Test beide schlecht, spricht das eher fur Underfitting als fur Overfitting."
      },
      {
        "id": "opt-1",
        "text": "Training is very good, testing is significantly worse",
        "textDe": "Training ist sehr gut, Test deutlich schlechter",
        "isCorrect": true,
        "explanation": "Strong training performance with weak test performance is the classic overfitting pattern.",
        "explanationDe": "Sehr gute Trainingswerte bei deutlich schwacheren Testwerten sind das typische Overfitting-Muster."
      },
      {
        "id": "opt-2",
        "text": "Model improves after each new data set",
        "textDe": "Modell verbessert sich nach jedem neuen Datensatz",
        "isCorrect": false,
        "explanation": "Improvement after more data can happen and does not define overfitting.",
        "explanationDe": "Verbesserung mit mehr Daten kann vorkommen und ist kein Overfitting-Kriterium."
      },
      {
        "id": "opt-3",
        "text": "Training data is not used",
        "textDe": "Trainingsdaten werden nicht benutzt",
        "isCorrect": false,
        "explanation": "Overfitting still uses training data heavily; the problem is poor generalization.",
        "explanationDe": "Overfitting nutzt Trainingsdaten stark; das Problem ist die schwache Generalisierung."
      }
    ],
    "explanation": "Overfitting often shows high training performance and weak generalization.",
    "explanationDe": "Overfitting zeigt oft hohe Trainingsleistung und schwache Generalisierung.",
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
    "type": "single-choice",
    "prompt": "Finding customer segments without labels is...",
    "promptDe": "Kundensegmente ohne Labels finden ist ...",
    "hint": "If there are no predefined categories (labels), what type of learning is used?",
    "hintDe": "Wenn keine vordefinierten Kategorien (Labels) vorhanden sind, welche Art von Lernen kommt dann zum Einsatz?",
    "options": [
      {
        "id": "opt-0",
        "text": "Supervised learning",
        "textDe": "Supervised Learning",
        "isCorrect": false,
        "explanation": "Supervised learning requires labeled training examples. Clustering without target variables is an unsupervised procedure.",
        "explanationDe": "Supervised Learning braucht gelabelte Trainingsdaten. Clustering ohne Zielvariable ist ein unsupervised Verfahren."
      },
      {
        "id": "opt-1",
        "text": "Unsupervised learning",
        "textDe": "Unsupervised Learning",
        "isCorrect": true,
        "explanation": "Clustering without target variables is an unsupervised procedure.",
        "explanationDe": "Clustering ohne Zielvariable ist ein unsupervised Verfahren."
      },
      {
        "id": "opt-2",
        "text": "Reinforcement learning",
        "textDe": "Reinforcement Learning",
        "isCorrect": false,
        "explanation": "Reinforcement learning uses reward signals to optimize actions — it requires an agent-environment interaction loop, not unlabeled data grouping.",
        "explanationDe": "Reinforcement Learning nutzt Reward-Signale zur Aktionsoptimierung — es braucht eine Agent-Umgebung-Interaktion, kein Gruppieren ohne Labels."
      },
      {
        "id": "opt-3",
        "text": "Transfer learning",
        "textDe": "Transfer Learning",
        "isCorrect": false,
        "explanation": "Transfer learning reuses prior model knowledge and is not the core task type here. Clustering without target variables is an unsupervised procedure.",
        "explanationDe": "Transfer Learning ubertragt vorhandenes Wissen, ist aber hier nicht der zentrale Aufgabentyp. Clustering ohne Zielvariable ist ein unsupervised Verfahren."
      }
    ],
    "explanation": "Clustering without target variables is an unsupervised procedure.",
    "explanationDe": "Clustering ohne Zielvariable ist ein unsupervised Verfahren.",
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
    "type": "single-choice",
    "prompt": "Divide images into \"dog\", \"cat\", \"bird\" is...",
    "promptDe": "Bilder in \"Hund\", \"Katze\", \"Vogel\" einteilen ist ...",
    "hint": "It's about assigning exactly one category to an entire image.",
    "hintDe": "Es geht darum, einem ganzen Bild genau eine Kategorie zuzuweisen.",
    "options": [
      {
        "id": "opt-0",
        "text": "Image classification",
        "textDe": "Bildklassifikation",
        "isCorrect": true,
        "explanation": "Image classification assigns a class to the image.",
        "explanationDe": "Bildklassifikation weist dem Bild eine Klasse zu."
      },
      {
        "id": "opt-1",
        "text": "Object detection",
        "textDe": "Objekterkennung",
        "isCorrect": false,
        "explanation": "Object detection localizes objects with bounding boxes, which is different from classifying a whole item. Image classification assigns a class to the image.",
        "explanationDe": "Objekterkennung lokalisiert Objekte mit Bounding Boxes und ist etwas anderes als reine Klassifikation. Bildklassifikation weist dem Bild eine Klasse zu."
      },
      {
        "id": "opt-2",
        "text": "Face verification",
        "textDe": "Face Verification",
        "isCorrect": false,
        "explanation": "Face verification checks whether two faces belong to the same person. Image classification assigns a class to the image.",
        "explanationDe": "Face Verification pruft, ob zwei Gesichter zur gleichen Person gehoren. Bildklassifikation weist dem Bild eine Klasse zu."
      },
      {
        "id": "opt-3",
        "text": "OCR",
        "textDe": "OCR",
        "isCorrect": false,
        "explanation": "OCR is focused on extracting text from images and documents. Image classification assigns a class to the image.",
        "explanationDe": "OCR extrahiert Text aus Bildern oder Dokumenten. Bildklassifikation weist dem Bild eine Klasse zu."
      }
    ],
    "explanation": "Image classification assigns a class to the image.",
    "explanationDe": "Bildklassifikation weist dem Bild eine Klasse zu.",
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
    "type": "single-choice",
    "prompt": "Which scenario suits OCR?",
    "promptDe": "Welches Szenario passt zu OCR?",
    "hint": "OCR stands for Optical Character Recognition. Where does written text need to be read from a visual medium?",
    "hintDe": "OCR steht fur Optical Character Recognition. Wo muss geschriebener Text aus einem visuellen Medium gelesen werden?",
    "options": [
      {
        "id": "opt-0",
        "text": "Recognize sentiment in customer feedback",
        "textDe": "Stimmung in Kundenfeedback erkennen",
        "isCorrect": false,
        "explanation": "Recognizing sentiment is an NLP text analysis task — OCR reads characters from visual media, not emotions from text.",
        "explanationDe": "Stimmungserkennung ist eine NLP-Textanalyse — OCR liest Zeichen aus visuellen Medien, keine Emotionen aus Text."
      },
      {
        "id": "opt-1",
        "text": "Read text on scanned forms",
        "textDe": "Text auf gescannten Formularen auslesen",
        "isCorrect": true,
        "explanation": "OCR extracts text from images and scanned documents.",
        "explanationDe": "OCR extrahiert Text aus Bildern und gescannten Dokumenten."
      },
      {
        "id": "opt-2",
        "text": "Track objects in real time",
        "textDe": "Objekte in Echtzeit tracken",
        "isCorrect": false,
        "explanation": "Tracking objects in real time is a computer vision task (object detection/tracking), not text extraction via OCR.",
        "explanationDe": "Echtzeit-Objektverfolgung ist eine Computer-Vision-Aufgabe (Objekterkennung/Tracking), keine Textextraktion per OCR."
      },
      {
        "id": "opt-3",
        "text": "Detect speech in audio",
        "textDe": "Sprache in Audio erkennen",
        "isCorrect": false,
        "explanation": "Detecting speech in audio is a speech recognition task, not optical character recognition from images.",
        "explanationDe": "Spracherkennung in Audio ist eine Speech-Aufgabe, keine optische Zeichenerkennung aus Bildern."
      }
    ],
    "explanation": "OCR extracts text from images and scanned documents.",
    "explanationDe": "OCR extrahiert Text aus Bildern und gescannten Dokumenten.",
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
    "type": "single-choice",
    "prompt": "Object detection typically provides...",
    "promptDe": "Objekterkennung liefert typischerweise ...",
    "hint": "Object detection not only finds what is in the image, but also where it is located.",
    "hintDe": "Objekterkennung findet nicht nur was im Bild ist, sondern auch wo es sich befindet.",
    "options": [
      {
        "id": "opt-0",
        "text": "a single class probability for the whole image",
        "textDe": "eine einzelne Klassenwahrscheinlichkeit fur das ganze Bild",
        "isCorrect": false,
        "explanation": "A single class probability for the whole image is the output of image classification, not object detection which locates multiple objects.",
        "explanationDe": "Eine einzelne Klassenwahrscheinlichkeit fuer das ganze Bild ist die Ausgabe von Bildklassifikation, nicht von Objekterkennung die mehrere Objekte lokalisiert."
      },
      {
        "id": "opt-1",
        "text": "Bounding boxes and classes for recognized objects",
        "textDe": "Bounding Boxes und Klassen fur erkannte Objekte",
        "isCorrect": true,
        "explanation": "Object detection locates objects and classifies them.",
        "explanationDe": "Objekterkennung lokalisiert Objekte und klassifiziert sie."
      },
      {
        "id": "opt-2",
        "text": "just sentiment values",
        "textDe": "nur Sentimentwerte",
        "isCorrect": false,
        "explanation": "Sentiment values are produced by NLP text analysis, not by computer vision object detection.",
        "explanationDe": "Sentimentwerte stammen aus NLP-Textanalyse, nicht aus Computer-Vision-Objekterkennung."
      },
      {
        "id": "opt-3",
        "text": "just a text summary",
        "textDe": "nur eine Textzusammenfassung",
        "isCorrect": false,
        "explanation": "A text summary is generated by NLP summarization models, not by object detection which returns spatial data.",
        "explanationDe": "Textzusammenfassungen werden von NLP-Modellen generiert, nicht von Objekterkennung die raeumliche Daten liefert."
      }
    ],
    "explanation": "Object detection locates objects and classifies them.",
    "explanationDe": "Objekterkennung lokalisiert Objekte und klassifiziert sie.",
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
    "type": "single-choice",
    "prompt": "A service should automatically recognize the language in texts.",
    "promptDe": "Ein Dienst soll automatisch die Sprache in Texten erkennen.",
    "hint": "Which NLP function determines whether a text is written in German, English or French, for example?",
    "hintDe": "Welche NLP-Funktion bestimmt, ob ein Text z.B. auf Deutsch, Englisch oder Franzosisch geschrieben ist?",
    "options": [
      {
        "id": "opt-0",
        "text": "Language Detection",
        "textDe": "Language Detection",
        "isCorrect": true,
        "explanation": "Language detection determines the language directly.",
        "explanationDe": "Language Detection bestimmt die Sprache direkt."
      },
      {
        "id": "opt-1",
        "text": "Sentiment Analysis",
        "textDe": "Sentiment Analysis",
        "isCorrect": false,
        "explanation": "Sentiment analysis evaluates the emotional tone of text, it does not identify which language a text is written in.",
        "explanationDe": "Sentiment Analysis bewertet die Stimmung in Text, erkennt aber nicht, in welcher Sprache der Text geschrieben ist."
      },
      {
        "id": "opt-2",
        "text": "OCR",
        "textDe": "OCR",
        "isCorrect": false,
        "explanation": "OCR is focused on extracting text from images and documents. Language detection determines the language directly.",
        "explanationDe": "OCR extrahiert Text aus Bildern oder Dokumenten. Language Detection bestimmt die Sprache direkt."
      },
      {
        "id": "opt-3",
        "text": "Topic Modeling",
        "textDe": "Topic Modeling",
        "isCorrect": false,
        "explanation": "Topic modeling discovers abstract themes in document collections, it does not detect language.",
        "explanationDe": "Topic Modeling entdeckt abstrakte Themen in Dokumentsammlungen, es erkennt nicht die Sprache eines Textes."
      }
    ],
    "explanation": "Language detection determines the language directly.",
    "explanationDe": "Language Detection bestimmt die Sprache direkt.",
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
    "type": "single-choice",
    "prompt": "Which function recognizes positive, negative or neutral statements?",
    "promptDe": "Welche Funktion erkennt positive, negative oder neutrale Aussagen?",
    "hint": "It's about the mood or opinion in a text. What analysis evaluates exactly that?",
    "hintDe": "Es geht um die Stimmung oder Meinung in einem Text. Welche Analyse bewertet genau das?",
    "options": [
      {
        "id": "opt-0",
        "text": "Sentiment Analysis",
        "textDe": "Sentiment Analysis",
        "isCorrect": true,
        "explanation": "Sentiment Analysis evaluates the mood in text.",
        "explanationDe": "Sentiment Analysis bewertet die Stimmung in Text."
      },
      {
        "id": "opt-1",
        "text": "Entity linking",
        "textDe": "Entity Linking",
        "isCorrect": false,
        "explanation": "Entity linking connects recognized entities to knowledge bases — it does not evaluate emotional tone.",
        "explanationDe": "Entity Linking verbindet erkannte Entitaeten mit Wissensdatenbanken — es bewertet keine emotionale Stimmung."
      },
      {
        "id": "opt-2",
        "text": "Part-of-speech tagging",
        "textDe": "Part-of-Speech Tagging",
        "isCorrect": false,
        "explanation": "Part-of-speech tagging identifies grammatical roles of words (noun, verb, etc.), not the sentiment of statements.",
        "explanationDe": "Part-of-Speech Tagging identifiziert grammatische Rollen von Woertern (Nomen, Verb usw.), nicht die Stimmung von Aussagen."
      },
      {
        "id": "opt-3",
        "text": "OCR",
        "textDe": "OCR",
        "isCorrect": false,
        "explanation": "OCR is focused on extracting text from images and documents. Sentiment Analysis evaluates the mood in text.",
        "explanationDe": "OCR extrahiert Text aus Bildern oder Dokumenten. Sentiment Analysis bewertet die Stimmung in Text."
      }
    ],
    "explanation": "Sentiment Analysis evaluates the mood in text.",
    "explanationDe": "Sentiment Analysis bewertet die Stimmung in Text.",
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
    "type": "single-choice",
    "prompt": "Named Entity Recognition is primarily used to...",
    "promptDe": "Named Entity Recognition dient primar dazu ...",
    "hint": "The name says it all: it's about recognizing named things in texts.",
    "hintDe": "Der Name sagt es schon: Es geht um das Erkennen von benannten Dingen in Texten.",
    "options": [
      {
        "id": "opt-0",
        "text": "Divide images into categories",
        "textDe": "Bilder in Kategorien einzuteilen",
        "isCorrect": false,
        "explanation": "Dividing images into categories is image classification — NER works with text, not images.",
        "explanationDe": "Bilder in Kategorien einteilen ist Bildklassifikation — NER arbeitet mit Text, nicht mit Bildern."
      },
      {
        "id": "opt-1",
        "text": "Extract entities such as people, places and organizations",
        "textDe": "Entitaten wie Personen, Orte und Organisationen zu extrahieren",
        "isCorrect": true,
        "explanation": "NER highlights and classifies relevant entities in the text.",
        "explanationDe": "NER markiert und klassifiziert relevante Entitaten im Text."
      },
      {
        "id": "opt-2",
        "text": "Transcribe audio",
        "textDe": "Audio zu transkribieren",
        "isCorrect": false,
        "explanation": "Transcribing audio is a speech-to-text task — NER extracts named entities from text that already exists.",
        "explanationDe": "Audio transkribieren ist eine Speech-to-Text-Aufgabe — NER extrahiert benannte Entitaeten aus bereits vorhandenem Text."
      },
      {
        "id": "opt-3",
        "text": "Retrain models",
        "textDe": "Modelle neu zu trainieren",
        "isCorrect": false,
        "explanation": "Retraining models is a machine learning operations task, not a text analysis function like NER.",
        "explanationDe": "Modelle neu trainieren ist eine ML-Operations-Aufgabe, keine Textanalysefunktion wie NER."
      }
    ],
    "explanation": "NER highlights and classifies relevant entities in the text.",
    "explanationDe": "NER markiert und klassifiziert relevante Entitaten im Text.",
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
    "type": "single-choice",
    "prompt": "Which Azure service is intended for prompt-based text generation?",
    "promptDe": "Welcher Azure-Dienst ist fur promptbasierte Textgenerierung gedacht?",
    "hint": "Which Azure service provides the well-known GPT models?",
    "hintDe": "Welcher Azure-Dienst stellt die bekannten GPT-Modelle bereit?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure OpenAI Service",
        "textDe": "Azure OpenAI Service",
        "isCorrect": true,
        "explanation": "Azure OpenAI Service provides models for generative prompts.",
        "explanationDe": "Azure OpenAI Service stellt Modelle fur generative Prompts bereit."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": false,
        "explanation": "Azure AI Search is an indexing and search service — it does not generate text from prompts.",
        "explanationDe": "Azure AI Search ist ein Indexierungs- und Suchdienst — er generiert keinen Text aus Prompts."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Vision",
        "textDe": "Azure AI Vision",
        "isCorrect": false,
        "explanation": "Azure AI Vision focuses on image and video analysis, not on prompt-based text generation.",
        "explanationDe": "Azure AI Vision ist auf Bild- und Videoanalyse spezialisiert, nicht auf promptbasierte Textgenerierung."
      },
      {
        "id": "opt-3",
        "text": "Azure DNS",
        "textDe": "Azure DNS",
        "isCorrect": false,
        "explanation": "Azure DNS is a domain name resolution service and has no AI capabilities.",
        "explanationDe": "Azure DNS ist ein Domain-Aufloesungsdienst und hat keine KI-Faehigkeiten."
      }
    ],
    "explanation": "Azure OpenAI Service provides models for generative prompts.",
    "explanationDe": "Azure OpenAI Service stellt Modelle fur generative Prompts bereit.",
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
    "type": "single-choice",
    "prompt": "What is a typical goal of prompt engineering?",
    "promptDe": "Was ist ein typisches Ziel von Prompt Engineering?",
    "hint": "Prompt engineering is about how best to explain its task to the model.",
    "hintDe": "Beim Prompt Engineering geht es darum, wie man dem Modell seine Aufgabe am besten erklart.",
    "options": [
      {
        "id": "opt-0",
        "text": "Optimize GPU temperature",
        "textDe": "GPU-Temperatur optimieren",
        "isCorrect": false,
        "explanation": "GPU temperature is a hardware concern managed by infrastructure, not something addressed by prompt engineering.",
        "explanationDe": "GPU-Temperatur ist ein Hardware-Thema der Infrastruktur, nichts das durch Prompt Engineering adressiert wird."
      },
      {
        "id": "opt-1",
        "text": "Improve model outputs with clear instructions and context",
        "textDe": "Modellausgaben durch klare Anweisungen und Kontext verbessern",
        "isCorrect": true,
        "explanation": "Prompt engineering controls the quality and relevance of output.",
        "explanationDe": "Prompt Engineering steuert Qualitat und Relevanz der Ausgaben."
      },
      {
        "id": "opt-2",
        "text": "Replace database indexes",
        "textDe": "Datenbankindizes ersetzen",
        "isCorrect": false,
        "explanation": "Database indexes are a data storage optimization — prompt engineering works on model instructions, not databases.",
        "explanationDe": "Datenbankindizes sind eine Speicheroptimierung — Prompt Engineering arbeitet an Modellanweisungen, nicht an Datenbanken."
      },
      {
        "id": "opt-3",
        "text": "Just halve the latency",
        "textDe": "Nur die Latenz halbieren",
        "isCorrect": false,
        "explanation": "Latency reduction is an infrastructure optimization — prompt engineering focuses on the quality and relevance of model output.",
        "explanationDe": "Latenzreduzierung ist eine Infrastrukturoptimierung — Prompt Engineering konzentriert sich auf Qualitaet und Relevanz der Modellausgabe."
      }
    ],
    "explanation": "Prompt engineering controls the quality and relevance of output.",
    "explanationDe": "Prompt Engineering steuert Qualitat und Relevanz der Ausgaben.",
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
    "type": "single-choice",
    "prompt": "Which approach reduces hallucinations in company data responses?",
    "promptDe": "Welcher Ansatz reduziert Halluzinationen in Antworten auf Unternehmensdaten?",
    "hint": "Which procedure first provides the model with relevant documents as context?",
    "hintDe": "Welches Verfahren gibt dem Modell zuerst relevante Dokumente als Kontext mit?",
    "options": [
      {
        "id": "opt-0",
        "text": "RAG with relevant sources",
        "textDe": "RAG mit relevanten Quellen",
        "isCorrect": true,
        "explanation": "RAG provides the model with appropriate, current sources as context.",
        "explanationDe": "RAG liefert dem Modell passende, aktuelle Quellen als Kontext."
      },
      {
        "id": "opt-1",
        "text": "Just increase the temperature",
        "textDe": "Nur Temperatur erhohen",
        "isCorrect": false,
        "explanation": "Increasing temperature makes outputs more random and creative, which actually increases rather than reduces hallucinations.",
        "explanationDe": "Hoehere Temperature macht Ausgaben zufaelliger und kreativer, was Halluzinationen eher verstaerkt statt reduziert."
      },
      {
        "id": "opt-2",
        "text": "Reduce context window",
        "textDe": "Context Window reduzieren",
        "isCorrect": false,
        "explanation": "Reducing the context window limits how much information the model can see, making it harder to incorporate relevant data.",
        "explanationDe": "Ein kleineres Context Window begrenzt, wie viel Information das Modell sehen kann, und erschwert die Einbeziehung relevanter Daten."
      },
      {
        "id": "opt-3",
        "text": "Just avoid few-shot",
        "textDe": "Nur Few-shot vermeiden",
        "isCorrect": false,
        "explanation": "Few-shot examples can actually help reduce hallucinations by showing the model the expected format — avoiding them is not the key strategy.",
        "explanationDe": "Few-shot-Beispiele koennen Halluzinationen sogar reduzieren, indem sie dem Modell das erwartete Format zeigen — sie zu vermeiden ist nicht die Kernstrategie."
      }
    ],
    "explanation": "RAG provides the model with appropriate, current sources as context.",
    "explanationDe": "RAG liefert dem Modell passende, aktuelle Quellen als Kontext.",
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
    "type": "single-choice",
    "prompt": "Indexing many documents and searching semantically fits...",
    "promptDe": "Viele Dokumente indizieren und semantisch suchen passt zu ...",
    "hint": "Which Azure service is specifically designed for searching large collections of documents?",
    "hintDe": "Welcher Azure-Dienst ist speziell fur das Durchsuchen grosser Dokumentensammlungen gemacht?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": true,
        "explanation": "Azure AI Search is designed for indexing and search.",
        "explanationDe": "Azure AI Search ist fur Indexierung und Suche ausgelegt."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Face",
        "textDe": "Azure AI Face",
        "isCorrect": false,
        "explanation": "Azure AI Face is for facial recognition and verification in images, not for document indexing and search.",
        "explanationDe": "Azure AI Face ist fuer Gesichtserkennung und -verifizierung in Bildern, nicht fuer Dokumentindexierung und Suche."
      },
      {
        "id": "opt-2",
        "text": "Azure Batch",
        "textDe": "Azure Batch",
        "isCorrect": false,
        "explanation": "Azure Batch runs large-scale parallel computing jobs — it is not a search or indexing service.",
        "explanationDe": "Azure Batch fuehrt parallele Rechenaufgaben in grossem Massstab aus — es ist kein Such- oder Indexierungsdienst."
      },
      {
        "id": "opt-3",
        "text": "Azure Monitor",
        "textDe": "Azure Monitor",
        "isCorrect": false,
        "explanation": "Azure Monitor tracks infrastructure and application health metrics, not document content.",
        "explanationDe": "Azure Monitor ueberwacht Infrastruktur- und Anwendungsmetriken, keine Dokumentinhalte."
      }
    ],
    "explanation": "Azure AI Search is designed for indexing and search.",
    "explanationDe": "Azure AI Search ist fur Indexierung und Suche ausgelegt.",
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
    "type": "single-choice",
    "prompt": "What is a key step in the knowledge mining workflow?",
    "promptDe": "Was ist ein zentraler Schritt im Knowledge-Mining-Workflow?",
    "hint": "Raw documents must first be prepared before they can be searched.",
    "hintDe": "Rohe Dokumente mussen erst aufbereitet werden, bevor man darin suchen kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "Ignore documents",
        "textDe": "Dokumente ignorieren",
        "isCorrect": false,
        "explanation": "Ignoring documents would prevent any information from being extracted — the opposite of what knowledge mining does.",
        "explanationDe": "Dokumente zu ignorieren wuerde verhindern, dass Informationen extrahiert werden — das Gegenteil von Knowledge Mining."
      },
      {
        "id": "opt-1",
        "text": "Enrich and index content",
        "textDe": "Inhalte anreichern und indexieren",
        "isCorrect": true,
        "explanation": "Enrichment and indexing make content searchable.",
        "explanationDe": "Anreicherung und Indexierung machen Inhalte durchsuchbar."
      },
      {
        "id": "opt-2",
        "text": "Only train models locally",
        "textDe": "Nur Modelle lokal trainieren",
        "isCorrect": false,
        "explanation": "Training models locally is a machine learning task, not a knowledge mining workflow step for document processing.",
        "explanationDe": "Modelle lokal trainieren ist eine ML-Aufgabe, kein Knowledge-Mining-Schritt fuer Dokumentverarbeitung."
      },
      {
        "id": "opt-3",
        "text": "Manual search without index",
        "textDe": "Manuelle Suche ohne Index",
        "isCorrect": false,
        "explanation": "Manual search without an index does not scale and misses the AI enrichment that makes knowledge mining valuable.",
        "explanationDe": "Manuelle Suche ohne Index skaliert nicht und verpasst die KI-Anreicherung, die Knowledge Mining wertvoll macht."
      }
    ],
    "explanation": "Enrichment and indexing make content searchable.",
    "explanationDe": "Anreicherung und Indexierung machen Inhalte durchsuchbar.",
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
    "type": "single-choice",
    "prompt": "Semantic search differs from simple keyword search primarily in...",
    "promptDe": "Semantische Suche unterscheidet sich von einfacher Keyword-Suche vor allem durch ...",
    "hint": "Remember the difference between exact word matching and understanding meaning.",
    "hintDe": "Denk an den Unterschied zwischen exaktem Wortabgleich und dem Verstehen der Bedeutung.",
    "options": [
      {
        "id": "opt-0",
        "text": "just faster response time",
        "textDe": "nur schnellere Antwortzeit",
        "isCorrect": false,
        "explanation": "Semantic search may actually be slower than keyword search because it requires additional computation to understand meaning.",
        "explanationDe": "Semantische Suche kann sogar langsamer sein als Keyword-Suche, weil zusaetzliche Berechnung fuer das Verstehen der Bedeutung noetig ist."
      },
      {
        "id": "opt-1",
        "text": "Understanding meaning and context",
        "textDe": "Verstandnis von Bedeutung und Kontext",
        "isCorrect": true,
        "explanation": "Semantic search takes the meaning of the content into account.",
        "explanationDe": "Semantische Suche berucksichtigt die inhaltliche Bedeutung."
      },
      {
        "id": "opt-2",
        "text": "less computing power per request",
        "textDe": "weniger Rechenleistung pro Anfrage",
        "isCorrect": false,
        "explanation": "Semantic search typically requires more computing power than keyword search due to vector embeddings and similarity calculations.",
        "explanationDe": "Semantische Suche braucht typischerweise mehr Rechenleistung als Keyword-Suche wegen Vektor-Embeddings und Aehnlichkeitsberechnungen."
      },
      {
        "id": "opt-3",
        "text": "Forced to use relational databases",
        "textDe": "Zwang zu relationalen Datenbanken",
        "isCorrect": false,
        "explanation": "Semantic search does not require relational databases — it typically uses vector indexes or search engines.",
        "explanationDe": "Semantische Suche braucht keine relationalen Datenbanken — sie nutzt typischerweise Vektorindizes oder Suchmaschinen."
      }
    ],
    "explanation": "Semantic search takes the meaning of the content into account.",
    "explanationDe": "Semantische Suche berucksichtigt die inhaltliche Bedeutung.",
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
    "type": "single-choice",
    "prompt": "A model systematically disadvantages a group. Which principle is affected?",
    "promptDe": "Ein Modell benachteiligt eine Gruppe systematisch. Welches Prinzip ist betroffen?",
    "hint": "What principle ensures that no one is treated unfairly?",
    "hintDe": "Welches Prinzip stellt sicher, dass niemand ungerecht behandelt wird?",
    "options": [
      {
        "id": "opt-0",
        "text": "fairness",
        "textDe": "Fairness",
        "isCorrect": true,
        "explanation": "Unequal treatment between groups is a fairness problem.",
        "explanationDe": "Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem."
      },
      {
        "id": "opt-1",
        "text": "transparency",
        "textDe": "Transparenz",
        "isCorrect": false,
        "explanation": "Transparency means making AI decisions understandable and traceable — systematic disadvantage of groups is a fairness issue.",
        "explanationDe": "Transparenz bedeutet, KI-Entscheidungen nachvollziehbar zu machen — systematische Benachteiligung von Gruppen ist ein Fairness-Problem."
      },
      {
        "id": "opt-2",
        "text": "Inclusivity",
        "textDe": "Inklusivitat",
        "isCorrect": false,
        "explanation": "Inclusivity ensures that AI solutions serve all users — but systematic unequal treatment of groups is specifically a fairness concern.",
        "explanationDe": "Inklusivitaet stellt sicher, dass KI-Loesungen allen zugaenglich sind — systematische Ungleichbehandlung ist aber ein Fairness-Problem."
      },
      {
        "id": "opt-3",
        "text": "responsibility",
        "textDe": "Verantwortlichkeit",
        "isCorrect": false,
        "explanation": "Responsibility means humans remain accountable for AI outcomes — but the specific issue of group disadvantage is fairness.",
        "explanationDe": "Verantwortlichkeit bedeutet, dass Menschen fuer KI-Ergebnisse verantwortlich bleiben — aber Gruppenbenachteiligung ist ein Fairness-Problem."
      }
    ],
    "explanation": "Unequal treatment between groups is a fairness problem.",
    "explanationDe": "Ungleichbehandlung zwischen Gruppen ist ein Fairness-Problem.",
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
    "type": "single-choice",
    "prompt": "Which measure increases transparency in AI systems?",
    "promptDe": "Welche Massnahme erhoht Transparenz in KI-Systemen?",
    "hint": "Transparency means traceability. What helps to make decisions understandable?",
    "hintDe": "Transparenz bedeutet Nachvollziehbarkeit. Was hilft, Entscheidungen verstandlich zu machen?",
    "options": [
      {
        "id": "opt-0",
        "text": "Deliver decisions without justification",
        "textDe": "Entscheidungen ohne Begrundung liefern",
        "isCorrect": false,
        "explanation": "Delivering decisions without justification is the opposite of transparency — it hides the reasoning behind AI outputs.",
        "explanationDe": "Entscheidungen ohne Begruendung zu liefern ist das Gegenteil von Transparenz — es verbirgt die Logik hinter KI-Ausgaben."
      },
      {
        "id": "opt-1",
        "text": "Document model inputs and decision logic",
        "textDe": "Modellinputs und Entscheidungslogik dokumentieren",
        "isCorrect": true,
        "explanation": "Documentation and explainability make AI more understandable.",
        "explanationDe": "Dokumentation und Erklarbarkeit machen KI nachvollziehbarer."
      },
      {
        "id": "opt-2",
        "text": "Only allow proprietary formats",
        "textDe": "Nur proprietare Formate erlauben",
        "isCorrect": false,
        "explanation": "Proprietary formats restrict access to information, which reduces rather than increases transparency.",
        "explanationDe": "Proprietaere Formate schraenken den Zugang zu Informationen ein, was Transparenz verringert statt erhoehen."
      },
      {
        "id": "opt-3",
        "text": "Do not log errors",
        "textDe": "Fehler nicht protokollieren",
        "isCorrect": false,
        "explanation": "Not logging errors hides problems and makes the system less understandable — the opposite of transparency.",
        "explanationDe": "Fehler nicht zu protokollieren verbirgt Probleme und macht das System weniger nachvollziehbar — das Gegenteil von Transparenz."
      }
    ],
    "explanation": "Documentation and explainability make AI more understandable.",
    "explanationDe": "Dokumentation und Erklarbarkeit machen KI nachvollziehbarer.",
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
    "type": "single-choice",
    "prompt": "Which principle requires robust, safe model use?",
    "promptDe": "Welches Prinzip fordert robuste, sichere Modellnutzung?",
    "hint": "Which Responsible AI principle cares about stability and protection against errors?",
    "hintDe": "Welches Responsible-AI-Prinzip kummert sich um Stabilitat und Schutz vor Fehlern?",
    "options": [
      {
        "id": "opt-0",
        "text": "Inclusivity",
        "textDe": "Inklusivitat",
        "isCorrect": false,
        "explanation": "Inclusivity ensures broad accessibility of AI solutions, but robust and safe operation is the domain of reliability and security.",
        "explanationDe": "Inklusivitaet sorgt fuer breite Zugaenglichkeit, aber robuster und sicherer Betrieb gehoert zu Zuverlaessigkeit und Sicherheit."
      },
      {
        "id": "opt-1",
        "text": "Reliability and security",
        "textDe": "Zuverlassigkeit und Sicherheit",
        "isCorrect": true,
        "explanation": "Reliability and safety are core principles of responsible AI.",
        "explanationDe": "Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI."
      },
      {
        "id": "opt-2",
        "text": "fairness",
        "textDe": "Fairness",
        "isCorrect": false,
        "explanation": "Fairness addresses equal treatment between groups, but robust and safe model use falls under reliability and security.",
        "explanationDe": "Fairness betrifft Gleichbehandlung zwischen Gruppen, aber robuste und sichere Modellnutzung faellt unter Zuverlaessigkeit und Sicherheit."
      },
      {
        "id": "opt-3",
        "text": "Data density",
        "textDe": "Datendichte",
        "isCorrect": false,
        "explanation": "Data density is not a recognized Responsible AI principle — reliability and security directly address robust, safe operation.",
        "explanationDe": "Datendichte ist kein anerkanntes Responsible-AI-Prinzip — Zuverlaessigkeit und Sicherheit adressieren direkt robusten, sicheren Betrieb."
      }
    ],
    "explanation": "Reliability and safety are core principles of responsible AI.",
    "explanationDe": "Zuverlassigkeit und Sicherheit sind Kernprinzipien verantwortungsvoller KI.",
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
    "type": "single-choice",
    "prompt": "Extract invoice data such as amount and date matches...",
    "promptDe": "Rechnungsdaten wie Betrag und Datum extrahieren passt zu ...",
    "hint": "Which Azure service specializes in reading structured fields from documents?",
    "hintDe": "Welcher Azure-Dienst ist darauf spezialisiert, strukturierte Felder aus Dokumenten herauszulesen?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Document Intelligence",
        "textDe": "Azure AI Document Intelligence",
        "isCorrect": true,
        "explanation": "Document Intelligence extracts structured information from documents.",
        "explanationDe": "Document Intelligence extrahiert strukturierte Informationen aus Dokumenten."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Translator",
        "textDe": "Azure AI Translator",
        "isCorrect": false,
        "explanation": "Azure AI Translator provides neural machine translation between languages — it does not extract structured data from documents.",
        "explanationDe": "Azure AI Translator bietet neuronale maschinelle Uebersetzung — er extrahiert keine strukturierten Daten aus Dokumenten."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Speech",
        "textDe": "Azure AI Speech",
        "isCorrect": false,
        "explanation": "Azure AI Speech focuses on speech recognition and speech synthesis. Document Intelligence extracts structured information from documents.",
        "explanationDe": "Azure AI Speech ist fur Spracherkennung und Sprachsynthese gedacht. Document Intelligence extrahiert strukturierte Informationen aus Dokumenten."
      },
      {
        "id": "opt-3",
        "text": "Azure AI Content Safety",
        "textDe": "Azure AI Content Safety",
        "isCorrect": false,
        "explanation": "Azure AI Content Safety detects harmful or inappropriate content — it does not extract structured data from invoices.",
        "explanationDe": "Azure AI Content Safety erkennt schaedliche oder unangemessene Inhalte — es extrahiert keine strukturierten Daten aus Rechnungen."
      }
    ],
    "explanation": "Document Intelligence extracts structured information from documents.",
    "explanationDe": "Document Intelligence extrahiert strukturierte Informationen aus Dokumenten.",
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
    "type": "single-choice",
    "prompt": "When do you use a custom extraction model?",
    "promptDe": "Wann nutzt man ein benutzerdefiniertes Extraktionsmodell?",
    "hint": "When are the standard models supplied not enough?",
    "hintDe": "Wann reichen die mitgelieferten Standardmodelle nicht aus?",
    "options": [
      {
        "id": "opt-0",
        "text": "When standard models do not cover the document structure well",
        "textDe": "Wenn Standardmodelle die Dokumentstruktur nicht gut abdecken",
        "isCorrect": true,
        "explanation": "Custom models help with specific forms or layouts.",
        "explanationDe": "Custom-Modelle helfen bei spezifischen Formularen oder Layouts."
      },
      {
        "id": "opt-1",
        "text": "If there is no data",
        "textDe": "Wenn keine Daten vorhanden sind",
        "isCorrect": false,
        "explanation": "Without any data at all, no model — standard or custom — can be trained or used for extraction.",
        "explanationDe": "Ohne jegliche Daten kann kein Modell — weder Standard noch Custom — trainiert oder fuer Extraktion genutzt werden."
      },
      {
        "id": "opt-2",
        "text": "When only audio is processed",
        "textDe": "Wenn nur Audio verarbeitet wird",
        "isCorrect": false,
        "explanation": "Audio processing is a speech task, not a document extraction task — Document Intelligence works with visual documents.",
        "explanationDe": "Audioverarbeitung ist eine Speech-Aufgabe, keine Dokumentextraktionsaufgabe — Document Intelligence arbeitet mit visuellen Dokumenten."
      },
      {
        "id": "opt-3",
        "text": "If you don't want to recognize any fields",
        "textDe": "Wenn man keine Felder erkennen will",
        "isCorrect": false,
        "explanation": "If you do not want to recognize any fields, there is no need for an extraction model at all.",
        "explanationDe": "Wenn man keine Felder erkennen will, braucht man ueberhaupt kein Extraktionsmodell."
      }
    ],
    "explanation": "Custom models help with specific forms or layouts.",
    "explanationDe": "Custom-Modelle helfen bei spezifischen Formularen oder Layouts.",
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
    "type": "single-choice",
    "prompt": "What result is typical with document intelligence?",
    "promptDe": "Welches Ergebnis ist bei Document Intelligence typisch?",
    "hint": "What do you get back when a document is analyzed? Think about more than just text.",
    "hintDe": "Was bekommt man zuruck, wenn ein Dokument analysiert wird? Denk an mehr als nur Text.",
    "options": [
      {
        "id": "opt-0",
        "text": "Just a PNG as output",
        "textDe": "Nur ein PNG als Ausgabe",
        "isCorrect": false,
        "explanation": "Document Intelligence returns structured data (fields, tables, key-value pairs), not just an image format like PNG.",
        "explanationDe": "Document Intelligence liefert strukturierte Daten (Felder, Tabellen, Schluessel-Wert-Paare), nicht nur ein Bildformat wie PNG."
      },
      {
        "id": "opt-1",
        "text": "Structured fields including confidence values",
        "textDe": "Strukturierte Felder inklusive Konfidenzwerten",
        "isCorrect": true,
        "explanation": "Extraction results usually contain recognized fields plus confidences.",
        "explanationDe": "Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen."
      },
      {
        "id": "opt-2",
        "text": "Just a numerical score",
        "textDe": "Nur ein numerischer Score",
        "isCorrect": false,
        "explanation": "A single numerical score provides no useful document structure — Document Intelligence returns multiple fields with confidences.",
        "explanationDe": "Ein einzelner numerischer Score liefert keine nuetzliche Dokumentstruktur — Document Intelligence gibt mehrere Felder mit Konfidenzen zurueck."
      },
      {
        "id": "opt-3",
        "text": "Just prediction of language",
        "textDe": "Nur Vorhersage der Sprache",
        "isCorrect": false,
        "explanation": "Language prediction is a small NLP task — Document Intelligence goes much further by extracting structured fields and tables.",
        "explanationDe": "Sprachvorhersage ist eine kleine NLP-Aufgabe — Document Intelligence geht viel weiter und extrahiert strukturierte Felder und Tabellen."
      }
    ],
    "explanation": "Extraction results usually contain recognized fields plus confidences.",
    "explanationDe": "Extraktionsergebnisse enthalten meist erkannte Felder plus Konfidenzen.",
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
    "topic": "Responsible AI",
    "type": "true-false",
    "prompt": "Statement: Fairness in AI means that all user groups should be treated equally.",
    "promptDe": "Aussage: Fairness in KI bedeutet, dass alle Nutzergruppen gleich behandelt werden sollen.",
    "hint": "Consider whether fairness means balancing differences between groups or ignoring them.",
    "hintDe": "Uberlege, ob Fairness bedeutet, Unterschiede zwischen Gruppen auszugleichen oder sie zu ignorieren.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Fairness aims at fair treatment and avoids systematic disadvantage.",
        "explanationDe": "Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — fairness in AI does aim for equal treatment of all user groups and avoids systematic bias.",
        "explanationDe": "Die Aussage ist korrekt — Fairness in KI zielt auf Gleichbehandlung aller Nutzergruppen und vermeidet systematische Verzerrung."
      }
    ],
    "explanation": "Fairness aims at fair treatment and avoids systematic disadvantage.",
    "explanationDe": "Fairness zielt auf gerechte Behandlung und vermeidet systematische Benachteiligung.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: Prompt engineering is only relevant for image models.",
    "promptDe": "Aussage: Prompt Engineering ist nur fur Bildmodelle relevant.",
    "hint": "Remember what types of models all work with prompts (text, code, images...).",
    "hintDe": "Denk daran, welche Arten von Modellen alle mit Prompts arbeiten (Text, Code, Bilder...).",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": false,
        "explanation": "The statement is incorrect — prompt engineering is used across text, code, and image models, not only for image models.",
        "explanationDe": "Die Aussage ist falsch — Prompt Engineering wird fuer Text-, Code- und Bildmodelle eingesetzt, nicht nur fuer Bildmodelle."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": true,
        "explanation": "Prompt engineering is particularly central to text and code models.",
        "explanationDe": "Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral."
      }
    ],
    "explanation": "Prompt engineering is particularly central to text and code models.",
    "explanationDe": "Prompt Engineering ist besonders auch fur Text- und Code-Modelle zentral.",
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
    "topic": "Machine Learning",
    "type": "true-false",
    "prompt": "Statement: A model can be very good on training data and still perform poorly on new data.",
    "promptDe": "Aussage: Ein Modell kann auf Trainingsdaten sehr gut sein und trotzdem auf neuen Daten schwach performen.",
    "hint": "This phenomenon has a well-known name in machine learning. Think about the balance between learning and generalizing.",
    "hintDe": "Dieses Phanomen hat einen bekannten Namen in Machine Learning. Denk an die Balance zwischen Lernen und Generalisieren.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "This is typical behavior with overfitting.",
        "explanationDe": "Das ist ein typisches Verhalten bei Overfitting."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — this describes the classic overfitting pattern where training performance diverges from test performance.",
        "explanationDe": "Die Aussage ist korrekt — sie beschreibt das klassische Overfitting-Muster, bei dem Trainings- und Testleistung auseinanderklaffen."
      }
    ],
    "explanation": "This is typical behavior with overfitting.",
    "explanationDe": "Das ist ein typisches Verhalten bei Overfitting.",
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
    "topic": "Knowledge Mining",
    "type": "true-false",
    "prompt": "Statement: Semantic search takes meaning and context into account rather than just exact keywords.",
    "promptDe": "Aussage: Semantische Suche berucksichtigt Bedeutung und Kontext statt nur exakte Keywords.",
    "hint": "What makes semantic search different than a simple full-text search?",
    "hintDe": "Was macht semantische Suche anders als eine einfache Volltextsuche?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "This is exactly what distinguishes semantic search from pure keyword search.",
        "explanationDe": "Genau das unterscheidet semantische Suche von reiner Keyword-Suche."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — understanding meaning and context beyond exact keywords is precisely what defines semantic search.",
        "explanationDe": "Die Aussage ist korrekt — Bedeutung und Kontext ueber exakte Keywords hinaus zu verstehen, definiert genau semantische Suche."
      }
    ],
    "explanation": "This is exactly what distinguishes semantic search from pure keyword search.",
    "explanationDe": "Genau das unterscheidet semantische Suche von reiner Keyword-Suche.",
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
    "type": "single-choice",
    "prompt": "Which Azure service bundles many AI functions such as vision, speech and language under one roof?",
    "promptDe": "Welcher Azure-Dienst bundelt viele KI-Funktionen wie Vision, Speech und Language unter einem Dach?",
    "hint": "This collection service was previously called “Cognitive Services”. What is his name today?",
    "hintDe": "Frueher hiess dieser Sammeldienst \"Cognitive Services\". Wie heisst er heute?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Services",
        "textDe": "Azure AI Services",
        "isCorrect": true,
        "explanation": "Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
        "explanationDe": "Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten."
      },
      {
        "id": "opt-1",
        "text": "Azure DevOps",
        "textDe": "Azure DevOps",
        "isCorrect": false,
        "explanation": "Azure DevOps is a CI/CD and project management platform for software development, not an AI service collection.",
        "explanationDe": "Azure DevOps ist eine CI/CD- und Projektmanagement-Plattform fuer Softwareentwicklung, keine KI-Dienstsammlung."
      },
      {
        "id": "opt-2",
        "text": "Azure Monitor",
        "textDe": "Azure Monitor",
        "isCorrect": false,
        "explanation": "Azure Monitor tracks infrastructure health and performance — it does not provide AI capabilities like vision or speech.",
        "explanationDe": "Azure Monitor ueberwacht Infrastruktur und Leistung — es bietet keine KI-Faehigkeiten wie Vision oder Speech."
      },
      {
        "id": "opt-3",
        "text": "Azure Logic Apps",
        "textDe": "Azure Logic Apps",
        "isCorrect": false,
        "explanation": "Azure Logic Apps automates workflows with connectors — it is not a bundled AI services offering.",
        "explanationDe": "Azure Logic Apps automatisiert Workflows mit Konnektoren — es ist kein gebuendeltes KI-Dienstangebot."
      }
    ],
    "explanation": "Azure AI Services (formerly Cognitive Services) provides a central API for multiple AI capabilities.",
    "explanationDe": "Azure AI Services (fruher Cognitive Services) bietet eine zentrale API fur mehrere KI-Fahigkeiten.",
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
    "type": "single-choice",
    "prompt": "What describes the process of making a trained model available to end users?",
    "promptDe": "Was beschreibt den Prozess, ein trainiertes Modell fur Endnutzer verfugbar zu machen?",
    "hint": "What do you call the step of deploying a model as an endpoint or service?",
    "hintDe": "Wie nennt man den Schritt, bei dem ein Modell als Endpunkt oder Service bereitgestellt wird?",
    "options": [
      {
        "id": "opt-0",
        "text": "Deployment",
        "textDe": "Deployment",
        "isCorrect": true,
        "explanation": "Deployment is the act of making a model available as an endpoint or service.",
        "explanationDe": "Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service."
      },
      {
        "id": "opt-1",
        "text": "Feature engineering",
        "textDe": "Feature Engineering",
        "isCorrect": false,
        "explanation": "Feature engineering transforms input variables before training — it does not make a model available to end users.",
        "explanationDe": "Feature Engineering transformiert Eingabevariablen vor dem Training — es macht kein Modell fuer Endnutzer verfuegbar."
      },
      {
        "id": "opt-2",
        "text": "Data wrangling",
        "textDe": "Data Wrangling",
        "isCorrect": false,
        "explanation": "Data wrangling cleans and prepares raw data — it is a preprocessing step, not the act of serving a model.",
        "explanationDe": "Data Wrangling bereinigt und bereitet Rohdaten auf — es ist ein Vorverarbeitungsschritt, nicht das Bereitstellen eines Modells."
      },
      {
        "id": "opt-3",
        "text": "Hyperparameter tuning",
        "textDe": "Hyperparameter Tuning",
        "isCorrect": false,
        "explanation": "Hyperparameter tuning optimizes model training settings — it happens before deployment, not as part of it.",
        "explanationDe": "Hyperparameter Tuning optimiert Trainingseinstellungen — es geschieht vor dem Deployment, nicht als Teil davon."
      }
    ],
    "explanation": "Deployment is the act of making a model available as an endpoint or service.",
    "explanationDe": "Deployment ist das Bereitstellen eines Modells als Endpunkt oder Service.",
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
    "topic": "AI Workloads",
    "type": "true-false",
    "prompt": "Statement: Azure AI Services can be accessed via REST APIs and SDKs.",
    "promptDe": "Aussage: Azure AI Services konnen uber REST-APIs und SDKs angesprochen werden.",
    "hint": "Consider how cloud services are typically addressed by developers.",
    "hintDe": "Uberlege, wie Cloud-Dienste normalerweise von Entwicklern angesprochen werden.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "All Azure AI Services offer REST endpoints and client SDKs in multiple languages.",
        "explanationDe": "Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure AI Services provide both REST API endpoints and client SDKs in multiple programming languages.",
        "explanationDe": "Die Aussage ist korrekt — Azure AI Services bieten sowohl REST-API-Endpunkte als auch Client-SDKs in mehreren Programmiersprachen."
      }
    ],
    "explanation": "All Azure AI Services offer REST endpoints and client SDKs in multiple languages.",
    "explanationDe": "Alle Azure AI Services bieten REST-Endpunkte und Client-SDKs in mehreren Sprachen.",
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
    "type": "single-choice",
    "prompt": "Which Azure component provides a drag-and-drop interface for building ML pipelines?",
    "promptDe": "Welche Azure-Komponente bietet eine Drag-and-Drop-Oberflache zum Erstellen von ML-Pipelines?",
    "hint": "There is a visual tool in Azure ML that requires no code.",
    "hintDe": "Es gibt ein visuelles Werkzeug in Azure ML, das keinen Code erfordert.",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure Machine Learning Designer",
        "textDe": "Azure Machine Learning Designer",
        "isCorrect": true,
        "explanation": "The designer enables visual creation of ML workflows without code.",
        "explanationDe": "Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code."
      },
      {
        "id": "opt-1",
        "text": "Azure Data Factory",
        "textDe": "Azure Data Factory",
        "isCorrect": false,
        "explanation": "Azure Data Factory orchestrates data movement and ETL pipelines, not ML model building with drag-and-drop.",
        "explanationDe": "Azure Data Factory orchestriert Datenbewegungen und ETL-Pipelines, nicht ML-Modellbau per Drag-and-Drop."
      },
      {
        "id": "opt-2",
        "text": "Azure Stream Analytics",
        "textDe": "Azure Stream Analytics",
        "isCorrect": false,
        "explanation": "Azure Stream Analytics processes real-time data streams — it is not a visual ML pipeline builder.",
        "explanationDe": "Azure Stream Analytics verarbeitet Echtzeit-Datenstroeme — es ist kein visueller ML-Pipeline-Builder."
      },
      {
        "id": "opt-3",
        "text": "Azure Synapse",
        "textDe": "Azure Synapse",
        "isCorrect": false,
        "explanation": "Azure Synapse is an analytics platform for big data — it does not offer drag-and-drop ML pipeline design.",
        "explanationDe": "Azure Synapse ist eine Analyseplattform fuer Big Data — es bietet kein Drag-and-Drop ML-Pipeline-Design."
      }
    ],
    "explanation": "The designer enables visual creation of ML workflows without code.",
    "explanationDe": "Der Designer ermoglicht visuelles Erstellen von ML-Workflows ohne Code.",
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
    "type": "single-choice",
    "prompt": "What is the main advantage of Automated ML (AutoML)?",
    "promptDe": "Was ist der Hauptvorteil von Automated ML (AutoML)?",
    "hint": "What does AutoML automate that would otherwise have to be laboriously done by hand?",
    "hintDe": "Was wird bei AutoML automatisiert, das man sonst muhsam von Hand machen musste?",
    "options": [
      {
        "id": "opt-0",
        "text": "It automatically tests various algorithms and hyperparameters",
        "textDe": "Es testet automatisch verschiedene Algorithmen und Hyperparameter",
        "isCorrect": true,
        "explanation": "AutoML automates model selection and tuning to find the best model.",
        "explanationDe": "AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden."
      },
      {
        "id": "opt-1",
        "text": "It completely replaces data collection",
        "textDe": "Es ersetzt die Datensammlung komplett",
        "isCorrect": false,
        "explanation": "AutoML automates model selection, not data collection — you still need to provide training data.",
        "explanationDe": "AutoML automatisiert die Modellauswahl, nicht die Datensammlung — Trainingsdaten muessen weiterhin bereitgestellt werden."
      },
      {
        "id": "opt-2",
        "text": "It doesn't require any data",
        "textDe": "Es braucht keinerlei Daten",
        "isCorrect": false,
        "explanation": "AutoML requires data to function — it automates the algorithm search, not the data acquisition.",
        "explanationDe": "AutoML braucht Daten zum Funktionieren — es automatisiert die Algorithmensuche, nicht die Datenbeschaffung."
      },
      {
        "id": "opt-3",
        "text": "It only works with image data",
        "textDe": "Es funktioniert nur mit Bilddaten",
        "isCorrect": false,
        "explanation": "AutoML works with tabular, text, and image data — it is not limited to image data.",
        "explanationDe": "AutoML arbeitet mit tabellarischen, Text- und Bilddaten — es ist nicht auf Bilddaten beschraenkt."
      }
    ],
    "explanation": "AutoML automates model selection and tuning to find the best model.",
    "explanationDe": "AutoML automatisiert Modellauswahl und Tuning, um das beste Modell zu finden.",
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
    "type": "single-choice",
    "prompt": "What metric measures how often a classification model is right?",
    "promptDe": "Welche Metrik misst, wie oft ein Klassifikationsmodell richtig liegt?",
    "hint": "What simple metric indicates the percentage of correct predictions?",
    "hintDe": "Welche einfache Metrik gibt den prozentualen Anteil korrekter Vorhersagen an?",
    "options": [
      {
        "id": "opt-0",
        "text": "Accuracy",
        "textDe": "Accuracy",
        "isCorrect": true,
        "explanation": "Accuracy is the proportion of correct predictions out of the total.",
        "explanationDe": "Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl."
      },
      {
        "id": "opt-1",
        "text": "Latency",
        "textDe": "Latency",
        "isCorrect": false,
        "explanation": "Latency measures response time of a system, not the correctness of predictions.",
        "explanationDe": "Latency misst die Antwortzeit eines Systems, nicht die Korrektheit von Vorhersagen."
      },
      {
        "id": "opt-2",
        "text": "Throughput",
        "textDe": "Throughput",
        "isCorrect": false,
        "explanation": "Throughput measures how many requests a system handles per time unit, not prediction correctness.",
        "explanationDe": "Throughput misst, wie viele Anfragen ein System pro Zeiteinheit verarbeitet, nicht die Vorhersagekorrektheit."
      },
      {
        "id": "opt-3",
        "text": "Overfitting rate",
        "textDe": "Overfitting-Rate",
        "isCorrect": false,
        "explanation": "Overfitting rate is not a standard ML metric — overfitting is a condition detected by comparing training vs validation performance.",
        "explanationDe": "Overfitting-Rate ist keine Standard-ML-Metrik — Overfitting ist ein Zustand, der durch Vergleich von Trainings- und Validierungsleistung erkannt wird."
      }
    ],
    "explanation": "Accuracy is the proportion of correct predictions out of the total.",
    "explanationDe": "Accuracy ist der Anteil korrekter Vorhersagen an der Gesamtzahl.",
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
    "type": "single-choice",
    "prompt": "What describes feature engineering?",
    "promptDe": "Was beschreibt Feature Engineering?",
    "hint": "It's about preparing the input data before a model learns from it.",
    "hintDe": "Es geht um die Vorbereitung der Eingabedaten, bevor ein Modell daraus lernt.",
    "options": [
      {
        "id": "opt-0",
        "text": "Selecting and transforming input variables for a model",
        "textDe": "Das Auswahlen und Transformieren von Eingabevariablen fur ein Modell",
        "isCorrect": true,
        "explanation": "Feature engineering optimizes the input data so that the model learns better.",
        "explanationDe": "Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt."
      },
      {
        "id": "opt-1",
        "text": "Deploying a model to the cloud",
        "textDe": "Das Deployen eines Modells in die Cloud",
        "isCorrect": false,
        "explanation": "Deploying a model is a later step in the ML lifecycle — feature engineering happens during data preparation before training.",
        "explanationDe": "Modell-Deployment ist ein spaeterer Schritt im ML-Lebenszyklus — Feature Engineering geschieht bei der Datenvorbereitung vor dem Training."
      },
      {
        "id": "opt-2",
        "text": "Deleting all training data",
        "textDe": "Das Loschen aller Trainingsdaten",
        "isCorrect": false,
        "explanation": "Deleting all training data would make training impossible — feature engineering transforms data, it does not remove it.",
        "explanationDe": "Alle Trainingsdaten zu loeschen wuerde Training unmoeglich machen — Feature Engineering transformiert Daten, loescht sie nicht."
      },
      {
        "id": "opt-3",
        "text": "Classifying images manually",
        "textDe": "Das manuelle Klassifizieren von Bildern",
        "isCorrect": false,
        "explanation": "Manually classifying images is data labeling, not feature engineering which transforms input variables.",
        "explanationDe": "Manuelles Klassifizieren von Bildern ist Datenlabeling, nicht Feature Engineering das Eingabevariablen transformiert."
      }
    ],
    "explanation": "Feature engineering optimizes the input data so that the model learns better.",
    "explanationDe": "Feature Engineering optimiert die Eingabedaten, damit das Modell besser lernt.",
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
    "type": "single-choice",
    "prompt": "Which method learns through rewards and punishments?",
    "promptDe": "Welches Verfahren lernt durch Belohnungen und Bestrafungen?",
    "hint": "Think of an agent learning through trial and error, much like a player in a game.",
    "hintDe": "Denk an einen Agenten, der durch Versuch und Irrtum lernt, ahnlich wie ein Spieler in einem Spiel.",
    "options": [
      {
        "id": "opt-0",
        "text": "Reinforcement learning",
        "textDe": "Reinforcement Learning",
        "isCorrect": true,
        "explanation": "Reinforcement learning optimizes actions based on reward signals.",
        "explanationDe": "Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen."
      },
      {
        "id": "opt-1",
        "text": "Supervised learning",
        "textDe": "Supervised Learning",
        "isCorrect": false,
        "explanation": "Supervised learning requires labeled training examples. Reinforcement learning optimizes actions based on reward signals.",
        "explanationDe": "Supervised Learning braucht gelabelte Trainingsdaten. Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen."
      },
      {
        "id": "opt-2",
        "text": "Unsupervised learning",
        "textDe": "Unsupervised Learning",
        "isCorrect": false,
        "explanation": "Unsupervised learning finds patterns in unlabeled data — it does not use reward and punishment signals.",
        "explanationDe": "Unsupervised Learning findet Muster in ungelabelten Daten — es nutzt keine Belohnungs- und Bestrafungssignale."
      },
      {
        "id": "opt-3",
        "text": "Transfer learning",
        "textDe": "Transfer Learning",
        "isCorrect": false,
        "explanation": "Transfer learning reuses prior model knowledge and is not the core task type here. Reinforcement learning optimizes actions based on reward signals.",
        "explanationDe": "Transfer Learning ubertragt vorhandenes Wissen, ist aber hier nicht der zentrale Aufgabentyp. Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen."
      }
    ],
    "explanation": "Reinforcement learning optimizes actions based on reward signals.",
    "explanationDe": "Reinforcement Learning optimiert Aktionen basierend auf Reward-Signalen.",
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
    "topic": "Machine Learning",
    "type": "true-false",
    "prompt": "Statement: Supervised learning requires labeled training data.",
    "promptDe": "Aussage: Bei Supervised Learning braucht man gelabelte Trainingsdaten.",
    "hint": "What does “supervised” mean? Who or what provides guidance when learning?",
    "hintDe": "Was bedeutet \"supervised\" (beaufsichtigt)? Wer oder was gibt die Anleitung beim Lernen?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Supervised learning uses input-output pairs (labels) for learning.",
        "explanationDe": "Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — supervised learning fundamentally requires input-output pairs (labeled data) to learn mappings.",
        "explanationDe": "Die Aussage ist korrekt — Supervised Learning benoetigt grundsaetzlich Eingabe-Ausgabe-Paare (gelabelte Daten) zum Lernen."
      }
    ],
    "explanation": "Supervised learning uses input-output pairs (labels) for learning.",
    "explanationDe": "Supervised Learning nutzt Eingabe-Ausgabe-Paare (Labels) zum Lernen.",
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
    "type": "single-choice",
    "prompt": "You want to classify emails as spam or non-spam. What task is that?",
    "promptDe": "Du willst E-Mails als Spam oder Nicht-Spam einstufen. Welche Aufgabe ist das?",
    "hint": "How many possible categories are there here? And what does it mean when there are exactly two?",
    "hintDe": "Wie viele mogliche Kategorien gibt es hier? Und was heisst es, wenn es genau zwei sind?",
    "options": [
      {
        "id": "opt-0",
        "text": "Binary classification",
        "textDe": "Binare Klassifikation",
        "isCorrect": true,
        "explanation": "Two classes (spam/non-spam) are a binary classification task.",
        "explanationDe": "Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe."
      },
      {
        "id": "opt-1",
        "text": "Regression",
        "textDe": "Regression",
        "isCorrect": false,
        "explanation": "Regression predicts continuous numeric values like prices, not discrete categories like spam/non-spam.",
        "explanationDe": "Regression sagt kontinuierliche Zahlenwerte wie Preise voraus, keine diskreten Kategorien wie Spam/Nicht-Spam."
      },
      {
        "id": "opt-2",
        "text": "Clustering",
        "textDe": "Clustering",
        "isCorrect": false,
        "explanation": "Clustering groups data points without predefined labels — it does not assign items to known categories.",
        "explanationDe": "Clustering gruppiert Datenpunkte ohne vordefinierte Labels — es ordnet keine Elemente bekannten Kategorien zu."
      },
      {
        "id": "opt-3",
        "text": "Anomaly detection",
        "textDe": "Anomalieerkennung",
        "isCorrect": false,
        "explanation": "Anomaly detection flags unusual outliers in data, it does not classify items into predefined categories.",
        "explanationDe": "Anomalieerkennung findet ungewoehnliche Ausreisser, sie klassifiziert keine Elemente in vordefinierte Kategorien."
      }
    ],
    "explanation": "Two classes (spam/non-spam) are a binary classification task.",
    "explanationDe": "Zwei Klassen (Spam/Nicht-Spam) sind eine binare Klassifikationsaufgabe.",
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
    "type": "single-choice",
    "prompt": "Which Azure service offers pre-built models for image analysis, facial recognition and OCR?",
    "promptDe": "Welcher Azure-Dienst bietet vorgefertigte Modelle fur Bildanalyse, Gesichtserkennung und OCR?",
    "hint": "Which Azure service has “Vision” in its name and covers everything related to image processing?",
    "hintDe": "Welcher Azure-Dienst hat \"Vision\" im Namen und deckt alles rund um Bildverarbeitung ab?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Vision",
        "textDe": "Azure AI Vision",
        "isCorrect": true,
        "explanation": "Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
        "explanationDe": "Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Translator",
        "textDe": "Azure AI Translator",
        "isCorrect": false,
        "explanation": "Azure AI Translator provides text translation between languages, not image analysis or visual recognition.",
        "explanationDe": "Azure AI Translator bietet Textuebersetzung zwischen Sprachen, keine Bildanalyse oder visuelle Erkennung."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Speech",
        "textDe": "Azure AI Speech",
        "isCorrect": false,
        "explanation": "Azure AI Speech focuses on speech recognition and speech synthesis. Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
        "explanationDe": "Azure AI Speech ist fur Spracherkennung und Sprachsynthese gedacht. Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen."
      },
      {
        "id": "opt-3",
        "text": "Azure Cosmos DB",
        "textDe": "Azure Cosmos DB",
        "isCorrect": false,
        "explanation": "Azure Cosmos DB is a NoSQL database service, not a computer vision service.",
        "explanationDe": "Azure Cosmos DB ist ein NoSQL-Datenbankdienst, kein Computer-Vision-Dienst."
      }
    ],
    "explanation": "Azure AI Vision (formerly Computer Vision) offers APIs for various image analysis.",
    "explanationDe": "Azure AI Vision (fruher Computer Vision) bietet APIs fur diverse Bildanalysen.",
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
    "type": "single-choice",
    "prompt": "Which task assigns a class to each pixel of an image?",
    "promptDe": "Welche Aufgabe ordnet jedem Pixel eines Bildes eine Klasse zu?",
    "hint": "It's not about the whole image, but about mapping at the pixel level.",
    "hintDe": "Es geht nicht um das ganze Bild, sondern um die Zuordnung auf Pixel-Ebene.",
    "options": [
      {
        "id": "opt-0",
        "text": "Semantic segmentation",
        "textDe": "Semantische Segmentierung",
        "isCorrect": true,
        "explanation": "Semantic segmentation classifies each pixel rather than just the entire image.",
        "explanationDe": "Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild."
      },
      {
        "id": "opt-1",
        "text": "Image classification",
        "textDe": "Bildklassifikation",
        "isCorrect": false,
        "explanation": "Image classification assigns a single class to an entire image — it does not label individual pixels.",
        "explanationDe": "Bildklassifikation weist einem gesamten Bild eine einzelne Klasse zu — sie labelt nicht einzelne Pixel."
      },
      {
        "id": "opt-2",
        "text": "OCR",
        "textDe": "OCR",
        "isCorrect": false,
        "explanation": "OCR is focused on extracting text from images and documents. Semantic segmentation classifies each pixel rather than just the entire image.",
        "explanationDe": "OCR extrahiert Text aus Bildern oder Dokumenten. Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild."
      },
      {
        "id": "opt-3",
        "text": "Face detection",
        "textDe": "Face Detection",
        "isCorrect": false,
        "explanation": "Face detection locates faces in an image with bounding boxes — it does not classify individual pixels.",
        "explanationDe": "Gesichtserkennung lokalisiert Gesichter in einem Bild mit Bounding Boxes — sie klassifiziert nicht einzelne Pixel."
      }
    ],
    "explanation": "Semantic segmentation classifies each pixel rather than just the entire image.",
    "explanationDe": "Semantische Segmentierung klassifiziert jeden Pixel statt nur das Gesamtbild.",
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
    "type": "single-choice",
    "prompt": "Azure AI Face can be used for...",
    "promptDe": "Azure AI Face kann verwendet werden fur ...",
    "hint": "The name “Face” reveals a lot. What can you do with faces in pictures?",
    "hintDe": "Der Name \"Face\" verrat schon viel. Was kann man mit Gesichtern in Bildern alles machen?",
    "options": [
      {
        "id": "opt-0",
        "text": "Facial recognition and verification",
        "textDe": "Gesichtserkennung und Verifizierung",
        "isCorrect": true,
        "explanation": "Azure AI Face recognizes, analyzes and verifies faces in images.",
        "explanationDe": "Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern."
      },
      {
        "id": "opt-1",
        "text": "Speech recognition in audio data",
        "textDe": "Spracherkennung in Audiodaten",
        "isCorrect": false,
        "explanation": "Speech recognition in audio is handled by Azure AI Speech, not Azure AI Face which works with images.",
        "explanationDe": "Spracherkennung in Audio wird von Azure AI Speech behandelt, nicht von Azure AI Face das mit Bildern arbeitet."
      },
      {
        "id": "opt-2",
        "text": "Text translation",
        "textDe": "Textubersetzung",
        "isCorrect": false,
        "explanation": "Text translation is performed by Azure AI Translator, not Azure AI Face which analyzes facial features.",
        "explanationDe": "Textuebersetzung wird von Azure AI Translator durchgefuehrt, nicht von Azure AI Face das Gesichtsmerkmale analysiert."
      },
      {
        "id": "opt-3",
        "text": "Database queries",
        "textDe": "Datenbankabfragen",
        "isCorrect": false,
        "explanation": "Database queries are data operations — Azure AI Face is an image analysis service for faces.",
        "explanationDe": "Datenbankabfragen sind Datenoperationen — Azure AI Face ist ein Bildanalysedienst fuer Gesichter."
      }
    ],
    "explanation": "Azure AI Face recognizes, analyzes and verifies faces in images.",
    "explanationDe": "Azure AI Face erkennt, analysiert und verifiziert Gesichter in Bildern.",
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
    "topic": "Computer Vision",
    "type": "true-false",
    "prompt": "Statement: Azure AI Vision can automatically generate captions.",
    "promptDe": "Aussage: Azure AI Vision kann automatisch Bildunterschriften (Captions) generieren.",
    "hint": "Consider whether modern image analysis services can also describe images, not just classify them.",
    "hintDe": "Uberlege, ob moderne Bildanalyse-Dienste Bilder auch beschreiben konnen, nicht nur klassifizieren.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "The Image Captioning function creates automatic descriptions of image content.",
        "explanationDe": "Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure AI Vision includes an Image Captioning feature that generates natural language descriptions.",
        "explanationDe": "Die Aussage ist korrekt — Azure AI Vision enthaelt eine Image-Captioning-Funktion die natuerlichsprachliche Beschreibungen generiert."
      }
    ],
    "explanation": "The Image Captioning function creates automatic descriptions of image content.",
    "explanationDe": "Die Image Captioning Funktion erstellt automatische Beschreibungen von Bildinhalten.",
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
    "type": "single-choice",
    "prompt": "Which Azure service automatically translates text between languages?",
    "promptDe": "Welcher Azure-Dienst ubersetzt Text automatisch zwischen Sprachen?",
    "hint": "The name of this service accurately describes its function: translation.",
    "hintDe": "Der Name dieses Dienstes beschreibt genau seine Funktion: Ubersetzung.",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Translator",
        "textDe": "Azure AI Translator",
        "isCorrect": true,
        "explanation": "Azure AI Translator offers neural machine translation.",
        "explanationDe": "Azure AI Translator bietet neuronale maschinelle Ubersetzung."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Vision",
        "textDe": "Azure AI Vision",
        "isCorrect": false,
        "explanation": "Azure AI Vision is designed for image and video analysis, not for translating text between languages.",
        "explanationDe": "Azure AI Vision ist fuer Bild- und Videoanalyse konzipiert, nicht fuer Textuebersetzung zwischen Sprachen."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": false,
        "explanation": "Azure AI Search indexes and searches documents — it does not translate text between languages.",
        "explanationDe": "Azure AI Search indexiert und durchsucht Dokumente — es uebersetzt keinen Text zwischen Sprachen."
      },
      {
        "id": "opt-3",
        "text": "Azure Monitor",
        "textDe": "Azure Monitor",
        "isCorrect": false,
        "explanation": "Azure Monitor is an infrastructure monitoring service, not an AI processing service.",
        "explanationDe": "Azure Monitor ist ein Infrastruktur-Ueberwachungsdienst, kein KI-Verarbeitungsdienst."
      }
    ],
    "explanation": "Azure AI Translator offers neural machine translation.",
    "explanationDe": "Azure AI Translator bietet neuronale maschinelle Ubersetzung.",
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
    "type": "single-choice",
    "prompt": "Key Phrase Extraction is used to...",
    "promptDe": "Key Phrase Extraction dient dazu ...",
    "hint": "The name gives it away: Key phrases are extracted from something.",
    "hintDe": "Der Name verrat es: Es werden Schlusselbegriffe (Key Phrases) aus etwas herausgezogen.",
    "options": [
      {
        "id": "opt-0",
        "text": "extract the most important terms from a text",
        "textDe": "die wichtigsten Begriffe aus einem Text herauszuziehen",
        "isCorrect": true,
        "explanation": "Key Phrase Extraction identifies the central themes of a text.",
        "explanationDe": "Key Phrase Extraction identifiziert die zentralen Themen eines Texts."
      },
      {
        "id": "opt-1",
        "text": "Classify images",
        "textDe": "Bilder zu klassifizieren",
        "isCorrect": false,
        "explanation": "Image classification is a computer vision task — Key Phrase Extraction works with text, not images.",
        "explanationDe": "Bildklassifikation ist eine Computer-Vision-Aufgabe — Key Phrase Extraction arbeitet mit Text, nicht mit Bildern."
      },
      {
        "id": "opt-2",
        "text": "Convert audio to text",
        "textDe": "Audio in Text umzuwandeln",
        "isCorrect": false,
        "explanation": "Converting audio to text is speech-to-text transcription — Key Phrase Extraction analyzes existing text content.",
        "explanationDe": "Audio in Text umwandeln ist Speech-to-Text-Transkription — Key Phrase Extraction analysiert bereits vorhandenen Text."
      },
      {
        "id": "opt-3",
        "text": "Index databases",
        "textDe": "Datenbanken zu indexieren",
        "isCorrect": false,
        "explanation": "Indexing databases is a data infrastructure task — Key Phrase Extraction is an NLP function that finds important terms.",
        "explanationDe": "Datenbanken indexieren ist eine Dateninfrastruktur-Aufgabe — Key Phrase Extraction ist eine NLP-Funktion die wichtige Begriffe findet."
      }
    ],
    "explanation": "Key Phrase Extraction identifies the central themes of a text.",
    "explanationDe": "Key Phrase Extraction identifiziert die zentralen Themen eines Texts.",
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
    "type": "single-choice",
    "prompt": "Which service converts spoken language into text?",
    "promptDe": "Welcher Dienst wandelt gesprochene Sprache in Text um?",
    "hint": "Audio in, text out. Which Azure service does exactly this?",
    "hintDe": "Audio rein, Text raus. Welcher Azure-Dienst macht genau das?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Speech (Speech-to-Text)",
        "textDe": "Azure AI Speech (Speech-to-Text)",
        "isCorrect": true,
        "explanation": "Speech-to-Text transcribes audio into written text.",
        "explanationDe": "Speech-to-Text transkribiert Audio in geschriebenen Text."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Vision",
        "textDe": "Azure AI Vision",
        "isCorrect": false,
        "explanation": "Azure AI Vision analyzes images and videos — it does not convert spoken language into text.",
        "explanationDe": "Azure AI Vision analysiert Bilder und Videos — es wandelt keine gesprochene Sprache in Text um."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": false,
        "explanation": "Azure AI Search is an indexing and search service, not a speech-to-text transcription service.",
        "explanationDe": "Azure AI Search ist ein Indexierungs- und Suchdienst, kein Sprache-zu-Text-Dienst."
      },
      {
        "id": "opt-3",
        "text": "Azure AI Face",
        "textDe": "Azure AI Face",
        "isCorrect": false,
        "explanation": "Azure AI Face analyzes facial features in images — it does not process audio or convert speech to text.",
        "explanationDe": "Azure AI Face analysiert Gesichtsmerkmale in Bildern — es verarbeitet kein Audio und wandelt keine Sprache in Text um."
      }
    ],
    "explanation": "Speech-to-Text transcribes audio into written text.",
    "explanationDe": "Speech-to-Text transkribiert Audio in geschriebenen Text.",
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
    "type": "single-choice",
    "prompt": "Which service converts text into spoken speech?",
    "promptDe": "Welcher Dienst wandelt Text in gesprochene Sprache um?",
    "hint": "This time the other way around: text in, language out. Which service synthesizes speech?",
    "hintDe": "Diesmal andersherum: Text rein, Sprache raus. Welcher Dienst synthetisiert Sprache?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Speech (Text-to-Speech)",
        "textDe": "Azure AI Speech (Text-to-Speech)",
        "isCorrect": true,
        "explanation": "Text-to-speech synthesizes natural-sounding speech from text.",
        "explanationDe": "Text-to-Speech synthetisiert naturlich klingende Sprache aus Text."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Translator",
        "textDe": "Azure AI Translator",
        "isCorrect": false,
        "explanation": "Azure AI Translator translates text between languages — it does not synthesize spoken speech from text.",
        "explanationDe": "Azure AI Translator uebersetzt Text zwischen Sprachen — er synthetisiert keine gesprochene Sprache aus Text."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Vision",
        "textDe": "Azure AI Vision",
        "isCorrect": false,
        "explanation": "Azure AI Vision processes images and videos, not text-to-speech synthesis.",
        "explanationDe": "Azure AI Vision verarbeitet Bilder und Videos, keine Text-zu-Sprache-Synthese."
      },
      {
        "id": "opt-3",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": false,
        "explanation": "Azure AI Search is for indexing and searching documents, not for speech synthesis.",
        "explanationDe": "Azure AI Search ist fuer Indexierung und Suche, nicht fuer Sprachsynthese."
      }
    ],
    "explanation": "Text-to-speech synthesizes natural-sounding speech from text.",
    "explanationDe": "Text-to-Speech synthetisiert naturlich klingende Sprache aus Text.",
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
    "topic": "NLP",
    "type": "true-false",
    "prompt": "Statement: Azure AI Language can create question-answer pairs from documents (Question Answering).",
    "promptDe": "Aussage: Azure AI Language kann Frage-Antwort-Paare aus Dokumenten erstellen (Question Answering).",
    "hint": "Can a language service prepare knowledge from documents in such a way that questions can be answered?",
    "hintDe": "Kann ein Sprachdienst Wissen aus Dokumenten so aufbereiten, dass Fragen darauf beantwortet werden?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Custom Question Answering makes it possible to create knowledge bases from documents.",
        "explanationDe": "Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Custom Question Answering in Azure AI Language can create knowledge bases from documents.",
        "explanationDe": "Die Aussage ist korrekt — Custom Question Answering in Azure AI Language kann Wissensdatenbanken aus Dokumenten erstellen."
      }
    ],
    "explanation": "Custom Question Answering makes it possible to create knowledge bases from documents.",
    "explanationDe": "Custom Question Answering ermoglicht es, Wissensdatenbanken aus Dokumenten zu erstellen.",
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
    "type": "single-choice",
    "prompt": "A chatbot is intended to answer common customer queries automatically. Which Azure combination is suitable?",
    "promptDe": "Ein Chatbot soll haufige Kundenanfragen automatisiert beantworten. Welche Azure-Kombination passt?",
    "hint": "A chatbot needs two things: a source of knowledge for answers and a channel for communication.",
    "hintDe": "Ein Chatbot braucht zwei Dinge: eine Wissensquelle fur Antworten und einen Kanal fur die Kommunikation.",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Language (Question Answering) + Azure Bot Service",
        "textDe": "Azure AI Language (Question Answering) + Azure Bot Service",
        "isCorrect": true,
        "explanation": "Question Answering provides the answers, Bot Service provides the chatbot channel.",
        "explanationDe": "Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit."
      },
      {
        "id": "opt-1",
        "text": "Azure AI Vision + Azure Batch",
        "textDe": "Azure AI Vision + Azure Batch",
        "isCorrect": false,
        "explanation": "Azure AI Vision handles images and Azure Batch runs computing jobs — neither provides chatbot answers or channels.",
        "explanationDe": "Azure AI Vision verarbeitet Bilder und Azure Batch fuehrt Rechenaufgaben aus — keines bietet Chatbot-Antworten oder -Kanaele."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Search + Azure DNS",
        "textDe": "Azure AI Search + Azure DNS",
        "isCorrect": false,
        "explanation": "Azure AI Search indexes documents and Azure DNS resolves domain names — neither creates a chatbot experience.",
        "explanationDe": "Azure AI Search indexiert Dokumente und Azure DNS loest Domainnamen auf — keines erstellt ein Chatbot-Erlebnis."
      },
      {
        "id": "opt-3",
        "text": "Azure AI Face + Azure Monitor",
        "textDe": "Azure AI Face + Azure Monitor",
        "isCorrect": false,
        "explanation": "Azure AI Face recognizes faces and Azure Monitor tracks metrics — neither provides Q&A or bot channel functionality.",
        "explanationDe": "Azure AI Face erkennt Gesichter und Azure Monitor verfolgt Metriken — keines bietet Frage-Antwort- oder Bot-Kanal-Funktionalitaet."
      }
    ],
    "explanation": "Question Answering provides the answers, Bot Service provides the chatbot channel.",
    "explanationDe": "Question Answering liefert die Antworten, Bot Service stellt den Chatbot-Kanal bereit.",
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
    "type": "single-choice",
    "prompt": "Which model in Azure OpenAI can generate images?",
    "promptDe": "Welches Modell in Azure OpenAI kann Bilder generieren?",
    "hint": "Which well-known model of OpenAI creates images from text descriptions?",
    "hintDe": "Welches bekannte Modell von OpenAI erstellt Bilder aus Textbeschreibungen?",
    "options": [
      {
        "id": "opt-0",
        "text": "DALL E",
        "textDe": "DALL-E",
        "isCorrect": true,
        "explanation": "DALL-E generates images based on text descriptions.",
        "explanationDe": "DALL-E generiert Bilder basierend auf Textbeschreibungen."
      },
      {
        "id": "opt-1",
        "text": "Whispers",
        "textDe": "Whisper",
        "isCorrect": false,
        "explanation": "Whisper is an audio transcription model (speech-to-text), not an image generation model.",
        "explanationDe": "Whisper ist ein Audio-Transkriptionsmodell (Speech-to-Text), kein Bildgenerierungsmodell."
      },
      {
        "id": "opt-2",
        "text": "GPT-4",
        "textDe": "GPT-4",
        "isCorrect": false,
        "explanation": "GPT-4 is a text generation model — while it can understand images, it does not generate them.",
        "explanationDe": "GPT-4 ist ein Textgenerierungsmodell — es kann Bilder verstehen, generiert sie aber nicht."
      },
      {
        "id": "opt-3",
        "text": "Ada",
        "textDe": "Ada",
        "isCorrect": false,
        "explanation": "Ada is an embedding model used for text similarity and search, not for image generation.",
        "explanationDe": "Ada ist ein Embedding-Modell fuer Textaehnlichkeit und Suche, nicht fuer Bildgenerierung."
      }
    ],
    "explanation": "DALL-E generates images based on text descriptions.",
    "explanationDe": "DALL-E generiert Bilder basierend auf Textbeschreibungen.",
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
    "type": "single-choice",
    "prompt": "What is meant by the “Temperature” parameter in GPT models?",
    "promptDe": "Was versteht man unter dem \"Temperature\"-Parameter bei GPT-Modellen?",
    "hint": "Temperature affects how predictable or surprising the answers are.",
    "hintDe": "Temperature beeinflusst, wie vorhersehbar oder uberraschend die Antworten ausfallen.",
    "options": [
      {
        "id": "opt-0",
        "text": "He controls the creativity or randomness of the expenditure",
        "textDe": "Er steuert die Kreativitat bzw. Zufalligkeit der Ausgaben",
        "isCorrect": true,
        "explanation": "Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
        "explanationDe": "Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten."
      },
      {
        "id": "opt-1",
        "text": "It determines the GPU temperature",
        "textDe": "Er bestimmt die GPU-Temperatur",
        "isCorrect": false,
        "explanation": "The Temperature parameter has nothing to do with physical hardware — it controls the randomness of the model's token selection.",
        "explanationDe": "Der Temperature-Parameter hat nichts mit physischer Hardware zu tun — er steuert die Zufaelligkeit der Token-Auswahl des Modells."
      },
      {
        "id": "opt-2",
        "text": "He sets the response time",
        "textDe": "Er legt die Antwortzeit fest",
        "isCorrect": false,
        "explanation": "Response time is determined by infrastructure and model size, not by the Temperature parameter.",
        "explanationDe": "Antwortzeit wird durch Infrastruktur und Modellgroesse bestimmt, nicht durch den Temperature-Parameter."
      },
      {
        "id": "opt-3",
        "text": "It sets the maximum token length",
        "textDe": "Er setzt die maximale Tokenlange",
        "isCorrect": false,
        "explanation": "Maximum token length is controlled by the max_tokens parameter, not by Temperature.",
        "explanationDe": "Maximale Tokenlaenge wird durch den max_tokens-Parameter gesteuert, nicht durch Temperature."
      }
    ],
    "explanation": "Higher temperature results in more creative answers, lower temperature results in more deterministic answers.",
    "explanationDe": "Hohere Temperature ergibt kreativere, niedrigere ergibt deterministischere Antworten.",
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
    "type": "single-choice",
    "prompt": "What is the “Context Window” of an LLM?",
    "promptDe": "Was ist das \"Context Window\" eines LLM?",
    "hint": "Each model has a cap on the amount of text it can see at once.",
    "hintDe": "Jedes Modell hat eine Obergrenze fur die Menge an Text, die es auf einmal sehen kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "The maximum amount of text (tokens) the model can process at one time",
        "textDe": "Die maximale Menge an Text (Tokens), die das Modell gleichzeitig verarbeiten kann",
        "isCorrect": true,
        "explanation": "The context window limits input + output tokens per request.",
        "explanationDe": "Das Context Window begrenzt Input + Output Tokens pro Anfrage."
      },
      {
        "id": "opt-1",
        "text": "The window in the Azure UI",
        "textDe": "Das Fenster in der Azure-UI",
        "isCorrect": false,
        "explanation": "The context window is a model architecture concept, not a UI element in the Azure portal.",
        "explanationDe": "Das Context Window ist ein Modellarchitektur-Konzept, kein UI-Element im Azure-Portal."
      },
      {
        "id": "opt-2",
        "text": "The number of GPU cores",
        "textDe": "Die Anzahl der GPU-Kerne",
        "isCorrect": false,
        "explanation": "GPU cores affect computing speed — the context window refers to the token limit the model can process per request.",
        "explanationDe": "GPU-Kerne beeinflussen die Rechengeschwindigkeit — das Context Window bezeichnet das Token-Limit pro Anfrage."
      },
      {
        "id": "opt-3",
        "text": "The training duration in hours",
        "textDe": "Die Trainingsdauer in Stunden",
        "isCorrect": false,
        "explanation": "Training duration is a one-time cost — the context window is an operational limit on input/output size per request.",
        "explanationDe": "Trainingsdauer ist ein einmaliger Aufwand — das Context Window ist ein operatives Limit fuer Input/Output-Groesse pro Anfrage."
      }
    ],
    "explanation": "The context window limits input + output tokens per request.",
    "explanationDe": "Das Context Window begrenzt Input + Output Tokens pro Anfrage.",
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
    "type": "single-choice",
    "prompt": "What is a \"System Message\" in Azure OpenAI?",
    "promptDe": "Was ist ein \"System Message\" bei Azure OpenAI?",
    "hint": "The system message is placed before the actual user question. What could she give the model?",
    "hintDe": "Die System Message wird vor der eigentlichen Nutzerfrage gesetzt. Was konnte sie dem Modell mitgeben?",
    "options": [
      {
        "id": "opt-0",
        "text": "A statement that specifies the behavior and role of the model",
        "textDe": "Eine Anweisung, die das Verhalten und die Rolle des Modells festlegt",
        "isCorrect": true,
        "explanation": "The system message defines persona, rules and context for the model.",
        "explanationDe": "Die System Message definiert Persona, Regeln und Kontext fur das Modell."
      },
      {
        "id": "opt-1",
        "text": "An error message from the server",
        "textDe": "Eine Fehlermeldung vom Server",
        "isCorrect": false,
        "explanation": "An error message indicates a problem — a system message proactively sets the model's behavior and persona.",
        "explanationDe": "Eine Fehlermeldung zeigt ein Problem an — eine System Message legt proaktiv Verhalten und Persona des Modells fest."
      },
      {
        "id": "opt-2",
        "text": "A log entry in Azure Monitor",
        "textDe": "Ein Log-Eintrag in Azure Monitor",
        "isCorrect": false,
        "explanation": "A log entry in Azure Monitor records telemetry — a system message is an instruction for the AI model's behavior.",
        "explanationDe": "Ein Log-Eintrag in Azure Monitor zeichnet Telemetrie auf — eine System Message ist eine Anweisung fuer das Modellverhalten."
      },
      {
        "id": "opt-3",
        "text": "An automatically generated report",
        "textDe": "Ein automatisch generierter Report",
        "isCorrect": false,
        "explanation": "An automatically generated report is an output — a system message is an input that shapes how the model behaves.",
        "explanationDe": "Ein automatisch generierter Report ist eine Ausgabe — eine System Message ist eine Eingabe die das Modellverhalten formt."
      }
    ],
    "explanation": "The system message defines persona, rules and context for the model.",
    "explanationDe": "Die System Message definiert Persona, Regeln und Kontext fur das Modell.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: Azure OpenAI Service offers the same models as OpenAI, but with Azure security features.",
    "promptDe": "Aussage: Azure OpenAI Service bietet dieselben Modelle wie OpenAI, aber mit Azure-Sicherheitsfeatures.",
    "hint": "Consider why Microsoft offers the same models again in Azure. What added value does this bring?",
    "hintDe": "Uberlege, warum Microsoft die gleichen Modelle nochmals in Azure anbietet. Welchen Mehrwert bringt das?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Azure OpenAI combines OpenAI models with Azure network security, RBAC, and compliance.",
        "explanationDe": "Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure OpenAI provides the same OpenAI models with additional Azure enterprise features like RBAC, networking, and compliance.",
        "explanationDe": "Die Aussage ist korrekt — Azure OpenAI bietet dieselben OpenAI-Modelle mit zusaetzlichen Azure-Unternehmensfeatures wie RBAC, Netzwerk und Compliance."
      }
    ],
    "explanation": "Azure OpenAI combines OpenAI models with Azure network security, RBAC, and compliance.",
    "explanationDe": "Azure OpenAI kombiniert OpenAI-Modelle mit Azure-Netzwerksicherheit, RBAC und Compliance.",
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
    "type": "single-choice",
    "prompt": "What does “grounding” mean in the context of generative AI?",
    "promptDe": "Was bedeutet \"Grounding\" im Kontext generativer KI?",
    "hint": "Grounding literally means “anchoring”. What are the answers anchored in?",
    "hintDe": "Grounding bedeutet woertlich \"Verankerung\". Worin werden die Antworten verankert?",
    "options": [
      {
        "id": "opt-0",
        "text": "Base answers on factual, verifiable information",
        "textDe": "Antworten auf faktische, verifizierbare Informationen stutzen",
        "isCorrect": true,
        "explanation": "Grounding connects model answers with real, current data sources.",
        "explanationDe": "Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen."
      },
      {
        "id": "opt-1",
        "text": "Physically ground the model",
        "textDe": "Das Modell physisch erden",
        "isCorrect": false,
        "explanation": "Physical grounding is an electrical concept — in AI, grounding means anchoring model responses in factual data.",
        "explanationDe": "Physische Erdung ist ein elektrisches Konzept — in KI bedeutet Grounding die Verankerung von Modellantworten in faktischen Daten."
      },
      {
        "id": "opt-2",
        "text": "Regulate GPU voltage",
        "textDe": "GPU-Spannung regulieren",
        "isCorrect": false,
        "explanation": "GPU voltage is a hardware parameter — grounding in AI refers to connecting answers with verifiable source data.",
        "explanationDe": "GPU-Spannung ist ein Hardware-Parameter — Grounding in KI bezieht sich auf die Verbindung von Antworten mit verifizierbaren Quelldaten."
      },
      {
        "id": "opt-3",
        "text": "Minimize network latency",
        "textDe": "Netzwerklatenz minimieren",
        "isCorrect": false,
        "explanation": "Network latency is an infrastructure concern — grounding means basing AI answers on real, factual information.",
        "explanationDe": "Netzwerklatenz ist ein Infrastrukturthema — Grounding bedeutet, KI-Antworten auf reale, faktische Informationen zu stuetzen."
      }
    ],
    "explanation": "Grounding connects model answers with real, current data sources.",
    "explanationDe": "Grounding verbindet Modellantworten mit realen, aktuellen Datenquellen.",
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
    "type": "single-choice",
    "prompt": "Microsoft Copilot is primarily based on...",
    "promptDe": "Microsoft Copilot basiert primaer auf ...",
    "hint": "Copilot is an AI assistant in Microsoft products. What technology is behind it?",
    "hintDe": "Copilot ist ein KI-Assistent in Microsoft-Produkten. Welche Technologie steckt dahinter?",
    "options": [
      {
        "id": "opt-0",
        "text": "Large language models (LLMs) with access to user data and context",
        "textDe": "Grossen Sprachmodellen (LLMs) mit Zugriff auf Nutzerdaten und Kontext",
        "isCorrect": true,
        "explanation": "Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
        "explanationDe": "Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.)."
      },
      {
        "id": "opt-1",
        "text": "Rule-based if-then decisions",
        "textDe": "Regelbasierten If-Then-Entscheidungen",
        "isCorrect": false,
        "explanation": "Rule-based if-then decisions are a traditional programming approach — Copilot uses LLMs for flexible, context-aware responses.",
        "explanationDe": "Regelbasierte If-Then-Entscheidungen sind ein traditioneller Programmieransatz — Copilot nutzt LLMs fuer flexible, kontextbewusste Antworten."
      },
      {
        "id": "opt-2",
        "text": "Keyword search only",
        "textDe": "Nur Keyword-Suche",
        "isCorrect": false,
        "explanation": "Keyword search returns exact text matches — Copilot understands context and generates natural language responses.",
        "explanationDe": "Keyword-Suche liefert exakte Texttreffer — Copilot versteht Kontext und generiert natuerlichsprachliche Antworten."
      },
      {
        "id": "opt-3",
        "text": "Only locally trained models",
        "textDe": "Ausschliesslich lokal trainierten Modellen",
        "isCorrect": false,
        "explanation": "Copilot uses cloud-based LLMs connected to Microsoft services, not exclusively local models.",
        "explanationDe": "Copilot nutzt cloudbasierte LLMs verbunden mit Microsoft-Diensten, nicht ausschliesslich lokale Modelle."
      }
    ],
    "explanation": "Copilot uses LLMs and connects them to the user's context (documents, emails, etc.).",
    "explanationDe": "Copilot nutzt LLMs und verbindet sie mit dem Kontext des Nutzers (Dokumente, E-Mails etc.).",
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
    "type": "single-choice",
    "prompt": "What role do “skill sets” play in Azure AI Search?",
    "promptDe": "Welche Rolle spielen \"Skillsets\" in Azure AI Search?",
    "hint": "Skillsets add AI skills during a specific step. Which step is this?",
    "hintDe": "Skillsets fugen wahrend eines bestimmten Schritts KI-Fahigkeiten hinzu. Welcher Schritt ist das?",
    "options": [
      {
        "id": "opt-0",
        "text": "They enrich documents with AI capabilities during indexing",
        "textDe": "Sie reichern Dokumente wahrend der Indexierung mit KI-Fahigkeiten an",
        "isCorrect": true,
        "explanation": "Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
        "explanationDe": "Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus."
      },
      {
        "id": "opt-1",
        "text": "You define user permissions",
        "textDe": "Sie definieren Benutzerberechtigungen",
        "isCorrect": false,
        "explanation": "User permissions are managed by RBAC and Azure AD, not by skillsets which perform AI enrichment during indexing.",
        "explanationDe": "Benutzerberechtigungen werden durch RBAC und Azure AD verwaltet, nicht durch Skillsets die KI-Anreicherung beim Indexieren durchfuehren."
      },
      {
        "id": "opt-2",
        "text": "You control the network configuration",
        "textDe": "Sie steuern die Netzwerkkonfiguration",
        "isCorrect": false,
        "explanation": "Network configuration is handled by Azure networking services, not by search skillsets.",
        "explanationDe": "Netzwerkkonfiguration wird durch Azure-Netzwerkdienste verwaltet, nicht durch Such-Skillsets."
      },
      {
        "id": "opt-3",
        "text": "You define backup strategies",
        "textDe": "Sie legen Backup-Strategien fest",
        "isCorrect": false,
        "explanation": "Backup strategies are an operations concern — skillsets add AI capabilities like OCR and NER during document indexing.",
        "explanationDe": "Backup-Strategien sind ein Betriebsthema — Skillsets fuegen KI-Faehigkeiten wie OCR und NER beim Dokumentindexieren hinzu."
      }
    ],
    "explanation": "Skillsets carry out AI enrichments such as OCR, NER or sentiment when indexing.",
    "explanationDe": "Skillsets fuhren KI-Anreicherungen wie OCR, NER oder Sentiment beim Indexieren aus.",
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
    "type": "single-choice",
    "prompt": "What is a knowledge store in Azure AI Search?",
    "promptDe": "Was ist ein \"Knowledge Store\" in Azure AI Search?",
    "hint": "Where does the enriched data go if you need it not only for search but also for other purposes?",
    "hintDe": "Wohin gehen die angereicherten Daten, wenn man sie nicht nur fur die Suche, sondern auch fur andere Zwecke braucht?",
    "options": [
      {
        "id": "opt-0",
        "text": "A secondary storage for enriched content for further processing",
        "textDe": "Ein sekundarer Speicher fur angereicherte Inhalte zur Weiterverarbeitung",
        "isCorrect": true,
        "explanation": "The Knowledge Store stores extracted and enriched data for analysis outside of search.",
        "explanationDe": "Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche."
      },
      {
        "id": "opt-1",
        "text": "A Git repository for code",
        "textDe": "Ein Git-Repository fur Code",
        "isCorrect": false,
        "explanation": "A Git repository stores code — a Knowledge Store persists enriched content for analytics outside of search.",
        "explanationDe": "Ein Git-Repository speichert Code — ein Knowledge Store speichert angereicherte Inhalte fuer Analysen ausserhalb der Suche."
      },
      {
        "id": "opt-2",
        "text": "A DNS record",
        "textDe": "Ein DNS-Eintrag",
        "isCorrect": false,
        "explanation": "A DNS record maps domain names to IP addresses — it has nothing to do with storing enriched AI content.",
        "explanationDe": "Ein DNS-Eintrag ordnet Domainnamen IP-Adressen zu — er hat nichts mit der Speicherung angereicherter KI-Inhalte zu tun."
      },
      {
        "id": "opt-3",
        "text": "A backup database",
        "textDe": "Eine Backup-Datenbank",
        "isCorrect": false,
        "explanation": "A backup database stores copies of data for recovery — a Knowledge Store specifically holds AI-enriched content for further processing.",
        "explanationDe": "Eine Backup-Datenbank speichert Datenkopien zur Wiederherstellung — ein Knowledge Store haelt speziell KI-angereicherte Inhalte zur Weiterverarbeitung."
      }
    ],
    "explanation": "The Knowledge Store stores extracted and enriched data for analysis outside of search.",
    "explanationDe": "Der Knowledge Store speichert extrahierte und angereicherte Daten fur Analysen ausserhalb der Suche.",
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
    "topic": "Knowledge Mining",
    "type": "true-false",
    "prompt": "Statement: Azure AI Search can index data from Blob Storage, SQL and Cosmos DB.",
    "promptDe": "Aussage: Azure AI Search kann Daten aus Blob Storage, SQL und Cosmos DB indexieren.",
    "hint": "Consider whether Azure AI Search only supports a single data source or is more flexible.",
    "hintDe": "Uberlege, ob Azure AI Search nur eine einzige Datenquelle unterstutzt oder flexibler ist.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Azure AI Search supports multiple data sources via built-in indexers.",
        "explanationDe": "Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure AI Search supports Blob Storage, SQL, Cosmos DB and other data sources via built-in indexers.",
        "explanationDe": "Die Aussage ist korrekt — Azure AI Search unterstuetzt Blob Storage, SQL, Cosmos DB und weitere Datenquellen ueber integrierte Indexer."
      }
    ],
    "explanation": "Azure AI Search supports multiple data sources via built-in indexers.",
    "explanationDe": "Azure AI Search unterstutzt mehrere Datenquellen uber integrierte Indexer.",
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
    "type": "single-choice",
    "prompt": "Which Responsible AI principle requires that AI systems be usable for as many people as possible?",
    "promptDe": "Welches Responsible-AI-Prinzip fordert, dass KI-Systeme fur moglichst viele Menschen nutzbar sind?",
    "hint": "Which principle ensures that no one is excluded from use?",
    "hintDe": "Welches Prinzip stellt sicher, dass niemand von der Nutzung ausgeschlossen wird?",
    "options": [
      {
        "id": "opt-0",
        "text": "Inclusivity",
        "textDe": "Inklusivitat",
        "isCorrect": true,
        "explanation": "Inclusivity ensures that AI solutions do not exclude anyone.",
        "explanationDe": "Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen."
      },
      {
        "id": "opt-1",
        "text": "fairness",
        "textDe": "Fairness",
        "isCorrect": false,
        "explanation": "Fairness ensures equal treatment across groups, but inclusivity specifically addresses making AI accessible to as many people as possible.",
        "explanationDe": "Fairness sorgt fuer Gleichbehandlung zwischen Gruppen, aber Inklusivitaet adressiert speziell die Zugaenglichkeit fuer moeglichst viele Menschen."
      },
      {
        "id": "opt-2",
        "text": "transparency",
        "textDe": "Transparenz",
        "isCorrect": false,
        "explanation": "Transparency makes AI decisions understandable — inclusivity specifically ensures broad accessibility for all people.",
        "explanationDe": "Transparenz macht KI-Entscheidungen verstaendlich — Inklusivitaet sorgt speziell fuer breite Zugaenglichkeit fuer alle Menschen."
      },
      {
        "id": "opt-3",
        "text": "Data protection",
        "textDe": "Datenschutz",
        "isCorrect": false,
        "explanation": "Data protection safeguards personal information — inclusivity addresses making AI usable for the widest possible audience.",
        "explanationDe": "Datenschutz schuetzt persoenliche Informationen — Inklusivitaet adressiert die Nutzbarkeit von KI fuer ein moeglichst breites Publikum."
      }
    ],
    "explanation": "Inclusivity ensures that AI solutions do not exclude anyone.",
    "explanationDe": "Inklusivitat stellt sicher, dass KI-Losungen niemanden ausschliessen.",
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
    "type": "single-choice",
    "prompt": "What principle requires that humans be able to review and correct AI decisions?",
    "promptDe": "Welches Prinzip fordert, dass Menschen KI-Entscheidungen uberprufen und korrigieren konnen?",
    "hint": "Who is ultimately responsible for AI decisions? It's not the machines.",
    "hintDe": "Wer tragt am Ende die Verantwortung fur KI-Entscheidungen? Es sind nicht die Maschinen.",
    "options": [
      {
        "id": "opt-0",
        "text": "Accountability",
        "textDe": "Verantwortlichkeit (Accountability)",
        "isCorrect": true,
        "explanation": "Accountability means that people remain in control and bear responsibility.",
        "explanationDe": "Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen."
      },
      {
        "id": "opt-1",
        "text": "Data protection",
        "textDe": "Datenschutz",
        "isCorrect": false,
        "explanation": "Data protection governs how personal data is handled — accountability ensures humans can review and correct AI decisions.",
        "explanationDe": "Datenschutz regelt den Umgang mit persoenlichen Daten — Accountability stellt sicher, dass Menschen KI-Entscheidungen pruefen und korrigieren koennen."
      },
      {
        "id": "opt-2",
        "text": "Creativity",
        "textDe": "Kreativitat",
        "isCorrect": false,
        "explanation": "Creativity is not a Responsible AI principle — accountability specifically requires human oversight and control.",
        "explanationDe": "Kreativitaet ist kein Responsible-AI-Prinzip — Accountability fordert speziell menschliche Aufsicht und Kontrolle."
      },
      {
        "id": "opt-3",
        "text": "performance",
        "textDe": "Performance",
        "isCorrect": false,
        "explanation": "Performance measures system efficiency — accountability is the principle that humans remain responsible for AI outcomes.",
        "explanationDe": "Performance misst Systemeffizienz — Accountability ist das Prinzip, dass Menschen fuer KI-Ergebnisse verantwortlich bleiben."
      }
    ],
    "explanation": "Accountability means that people remain in control and bear responsibility.",
    "explanationDe": "Accountability bedeutet, dass Menschen die Kontrolle behalten und Verantwortung tragen.",
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
    "type": "single-choice",
    "prompt": "Azure AI Content Safety is primarily used to...",
    "promptDe": "Azure AI Content Safety dient primaer dazu ...",
    "hint": "The name “Content Safety” suggests protection against certain types of content.",
    "hintDe": "Der Name \"Content Safety\" deutet auf den Schutz vor bestimmten Arten von Inhalten hin.",
    "options": [
      {
        "id": "opt-0",
        "text": "Detect harmful or inappropriate content in text and images",
        "textDe": "schadliche oder unangemessene Inhalte in Text und Bildern zu erkennen",
        "isCorrect": true,
        "explanation": "Content Safety detects violence, hate, self-harm and sexual content.",
        "explanationDe": "Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte."
      },
      {
        "id": "opt-1",
        "text": "Optimize GPU performance",
        "textDe": "GPU-Leistung zu optimieren",
        "isCorrect": false,
        "explanation": "GPU performance optimization is an infrastructure task — Content Safety is for detecting harmful content in AI inputs and outputs.",
        "explanationDe": "GPU-Leistungsoptimierung ist eine Infrastrukturaufgabe — Content Safety dient der Erkennung schaedlicher Inhalte in KI-Ein- und Ausgaben."
      },
      {
        "id": "opt-2",
        "text": "Encrypt network traffic",
        "textDe": "Netzwerktraffic zu verschlusseln",
        "isCorrect": false,
        "explanation": "Network encryption is a security infrastructure measure — Content Safety specifically monitors for harmful AI-generated content.",
        "explanationDe": "Netzwerkverschluesselung ist eine Sicherheits-Infrastrukturmassnahme — Content Safety ueberwacht speziell schaedliche KI-generierte Inhalte."
      },
      {
        "id": "opt-3",
        "text": "Compress databases",
        "textDe": "Datenbanken zu komprimieren",
        "isCorrect": false,
        "explanation": "Database compression optimizes storage — Content Safety analyzes text and images for violence, hate, and other harmful material.",
        "explanationDe": "Datenbankkompression optimiert Speicher — Content Safety analysiert Text und Bilder auf Gewalt, Hass und andere schaedliche Inhalte."
      }
    ],
    "explanation": "Content Safety detects violence, hate, self-harm and sexual content.",
    "explanationDe": "Content Safety erkennt Gewalt, Hass, Selbstverletzung und sexuelle Inhalte.",
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
    "topic": "Responsible AI",
    "type": "true-false",
    "prompt": "Statement: Microsoft's Responsible AI principles include fairness, reliability, privacy, inclusiveness, transparency and accountability.",
    "promptDe": "Aussage: Microsofts Responsible AI Prinzipien umfassen Fairness, Zuverlassigkeit, Datenschutz, Inklusivitat, Transparenz und Verantwortlichkeit.",
    "hint": "Pay attention to the principles mentioned. Are these actually the six official Microsoft principles?",
    "hintDe": "Zahle die genannten Prinzipien durch. Sind das tatsachlich die sechs offiziellen Microsoft-Prinzipien?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "These are Microsoft’s six core Responsible AI principles.",
        "explanationDe": "Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — these are indeed the six official Microsoft Responsible AI principles.",
        "explanationDe": "Die Aussage ist korrekt — das sind tatsaechlich die sechs offiziellen Microsoft Responsible AI Prinzipien."
      }
    ],
    "explanation": "These are Microsoft’s six core Responsible AI principles.",
    "explanationDe": "Das sind die sechs zentralen Responsible AI Prinzipien von Microsoft.",
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
    "type": "single-choice",
    "prompt": "Which prebuilt model in Document Intelligence is specifically optimized for invoices?",
    "promptDe": "Welches vorgefertigte Modell in Document Intelligence ist speziell fur Rechnungen optimiert?",
    "hint": "There are ready-made models for common document types. Which model is named after the document type \"Invoice\"?",
    "hintDe": "Fur gaengige Dokumenttypen gibt es fertige Modelle. Welches Modell ist nach dem Dokumenttyp \"Rechnung\" benannt?",
    "options": [
      {
        "id": "opt-0",
        "text": "Prebuilt Invoice Model",
        "textDe": "Prebuilt Invoice Model",
        "isCorrect": true,
        "explanation": "The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
        "explanationDe": "Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant."
      },
      {
        "id": "opt-1",
        "text": "Prebuilt Receipt Model",
        "textDe": "Prebuilt Receipt Model",
        "isCorrect": false,
        "explanation": "The Receipt Model extracts data from purchase receipts (shorter documents) — invoices have a different structure requiring the Invoice Model.",
        "explanationDe": "Das Receipt Model extrahiert Daten aus Kassenbons (kuerzere Dokumente) — Rechnungen haben eine andere Struktur und brauchen das Invoice Model."
      },
      {
        "id": "opt-2",
        "text": "Custom Neural Model",
        "textDe": "Custom Neural Model",
        "isCorrect": false,
        "explanation": "Custom Neural Models are for unique document types — for standard invoices, the prebuilt Invoice Model is the optimized choice.",
        "explanationDe": "Custom Neural Models sind fuer einzigartige Dokumenttypen — fuer Standardrechnungen ist das vorgefertigte Invoice Model die optimierte Wahl."
      },
      {
        "id": "opt-3",
        "text": "Layout model",
        "textDe": "Layout Model",
        "isCorrect": false,
        "explanation": "The Layout Model extracts general structure (text, tables, checkboxes) but does not understand invoice-specific fields like amount or supplier.",
        "explanationDe": "Das Layout Model extrahiert allgemeine Struktur (Text, Tabellen, Checkboxen), versteht aber keine rechnungsspezifischen Felder wie Betrag oder Lieferant."
      }
    ],
    "explanation": "The Invoice Model extracts typical invoice fields such as amount, date, supplier.",
    "explanationDe": "Das Invoice Model extrahiert typische Rechnungsfelder wie Betrag, Datum, Lieferant.",
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
    "type": "single-choice",
    "prompt": "What does the Document Intelligence layout model provide?",
    "promptDe": "Was liefert das Layout-Modell von Document Intelligence?",
    "hint": "The layout model analyzes the visual structure. What goes into the structure of a document?",
    "hintDe": "Das Layout-Modell analysiert die visuelle Struktur. Was gehoert alles zur Struktur eines Dokuments?",
    "options": [
      {
        "id": "opt-0",
        "text": "Text lines, tables, selection marks and document structure",
        "textDe": "Textzeilen, Tabellen, Auswahlmarkierungen und Dokumentstruktur",
        "isCorrect": true,
        "explanation": "The layout model recognizes the visual structure including tables and checkboxes.",
        "explanationDe": "Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen."
      },
      {
        "id": "opt-1",
        "text": "Just plain text without position data",
        "textDe": "Nur den reinen Text ohne Positionsdaten",
        "isCorrect": false,
        "explanation": "Plain text without position data would lose the spatial structure — the Layout Model preserves layout information including coordinates.",
        "explanationDe": "Reiner Text ohne Positionsdaten wuerde die raeumliche Struktur verlieren — das Layout-Modell bewahrt Layoutinformationen einschliesslich Koordinaten."
      },
      {
        "id": "opt-2",
        "text": "Only images from the document",
        "textDe": "Nur Bilder aus dem Dokument",
        "isCorrect": false,
        "explanation": "Extracting only images misses text, tables, and checkboxes — the Layout Model captures the full visual document structure.",
        "explanationDe": "Nur Bilder zu extrahieren wuerde Text, Tabellen und Checkboxen uebersehen — das Layout-Modell erfasst die gesamte visuelle Dokumentstruktur."
      },
      {
        "id": "opt-3",
        "text": "Just the page number",
        "textDe": "Nur die Seitenzahl",
        "isCorrect": false,
        "explanation": "Just page numbers provide minimal information — the Layout Model extracts rich structural data like text lines, tables, and selection marks.",
        "explanationDe": "Nur Seitenzahlen liefern minimale Information — das Layout-Modell extrahiert reichhaltige Strukturdaten wie Textzeilen, Tabellen und Auswahlmarkierungen."
      }
    ],
    "explanation": "The layout model recognizes the visual structure including tables and checkboxes.",
    "explanationDe": "Das Layout-Modell erkennt die visuelle Struktur inkl. Tabellen und Checkboxen.",
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
    "topic": "Document AI",
    "type": "true-false",
    "prompt": "Statement: Document Intelligence can use both pre-built and custom models.",
    "promptDe": "Aussage: Document Intelligence kann sowohl vorgefertigte als auch benutzerdefinierte Modelle nutzen.",
    "hint": "Consider whether the service can only process standard documents or can also be adapted to your own formats.",
    "hintDe": "Uberlege, ob der Dienst nur Standarddokumente verarbeiten kann oder auch an eigene Formate angepasst werden kann.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "There are prebuilt models for common documents and custom models for specific layouts.",
        "explanationDe": "Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Document Intelligence supports both prebuilt models for common documents and custom models for specific layouts.",
        "explanationDe": "Die Aussage ist korrekt — Document Intelligence unterstuetzt sowohl vorgefertigte Modelle fuer gaengige Dokumente als auch Custom Models fuer spezifische Layouts."
      }
    ],
    "explanation": "There are prebuilt models for common documents and custom models for specific layouts.",
    "explanationDe": "Es gibt Prebuilt Models fur gaengige Dokumente und Custom Models fur spezifische Layouts.",
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
    "type": "single-choice",
    "prompt": "What distinguishes deep learning from classic machine learning?",
    "promptDe": "Was unterscheidet Deep Learning von klassischem Machine Learning?",
    "hint": "Think about the number of layers in neural networks and what that means for feature extraction.",
    "hintDe": "Denk an die Anzahl der Schichten in neuronalen Netzen und was das fur die Merkmalsextraktion bedeutet.",
    "options": [
      {
        "id": "opt-0",
        "text": "Deep learning uses neural networks with many layers for automatic feature extraction",
        "textDe": "Deep Learning nutzt neuronale Netze mit vielen Schichten zur automatischen Merkmalsextraktion",
        "isCorrect": true,
        "explanation": "Deep neural networks automatically learn hierarchical features from large amounts of data.",
        "explanationDe": "Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen."
      },
      {
        "id": "opt-1",
        "text": "Deep learning requires less data than classic ML",
        "textDe": "Deep Learning braucht weniger Daten als klassisches ML",
        "isCorrect": false,
        "explanation": "Deep learning typically requires more data than classic ML — it compensates with automatic feature extraction from large datasets.",
        "explanationDe": "Deep Learning braucht typischerweise mehr Daten als klassisches ML — es kompensiert mit automatischer Merkmalsextraktion aus grossen Datenmengen."
      },
      {
        "id": "opt-2",
        "text": "Deep learning only works with text",
        "textDe": "Deep Learning funktioniert nur mit Text",
        "isCorrect": false,
        "explanation": "Deep learning works across many data types (images, text, audio, tabular) — it is not limited to text.",
        "explanationDe": "Deep Learning arbeitet mit vielen Datentypen (Bilder, Text, Audio, Tabellen) — es ist nicht auf Text beschraenkt."
      },
      {
        "id": "opt-3",
        "text": "Deep learning replaces feature engineering with manual rules",
        "textDe": "Deep Learning ersetzt Feature Engineering durch manuelle Regeln",
        "isCorrect": false,
        "explanation": "Deep learning replaces manual feature engineering with automatic feature learning — the opposite of replacing it with manual rules.",
        "explanationDe": "Deep Learning ersetzt manuelles Feature Engineering durch automatisches Feature-Lernen — das Gegenteil von Ersatz durch manuelle Regeln."
      }
    ],
    "explanation": "Deep neural networks automatically learn hierarchical features from large amounts of data.",
    "explanationDe": "Tiefe neuronale Netze lernen hierarchische Features automatisch aus grossen Datenmengen.",
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
    "type": "single-choice",
    "prompt": "What is the Transformer Architecture?",
    "promptDe": "Was ist die Transformer-Architektur?",
    "hint": "Transformers have a special mechanism that allows them to pay attention to all parts of the input at the same time.",
    "hintDe": "Transformer haben einen besonderen Mechanismus, der es ihnen erlaubt, auf alle Teile der Eingabe gleichzeitig zu achten.",
    "options": [
      {
        "id": "opt-0",
        "text": "A neural network that uses self-attention to learn contextual relationships",
        "textDe": "Ein neuronales Netzwerk das Selbst-Aufmerksamkeit (Self-Attention) nutzt, um Kontextbeziehungen zu lernen",
        "isCorrect": true,
        "explanation": "Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
        "explanationDe": "Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung."
      },
      {
        "id": "opt-1",
        "text": "A hardware component in GPUs",
        "textDe": "Ein Hardware-Bauteil in GPUs",
        "isCorrect": false,
        "explanation": "The Transformer is a neural network architecture, not a physical hardware component.",
        "explanationDe": "Der Transformer ist eine neuronale Netzwerkarchitektur, keine physische Hardware-Komponente."
      },
      {
        "id": "opt-2",
        "text": "A database index type",
        "textDe": "Ein Datenbank-Index-Typ",
        "isCorrect": false,
        "explanation": "A database index type organizes data for fast queries — the Transformer is a neural network architecture for processing sequences.",
        "explanationDe": "Ein Datenbank-Index-Typ organisiert Daten fuer schnelle Abfragen — der Transformer ist eine neuronale Netzwerkarchitektur fuer Sequenzverarbeitung."
      },
      {
        "id": "opt-3",
        "text": "An Azure network protocol",
        "textDe": "Ein Azure-Netzwerkprotokoll",
        "isCorrect": false,
        "explanation": "Network protocols handle data communication — the Transformer is an AI model architecture using self-attention mechanisms.",
        "explanationDe": "Netzwerkprotokolle regeln die Datenkommunikation — der Transformer ist eine KI-Modellarchitektur die Self-Attention-Mechanismen nutzt."
      }
    ],
    "explanation": "Transformers are the basis of modern LLMs and use attention mechanisms instead of sequential processing.",
    "explanationDe": "Transformer sind die Basis moderner LLMs und nutzen Attention-Mechanismen statt sequentieller Verarbeitung.",
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
    "topic": "Machine Learning",
    "type": "true-false",
    "prompt": "Statement: GPT and BERT are both based on the Transformer architecture.",
    "promptDe": "Aussage: GPT und BERT basieren beide auf der Transformer-Architektur.",
    "hint": "Both models use attention mechanisms, but in different ways. Do they have common ground?",
    "hintDe": "Beide Modelle nutzen Attention-Mechanismen, aber auf unterschiedliche Weise. Haben sie eine gemeinsame Basis?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Both model families use transformers, but GPT is generative (decoder) and BERT is bidirectional (encoder).",
        "explanationDe": "Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder)."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — both GPT (decoder) and BERT (encoder) are built on the Transformer architecture.",
        "explanationDe": "Die Aussage ist korrekt — sowohl GPT (Decoder) als auch BERT (Encoder) basieren auf der Transformer-Architektur."
      }
    ],
    "explanation": "Both model families use transformers, but GPT is generative (decoder) and BERT is bidirectional (encoder).",
    "explanationDe": "Beide Modellfamilien nutzen Transformer, aber GPT ist generativ (Decoder) und BERT ist bidirektional (Encoder).",
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
    "type": "single-choice",
    "prompt": "What are “features” and “labels” in an ML dataset?",
    "promptDe": "Was sind \"Features\" und \"Labels\" in einem ML-Dataset?",
    "hint": "Think of a table: Which columns describe the data points, and which column should be predicted?",
    "hintDe": "Denk an eine Tabelle: Welche Spalten beschreiben die Datenpunkte, und welche Spalte soll vorhergesagt werden?",
    "options": [
      {
        "id": "opt-0",
        "text": "Features are input variables, labels are the target values ​​to be predicted",
        "textDe": "Features sind Eingabevariablen, Labels sind die zu vorhersagenden Zielwerte",
        "isCorrect": true,
        "explanation": "Features (X) describe the data points, labels (Y) are the desired prediction targets.",
        "explanationDe": "Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele."
      },
      {
        "id": "opt-1",
        "text": "Features are outputs, labels are inputs",
        "textDe": "Features sind Ausgaben, Labels sind Eingaben",
        "isCorrect": false,
        "explanation": "This reverses the definitions — features are the inputs (X), labels are the outputs (Y) to predict.",
        "explanationDe": "Das vertauscht die Definitionen — Features sind die Eingaben (X), Labels sind die Ausgaben (Y) die vorhergesagt werden."
      },
      {
        "id": "opt-2",
        "text": "Both are hyperparameters",
        "textDe": "Beides sind Hyperparameter",
        "isCorrect": false,
        "explanation": "Hyperparameters control the training process (learning rate, batch size) — features and labels describe the training data itself.",
        "explanationDe": "Hyperparameter steuern den Trainingsprozess (Learning Rate, Batch Size) — Features und Labels beschreiben die Trainingsdaten selbst."
      },
      {
        "id": "opt-3",
        "text": "Features are numeric only, labels are text only",
        "textDe": "Features sind nur numerisch, Labels nur Text",
        "isCorrect": false,
        "explanation": "Both features and labels can be numeric or categorical — there is no restriction to specific data types.",
        "explanationDe": "Sowohl Features als auch Labels koennen numerisch oder kategorisch sein — es gibt keine Einschraenkung auf bestimmte Datentypen."
      }
    ],
    "explanation": "Features (X) describe the data points, labels (Y) are the desired prediction targets.",
    "explanationDe": "Features (X) beschreiben die Datenpunkte, Labels (Y) sind die gewunschten Vorhersageziele.",
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
    "type": "single-choice",
    "prompt": "Why divide data into training and validation sets?",
    "promptDe": "Warum teilt man Daten in Training- und Validierungs-Sets?",
    "hint": "How do you know whether a model has really learned or just memorized? You need unseen data.",
    "hintDe": "Woher weisst du, ob ein Modell wirklich gelernt hat oder nur auswendig kann? Du brauchst ungesehene Daten.",
    "options": [
      {
        "id": "opt-0",
        "text": "To check model performance on unseen data and detect overfitting",
        "textDe": "Um die Modellleistung auf ungesehenen Daten zu prufen und Overfitting zu erkennen",
        "isCorrect": true,
        "explanation": "Validation data simulates new, unseen data and shows whether the model generalizes.",
        "explanationDe": "Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert."
      },
      {
        "id": "opt-1",
        "text": "Because Azure only accepts two files",
        "textDe": "Weil Azure nur zwei Dateien akzeptiert",
        "isCorrect": false,
        "explanation": "Azure has no such two-file limitation — the split is a fundamental ML practice to evaluate generalization.",
        "explanationDe": "Azure hat keine solche Zwei-Dateien-Beschraenkung — der Split ist eine grundlegende ML-Praxis zur Bewertung der Generalisierung."
      },
      {
        "id": "opt-2",
        "text": "To save storage space",
        "textDe": "Um Speicherplatz zu sparen",
        "isCorrect": false,
        "explanation": "The split does not save storage — it uses the same data divided differently to test how well the model generalizes.",
        "explanationDe": "Der Split spart keinen Speicherplatz — er teilt dieselben Daten auf, um zu testen wie gut das Modell generalisiert."
      },
      {
        "id": "opt-3",
        "text": "Because training data never needs to be validated",
        "textDe": "Weil Trainingsdaten nie validiert werden mussen",
        "isCorrect": false,
        "explanation": "Training data quality still matters — the validation set is specifically for testing generalization on unseen examples.",
        "explanationDe": "Trainingsdatenqualitaet ist weiterhin wichtig — das Validierungsset dient speziell der Generalisierungsprufung an ungesehenen Beispielen."
      }
    ],
    "explanation": "Validation data simulates new, unseen data and shows whether the model generalizes.",
    "explanationDe": "Validierungsdaten simulieren neue, ungesehene Daten und zeigen, ob das Modell generalisiert.",
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
    "type": "single-choice",
    "prompt": "Which Azure resource provides computing power for ML training?",
    "promptDe": "Welche Azure-Ressource stellt Rechenleistung fur ML-Training bereit?",
    "hint": "ML training requires computing power. Which Azure ML resource delivers exactly that?",
    "hintDe": "ML-Training braucht Rechenpower. Welche Azure-ML-Ressource liefert genau das?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure Machine Learning Compute (Compute Instances and Clusters)",
        "textDe": "Azure Machine Learning Compute (Compute Instances und Clusters)",
        "isCorrect": true,
        "explanation": "Compute Instances are for development, Compute Clusters are for scalable training.",
        "explanationDe": "Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training."
      },
      {
        "id": "opt-1",
        "text": "Azure DNS",
        "textDe": "Azure DNS",
        "isCorrect": false,
        "explanation": "Azure DNS resolves domain names — it provides no computing power for ML training.",
        "explanationDe": "Azure DNS loest Domainnamen auf — es stellt keine Rechenleistung fuer ML-Training bereit."
      },
      {
        "id": "opt-2",
        "text": "Azure CDN",
        "textDe": "Azure CDN",
        "isCorrect": false,
        "explanation": "Azure CDN caches and delivers content closer to users — it is not a compute resource for ML training.",
        "explanationDe": "Azure CDN cached und liefert Inhalte naeher an Nutzer — es ist keine Compute-Ressource fuer ML-Training."
      },
      {
        "id": "opt-3",
        "text": "Azure Key Vault",
        "textDe": "Azure Key Vault",
        "isCorrect": false,
        "explanation": "Azure Key Vault securely stores secrets and certificates — it does not provide computing power.",
        "explanationDe": "Azure Key Vault speichert sicher Geheimnisse und Zertifikate — es stellt keine Rechenleistung bereit."
      }
    ],
    "explanation": "Compute Instances are for development, Compute Clusters are for scalable training.",
    "explanationDe": "Compute Instances sind fur Entwicklung, Compute Clusters fur skalierbares Training.",
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
    "type": "single-choice",
    "prompt": "What is Azure AI Foundry?",
    "promptDe": "Was ist Azure AI Foundry?",
    "hint": "It used to be called Azure AI Studio. What can you do there with AI applications?",
    "hintDe": "Frueher hiess es Azure AI Studio. Was kann man dort alles mit KI-Anwendungen machen?",
    "options": [
      {
        "id": "opt-0",
        "text": "A unified platform for building, testing and deploying AI applications",
        "textDe": "Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Anwendungen",
        "isCorrect": true,
        "explanation": "Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
        "explanationDe": "Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure."
      },
      {
        "id": "opt-1",
        "text": "A hardware manufacturer",
        "textDe": "Ein Hardware-Hersteller",
        "isCorrect": false,
        "explanation": "Azure AI Foundry is a software platform, not a hardware manufacturer.",
        "explanationDe": "Azure AI Foundry ist eine Softwareplattform, kein Hardware-Hersteller."
      },
      {
        "id": "opt-2",
        "text": "A pure storage service",
        "textDe": "Ein reiner Speicherdienst",
        "isCorrect": false,
        "explanation": "Azure AI Foundry does much more than storage — it provides tools for building, testing, and deploying AI applications.",
        "explanationDe": "Azure AI Foundry bietet viel mehr als Speicher — es stellt Werkzeuge zum Erstellen, Testen und Bereitstellen von KI-Anwendungen bereit."
      },
      {
        "id": "opt-3",
        "text": "A network monitoring tool",
        "textDe": "Ein Netzwerk-Monitoring-Tool",
        "isCorrect": false,
        "explanation": "Network monitoring is handled by Azure Monitor — AI Foundry is a development platform for AI applications.",
        "explanationDe": "Netzwerk-Monitoring wird von Azure Monitor erledigt — AI Foundry ist eine Entwicklungsplattform fuer KI-Anwendungen."
      }
    ],
    "explanation": "Azure AI Foundry (formerly Azure AI Studio) is the core development platform for AI on Azure.",
    "explanationDe": "Azure AI Foundry (fruher Azure AI Studio) ist die zentrale Entwicklungsplattform fur KI auf Azure.",
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
    "type": "single-choice",
    "prompt": "What does the Azure AI Foundry Model Catalog offer?",
    "promptDe": "Was bietet der Azure AI Foundry Model Catalog?",
    "hint": "A catalog is a collection. What can you find in an AI model catalog?",
    "hintDe": "Ein Katalog ist eine Sammlung. Was findet man in einem Katalog fur KI-Modelle?",
    "options": [
      {
        "id": "opt-0",
        "text": "A collection of pre-built AI models from various vendors for testing and deployment",
        "textDe": "Eine Sammlung vorgefertigter KI-Modelle verschiedener Anbieter zum Testen und Bereitstellen",
        "isCorrect": true,
        "explanation": "The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
        "explanationDe": "Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren."
      },
      {
        "id": "opt-1",
        "text": "Microsoft proprietary models only",
        "textDe": "Nur Microsoft-eigene Modelle",
        "isCorrect": false,
        "explanation": "The Model Catalog includes models from many vendors (OpenAI, Meta, Hugging Face), not only Microsoft.",
        "explanationDe": "Der Model Catalog enthaelt Modelle vieler Anbieter (OpenAI, Meta, Hugging Face), nicht nur von Microsoft."
      },
      {
        "id": "opt-2",
        "text": "Image generators only",
        "textDe": "Nur Bildgeneratoren",
        "isCorrect": false,
        "explanation": "The Model Catalog includes text, code, embedding, and other model types — it is not limited to image generators.",
        "explanationDe": "Der Model Catalog umfasst Text-, Code-, Embedding- und andere Modelltypen — er ist nicht auf Bildgeneratoren beschraenkt."
      },
      {
        "id": "opt-3",
        "text": "Hardware specifications",
        "textDe": "Hardware-Spezifikationen",
        "isCorrect": false,
        "explanation": "Hardware specifications describe physical machines — the Model Catalog lists and provides AI models for deployment.",
        "explanationDe": "Hardware-Spezifikationen beschreiben physische Maschinen — der Model Catalog listet und stellt KI-Modelle zur Bereitstellung bereit."
      }
    ],
    "explanation": "The Model Catalog contains models from Microsoft, OpenAI, Meta, Hugging Face and others.",
    "explanationDe": "Der Model Catalog enthalt Modelle von Microsoft, OpenAI, Meta, Hugging Face und weiteren.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: Azure AI Foundry makes it possible to compare and test different LLMs from the Model Catalog.",
    "promptDe": "Aussage: Azure AI Foundry ermoglicht es, verschiedene LLMs aus dem Model Catalog zu vergleichen und zu testen.",
    "hint": "If there is a catalog with many models, it would make sense to be able to compare them, right?",
    "hintDe": "Wenn es einen Katalog mit vielen Modellen gibt, ware es sinnvoll, diese auch vergleichen zu konnen, oder?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "The Model Catalog provides benchmarks and playground tests for various models.",
        "explanationDe": "Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure AI Foundry provides benchmarks and playground features for comparing models from the catalog.",
        "explanationDe": "Die Aussage ist korrekt — Azure AI Foundry bietet Benchmarks und Playground-Features zum Vergleichen von Modellen aus dem Katalog."
      }
    ],
    "explanation": "The Model Catalog provides benchmarks and playground tests for various models.",
    "explanationDe": "Der Model Catalog bietet Benchmarks und Playground-Tests fur verschiedene Modelle.",
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
    "type": "single-choice",
    "prompt": "Which Responsible AI measure is particularly important specifically for generative AI?",
    "promptDe": "Welche Responsible-AI-Massnahme ist spezifisch fur generative KI besonders wichtig?",
    "hint": "Generative models can generate problematic content. How can you prevent this?",
    "hintDe": "Generative Modelle konnen problematische Inhalte erzeugen. Wie kann man das verhindern?",
    "options": [
      {
        "id": "opt-0",
        "text": "Content filtering to block malicious input and output",
        "textDe": "Content-Filterung um schadliche Eingaben und Ausgaben zu blockieren",
        "isCorrect": true,
        "explanation": "Content filters in Azure OpenAI check prompts and responses for malicious content.",
        "explanationDe": "Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte."
      },
      {
        "id": "opt-1",
        "text": "Use only open source models",
        "textDe": "Nur Open-Source-Modelle verwenden",
        "isCorrect": false,
        "explanation": "Using only open-source models does not address harmful content — content filtering is needed regardless of model origin.",
        "explanationDe": "Nur Open-Source-Modelle zu verwenden adressiert keine schaedlichen Inhalte — Content-Filterung wird unabhaengig von der Modellherkunft benoetigt."
      },
      {
        "id": "opt-2",
        "text": "Make all prompts public",
        "textDe": "Alle Prompts offentlich machen",
        "isCorrect": false,
        "explanation": "Making all prompts public would raise privacy and security concerns, not solve the content safety problem.",
        "explanationDe": "Alle Prompts oeffentlich zu machen wuerde Datenschutz- und Sicherheitsbedenken aufwerfen, nicht das Content-Safety-Problem loesen."
      },
      {
        "id": "opt-3",
        "text": "Always set the temperature to maximum",
        "textDe": "Temperature immer auf Maximum setzen",
        "isCorrect": false,
        "explanation": "Maximum temperature increases randomness and potentially harmful outputs — it is the opposite of a safety measure.",
        "explanationDe": "Maximale Temperature erhoeht Zufaelligkeit und potenziell schaedliche Ausgaben — es ist das Gegenteil einer Sicherheitsmassnahme."
      }
    ],
    "explanation": "Content filters in Azure OpenAI check prompts and responses for malicious content.",
    "explanationDe": "Content-Filter in Azure OpenAI prufen Prompts und Antworten auf schadliche Inhalte.",
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
    "type": "single-choice",
    "prompt": "What is meant by language modeling?",
    "promptDe": "Was versteht man unter Language Modeling?",
    "hint": "Think about autocomplete on your phone. The model predicts what comes next.",
    "hintDe": "Denk an die Autovervollstandigung auf deinem Handy. Das Modell sagt voraus, was als Nachstes kommt.",
    "options": [
      {
        "id": "opt-0",
        "text": "Predicting the next word or token based on context",
        "textDe": "Das Vorhersagen des nachsten Worts oder Tokens basierend auf Kontext",
        "isCorrect": true,
        "explanation": "Language models learn statistical patterns in language and can generate or complete text.",
        "explanationDe": "Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen."
      },
      {
        "id": "opt-1",
        "text": "Translating programming languages",
        "textDe": "Das Ubersetzen von Programmiersprachen",
        "isCorrect": false,
        "explanation": "Translating programming languages is a code translation task — language modeling predicts the next token in a sequence.",
        "explanationDe": "Programmiersprachen uebersetzen ist eine Code-Uebersetzungsaufgabe — Language Modeling sagt das naechste Token in einer Sequenz voraus."
      },
      {
        "id": "opt-2",
        "text": "Creating language courses",
        "textDe": "Das Erstellen von Sprachkursen",
        "isCorrect": false,
        "explanation": "Creating language courses is an educational task — language modeling is the statistical prediction of tokens in text.",
        "explanationDe": "Sprachkurse erstellen ist eine Bildungsaufgabe — Language Modeling ist die statistische Vorhersage von Tokens in Text."
      },
      {
        "id": "opt-3",
        "text": "Compressing text files",
        "textDe": "Das Komprimieren von Textdateien",
        "isCorrect": false,
        "explanation": "Compressing text files is a data storage operation — language modeling learns patterns to predict or generate text.",
        "explanationDe": "Textdateien komprimieren ist eine Datenspeicheroperation — Language Modeling lernt Muster um Text vorherzusagen oder zu generieren."
      }
    ],
    "explanation": "Language models learn statistical patterns in language and can generate or complete text.",
    "explanationDe": "Language Models lernen statistische Muster in Sprache und konnen Text generieren oder vervollstandigen.",
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
    "type": "single-choice",
    "prompt": "Where to deploy models trained in Azure ML as an endpoint?",
    "promptDe": "Wo kann man in Azure ML trainierte Modelle als Endpunkt bereitstellen?",
    "hint": "Azure ML provides managed endpoints for deployment. What are these called?",
    "hintDe": "Azure ML bietet verwaltete Endpunkte fur die Bereitstellung. Wie heissen diese?",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure Machine Learning Managed Endpoints",
        "textDe": "Azure Machine Learning Managed Endpoints",
        "isCorrect": true,
        "explanation": "Managed endpoints enable real-time and batch inference for deployed models.",
        "explanationDe": "Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle."
      },
      {
        "id": "opt-1",
        "text": "Azure DNS Zones",
        "textDe": "Azure DNS Zones",
        "isCorrect": false,
        "explanation": "Azure DNS Zones manage domain name records — they cannot host or serve ML model endpoints.",
        "explanationDe": "Azure DNS Zones verwalten Domainnamen-Eintraege — sie koennen keine ML-Modell-Endpunkte hosten oder bereitstellen."
      },
      {
        "id": "opt-2",
        "text": "Azure Active Directory",
        "textDe": "Azure Active Directory",
        "isCorrect": false,
        "explanation": "Azure Active Directory manages identities and access — it is not an ML model hosting service.",
        "explanationDe": "Azure Active Directory verwaltet Identitaeten und Zugriff — es ist kein ML-Modell-Hosting-Dienst."
      },
      {
        "id": "opt-3",
        "text": "Azure Key Vault",
        "textDe": "Azure Key Vault",
        "isCorrect": false,
        "explanation": "Azure Key Vault stores secrets securely — it does not provide model deployment endpoints.",
        "explanationDe": "Azure Key Vault speichert Geheimnisse sicher — es stellt keine Modell-Deployment-Endpunkte bereit."
      }
    ],
    "explanation": "Managed endpoints enable real-time and batch inference for deployed models.",
    "explanationDe": "Managed Endpoints ermoglichen Echtzeit- und Batch-Inferenz fur bereitgestellte Modelle.",
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
    "topic": "Machine Learning",
    "type": "true-false",
    "prompt": "Statement: Convolutional Neural Networks (CNNs) are often used for image recognition tasks.",
    "promptDe": "Aussage: Convolutional Neural Networks (CNNs) werden haufig fur Bilderkennungsaufgaben eingesetzt.",
    "hint": "CNNs have a special architecture. What type of data are they particularly suitable for?",
    "hintDe": "CNNs haben eine spezielle Architektur. Fur welche Art von Daten sind sie besonders gut geeignet?",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "CNNs are specifically optimized for processing grid-shaped data such as images.",
        "explanationDe": "CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — CNNs are specifically designed for grid-shaped data like images with their convolutional layers.",
        "explanationDe": "Die Aussage ist korrekt — CNNs sind mit ihren Faltungsschichten speziell fuer rasterfoermige Daten wie Bilder konzipiert."
      }
    ],
    "explanation": "CNNs are specifically optimized for processing grid-shaped data such as images.",
    "explanationDe": "CNNs sind speziell fur die Verarbeitung rasterformiger Daten wie Bilder optimiert.",
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
    "type": "single-choice",
    "prompt": "Which Azure AI Vision capability generates a natural-language sentence describing an image?",
    "promptDe": "Welche Funktion von Azure AI Vision erzeugt einen naturlichsprachlichen Satz, der ein Bild beschreibt?",
    "hint": "Think about which feature produces human-readable text about the visual content of a photo.",
    "hintDe": "Uberlege, welches Feature menschlich lesbaren Text uber den visuellen Inhalt eines Fotos erstellt.",
    "options": [
      {
        "id": "opt-0",
        "text": "Image tagging",
        "textDe": "Bild-Tagging",
        "isCorrect": false,
        "explanation": "Image tagging returns individual keywords, not full sentences describing the scene.",
        "explanationDe": "Bild-Tagging gibt einzelne Schlusselworter zuruck, keine vollstandigen Satze."
      },
      {
        "id": "opt-1",
        "text": "Image captioning",
        "textDe": "Bildbeschriftung",
        "isCorrect": true,
        "explanation": "Image captioning generates a natural-language description of the image content.",
        "explanationDe": "Bildbeschriftung erzeugt eine naturlichsprachliche Beschreibung des Bildinhalts."
      },
      {
        "id": "opt-2",
        "text": "Smart cropping",
        "textDe": "Smart Cropping",
        "isCorrect": false,
        "explanation": "Smart cropping identifies areas of interest for thumbnails but does not produce text descriptions.",
        "explanationDe": "Smart Cropping identifiziert Interessenbereiche fur Thumbnails, erzeugt aber keine Textbeschreibungen."
      },
      {
        "id": "opt-3",
        "text": "Spatial analysis",
        "textDe": "Raumliche Analyse",
        "isCorrect": false,
        "explanation": "Spatial analysis detects people movement in video feeds, not text descriptions of images.",
        "explanationDe": "Raumliche Analyse erkennt Personenbewegungen in Videofeeds, nicht Textbeschreibungen von Bildern."
      }
    ],
    "explanation": "Image captioning in Azure AI Vision analyzes an image and returns a human-readable sentence describing its content.",
    "explanationDe": "Bildbeschriftung in Azure AI Vision analysiert ein Bild und gibt einen menschlich lesbaren Satz zuruck, der den Inhalt beschreibt.",
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
    "type": "single-choice",
    "prompt": "What does the image tagging feature in Azure AI Vision return?",
    "promptDe": "Was gibt die Bild-Tagging-Funktion in Azure AI Vision zuruck?",
    "hint": "Consider the difference between individual labels and full sentences.",
    "hintDe": "Uberlege den Unterschied zwischen einzelnen Labels und ganzen Satzen.",
    "options": [
      {
        "id": "opt-0",
        "text": "A single confidence score for the whole image",
        "textDe": "Einen einzelnen Konfidenzwert fur das gesamte Bild",
        "isCorrect": false,
        "explanation": "Image tagging returns multiple tags, not a single overall score.",
        "explanationDe": "Bild-Tagging gibt mehrere Tags zuruck, nicht einen einzelnen Gesamtwert."
      },
      {
        "id": "opt-1",
        "text": "A list of relevant tags with confidence scores",
        "textDe": "Eine Liste relevanter Tags mit Konfidenzwerten",
        "isCorrect": true,
        "explanation": "Image tagging returns a set of relevant keyword tags, each with an associated confidence score.",
        "explanationDe": "Bild-Tagging gibt eine Reihe relevanter Schlusselwort-Tags zuruck, jeweils mit einem Konfidenzwert."
      },
      {
        "id": "opt-2",
        "text": "A bounding box around every object",
        "textDe": "Einen Begrenzungsrahmen um jedes Objekt",
        "isCorrect": false,
        "explanation": "Bounding boxes are returned by object detection, not by tagging.",
        "explanationDe": "Begrenzungsrahmen werden durch Objekterkennung geliefert, nicht durch Tagging."
      },
      {
        "id": "opt-3",
        "text": "A translated caption in multiple languages",
        "textDe": "Eine ubersetzte Beschriftung in mehreren Sprachen",
        "isCorrect": false,
        "explanation": "Translated captions are not the output of image tagging.",
        "explanationDe": "Ubersetzte Beschriftungen sind nicht die Ausgabe von Bild-Tagging."
      }
    ],
    "explanation": "Image tagging analyzes visual content and returns keyword tags, each with a confidence score indicating how likely the tag applies.",
    "explanationDe": "Bild-Tagging analysiert den visuellen Inhalt und gibt eine Liste von Schlusselwort-Tags zuruck, jeweils mit einem Konfidenzwert.",
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
    "type": "single-choice",
    "prompt": "Which Azure AI Vision feature automatically selects the most visually interesting region when generating a thumbnail?",
    "promptDe": "Welche Azure AI Vision-Funktion wahlt automatisch den visuell interessantesten Bereich beim Erstellen eines Thumbnails aus?",
    "hint": "Think about which feature focuses on the area of interest rather than just center-cropping.",
    "hintDe": "Uberlege, welche Funktion sich auf den Interessenbereich konzentriert, statt nur in der Mitte zu beschneiden.",
    "options": [
      {
        "id": "opt-0",
        "text": "Object detection",
        "textDe": "Objekterkennung",
        "isCorrect": false,
        "explanation": "Object detection identifies and locates objects but does not generate thumbnails.",
        "explanationDe": "Objekterkennung identifiziert und lokalisiert Objekte, erstellt aber keine Thumbnails."
      },
      {
        "id": "opt-1",
        "text": "Smart cropping",
        "textDe": "Smart Cropping",
        "isCorrect": true,
        "explanation": "Smart cropping uses area-of-interest detection to create thumbnails focused on the most important part of the image.",
        "explanationDe": "Smart Cropping nutzt die Erkennung von Interessenbereichen, um Thumbnails zu erstellen, die auf den wichtigsten Teil des Bildes fokussiert sind."
      },
      {
        "id": "opt-2",
        "text": "Optical character recognition",
        "textDe": "Optische Zeichenerkennung",
        "isCorrect": false,
        "explanation": "OCR extracts text from images and is unrelated to thumbnail generation.",
        "explanationDe": "OCR extrahiert Text aus Bildern und hat nichts mit Thumbnail-Erstellung zu tun."
      },
      {
        "id": "opt-3",
        "text": "Image classification",
        "textDe": "Bildklassifizierung",
        "isCorrect": false,
        "explanation": "Image classification assigns category labels, it does not generate thumbnails.",
        "explanationDe": "Bildklassifizierung weist Kategorielabels zu, erstellt aber keine Thumbnails."
      }
    ],
    "explanation": "Smart cropping in Azure AI Vision identifies the area of interest in an image and generates a thumbnail focused on that region.",
    "explanationDe": "Smart Cropping in Azure AI Vision identifiziert den Interessenbereich in einem Bild und erstellt ein Thumbnail, das auf diesen Bereich fokussiert ist.",
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
    "type": "single-choice",
    "prompt": "Which Azure AI Vision capability can detect and track people moving through a defined zone in a video feed?",
    "promptDe": "Welche Azure AI Vision-Funktion kann Personen erkennen und verfolgen, die sich durch eine definierte Zone in einem Videofeed bewegen?",
    "hint": "Consider which feature is designed for monitoring physical spaces in real time.",
    "hintDe": "Uberlege, welches Feature fur die Uberwachung physischer Raume in Echtzeit konzipiert ist.",
    "options": [
      {
        "id": "opt-0",
        "text": "Image captioning",
        "textDe": "Bildbeschriftung",
        "isCorrect": false,
        "explanation": "Image captioning generates text descriptions of static images, it does not track movement.",
        "explanationDe": "Bildbeschriftung erzeugt Textbeschreibungen statischer Bilder, verfolgt keine Bewegungen."
      },
      {
        "id": "opt-1",
        "text": "Custom Vision classification",
        "textDe": "Custom Vision Klassifizierung",
        "isCorrect": false,
        "explanation": "Custom Vision classifies images into categories but does not perform real-time people tracking.",
        "explanationDe": "Custom Vision klassifiziert Bilder, fuhrt aber keine Personenverfolgung durch."
      },
      {
        "id": "opt-2",
        "text": "Spatial analysis",
        "textDe": "Raumliche Analyse",
        "isCorrect": true,
        "explanation": "Spatial analysis in Azure AI Vision can detect people, track their movement, and monitor defined zones in video feeds.",
        "explanationDe": "Raumliche Analyse kann Personen erkennen, ihre Bewegung verfolgen und definierte Zonen uberwachen."
      },
      {
        "id": "opt-3",
        "text": "OCR",
        "textDe": "OCR",
        "isCorrect": false,
        "explanation": "OCR extracts text from images and is not related to people tracking.",
        "explanationDe": "OCR extrahiert Text aus Bildern."
      }
    ],
    "explanation": "Spatial analysis uses video feeds to detect people and understand their movement through physical spaces.",
    "explanationDe": "Raumliche Analyse nutzt Videofeeds, um Personen zu erkennen und ihre Bewegung durch physische Raume zu verstehen.",
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
    "type": "single-choice",
    "prompt": "What is the primary difference between face detection and face verification in Azure AI Face?",
    "promptDe": "Was ist der Hauptunterschied zwischen Gesichtserkennung und Gesichtsverifizierung in Azure AI Face?",
    "hint": "One finds faces in an image, the other checks if two faces belong to the same person.",
    "hintDe": "Eine findet Gesichter in einem Bild, die andere pruft, ob zwei Gesichter zur selben Person gehoren.",
    "options": [
      {
        "id": "opt-0",
        "text": "Face detection identifies a specific person; face verification finds faces",
        "textDe": "Gesichtserkennung identifiziert eine bestimmte Person; Gesichtsverifizierung findet Gesichter",
        "isCorrect": false,
        "explanation": "This reverses the definitions.",
        "explanationDe": "Dies vertauscht die Definitionen."
      },
      {
        "id": "opt-1",
        "text": "Face detection locates faces in an image; face verification checks if two faces match the same person",
        "textDe": "Gesichtserkennung lokalisiert Gesichter; Gesichtsverifizierung pruft, ob zwei Gesichter zur selben Person gehoren",
        "isCorrect": true,
        "explanation": "Face detection locates and returns bounding boxes for faces, while face verification performs a one-to-one match between two faces.",
        "explanationDe": "Gesichtserkennung lokalisiert Gesichter und gibt Begrenzungsrahmen zuruck, wahrend Gesichtsverifizierung einen Eins-zu-eins-Vergleich durchfuhrt."
      },
      {
        "id": "opt-2",
        "text": "Face detection requires enrollment; face verification does not",
        "textDe": "Gesichtserkennung erfordert Registrierung; Gesichtsverifizierung nicht",
        "isCorrect": false,
        "explanation": "Face detection does not require enrollment.",
        "explanationDe": "Gesichtserkennung erfordert keine Registrierung."
      },
      {
        "id": "opt-3",
        "text": "There is no difference; they are the same operation",
        "textDe": "Es gibt keinen Unterschied; es ist dieselbe Operation",
        "isCorrect": false,
        "explanation": "They are distinct operations.",
        "explanationDe": "Es sind verschiedene Operationen."
      }
    ],
    "explanation": "Face detection finds faces and returns locations. Face verification is a one-to-one comparison checking whether two faces belong to the same individual.",
    "explanationDe": "Gesichtserkennung findet Gesichter und gibt deren Positionen zuruck. Gesichtsverifizierung ist ein Eins-zu-eins-Vergleich.",
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
    "type": "single-choice",
    "prompt": "What does face identification do in Azure AI Face, compared to face verification?",
    "promptDe": "Was macht Gesichtsidentifizierung in Azure AI Face im Vergleich zur Gesichtsverifizierung?",
    "hint": "One is a one-to-one check, the other searches among many enrolled faces.",
    "hintDe": "Eine ist ein Eins-zu-eins-Vergleich, die andere sucht unter vielen registrierten Gesichtern.",
    "options": [
      {
        "id": "opt-0",
        "text": "It detects faces without matching them",
        "textDe": "Sie erkennt Gesichter, ohne sie zuzuordnen",
        "isCorrect": false,
        "explanation": "Detecting without matching is face detection.",
        "explanationDe": "Das ist Gesichtserkennung, nicht Identifizierung."
      },
      {
        "id": "opt-1",
        "text": "It performs a one-to-one comparison between two face images",
        "textDe": "Sie fuhrt einen Eins-zu-eins-Vergleich durch",
        "isCorrect": false,
        "explanation": "A one-to-one comparison is face verification.",
        "explanationDe": "Ein Eins-zu-eins-Vergleich ist Verifizierung."
      },
      {
        "id": "opt-2",
        "text": "It matches a detected face against a group of enrolled persons to determine who it is",
        "textDe": "Sie gleicht ein erkanntes Gesicht mit einer Gruppe registrierter Personen ab",
        "isCorrect": true,
        "explanation": "Face identification performs a one-to-many search, matching a detected face against enrolled persons to determine identity.",
        "explanationDe": "Gesichtsidentifizierung fuhrt eine Eins-zu-viele-Suche durch und gleicht ein erkanntes Gesicht mit registrierten Personen ab."
      },
      {
        "id": "opt-3",
        "text": "It generates a synthetic face image from text",
        "textDe": "Sie generiert ein synthetisches Gesichtsbild aus Text",
        "isCorrect": false,
        "explanation": "That is an image generation task.",
        "explanationDe": "Das ist eine Bildgenerierungsaufgabe."
      }
    ],
    "explanation": "Face identification is a one-to-many operation comparing a detected face against a group of enrolled persons to determine identity.",
    "explanationDe": "Gesichtsidentifizierung ist eine Eins-zu-viele-Operation, die ein erkanntes Gesicht mit registrierten Personen abgleicht.",
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
    "type": "single-choice",
    "prompt": "What is liveness detection in Azure AI Face used for?",
    "promptDe": "Wofur wird die Liveness-Erkennung in Azure AI Face verwendet?",
    "hint": "Think about preventing someone from holding up a photo to impersonate another person.",
    "hintDe": "Denke daran, dass jemand ein Foto vorhalten konnte, um sich als andere Person auszugeben.",
    "options": [
      {
        "id": "opt-0",
        "text": "Determining the age and gender of a detected face",
        "textDe": "Bestimmung von Alter und Geschlecht eines erkannten Gesichts",
        "isCorrect": false,
        "explanation": "Age estimation is face attribute analysis, not liveness.",
        "explanationDe": "Altersschatzung ist Gesichtsattribut-Analyse."
      },
      {
        "id": "opt-1",
        "text": "Verifying that the face in front of the camera is a real person and not a photo or mask",
        "textDe": "Verifizierung, dass das Gesicht vor der Kamera eine echte Person ist und kein Foto oder eine Maske",
        "isCorrect": true,
        "explanation": "Liveness detection determines whether the face presented to the camera is a live person, preventing spoofing attacks using photos, videos, or masks.",
        "explanationDe": "Liveness-Erkennung bestimmt, ob das Gesicht einer lebenden Person gehort, und verhindert Spoofing-Angriffe."
      },
      {
        "id": "opt-2",
        "text": "Identifying which person in a database a face belongs to",
        "textDe": "Identifizierung, welcher Person in einer Datenbank ein Gesicht gehort",
        "isCorrect": false,
        "explanation": "That is face identification.",
        "explanationDe": "Das ist Gesichtsidentifizierung."
      },
      {
        "id": "opt-3",
        "text": "Detecting emotional expressions on a face",
        "textDe": "Erkennung emotionaler Ausdrucke auf einem Gesicht",
        "isCorrect": false,
        "explanation": "Emotion detection does not verify liveness.",
        "explanationDe": "Emotionserkennung pruft keine Liveness."
      }
    ],
    "explanation": "Liveness detection verifies that the face presented to the camera belongs to a real, physically present person, preventing spoofing with photos, videos, or masks.",
    "explanationDe": "Liveness-Erkennung verifiziert, dass das Gesicht vor der Kamera einer echten, physisch anwesenden Person gehort.",
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
    "type": "single-choice",
    "prompt": "Which Azure AI Vision feature can extract printed and handwritten text from images?",
    "promptDe": "Welche Azure AI Vision-Funktion kann gedruckten und handgeschriebenen Text aus Bildern extrahieren?",
    "hint": "Think about which capability reads characters from visual media like photos or scanned documents.",
    "hintDe": "Uberlege, welche Fahigkeit Zeichen aus visuellen Medien wie Fotos oder gescannten Dokumenten liest.",
    "options": [
      {
        "id": "opt-0",
        "text": "Image captioning",
        "textDe": "Bildbeschriftung",
        "isCorrect": false,
        "explanation": "Image captioning describes the scene in natural language, it does not extract text characters.",
        "explanationDe": "Bildbeschriftung beschreibt die Szene in naturlicher Sprache."
      },
      {
        "id": "opt-1",
        "text": "Image tagging",
        "textDe": "Bild-Tagging",
        "isCorrect": false,
        "explanation": "Image tagging returns keyword labels for visual content, not text extraction.",
        "explanationDe": "Bild-Tagging gibt Schlusselwort-Labels fur visuellen Inhalt zuruck."
      },
      {
        "id": "opt-2",
        "text": "OCR (Read API)",
        "textDe": "OCR (Read API)",
        "isCorrect": true,
        "explanation": "The OCR Read API in Azure AI Vision extracts both printed and handwritten text from images and documents.",
        "explanationDe": "Die OCR Read API extrahiert sowohl gedruckten als auch handgeschriebenen Text aus Bildern und Dokumenten."
      },
      {
        "id": "opt-3",
        "text": "Smart cropping",
        "textDe": "Smart Cropping",
        "isCorrect": false,
        "explanation": "Smart cropping generates thumbnails focused on areas of interest.",
        "explanationDe": "Smart Cropping erstellt Thumbnails."
      }
    ],
    "explanation": "The OCR Read API in Azure AI Vision can extract both printed and handwritten text from images, PDFs, and other documents.",
    "explanationDe": "Die OCR Read API in Azure AI Vision kann sowohl gedruckten als auch handgeschriebenen Text aus Bildern und Dokumenten extrahieren.",
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
    "type": "single-choice",
    "prompt": "What is the difference between semantic segmentation and instance segmentation?",
    "promptDe": "Was ist der Unterschied zwischen semantischer Segmentierung und Instanz-Segmentierung?",
    "hint": "Both label pixels, but one distinguishes individual objects of the same class while the other does not.",
    "hintDe": "Beide labeln Pixel, aber eine unterscheidet einzelne Objekte derselben Klasse, die andere nicht.",
    "options": [
      {
        "id": "opt-0",
        "text": "Semantic segmentation labels each pixel with a class; instance segmentation also separates individual objects of the same class",
        "textDe": "Semantische Segmentierung labelt jedes Pixel mit einer Klasse; Instanz-Segmentierung trennt auch einzelne Objekte derselben Klasse",
        "isCorrect": true,
        "explanation": "Semantic segmentation assigns a class to each pixel. Instance segmentation goes further by distinguishing between separate objects of the same class.",
        "explanationDe": "Semantische Segmentierung weist jedem Pixel eine Klasse zu. Instanz-Segmentierung unterscheidet zusatzlich einzelne Objekte derselben Klasse."
      },
      {
        "id": "opt-1",
        "text": "Instance segmentation labels pixels; semantic segmentation draws bounding boxes",
        "textDe": "Instanz-Segmentierung labelt Pixel; semantische Segmentierung zeichnet Begrenzungsrahmen",
        "isCorrect": false,
        "explanation": "Both label pixels; bounding boxes are from object detection.",
        "explanationDe": "Begrenzungsrahmen stammen von der Objekterkennung."
      },
      {
        "id": "opt-2",
        "text": "They are identical techniques with different names",
        "textDe": "Es sind identische Techniken mit verschiedenen Namen",
        "isCorrect": false,
        "explanation": "They differ in how individual instances are handled.",
        "explanationDe": "Sie unterscheiden sich."
      },
      {
        "id": "opt-3",
        "text": "Semantic segmentation only works on video; instance segmentation only on images",
        "textDe": "Semantische Segmentierung funktioniert nur bei Video; Instanz-Segmentierung nur bei Bildern",
        "isCorrect": false,
        "explanation": "Both can work on images and video.",
        "explanationDe": "Beide konnen auf Bildern und Video arbeiten."
      }
    ],
    "explanation": "Semantic segmentation assigns a class label to every pixel. Instance segmentation additionally distinguishes individual objects of the same class.",
    "explanationDe": "Semantische Segmentierung weist jedem Pixel ein Klassenlabel zu. Instanz-Segmentierung unterscheidet zusatzlich einzelne Objekte derselben Klasse.",
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
    "type": "single-choice",
    "prompt": "What does Custom Vision allow you to do?",
    "promptDe": "Was ermoglicht Custom Vision?",
    "hint": "Think about what happens when the pre-built models do not cover your specific use case.",
    "hintDe": "Uberlege, was passiert, wenn die vorgefertigten Modelle deinen spezifischen Anwendungsfall nicht abdecken.",
    "options": [
      {
        "id": "opt-0",
        "text": "Train custom image classification or object detection models with your own labeled images",
        "textDe": "Eigene Bildklassifizierungs- oder Objekterkennungsmodelle mit eigenen gelabelten Bildern trainieren",
        "isCorrect": true,
        "explanation": "Custom Vision lets you upload labeled images and train custom classifiers or object detectors for domain-specific scenarios.",
        "explanationDe": "Custom Vision ermoglicht das Hochladen eigener gelabelter Bilder und das Training benutzerdefinierter Klassifikatoren oder Objektdetektoren."
      },
      {
        "id": "opt-1",
        "text": "Only use pre-built Microsoft models without customization",
        "textDe": "Nur vorgefertigte Microsoft-Modelle ohne Anpassung verwenden",
        "isCorrect": false,
        "explanation": "Custom Vision is specifically for training custom models.",
        "explanationDe": "Custom Vision ist fur eigene Modelle konzipiert."
      },
      {
        "id": "opt-2",
        "text": "Generate new images from text descriptions",
        "textDe": "Neue Bilder aus Textbeschreibungen generieren",
        "isCorrect": false,
        "explanation": "Image generation from text is DALL-E.",
        "explanationDe": "Bildgenerierung ist DALL-E."
      },
      {
        "id": "opt-3",
        "text": "Translate text between languages",
        "textDe": "Text zwischen Sprachen ubersetzen",
        "isCorrect": false,
        "explanation": "Translation is Azure AI Translator.",
        "explanationDe": "Ubersetzung ist Azure AI Translator."
      }
    ],
    "explanation": "Custom Vision allows you to train custom image classification and object detection models using your own labeled images.",
    "explanationDe": "Custom Vision ermoglicht das Training eigener Bildklassifizierungs- und Objekterkennungsmodelle mit eigenen gelabelten Bildern.",
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
    "type": "single-choice",
    "prompt": "A retail company wants to automatically detect when shelves are empty. Which computer vision approach is most appropriate?",
    "promptDe": "Ein Einzelhandelsunternehmen mochte automatisch erkennen, wenn Regale leer sind. Welcher Computer-Vision-Ansatz ist am besten geeignet?",
    "hint": "Think about which technique can identify specific objects or their absence in an image.",
    "hintDe": "Uberlege, welche Technik bestimmte Objekte oder deren Abwesenheit in einem Bild erkennen kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "Sentiment analysis",
        "textDe": "Sentimentanalyse",
        "isCorrect": false,
        "explanation": "Sentiment analysis evaluates text mood, not visual shelf monitoring.",
        "explanationDe": "Sentimentanalyse bewertet Textstimmung."
      },
      {
        "id": "opt-1",
        "text": "Speech recognition",
        "textDe": "Spracherkennung",
        "isCorrect": false,
        "explanation": "Speech recognition converts audio to text.",
        "explanationDe": "Spracherkennung wandelt Audio in Text um."
      },
      {
        "id": "opt-2",
        "text": "Object detection with a custom model trained on shelf images",
        "textDe": "Objekterkennung mit einem auf Regalbilder trainierten Modell",
        "isCorrect": true,
        "explanation": "Object detection with a custom model can be trained to recognize empty shelf regions, enabling automated inventory monitoring.",
        "explanationDe": "Objekterkennung mit einem benutzerdefinierten Modell kann leere Regalbereiche erkennen und automatische Bestandsuberwachung ermoglichen."
      },
      {
        "id": "opt-3",
        "text": "Language translation",
        "textDe": "Sprachubersetzung",
        "isCorrect": false,
        "explanation": "Language translation has nothing to do with shelf monitoring.",
        "explanationDe": "Sprachubersetzung hat nichts mit Regaluberwachung zu tun."
      }
    ],
    "explanation": "Object detection with a custom model trained on shelf images can identify empty shelf areas and trigger alerts for restocking.",
    "explanationDe": "Objekterkennung mit einem auf Regalbilder trainierten Modell kann leere Regalbereiche identifizieren und Nachfullwarnungen auslosen.",
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
    "topic": "Computer Vision",
    "type": "true-false",
    "prompt": "Statement: Azure AI Vision can detect and count people in a video feed using spatial analysis.",
    "promptDe": "Aussage: Azure AI Vision kann mit raumlicher Analyse Personen in einem Videofeed erkennen und zahlen.",
    "hint": "Consider the spatial analysis capability and what it monitors in video streams.",
    "hintDe": "Denke an die Fahigkeit der raumlichen Analyse und was sie in Videostreams uberwacht.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Spatial analysis can detect people in video feeds, count them, and track their movement.",
        "explanationDe": "Raumliche Analyse kann Personen in Videofeeds erkennen, zahlen und ihre Bewegung verfolgen."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "The statement is correct — Azure AI Vision spatial analysis can indeed detect and count people in video feeds.",
        "explanationDe": "Die Aussage ist korrekt — Azure AI Vision Raumanalyse kann tatsaechlich Personen in Videofeeds erkennen und zaehlen."
      }
    ],
    "explanation": "Spatial analysis in Azure AI Vision can detect people in video feeds, count them, and track their movement through defined zones.",
    "explanationDe": "Raumliche Analyse in Azure AI Vision kann Personen in Videofeeds erkennen, zahlen und ihre Bewegung verfolgen.",
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
    "topic": "Computer Vision",
    "type": "true-false",
    "prompt": "Statement: The OCR Read API in Azure AI Vision can only extract printed text, not handwritten text.",
    "promptDe": "Aussage: Die OCR Read API in Azure AI Vision kann nur gedruckten Text extrahieren, keinen handgeschriebenen.",
    "hint": "Think about whether modern OCR can handle different writing styles.",
    "hintDe": "Uberlege, ob moderne OCR verschiedene Schreibstile verarbeiten kann.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": false,
        "explanation": "The statement is incorrect — the OCR Read API can extract both printed and handwritten text, not just printed.",
        "explanationDe": "Die Aussage ist falsch — die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren, nicht nur gedruckten."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": true,
        "explanation": "The OCR Read API can extract both printed and handwritten text from images and documents.",
        "explanationDe": "Die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren."
      }
    ],
    "explanation": "The OCR Read API can extract both printed and handwritten text from images and documents.",
    "explanationDe": "Die OCR Read API kann sowohl gedruckten als auch handgeschriebenen Text extrahieren.",
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
    "type": "single-choice",
    "prompt": "A manufacturing company wants to identify defective parts on a production line using cameras. Which approach is most suitable?",
    "promptDe": "Ein Fertigungsunternehmen mochte fehlerhafte Teile an einer Produktionslinie per Kamera erkennen. Welcher Ansatz ist am besten geeignet?",
    "hint": "Think about training a model to distinguish between good and defective parts based on images.",
    "hintDe": "Uberlege, ein Modell zu trainieren, das anhand von Bildern zwischen guten und fehlerhaften Teilen unterscheidet.",
    "options": [
      {
        "id": "opt-0",
        "text": "Azure AI Translator",
        "textDe": "Azure AI Translator",
        "isCorrect": false,
        "explanation": "Translator handles language translation, not visual inspection.",
        "explanationDe": "Translator ubersetzt Sprachen."
      },
      {
        "id": "opt-1",
        "text": "Custom Vision trained on images of good and defective parts",
        "textDe": "Custom Vision trainiert mit Bildern von guten und fehlerhaften Teilen",
        "isCorrect": true,
        "explanation": "Custom Vision can be trained with labeled images of good and defective parts to classify items on a production line.",
        "explanationDe": "Custom Vision kann mit gelabelten Bildern guter und fehlerhafter Teile trainiert werden, um Artikel automatisch zu klassifizieren."
      },
      {
        "id": "opt-2",
        "text": "Azure AI Speech",
        "textDe": "Azure AI Speech",
        "isCorrect": false,
        "explanation": "Speech handles audio, not visual quality inspection.",
        "explanationDe": "Speech verarbeitet Audio."
      },
      {
        "id": "opt-3",
        "text": "Azure AI Search",
        "textDe": "Azure AI Search",
        "isCorrect": false,
        "explanation": "Search indexes documents, not production line images.",
        "explanationDe": "Search indexiert Dokumente."
      }
    ],
    "explanation": "Custom Vision can be trained with labeled images to perform automated visual quality inspection on a production line.",
    "explanationDe": "Custom Vision kann mit gelabelten Bildern guter und fehlerhafter Teile trainiert werden fur automatische visuelle Qualitatsprufung.",
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
    "topic": "Computer Vision",
    "type": "true-false",
    "prompt": "Statement: Custom Vision requires thousands of training images to create a working model.",
    "promptDe": "Aussage: Custom Vision benotigt tausende Trainingsbilder, um ein funktionierendes Modell zu erstellen.",
    "hint": "Consider how many images Custom Vision typically needs to get started.",
    "hintDe": "Uberlege, wie viele Bilder Custom Vision normalerweise zum Start benotigt.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": false,
        "explanation": "Custom Vision can train effective models with relatively few images per class.",
        "explanationDe": "Custom Vision kann mit wenigen Bildern pro Klasse effektive Modelle trainieren."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": true,
        "explanation": "Custom Vision can start with a small number of images per class and still produce useful models.",
        "explanationDe": "Custom Vision kann mit einer kleinen Anzahl von Bildern pro Klasse starten und nutzliche Modelle erstellen."
      }
    ],
    "explanation": "Custom Vision can train effective models with as few as a handful of images per class. It does not require thousands.",
    "explanationDe": "Custom Vision kann mit wenigen Bildern pro Klasse effektive Modelle trainieren. Es werden keine tausende benotigt.",
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
    "type": "single-choice",
    "prompt": "What is Azure AI Foundry?",
    "promptDe": "Was ist Azure AI Foundry?",
    "hint": "Think about a unified platform for building, evaluating, and deploying AI solutions.",
    "hintDe": "Denke an eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen von KI-Losungen.",
    "options": [
      {
        "id": "opt-0",
        "text": "A unified platform for building, testing, and deploying generative AI applications",
        "textDe": "Eine einheitliche Plattform zum Erstellen, Testen und Bereitstellen generativer KI-Anwendungen",
        "isCorrect": true,
        "explanation": "Azure AI Foundry (formerly Azure AI Studio) is a unified platform for building, evaluating, and deploying generative AI applications with prompt flow, model catalog, and safety tools.",
        "explanationDe": "Azure AI Foundry ist eine einheitliche Plattform zum Erstellen, Evaluieren und Bereitstellen generativer KI-Anwendungen."
      },
      {
        "id": "opt-1",
        "text": "A virtual machine service for hosting websites",
        "textDe": "Ein Virtual-Machine-Dienst zum Hosten von Websites",
        "isCorrect": false,
        "explanation": "Virtual machine hosting is Azure Virtual Machines.",
        "explanationDe": "VM-Hosting ist Azure Virtual Machines."
      },
      {
        "id": "opt-2",
        "text": "A relational database management system",
        "textDe": "Ein relationales Datenbankmanagementsystem",
        "isCorrect": false,
        "explanation": "Relational databases are Azure SQL.",
        "explanationDe": "Relationale Datenbanken sind Azure SQL."
      },
      {
        "id": "opt-3",
        "text": "A network security monitoring tool",
        "textDe": "Ein Netzwerksicherheits-Uberwachungstool",
        "isCorrect": false,
        "explanation": "Network security monitoring is Azure Network Watcher.",
        "explanationDe": "Netzwerkuberwachung ist Azure Network Watcher."
      }
    ],
    "explanation": "Azure AI Foundry is a unified platform for building, evaluating, and deploying generative AI applications, featuring prompt flow, model catalog, and safety tools.",
    "explanationDe": "Azure AI Foundry ist eine einheitliche Plattform zum Erstellen, Evaluieren und Bereitstellen generativer KI-Anwendungen mit Prompt Flow, Modellkatalog und Sicherheitstools.",
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
    "type": "single-choice",
    "prompt": "What is prompt flow in Azure AI Foundry used for?",
    "promptDe": "Wofur wird Prompt Flow in Azure AI Foundry verwendet?",
    "hint": "Think about visually chaining together prompts, tools, and logic into a workflow.",
    "hintDe": "Denke an das visuelle Verketten von Prompts, Tools und Logik in einem Workflow.",
    "options": [
      {
        "id": "opt-0",
        "text": "Designing and orchestrating multi-step LLM workflows visually",
        "textDe": "Visuelles Entwerfen und Orchestrieren mehrstufiger LLM-Workflows",
        "isCorrect": true,
        "explanation": "Prompt flow enables designing, testing, and deploying multi-step LLM-based workflows with a visual authoring experience.",
        "explanationDe": "Prompt Flow ermoglicht das Entwerfen, Testen und Bereitstellen mehrstufiger LLM-basierter Workflows mit einer visuellen Oberflache."
      },
      {
        "id": "opt-1",
        "text": "Managing Azure virtual network configurations",
        "textDe": "Verwaltung von Azure-Virtual-Network-Konfigurationen",
        "isCorrect": false,
        "explanation": "Network configuration is done in Azure Networking.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Creating relational database schemas",
        "textDe": "Erstellen relationaler Datenbank-Schemas",
        "isCorrect": false,
        "explanation": "Database schemas are managed in Azure SQL.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "Monitoring CPU usage on virtual machines",
        "textDe": "Uberwachung der CPU-Auslastung auf virtuellen Maschinen",
        "isCorrect": false,
        "explanation": "CPU monitoring is Azure Monitor.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Prompt flow in Azure AI Foundry allows you to visually design, test, and deploy multi-step workflows that chain LLM calls, tools, and logic together.",
    "explanationDe": "Prompt Flow in Azure AI Foundry ermoglicht das visuelle Entwerfen, Testen und Bereitstellen mehrstufiger LLM-basierter Workflows.",
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
    "type": "single-choice",
    "prompt": "Which capability does Azure AI Foundry provide for testing model quality before deployment?",
    "promptDe": "Welche Fahigkeit bietet Azure AI Foundry zum Testen der Modellqualitat vor der Bereitstellung?",
    "hint": "Think about measuring how well a model performs across various metrics before going to production.",
    "hintDe": "Denke an das Messen, wie gut ein Modell anhand verschiedener Metriken abschneidet, bevor es in Produktion geht.",
    "options": [
      {
        "id": "opt-0",
        "text": "Model evaluation with built-in metrics like groundedness and relevance",
        "textDe": "Modellevaluierung mit integrierten Metriken wie Groundedness und Relevanz",
        "isCorrect": true,
        "explanation": "Azure AI Foundry provides model evaluation tools that measure metrics like groundedness, relevance, coherence, and fluency.",
        "explanationDe": "Azure AI Foundry bietet Modellevaluierungstools, die Metriken wie Groundedness, Relevanz, Koharenz und Flussigkeit messen."
      },
      {
        "id": "opt-1",
        "text": "Automatic GPU scaling",
        "textDe": "Automatische GPU-Skalierung",
        "isCorrect": false,
        "explanation": "GPU scaling is an infrastructure concern, not model quality testing.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "DNS zone management",
        "textDe": "DNS-Zonenverwaltung",
        "isCorrect": false,
        "explanation": "DNS is unrelated to model evaluation.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "Virtual machine backup scheduling",
        "textDe": "Backup-Planung fur virtuelle Maschinen",
        "isCorrect": false,
        "explanation": "VM backups are unrelated to model quality.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Azure AI Foundry includes model evaluation tools that measure quality metrics such as groundedness, relevance, coherence, and fluency before deploying models.",
    "explanationDe": "Azure AI Foundry bietet Modellevaluierungstools, die Qualitatsmetriken wie Groundedness, Relevanz, Koharenz und Flussigkeit messen.",
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
    "type": "single-choice",
    "prompt": "How does content filtering work in Azure AI Foundry and Azure OpenAI Service?",
    "promptDe": "Wie funktioniert die Inhaltsfilterung in Azure AI Foundry und Azure OpenAI Service?",
    "hint": "Think about what happens to both the input prompts and the model outputs before they reach the user.",
    "hintDe": "Denke daran, was sowohl mit den Eingabe-Prompts als auch mit den Modellausgaben passiert, bevor sie den Nutzer erreichen.",
    "options": [
      {
        "id": "opt-0",
        "text": "It only filters user inputs, not model outputs",
        "textDe": "Es filtert nur Nutzereingaben, nicht Modellausgaben",
        "isCorrect": false,
        "explanation": "Content filtering applies to both input and output.",
        "explanationDe": "Inhaltsfilterung gilt fur Ein- und Ausgabe."
      },
      {
        "id": "opt-1",
        "text": "It filters both input prompts and model outputs for harmful content categories like violence, hate, and self-harm",
        "textDe": "Es filtert sowohl Eingabe-Prompts als auch Modellausgaben auf schadliche Inhaltskategorien wie Gewalt, Hass und Selbstverletzung",
        "isCorrect": true,
        "explanation": "Content filtering in Azure OpenAI scans both prompts and responses for categories including violence, hate, sexual content, and self-harm, blocking or flagging harmful content.",
        "explanationDe": "Inhaltsfilterung pruft sowohl Prompts als auch Antworten auf Kategorien wie Gewalt, Hass, sexuelle Inhalte und Selbstverletzung."
      },
      {
        "id": "opt-2",
        "text": "It only compresses the text to reduce token count",
        "textDe": "Es komprimiert nur den Text, um die Token-Anzahl zu reduzieren",
        "isCorrect": false,
        "explanation": "Compression is unrelated to content safety.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "It translates content to English before processing",
        "textDe": "Es ubersetzt Inhalte vor der Verarbeitung ins Englische",
        "isCorrect": false,
        "explanation": "Translation is a separate service.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Content filtering in Azure OpenAI and AI Foundry scans both user prompts and model responses for harmful content categories, helping ensure safe AI outputs.",
    "explanationDe": "Inhaltsfilterung in Azure OpenAI und AI Foundry pruft sowohl Nutzer-Prompts als auch Modellantworten auf schadliche Inhaltskategorien.",
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
    "type": "single-choice",
    "prompt": "Which models are available in Azure OpenAI Service?",
    "promptDe": "Welche Modelle sind in Azure OpenAI Service verfugbar?",
    "hint": "Think about the family of models Microsoft offers through its partnership with OpenAI.",
    "hintDe": "Denke an die Modellfamilien, die Microsoft durch seine Partnerschaft mit OpenAI anbietet.",
    "options": [
      {
        "id": "opt-0",
        "text": "GPT-4, GPT-4o, DALL-E, and Whisper",
        "textDe": "GPT-4, GPT-4o, DALL-E und Whisper",
        "isCorrect": true,
        "explanation": "Azure OpenAI Service offers GPT-4, GPT-4o, DALL-E for image generation, and Whisper for speech transcription, among other models.",
        "explanationDe": "Azure OpenAI Service bietet GPT-4, GPT-4o, DALL-E fur Bildgenerierung und Whisper fur Sprachtranskription an."
      },
      {
        "id": "opt-1",
        "text": "Only GPT-3 and nothing else",
        "textDe": "Nur GPT-3 und sonst nichts",
        "isCorrect": false,
        "explanation": "Azure OpenAI includes multiple model families beyond GPT-3.",
        "explanationDe": "Azure OpenAI umfasst mehrere Modellfamilien."
      },
      {
        "id": "opt-2",
        "text": "Only image models, no text models",
        "textDe": "Nur Bildmodelle, keine Textmodelle",
        "isCorrect": false,
        "explanation": "Azure OpenAI includes both text and image models.",
        "explanationDe": "Azure OpenAI umfasst sowohl Text- als auch Bildmodelle."
      },
      {
        "id": "opt-3",
        "text": "Only speech models",
        "textDe": "Nur Sprachmodelle",
        "isCorrect": false,
        "explanation": "Azure OpenAI includes text, image, and speech models.",
        "explanationDe": "Azure OpenAI umfasst Text-, Bild- und Sprachmodelle."
      }
    ],
    "explanation": "Azure OpenAI Service provides access to GPT-4, GPT-4o, DALL-E for images, Whisper for speech, and other models from OpenAI.",
    "explanationDe": "Azure OpenAI Service bietet Zugang zu GPT-4, GPT-4o, DALL-E fur Bildgenerierung und Whisper fur Sprachtranskription.",
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
    "type": "single-choice",
    "prompt": "What makes a multimodal AI model different from a text-only model?",
    "promptDe": "Was unterscheidet ein multimodales KI-Modell von einem reinen Textmodell?",
    "hint": "Think about how many types of input or output the model can handle.",
    "hintDe": "Denke daran, wie viele Arten von Eingaben oder Ausgaben das Modell verarbeiten kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "It can only process text input",
        "textDe": "Es kann nur Texteingaben verarbeiten",
        "isCorrect": false,
        "explanation": "Text-only processing is a unimodal model.",
        "explanationDe": "Nur-Text-Verarbeitung ist ein unimodales Modell."
      },
      {
        "id": "opt-1",
        "text": "It can process and generate multiple types of content such as text, images, and audio",
        "textDe": "Es kann mehrere Inhaltstypen wie Text, Bilder und Audio verarbeiten und generieren",
        "isCorrect": true,
        "explanation": "Multimodal models like GPT-4o can accept and produce multiple content types including text, images, and audio in a single interaction.",
        "explanationDe": "Multimodale Modelle wie GPT-4o konnen mehrere Inhaltstypen in einer einzigen Interaktion akzeptieren und produzieren."
      },
      {
        "id": "opt-2",
        "text": "It runs exclusively on mobile devices",
        "textDe": "Es lauft ausschliesslich auf Mobilgeraten",
        "isCorrect": false,
        "explanation": "Device platform is unrelated to modality.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "It can only generate images, not text",
        "textDe": "Es kann nur Bilder generieren, keinen Text",
        "isCorrect": false,
        "explanation": "Image-only generation would be a single-modal model.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Multimodal models can process and generate multiple types of content (text, images, audio) in a single interaction, unlike text-only models.",
    "explanationDe": "Multimodale Modelle konnen mehrere Inhaltstypen (Text, Bilder, Audio) in einer einzigen Interaktion verarbeiten und generieren.",
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
    "type": "single-choice",
    "prompt": "Which of the following is NOT a typical generative AI scenario?",
    "promptDe": "Welches der folgenden ist KEIN typisches Generative-AI-Szenario?",
    "hint": "Think about what generative AI creates versus what it classifies.",
    "hintDe": "Denke daran, was generative KI erstellt im Gegensatz zu dem, was sie klassifiziert.",
    "options": [
      {
        "id": "opt-0",
        "text": "Code generation from natural language descriptions",
        "textDe": "Codegenerierung aus naturlichsprachlichen Beschreibungen",
        "isCorrect": false,
        "explanation": "Code generation is a common generative AI use case.",
        "explanationDe": "Codegenerierung ist ein typischer Generative-AI-Anwendungsfall."
      },
      {
        "id": "opt-1",
        "text": "Summarizing long documents into key points",
        "textDe": "Zusammenfassung langer Dokumente in Kernpunkte",
        "isCorrect": false,
        "explanation": "Summarization is a core generative AI capability.",
        "explanationDe": "Zusammenfassung ist eine Kernfahigkeit generativer KI."
      },
      {
        "id": "opt-2",
        "text": "Sorting physical packages by weight on a conveyor belt",
        "textDe": "Sortieren physischer Pakete nach Gewicht auf einem Forderband",
        "isCorrect": true,
        "explanation": "Sorting physical packages by weight is a mechanical/industrial task that does not involve content generation and is not a generative AI scenario.",
        "explanationDe": "Das Sortieren physischer Pakete nach Gewicht ist eine mechanische Aufgabe und kein Generative-AI-Szenario."
      },
      {
        "id": "opt-3",
        "text": "Creating marketing copy from a product description",
        "textDe": "Erstellen von Marketingtexten aus einer Produktbeschreibung",
        "isCorrect": false,
        "explanation": "Content creation is a typical generative AI use case.",
        "explanationDe": "Inhaltserstellung ist ein typischer Generative-AI-Anwendungsfall."
      }
    ],
    "explanation": "Sorting physical packages by weight is a mechanical task, not a generative AI scenario. Generative AI is about creating new content like text, code, or images.",
    "explanationDe": "Das Sortieren physischer Pakete nach Gewicht ist eine mechanische Aufgabe, kein Generative-AI-Szenario. Generative KI erstellt neue Inhalte wie Text, Code oder Bilder.",
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
    "type": "single-choice",
    "prompt": "What is a hallucination in the context of generative AI?",
    "promptDe": "Was ist eine Halluzination im Kontext generativer KI?",
    "hint": "Think about when the model generates something that sounds plausible but is factually wrong.",
    "hintDe": "Denke daran, wenn das Modell etwas erzeugt, das plausibel klingt, aber faktisch falsch ist.",
    "options": [
      {
        "id": "opt-0",
        "text": "A model generating content that is factually incorrect or fabricated but presented as true",
        "textDe": "Ein Modell, das faktisch falsche oder erfundene Inhalte generiert, die als wahr prasentiert werden",
        "isCorrect": true,
        "explanation": "A hallucination occurs when a generative AI model produces content that sounds plausible but is factually incorrect, fabricated, or unsupported by the input data.",
        "explanationDe": "Eine Halluzination tritt auf, wenn ein generatives KI-Modell plausibel klingende, aber faktisch falsche oder erfundene Inhalte produziert."
      },
      {
        "id": "opt-1",
        "text": "A hardware error causing visual artifacts on screen",
        "textDe": "Ein Hardwarefehler, der visuelle Artefakte auf dem Bildschirm verursacht",
        "isCorrect": false,
        "explanation": "Hardware errors are unrelated to AI hallucinations.",
        "explanationDe": "Hardwarefehler sind nicht mit KI-Halluzinationen verwandt."
      },
      {
        "id": "opt-2",
        "text": "A type of data augmentation technique",
        "textDe": "Eine Art Datenaugmentierungstechnik",
        "isCorrect": false,
        "explanation": "Data augmentation is a training technique.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A method for improving model training speed",
        "textDe": "Eine Methode zur Verbesserung der Modelltrainingsgeschwindigkeit",
        "isCorrect": false,
        "explanation": "Training speed optimization is unrelated.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "A hallucination in generative AI is when the model produces plausible-sounding but factually incorrect or fabricated content. Grounding and RAG help mitigate this.",
    "explanationDe": "Eine Halluzination in generativer KI liegt vor, wenn das Modell plausibel klingende, aber faktisch falsche oder erfundene Inhalte produziert. Grounding und RAG helfen, dies zu reduzieren.",
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
    "type": "single-choice",
    "prompt": "What does DALL-E do in Azure OpenAI Service?",
    "promptDe": "Was macht DALL-E in Azure OpenAI Service?",
    "hint": "Think about creating visual content from written descriptions.",
    "hintDe": "Denke an das Erstellen visueller Inhalte aus geschriebenen Beschreibungen.",
    "options": [
      {
        "id": "opt-0",
        "text": "Transcribes audio recordings into text",
        "textDe": "Transkribiert Audioaufnahmen in Text",
        "isCorrect": false,
        "explanation": "Audio transcription is done by Whisper, not DALL-E.",
        "explanationDe": "Audiotranskription wird von Whisper durchgefuhrt."
      },
      {
        "id": "opt-1",
        "text": "Generates images from text descriptions",
        "textDe": "Generiert Bilder aus Textbeschreibungen",
        "isCorrect": true,
        "explanation": "DALL-E generates images based on natural language text descriptions, enabling creative image generation from prompts.",
        "explanationDe": "DALL-E generiert Bilder basierend auf naturlichsprachlichen Textbeschreibungen."
      },
      {
        "id": "opt-2",
        "text": "Translates text between languages",
        "textDe": "Ubersetzt Text zwischen Sprachen",
        "isCorrect": false,
        "explanation": "Translation is handled by Azure AI Translator.",
        "explanationDe": "Ubersetzung ist Azure AI Translator."
      },
      {
        "id": "opt-3",
        "text": "Detects faces in photographs",
        "textDe": "Erkennt Gesichter in Fotografien",
        "isCorrect": false,
        "explanation": "Face detection is done by Azure AI Face.",
        "explanationDe": "Gesichtserkennung ist Azure AI Face."
      }
    ],
    "explanation": "DALL-E in Azure OpenAI Service generates images from natural language text descriptions, enabling creative visual content creation.",
    "explanationDe": "DALL-E in Azure OpenAI Service generiert Bilder aus naturlichsprachlichen Textbeschreibungen und ermoglicht kreative visuelle Inhaltserstellung.",
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
    "type": "single-choice",
    "prompt": "How does Microsoft Copilot integrate with Microsoft 365 applications?",
    "promptDe": "Wie integriert sich Microsoft Copilot in Microsoft 365-Anwendungen?",
    "hint": "Think about an AI assistant embedded directly within the productivity tools you already use.",
    "hintDe": "Denke an einen KI-Assistenten, der direkt in die Produktivitatstools eingebettet ist, die du bereits nutzt.",
    "options": [
      {
        "id": "opt-0",
        "text": "It replaces Microsoft 365 entirely with a new application",
        "textDe": "Es ersetzt Microsoft 365 vollstandig durch eine neue Anwendung",
        "isCorrect": false,
        "explanation": "Copilot enhances existing apps, it does not replace them.",
        "explanationDe": "Copilot erweitert bestehende Apps."
      },
      {
        "id": "opt-1",
        "text": "It acts as an AI assistant within apps like Word, Excel, and Teams, using LLMs with access to your organizational data",
        "textDe": "Es fungiert als KI-Assistent in Apps wie Word, Excel und Teams und nutzt LLMs mit Zugriff auf Organisationsdaten",
        "isCorrect": true,
        "explanation": "Microsoft Copilot is embedded within Microsoft 365 apps and uses LLMs grounded in organizational data to assist with tasks like drafting, summarizing, and analyzing.",
        "explanationDe": "Microsoft Copilot ist in Microsoft 365-Apps eingebettet und nutzt LLMs mit Organisationsdaten fur Aufgaben wie Entwurf, Zusammenfassung und Analyse."
      },
      {
        "id": "opt-2",
        "text": "It only works as a standalone web application",
        "textDe": "Es funktioniert nur als eigenstandige Webanwendung",
        "isCorrect": false,
        "explanation": "Copilot is integrated into Microsoft 365 apps.",
        "explanationDe": "Copilot ist in Microsoft 365-Apps integriert."
      },
      {
        "id": "opt-3",
        "text": "It only generates images, not text",
        "textDe": "Es generiert nur Bilder, keinen Text",
        "isCorrect": false,
        "explanation": "Copilot primarily assists with text-based productivity tasks.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Microsoft Copilot is embedded within Microsoft 365 apps like Word, Excel, and Teams, using LLMs grounded in organizational data to assist with productivity tasks.",
    "explanationDe": "Microsoft Copilot ist in Microsoft 365-Apps wie Word, Excel und Teams eingebettet und nutzt LLMs mit Zugriff auf Organisationsdaten fur Produktivitatsaufgaben.",
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
    "type": "single-choice",
    "prompt": "What is the key difference between fine-tuning and prompt engineering?",
    "promptDe": "Was ist der wesentliche Unterschied zwischen Fine-Tuning und Prompt Engineering?",
    "hint": "One modifies the model itself, the other only changes how you communicate with it.",
    "hintDe": "Eines verandert das Modell selbst, das andere andert nur, wie man mit ihm kommuniziert.",
    "options": [
      {
        "id": "opt-0",
        "text": "Fine-tuning changes the model weights with additional training data; prompt engineering crafts better instructions without changing the model",
        "textDe": "Fine-Tuning andert die Modellgewichte mit zusatzlichen Trainingsdaten; Prompt Engineering erstellt bessere Anweisungen, ohne das Modell zu andern",
        "isCorrect": true,
        "explanation": "Fine-tuning modifies the model weights by training on additional data, while prompt engineering improves results by crafting better prompts without changing the model itself.",
        "explanationDe": "Fine-Tuning modifiziert die Modellgewichte durch Training mit zusatzlichen Daten, wahrend Prompt Engineering Ergebnisse durch bessere Prompts verbessert, ohne das Modell zu andern."
      },
      {
        "id": "opt-1",
        "text": "Prompt engineering requires retraining the model; fine-tuning does not",
        "textDe": "Prompt Engineering erfordert Neutraining des Modells; Fine-Tuning nicht",
        "isCorrect": false,
        "explanation": "This reverses the definitions.",
        "explanationDe": "Dies vertauscht die Definitionen."
      },
      {
        "id": "opt-2",
        "text": "They are the same thing with different names",
        "textDe": "Es ist dasselbe mit verschiedenen Namen",
        "isCorrect": false,
        "explanation": "They are fundamentally different approaches.",
        "explanationDe": "Es sind grundlegend verschiedene Ansatze."
      },
      {
        "id": "opt-3",
        "text": "Fine-tuning only works with images; prompt engineering only works with text",
        "textDe": "Fine-Tuning funktioniert nur mit Bildern; Prompt Engineering nur mit Text",
        "isCorrect": false,
        "explanation": "Both can apply to various modalities.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Fine-tuning modifies the model weights by training on domain-specific data. Prompt engineering improves results by crafting better prompts without changing the model.",
    "explanationDe": "Fine-Tuning verandert die Modellgewichte durch Training mit zusatzlichen Daten. Prompt Engineering verbessert Ergebnisse durch bessere Prompts, ohne das Modell zu andern.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: Azure AI Foundry includes a model catalog that lets you browse and deploy models from Microsoft, OpenAI, and open-source providers.",
    "promptDe": "Aussage: Azure AI Foundry enthalt einen Modellkatalog, mit dem man Modelle von Microsoft, OpenAI und Open-Source-Anbietern durchsuchen und bereitstellen kann.",
    "hint": "Consider whether Azure AI Foundry is limited to Microsoft models or supports a broader selection.",
    "hintDe": "Uberlege, ob Azure AI Foundry auf Microsoft-Modelle beschrankt ist oder eine breitere Auswahl unterstutzt.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Azure AI Foundry features a model catalog with models from multiple providers including Microsoft, OpenAI, and open-source.",
        "explanationDe": "Azure AI Foundry bietet einen Modellkatalog mit Modellen von mehreren Anbietern einschliesslich Microsoft, OpenAI und Open-Source."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "Azure AI Foundry includes a model catalog with models from multiple providers.",
        "explanationDe": "Azure AI Foundry enthalt einen Modellkatalog mit Modellen von mehreren Anbietern."
      }
    ],
    "explanation": "Azure AI Foundry features a model catalog with models from Microsoft, OpenAI, Meta, Hugging Face, and other providers.",
    "explanationDe": "Azure AI Foundry bietet einen Modellkatalog mit Modellen von Microsoft, OpenAI, Meta, Hugging Face und anderen Anbietern.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: Grounding techniques like RAG help reduce hallucinations by providing the model with relevant source data.",
    "promptDe": "Aussage: Grounding-Techniken wie RAG helfen, Halluzinationen zu reduzieren, indem sie dem Modell relevante Quelldaten bereitstellen.",
    "hint": "Think about what happens when a model has access to factual reference material when generating answers.",
    "hintDe": "Denke daran, was passiert, wenn ein Modell beim Generieren von Antworten Zugriff auf faktisches Referenzmaterial hat.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "RAG retrieves relevant documents and includes them in the prompt, helping ground the model's answers in factual data.",
        "explanationDe": "RAG ruft relevante Dokumente ab und fugt sie in den Prompt ein, was hilft, die Antworten des Modells auf faktischen Daten zu grunden."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "RAG provides factual context that helps reduce hallucinations.",
        "explanationDe": "RAG liefert faktischen Kontext, der Halluzinationen reduziert."
      }
    ],
    "explanation": "RAG (Retrieval-Augmented Generation) retrieves relevant documents and includes them in the prompt, helping the model base its answers on factual data and reducing hallucinations.",
    "explanationDe": "RAG (Retrieval-Augmented Generation) ruft relevante Dokumente ab und fugt sie in den Prompt ein, sodass das Modell Antworten auf faktischen Daten basiert und Halluzinationen reduziert werden.",
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
    "type": "single-choice",
    "prompt": "Which model in Azure OpenAI Service is specifically designed for audio transcription?",
    "promptDe": "Welches Modell in Azure OpenAI Service ist speziell fur Audio-Transkription konzipiert?",
    "hint": "Think about which OpenAI model converts spoken language into written text.",
    "hintDe": "Uberlege, welches OpenAI-Modell gesprochene Sprache in geschriebenen Text umwandelt.",
    "options": [
      {
        "id": "opt-0",
        "text": "GPT-4",
        "textDe": "GPT-4",
        "isCorrect": false,
        "explanation": "GPT-4 is a text and multimodal model, not specifically designed for audio transcription.",
        "explanationDe": "GPT-4 ist ein Text- und Multimodal-Modell, nicht speziell fur Audio-Transkription."
      },
      {
        "id": "opt-1",
        "text": "DALL-E",
        "textDe": "DALL-E",
        "isCorrect": false,
        "explanation": "DALL-E generates images from text, it does not transcribe audio.",
        "explanationDe": "DALL-E generiert Bilder aus Text."
      },
      {
        "id": "opt-2",
        "text": "Whisper",
        "textDe": "Whisper",
        "isCorrect": true,
        "explanation": "Whisper is OpenAI's speech recognition model available in Azure OpenAI Service, designed for accurate audio transcription.",
        "explanationDe": "Whisper ist OpenAIs Spracherkennungsmodell, verfugbar in Azure OpenAI Service, fur genaue Audio-Transkription konzipiert."
      },
      {
        "id": "opt-3",
        "text": "Ada",
        "textDe": "Ada",
        "isCorrect": false,
        "explanation": "Ada is an embedding model, not an audio transcription model.",
        "explanationDe": "Ada ist ein Embedding-Modell."
      }
    ],
    "explanation": "Whisper is OpenAI's speech recognition model, available through Azure OpenAI Service, specifically designed for transcribing audio into text.",
    "explanationDe": "Whisper ist OpenAIs Spracherkennungsmodell, verfugbar uber Azure OpenAI Service, speziell fur die Transkription von Audio in Text konzipiert.",
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
    "topic": "Generative AI",
    "type": "true-false",
    "prompt": "Statement: GPT-4o is a multimodal model that can accept both text and image inputs.",
    "promptDe": "Aussage: GPT-4o ist ein multimodales Modell, das sowohl Text- als auch Bildeingaben akzeptieren kann.",
    "hint": "Consider what the 'o' in GPT-4o stands for and what capabilities it adds.",
    "hintDe": "Uberlege, wofur das 'o' in GPT-4o steht und welche Fahigkeiten es hinzufugt.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "GPT-4o is a multimodal model that can process text, images, and audio inputs.",
        "explanationDe": "GPT-4o ist ein multimodales Modell, das Text-, Bild- und Audioeingaben verarbeiten kann."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "GPT-4o is a multimodal model capable of processing multiple input types.",
        "explanationDe": "GPT-4o ist ein multimodales Modell, das mehrere Eingabetypen verarbeiten kann."
      }
    ],
    "explanation": "GPT-4o (omni) is a multimodal model that can process text, images, and audio inputs, making it more versatile than text-only models.",
    "explanationDe": "GPT-4o (omni) ist ein multimodales Modell, das Text-, Bild- und Audioeingaben verarbeiten kann.",
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
    "type": "single-choice",
    "prompt": "What can Azure AI Translator do besides translating text between languages?",
    "promptDe": "Was kann Azure AI Translator neben der Ubersetzung von Text zwischen Sprachen?",
    "hint": "Think about what information the service can determine about a text before translating it.",
    "hintDe": "Uberlege, welche Informationen der Dienst uber einen Text ermitteln kann, bevor er ihn ubersetzt.",
    "options": [
      {
        "id": "opt-0",
        "text": "Only translate from English to French",
        "textDe": "Nur von Englisch nach Franzosisch ubersetzen",
        "isCorrect": false,
        "explanation": "Azure AI Translator supports dozens of language pairs, not just English to French.",
        "explanationDe": "Azure AI Translator unterstutzt Dutzende von Sprachpaaren."
      },
      {
        "id": "opt-1",
        "text": "Detect the language of input text and translate entire documents while preserving formatting",
        "textDe": "Die Sprache des Eingabetexts erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen",
        "isCorrect": true,
        "explanation": "Azure AI Translator can detect the source language automatically and translate entire documents while preserving their original formatting and structure.",
        "explanationDe": "Azure AI Translator kann die Quellsprache automatisch erkennen und ganze Dokumente unter Beibehaltung der Formatierung ubersetzen."
      },
      {
        "id": "opt-2",
        "text": "Generate images from text",
        "textDe": "Bilder aus Text generieren",
        "isCorrect": false,
        "explanation": "Image generation is done by DALL-E.",
        "explanationDe": "Bildgenerierung ist DALL-E."
      },
      {
        "id": "opt-3",
        "text": "Train custom speech models",
        "textDe": "Benutzerdefinierte Sprachmodelle trainieren",
        "isCorrect": false,
        "explanation": "Custom speech models are part of Azure AI Speech.",
        "explanationDe": "Benutzerdefinierte Sprachmodelle sind Teil von Azure AI Speech."
      }
    ],
    "explanation": "Azure AI Translator can detect the source language, translate text and entire documents across dozens of language pairs, and preserve document formatting.",
    "explanationDe": "Azure AI Translator kann die Quellsprache erkennen, Text und ganze Dokumente uber Dutzende von Sprachpaaren ubersetzen und die Dokumentformatierung beibehalten.",
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
    "type": "single-choice",
    "prompt": "What is Conversational Language Understanding (CLU) in Azure AI Language used for?",
    "promptDe": "Wofur wird Conversational Language Understanding (CLU) in Azure AI Language verwendet?",
    "hint": "Think about extracting the user's intention and relevant details from a natural language sentence.",
    "hintDe": "Denke an das Extrahieren der Absicht des Nutzers und relevanter Details aus einem naturlichsprachlichen Satz.",
    "options": [
      {
        "id": "opt-0",
        "text": "Extracting intents and entities from natural language utterances to understand what a user wants",
        "textDe": "Extrahieren von Intents und Entitaten aus naturlichsprachlichen Ausserungen, um zu verstehen, was ein Nutzer mochte",
        "isCorrect": true,
        "explanation": "CLU extracts intents (what the user wants to do) and entities (relevant details) from natural language utterances, enabling applications to understand user requests.",
        "explanationDe": "CLU extrahiert Intents und Entitaten aus naturlichsprachlichen Ausserungen, damit Anwendungen Nutzeranfragen verstehen konnen."
      },
      {
        "id": "opt-1",
        "text": "Generating images from spoken commands",
        "textDe": "Generieren von Bildern aus gesprochenen Befehlen",
        "isCorrect": false,
        "explanation": "Image generation is not a CLU capability.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Translating audio between languages in real time",
        "textDe": "Ubersetzen von Audio zwischen Sprachen in Echtzeit",
        "isCorrect": false,
        "explanation": "Real-time audio translation is Azure AI Speech translation.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "Indexing documents for keyword search",
        "textDe": "Indexieren von Dokumenten fur Schlusselwortsuche",
        "isCorrect": false,
        "explanation": "Document indexing is Azure AI Search.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "CLU extracts intents (what the user wants) and entities (key details) from natural language, enabling applications to understand and respond to user requests.",
    "explanationDe": "CLU extrahiert Intents (was der Nutzer will) und Entitaten (wichtige Details) aus naturlicher Sprache, damit Anwendungen Nutzeranfragen verstehen konnen.",
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
    "type": "single-choice",
    "prompt": "What is custom question answering in Azure AI Language?",
    "promptDe": "Was ist benutzerdefiniertes Frage-Antwort in Azure AI Language?",
    "hint": "Think about creating a knowledge base from your own documents that can answer user questions.",
    "hintDe": "Denke an das Erstellen einer Wissensdatenbank aus eigenen Dokumenten, die Nutzerfragen beantworten kann.",
    "options": [
      {
        "id": "opt-0",
        "text": "A feature that lets you create question-answer knowledge bases from your documents, FAQs, and URLs",
        "textDe": "Eine Funktion zum Erstellen von Frage-Antwort-Wissensdatenbanken aus eigenen Dokumenten, FAQs und URLs",
        "isCorrect": true,
        "explanation": "Custom question answering lets you build knowledge bases from documents, FAQs, and URLs that can then answer user questions in natural language.",
        "explanationDe": "Benutzerdefiniertes Frage-Antwort ermoglicht das Erstellen von Wissensdatenbanken aus Dokumenten, FAQs und URLs zur Beantwortung von Nutzerfragen."
      },
      {
        "id": "opt-1",
        "text": "A service that generates random quiz questions",
        "textDe": "Ein Dienst, der zufallige Quizfragen generiert",
        "isCorrect": false,
        "explanation": "Custom QA answers real user questions from curated knowledge.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "A tool for translating questions between languages",
        "textDe": "Ein Tool zum Ubersetzen von Fragen zwischen Sprachen",
        "isCorrect": false,
        "explanation": "Translation is Azure AI Translator.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A feature that detects the emotional tone of questions",
        "textDe": "Eine Funktion zur Erkennung des emotionalen Tons von Fragen",
        "isCorrect": false,
        "explanation": "Emotion detection is sentiment analysis.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Custom question answering in Azure AI Language lets you build knowledge bases from documents, FAQs, and URLs to answer user questions automatically.",
    "explanationDe": "Benutzerdefiniertes Frage-Antwort in Azure AI Language ermoglicht das Erstellen von Wissensdatenbanken aus Dokumenten, FAQs und URLs zur automatischen Beantwortung von Nutzerfragen.",
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
    "type": "single-choice",
    "prompt": "What is the difference between real-time and batch transcription in Azure AI Speech?",
    "promptDe": "Was ist der Unterschied zwischen Echtzeit- und Batch-Transkription in Azure AI Speech?",
    "hint": "Think about processing audio as it happens versus processing pre-recorded audio files.",
    "hintDe": "Denke an die Verarbeitung von Audio wahrend es passiert versus die Verarbeitung voraufgezeichneter Audiodateien.",
    "options": [
      {
        "id": "opt-0",
        "text": "Real-time transcription processes live audio streams; batch transcription processes pre-recorded audio files asynchronously",
        "textDe": "Echtzeit-Transkription verarbeitet Live-Audiostreams; Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron",
        "isCorrect": true,
        "explanation": "Real-time transcription processes audio as it is spoken, while batch transcription processes pre-recorded audio files asynchronously, ideal for large volumes of recordings.",
        "explanationDe": "Echtzeit-Transkription verarbeitet Audio wahrend es gesprochen wird, wahrend Batch-Transkription voraufgezeichnete Dateien asynchron verarbeitet."
      },
      {
        "id": "opt-1",
        "text": "Batch transcription is always faster than real-time transcription",
        "textDe": "Batch-Transkription ist immer schneller als Echtzeit-Transkription",
        "isCorrect": false,
        "explanation": "Batch processes large volumes but is not necessarily faster per file.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Real-time transcription only works with English; batch supports all languages",
        "textDe": "Echtzeit-Transkription funktioniert nur mit Englisch; Batch unterstutzt alle Sprachen",
        "isCorrect": false,
        "explanation": "Both support multiple languages.",
        "explanationDe": "Beide unterstutzen mehrere Sprachen."
      },
      {
        "id": "opt-3",
        "text": "There is no difference; they produce identical results at the same speed",
        "textDe": "Es gibt keinen Unterschied; sie liefern identische Ergebnisse mit gleicher Geschwindigkeit",
        "isCorrect": false,
        "explanation": "They serve different use cases.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Real-time transcription processes live audio as it is spoken. Batch transcription processes pre-recorded audio files asynchronously, suitable for large volumes.",
    "explanationDe": "Echtzeit-Transkription verarbeitet Live-Audio wahrend es gesprochen wird. Batch-Transkription verarbeitet voraufgezeichnete Audiodateien asynchron, geeignet fur grosse Mengen.",
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
    "type": "single-choice",
    "prompt": "What is Custom Neural Voice in Azure AI Speech?",
    "promptDe": "Was ist Custom Neural Voice in Azure AI Speech?",
    "hint": "Think about creating a unique, branded synthetic voice for your organization.",
    "hintDe": "Denke an das Erstellen einer einzigartigen, markenbezogenen synthetischen Stimme fur deine Organisation.",
    "options": [
      {
        "id": "opt-0",
        "text": "A feature that creates a custom synthetic voice using your own audio recordings for text-to-speech",
        "textDe": "Eine Funktion zur Erstellung einer benutzerdefinierten synthetischen Stimme mit eigenen Audioaufnahmen fur Text-to-Speech",
        "isCorrect": true,
        "explanation": "Custom Neural Voice allows you to create a unique, branded synthetic voice by training a model on your own voice recordings for use in text-to-speech applications.",
        "explanationDe": "Custom Neural Voice ermoglicht das Erstellen einer einzigartigen synthetischen Stimme durch Training mit eigenen Sprachaufnahmen."
      },
      {
        "id": "opt-1",
        "text": "A service that only plays pre-recorded audio clips",
        "textDe": "Ein Dienst, der nur voraufgezeichnete Audioclips abspielt",
        "isCorrect": false,
        "explanation": "Custom Neural Voice generates new speech, it does not play recordings.",
        "explanationDe": "Custom Neural Voice generiert neue Sprache."
      },
      {
        "id": "opt-2",
        "text": "A tool for translating spoken language between two people",
        "textDe": "Ein Tool zur Ubersetzung gesprochener Sprache zwischen zwei Personen",
        "isCorrect": false,
        "explanation": "Speech translation is a separate feature.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A feature for detecting keywords in audio",
        "textDe": "Eine Funktion zur Erkennung von Schlusselwortern in Audio",
        "isCorrect": false,
        "explanation": "Keyword detection is a different Speech capability.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Custom Neural Voice in Azure AI Speech lets you create a unique synthetic voice by training on your own voice recordings, enabling branded text-to-speech experiences.",
    "explanationDe": "Custom Neural Voice in Azure AI Speech ermoglicht das Erstellen einer einzigartigen synthetischen Stimme durch Training mit eigenen Sprachaufnahmen fur Text-to-Speech-Anwendungen.",
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
    "type": "single-choice",
    "prompt": "Which Azure AI Language feature can automatically detect the language of a given text?",
    "promptDe": "Welche Azure AI Language-Funktion kann automatisch die Sprache eines gegebenen Textes erkennen?",
    "hint": "Think about which feature determines whether text is written in English, German, French, or another language.",
    "hintDe": "Uberlege, welche Funktion bestimmt, ob ein Text auf Englisch, Deutsch, Franzosisch oder einer anderen Sprache geschrieben ist.",
    "options": [
      {
        "id": "opt-0",
        "text": "Named Entity Recognition",
        "textDe": "Named Entity Recognition",
        "isCorrect": false,
        "explanation": "NER extracts entities like names and locations, it does not identify the language.",
        "explanationDe": "NER extrahiert Entitaten wie Namen und Orte, identifiziert nicht die Sprache."
      },
      {
        "id": "opt-1",
        "text": "Language detection",
        "textDe": "Spracherkennung",
        "isCorrect": true,
        "explanation": "Language detection in Azure AI Language identifies the language of input text and returns a language code with a confidence score.",
        "explanationDe": "Spracherkennung in Azure AI Language identifiziert die Sprache des Eingabetexts und gibt einen Sprachcode mit Konfidenzwert zuruck."
      },
      {
        "id": "opt-2",
        "text": "Key Phrase Extraction",
        "textDe": "Key Phrase Extraction",
        "isCorrect": false,
        "explanation": "Key Phrase Extraction identifies central themes, not the language.",
        "explanationDe": "Key Phrase Extraction identifiziert zentrale Themen, nicht die Sprache."
      },
      {
        "id": "opt-3",
        "text": "Text-to-Speech",
        "textDe": "Text-to-Speech",
        "isCorrect": false,
        "explanation": "Text-to-Speech converts text to spoken audio, it does not detect the language of text.",
        "explanationDe": "Text-to-Speech wandelt Text in gesprochenes Audio um."
      }
    ],
    "explanation": "Language detection in Azure AI Language identifies the language of input text and returns a language code with a confidence score.",
    "explanationDe": "Spracherkennung in Azure AI Language identifiziert die Sprache des Eingabetexts und gibt einen Sprachcode mit Konfidenzwert zuruck.",
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
    "type": "single-choice",
    "prompt": "What is custom text classification in Azure AI Language?",
    "promptDe": "Was ist benutzerdefinierte Textklassifizierung in Azure AI Language?",
    "hint": "Think about training a model to assign your own domain-specific categories to text documents.",
    "hintDe": "Denke an das Trainieren eines Modells, das deine eigenen domainspezifischen Kategorien auf Textdokumente anwendet.",
    "options": [
      {
        "id": "opt-0",
        "text": "Training a model to categorize text into your own custom-defined classes",
        "textDe": "Trainieren eines Modells zur Kategorisierung von Text in eigene benutzerdefinierte Klassen",
        "isCorrect": true,
        "explanation": "Custom text classification lets you define your own categories and train a model to automatically classify text documents into those categories.",
        "explanationDe": "Benutzerdefinierte Textklassifizierung ermoglicht es, eigene Kategorien zu definieren und ein Modell zur automatischen Klassifizierung von Textdokumenten zu trainieren."
      },
      {
        "id": "opt-1",
        "text": "Automatically translating text into all available languages",
        "textDe": "Automatisches Ubersetzen von Text in alle verfugbaren Sprachen",
        "isCorrect": false,
        "explanation": "Translation is Azure AI Translator.",
        "explanationDe": "Ubersetzung ist Azure AI Translator."
      },
      {
        "id": "opt-2",
        "text": "Converting text to speech with a custom voice",
        "textDe": "Umwandlung von Text in Sprache mit einer benutzerdefinierten Stimme",
        "isCorrect": false,
        "explanation": "Custom voice is Azure AI Speech.",
        "explanationDe": "Benutzerdefinierte Stimme ist Azure AI Speech."
      },
      {
        "id": "opt-3",
        "text": "Extracting tables from PDF documents",
        "textDe": "Extrahieren von Tabellen aus PDF-Dokumenten",
        "isCorrect": false,
        "explanation": "Table extraction is Azure AI Document Intelligence.",
        "explanationDe": "Tabellenextraktion ist Azure AI Document Intelligence."
      }
    ],
    "explanation": "Custom text classification in Azure AI Language lets you define your own categories and train a model to automatically classify text documents.",
    "explanationDe": "Benutzerdefinierte Textklassifizierung in Azure AI Language ermoglicht es, eigene Kategorien zu definieren und ein Modell zu trainieren, das Textdokumente automatisch klassifiziert.",
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
    "topic": "NLP",
    "type": "true-false",
    "prompt": "Statement: Azure AI Translator can translate entire documents while preserving their original formatting.",
    "promptDe": "Aussage: Azure AI Translator kann ganze Dokumente ubersetzen und dabei die ursprungliche Formatierung beibehalten.",
    "hint": "Consider whether the translation service handles full documents or only individual sentences.",
    "hintDe": "Uberlege, ob der Ubersetzungsdienst ganze Dokumente oder nur einzelne Satze verarbeitet.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Azure AI Translator's document translation can translate entire documents while preserving formatting.",
        "explanationDe": "Die Dokumentubersetzung von Azure AI Translator kann ganze Dokumente unter Beibehaltung der Formatierung ubersetzen."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "Azure AI Translator supports full document translation with format preservation.",
        "explanationDe": "Azure AI Translator unterstutzt vollstandige Dokumentubersetzung mit Formatbeibehaltung."
      }
    ],
    "explanation": "Azure AI Translator's document translation feature can translate entire documents in supported formats while preserving the original document structure and formatting.",
    "explanationDe": "Die Dokumentubersetzungsfunktion von Azure AI Translator kann ganze Dokumente in unterstutzten Formaten ubersetzen und die ursprungliche Dokumentstruktur und Formatierung beibehalten.",
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
    "type": "single-choice",
    "prompt": "What is the difference between a compute instance and a compute cluster in Azure Machine Learning?",
    "promptDe": "Was ist der Unterschied zwischen einer Compute-Instanz und einem Compute-Cluster in Azure Machine Learning?",
    "hint": "Think about a personal development workstation versus a scalable pool of machines for training jobs.",
    "hintDe": "Denke an eine personliche Entwicklungsworkstation versus einen skalierbaren Pool von Maschinen fur Trainingsjobs.",
    "options": [
      {
        "id": "opt-0",
        "text": "A compute instance is a single VM for development; a compute cluster is a scalable pool of VMs for training jobs",
        "textDe": "Eine Compute-Instanz ist eine einzelne VM fur Entwicklung; ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs",
        "isCorrect": true,
        "explanation": "A compute instance is a single managed VM for interactive development and notebooks, while a compute cluster is a scalable group of VMs for running training jobs.",
        "explanationDe": "Eine Compute-Instanz ist eine einzelne verwaltete VM fur interaktive Entwicklung, wahrend ein Compute-Cluster eine skalierbare Gruppe von VMs fur Trainingsjobs ist."
      },
      {
        "id": "opt-1",
        "text": "A compute cluster is for development; a compute instance is for training",
        "textDe": "Ein Compute-Cluster ist fur Entwicklung; eine Compute-Instanz ist fur Training",
        "isCorrect": false,
        "explanation": "This reverses the definitions.",
        "explanationDe": "Dies vertauscht die Definitionen."
      },
      {
        "id": "opt-2",
        "text": "They are identical but with different pricing tiers",
        "textDe": "Sie sind identisch, aber mit verschiedenen Preisstufen",
        "isCorrect": false,
        "explanation": "They serve different purposes.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A compute instance can only run notebooks; a compute cluster can only run pipelines",
        "textDe": "Eine Compute-Instanz kann nur Notebooks ausfuhren; ein Compute-Cluster nur Pipelines",
        "isCorrect": false,
        "explanation": "Both can run various workloads.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "A compute instance is a single managed VM for development and notebooks. A compute cluster is a scalable pool of VMs for running training jobs efficiently.",
    "explanationDe": "Eine Compute-Instanz ist eine einzelne verwaltete VM fur Entwicklung und Notebooks. Ein Compute-Cluster ist ein skalierbarer Pool von VMs fur Trainingsjobs.",
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
    "type": "single-choice",
    "prompt": "What is the Azure ML model registry used for?",
    "promptDe": "Wofur wird die Azure ML-Modellregistrierung verwendet?",
    "hint": "Think about a central place to track, version, and manage trained models.",
    "hintDe": "Denke an einen zentralen Ort zum Verfolgen, Versionieren und Verwalten trainierter Modelle.",
    "options": [
      {
        "id": "opt-0",
        "text": "A centralized repository for registering, versioning, and managing trained models",
        "textDe": "Ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle",
        "isCorrect": true,
        "explanation": "The model registry is a centralized repository where you register, version, and manage trained ML models, making them available for deployment.",
        "explanationDe": "Die Modellregistrierung ist ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter ML-Modelle."
      },
      {
        "id": "opt-1",
        "text": "A tool for creating virtual networks",
        "textDe": "Ein Tool zum Erstellen virtueller Netzwerke",
        "isCorrect": false,
        "explanation": "Virtual networking is an Azure infrastructure service.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "A database for storing raw training data",
        "textDe": "Eine Datenbank zum Speichern roher Trainingsdaten",
        "isCorrect": false,
        "explanation": "Data storage is handled by data assets and datastores.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A service for deploying web applications",
        "textDe": "Ein Dienst zum Bereitstellen von Webanwendungen",
        "isCorrect": false,
        "explanation": "Web app deployment is Azure App Service.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "The Azure ML model registry is a centralized repository for registering, versioning, and managing trained models, making them available for deployment.",
    "explanationDe": "Die Azure ML-Modellregistrierung ist ein zentrales Repository zum Registrieren, Versionieren und Verwalten trainierter Modelle fur die Bereitstellung.",
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
    "type": "single-choice",
    "prompt": "What is the difference between real-time and batch endpoints in Azure Machine Learning?",
    "promptDe": "Was ist der Unterschied zwischen Echtzeit- und Batch-Endpunkten in Azure Machine Learning?",
    "hint": "Think about instant responses for individual requests versus processing many requests at once.",
    "hintDe": "Denke an sofortige Antworten fur einzelne Anfragen versus das Verarbeiten vieler Anfragen auf einmal.",
    "options": [
      {
        "id": "opt-0",
        "text": "Real-time endpoints return predictions immediately for individual requests; batch endpoints process large datasets asynchronously",
        "textDe": "Echtzeit-Endpunkte geben Vorhersagen sofort fur einzelne Anfragen zuruck; Batch-Endpunkte verarbeiten grosse Datensatze asynchron",
        "isCorrect": true,
        "explanation": "Real-time endpoints serve predictions instantly for each request, while batch endpoints process large datasets asynchronously and return results when complete.",
        "explanationDe": "Echtzeit-Endpunkte liefern Vorhersagen sofort pro Anfrage, wahrend Batch-Endpunkte grosse Datensatze asynchron verarbeiten."
      },
      {
        "id": "opt-1",
        "text": "Batch endpoints are faster than real-time endpoints",
        "textDe": "Batch-Endpunkte sind schneller als Echtzeit-Endpunkte",
        "isCorrect": false,
        "explanation": "Real-time is faster per request; batch handles volume.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Real-time endpoints only support image data; batch endpoints only support text data",
        "textDe": "Echtzeit-Endpunkte unterstutzen nur Bilddaten; Batch-Endpunkte nur Textdaten",
        "isCorrect": false,
        "explanation": "Both support various data types.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "There is no difference; they are interchangeable",
        "textDe": "Es gibt keinen Unterschied; sie sind austauschbar",
        "isCorrect": false,
        "explanation": "They serve different use cases.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Real-time endpoints return predictions immediately for each request. Batch endpoints process large datasets asynchronously, returning results when all processing is complete.",
    "explanationDe": "Echtzeit-Endpunkte geben Vorhersagen sofort fur jede Anfrage zuruck. Batch-Endpunkte verarbeiten grosse Datensatze asynchron und geben Ergebnisse zuruck, wenn alles fertig ist.",
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
    "type": "single-choice",
    "prompt": "What is an ML pipeline in Azure Machine Learning?",
    "promptDe": "Was ist eine ML-Pipeline in Azure Machine Learning?",
    "hint": "Think about automating the sequence of steps from data preparation to model training and evaluation.",
    "hintDe": "Denke an die Automatisierung der Schrittfolge von Datenaufbereitung uber Modelltraining bis zur Evaluierung.",
    "options": [
      {
        "id": "opt-0",
        "text": "A sequence of automated steps for data processing, model training, and evaluation that can be scheduled and rerun",
        "textDe": "Eine Folge automatisierter Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen",
        "isCorrect": true,
        "explanation": "An ML pipeline is a sequence of automated, reusable steps such as data preparation, training, and evaluation that can be scheduled and rerun.",
        "explanationDe": "Eine ML-Pipeline ist eine Folge automatisierter, wiederverwendbarer Schritte fur Datenverarbeitung, Training und Evaluierung."
      },
      {
        "id": "opt-1",
        "text": "A network cable connecting Azure data centers",
        "textDe": "Ein Netzwerkkabel, das Azure-Rechenzentren verbindet",
        "isCorrect": false,
        "explanation": "Network cables are infrastructure.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "A single API call that deploys a model",
        "textDe": "Ein einzelner API-Aufruf, der ein Modell bereitstellt",
        "isCorrect": false,
        "explanation": "Model deployment is done via endpoints.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "A tool for monitoring website traffic",
        "textDe": "Ein Tool zur Uberwachung von Website-Traffic",
        "isCorrect": false,
        "explanation": "Traffic monitoring is Azure Monitor.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "An ML pipeline is a sequence of automated, reusable steps for data processing, model training, and evaluation that can be scheduled and rerun for reproducibility.",
    "explanationDe": "Eine ML-Pipeline ist eine Folge automatisierter, wiederverwendbarer Schritte fur Datenverarbeitung, Modelltraining und Evaluierung, die geplant und erneut ausgefuhrt werden konnen.",
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
    "type": "single-choice",
    "prompt": "What does the Responsible AI dashboard in Azure Machine Learning help you do?",
    "promptDe": "Was hilft Ihnen das Responsible AI Dashboard in Azure Machine Learning?",
    "hint": "Think about understanding model behavior, identifying errors, and checking for fairness issues.",
    "hintDe": "Denke an das Verstehen des Modellverhaltens, das Identifizieren von Fehlern und das Prufen auf Fairness-Probleme.",
    "options": [
      {
        "id": "opt-0",
        "text": "Analyze model errors, evaluate fairness, and understand model explanations in a single view",
        "textDe": "Modellfehler analysieren, Fairness bewerten und Modellerklarungen in einer einzelnen Ansicht verstehen",
        "isCorrect": true,
        "explanation": "The Responsible AI dashboard provides tools for error analysis, fairness assessment, model interpretability, and causal analysis in a unified interface.",
        "explanationDe": "Das Responsible AI Dashboard bietet Fehleranalyse, Fairness-Bewertung, Modellinterpretierbarkeit und Kausalanalyse in einer einheitlichen Oberflache."
      },
      {
        "id": "opt-1",
        "text": "Automatically retrain models on new data",
        "textDe": "Modelle automatisch mit neuen Daten neu trainieren",
        "isCorrect": false,
        "explanation": "Automatic retraining is a separate pipeline feature.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Generate synthetic training data",
        "textDe": "Synthetische Trainingsdaten generieren",
        "isCorrect": false,
        "explanation": "Data generation is not the purpose of the RAI dashboard.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "Deploy models to mobile devices",
        "textDe": "Modelle auf Mobilgeraten bereitstellen",
        "isCorrect": false,
        "explanation": "Mobile deployment is a separate concern.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "The Responsible AI dashboard provides error analysis, fairness assessment, model interpretability, and causal analysis in a unified interface.",
    "explanationDe": "Das Responsible AI Dashboard bietet Fehleranalyse, Fairness-Bewertung, Modellinterpretierbarkeit und Kausalanalyse in einer einheitlichen Oberflache.",
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
    "type": "single-choice",
    "prompt": "What is data labeling in Azure Machine Learning used for?",
    "promptDe": "Wofur wird Data Labeling in Azure Machine Learning verwendet?",
    "hint": "Think about the process of annotating raw data with labels so it can be used for supervised learning.",
    "hintDe": "Denke an den Prozess des Annotierens von Rohdaten mit Labels, damit sie fur uberwachtes Lernen verwendet werden konnen.",
    "options": [
      {
        "id": "opt-0",
        "text": "Annotating data with labels such as classes or bounding boxes to prepare it for supervised training",
        "textDe": "Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen zur Vorbereitung fur uberwachtes Training",
        "isCorrect": true,
        "explanation": "Data labeling in Azure ML provides tools for annotating images, text, and other data with labels like classes or bounding boxes for supervised learning.",
        "explanationDe": "Data Labeling in Azure ML bietet Tools zum Annotieren von Daten mit Labels wie Klassen oder Begrenzungsrahmen fur uberwachtes Lernen."
      },
      {
        "id": "opt-1",
        "text": "Encrypting data at rest in Azure storage",
        "textDe": "Verschlusseln von Daten im Ruhezustand in Azure Storage",
        "isCorrect": false,
        "explanation": "Encryption is a security feature.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-2",
        "text": "Compressing datasets to reduce storage costs",
        "textDe": "Komprimieren von Datensatzen zur Reduzierung der Speicherkosten",
        "isCorrect": false,
        "explanation": "Data compression is not data labeling.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      },
      {
        "id": "opt-3",
        "text": "Converting data between different file formats",
        "textDe": "Konvertieren von Daten zwischen verschiedenen Dateiformaten",
        "isCorrect": false,
        "explanation": "Format conversion is data processing.",
        "explanationDe": "Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft."
      }
    ],
    "explanation": "Data labeling in Azure ML provides tools for annotating images, text, and other data with labels like classes or bounding boxes, preparing data for supervised training.",
    "explanationDe": "Data Labeling in Azure ML bietet Tools zum Annotieren von Bildern, Text und anderen Daten mit Labels wie Klassen oder Begrenzungsrahmen fur uberwachtes Training.",
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
    "topic": "Machine Learning",
    "type": "true-false",
    "prompt": "Statement: Azure Machine Learning Designer allows you to build ML pipelines using a drag-and-drop interface without writing code.",
    "promptDe": "Aussage: Azure Machine Learning Designer ermoglicht das Erstellen von ML-Pipelines mit einer Drag-and-Drop-Oberflache ohne Code zu schreiben.",
    "hint": "Consider whether there is a no-code visual tool for building ML workflows in Azure ML.",
    "hintDe": "Uberlege, ob es ein No-Code-Visualtool zum Erstellen von ML-Workflows in Azure ML gibt.",
    "options": [
      {
        "id": "opt-true",
        "text": "True",
        "textDe": "Wahr",
        "isCorrect": true,
        "explanation": "Azure Machine Learning Designer provides a drag-and-drop canvas for building ML pipelines visually without writing code.",
        "explanationDe": "Azure Machine Learning Designer bietet eine Drag-and-Drop-Leinwand zum visuellen Erstellen von ML-Pipelines ohne Code."
      },
      {
        "id": "opt-false",
        "text": "False",
        "textDe": "Falsch",
        "isCorrect": false,
        "explanation": "Azure Machine Learning Designer provides a visual, no-code pipeline builder.",
        "explanationDe": "Azure Machine Learning Designer bietet einen visuellen, codelosen Pipeline-Builder."
      }
    ],
    "explanation": "Azure Machine Learning Designer provides a drag-and-drop canvas for building ML pipelines visually, making it accessible to users without coding experience.",
    "explanationDe": "Azure Machine Learning Designer bietet eine Drag-and-Drop-Leinwand zum visuellen Erstellen von ML-Pipelines, zuganglich fur Nutzer ohne Programmiererfahrung.",
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
