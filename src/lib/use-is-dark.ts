import { useState, useEffect } from 'react';

/** Reactively tracks whether the `.dark` class is on `<html>`. */
export function useIsDark() {
	const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

	useEffect(() => {
		const el = document.documentElement;
		const observer = new MutationObserver(() => {
			setIsDark(el.classList.contains('dark'));
		});
		observer.observe(el, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	return isDark;
}
