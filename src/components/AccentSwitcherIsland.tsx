import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AccentSwitcher } from './ui/accent-switcher';
import { LanguageToggle } from './ui/language-toggle';

export default function AccentSwitcherIsland() {
	const [target, setTarget] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const el = document.getElementById('accent-switcher-slot');
		if (el) setTarget(el);
	}, []);

	if (!target) return null;

	return createPortal(
		<div className="flex items-center gap-1">
			<AccentSwitcher />
			<LanguageToggle />
		</div>,
		target
	);
}
