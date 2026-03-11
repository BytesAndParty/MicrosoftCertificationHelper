export const SCHEMA_SQL = `
-- ===== Static data tables =====

CREATE TABLE IF NOT EXISTS quiz_questions (
  id TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'single-choice',
  prompt TEXT NOT NULL,
  prompt_de TEXT,
  hint TEXT,
  hint_de TEXT,
  explanation TEXT,
  explanation_de TEXT,
  answer_index INTEGER,
  correct_answer TEXT,
  correct_answer_de TEXT,
  learn_ref_title TEXT,
  learn_ref_url TEXT,
  learn_ref_title_de TEXT,
  learn_ref_url_de TEXT
);

CREATE TABLE IF NOT EXISTS quiz_options (
  question_id TEXT NOT NULL,
  option_index INTEGER NOT NULL,
  text TEXT NOT NULL,
  text_de TEXT,
  explanation TEXT,
  explanation_de TEXT,
  PRIMARY KEY (question_id, option_index),
  FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);

CREATE TABLE IF NOT EXISTS quiz_tf_explanations (
  question_id TEXT NOT NULL,
  key TEXT NOT NULL,
  explanation TEXT NOT NULL,
  explanation_de TEXT,
  PRIMARY KEY (question_id, key),
  FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);

CREATE TABLE IF NOT EXISTS flashcards (
  id TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  front_de TEXT,
  back_de TEXT
);

CREATE TABLE IF NOT EXISTS glossary_terms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  term TEXT NOT NULL,
  definition TEXT NOT NULL,
  definition_de TEXT
);

CREATE TABLE IF NOT EXISTS roadmap_themes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  title_de TEXT,
  goal TEXT NOT NULL,
  goal_de TEXT
);

CREATE TABLE IF NOT EXISTS roadmap_todos (
  theme_id TEXT NOT NULL,
  todo_index INTEGER NOT NULL,
  text TEXT NOT NULL,
  text_de TEXT,
  PRIMARY KEY (theme_id, todo_index),
  FOREIGN KEY (theme_id) REFERENCES roadmap_themes(id)
);

-- ===== User state tables =====

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS quiz_stats (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  answered INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS quiz_topic_stats (
  topic TEXT PRIMARY KEY,
  total INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS quiz_question_stats (
  question_id TEXT PRIMARY KEY,
  correct_count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS wrong_journal (
  question_id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  last_wrong_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS saved_questions (
  question_id TEXT PRIMARY KEY,
  saved_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS exam_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp INTEGER NOT NULL,
  score REAL NOT NULL,
  correct INTEGER NOT NULL,
  total INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS flashcard_progress (
  card_id TEXT PRIMARY KEY,
  interval_days INTEGER NOT NULL DEFAULT 1,
  streak INTEGER NOT NULL DEFAULT 0,
  due_at INTEGER NOT NULL,
  last_grade TEXT NOT NULL DEFAULT 'new',
  first_seen_date TEXT
);

CREATE TABLE IF NOT EXISTS glossary_progress (
  card_id TEXT PRIMARY KEY,
  interval_days INTEGER NOT NULL DEFAULT 1,
  streak INTEGER NOT NULL DEFAULT 0,
  due_at INTEGER NOT NULL,
  last_grade TEXT NOT NULL DEFAULT 'new',
  first_seen_date TEXT
);

CREATE TABLE IF NOT EXISTS daily_history (
  date TEXT PRIMARY KEY,
  answered INTEGER NOT NULL DEFAULT 0,
  correct INTEGER NOT NULL DEFAULT 0,
  reviews INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS roadmap_progress (
  roadmap_key TEXT PRIMARY KEY,
  done INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS app_state (
  key TEXT PRIMARY KEY,
  value TEXT
);

-- ===== Metadata =====

CREATE TABLE IF NOT EXISTS schema_version (
  version INTEGER PRIMARY KEY
);
`;

export const CURRENT_SCHEMA_VERSION = 1;
