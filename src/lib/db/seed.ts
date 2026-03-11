import type { Database } from 'sql.js';

export async function seedStaticData(db: Database): Promise<void> {
	const [
		{ quizQuestions },
		{ flashcards },
		{ glossaryTerms },
		{ roadmapThemes },
	] = await Promise.all([
		import('../../data/quiz-questions.js'),
		import('../../data/flashcards.js'),
		import('../../data/glossary-terms.js'),
		import('../../data/roadmap-themes.js'),
	]);

	db.run('BEGIN TRANSACTION');

	try {
		seedQuizQuestions(db, quizQuestions);
		seedFlashcards(db, flashcards);
		seedGlossaryTerms(db, glossaryTerms);
		seedRoadmapThemes(db, roadmapThemes);
		db.run('COMMIT');
	} catch (err) {
		db.run('ROLLBACK');
		throw err;
	}
}

function seedQuizQuestions(db: Database, questions: any[]): void {
	const insertQ = db.prepare(`
		INSERT OR REPLACE INTO quiz_questions
			(id, topic, type, prompt, prompt_de, hint, hint_de, explanation, explanation_de,
			 answer_index, correct_answer, correct_answer_de,
			 learn_ref_title, learn_ref_url, learn_ref_title_de, learn_ref_url_de)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`);

	const insertOpt = db.prepare(`
		INSERT OR REPLACE INTO quiz_options (question_id, option_index, text, text_de, explanation, explanation_de)
		VALUES (?, ?, ?, ?, ?, ?)
	`);

	const insertTfExpl = db.prepare(`
		INSERT OR REPLACE INTO quiz_tf_explanations (question_id, key, explanation, explanation_de)
		VALUES (?, ?, ?, ?)
	`);

	for (const q of questions) {
		const type = q.type || 'single-choice';
		insertQ.run([
			q.id,
			q.topic,
			type,
			q.prompt,
			q.promptDe || null,
			q.hint || null,
			q.hintDe || null,
			q.explanation || null,
			q.explanationDe || null,
			q.answerIndex ?? null,
			q.correctAnswer || null,
			q.correctAnswerDe || null,
			q.learnRef?.title || null,
			q.learnRef?.url || null,
			q.learnRefDe?.title || null,
			q.learnRefDe?.url || null,
		]);

		if (type === 'single-choice' && Array.isArray(q.options)) {
			for (let i = 0; i < q.options.length; i++) {
				insertOpt.run([
					q.id,
					i,
					q.options[i],
					q.optionsDe?.[i] || null,
					q.optionExplanations?.[i] || null,
					q.optionExplanationsDe?.[i] || null,
				]);
			}
		}

		if (type === 'true-false' && q.optionExplanations && typeof q.optionExplanations === 'object') {
			for (const [key, expl] of Object.entries(q.optionExplanations)) {
				const deKey = key === 'true' ? 'wahr' : key === 'false' ? 'falsch' : key;
				insertTfExpl.run([
					q.id,
					key,
					expl as string,
					(q.optionExplanationsDe as any)?.[deKey] || null,
				]);
			}
		}
	}

	insertQ.free();
	insertOpt.free();
	insertTfExpl.free();
}

function seedFlashcards(db: Database, cards: any[]): void {
	const stmt = db.prepare(`
		INSERT OR REPLACE INTO flashcards (id, topic, front, back, front_de, back_de)
		VALUES (?, ?, ?, ?, ?, ?)
	`);
	for (const c of cards) {
		stmt.run([c.id, c.topic, c.front, c.back, c.frontDe || null, c.backDe || null]);
	}
	stmt.free();
}

function seedGlossaryTerms(db: Database, terms: any[]): void {
	const stmt = db.prepare(`
		INSERT OR REPLACE INTO glossary_terms (id, term, definition, definition_de)
		VALUES (?, ?, ?, ?)
	`);
	for (let i = 0; i < terms.length; i++) {
		const t = terms[i];
		stmt.run([i + 1, t.term, t.definition, t.definitionDe || null]);
	}
	stmt.free();
}

function seedRoadmapThemes(db: Database, themes: any[]): void {
	const stmtTheme = db.prepare(`
		INSERT OR REPLACE INTO roadmap_themes (id, title, title_de, goal, goal_de)
		VALUES (?, ?, ?, ?, ?)
	`);
	const stmtTodo = db.prepare(`
		INSERT OR REPLACE INTO roadmap_todos (theme_id, todo_index, text, text_de)
		VALUES (?, ?, ?, ?)
	`);

	for (const th of themes) {
		stmtTheme.run([th.id, th.title, th.titleDe || null, th.goal, th.goalDe || null]);
		if (Array.isArray(th.todos)) {
			for (let i = 0; i < th.todos.length; i++) {
				stmtTodo.run([th.id, i, th.todos[i], th.todosDe?.[i] || null]);
			}
		}
	}

	stmtTheme.free();
	stmtTodo.free();
}
