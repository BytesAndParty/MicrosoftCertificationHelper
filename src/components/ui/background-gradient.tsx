import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
	children?: ReactNode;
	className?: string;
	containerClassName?: string;
	style?: CSSProperties;
	animate?: boolean;
	/** Show glow permanently (highlighted card) */
	active?: boolean;
}

/* Accent-aware gradient built from CSS custom properties —
   adapts automatically when the user switches accent colors. */
const gradientImage = [
	'radial-gradient(circle farthest-side at 0 100%, var(--color-accent), transparent)',
	'radial-gradient(circle farthest-side at 100% 0, color-mix(in oklch, var(--color-accent) 60%, white), transparent)',
	'radial-gradient(circle farthest-side at 100% 100%, color-mix(in oklch, var(--color-accent) 30%, transparent), transparent)',
	'radial-gradient(circle farthest-side at 0 0, color-mix(in oklch, var(--color-accent) 50%, black), var(--color-surface))',
].join(', ');

export function BackgroundGradient({
	children,
	className,
	containerClassName,
	style,
	animate = true,
	active = false,
}: BackgroundGradientProps) {
	const variants = {
		initial: { backgroundPosition: '0 50%' },
		animate: { backgroundPosition: ['0, 50%', '100% 50%', '0 50%'] },
	};

	const transition = animate
		? { duration: 5, repeat: Infinity, repeatType: 'reverse' as const }
		: undefined;

	const gradientStyle: CSSProperties = {
		backgroundImage: gradientImage,
		backgroundSize: animate ? '400% 400%' : undefined,
	};

	return (
		<div className={cn('group relative p-[2px]', containerClassName)}>
			{/* Blurred glow behind card */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={transition}
				style={gradientStyle}
				className={cn(
					'absolute inset-0 rounded-lg z-[1] blur-xl transition duration-500 will-change-transform',
					active ? 'opacity-60' : 'opacity-0 group-hover:opacity-40',
				)}
			/>
			{/* Sharp border gradient */}
			<motion.div
				variants={animate ? variants : undefined}
				initial={animate ? 'initial' : undefined}
				animate={animate ? 'animate' : undefined}
				transition={transition}
				style={gradientStyle}
				className={cn(
					'absolute inset-0 rounded-lg z-[1] will-change-transform transition duration-500',
					active ? 'opacity-100' : 'opacity-30 group-hover:opacity-100',
				)}
			/>
			{/* Content */}
			<div className={cn('relative z-10', className)} style={style}>
				{children}
			</div>
		</div>
	);
}
