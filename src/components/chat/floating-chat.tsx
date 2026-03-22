import { useCallback, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ChatPanel } from '@/components/chat/chat-panel';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { useSettingsStore } from '@/store/settings-store';

interface FloatingChatProps {
	/** Context injected into the AI system prompt */
	questionContext?: string;
}

const containerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.95,
		transformOrigin: 'bottom right',
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring',
			damping: 25,
			stiffness: 300,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		scale: 0.95,
		transition: { duration: 0.2 },
	},
};

export function FloatingChat({ questionContext }: FloatingChatProps) {
	const [isOpen, setIsOpen] = useState(false);
	const { apiKey, apiEndpoint } = useSettingsStore();
	const isConfigured = !!(apiKey && apiEndpoint);

	const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						key="chat-window"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="flex h-120 w-95 flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface-alt shadow-2xl backdrop-blur-xl"
					>
						<ChatPanel questionContext={questionContext} />
					</motion.div>
				)}
			</AnimatePresence>

			{/* FAB */}
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={toggle}
				className={cn(
					'floating-chat-fab group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-2xl transition-all duration-300',
					isOpen
						? 'bg-red-500/90 text-white'
						: 'bg-accent text-accent-fg hover:shadow-accent/25',
				)}
			>
				<span className="absolute inset-0 -z-10 rounded-full bg-inherit opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
				{isOpen ? (
					<X className="h-5 w-5" />
				) : (
					<MessageSquare className="h-5 w-5" />
				)}
			</motion.button>

			{/* Shimmer hint when not configured */}
			{!isOpen && !isConfigured && (
				<div className="absolute -left-44 bottom-3">
					<TextShimmer className="text-xs font-medium" duration={3}>
						Configure AI in Settings
					</TextShimmer>
				</div>
			)}
		</div>
	);
}
