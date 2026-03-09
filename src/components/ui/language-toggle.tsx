"use client"

import { useState, useEffect, useCallback } from 'react';
import { Button } from './button';
import { cn } from '../../lib/utils';

type Language = 'en' | 'de';

const LANG_KEY = 'ai900_lang_pref';
const LANG_CHANGE_EVENT = 'language-changed';

function readLang(): Language {
	try {
		const stored = localStorage.getItem(LANG_KEY);
		if (stored === 'de') return 'de';
	} catch {}
	return 'en';
}

function applyLang(lang: Language) {
	document.documentElement.lang = lang;
	try {
		localStorage.setItem(LANG_KEY, lang);
	} catch {}
	window.dispatchEvent(new CustomEvent(LANG_CHANGE_EVENT, { detail: { language: lang } }));
}

interface LanguageToggleProps {
	className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
	const [lang, setLang] = useState<Language>(() => readLang());

	// Sync on mount + listen for external changes (e.g. keyboard shortcut)
	useEffect(() => {
		setLang(readLang());
		const onExternal = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			if (detail?.language) setLang(detail.language === 'de' ? 'de' : 'en');
		};
		window.addEventListener(LANG_CHANGE_EVENT, onExternal);
		return () => window.removeEventListener(LANG_CHANGE_EVENT, onExternal);
	}, []);

	const toggle = useCallback(() => {
		setLang((prev) => {
			const next: Language = prev === 'en' ? 'de' : 'en';
			applyLang(next);
			return next;
		});
	}, []);

	const label = lang === 'en' ? 'Switch language to German' : 'Sprache auf Englisch wechseln';

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggle}
			aria-label={label}
			title={label}
			className={cn('text-xs font-semibold', className)}
		>
			{lang === 'en' ? 'DE' : 'EN'}
		</Button>
	);
}

export { LANG_CHANGE_EVENT };
