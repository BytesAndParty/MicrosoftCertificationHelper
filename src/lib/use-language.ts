import { useState, useEffect } from 'react';

type Language = 'en' | 'de';

export function useLanguage(): Language {
	const [lang, setLang] = useState<Language>(() => {
		const docLang = document.documentElement.lang;
		return docLang === 'de' ? 'de' : 'en';
	});

	useEffect(() => {
		const handler = (e: Event) => {
			const detail = (e as CustomEvent).detail;
			const next = detail?.language === 'de' ? 'de' : 'en';
			setLang(next);
		};
		window.addEventListener('language-changed', handler);
		return () => window.removeEventListener('language-changed', handler);
	}, []);

	return lang;
}
