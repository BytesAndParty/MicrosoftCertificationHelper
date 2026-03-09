import { useState, useEffect, type ComponentType } from 'react';

interface DialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

/**
 * Factory that creates a React island component which listens for `study-mode-open`
 * custom events and opens a dialog when the event's `detail.mode` matches.
 *
 * Eliminates boilerplate across GlossaryIsland, FlashcardsIsland, ExamIsland, SettingsIsland.
 */
export function createDialogIsland(mode: string, DialogComponent: ComponentType<DialogProps>) {
	return function DialogIsland() {
		const [open, setOpen] = useState(false);

		useEffect(() => {
			const onOpen = (e: Event) => {
				const detail = (e as CustomEvent).detail;
				if (detail?.mode === mode) setOpen(true);
			};
			window.addEventListener('study-mode-open', onOpen);
			return () => window.removeEventListener('study-mode-open', onOpen);
		}, []);

		return <DialogComponent open={open} onOpenChange={setOpen} />;
	};
}
