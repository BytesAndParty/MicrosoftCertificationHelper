import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, BookOpen, Brain, FileText, Map } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { H1, H2, H3, Muted, Label } from '@/components/ui/typography';
import { useIsDark } from '@/lib/use-is-dark';
import { quizPattern, flashcardsPattern, glossaryPattern, roadmapPattern } from '@/lib/patterns';
import type { PatternDef } from '@/lib/patterns';
import { quizQuestions } from '@/db/quiz-questions';
import { flashcards } from '@/db/flashcards';
import { glossaryTerms } from '@/db/glossary-terms';
import { roadmapThemes } from '@/db/roadmap-themes';

interface FeatureCard {
	label: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	count: string;
	progress: number;
	pattern: PatternDef;
}

const features: FeatureCard[] = [
	{
		label: 'Quiz',
		description: 'Practice questions with explanations',
		icon: Brain,
		count: `${quizQuestions.length} Questions`,
		progress: 0,
		pattern: quizPattern,
	},
	{
		label: 'Flashcards',
		description: 'Spaced repetition review',
		icon: BookOpen,
		count: `${flashcards.length} Cards`,
		progress: 0,
		pattern: flashcardsPattern,
	},
	{
		label: 'Glossary',
		description: 'Searchable AI-900 terms',
		icon: FileText,
		count: `${glossaryTerms.length} Terms`,
		progress: 0,
		pattern: glossaryPattern,
	},
	{
		label: 'Roadmap',
		description: 'Structured learning path',
		icon: Map,
		count: `${roadmapThemes.length} Stages`,
		progress: 0,
		pattern: roadmapPattern,
	},
];

/**
 * Determines which card(s) to highlight with the active glow.
 * - Any card at 0%? → highlight the first one (left to right)
 * - All started, none at 100%? → no highlight
 * - At least one at 100%? → highlight the card with the lowest % (excl. 100%)
 * - All at 100%? → highlight all
 */
function getHighlightedIndices(cards: FeatureCard[]): Set<number> {
	const allComplete = cards.every((c) => c.progress >= 100);
	if (allComplete) return new Set(cards.map((_, i) => i));

	const firstZero = cards.findIndex((c) => c.progress === 0);
	if (firstZero !== -1) return new Set([firstZero]);

	const hasCompleted = cards.some((c) => c.progress >= 100);
	if (!hasCompleted) return new Set();

	let lowestIdx = -1;
	let lowestVal = Infinity;
	for (let i = 0; i < cards.length; i++) {
		const p = cards[i]?.progress ?? 0;
		if (p < 100 && p < lowestVal) {
			lowestVal = p;
			lowestIdx = i;
		}
	}
	return lowestIdx !== -1 ? new Set([lowestIdx]) : new Set();
}

/* Approximate RGB for each accent — drives the WebGL canvas reveal dots */
const ACCENT_RGB: Record<string, number[]> = {
	amber: [195, 110, 35],
	emerald: [60, 140, 145],
	cobalt: [70, 85, 175],
	raspberry: [160, 45, 85],
};

export const Route = createFileRoute('/')({
	component: HomePage,
});

function HomePage() {
	const isDark = useIsDark();
	const highlighted = useMemo(() => getHighlightedIndices(features), []);

	const accentRgb = useMemo(() => {
		const accent = document.documentElement.getAttribute('data-accent') || 'amber';
		return ACCENT_RGB[accent] ?? [195, 110, 35];
	}, []);

	/* Canvas reveal plays briefly after entrance, then unmounts */
	const [showReveal, setShowReveal] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => setShowReveal(false), 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="space-y-10">
			<motion.section
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
			>
				<H1>Microsoft AI-900 Certification</H1>
				<Muted className="mt-1">
					Azure AI Fundamentals — Study at your own pace.
				</Muted>
			</motion.section>

			<section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{features.map(({ label, description, icon: Icon, count, progress, pattern }, i) => {
					const isHighlighted = highlighted.has(i);
					return (
						<motion.div
							key={label}
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: isHighlighted ? 1.1 : 1,
							}}
							whileHover={{
								scale: isHighlighted ? 1.15 : 1.05,
							}}
							transition={{
								duration: 0.4,
								delay: i * 0.1,
								ease: [0.25, 1, 0.5, 1],
							}}
						>
							<BackgroundGradient
								active={isHighlighted}
								containerClassName="h-full"
								className="relative flex h-full flex-col items-center overflow-hidden rounded-lg bg-surface-alt px-6 py-10"
								style={{
									backgroundImage: isDark ? pattern.dark : pattern.light,
									...(pattern.size ? { backgroundSize: pattern.size } : {}),
								}}
							>
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
									<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
								</span>

								{/* Canvas dot reveal — plays briefly after entrance, then fades out */}
								<AnimatePresence>
									{showReveal && (
										<motion.div
											className="absolute inset-0 z-20 overflow-hidden rounded-lg"
											initial={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 1.5 }}
										>
											<CanvasRevealEffect
												colors={[accentRgb]}
												animationSpeed={0.3}
												dotSize={3}
												containerClassName="bg-surface-alt"
												showGradient={false}
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</BackgroundGradient>
						</motion.div>
					);
				})}
			</section>

			{/* Placeholder — will hold progress overview + background effect */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
				className="relative overflow-hidden rounded-xl border border-border bg-surface-alt px-8 py-16 text-center"
			>
				<H2>Your Study Journey</H2>
				<Muted className="mx-auto mt-3 max-w-lg text-base">
					Track your progress, identify weak areas, and get personalized study recommendations — all in one place.
				</Muted>
			</motion.section>
		</div>
	);
}
