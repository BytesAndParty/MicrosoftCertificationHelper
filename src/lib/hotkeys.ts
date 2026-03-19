import { useEffect, useRef } from 'react';

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface Shortcut {
	/** Key to match (lowercase). Use "Space", "Escape", "1", "a", etc. Range "1-4" supported. */
	key: string;
	/** Human-readable label for the help overlay */
	label: string;
	/** Callback when the shortcut fires. Receives the normalized key that was pressed. */
	action: (key: string) => void;
	/** Require modifier keys */
	mod?: { ctrl?: boolean; shift?: boolean; alt?: boolean; meta?: boolean };
	/** Highlight this shortcut in accent color (overlay) */
	highlight?: boolean;
	/** If false, shortcut is display-only (shown in overlay but not wired up) */
	active?: boolean;
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function isEditableTarget(e: KeyboardEvent): boolean {
	const tag = (e.target as HTMLElement)?.tagName;
	if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
	if ((e.target as HTMLElement)?.isContentEditable) return true;
	return false;
}

function normalizeKey(e: KeyboardEvent): string {
	if (e.key === ' ') return 'Space';
	if (e.key === '?') return '?';
	if (e.key === 'ß') return 'ß';
	return e.key.toLowerCase();
}

function modsMatch(e: KeyboardEvent, mod?: Shortcut['mod']): boolean {
	if (!mod) {
		return !e.ctrlKey && !e.altKey && !e.metaKey;
	}
	return (
		!!mod.ctrl === e.ctrlKey &&
		!!mod.shift === e.shiftKey &&
		!!mod.alt === e.altKey &&
		!!mod.meta === e.metaKey
	);
}

function matchesShortcut(key: string, e: KeyboardEvent, shortcut: Shortcut): boolean {
	if (shortcut.active === false) return false;

	// Range keys like "1-4"
	if (shortcut.key.includes('-') && /^\d-\d$/.test(shortcut.key)) {
		const [start, end] = shortcut.key.split('-');
		if (start && end) {
			const keyNum = parseInt(key, 10);
			const startNum = parseInt(start, 10);
			const endNum = parseInt(end, 10);
			if (!isNaN(keyNum) && keyNum >= startNum && keyNum <= endNum && modsMatch(e, shortcut.mod)) {
				return true;
			}
		}
		return false;
	}

	return key === shortcut.key.toLowerCase() && modsMatch(e, shortcut.mod);
}

/* -------------------------------------------------------------------------- */
/*  HotkeyManager — singleton, stack-based scope system                       */
/* -------------------------------------------------------------------------- */

type ShortcutRef = { current: Shortcut[] };

class HotkeyManager {
	private scopeStack: string[] = [];
	private bindings = new Map<string, ShortcutRef>();
	private listeners = new Set<() => void>();

	constructor() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	destroy() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	/* ---- Scope management ---- */

	pushScope(scope: string) {
		this.scopeStack.push(scope);
		this.notify();
	}

	popScope(scope: string) {
		for (let i = this.scopeStack.length - 1; i >= 0; i--) {
			if (this.scopeStack[i] === scope) {
				this.scopeStack.splice(i, 1);
				this.notify();
				return;
			}
		}
	}

	/** Active scopes in priority order: top of stack → bottom → global */
	get activeScopes(): string[] {
		const seen = new Set<string>();
		const result: string[] = [];
		for (let i = this.scopeStack.length - 1; i >= 0; i--) {
			const s = this.scopeStack[i]!;
			if (!seen.has(s)) {
				seen.add(s);
				result.push(s);
			}
		}
		if (!seen.has('global')) result.push('global');
		return result;
	}

	/* ---- Registration ---- */

	register(scope: string, ref: ShortcutRef) {
		this.bindings.set(scope, ref);
		this.notify();
	}

	unregister(scope: string) {
		this.bindings.delete(scope);
		this.notify();
	}

	/* ---- Display (for overlay) ---- */

	getDisplayGroups(): { scope: string; shortcuts: Shortcut[] }[] {
		const groups: { scope: string; shortcuts: Shortcut[] }[] = [];

		// Global first
		const globalRef = this.bindings.get('global');
		if (globalRef?.current.length) {
			groups.push({ scope: 'Global', shortcuts: globalRef.current });
		}

		// Then active scopes (top-down, skip global)
		for (const s of this.activeScopes) {
			if (s === 'global') continue;
			const ref = this.bindings.get(s);
			if (ref?.current.length) {
				const label = s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
				groups.push({ scope: label, shortcuts: ref.current });
			}
		}

		return groups;
	}

	/* ---- Subscription (for reactive overlay) ---- */

	subscribe(listener: () => void): () => void {
		this.listeners.add(listener);
		return () => this.listeners.delete(listener);
	}

	private notify() {
		this.listeners.forEach((l) => l());
	}

	/* ---- Key handler ---- */

	private handleKeyDown = (e: KeyboardEvent) => {
		if (isEditableTarget(e)) return;
		const key = normalizeKey(e);

		for (const scope of this.activeScopes) {
			const ref = this.bindings.get(scope);
			if (!ref) continue;

			for (const shortcut of ref.current) {
				if (matchesShortcut(key, e, shortcut)) {
					e.preventDefault();
					shortcut.action(key);
					return;
				}
			}
		}
	};
}

/* -------------------------------------------------------------------------- */
/*  Singleton                                                                 */
/* -------------------------------------------------------------------------- */

let manager: HotkeyManager | null = null;

export function getHotkeyManager(): HotkeyManager {
	if (!manager) manager = new HotkeyManager();
	return manager;
}

/* -------------------------------------------------------------------------- */
/*  React hooks                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Register keyboard shortcuts for a scope.
 * Shortcuts are always read from a ref — no stale closures.
 *
 * @param scope   - Scope name ("global", "quiz", "quiz-modal", etc.)
 * @param shortcuts - Array of shortcuts (can depend on component state)
 * @param options.push - If true, pushes this scope onto the stack on mount (for modals/overlays)
 */
export function useHotkeys(
	scope: string,
	shortcuts: Shortcut[],
	options?: { push?: boolean },
) {
	const mgr = getHotkeyManager();
	const ref = useRef<Shortcut[]>(shortcuts);
	ref.current = shortcuts;

	const push = options?.push ?? false;

	useEffect(() => {
		mgr.register(scope, ref);
		if (push) mgr.pushScope(scope);
		return () => {
			mgr.unregister(scope);
			if (push) mgr.popScope(scope);
		};
	}, [mgr, scope, push]);
}

/**
 * Push a scope onto the stack without registering shortcuts.
 * Useful for route-level scope activation (e.g. "quiz" scope when on /quiz).
 */
export function useHotkeyScope(scope: string | undefined) {
	const mgr = getHotkeyManager();
	useEffect(() => {
		if (!scope) return;
		mgr.pushScope(scope);
		return () => mgr.popScope(scope);
	}, [mgr, scope]);
}
