import initSqlJs, { type Database } from 'sql.js';
import { SCHEMA_SQL, CURRENT_SCHEMA_VERSION } from './schema';
import { seedStaticData } from './seed';

const IDB_NAME = 'ai900-sqlite';
const IDB_STORE = 'db';
const IDB_KEY = 'main';

let db: Database | null = null;
let saveTimer: ReturnType<typeof setTimeout> | null = null;

// ---- Public API ----

export async function initDatabase(): Promise<Database> {
	if (db) return db;

	const SQL = await initSqlJs({
		locateFile: (file: string) => `/${file}`,
	});

	const saved = await loadFromIndexedDB();
	if (saved) {
		db = new SQL.Database(new Uint8Array(saved));
		const version = getSchemaVersion(db);
		if (version < CURRENT_SCHEMA_VERSION) {
			await migrateSchema(db, version);
			persistDatabase();
		}
	} else {
		db = new SQL.Database();
		db.run(SCHEMA_SQL);
		db.run('INSERT INTO schema_version (version) VALUES (?)', [CURRENT_SCHEMA_VERSION]);
		db.run('INSERT INTO quiz_stats (id, answered, correct) VALUES (1, 0, 0)');
		await seedStaticData(db);
		await migrateFromLegacy(db);
		await persistDatabase();
	}

	return db;
}

export function getDb(): Database {
	if (!db) throw new Error('Database not initialized. Call initDatabase() first.');
	return db;
}

export async function persistDatabase(): Promise<void> {
	if (!db) return;
	const data = db.export();
	await saveToIndexedDB(data.buffer as ArrayBuffer);
}

export function persistDatabaseDebounced(delayMs = 150): void {
	if (saveTimer) clearTimeout(saveTimer);
	saveTimer = setTimeout(() => {
		persistDatabase();
		saveTimer = null;
	}, delayMs);
}

export function closeDatabase(): void {
	if (db) {
		db.close();
		db = null;
	}
}

// ---- Schema versioning ----

function getSchemaVersion(database: Database): number {
	try {
		const result = database.exec('SELECT version FROM schema_version LIMIT 1');
		if (result.length > 0 && result[0].values.length > 0) {
			return result[0].values[0][0] as number;
		}
	} catch {
		// Table doesn't exist yet
	}
	return 0;
}

async function migrateSchema(_database: Database, _fromVersion: number): Promise<void> {
	// Future migrations go here
	// if (_fromVersion < 2) { ... }
}

// ---- Legacy state migration ----

async function migrateFromLegacy(database: Database): Promise<void> {
	let legacy: any = null;

	// Try localStorage first (Zustand fallback key)
	try {
		const raw = localStorage.getItem('ai900_state_fallback');
		if (raw) {
			const parsed = JSON.parse(raw);
			legacy = parsed?.state ?? parsed;
		}
	} catch { /* ignore */ }

	// Try IndexedDB if localStorage had nothing useful
	if (!legacy || !legacy.quiz) {
		try {
			legacy = await loadLegacyFromIndexedDB();
		} catch { /* ignore */ }
	}

	if (!legacy) return;

	database.run('BEGIN TRANSACTION');
	try {
		// Quiz stats
		if (legacy.quiz) {
			database.run(
				'UPDATE quiz_stats SET answered = ?, correct = ? WHERE id = 1',
				[legacy.quiz.answered || 0, legacy.quiz.correct || 0]
			);
			if (legacy.quiz.byTopic) {
				const stmt = database.prepare(
					'INSERT OR REPLACE INTO quiz_topic_stats (topic, total, correct) VALUES (?, ?, ?)'
				);
				for (const [topic, stats] of Object.entries(legacy.quiz.byTopic) as any) {
					stmt.run([topic, stats.total || 0, stats.correct || 0]);
				}
				stmt.free();
			}
			if (legacy.quiz.correctByQuestion) {
				const stmt = database.prepare(
					'INSERT OR REPLACE INTO quiz_question_stats (question_id, correct_count) VALUES (?, ?)'
				);
				for (const [qid, count] of Object.entries(legacy.quiz.correctByQuestion)) {
					stmt.run([qid, count as number]);
				}
				stmt.free();
			}
		}

		// Wrong journal
		if (legacy.wrongJournal) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO wrong_journal (question_id, count, last_wrong_at) VALUES (?, ?, ?)'
			);
			for (const [qid, entry] of Object.entries(legacy.wrongJournal) as any) {
				stmt.run([qid, entry.count || 0, entry.lastWrongAt || 0]);
			}
			stmt.free();
		}

		// Saved questions
		if (legacy.savedQuestions) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO saved_questions (question_id, saved_at) VALUES (?, ?)'
			);
			for (const [qid, entry] of Object.entries(legacy.savedQuestions) as any) {
				stmt.run([qid, entry.savedAt || Date.now()]);
			}
			stmt.free();
		}

		// Exam history
		if (legacy.examBest != null) {
			database.run(
				"INSERT OR REPLACE INTO app_state (key, value) VALUES ('examBest', ?)",
				[String(legacy.examBest)]
			);
		}
		if (Array.isArray(legacy.examHistory)) {
			const stmt = database.prepare(
				'INSERT INTO exam_history (timestamp, score, correct, total) VALUES (?, ?, ?, ?)'
			);
			for (const e of legacy.examHistory) {
				stmt.run([e.at || Date.now(), e.score || 0, e.correct || 0, e.total || 0]);
			}
			stmt.free();
		}

		// Flashcard progress
		if (legacy.flashcards) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO flashcard_progress (card_id, interval_days, streak, due_at, last_grade, first_seen_date) VALUES (?, ?, ?, ?, ?, ?)'
			);
			for (const [cid, p] of Object.entries(legacy.flashcards) as any) {
				stmt.run([cid, p.interval || 1, p.streak || 0, p.dueAt || 0, p.last || 'new', p.firstSeenDate || null]);
			}
			stmt.free();
		}

		// Glossary progress
		if (legacy.glossaryFlashcards) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO glossary_progress (card_id, interval_days, streak, due_at, last_grade, first_seen_date) VALUES (?, ?, ?, ?, ?, ?)'
			);
			for (const [cid, p] of Object.entries(legacy.glossaryFlashcards) as any) {
				stmt.run([cid, p.interval || 1, p.streak || 0, p.dueAt || 0, p.last || 'new', p.firstSeenDate || null]);
			}
			stmt.free();
		}

		// Daily history
		if (legacy.historyDaily) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO daily_history (date, answered, correct, reviews) VALUES (?, ?, ?, ?)'
			);
			for (const [date, h] of Object.entries(legacy.historyDaily) as any) {
				stmt.run([date, h.answered || 0, h.correct || 0, h.reviews || 0]);
			}
			stmt.free();
		}

		// Roadmap progress
		if (legacy.roadmapDone) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO roadmap_progress (roadmap_key, done) VALUES (?, ?)'
			);
			for (const [key, done] of Object.entries(legacy.roadmapDone)) {
				stmt.run([key, done ? 1 : 0]);
			}
			stmt.free();
		}

		// Settings
		if (legacy.settings) {
			const stmt = database.prepare(
				'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)'
			);
			for (const [key, value] of Object.entries(legacy.settings)) {
				stmt.run([key, JSON.stringify(value)]);
			}
			stmt.free();
		}

		// App state
		if (legacy.hasSeenWelcome) {
			database.run(
				"INSERT OR REPLACE INTO app_state (key, value) VALUES ('hasSeenWelcome', '1')"
			);
		}

		database.run('COMMIT');
	} catch (err) {
		database.run('ROLLBACK');
		console.warn('[db] Legacy migration failed:', err);
	}
}

async function loadLegacyFromIndexedDB(): Promise<any> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open('ai900-study-helper', 1);
		req.onerror = () => reject(req.error);
		req.onsuccess = () => {
			const idb = req.result;
			if (!idb.objectStoreNames.contains('kv')) {
				idb.close();
				return resolve(null);
			}
			const tx = idb.transaction('kv', 'readonly');
			const store = tx.objectStore('kv');
			const get = store.get('state');
			get.onsuccess = () => {
				idb.close();
				resolve(get.result?.value ?? null);
			};
			get.onerror = () => {
				idb.close();
				reject(get.error);
			};
		};
		req.onupgradeneeded = () => {
			req.result.close();
			resolve(null);
		};
	});
}

// ---- IndexedDB persistence (new SQLite store) ----

function openIdb(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(IDB_NAME, 1);
		req.onerror = () => reject(req.error);
		req.onupgradeneeded = () => {
			const idb = req.result;
			if (!idb.objectStoreNames.contains(IDB_STORE)) {
				idb.createObjectStore(IDB_STORE);
			}
		};
		req.onsuccess = () => resolve(req.result);
	});
}

async function saveToIndexedDB(buffer: ArrayBuffer): Promise<void> {
	const idb = await openIdb();
	return new Promise((resolve, reject) => {
		const tx = idb.transaction(IDB_STORE, 'readwrite');
		tx.objectStore(IDB_STORE).put(buffer, IDB_KEY);
		tx.oncomplete = () => { idb.close(); resolve(); };
		tx.onerror = () => { idb.close(); reject(tx.error); };
	});
}

async function loadFromIndexedDB(): Promise<ArrayBuffer | null> {
	try {
		const idb = await openIdb();
		return new Promise((resolve, reject) => {
			const tx = idb.transaction(IDB_STORE, 'readonly');
			const get = tx.objectStore(IDB_STORE).get(IDB_KEY);
			get.onsuccess = () => { idb.close(); resolve(get.result ?? null); };
			get.onerror = () => { idb.close(); reject(get.error); };
		});
	} catch {
		return null;
	}
}
