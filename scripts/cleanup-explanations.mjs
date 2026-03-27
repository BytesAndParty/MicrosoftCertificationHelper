/**
 * Cleanup script - fix duplicate sentences, trailing "Here", and remaining issues
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, '../src/db/quiz-questions.ts');

const original = readFileSync(filePath, 'utf8');
const importLine = original.match(/^import[^;]+;\s*/)?.[0] ?? '';
const exportPrefix = 'export const quizQuestions: QuizQuestion[] = ';
const jsonStart = original.indexOf(exportPrefix) + exportPrefix.length;
const jsonStr = original.slice(jsonStart).replace(/;\s*$/, '');
const questions = JSON.parse(jsonStr);

let fixCount = 0;

function removeDuplicateSentences(text) {
  // Split into sentences
  const sentences = text.split(/(?<=\.)\s+/);
  if (sentences.length < 2) return text;
  
  const result = [sentences[0]];
  for (let i = 1; i < sentences.length; i++) {
    const prev = result[result.length - 1].toLowerCase().replace(/[^a-z ]/g, '').trim();
    const curr = sentences[i].toLowerCase().replace(/[^a-z ]/g, '').trim();
    
    if (prev.length > 15 && curr.length > 15) {
      const wordsA = new Set(prev.split(' '));
      const wordsB = new Set(curr.split(' '));
      const common = [...wordsA].filter(w => wordsB.has(w));
      const overlap = common.length / Math.max(wordsA.size, wordsB.size);
      if (overlap > 0.55) {
        // Skip this duplicate, keep the longer of the two
        if (curr.length > prev.length) {
          result[result.length - 1] = sentences[i]; // replace with longer
        }
        continue;
      }
    }
    result.push(sentences[i]);
  }
  
  return result.join(' ');
}

function removeTrailingHere(text) {
  return text.replace(/\s*\bHere\s*\.?\s*$/, '.').replace(/\.\.$/, '.').replace(/\s+$/, '');
}

function removeTrailingHier(text) {
  return text.replace(/\s*\bHier\s*\.?\s*$/, '.').replace(/\.\.$/, '.').replace(/\s+$/, '');
}

function cleanExplanation(text) {
  let cleaned = text;
  cleaned = removeTrailingHere(cleaned);
  cleaned = removeTrailingHier(cleaned);
  cleaned = removeDuplicateSentences(cleaned);
  // Remove "Correct:" if it leaked into wrong answer
  if (!cleaned.startsWith('Correct:')) {
    cleaned = cleaned.replace(/\bCorrect:\s*/g, '');
  }
  // Ensure ends with period
  cleaned = cleaned.trim();
  if (cleaned.length > 0 && !cleaned.endsWith('.') && !cleaned.endsWith('!') && !cleaned.endsWith('?')) {
    cleaned += '.';
  }
  return cleaned;
}

// Manual overrides for specific problematic entries
const manualOverrides = {
  // q2 opt-1: Online inference - duplicate sentence
  'q2:opt-1:en': 'Online inference is designed for immediate, low-latency per-request predictions — not for batch processing of collected logs.',
  'q2:opt-1:de': 'Online Inference ist fuer sofortige Vorhersagen mit niedriger Latenz pro Anfrage gedacht — nicht fuer die gesammelte Verarbeitung von Logs.',

  // q2 opt-3: Prompt engineering - duplicate sentence
  'q2:opt-3:en': 'Prompt engineering shapes how instructions are given to a model, but it is not an inference execution pattern.',
  'q2:opt-3:de': 'Prompt Engineering gestaltet Modellanweisungen, ist aber kein Inferenz-Ausfuehrungsmuster.',

  // q6 opt-2: Reinforcement learning - duplicate + trailing Here
  'q6:opt-2:en': 'Reinforcement learning uses reward signals to optimize actions — it requires an agent-environment interaction loop, not unlabeled data grouping.',
  'q6:opt-2:de': 'Reinforcement Learning nutzt Reward-Signale zur Aktionsoptimierung — es braucht eine Agent-Umgebung-Interaktion, kein Gruppieren ohne Labels.',

  // q10 opt-1: Sentiment Analysis - trailing Here
  'q10:opt-1:en': 'Sentiment analysis evaluates the emotional tone of text, it does not identify which language a text is written in.',
  'q10:opt-1:de': 'Sentiment Analysis bewertet die Stimmung in Text, erkennt aber nicht, in welcher Sprache der Text geschrieben ist.',

  // q13 opt-1: Azure AI Search - trailing Here
  'q13:opt-1:en': 'Azure AI Search is an indexing and search service — it does not generate text from prompts.',
  'q13:opt-1:de': 'Azure AI Search ist ein Indexierungs- und Suchdienst — er generiert keinen Text aus Prompts.',

  // q13 opt-2: Azure AI Vision - trailing Here + duplicate
  'q13:opt-2:en': 'Azure AI Vision focuses on image and video analysis, not on prompt-based text generation.',
  'q13:opt-2:de': 'Azure AI Vision ist auf Bild- und Videoanalyse spezialisiert, nicht auf promptbasierte Textgenerierung.',

  // q19 opt-2: Inclusivity - trailing Here
  'q19:opt-2:en': 'Inclusivity ensures that AI solutions serve all users — but systematic unequal treatment of groups is specifically a fairness concern.',
  'q19:opt-2:de': 'Inklusivitaet stellt sicher, dass KI-Loesungen allen zugaenglich sind — systematische Ungleichbehandlung ist aber ein Fairness-Problem.',

  // q21 opt-0: Inclusivity - trailing Here
  'q21:opt-0:en': 'Inclusivity ensures broad accessibility of AI solutions, but robust and safe operation is the domain of reliability and security.',
  'q21:opt-0:de': 'Inklusivitaet sorgt fuer breite Zugaenglichkeit, aber robuster und sicherer Betrieb gehoert zu Zuverlaessigkeit und Sicherheit.',

  // q21 opt-2: Fairness - trailing Here
  'q21:opt-2:en': 'Fairness addresses equal treatment between groups, but robust and safe model use falls under reliability and security.',
  'q21:opt-2:de': 'Fairness betrifft Gleichbehandlung zwischen Gruppen, aber robuste und sichere Modellnutzung faellt unter Zuverlaessigkeit und Sicherheit.',

  // q22 opt-1: Azure AI Translator - trailing Here + duplicate
  'q22:opt-1:en': 'Azure AI Translator provides neural machine translation between languages — it does not extract structured data from documents.',
  'q22:opt-1:de': 'Azure AI Translator bietet neuronale maschinelle Uebersetzung — er extrahiert keine strukturierten Daten aus Dokumenten.',

  // q36 opt-2: Unsupervised learning - trailing Here + duplicate
  'q36:opt-2:en': 'Unsupervised learning finds patterns in unlabeled data — it does not use reward and punishment signals.',
  'q36:opt-2:de': 'Unsupervised Learning findet Muster in ungelabelten Daten — es nutzt keine Belohnungs- und Bestrafungssignale.',

  // q38 opt-1: Regression - trailing Here + "Correct:" leak
  'q38:opt-1:en': 'Regression predicts continuous numeric values like prices, not discrete categories like spam/non-spam.',
  'q38:opt-1:de': 'Regression sagt kontinuierliche Zahlenwerte wie Preise voraus, keine diskreten Kategorien wie Spam/Nicht-Spam.',

  // q38 opt-2: Clustering - trailing Here + duplicate
  'q38:opt-2:en': 'Clustering groups data points without predefined labels — it does not assign items to known categories.',
  'q38:opt-2:de': 'Clustering gruppiert Datenpunkte ohne vordefinierte Labels — es ordnet keine Elemente bekannten Kategorien zu.',

  // q38 opt-3: Anomaly detection - trailing Here
  'q38:opt-3:en': 'Anomaly detection flags unusual outliers in data, it does not classify items into predefined categories.',
  'q38:opt-3:de': 'Anomalieerkennung findet ungewoehnliche Ausreisser, sie klassifiziert keine Elemente in vordefinierte Kategorien.',

  // q39 opt-1: Azure AI Translator - trailing Here + duplicate
  'q39:opt-1:en': 'Azure AI Translator provides text translation between languages, not image analysis or visual recognition.',
  'q39:opt-1:de': 'Azure AI Translator bietet Textuebersetzung zwischen Sprachen, keine Bildanalyse oder visuelle Erkennung.',

  // q40 opt-1: Image classification - trailing Here + duplicate EN & DE
  'q40:opt-1:en': 'Image classification assigns a single class to an entire image — it does not label individual pixels.',
  'q40:opt-1:de': 'Bildklassifikation weist einem gesamten Bild eine einzelne Klasse zu — sie labelt nicht einzelne Pixel.',

  // q43 opt-1: Azure AI Vision - trailing Here + duplicate
  'q43:opt-1:en': 'Azure AI Vision is designed for image and video analysis, not for translating text between languages.',
  'q43:opt-1:de': 'Azure AI Vision ist fuer Bild- und Videoanalyse konzipiert, nicht fuer Textuebersetzung zwischen Sprachen.',

  // q43 opt-2: Azure AI Search - trailing Here
  'q43:opt-2:en': 'Azure AI Search indexes and searches documents — it does not translate text between languages.',
  'q43:opt-2:de': 'Azure AI Search indexiert und durchsucht Dokumente — es uebersetzt keinen Text zwischen Sprachen.',

  // q45 opt-1: Azure AI Vision - trailing Here + duplicate
  'q45:opt-1:en': 'Azure AI Vision analyzes images and videos — it does not convert spoken language into text.',
  'q45:opt-1:de': 'Azure AI Vision analysiert Bilder und Videos — es wandelt keine gesprochene Sprache in Text um.',

  // q45 opt-2: Azure AI Search - trailing Here
  'q45:opt-2:en': 'Azure AI Search is an indexing and search service, not a speech-to-text transcription service.',
  'q45:opt-2:de': 'Azure AI Search ist ein Indexierungs- und Suchdienst, kein Sprache-zu-Text-Dienst.',

  // q46 opt-1: Azure AI Translator - trailing Here + duplicate
  'q46:opt-1:en': 'Azure AI Translator translates text between languages — it does not synthesize spoken speech from text.',
  'q46:opt-1:de': 'Azure AI Translator uebersetzt Text zwischen Sprachen — er synthetisiert keine gesprochene Sprache aus Text.',

  // q46 opt-2: Azure AI Vision - trailing Here + duplicate
  'q46:opt-2:en': 'Azure AI Vision processes images and videos, not text-to-speech synthesis.',
  'q46:opt-2:de': 'Azure AI Vision verarbeitet Bilder und Videos, keine Text-zu-Sprache-Synthese.',

  // q46 opt-3: Azure AI Search - trailing Here
  'q46:opt-3:en': 'Azure AI Search is for indexing and searching documents, not for speech synthesis.',
  'q46:opt-3:de': 'Azure AI Search ist fuer Indexierung und Suche, nicht fuer Sprachsynthese.',

  // q59 opt-1: Fairness - trailing Here
  'q59:opt-1:en': 'Fairness ensures equal treatment across groups, but inclusivity specifically addresses making AI accessible to as many people as possible.',
  'q59:opt-1:de': 'Fairness sorgt fuer Gleichbehandlung zwischen Gruppen, aber Inklusivitaet adressiert speziell die Zugaenglichkeit fuer moeglichst viele Menschen.',
};

for (const q of questions) {
  for (const opt of q.options) {
    const keyEN = `${q.id}:${opt.id}:en`;
    const keyDE = `${q.id}:${opt.id}:de`;
    
    if (manualOverrides[keyEN]) {
      opt.explanation = manualOverrides[keyEN];
      fixCount++;
    } else {
      const cleaned = cleanExplanation(opt.explanation);
      if (cleaned !== opt.explanation) {
        opt.explanation = cleaned;
        fixCount++;
      }
    }
    
    if (manualOverrides[keyDE]) {
      opt.explanationDe = manualOverrides[keyDE];
      fixCount++;
    } else {
      const cleaned = cleanExplanation(opt.explanationDe);
      if (cleaned !== opt.explanationDe) {
        opt.explanationDe = cleaned;
        fixCount++;
      }
    }
  }
}

console.log(`Fixed ${fixCount} entries`);

const output = importLine + exportPrefix + JSON.stringify(questions, null, 2) + ';\n';
writeFileSync(filePath, output, 'utf8');
console.log('File written successfully');
