import { useState, useEffect } from 'react';
import { AiChatSheet } from './study/AiChatSheet';

export default function AiChatIsland() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onToggle = () => setOpen(prev => !prev);
		const onOpen = () => setOpen(true);
		window.addEventListener('ai-chat-toggle', onToggle);
		window.addEventListener('ai-chat-open', onOpen);
		return () => {
			window.removeEventListener('ai-chat-toggle', onToggle);
			window.removeEventListener('ai-chat-open', onOpen);
		};
	}, []);

	return <AiChatSheet open={open} onOpenChange={setOpen} />;
}
