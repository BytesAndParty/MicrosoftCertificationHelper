import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, AlertCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useSettingsStore } from '@/store/settings-store';
import { ChatBubble } from '@/components/chat/chat-bubble';
import { ChatInput } from '@/components/chat/chat-input';
import { Muted } from '@/components/ui/typography';

interface ChatMessage {
	role: 'user' | 'assistant';
	content: string;
}

interface ChatPanelProps {
	/** Context about the current quiz question to inject into the system prompt */
	questionContext?: string;
}

const SYSTEM_PROMPT = `You are a helpful AI tutor helping a student prepare for the Microsoft AI-900 (Azure AI Fundamentals) certification exam.

Your role:
- Explain AI and Azure concepts clearly and concisely
- Relate answers back to the AI-900 exam objectives
- Use practical examples when helpful
- Keep responses focused and exam-relevant
- If the student asks about a quiz question, help them understand WHY the correct answer is correct

Be encouraging but accurate. If you're unsure about something, say so.`;

const INITIAL_MESSAGE: ChatMessage = {
	role: 'assistant',
	content: `Hey! I'm your **AI-900 Study Buddy**.

Need help with a question? You can:

- Ask me to **explain** a concept or answer
- Say *"Why is this correct?"* or *"Why not option B?"*
- Request a **summary** of the topic
- Just ask anything AI-900 related

I'm here to help!`,
};

export function ChatPanel({ questionContext }: ChatPanelProps) {
	const { apiKey, apiEndpoint } = useSettingsStore();
	const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
	const [isStreaming, setIsStreaming] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	const isConfigured = apiKey && apiEndpoint;

	// Auto-scroll to bottom on new messages
	useEffect(() => {
		const el = scrollRef.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [messages]);

	const sendMessage = useCallback(
		async (content: string) => {
			if (!apiKey || !apiEndpoint) return;

			const userMessage: ChatMessage = { role: 'user', content };
			setMessages((prev) => [...prev, userMessage]);
			setIsStreaming(true);

			// Build message history for the API
			const systemContent = questionContext
				? `${SYSTEM_PROMPT}\n\nCurrent quiz context:\n${questionContext}`
				: SYSTEM_PROMPT;

			// Exclude the static welcome message from API history
			const history = messages.filter((m) => m !== INITIAL_MESSAGE);
			const apiMessages = [
				{ role: 'system', content: systemContent },
				...history.map((m) => ({ role: m.role, content: m.content })),
				{ role: 'user', content },
			];

			try {
				const response = await fetch(apiEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'api-key': apiKey,
					},
					body: JSON.stringify({
						messages: apiMessages,
						max_tokens: 800,
						temperature: 0.7,
						stream: true,
					}),
				});

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(`API error ${response.status}: ${errorText}`);
				}

				// Stream the response
				const reader = response.body?.getReader();
				const decoder = new TextDecoder();
				let assistantContent = '';

				setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

				if (reader) {
					while (true) {
						const { done, value } = await reader.read();
						if (done) break;

						const chunk = decoder.decode(value, { stream: true });
						const lines = chunk.split('\n').filter((line) => line.startsWith('data: '));

						for (const line of lines) {
							const data = line.slice(6);
							if (data === '[DONE]') continue;

							try {
								const parsed = JSON.parse(data);
								const delta = parsed.choices?.[0]?.delta?.content;
								if (delta) {
									assistantContent += delta;
									setMessages((prev) => {
										const updated = [...prev];
										const last = updated[updated.length - 1];
										if (last?.role === 'assistant') {
											updated[updated.length - 1] = {
												...last,
												content: assistantContent,
											};
										}
										return updated;
									});
								}
							} catch {
								// Skip malformed chunks
							}
						}
					}
				}
			} catch (error) {
				const errorMsg =
					error instanceof Error ? error.message : 'Failed to connect to AI service';
				setMessages((prev) => [
					...prev.filter((m) => !(m.role === 'assistant' && m.content === '')),
					{ role: 'assistant', content: `Error: ${errorMsg}` },
				]);
			} finally {
				setIsStreaming(false);
			}
		},
		[apiKey, apiEndpoint, messages, questionContext],
	);

	if (!isConfigured) {
		return (
			<div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
				<div className="flex h-12 w-12 items-center justify-center rounded-full bg-border/40">
					<AlertCircle className="h-6 w-6 text-text-muted" />
				</div>
				<div>
					<p className="text-sm font-medium">AI Chat not configured</p>
					<Muted className="mt-1">
						Add your API key and endpoint in{' '}
						<Link to="/settings" className="text-accent hover:underline">
							Settings
						</Link>{' '}
						to start chatting.
					</Muted>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-full flex-col">
			{/* Header */}
			<div className="flex items-center gap-2 border-b border-border px-4 py-3">
				<MessageSquare className="h-4 w-4 text-accent" />
				<span className="text-sm font-medium">AI Tutor</span>
			</div>

			{/* Messages */}
			<div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
				{messages.length === 0 ? (
					<div className="flex h-full flex-col items-center justify-center gap-3 text-center">
						<MessageSquare className="h-8 w-8 text-border" />
						<Muted className="max-w-48">
							Ask me anything about the current topic or AI-900 exam.
						</Muted>
					</div>
				) : (
					<div className="space-y-4">
						{messages.map((msg, i) => (
							<div
								key={i}
								className="transition-[opacity,transform] duration-200 starting:translate-y-2 starting:opacity-0"
								style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 60px' }}
							>
								<ChatBubble
									role={msg.role}
									content={msg.content}
									isStreaming={isStreaming && i === messages.length - 1 && msg.role === 'assistant'}
								/>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Input */}
			<ChatInput onSend={sendMessage} disabled={isStreaming} />
		</div>
	);
}
