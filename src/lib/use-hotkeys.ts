import { useEffect } from 'react';

type KeyMap = Record<string, (e: KeyboardEvent) => void>;

export function useHotkeys(keyMap: KeyMap, enabled = true) {
	useEffect(() => {
		if (!enabled) return;

		const handler = (e: KeyboardEvent) => {
			if (e.ctrlKey || e.metaKey || e.altKey) return;
			const target = e.target as HTMLElement;
			if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable) return;

			const fn = keyMap[e.key] || keyMap[e.key.toLowerCase()];
			if (fn) fn(e);
		};

		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [keyMap, enabled]);
}
