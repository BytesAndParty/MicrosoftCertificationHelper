import { useEffect, useRef } from 'react';
import { useStudyStore } from '../lib/study/store';
import { flashcards } from '../data/flashcards';
import { glossaryTerms } from '../data/glossary-terms';

const THEME_KEY = 'ai900_theme_pref';
const LANG_KEY = 'ai900_lang_pref';
const THEME_MEDIA = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

const glossaryCards = glossaryTerms.map((item, index) => ({
	id: `g${index + 1}`,
	topic: 'Glossary',
	front: item.term,
	back: item.definition,
	frontDe: item.term,
	backDe: item.definitionDe || item.definition,
}));

function openMode(mode: string, detail?: Record<string, unknown>) {
	window.dispatchEvent(new CustomEvent('study-mode-open', { detail: { mode, ...detail } }));
}

function readStoredTheme(): string | null {
	try {
		const v = localStorage.getItem(THEME_KEY);
		return v === 'dark' || v === 'light' ? v : null;
	} catch { return null; }
}

function resolveTheme(pref: string | null): string {
	if (pref === 'dark' || pref === 'light') return pref;
	return THEME_MEDIA?.matches ? 'dark' : 'light';
}

function applyTheme(theme: string) {
	document.documentElement.dataset.theme = theme;
	document.documentElement.classList.toggle('dark', theme === 'dark');
}

function toggleTheme() {
	const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	const next = current === 'dark' ? 'light' : 'dark';
	applyTheme(next);
	try { localStorage.setItem(THEME_KEY, next); } catch {}
}

function toggleLanguage() {
	const current = document.documentElement.lang === 'de' ? 'de' : 'en';
	const next = current === 'de' ? 'en' : 'de';
	document.documentElement.lang = next;
	try { localStorage.setItem(LANG_KEY, next); } catch {}
	window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: next } }));
}

function applyI18nAttributes(lang: string) {
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const key = el.getAttribute('data-i18n');
		if (!key) return;
		const translations: Record<string, Record<string, string>> = {
			en: {
				'readiness.label': 'Exam readiness',
				'readiness.metaIdle': 'Readiness is reliable after each question is answered correctly at least once.',
				'shortcuts.title': 'Keyboard shortcuts',
				'shortcuts.quiz': '1-4 Answer | H Hint | S Skip | N Next | B Bookmark',
				'shortcuts.flash': 'Space Reveal | H Hint (Flashcards) | N Next Card | 1 Again | 2 Good | 3 Easy | F Search (Glossary)',
				'shortcuts.global': 'Q Quiz | E Exam | F Flashcards | G Glossary | J Journal | O Settings | D Theme | L Language | ? Shortcuts | ESC Close',
				'reset.button': 'Reset progress',
				'a11y.skipLink': 'Skip to study workspace',
				'tabs.quiz': 'Quiz',
				'tabs.exam': 'Exam',
				'tabs.flashcards': 'Flashcards',
				'tabs.glossary': 'Glossary',
				'tabs.journal': 'Error Journal',
				'hero.modeQuizDesc': 'Instant feedback',
				'hero.modeExamDesc': 'Timed simulation',
				'hero.modeFlashcardsDesc': 'Spaced repetition',
				'hero.modeGlossaryDesc': 'Term flashcards',
				'hero.modeJournalDesc': 'Review mistakes',
			},
			de: {
				'readiness.label': 'Prüfungs-Readiness',
				'readiness.metaIdle': 'Der Score wird erst verlässlich, wenn jede Frage mindestens einmal richtig beantwortet wurde.',
				'shortcuts.title': 'Tastenkürzel',
				'shortcuts.quiz': '1-4 Antwort | H Hinweis | S Überspringen | N Weiter | B Merken',
				'shortcuts.flash': 'Leertaste Aufdecken | H Hinweis | N Nächste Karte | 1 Nochmal | 2 Gut | 3 Sicher | F Suche',
				'shortcuts.global': 'Q Quiz | E Prüfung | F Flashcards | G Glossar | J Journal | O Einstellungen | D Theme | L Sprache | ? Kürzel | ESC Schließen',
				'reset.button': 'Fortschritt zurücksetzen',
				'a11y.skipLink': 'Zum Lernbereich springen',
				'tabs.quiz': 'Quiz',
				'tabs.exam': 'Prüfung',
				'tabs.flashcards': 'Flashcards',
				'tabs.glossary': 'Glossar',
				'tabs.journal': 'Fehlerjournal',
				'hero.modeQuizDesc': 'Sofort-Feedback',
				'hero.modeExamDesc': 'Zeitsimulation',
				'hero.modeFlashcardsDesc': 'Spaced Repetition',
				'hero.modeGlossaryDesc': 'Begriffs-Karten',
				'hero.modeJournalDesc': 'Fehler üben',
			},
		};
		const text = translations[lang]?.[key] || translations.en?.[key];
		if (text) el.textContent = text;
	});

	document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
		const key = el.getAttribute('data-i18n-aria-label');
		if (!key) return;
		const labels: Record<string, Record<string, string>> = {
			en: { 'readiness.label': 'Exam readiness', 'tabs.ariaLabel': 'Study modes', 'settings.title': 'Settings' },
			de: { 'readiness.label': 'Prüfungs-Readiness', 'tabs.ariaLabel': 'Lernmodi', 'settings.title': 'Einstellungen' },
		};
		const label = labels[lang]?.[key] || labels.en?.[key];
		if (label) el.setAttribute('aria-label', label);
	});

	document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
		const key = el.getAttribute('data-i18n-tooltip');
		if (!key) return;
		const tooltips: Record<string, Record<string, string>> = {
			en: {
				'tooltip.quiz': 'Answer questions with instant feedback and track your accuracy over time.',
				'tooltip.exam': 'Simulate a timed exam with 10 questions in 20 minutes and get a detailed review.',
				'tooltip.flashcards': 'Study AI-900 concepts with spaced repetition. Rate cards as Again, Good, or Easy.',
				'tooltip.glossary': 'Browse and memorize AI-900 terms as flashcards with search and spaced repetition.',
				'tooltip.journal': 'Review your most frequent mistakes and practice the questions you got wrong.',
			},
			de: {
				'tooltip.quiz': 'Beantworte Fragen mit Sofort-Feedback und verfolge deine Genauigkeit über die Zeit.',
				'tooltip.exam': 'Simuliere eine Zeitprüfung mit 10 Fragen in 20 Minuten und erhalte eine detaillierte Auswertung.',
				'tooltip.flashcards': 'Lerne AI-900 Konzepte mit Spaced Repetition. Bewerte Karten als Nochmal, Gut oder Sicher.',
				'tooltip.glossary': 'Durchsuche und merke dir AI-900 Begriffe als Karteikarten mit Suche und Spaced Repetition.',
				'tooltip.journal': 'Wiederhole deine häufigsten Fehler und übe die Fragen, die du falsch beantwortet hast.',
			},
		};
		const tip = tooltips[lang]?.[key] || tooltips.en?.[key];
		if (tip) el.setAttribute('data-tooltip', tip);
	});
}

/**
 * Global runtime component that replaces study-runtime.js.
 * Handles: theme/language init, keyboard shortcuts, mode button clicks,
 * welcome dialog, reset progress, card progress initialization.
 */
export default function GlobalRuntime() {
	const hasSeenWelcome = useStudyStore((s) => s.hasSeenWelcome);
	const setHasSeenWelcome = useStudyStore((s) => s.setHasSeenWelcome);
	const resetStudyState = useStudyStore((s) => s.resetStudyState);
	const initializeCardProgress = useStudyStore((s) => s.initializeCardProgress);
	const initDone = useRef(false);

	// One-time initialization
	useEffect(() => {
		if (initDone.current) return;
		initDone.current = true;

		// Theme
		applyTheme(resolveTheme(readStoredTheme()));
		if (THEME_MEDIA) {
			const onChange = (e: MediaQueryListEvent) => {
				if (readStoredTheme()) return;
				applyTheme(e.matches ? 'dark' : 'light');
			};
			THEME_MEDIA.addEventListener('change', onChange);
		}

		// Language
		const storedLang = (() => {
			try { return localStorage.getItem(LANG_KEY) === 'de' ? 'de' : 'en'; }
			catch { return 'en'; }
		})();
		document.documentElement.lang = storedLang;
		applyI18nAttributes(storedLang);

		// Accent
		const settings = useStudyStore.getState().settings;
		const palette = settings?.accentPalette || 'amber';
		document.documentElement.dataset.accent = palette;

		// Initialize card progress for new cards
		initializeCardProgress(flashcards, glossaryCards);

		// Mode button clicks
		document.querySelectorAll<HTMLElement>('[data-mode]').forEach(btn => {
			btn.addEventListener('click', () => {
				const mode = btn.dataset.mode;
				if (mode) openMode(mode);
			});
		});

		// Settings toggle
		const settingsToggle = document.getElementById('settings-toggle');
		if (settingsToggle) {
			settingsToggle.addEventListener('click', () => openMode('settings'));
		}

		// Reset progress
		const resetBtn = document.getElementById('reset-progress');
		if (resetBtn) {
			resetBtn.addEventListener('click', () => {
				const lang = document.documentElement.lang === 'de' ? 'de' : 'en';
				const msg = lang === 'de' ? 'Fortschritt zurücksetzen?' : 'Reset all learning progress?';
				if (confirm(msg)) {
					resetStudyState(flashcards, glossaryCards);
				}
			});
		}

		// Welcome dialog
		const welcomeOverlay = document.getElementById('overlay-welcome');
		const welcomeStart = document.getElementById('welcome-start');
		if (welcomeOverlay && welcomeStart && !useStudyStore.getState().hasSeenWelcome) {
			welcomeOverlay.hidden = false;
			document.body.style.overflow = 'hidden';
			welcomeStart.addEventListener('click', () => {
				useStudyStore.getState().setHasSeenWelcome(true);
				welcomeOverlay.hidden = true;
				document.body.style.overflow = '';
			});
		}
	}, []);

	// Language change sync
	useEffect(() => {
		const handler = (e: Event) => {
			const lang = (e as CustomEvent).detail?.language;
			if (lang) {
				document.documentElement.lang = lang;
				applyI18nAttributes(lang);
			}
		};
		window.addEventListener('language-changed', handler);
		return () => window.removeEventListener('language-changed', handler);
	}, []);

	// Settings change sync (accent palette)
	useEffect(() => {
		const handler = (e: Event) => {
			const settings = useStudyStore.getState().settings;
			if (settings?.accentPalette) {
				document.documentElement.dataset.accent = settings.accentPalette;
			}
		};
		// Subscribe to store changes for accent
		const unsub = useStudyStore.subscribe((state, prev) => {
			if (state.settings?.accentPalette !== prev.settings?.accentPalette) {
				document.documentElement.dataset.accent = state.settings.accentPalette;
			}
		});
		return () => unsub();
	}, []);

	// Global keyboard shortcuts
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			const target = e.target;
			if (
				target instanceof HTMLElement &&
				(target.tagName === 'INPUT' ||
					target.tagName === 'TEXTAREA' ||
					target.tagName === 'SELECT' ||
					target.isContentEditable)
			) return;

			const key = e.key.toLowerCase();

			if (key === 'q') { e.preventDefault(); openMode('quiz'); return; }
			if (key === 'e') { e.preventDefault(); openMode('exam'); return; }
			if (key === 'f') { e.preventDefault(); openMode('flashcards'); return; }
			if (key === 'g') { e.preventDefault(); openMode('glossary'); return; }
			if (key === 'j') { e.preventDefault(); openMode('journal'); return; }
			if (key === 'o') { e.preventDefault(); openMode('settings'); return; }
			if (key === 'd') { e.preventDefault(); toggleTheme(); return; }
			if (key === 'l') { e.preventDefault(); toggleLanguage(); return; }
			if (e.key === '?') {
				e.preventDefault();
				const panel = document.getElementById('shortcuts-panel') as HTMLDetailsElement | null;
				if (panel) {
					panel.open = !panel.open;
					if (panel.open) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
				}
			}
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, []);

	// Journal "Practice now" bridge
	useEffect(() => {
		const handler = (e: Event) => {
			const { questionId } = (e as CustomEvent).detail || {};
			if (questionId) openMode('quiz', { questionId });
		};
		window.addEventListener('journal-practice', handler);
		return () => window.removeEventListener('journal-practice', handler);
	}, []);

	return null; // No UI — this component only runs side effects
}
