import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
				{isUser ? (
					content
				) : (
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
							strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
							ul: ({ children }) => <ul className="mb-2 ml-4 list-disc last:mb-0">{children}</ul>,
							ol: ({ children }) => <ol className="mb-2 ml-4 list-decimal last:mb-0">{children}</ol>,
							li: ({ children }) => <li className="mb-0.5">{children}</li>,
							code: ({ children, className }) => {
								const isBlock = className?.includes('language-');
								return isBlock ? (
									<pre className="my-2 overflow-x-auto rounded-md bg-surface-alt p-2.5 font-mono text-xs">
										<code>{children}</code>
									</pre>
								) : (
									<code className="rounded bg-border/40 px-1 py-0.5 font-mono text-xs">{children}</code>
								);
							},
							pre: ({ children }) => <>{children}</>,
							a: ({ href, children }) => (
								<a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-accent/80">
									{children}
								</a>
							),
							h1: ({ children }) => <p className="mb-1 font-semibold">{children}</p>,
							h2: ({ children }) => <p className="mb-1 font-semibold">{children}</p>,
							h3: ({ children }) => <p className="mb-1 font-semibold">{children}</p>,
							blockquote: ({ children }) => (
								<blockquote className="my-2 border-l-2 border-accent/40 pl-3 italic text-text-muted">{children}</blockquote>
							),
						}}
					>
						{content}
					</Markdown>
				)}
				{isStreaming && (
					<span className="ml-1 inline-block h-3.5 w-1 animate-pulse bg-text-muted/60 align-middle" />
				)}
			</div>
		</div>
	);
}
