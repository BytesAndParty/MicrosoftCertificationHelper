import Dexie, { type Table } from 'dexie';
import { QuizQuestion } from '@/types/quiz';

/**
 * AppDatabase - Browser-based IndexedDB for Microsoft AI-900 Helper
 */
export class AppDatabase extends Dexie {
  /** Questions table - searchable by topic, type, etc. */
  questions!: Table<QuizQuestion>;

  constructor() {
    super('AI900HelperDB');
    
    // We define our schema. ++id means auto-incrementing primary key.
    // Indexing 'topic' and 'type' allows fast filtering for specific quiz modes.
    this.version(1).stores({
      questions: 'id, topic, type'
    });
  }

  /**
   * Seeds the database with initial question data if it's empty.
   */
  async seedIfEmpty(initialQuestions: QuizQuestion[]) {
    const count = await this.questions.count();
    if (count === 0) {
      console.info('Database empty, seeding initial quiz questions...');
      await this.questions.bulkAdd(initialQuestions);
      console.info(`Successfully seeded ${initialQuestions.length} questions.`);
    }
  }

  /**
   * Resets the database by clearing all tables.
   */
  async resetDatabase() {
    await this.questions.clear();
    console.info('Database cleared.');
  }
}

/** Central database instance for use across the application */
export const db = new AppDatabase();
