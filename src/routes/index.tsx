import { createFileRoute } from '@tanstack/react-router';
import { BookOpen, Brain, FileText, Map } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/home/feature-card';
import { StudyJourneySection } from '@/components/home/study-journey-section';
import { SiteFooter } from '@/components/home/site-footer';
import { H1, Muted } from '@/components/ui/typography';
import { useIsDark } from '@/lib/use-is-dark';
import { quizPattern, flashcardsPattern, glossaryPattern, roadmapPattern } from '@/lib/patterns';
import type { PatternDef } from '@/lib/patterns';
import { quizQuestions } from '@/db/quiz-questions';
import { flashcards } from '@/db/flashcards';
import { glossaryTerms } from '@/db/glossary-terms';
import { roadmapThemes } from '@/db/roadmap-themes';

interface Feature {
	label: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	count: string;
	progress: number;
	pattern: PatternDef;
}

const features: Feature[] = [
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
function getHighlightedIndices(cards: Feature[]): Set<number> {
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

export const Route = createFileRoute('/')({
	component: HomePage,
});

function HomePage() {
	const isDark = useIsDark();
	const highlighted = useMemo(() => getHighlightedIndices(features), []);

	return (
		<>
			<div className="flex min-h-[calc(100vh-3.5rem)] flex-col space-y-10 px-10 py-10">
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

				<section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, i) => (
						<FeatureCard
							key={feature.label}
							label={feature.label}
							description={feature.description}
							icon={feature.icon}
							count={feature.count}
							progress={feature.progress}
							patternStyle={{
								backgroundImage: isDark ? feature.pattern.dark : feature.pattern.light,
								...(feature.pattern.size ? { backgroundSize: feature.pattern.size } : {}),
							}}
							isHighlighted={highlighted.has(i)}
							index={i}
						/>
					))}
				</section>
			</div>

			<StudyJourneySection />
			<SiteFooter />
		</>
	);
}
