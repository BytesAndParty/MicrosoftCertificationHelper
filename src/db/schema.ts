import Dexie, { type Table } from 'dexie';
import type { QuizQuestion } from '@/types/quiz';
import type { Flashcard, GlossaryTerm, RoadmapTheme } from '@/types/db';

/**
 * AppDatabase - Browser-based IndexedDB for Microsoft AI-900 Helper
 */
export class AppDatabase extends Dexie {
  questions!: Table<QuizQuestion>;
  flashcards!: Table<Flashcard>;
  glossaryTerms!: Table<GlossaryTerm>;
  roadmapThemes!: Table<RoadmapTheme>;

  constructor() {
    super('AI900HelperDB');
    
    this.version(1).stores({
      questions: 'id, topic, type'
    });

    this.version(2).stores({
      questions: 'id, topic, type',
      flashcards: 'id, topic',
      glossaryTerms: 'term',
      roadmapThemes: 'id',
    });
  }

  async seedIfEmpty(
    initialQuestions: QuizQuestion[],
    initialFlashcards: Flashcard[],
    initialGlossaryTerms: GlossaryTerm[],
    initialRoadmapThemes: RoadmapTheme[],
  ) {
    const qCount = await this.questions.count();
    if (qCount === 0) {
      console.info('Seeding quiz questions...');
      await this.questions.bulkAdd(initialQuestions);
    }

    const fCount = await this.flashcards.count();
    if (fCount === 0) {
      console.info('Seeding flashcards...');
      await this.flashcards.bulkAdd(initialFlashcards);
    }

    const gCount = await this.glossaryTerms.count();
    if (gCount === 0) {
      console.info('Seeding glossary terms...');
      await this.glossaryTerms.bulkAdd(initialGlossaryTerms);
    }

    const rCount = await this.roadmapThemes.count();
    if (rCount === 0) {
      console.info('Seeding roadmap themes...');
      await this.roadmapThemes.bulkAdd(initialRoadmapThemes);
    }
  }

  async resetDatabase() {
    await Promise.all([
      this.questions.clear(),
      this.flashcards.clear(),
      this.glossaryTerms.clear(),
      this.roadmapThemes.clear(),
    ]);
    console.info('Database cleared.');
  }
}

/** Central database instance for use across the application */
export const db = new AppDatabase();
