import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: HomePage,
});

function HomePage() {
	return (
		<div className="space-y-8">
			<section className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Microsoft AI-900 Certification</h1>
				<p className="text-text-muted">Azure AI Fundamentals — Study at your own pace.</p>
			</section>

			<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{['Quiz', 'Exam', 'Flashcards', 'Glossary', 'Roadmap'].map((mode) => (
					<div
						key={mode}
						className="rounded-lg border border-border bg-surface-alt p-6 text-center"
					>
						<h2 className="text-lg font-semibold">{mode}</h2>
						<p className="mt-1 text-sm text-text-muted">Coming soon</p>
					</div>
				))}
			</section>
		</div>
	);
}
