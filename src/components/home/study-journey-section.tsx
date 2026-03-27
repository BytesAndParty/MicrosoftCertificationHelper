import { H2, Muted } from '@/components/ui/typography';

export function StudyJourneySection() {
	return (
		<section
			className="flex min-h-screen items-center justify-center border-t border-border px-4 sm:px-6 md:px-10"
			style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 100vh' }}
		>
			<div className="text-center">
				<H2>Your Study Journey</H2>
				<Muted className="mx-auto mt-3 max-w-lg text-base">
					Track your progress, identify weak areas, and get personalized study recommendations — all in one place.
				</Muted>
			</div>
		</section>
	);
}
