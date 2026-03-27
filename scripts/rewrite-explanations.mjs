/**
 * Script to rewrite quiz option explanations.
 * - Wrong answers: explain WHY the option is wrong (conceptual mistake)
 * - Correct answers: confirm WHY it's correct (core concept)
 * - No "the correct answer is X" references
 * - 1-2 sentences each
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, '../src/db/quiz-questions.ts');

// Read file
const original = readFileSync(filePath, 'utf8');

// Extract the JSON array from the TS file
const importLine = original.match(/^import[^;]+;\s*/)?.[0] ?? '';
const exportPrefix = 'export const quizQuestions: QuizQuestion[] = ';
const jsonStart = original.indexOf(exportPrefix) + exportPrefix.length;
const jsonStr = original.slice(jsonStart).replace(/;\s*$/, '');

let questions;
try {
  questions = JSON.parse(jsonStr);
} catch (e) {
  console.error('Failed to parse JSON:', e.message);
  process.exit(1);
}

console.log(`Loaded ${questions.length} questions`);

// Count options
let totalOptions = 0;
let wrongOptions = 0;
let correctOptions = 0;

for (const q of questions) {
  for (const opt of q.options) {
    totalOptions++;
    if (opt.isCorrect) correctOptions++;
    else wrongOptions++;
  }
}
console.log(`Total options: ${totalOptions} (${correctOptions} correct, ${wrongOptions} wrong)`);

/**
 * Clean up English wrong-answer explanation
 */
function cleanWrongEN(explanation, optText, correctText) {
  let cleaned = explanation;
  
  // Remove: "X" is not the best fit for this question.
  cleaned = cleaned.replace(/^"[^"]*"\s*is not the best fit for this question\.\s*/i, '');
  
  // Remove: The correct answer is "Y".
  cleaned = cleaned.replace(/\s*The correct answer is "[^"]*"\.\s*/gi, ' ');
  
  // Remove: Here the correct answer is "Y".
  cleaned = cleaned.replace(/\s*Here the correct answer is "[^"]*"\.\s*/gi, ' ');
  
  // Remove accidental "Correct:" prefix
  cleaned = cleaned.replace(/^Correct:\s*/i, '');
  
  // Remove "Not correct in this statement."
  cleaned = cleaned.replace(/Not correct in this statement\.\s*/i, '');
  
  // Clean up double spaces and trim
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // If empty or too short, it means we lost the content
  if (!cleaned || cleaned.length < 15) {
    return null; // Signal to use fallback
  }
  
  return cleaned;
}

/**
 * Clean up German wrong-answer explanation
 */
function cleanWrongDE(explanation, optTextDe, correctTextDe) {
  let cleaned = explanation;
  
  // Remove: "X" passt fur diese Frage nicht am besten.
  cleaned = cleaned.replace(/^"[^"]*"\s*passt fur diese Frage nicht am besten\.\s*/i, '');
  
  // Remove: Die richtige Antwort ist "Y".
  cleaned = cleaned.replace(/\s*Die richtige Antwort ist "[^"]*"\.\s*/gi, ' ');
  
  // Remove: Hier ist die richtige Antwort "Y".
  cleaned = cleaned.replace(/\s*Hier ist die richtige Antwort "[^"]*"\.\s*/gi, ' ');
  
  // Remove "Richtig:" prefix
  cleaned = cleaned.replace(/^Richtig:\s*/i, '');
  
  // Remove "In dieser Aussage nicht korrekt."
  cleaned = cleaned.replace(/In dieser Aussage nicht korrekt\.\s*/i, '');
  
  // Clean up
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  if (!cleaned || cleaned.length < 15) {
    return null;
  }
  
  return cleaned;
}

/**
 * Clean up correct-answer explanation (English)
 */
function cleanCorrectEN(explanation) {
  let cleaned = explanation;
  
  // Remove "Correct:" prefix
  cleaned = cleaned.replace(/^Correct:\s*/i, '');
  
  // Remove "Correct in this statement."
  cleaned = cleaned.replace(/^Correct in this statement\.\s*/i, '');
  
  // Ensure starts with uppercase
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  
  return cleaned.trim();
}

/**
 * Clean up correct-answer explanation (German)
 */
function cleanCorrectDE(explanation) {
  let cleaned = explanation;
  
  // Remove "Richtig:" prefix
  cleaned = cleaned.replace(/^Richtig:\s*/i, '');
  
  // Remove "Richtig in dieser Aussage."
  cleaned = cleaned.replace(/^Richtig in dieser Aussage\.\s*/i, '');
  
  // Ensure starts with uppercase
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  
  return cleaned.trim();
}

// --- Service/concept knowledge base for fallback explanations ---
const serviceDescEN = {
  'azure dns': 'Azure DNS is a domain name resolution service and has no AI capabilities.',
  'azure monitor': 'Azure Monitor is an infrastructure monitoring service, not an AI processing service.',
  'azure batch': 'Azure Batch is for large-scale parallel computing jobs, not AI-specific tasks.',
  'azure devops': 'Azure DevOps is a CI/CD and project management platform, not an AI service.',
  'azure logic apps': 'Azure Logic Apps is a workflow automation service, not an AI model service.',
  'azure cdn': 'Azure CDN is a content delivery network for caching, not for AI computing.',
  'azure key vault': 'Azure Key Vault stores secrets and certificates, not AI models or compute.',
  'azure cosmos db': 'Azure Cosmos DB is a NoSQL database service, not a computer vision service.',
  'azure synapse': 'Azure Synapse is a data analytics platform, not a drag-and-drop ML pipeline tool.',
  'azure data factory': 'Azure Data Factory is a data integration service for ETL pipelines, not ML model building.',
  'azure stream analytics': 'Azure Stream Analytics processes real-time data streams, not ML model design.',
  'azure active directory': 'Azure Active Directory is an identity management service, not an ML endpoint.',
};

const serviceDescDE = {
  'azure dns': 'Azure DNS ist ein DNS-Dienst und hat keine KI-Funktionen.',
  'azure monitor': 'Azure Monitor ist ein Infrastruktur-Monitoring-Dienst, kein KI-Verarbeitungsdienst.',
  'azure batch': 'Azure Batch ist fuer parallele Rechenaufgaben, nicht fuer KI-spezifische Aufgaben.',
  'azure devops': 'Azure DevOps ist eine CI/CD- und Projektmanagement-Plattform, kein KI-Dienst.',
  'azure logic apps': 'Azure Logic Apps ist ein Workflow-Automatisierungsdienst, kein KI-Modelldienst.',
  'azure cdn': 'Azure CDN ist ein Content-Delivery-Network zum Caching, nicht fur KI-Berechnungen.',
  'azure key vault': 'Azure Key Vault speichert Geheimnisse und Zertifikate, keine KI-Modelle oder Compute.',
  'azure cosmos db': 'Azure Cosmos DB ist ein NoSQL-Datenbankdienst, kein Computer-Vision-Dienst.',
  'azure synapse': 'Azure Synapse ist eine Datenanalyse-Plattform, kein Drag-and-Drop ML-Pipeline-Tool.',
  'azure data factory': 'Azure Data Factory ist ein Datenintegrationsdienst, kein ML-Modellbau-Werkzeug.',
  'azure stream analytics': 'Azure Stream Analytics verarbeitet Echtzeit-Datenstroeme, nicht ML-Modelldesign.',
  'azure active directory': 'Azure Active Directory ist ein Identitaetsdienst, kein ML-Endpunkt.',
};

// Concept mixup explanations
const conceptEN = {
  'classification': 'Classification predicts discrete category labels, not continuous numeric values.',
  'klassifikation': 'Classification predicts discrete category labels, not continuous numeric values.',
  'regression': 'Regression predicts continuous numeric values, not discrete class labels.',
  'clustering': 'Clustering groups similar data points without predefined labels — it cannot predict specific target values.',
  'anomaly detection': 'Anomaly detection identifies unusual outliers in data, not standard prediction tasks.',
  'anomalieerkennung': 'Anomaly detection identifies unusual outliers in data, not standard prediction tasks.',
  'supervised learning': 'Supervised learning requires labeled training data with known outcomes.',
  'unsupervised learning': 'Unsupervised learning finds patterns without labels — it does not use reward signals.',
  'reinforcement learning': 'Reinforcement learning uses reward-based trial and error, not labeled datasets.',
  'transfer learning': 'Transfer learning reuses knowledge from a pre-trained model for a new task, but is not a fundamental learning paradigm like supervised or unsupervised.',
  'ocr': 'OCR (Optical Character Recognition) extracts text from images — it is a text reading tool, not relevant here.',
  'sentiment analysis': 'Sentiment analysis evaluates the emotional tone of text — it is an NLP task unrelated to this scenario.',
  'topic modeling': 'Topic modeling discovers abstract themes in document collections, it does not detect language.',
};

/**
 * Find the correct option for a question
 */
function findCorrectOption(question) {
  return question.options.find(o => o.isCorrect);
}

/**
 * Try to get a service description fallback
 */
function getServiceFallbackEN(optText) {
  const lower = optText.toLowerCase();
  for (const [key, desc] of Object.entries(serviceDescEN)) {
    if (lower.includes(key)) return desc;
  }
  return null;
}

function getServiceFallbackDE(optTextDe) {
  const lower = optTextDe.toLowerCase();
  for (const [key, desc] of Object.entries(serviceDescDE)) {
    if (lower.includes(key)) return desc;
  }
  return null;
}

function getConceptFallbackEN(optText) {
  const lower = optText.toLowerCase();
  for (const [key, desc] of Object.entries(conceptEN)) {
    if (lower.includes(key)) return desc;
  }
  return null;
}

// Process each question
let changedCount = 0;

for (const q of questions) {
  const correctOpt = findCorrectOption(q);
  
  for (const opt of q.options) {
    if (opt.isCorrect) {
      // --- CORRECT ANSWER ---
      const newEN = cleanCorrectEN(opt.explanation);
      const newDE = cleanCorrectDE(opt.explanationDe);
      
      if (newEN !== opt.explanation || newDE !== opt.explanationDe) {
        changedCount++;
      }
      opt.explanation = newEN;
      opt.explanationDe = newDE;
      
    } else {
      // --- WRONG ANSWER ---
      const correctText = correctOpt?.text ?? '';
      const correctTextDe = correctOpt?.textDe ?? '';
      
      let newEN = cleanWrongEN(opt.explanation, opt.text, correctText);
      let newDE = cleanWrongDE(opt.explanationDe, opt.textDe, correctTextDe);
      
      // Check if the cleaned text is actually about the wrong option or about the correct one
      // If it just repeats what the correct answer does, we need a fallback
      if (newEN) {
        // Check if it's just describing the correct answer
        const lowerEN = newEN.toLowerCase();
        const correctLower = correctText.toLowerCase();
        
        // If the cleaned text starts with or closely matches the correct answer's description
        // and doesn't mention the wrong option, try to find a better explanation
        const mentionsWrongOption = lowerEN.includes(opt.text.toLowerCase().slice(0, 20));
        const mentionsCorrectAnswer = correctText.length > 10 && lowerEN.includes(correctLower.slice(0, Math.min(30, correctLower.length)));
        
        if (!mentionsWrongOption && mentionsCorrectAnswer) {
          // Try fallbacks
          const serviceFB = getServiceFallbackEN(opt.text);
          const conceptFB = getConceptFallbackEN(opt.text);
          if (serviceFB) newEN = serviceFB;
          else if (conceptFB) newEN = conceptFB;
          // else keep what we have - it's still useful info
        }
      }
      
      if (!newEN) {
        // Total fallback
        const serviceFB = getServiceFallbackEN(opt.text);
        const conceptFB = getConceptFallbackEN(opt.text);
        if (serviceFB) newEN = serviceFB;
        else if (conceptFB) newEN = conceptFB;
        else newEN = `This option describes a different concept that does not apply to the scenario in this question.`;
      }
      
      if (!newDE) {
        const serviceFB = getServiceFallbackDE(opt.textDe);
        if (serviceFB) newDE = serviceFB;
        else newDE = `Diese Option beschreibt ein anderes Konzept, das nicht auf das Szenario in dieser Frage zutrifft.`;
      }
      
      changedCount++;
      opt.explanation = newEN;
      opt.explanationDe = newDE;
    }
  }
}

console.log(`Changed ${changedCount} option explanations`);

// Write the modified file
const output = importLine + exportPrefix + JSON.stringify(questions, null, 2) + ';\n';
writeFileSync(filePath, output, 'utf8');
console.log('File written successfully');
