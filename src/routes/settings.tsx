import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Settings, Eye, EyeOff, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSettingsStore } from '@/store/settings-store';
import { Button } from '@/components/ui/button';
import { H1, Muted } from '@/components/ui/typography';

export const Route = createFileRoute('/settings')({
	component: SettingsPage,
});

function SettingsPage() {
	const navigate = useNavigate();
	const { apiKey, apiEndpoint, setApiKey, setApiEndpoint } = useSettingsStore();
	const [localKey, setLocalKey] = useState(apiKey);
	const [localEndpoint, setLocalEndpoint] = useState(apiEndpoint);
	const [showKey, setShowKey] = useState(false);
	const [saved, setSaved] = useState(false);

	const hasChanges = localKey !== apiKey || localEndpoint !== apiEndpoint;

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape' && !(e.target instanceof HTMLInputElement)) {
				navigate({ to: '/' });
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [navigate]);

	function handleSave() {
		setApiKey(localKey.trim());
		setApiEndpoint(localEndpoint.trim());
		setSaved(true);
		setTimeout(() => setSaved(false), 2000);
	}

	return (
		<div className="mx-auto max-w-2xl px-8 py-10">
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
			>
				<div className="flex items-center gap-3">
					<div className="vt-settings-hero flex h-10 w-10 items-center justify-center rounded-lg bg-accent-dim">
						<Settings className="h-5 w-5 text-accent" />
					</div>
					<div>
						<H1 className="text-2xl">Settings</H1>
						<Muted>Configure your AI assistant connection.</Muted>
					</div>
				</div>

				<div className="mt-10 space-y-8">
					{/* API Endpoint */}
					<div className="space-y-2">
						<label htmlFor="api-endpoint" className="font-tech text-xs font-medium uppercase tracking-widest text-text-muted">API Endpoint</label>
						<input
							id="api-endpoint"
							type="url"
							value={localEndpoint}
							onChange={(e) => setLocalEndpoint(e.target.value)}
							placeholder="https://your-resource.cognitiveservices.azure.com/openai/deployments/..."
							className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
						/>
						<Muted className="text-xs">
							The full deployment endpoint URL including api-version parameter.
						</Muted>
					</div>

					{/* API Key */}
					<div className="space-y-2">
						<label htmlFor="api-key" className="font-tech text-xs font-medium uppercase tracking-widest text-text-muted">API Key</label>
						<div className="relative">
							<input
								id="api-key"
								type={showKey ? 'text' : 'password'}
								value={localKey}
								onChange={(e) => setLocalKey(e.target.value)}
								placeholder="Enter your API key"
								className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 pr-12 text-sm text-text font-mono placeholder:font-sans placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
							/>
							<button
								type="button"
								onClick={() => setShowKey((s) => !s)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
							>
								{showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
							</button>
						</div>
						<Muted className="text-xs">
							Stored locally in your browser. Never sent anywhere except the configured endpoint.
						</Muted>
					</div>

					{/* Save */}
					<div className="flex items-center gap-3 pt-2">
						<Button
							size="sm"
							disabled={!hasChanges}
							onClick={handleSave}
							className="gap-1.5 bg-accent text-accent-fg hover:bg-accent/90"
						>
							{saved ? <Check className="h-3.5 w-3.5" /> : null}
							{saved ? 'Saved' : 'Save changes'}
						</Button>
						{hasChanges && (
							<Muted className="text-xs">You have unsaved changes.</Muted>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
