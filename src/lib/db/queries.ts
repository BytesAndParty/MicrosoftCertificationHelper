import type { Database } from 'sql.js';
import { getDb, persistDatabaseDebounced } from './database';

// ---- Helpers ----

function db(): Database {
	return getDb();
}

function queryAll(sql: string, params: any[] = []): any[] {
	const result = db().exec(sql, params);
	if (result.length === 0) return [];
	const { columns, values } = result[0];
	return values.map(row => {
		const obj: any = {};
		columns.forEach((col, i) => { obj[col] = row[i]; });
		return obj;
	});
}

function queryOne(sql: string, params: any[] = []): any | null {
	const rows = queryAll(sql, params);
	return rows[0] ?? null;
}

function run(sql: string, params: any[] = []): void {
	db().run(sql, params);
	persistDatabaseDebounced();
}

// ---- Static data reads ----

export function getAllQuizQuestions(): any[] {
	const questions = queryAll('SELECT * FROM quiz_questions ORDER BY id');
	for (const q of questions) {
		if (q.type === 'single-choice') {
			q.options = queryAll(
				'SELECT * FROM quiz_options WHERE question_id = ? ORDER BY option_index', [q.id]
			);
		} else if (q.type === 'true-false') {
			q.tfExplanations = queryAll(
				'SELECT * FROM quiz_tf_explanations WHERE question_id = ?', [q.id]
			);
		}
	}
	return questions;
}

export function getQuizQuestionById(id: string): any | null {
	const q = queryOne('SELECT * FROM quiz_questions WHERE id = ?', [id]);
	if (!q) return null;
	if (q.type === 'single-choice') {
		q.options = queryAll(
			'SELECT * FROM quiz_options WHERE question_id = ? ORDER BY option_index', [q.id]
		);
	} else if (q.type === 'true-false') {
		q.tfExplanations = queryAll(
			'SELECT * FROM quiz_tf_explanations WHERE question_id = ?', [q.id]
		);
	}
	return q;
}

export function getQuizQuestionCount(): number {
	return queryOne('SELECT COUNT(*) as count FROM quiz_questions')?.count ?? 0;
}

export function getAllFlashcards(): any[] {
	return queryAll('SELECT * FROM flashcards ORDER BY id');
}

export function getAllGlossaryTerms(): any[] {
	return queryAll('SELECT * FROM glossary_terms ORDER BY id');
}

export function getAllRoadmapThemes(): any[] {
	const themes = queryAll('SELECT * FROM roadmap_themes ORDER BY id');
	for (const th of themes) {
		th.todos = queryAll(
			'SELECT * FROM roadmap_todos WHERE theme_id = ? ORDER BY todo_index', [th.id]
		);
	}
	return themes;
}

// ---- User state reads ----

export function getQuizStats(): { answered: number; correct: number } {
	return queryOne('SELECT answered, correct FROM quiz_stats WHERE id = 1') ?? { answered: 0, correct: 0 };
}

export function getQuizTopicStats(): Record<string, { total: number; correct: number }> {
	const rows = queryAll('SELECT * FROM quiz_topic_stats');
	const out: Record<string, { total: number; correct: number }> = {};
	for (const r of rows) out[r.topic] = { total: r.total, correct: r.correct };
	return out;
}

export function getQuizQuestionStats(): Record<string, number> {
	const rows = queryAll('SELECT * FROM quiz_question_stats');
	const out: Record<string, number> = {};
	for (const r of rows) out[r.question_id] = r.correct_count;
	return out;
}

export function getWrongJournal(): Record<string, { count: number; lastWrongAt: number }> {
	const rows = queryAll('SELECT * FROM wrong_journal');
	const out: Record<string, { count: number; lastWrongAt: number }> = {};
	for (const r of rows) out[r.question_id] = { count: r.count, lastWrongAt: r.last_wrong_at };
	return out;
}

export function getSavedQuestions(): Record<string, { savedAt: number }> {
	const rows = queryAll('SELECT * FROM saved_questions');
	const out: Record<string, { savedAt: number }> = {};
	for (const r of rows) out[r.question_id] = { savedAt: r.saved_at };
	return out;
}

export function getExamHistory(): { at: number; score: number; correct: number; total: number }[] {
	return queryAll('SELECT timestamp as at, score, correct, total FROM exam_history ORDER BY timestamp DESC LIMIT 15');
}

export function getFlashcardProgress(): Record<string, any> {
	const rows = queryAll('SELECT * FROM flashcard_progress');
	const out: Record<string, any> = {};
	for (const r of rows) {
		out[r.card_id] = {
			interval: r.interval_days, streak: r.streak,
			dueAt: r.due_at, last: r.last_grade, firstSeenDate: r.first_seen_date,
		};
	}
	return out;
}

export function getGlossaryProgress(): Record<string, any> {
	const rows = queryAll('SELECT * FROM glossary_progress');
	const out: Record<string, any> = {};
	for (const r of rows) {
		out[r.card_id] = {
			interval: r.interval_days, streak: r.streak,
			dueAt: r.due_at, last: r.last_grade, firstSeenDate: r.first_seen_date,
		};
	}
	return out;
}

export function getDailyHistory(): Record<string, { answered: number; correct: number; reviews: number }> {
	const rows = queryAll('SELECT * FROM daily_history');
	const out: Record<string, any> = {};
	for (const r of rows) out[r.date] = { answered: r.answered, correct: r.correct, reviews: r.reviews };
	return out;
}

export function getRoadmapProgress(): Record<string, boolean> {
	const rows = queryAll('SELECT * FROM roadmap_progress');
	const out: Record<string, boolean> = {};
	for (const r of rows) out[r.roadmap_key] = r.done === 1;
	return out;
}

export function getSettings(): Record<string, any> {
	const rows = queryAll('SELECT * FROM settings');
	const out: Record<string, any> = {};
	for (const r of rows) {
		try { out[r.key] = JSON.parse(r.value); } catch { out[r.key] = r.value; }
	}
	return out;
}

export function getAppState(key: string): string | null {
	return queryOne('SELECT value FROM app_state WHERE key = ?', [key])?.value ?? null;
}

// ---- User state writes ----

export function recordQuizAnswer(questionId: string, topic: string, correct: boolean): void {
	run('UPDATE quiz_stats SET answered = answered + 1, correct = correct + ? WHERE id = 1', [correct ? 1 : 0]);
	run(`INSERT INTO quiz_topic_stats (topic, total, correct) VALUES (?, 1, ?)
		ON CONFLICT(topic) DO UPDATE SET total = total + 1, correct = correct + ?`,
		[topic, correct ? 1 : 0, correct ? 1 : 0]);
	if (correct) {
		run(`INSERT INTO quiz_question_stats (question_id, correct_count) VALUES (?, 1)
			ON CONFLICT(question_id) DO UPDATE SET correct_count = correct_count + 1`, [questionId]);
	}
}

export function recordWrongAnswer(questionId: string): void {
	run(`INSERT INTO wrong_journal (question_id, count, last_wrong_at) VALUES (?, 1, ?)
		ON CONFLICT(question_id) DO UPDATE SET count = count + 1, last_wrong_at = ?`,
		[questionId, Date.now(), Date.now()]);
}

export function toggleSavedQuestion(questionId: string): boolean {
	const existing = queryOne('SELECT question_id FROM saved_questions WHERE question_id = ?', [questionId]);
	if (existing) {
		run('DELETE FROM saved_questions WHERE question_id = ?', [questionId]);
		return false;
	}
	run('INSERT INTO saved_questions (question_id, saved_at) VALUES (?, ?)', [questionId, Date.now()]);
	return true;
}

export function recordExamResult(score: number, correct: number, total: number): void {
	run('INSERT INTO exam_history (timestamp, score, correct, total) VALUES (?, ?, ?, ?)',
		[Date.now(), score, correct, total]);
	const best = Number(getAppState('examBest') ?? '0');
	if (score > best) {
		run("INSERT OR REPLACE INTO app_state (key, value) VALUES ('examBest', ?)", [String(score)]);
	}
}

export function updateFlashcardProgress(cardId: string, progress: any): void {
	run(`INSERT OR REPLACE INTO flashcard_progress (card_id, interval_days, streak, due_at, last_grade, first_seen_date)
		VALUES (?, ?, ?, ?, ?, ?)`,
		[cardId, progress.interval, progress.streak, progress.dueAt, progress.last, progress.firstSeenDate || null]);
}

export function updateGlossaryProgress(cardId: string, progress: any): void {
	run(`INSERT OR REPLACE INTO glossary_progress (card_id, interval_days, streak, due_at, last_grade, first_seen_date)
		VALUES (?, ?, ?, ?, ?, ?)`,
		[cardId, progress.interval, progress.streak, progress.dueAt, progress.last, progress.firstSeenDate || null]);
}

export function trackDailyActivity(date: string, answered: number, correct: number, reviews: number): void {
	run(`INSERT INTO daily_history (date, answered, correct, reviews) VALUES (?, ?, ?, ?)
		ON CONFLICT(date) DO UPDATE SET answered = answered + ?, correct = correct + ?, reviews = reviews + ?`,
		[date, answered, correct, reviews, answered, correct, reviews]);
}

export function setRoadmapDone(key: string, done: boolean): void {
	run('INSERT OR REPLACE INTO roadmap_progress (roadmap_key, done) VALUES (?, ?)', [key, done ? 1 : 0]);
}

export function setSetting(key: string, value: any): void {
	run('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)', [key, JSON.stringify(value)]);
}

export function setAppState(key: string, value: string): void {
	run("INSERT OR REPLACE INTO app_state (key, value) VALUES (?, ?)", [key, value]);
}
