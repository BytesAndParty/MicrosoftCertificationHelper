import { motion } from 'framer-motion';
import { H2, Muted } from '@/components/ui/typography';

export function StudyJourneySection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
			className="flex min-h-screen items-center justify-center border-t border-border px-10"
		>
			<div className="text-center">
				<H2>Your Study Journey</H2>
				<Muted className="mx-auto mt-3 max-w-lg text-base">
					Track your progress, identify weak areas, and get personalized study recommendations — all in one place.
				</Muted>
			</div>
		</motion.section>
	);
}
