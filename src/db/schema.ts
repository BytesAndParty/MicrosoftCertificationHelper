import Dexie, { type Table } from 'dexie';
import type { QuizQuestion } from '@/types/quiz';
import type { Flashcard, GlossaryTerm, RoadmapTheme } from '@/types/db';

/**
 * AppDatabase - Browser-based IndexedDB for certification study helper.
 * Supports multiple certifications via the certId index.
 */
export class AppDatabase extends Dexie {
  questions!: Table<QuizQuestion>;
  flashcards!: Table<Flashcard>;
  glossaryTerms!: Table<GlossaryTerm>;
  roadmapThemes!: Table<RoadmapTheme>;

  constructor() {
    super('CertHelperDB');

    this.version(1).stores({
      questions: 'id, topic, type'
    });

    this.version(2).stores({
      questions: 'id, topic, type',
      flashcards: 'id, topic',
      glossaryTerms: 'term',
      roadmapThemes: 'id',
    });

    // Add certId index to every table for multi-cert filtering
    this.version(3).stores({
      questions: 'id, certId, topic, type',
      flashcards: 'id, certId, topic',
      glossaryTerms: 'term, certId',
      roadmapThemes: 'id, certId',
    });
  }

  /** Seed tables using bulkPut so new content is merged without duplicating existing rows. */
  async seedData(
    questions: QuizQuestion[],
    flashcards: Flashcard[],
    glossaryTerms: GlossaryTerm[],
    roadmapThemes: RoadmapTheme[],
  ) {
    await this.questions.bulkPut(questions);
    await this.flashcards.bulkPut(flashcards);
    await this.glossaryTerms.bulkPut(glossaryTerms);
    await this.roadmapThemes.bulkPut(roadmapThemes);
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
