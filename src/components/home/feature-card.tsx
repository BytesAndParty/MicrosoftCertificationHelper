import type { ComponentType, CSSProperties, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { H3, Muted, Label } from '@/components/ui/typography';

interface FeatureCardProps {
	label: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	count: string;
	progress: number;
	patternStyle: CSSProperties;
	isHighlighted: boolean;
	index: number;
}

export function FeatureCard({
	label,
	description,
	icon: Icon,
	count,
	progress,
	patternStyle,
	isHighlighted,
	index,
}: FeatureCardProps) {
	const cardContent = (
		<>
			<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent-dim transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
				<Icon className="h-7 w-7 text-accent" />
			</div>
			<H3 className="mt-6 text-2xl">{label}</H3>
			<Muted className="mt-2 text-center text-base">{description}</Muted>
			<Label className="mt-5 text-sm tabular-nums">{count}</Label>
			<div className="mt-6 flex w-full items-center gap-2">
				<div className="h-1 flex-1 overflow-hidden bg-border">
					<div
						className="h-full bg-accent transition-all duration-500"
						style={{ width: `${progress}%` }}
					/>
				</div>
				<span className="font-tech text-xs tabular-nums text-text-muted">
					{progress}%
				</span>
			</div>
			<span className="mt-5 flex items-center gap-1 text-sm text-accent">
				{progress > 0 ? 'Continue learning' : 'Start learning'}
				{isHighlighted ? (
					<motion.span
						initial={{ opacity: 0, x: -4 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 2 }}
						className="inline-flex"
					>
						<ArrowRight className="h-3 w-3" />
					</motion.span>
				) : (
					<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
				)}
			</span>
		</>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{
				opacity: 1,
				y: 0,
				scale: isHighlighted ? 1.05 : 1,
			}}
			whileHover={{
				scale: isHighlighted ? 1.08 : 1.03,
			}}
			transition={{
				duration: 0.4,
				delay: index * 0.1,
				ease: [0.25, 1, 0.5, 1],
			}}
			className={isHighlighted ? 'z-10' : undefined}
		>
			{isHighlighted ? (
				<BackgroundGradient
					active
					containerClassName="h-full"
					className="flex h-full flex-col items-center overflow-hidden rounded-lg bg-surface-alt px-6 py-10"
					style={patternStyle}
				>
					{cardContent}
				</BackgroundGradient>
			) : (
				<div
					className="group flex h-full flex-col items-center overflow-hidden rounded-lg border border-border bg-surface-alt px-6 py-10"
					style={patternStyle}
				>
					{cardContent}
				</div>
			)}
		</motion.div>
	);
}
