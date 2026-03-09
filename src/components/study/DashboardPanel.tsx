import { useMemo, useState, useEffect, useRef } from 'react';
import { useStudyStore, computeReadiness } from '../../lib/study/store';
import { useLanguage } from '../../lib/use-language';

/* ---- i18n ---- */
const i18n = {
	en: {
		quizAccuracy: 'Quiz Accuracy',
		bestExam: 'Best Exam',
		dueCards: 'Due Cards',
		journal: 'Error Journal',
		readinessLabel: 'Exam readiness',
		readinessIdle: 'Readiness is reliable after each question is answered correctly at least once.',
		readinessMeta: 'Quiz {accuracy}% | Best exam {exam}% | Mastered {mastered}/{total} questions',
		historyTitle: 'Learning History',
		streakNone: 'No streak yet',
		streak: 'Streak: {days} days',
		topicTitle: 'Topic trend',
		topicEmpty: 'Answer more quiz questions to unlock topic trends.',
		topicLine: '{topic}: {accuracy}% ({total} answered)',
	},
	de: {
		quizAccuracy: 'Quiz-Genauigkeit',
		bestExam: 'Beste Prüfung',
		dueCards: 'Fällige Karten',
		journal: 'Fehlerjournal',
		readinessLabel: 'Prüfungs-Readiness',
		readinessIdle: 'Der Score wird erst verlässlich, wenn jede Frage mindestens einmal richtig beantwortet wurde.',
		readinessMeta: 'Quiz {accuracy}% | Beste Prüfung {exam}% | Beherrscht {mastered}/{total} Fragen',
		historyTitle: 'Lernverlauf',
		streakNone: 'Noch keine Serie',
		streak: 'Serie: {days} Tage',
		topicTitle: 'Themen-Trend',
		topicEmpty: 'Beantworte mehr Quizfragen, um Themen-Trends zu sehen.',
		topicLine: '{topic}: {accuracy}% ({total} beantwortet)',
	},
} as const;

/* ---- Helpers ---- */
function toDateKey(ts: number): string {
	const d = new Date(ts);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function fmt(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

/* ---- Component ---- */
export function DashboardPanel() {
	const lang = useLanguage();
	const t = i18n[lang];

	const quiz = useStudyStore((s) => s.quiz);
	const examBest = useStudyStore((s) => s.examBest);
	const wrongJournal = useStudyStore((s) => s.wrongJournal);
	const historyDaily = useStudyStore((s) => s.historyDaily);
	const flashcardProgress = useStudyStore((s) => s.flashcards);
	const glossaryProgress = useStudyStore((s) => s.glossaryFlashcards);
	const settings = useStudyStore((s) => s.settings);

	// Compute metrics directly from store
	const metrics = useMemo(() => {
		const answered = Number(quiz?.answered) || 0;
		const correct = Number(quiz?.correct) || 0;
		const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
		const exam = Number(examBest) || 0;
		const journalCount = Object.keys(wrongJournal || {}).length;

		const now = Date.now();
		const flashDue = Object.values(flashcardProgress || {}).filter((p: any) => p?.dueAt <= now).length;
		const glossaryDue = Object.values(glossaryProgress || {}).filter((p: any) => p?.dueAt <= now).length;
		const due = Math.min(flashDue + glossaryDue, settings?.maxReviewsPerDay || 50);

		return { accuracy, exam, due, journal: journalCount };
	}, [quiz, examBest, wrongJournal, flashcardProgress, glossaryProgress, settings]);

	const recommendedMode = useMemo(() => {
		if (metrics.due > 0) return 'flashcards';
		if (metrics.accuracy < 75) return 'quiz';
		if (metrics.exam < 70) return 'exam';
		if (metrics.journal > 0) return 'journal';
		return 'glossary';
	}, [metrics]);

	// Readiness
	const readiness = useMemo(() => {
		const state = useStudyStore.getState();
		return computeReadiness(state);
	}, [quiz, examBest]);

	// Update readiness bar in nav (DOM IDs still used by static HTML)
	useMemo(() => {
		if (typeof document === 'undefined') return;
		const progressEl = document.getElementById('hero-readiness-progress') as HTMLProgressElement | null;
		const valueEl = document.getElementById('hero-readiness-value');
		const metaEl = document.getElementById('hero-readiness-meta');
		const containerEl = document.getElementById('hero-readiness');
		if (progressEl) progressEl.value = readiness.score;
		if (valueEl) valueEl.textContent = `${readiness.score}%`;
		if (metaEl) {
			metaEl.textContent = readiness.totalQuestions > 0 || readiness.examSignal > 0
				? fmt(t.readinessMeta, {
					accuracy: readiness.quizAccuracy,
					exam: readiness.examSignal,
					mastered: readiness.mastered,
					total: readiness.totalQuestions,
				})
				: t.readinessIdle;
		}
		if (containerEl) {
			containerEl.dataset.level = readiness.score >= 80 ? 'high' : readiness.score >= 50 ? 'mid' : 'low';
		}
	}, [readiness, t]);

	useEffect(() => {
		if (typeof document === 'undefined') return;
		const buttons = Array.from(document.querySelectorAll('.hero-mode-btn[data-mode]'));
		buttons.forEach((button) => {
			button.removeAttribute('data-recommended');
		});
		const recommendedButton = document.querySelector(`.hero-mode-btn[data-mode="${recommendedMode}"]`);
		recommendedButton?.setAttribute('data-recommended', 'true');
	}, [recommendedMode]);

	// Streak calculation
	const streakDays = useMemo(() => {
		let count = 0;
		const cursor = new Date();
		cursor.setHours(0, 0, 0, 0);
		while (true) {
			const key = toDateKey(cursor.getTime());
			const day = (historyDaily || {})[key] as any;
			const activity = (day?.answered || 0) + (day?.reviews || 0);
			if (activity <= 0) break;
			count++;
			cursor.setDate(cursor.getDate() - 1);
		}
		return count;
	}, [historyDaily]);

	// Heatmap data (last 28 days)
	const heatmapCells = useMemo(() => {
		const cells: { key: string; level: number; activity: number }[] = [];
		const start = new Date();
		start.setHours(0, 0, 0, 0);
		start.setDate(start.getDate() - 27);
		for (let i = 0; i < 28; i++) {
			const d = new Date(start);
			d.setDate(start.getDate() + i);
			const key = toDateKey(d.getTime());
			const day = (historyDaily || {})[key] as any || { answered: 0, reviews: 0 };
			const activity = (day.answered || 0) + (day.reviews || 0);
			const level = activity >= 10 ? 4 : activity >= 7 ? 3 : activity >= 4 ? 2 : activity >= 1 ? 1 : 0;
			cells.push({ key, level, activity });
		}
		return cells;
	}, [historyDaily]);

	// Topic trend rows
	const topicRows = useMemo(() => {
		const byTopic = quiz?.byTopic || {};
		return Object.entries(byTopic)
			.map(([topic, v]: [string, any]) => {
				const total = Number(v.total) || 0;
				const correct = Number(v.correct) || 0;
				const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
				return { topic, total, accuracy };
			})
			.filter(r => r.total >= 1)
			.sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
			.slice(0, 6);
	}, [quiz]);

	return (
		<>
			{/* Metrics */}
			<section className="metrics reveal" id="metrics" aria-label="Progress metrics">
				<MetricCard label={t.quizAccuracy} value={`${metrics.accuracy}%`} delay={0.3} ratio={metrics.accuracy} />
				<MetricCard label={t.bestExam} value={`${metrics.exam}%`} delay={0.38} ratio={metrics.exam} />
				<MetricCard label={t.dueCards} value={String(metrics.due)} delay={0.46} ratio={Math.round((metrics.due / Math.max(settings?.maxReviewsPerDay || 1, 1)) * 100)} />
				<MetricCard label={t.journal} value={String(metrics.journal)} delay={0.54} ratio={Math.min(metrics.journal * 15, 100)} />
			</section>

			{/* History panel */}
			<section className="history-panel reveal panel" aria-label="Learning history">
				<div className="section-head">
					<h2>{t.historyTitle}</h2>
					<p className="meta">
						{streakDays > 0 ? (
							<>
								{fmt(t.streak, { days: streakDays })}
								{streakDays >= 3 && <span className="streak-flame" aria-hidden="true" title={`${streakDays} days!`}>&#128293;</span>}
							</>
						) : t.streakNone}
					</p>
				</div>
				<div className="history-heatmap" aria-label="Last 28 days study activity">
					{heatmapCells.map(cell => (
						<span
							key={cell.key}
							className={`heat-cell level-${cell.level}`}
							title={`${cell.key}: ${cell.activity}`}
						/>
					))}
				</div>
				<div className="history-topic-block">
					<h3>{t.topicTitle}</h3>
					<div className="history-topic-trend">
						{topicRows.length === 0 && (
							<p className="meta">{t.topicEmpty}</p>
						)}
						{topicRows.map(row => (
							<p
								key={row.topic}
								className={`topic-trend-row ${row.accuracy >= 85 ? 'strong' : row.accuracy < 70 ? 'weak' : 'mid'}`}
							>
								{fmt(t.topicLine, { topic: row.topic, accuracy: row.accuracy, total: row.total })}
							</p>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

/* ---- Animated counter hook ---- */
function useAnimatedNumber(target: number, duration = 600): number {
	const [display, setDisplay] = useState(0);
	const rafRef = useRef<number>(0);
	const startRef = useRef<number | null>(null);
	const fromRef = useRef(0);

	useEffect(() => {
		const prefersReducedMotion = typeof window !== 'undefined'
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) { setDisplay(target); return; }

		fromRef.current = display;
		startRef.current = null;

		const animate = (ts: number) => {
			if (startRef.current === null) startRef.current = ts;
			const elapsed = ts - startRef.current;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
			setDisplay(Math.round(fromRef.current + (target - fromRef.current) * eased));
			if (progress < 1) rafRef.current = requestAnimationFrame(animate);
		};
		rafRef.current = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(rafRef.current);
	}, [target, duration]); // eslint-disable-line react-hooks/exhaustive-deps

	return display;
}

/* ---- Metric card sub-component ---- */
function MetricCard({ label, value, delay, ratio }: { label: string; value: string; delay: number; ratio: number }) {
	const numericPart = parseInt(value, 10);
	const suffix = value.replace(/^\d+/, '');
	const isNumeric = !isNaN(numericPart);
	const animated = useAnimatedNumber(isNumeric ? numericPart : 0);
	const safeRatio = Math.max(0, Math.min(100, Number(ratio) || 0));

	return (
		<article
			className="metric"
			style={{ animationDelay: `${delay}s` }}
		>
			<p>{label}</p>
			<strong>{isNumeric ? `${animated}${suffix}` : value}</strong>
			<div className="metric-indicator" aria-hidden="true">
				<span style={{ width: `${Math.max(safeRatio, 6)}%` }}></span>
			</div>
		</article>
	);
}
