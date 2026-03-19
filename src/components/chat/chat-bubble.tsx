import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
	role: 'user' | 'assistant';
	content: string;
	isStreaming?: boolean;
}

export function ChatBubble({ role, content, isStreaming }: ChatBubbleProps) {
	const isUser = role === 'user';

	return (
		<div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
			<div
				className={cn(
					'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
					isUser ? 'bg-accent/20 text-accent' : 'bg-border/60 text-text-muted',
				)}
			>
				{isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
			</div>
			<div
				className={cn(
					'max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed',
					isUser
						? 'bg-accent text-accent-fg'
						: 'bg-surface border border-border text-text',
				)}
			>
				{content}
				{isStreaming && (
					<span className="ml-1 inline-block h-3.5 w-1 animate-pulse bg-text-muted/60 align-middle" />
				)}
			</div>
		</div>
	);
}
