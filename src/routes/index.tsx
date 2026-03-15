import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight, BookOpen, Brain, FileText, Map } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { GlowCard } from '@/components/ui/glow-card';
import { H1, H3, Muted, Label } from '@/components/ui/typography';
import { quizPattern, flashcardsPattern, glossaryPattern, roadmapPattern } from '@/lib/patterns';

interface FeatureCard {
	label: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	count: string;
	progress: number;
	pattern: string;
}

const features: FeatureCard[] = [
	{
		label: 'Quiz',
		description: 'Practice questions with explanations',
		icon: Brain,
		count: '78 Questions',
		progress: 0,
		pattern: quizPattern,
	},
	{
		label: 'Flashcards',
		description: 'Spaced repetition review',
		icon: BookOpen,
		count: '34 Cards',
		progress: 0,
		pattern: flashcardsPattern,
	},
	{
		label: 'Glossary',
		description: 'Searchable AI-900 terms',
		icon: FileText,
		count: '65 Terms',
		progress: 0,
		pattern: glossaryPattern,
	},
	{
		label: 'Roadmap',
		description: 'Structured learning path',
		icon: Map,
		count: '7 Stages',
		progress: 0,
		pattern: roadmapPattern,
	},
];

export const Route = createFileRoute('/')({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="space-y-10">
			<section>
				<H1>Microsoft AI-900 Certification</H1>
				<Muted className="mt-1">
					Azure AI Fundamentals — Study at your own pace.
				</Muted>
			</section>

			<section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{features.map(({ label, description, icon: Icon, count, progress, pattern }) => (
					<GlowCard
						key={label}
						className="group flex flex-col items-center rounded-lg bg-surface-alt px-6 py-10"
						style={{ backgroundImage: pattern }}
					>

						<div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent-dim">
							<Icon className="h-7 w-7 text-accent" />
						</div>

						<H3 className="mt-6 text-2xl">{label}</H3>
						<Muted className="mt-2 text-center text-base">{description}</Muted>

						<Label className="mt-5 text-sm tabular-nums">{count}</Label>

						<div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-border">
							<div
								className="h-full rounded-full bg-accent transition-all duration-500"
								style={{ width: `${progress}%` }}
							/>
						</div>

						<span className="mt-5 flex items-center gap-1 text-sm text-accent">
							{progress > 0 ? 'Continue learning' : 'Start learning'}
							<ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
						</span>
					</GlowCard>
				))}
			</section>
		</div>
	);
}
