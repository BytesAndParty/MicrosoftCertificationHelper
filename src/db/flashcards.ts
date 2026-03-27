import type { Flashcard } from '@/types/db';

export const flashcards: Flashcard[] = [
  {
    "id": "f1",
    "topic": "ML",
    "front": "Regression vs. classification",
    "back": "Regression predicts numeric values. Classification predicts categories.",
    "frontDe": "Regression vs. Klassifikation",
    "backDe": "Regression: Zahlenwerte. Klassifikation: Klassen.",
    "certId": "ai900"
  },
  {
    "id": "f2",
    "topic": "NLP",
    "front": "What is sentiment analysis?",
    "back": "It classifies text sentiment, typically as positive, neutral, or negative.",
    "frontDe": "Was ist Sentiment Analysis?",
    "backDe": "Sie klassifiziert die Stimmung in Texten, typischerweise als positiv, neutral oder negativ.",
    "certId": "ai900"
  },
  {
    "id": "f3",
    "topic": "Responsible AI",
    "front": "Name 2 Responsible AI principles.",
    "back": "Examples: fairness, reliability and safety, privacy and security, inclusiveness, transparency, accountability.",
    "frontDe": "Nenne 2 Responsible-AI-Prinzipien.",
    "backDe": "Beispiele: Fairness, Zuverlassigkeit und Sicherheit, Datenschutz und Sicherheit, Inklusivitat, Transparenz, Verantwortlichkeit.",
    "certId": "ai900"
  },
  {
    "id": "f4",
    "topic": "GenAI",
    "front": "What does a prompt do?",
    "back": "It controls the context, tone, and output direction of a generative model.",
    "frontDe": "Was bewirkt ein Prompt?",
    "backDe": "Er steuert Kontext, Ton und Ausgaberichtung eines generativen Modells.",
    "certId": "ai900"
  },
  {
    "id": "f5",
    "topic": "Knowledge Mining",
    "front": "What is Azure AI Search used for?",
    "back": "For indexing, retrieval, and semantic search across large content collections.",
    "frontDe": "Wofur nutzt man Azure AI Search?",
    "backDe": "Fur Indexierung, Retrieval und semantische Suche in grossen Inhaltsbestanden.",
    "certId": "ai900"
  },
  {
    "id": "f6",
    "topic": "Document AI",
    "front": "Typical use case for Document Intelligence",
    "back": "Automatically extract structured fields (for example totals, dates, vendor names) from invoices, forms, and receipts.",
    "frontDe": "Typischer Use Case fur Document Intelligence",
    "backDe": "Strukturierte Felder (z. B. Gesamtbetrag, Datum, Lieferant) aus Rechnungen, Formularen und Belegen automatisch extrahieren.",
    "certId": "ai900"
  },
  {
    "id": "f7",
    "topic": "AI Workloads",
    "front": "Batch vs. Online Inference",
    "back": "Batch inference is for periodic bulk scoring; online inference is for low-latency real-time predictions.",
    "frontDe": "Batch vs. Online Inference",
    "backDe": "Batch-Inferenz ist fur periodische Mengenverarbeitung; Online-Inferenz fur Echtzeitvorhersagen mit niedriger Latenz.",
    "certId": "ai900"
  },
  {
    "id": "f8",
    "topic": "Machine Learning",
    "front": "What is overfitting?",
    "back": "The model performs well on training data but poorly on unseen validation/test data.",
    "frontDe": "Was ist Overfitting?",
    "backDe": "Das Modell ist auf Trainingsdaten sehr gut, aber auf unbekannten Validierungs-/Testdaten schwach.",
    "certId": "ai900"
  },
  {
    "id": "f9",
    "topic": "NLP",
    "front": "What does NER stand for?",
    "back": "Named Entity Recognition identifies and classifies entities like persons, locations, and organizations.",
    "frontDe": "Wofur steht NER?",
    "backDe": "Named Entity Recognition erkennt und klassifiziert Entitaten wie Personen, Orte und Organisationen.",
    "certId": "ai900"
  },
  {
    "id": "f10",
    "topic": "Responsible AI",
    "front": "Why is transparency important?",
    "back": "It makes AI behavior and decisions explainable, traceable, and easier to audit.",
    "frontDe": "Warum ist Transparenz wichtig?",
    "backDe": "Sie macht KI-Verhalten und Entscheidungen erklarbar, nachvollziehbar und besser auditierbar.",
    "certId": "ai900"
  },
  {
    "id": "f11",
    "topic": "Knowledge Mining",
    "front": "What is the benefit of semantic search?",
    "back": "It matches intent and context, not just exact keyword overlap.",
    "frontDe": "Was bringt semantische Suche?",
    "backDe": "Sie berucksichtigt Intention und Kontext statt nur exakter Keyword-Ubereinstimmung.",
    "certId": "ai900"
  },
  {
    "id": "f12",
    "topic": "Computer Vision",
    "front": "Object detection vs. image classification",
    "back": "Object detection localizes and classifies objects, while image classification predicts one overall class.",
    "frontDe": "Objekterkennung vs. Bildklassifikation",
    "backDe": "Objekterkennung lokalisiert und klassifiziert, Bildklassifikation gibt Gesamtklasse.",
    "certId": "ai900"
  },
  {
    "id": "f13",
    "topic": "Machine Learning",
    "front": "Supervised vs. unsupervised learning",
    "back": "Supervised uses labeled data (regression, classification). Unsupervised works without labels (clustering).",
    "frontDe": "Supervised vs. Unsupervised Learning",
    "backDe": "Supervised: gelabelte Daten (Regression, Klassifikation). Unsupervised: ohne Labels (Clustering).",
    "certId": "ai900"
  },
  {
    "id": "f14",
    "topic": "Machine Learning",
    "front": "What does Azure AutoML do?",
    "back": "It automates model/algorithm selection and hyperparameter tuning to find a strong model faster.",
    "frontDe": "Was macht Azure AutoML?",
    "backDe": "Es automatisiert Modell-/Algorithmusauswahl und Hyperparameter-Tuning, um schneller ein starkes Modell zu finden.",
    "certId": "ai900"
  },
  {
    "id": "f15",
    "topic": "Machine Learning",
    "front": "What is feature engineering?",
    "back": "Selecting and transforming input variables so the model can learn better.",
    "frontDe": "Was ist Feature Engineering?",
    "backDe": "Auswahl und Transformation von Eingabevariablen, damit das Modell besser lernt.",
    "certId": "ai900"
  },
  {
    "id": "f16",
    "topic": "GenAI",
    "front": "Temperature parameter in GPT",
    "back": "Temperature controls output randomness: low is more deterministic, high is more diverse/creative.",
    "frontDe": "Temperature-Parameter bei GPT",
    "backDe": "Temperature steuert die Zufalligkeit: niedrig ist deterministischer, hoch ist variabler/kreativer.",
    "certId": "ai900"
  },
  {
    "id": "f17",
    "topic": "GenAI",
    "front": "What is grounding?",
    "back": "Grounding ties model responses to trusted source context (for example via RAG) to reduce hallucinations.",
    "frontDe": "Was ist Grounding?",
    "backDe": "Grounding verankert Modellantworten in vertrauenswurdigem Quellenkontext (z. B. via RAG), um Halluzinationen zu reduzieren.",
    "certId": "ai900"
  },
  {
    "id": "f18",
    "topic": "GenAI",
    "front": "System message vs. user message",
    "back": "System message defines role and rules. User message contains the actual request.",
    "frontDe": "System Message vs. User Message",
    "backDe": "System Message: Rolle und Regeln fur das Modell. User Message: die eigentliche Anfrage.",
    "certId": "ai900"
  },
  {
    "id": "f19",
    "topic": "NLP",
    "front": "Speech-to-Text vs. Text-to-Speech",
    "back": "STT converts audio to text. TTS converts text to spoken language.",
    "frontDe": "Speech-to-Text vs. Text-to-Speech",
    "backDe": "STT: Audio wird zu Text. TTS: Text wird zu gesprochener Sprache.",
    "certId": "ai900"
  },
  {
    "id": "f20",
    "topic": "NLP",
    "front": "What is key phrase extraction?",
    "back": "It identifies the most important terms and topics in a text.",
    "frontDe": "Was ist Key Phrase Extraction?",
    "backDe": "Identifiziert die wichtigsten Begriffe und Themen in einem Text.",
    "certId": "ai900"
  },
  {
    "id": "f21",
    "topic": "Responsible AI",
    "front": "The 6 Responsible AI principles",
    "back": "Fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.",
    "frontDe": "Die 6 Responsible AI Prinzipien",
    "backDe": "Fairness, Zuverlassigkeit und Sicherheit, Datenschutz und Sicherheit, Inklusivitat, Transparenz und Verantwortlichkeit.",
    "certId": "ai900"
  },
  {
    "id": "f22",
    "topic": "Responsible AI",
    "front": "What does Azure AI Content Safety do?",
    "back": "It detects harmful content (violence, hate, self-harm, sexual content) in text and images.",
    "frontDe": "Was macht Azure AI Content Safety?",
    "backDe": "Erkennt schadliche Inhalte (Gewalt, Hass, Selbstverletzung, sexuelle Inhalte) in Text und Bildern.",
    "certId": "ai900"
  },
  {
    "id": "f23",
    "topic": "Computer Vision",
    "front": "What is semantic segmentation?",
    "back": "Each pixel in an image is assigned a class (for example road, sky, person).",
    "frontDe": "Was ist semantische Segmentierung?",
    "backDe": "Jedem Pixel im Bild wird eine Klasse zugewiesen (z.B. Strasse, Himmel, Person).",
    "certId": "ai900"
  },
  {
    "id": "f24",
    "topic": "Document AI",
    "front": "Prebuilt vs. custom models in Document Intelligence",
    "back": "Prebuilt models cover common document types (invoices, receipts, IDs). Custom models are trained for domain-specific layouts.",
    "frontDe": "Prebuilt vs. Custom Models in Document Intelligence",
    "backDe": "Prebuilt-Modelle decken gängige Dokumenttypen ab (Rechnungen, Belege, Ausweise). Custom-Modelle werden fur domanenspezifische Layouts trainiert.",
    "certId": "ai900"
  },
  {
    "id": "f25",
    "topic": "Knowledge Mining",
    "front": "What are skillsets in Azure AI Search?",
    "back": "Skillsets define enrichment steps (OCR, NER, sentiment, etc.) executed during indexing pipelines.",
    "frontDe": "Was sind Skillsets in Azure AI Search?",
    "backDe": "Skillsets definieren Anreicherungsschritte (OCR, NER, Sentiment usw.), die in der Indexierungspipeline laufen.",
    "certId": "ai900"
  },
  {
    "id": "f26",
    "topic": "AI Workloads",
    "front": "What are Azure AI Services?",
    "back": "A collection of prebuilt AI APIs (for example Vision, Speech, Language, and Document Intelligence).",
    "frontDe": "Was sind Azure AI Services?",
    "backDe": "Eine Sammlung vorgefertigter KI-APIs (z. B. Vision, Speech, Language und Document Intelligence).",
    "certId": "ai900"
  },
  {
    "id": "f27",
    "topic": "GenAI",
    "front": "What is Microsoft Copilot?",
    "back": "An AI assistant experience built on LLMs and integrated into Microsoft products with grounded enterprise context.",
    "frontDe": "Was ist Microsoft Copilot?",
    "backDe": "Ein KI-Assistent auf Basis von LLMs, integriert in Microsoft-Produkte und mit geerdetem Unternehmenskontext.",
    "certId": "ai900"
  },
  {
    "id": "f28",
    "topic": "Machine Learning",
    "front": "Deep learning vs. classical ML",
    "back": "Deep learning uses deep neural networks and learns features automatically. Classical ML often needs manual feature selection.",
    "frontDe": "Deep Learning vs. klassisches ML",
    "backDe": "Deep Learning nutzt tiefe neuronale Netze und lernt Features automatisch. Klassisches ML braucht manuelle Feature-Auswahl.",
    "certId": "ai900"
  },
  {
    "id": "f29",
    "topic": "Machine Learning",
    "front": "What is the Transformer architecture?",
    "back": "A neural network architecture with self-attention. It is the basis for GPT, BERT, and modern LLMs.",
    "frontDe": "Was ist die Transformer-Architektur?",
    "backDe": "Neuronales Netz mit Self-Attention. Basis von GPT, BERT und modernen LLMs.",
    "certId": "ai900"
  },
  {
    "id": "f30",
    "topic": "Machine Learning",
    "front": "Features vs. labels",
    "back": "Features are input variables (X). Labels are target values to predict (Y).",
    "frontDe": "Features vs. Labels",
    "backDe": "Features = Eingabevariablen (X). Labels = Zielwerte die vorhergesagt werden sollen (Y).",
    "certId": "ai900"
  },
  {
    "id": "f31",
    "topic": "Machine Learning",
    "front": "Training vs. validation dataset",
    "back": "Training data teaches the model patterns. Validation data checks generalization on unseen data.",
    "frontDe": "Training vs. Validation Dataset",
    "backDe": "Training: Modell lernt Muster. Validation: Pruft Generalisierung auf ungesehenen Daten.",
    "certId": "ai900"
  },
  {
    "id": "f32",
    "topic": "GenAI",
    "front": "What is Azure AI Foundry?",
    "back": "A central platform to build, evaluate, and deploy generative AI apps and agents (formerly Azure AI Studio).",
    "frontDe": "Was ist Azure AI Foundry?",
    "backDe": "Zentrale Plattform zum Erstellen, Bewerten und Bereitstellen generativer KI-Apps und Agenten (fruher Azure AI Studio).",
    "certId": "ai900"
  },
  {
    "id": "f33",
    "topic": "GenAI",
    "front": "Azure AI Foundry Model Catalog",
    "back": "A catalog of foundation models from multiple providers for comparison, evaluation, and deployment.",
    "frontDe": "Azure AI Foundry Model Catalog",
    "backDe": "Ein Katalog von Foundation-Modellen verschiedener Anbieter zum Vergleichen, Bewerten und Bereitstellen.",
    "certId": "ai900"
  },
  {
    "id": "f34",
    "topic": "NLP",
    "front": "What is language modeling?",
    "back": "Predicting the next token from prior context; this is the core training objective behind many LLMs.",
    "frontDe": "Was ist Language Modeling?",
    "backDe": "Vorhersage des nachsten Tokens aus vorherigem Kontext; das ist das Kern-Trainingsziel vieler LLMs.",
    "certId": "ai900"
  },
  {
    "id": "f35",
    "topic": "Computer Vision",
    "front": "Image captioning and tagging in Azure AI Vision",
    "back": "Azure AI Vision can generate natural-language captions describing an image and return a set of relevant content tags with confidence scores.",
    "frontDe": "Bildbeschreibung und Tagging in Azure AI Vision",
    "backDe": "Azure AI Vision kann naturlichsprachige Bildunterschriften generieren und relevante Inhaltstags mit Konfidenzwerten zuruckgeben.",
    "certId": "ai900"
  },
  {
    "id": "f36",
    "topic": "Computer Vision",
    "front": "Face verification vs. face identification",
    "back": "Verification checks if two faces belong to the same person (1:1). Identification matches a face against a group of known persons (1:many).",
    "frontDe": "Gesichtsverifizierung vs. Gesichtsidentifikation",
    "backDe": "Verifizierung pruft, ob zwei Gesichter derselben Person gehoren (1:1). Identifikation gleicht ein Gesicht mit einer Gruppe bekannter Personen ab (1:viele).",
    "certId": "ai900"
  },
  {
    "id": "f37",
    "topic": "Computer Vision",
    "front": "What is liveness detection in Azure AI Face?",
    "back": "Liveness detection verifies that the input is a live person, not a photo, video, or mask, to prevent spoofing attacks.",
    "frontDe": "Was ist Liveness Detection in Azure AI Face?",
    "backDe": "Liveness Detection pruft, ob die Eingabe eine echte Person ist und kein Foto, Video oder eine Maske, um Spoofing-Angriffe zu verhindern.",
    "certId": "ai900"
  },
  {
    "id": "f38",
    "topic": "NLP",
    "front": "What does the Azure AI Translator service provide?",
    "back": "Real-time text translation across 100+ languages, plus document translation and custom terminology via custom models.",
    "frontDe": "Was bietet der Azure AI Translator Dienst?",
    "backDe": "Echtzeit-Textubersetzung in uber 100 Sprachen, Dokumentenubersetzung und benutzerdefinierte Terminologie uber Custom-Modelle.",
    "certId": "ai900"
  },
  {
    "id": "f39",
    "topic": "NLP",
    "front": "What is Conversational Language Understanding (CLU)?",
    "back": "A service for building custom natural-language models that extract intents and entities from user utterances in conversational apps.",
    "frontDe": "Was ist Conversational Language Understanding (CLU)?",
    "backDe": "Ein Dienst zum Erstellen benutzerdefinierter Sprachmodelle, die Absichten und Entitaten aus Benutzeraussagen in Konversations-Apps extrahieren.",
    "certId": "ai900"
  },
  {
    "id": "f40",
    "topic": "NLP",
    "front": "What is custom question answering?",
    "back": "A feature of Azure AI Language that lets you build a knowledge base from FAQs, documents, or manual entries and respond to user questions with matched answers.",
    "frontDe": "Was ist Custom Question Answering?",
    "backDe": "Ein Feature von Azure AI Language, mit dem man eine Wissensdatenbank aus FAQs, Dokumenten oder manuellen Eintragen erstellt und Benutzerfragen mit passenden Antworten beantwortet.",
    "certId": "ai900"
  },
  {
    "id": "f41",
    "topic": "Machine Learning",
    "front": "Azure ML compute types: instance vs. cluster vs. serverless",
    "back": "Compute instance is a single managed VM for development. Compute cluster auto-scales multiple VMs for training jobs. Serverless compute is on-demand with no infrastructure management.",
    "frontDe": "Azure ML Compute-Typen: Instanz vs. Cluster vs. Serverless",
    "backDe": "Compute-Instanz ist eine einzelne verwaltete VM fur Entwicklung. Compute-Cluster skaliert mehrere VMs fur Trainingsjobs. Serverless-Compute ist bedarfsgesteuert ohne Infrastrukturverwaltung.",
    "certId": "ai900"
  },
  {
    "id": "f42",
    "topic": "Machine Learning",
    "front": "What is the Azure ML model registry?",
    "back": "A central repository to version, track, and manage trained models before deploying them to endpoints.",
    "frontDe": "Was ist die Azure ML Model Registry?",
    "backDe": "Ein zentrales Repository zum Versionieren, Nachverfolgen und Verwalten trainierter Modelle vor der Bereitstellung an Endpunkten.",
    "certId": "ai900"
  },
  {
    "id": "f43",
    "topic": "GenAI",
    "front": "What is prompt flow in Azure AI Foundry?",
    "back": "A visual development tool to build, test, and deploy LLM-based workflows by chaining prompts, tools, and code together.",
    "frontDe": "Was ist Prompt Flow in Azure AI Foundry?",
    "backDe": "Ein visuelles Entwicklungstool zum Erstellen, Testen und Bereitstellen LLM-basierter Workflows durch Verkettung von Prompts, Tools und Code.",
    "certId": "ai900"
  },
  {
    "id": "f44",
    "topic": "GenAI",
    "front": "What are multimodal models like GPT-4o?",
    "back": "Models that can process and generate across multiple modalities (text, images, audio) within a single model, enabling richer interactions.",
    "frontDe": "Was sind multimodale Modelle wie GPT-4o?",
    "backDe": "Modelle, die mehrere Modalitaten (Text, Bilder, Audio) in einem einzigen Modell verarbeiten und generieren konnen, was reichhaltigere Interaktionen ermoglicht.",
    "certId": "ai900"
  },
  {
    "id": "f45",
    "topic": "GenAI",
    "front": "What is DALL-E?",
    "back": "An AI model that generates or edits images from text prompts. Available via Azure OpenAI Service.",
    "frontDe": "Was ist DALL-E?",
    "backDe": "Ein KI-Modell, das Bilder aus Textbeschreibungen generiert oder bearbeitet. Verfugbar uber Azure OpenAI Service.",
    "certId": "ai900"
  },
  {
    "id": "f46",
    "topic": "GenAI",
    "front": "Fine-tuning vs. prompt engineering",
    "back": "Prompt engineering adapts model behavior through instructions without changing weights. Fine-tuning retrains the model on domain data to update its weights.",
    "frontDe": "Fine-Tuning vs. Prompt Engineering",
    "backDe": "Prompt Engineering passt das Modellverhalten durch Anweisungen an, ohne Gewichte zu andern. Fine-Tuning trainiert das Modell mit Domanendaten und aktualisiert die Gewichte.",
    "certId": "ai900"
  },
  {
    "id": "f47",
    "topic": "Machine Learning",
    "front": "Real-time vs. batch endpoints in Azure ML",
    "back": "Real-time endpoints return predictions instantly via REST API. Batch endpoints process large datasets asynchronously and store results.",
    "frontDe": "Echtzeit- vs. Batch-Endpunkte in Azure ML",
    "backDe": "Echtzeit-Endpunkte liefern Vorhersagen sofort uber REST API. Batch-Endpunkte verarbeiten grosse Datensatze asynchron und speichern die Ergebnisse.",
    "certId": "ai900"
  },
  {
    "id": "f48",
    "topic": "NLP",
    "front": "What is custom neural voice?",
    "back": "A feature of Azure AI Speech that lets you create a unique, brand-specific synthetic voice using recorded speech samples and responsible AI approval.",
    "frontDe": "Was ist Custom Neural Voice?",
    "backDe": "Ein Feature von Azure AI Speech, mit dem man eine einzigartige, markenspezifische synthetische Stimme aus Sprachaufnahmen erstellt, mit Responsible AI Genehmigung.",
    "certId": "ai900"
  },
  {
    "id": "f49",
    "topic": "Responsible AI",
    "front": "Content filtering for generative AI in Azure",
    "back": "Azure OpenAI Service includes built-in content filters that detect and block harmful inputs and outputs across categories like hate, violence, self-harm, and sexual content.",
    "frontDe": "Inhaltsfilterung fur generative KI in Azure",
    "backDe": "Azure OpenAI Service enthalt integrierte Inhaltsfilter, die schadliche Ein- und Ausgaben in Kategorien wie Hass, Gewalt, Selbstverletzung und sexuelle Inhalte erkennen und blockieren.",
    "certId": "ai900"
  }
];
