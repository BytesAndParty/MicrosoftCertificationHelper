export default function AiChatWidget() {
	return (
		<section id="ai-chat-widget" className="ai-chat-widget" hidden aria-live="polite">
			<button id="ai-chat-toggle" type="button" className="ai-chat-toggle" data-i18n="chat.toggle">
				AI Chat
			</button>
			<div id="ai-chat-panel" className="ai-chat-panel" hidden>
				<div className="ai-chat-head" data-drag-handle="true">
					<h3 data-i18n="chat.title">AI Study Assistant</h3>
					<button id="ai-chat-close" type="button" className="secondary ai-chat-close" data-i18n="chat.close">
						Close
					</button>
				</div>
				<p className="meta ai-chat-note" data-i18n="chat.helper">
					Ask follow-up questions about the current study content.
				</p>
				<div id="ai-chat-messages" className="ai-chat-messages"></div>
				<form id="ai-chat-form" className="ai-chat-form">
					<label className="sr-only" htmlFor="ai-chat-input" data-i18n="chat.inputLabel">
						Your question
					</label>
					<textarea
						id="ai-chat-input"
						rows={3}
						data-i18n-placeholder="chat.placeholder"
						placeholder="Ask about this question..."
					/>
					<div className="ai-chat-actions">
						<button id="ai-chat-send" type="submit" className="primary" data-i18n="chat.send">
							Send
						</button>
					</div>
				</form>
				<p id="ai-chat-error" className="ai-chat-error" hidden></p>
				<div className="ai-chat-resize-handle ai-chat-resize-nw" data-resize-handle="nw" aria-hidden="true"></div>
				<div className="ai-chat-resize-handle ai-chat-resize-ne" data-resize-handle="ne" aria-hidden="true"></div>
				<div className="ai-chat-resize-handle ai-chat-resize-sw" data-resize-handle="sw" aria-hidden="true"></div>
				<div className="ai-chat-resize-handle ai-chat-resize-se" data-resize-handle="se" aria-hidden="true"></div>
			</div>
		</section>
	);
}
