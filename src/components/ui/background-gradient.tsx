import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
	children?: ReactNode;
	className?: string;
	containerClassName?: string;
	style?: CSSProperties;
	/** Show glow permanently (highlighted card) */
	active?: boolean;
}

/* Rotating conic gradient using the accent CSS variable —
   adapts automatically when the user switches accent colors. */
const conicGradient =
	'conic-gradient(from 0deg, transparent 0deg, var(--color-accent) 50deg, transparent 130deg, transparent 180deg, var(--color-accent) 230deg, transparent 310deg)';

const spinTransition = {
	duration: 16,
	repeat: Infinity,
	ease: 'linear' as const,
};

export function BackgroundGradient({
	children,
	className,
	containerClassName,
	style,
	active = false,
}: BackgroundGradientProps) {
	return (
		<div className={cn('group relative overflow-hidden rounded-lg p-0.5', containerClassName)}>
			{/* Rotating glow behind card */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={spinTransition}
				style={{ backgroundImage: conicGradient }}
				className={cn(
					'absolute -inset-full z-1 blur-xl will-change-transform',
					active ? 'opacity-60' : 'opacity-0 group-hover:opacity-40',
				)}
			/>
			{/* Rotating sharp border */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={spinTransition}
				style={{ backgroundImage: conicGradient }}
				className={cn(
					'absolute -inset-full z-1 will-change-transform',
					active ? 'opacity-100' : 'opacity-30 group-hover:opacity-100',
				)}
			/>
			{/* Content */}
			<div className={cn('relative z-10 rounded-[calc(0.5rem-2px)]', className)} style={style}>
				{children}
			</div>
		</div>
	);
}
