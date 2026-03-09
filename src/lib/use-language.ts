import { useState, useEffect } from 'react';

type Language = 'en' | 'de';

const LANG_KEY = 'ai900_lang_pref';
const LANG_CHANGE_EVENT = 'language-changed';

function readLang(): Language {
	if (typeof window === 'undefined') return 'en';
	try {
		const stored = localStorage.getItem(LANG_KEY);
		if (stored === 'de') return 'de';
	} catch {}
	return document.documentElement.lang === 'de' ? 'de' : 'en';
}

export function useLanguage(): Language {
	const [lang, setLang] = useState<Language>(() => readLang());

	useEffect(() => {
		setLang(readLang());
		const onchange = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			if (detail?.language) setLang(detail.language === 'de' ? 'de' : 'en');
		};
		window.addEventListener(LANG_CHANGE_EVENT, onchange);
		return () => window.removeEventListener(LANG_CHANGE_EVENT, onchange);
	}, []);

	return lang;
}
