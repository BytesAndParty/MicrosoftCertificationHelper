import { useEffect, useRef } from 'react';

type HotkeyHandler = (e: KeyboardEvent) => void;

interface HotkeyBinding {
	/** Key to match (case-insensitive), e.g. 'd', 'Enter', 'Escape', '?' */
	key: string;
	/** Handler to call when key is pressed */
	handler: HotkeyHandler;
	/** Require Ctrl/Cmd (default: false) */
	mod?: boolean;
	/** Require Shift (default: false) */
	shift?: boolean;
	/** Require Alt (default: false) */
	alt?: boolean;
	/** Allow firing when an input/textarea is focused (default: false) */
	allowInput?: boolean;
	/** Prevent default browser behavior (default: true) */
	preventDefault?: boolean;
}

/**
 * React hook for declarative keyboard shortcuts.
 *
 * Bindings are re-evaluated on every render via refs (no effect re-run needed).
 * Respects `prefers-reduced-motion` is not relevant here, but we do skip
 * shortcuts when the user is typing in an input/textarea/select unless
 * `allowInput` is true.
 *
 * @example
 * useHotkeys([
 *   { key: 'd', handler: () => toggleTheme() },
 *   { key: 'l', handler: () => toggleLanguage() },
 *   { key: 'Escape', handler: () => closeOverlay(), allowInput: true },
 * ]);
 */
export function useHotkeys(bindings: HotkeyBinding[], enabled = true) {
	const bindingsRef = useRef(bindings);
	bindingsRef.current = bindings;

	useEffect(() => {
		if (!enabled) return;

		function onKeyDown(e: KeyboardEvent) {
			const target = e.target;
			const isInput =
				target instanceof HTMLElement &&
				(target.tagName === 'INPUT' ||
					target.tagName === 'TEXTAREA' ||
					target.tagName === 'SELECT' ||
					target.isContentEditable);

			for (const binding of bindingsRef.current) {
				if (isInput && !binding.allowInput) continue;
				if (binding.mod && !(e.metaKey || e.ctrlKey)) continue;
				if (binding.shift && !e.shiftKey) continue;
				if (binding.alt && !e.altKey) continue;
				if (!binding.mod && (e.metaKey || e.ctrlKey)) continue;

				if (e.key.toLowerCase() === binding.key.toLowerCase() || e.key === binding.key) {
					if (binding.preventDefault !== false) e.preventDefault();
					binding.handler(e);
					return;
				}
			}
		}

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [enabled]);
}
