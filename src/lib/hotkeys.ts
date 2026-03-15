import { useEffect, useCallback } from 'react';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface Shortcut {
	/** Key to match (lowercase). Use "Space", "Escape", "1", "a", etc. */
	key: string;
	/** Human-readable label for the help overlay */
	label: string;
	/** Callback when the shortcut fires */
	action: () => void;
	/** Require modifier keys */
	mod?: { ctrl?: boolean; shift?: boolean; alt?: boolean; meta?: boolean };
	/** Highlight this shortcut in accent color */
	highlight?: boolean;
}

export type ShortcutScope = 'global' | 'quiz' | 'flashcards' | 'glossary' | 'exam';

export type ShortcutMap = Partial<Record<ShortcutScope, Shortcut[]>>;

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

/** Returns true if the event target is an input, textarea, or contenteditable */
function isEditableTarget(e: KeyboardEvent): boolean {
	const tag = (e.target as HTMLElement)?.tagName;
	if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
	if ((e.target as HTMLElement)?.isContentEditable) return true;
	return false;
}

/** Normalize KeyboardEvent.key to our shortcut key format */
function normalizeKey(e: KeyboardEvent): string {
	if (e.key === ' ') return 'Space';
	if (e.key === '?') return '?';
	return e.key.toLowerCase();
}

function modsMatch(e: KeyboardEvent, mod?: Shortcut['mod']): boolean {
	if (!mod) {
		// No modifier required — make sure none are pressed (except Shift for "?" etc.)
		return !e.ctrlKey && !e.altKey && !e.metaKey;
	}
	return (
		!!mod.ctrl === e.ctrlKey &&
		!!mod.shift === e.shiftKey &&
		!!mod.alt === e.altKey &&
		!!mod.meta === e.metaKey
	);
}

/* -------------------------------------------------------------------------- */
/*  Hook                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Registers keyboard shortcuts for the given scopes.
 * Global shortcuts always fire. Scope shortcuts only fire when that scope is active.
 *
 * @param shortcuts - The full shortcut map
 * @param activeScope - The currently active scope (determined by route)
 */
export function useHotkeys(shortcuts: ShortcutMap, activeScope?: ShortcutScope) {
	const handler = useCallback(
		(e: KeyboardEvent) => {
			if (isEditableTarget(e)) return;

			const key = normalizeKey(e);

			// Merge global + active scope shortcuts
			const active: Shortcut[] = [
				...(shortcuts.global ?? []),
				...(activeScope && activeScope !== 'global' ? (shortcuts[activeScope] ?? []) : []),
			];

			for (const shortcut of active) {
				// Support range keys like "1-4" for quiz options
				if (shortcut.key.includes('-') && /^\d-\d$/.test(shortcut.key)) {
					const [start, end] = shortcut.key.split('-');
					if (start && end) {
						const keyNum = parseInt(key, 10);
						const startNum = parseInt(start, 10);
						const endNum = parseInt(end, 10);
						if (!isNaN(keyNum) && keyNum >= startNum && keyNum <= endNum && modsMatch(e, shortcut.mod)) {
							e.preventDefault();
							shortcut.action();
							return;
						}
					}
					continue;
				}

				if (key === shortcut.key.toLowerCase() && modsMatch(e, shortcut.mod)) {
					e.preventDefault();
					shortcut.action();
					return;
				}
			}
		},
		[shortcuts, activeScope],
	);

	useEffect(() => {
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [handler]);
}

/**
 * Get all shortcuts relevant to the current scope (global + scope-specific).
 * Useful for rendering a help overlay.
 */
export function getActiveShortcuts(
	shortcuts: ShortcutMap,
	activeScope?: ShortcutScope,
): { scope: string; shortcuts: Shortcut[] }[] {
	const groups: { scope: string; shortcuts: Shortcut[] }[] = [];

	const globalShortcuts = shortcuts.global;
	if (globalShortcuts?.length) {
		groups.push({ scope: 'Global', shortcuts: globalShortcuts });
	}

	if (activeScope && activeScope !== 'global') {
		const scopeShortcuts = shortcuts[activeScope];
		if (scopeShortcuts?.length) {
			const label = activeScope.charAt(0).toUpperCase() + activeScope.slice(1);
			groups.push({ scope: label, shortcuts: scopeShortcuts });
		}
	}

	return groups;
}
