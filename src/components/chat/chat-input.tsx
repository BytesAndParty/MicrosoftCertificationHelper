import { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
	onSend: (message: string) => void;
	disabled?: boolean;
	placeholder?: string;
}

export function ChatInput({ onSend, disabled, placeholder = 'Ask about this topic...' }: ChatInputProps) {
	const [value, setValue] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Auto-resize textarea
	useEffect(() => {
		const el = textareaRef.current;
		if (!el) return;
		el.style.height = 'auto';
		el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
	}, [value]);

	function handleSubmit() {
		const trimmed = value.trim();
		if (!trimmed || disabled) return;
		onSend(trimmed);
		setValue('');
	}

	function handleKeyDown(e: React.KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	}

	return (
		<div className="flex items-end gap-2 border-t border-border px-4 py-3">
			<textarea
				ref={textareaRef}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				disabled={disabled}
				rows={1}
				className="flex-1 resize-none bg-transparent text-sm text-text placeholder:text-text-muted/50 focus:outline-none disabled:opacity-50"
			/>
			<button
				type="button"
				onClick={handleSubmit}
				disabled={!value.trim() || disabled}
				className={cn(
					'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
					value.trim() && !disabled
						? 'bg-accent text-accent-fg hover:bg-accent/90'
						: 'bg-border/50 text-text-muted/40',
				)}
			>
				<SendHorizontal className="h-4 w-4" />
			</button>
		</div>
	);
}
