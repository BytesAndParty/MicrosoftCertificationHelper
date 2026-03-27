import { readFileSync, writeFileSync } from 'fs';

function addCertId(filePath, exportLine, certId) {
  const src = readFileSync(filePath, 'utf8');
  const start = src.indexOf(exportLine) + exportLine.length;
  const importPart = src.slice(0, start);
  const jsonStr = src.slice(start).replace(/;\s*$/, '');
  const data = JSON.parse(jsonStr);
  for (const item of data) item.certId = certId;
  writeFileSync(filePath, importPart + JSON.stringify(data, null, 2) + ';\n');
  console.log(`${filePath}: added certId to ${data.length} items`);
}

addCertId('src/db/quiz-questions.ts', 'export const quizQuestions: QuizQuestion[] = ', 'ai900');
addCertId('src/db/flashcards.ts', 'export const flashcards: Flashcard[] = ', 'ai900');
addCertId('src/db/glossary-terms.ts', 'export const glossaryTerms: GlossaryTerm[] = ', 'ai900');
addCertId('src/db/roadmap-themes.ts', 'export const roadmapThemes: RoadmapTheme[] = ', 'ai900');
