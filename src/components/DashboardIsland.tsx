import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DashboardPanel } from './study/DashboardPanel';

export default function DashboardIsland() {
	const [target, setTarget] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const el = document.getElementById('dashboard-slot');
		if (el) setTarget(el);
	}, []);

	if (!target) return null;

	return createPortal(<DashboardPanel />, target);
}
