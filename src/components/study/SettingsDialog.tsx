import { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';
import { useStudyStore } from '../../lib/study/store';
import { DEFAULT_SETTINGS } from '../../lib/study/settings';
import { useLanguage } from '../../lib/use-language';
import { useHotkeys } from '../../lib/use-hotkeys';

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const ACCENT_PALETTES = ['amber', 'emerald', 'cobalt', 'raspberry'] as const;

const ACCENT_PREVIEW_COLORS: Record<string, string> = {
	amber: '#b45309',
	emerald: '#0f766e',
	cobalt: '#1d4ed8',
	raspberry: '#be185d',
};

/* -------------------------------------------------------------------------- */
/*  i18n                                                                      */
/* -------------------------------------------------------------------------- */

const i18n = {
	en: {
		title: 'Settings',
		newCardsDay: 'New flashcards / day',
		newGlossaryDay: 'New glossary cards / day',
		maxReviews: 'Max reviews / day',
		goodMultiplier: 'Interval multiplier "Good"',
		easyMultiplier: 'Interval multiplier "Easy"',
		lapseMinutes: 'Lapse interval (minutes)',
		accentPalette: 'Accent color',
		accentHint: 'Each accent updates the full palette while keeping text contrast accessible.',
		accentAmber: 'Amber',
		accentEmerald: 'Emerald',
		accentCobalt: 'Cobalt',
		accentRaspberry: 'Raspberry',
		aiSectionTitle: 'AI chat (BYOK)',
		aiSectionHint: 'Use your own Azure OpenAI key. The key stays only in your local browser storage.',
		aiEnabled: 'Enable AI chat',
		aiProvider: 'Provider',
		aiEndpoint: 'Endpoint URL',
		aiApiKey: 'API key',
		aiModel: 'Model / deployment',
		aiKeyHowTo: 'Azure Portal → your Azure OpenAI resource → Deployments + Endpoint → copy endpoint and key.',
		aiWindowReset: 'Reset chat window size/position',
		save: 'Save',
		reset: 'Reset defaults',
		shortcuts: 'O settings | ESC close',
	},
	de: {
		title: 'Einstellungen',
		newCardsDay: 'Neue Lernkarten / Tag',
		newGlossaryDay: 'Neue Glossarkarten / Tag',
		maxReviews: 'Max. Wiederholungen / Tag',
		goodMultiplier: 'Intervall-Multiplikator „Gut"',
		easyMultiplier: 'Intervall-Multiplikator „Einfach"',
		lapseMinutes: 'Lapse-Intervall (Minuten)',
		accentPalette: 'Akzentfarbe',
		accentHint: 'Jeder Akzent aktualisiert die gesamte Palette bei barrierefreiem Textkontrast.',
		accentAmber: 'Bernstein',
		accentEmerald: 'Smaragd',
		accentCobalt: 'Kobalt',
		accentRaspberry: 'Himbeere',
		aiSectionTitle: 'KI-Chat (BYOK)',
		aiSectionHint: 'Verwende deinen eigenen Azure OpenAI-Schlüssel. Der Schlüssel bleibt nur im lokalen Browser-Speicher.',
		aiEnabled: 'KI-Chat aktivieren',
		aiProvider: 'Anbieter',
		aiEndpoint: 'Endpunkt-URL',
		aiApiKey: 'API-Schlüssel',
		aiModel: 'Modell / Bereitstellung',
		aiKeyHowTo: 'Azure Portal → deine Azure OpenAI-Ressource → Bereitstellungen + Endpunkt → Endpunkt und Schlüssel kopieren.',
		aiWindowReset: 'Chat-Fenstergröße/-position zurücksetzen',
		save: 'Speichern',
		reset: 'Standards zurücksetzen',
		shortcuts: 'O Einstellungen | ESC Schließen',
	},
} as const;

const ACCENT_LABELS: Record<string, Record<string, string>> = {
	en: { amber: 'Amber', emerald: 'Emerald', cobalt: 'Cobalt', raspberry: 'Raspberry' },
	de: { amber: 'Bernstein', emerald: 'Smaragd', cobalt: 'Kobalt', raspberry: 'Himbeere' },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface SettingsDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
	const lang = useLanguage();
	const t = i18n[lang];

	const storeSettings = useStudyStore((s) => s.settings);
	const updateSettings = useStudyStore((s) => s.updateSettings);

	// Form state
	const [newCardsPerDay, setNewCardsPerDay] = useState(DEFAULT_SETTINGS.newCardsPerDay);
	const [newGlossaryPerDay, setNewGlossaryPerDay] = useState(DEFAULT_SETTINGS.newGlossaryPerDay);
	const [maxReviewsPerDay, setMaxReviewsPerDay] = useState(DEFAULT_SETTINGS.maxReviewsPerDay);
	const [goodMultiplier, setGoodMultiplier] = useState(DEFAULT_SETTINGS.goodMultiplier);
	const [easyMultiplier, setEasyMultiplier] = useState(DEFAULT_SETTINGS.easyMultiplier);
	const [lapseMinutes, setLapseMinutes] = useState(DEFAULT_SETTINGS.lapseMinutes);
	const [accentPalette, setAccentPalette] = useState(DEFAULT_SETTINGS.accentPalette);
	const [aiChatEnabled, setAiChatEnabled] = useState(DEFAULT_SETTINGS.aiChatEnabled);
	const [aiProvider, setAiProvider] = useState(DEFAULT_SETTINGS.aiProvider);
	const [aiEndpoint, setAiEndpoint] = useState(DEFAULT_SETTINGS.aiEndpoint);
	const [aiApiKey, setAiApiKey] = useState(DEFAULT_SETTINGS.aiApiKey);
	const [aiModel, setAiModel] = useState(DEFAULT_SETTINGS.aiModel);

	// Populate form from store on open
	useEffect(() => {
		if (!open) return;
		const s = storeSettings || DEFAULT_SETTINGS;
		setNewCardsPerDay(s.newCardsPerDay ?? DEFAULT_SETTINGS.newCardsPerDay);
		setNewGlossaryPerDay(s.newGlossaryPerDay ?? DEFAULT_SETTINGS.newGlossaryPerDay);
		setMaxReviewsPerDay(s.maxReviewsPerDay ?? DEFAULT_SETTINGS.maxReviewsPerDay);
		setGoodMultiplier(s.goodMultiplier ?? DEFAULT_SETTINGS.goodMultiplier);
		setEasyMultiplier(s.easyMultiplier ?? DEFAULT_SETTINGS.easyMultiplier);
		setLapseMinutes(s.lapseMinutes ?? DEFAULT_SETTINGS.lapseMinutes);
		setAccentPalette(s.accentPalette ?? DEFAULT_SETTINGS.accentPalette);
		setAiChatEnabled(s.aiChatEnabled ?? DEFAULT_SETTINGS.aiChatEnabled);
		setAiProvider(s.aiProvider ?? DEFAULT_SETTINGS.aiProvider);
		setAiEndpoint(s.aiEndpoint ?? DEFAULT_SETTINGS.aiEndpoint);
		setAiApiKey(s.aiApiKey ?? DEFAULT_SETTINGS.aiApiKey);
		setAiModel(s.aiModel ?? DEFAULT_SETTINGS.aiModel);
	}, [open]); // eslint-disable-line react-hooks/exhaustive-deps

	// Live accent preview
	const handleAccentChange = useCallback((palette: string) => {
		setAccentPalette(palette);
		document.documentElement.dataset.accent = palette;
		// Persist immediately
		updateSettings({ accentPalette: palette });
	}, [updateSettings]);

	// Save
	const handleSave = useCallback(() => {
		const settings = {
			newCardsPerDay,
			newGlossaryPerDay,
			maxReviewsPerDay,
			goodMultiplier,
			easyMultiplier,
			lapseMinutes,
			accentPalette,
			aiChatEnabled,
			aiProvider,
			aiEndpoint,
			aiApiKey,
			aiModel,
		};
		updateSettings(settings);
		onOpenChange(false);
	}, [
		newCardsPerDay, newGlossaryPerDay, maxReviewsPerDay,
		goodMultiplier, easyMultiplier, lapseMinutes,
		accentPalette, aiChatEnabled, aiProvider, aiEndpoint, aiApiKey, aiModel,
		updateSettings, onOpenChange,
	]);

	// Reset
	const handleReset = useCallback(() => {
		const d = DEFAULT_SETTINGS;
		setNewCardsPerDay(d.newCardsPerDay);
		setNewGlossaryPerDay(d.newGlossaryPerDay);
		setMaxReviewsPerDay(d.maxReviewsPerDay);
		setGoodMultiplier(d.goodMultiplier);
		setEasyMultiplier(d.easyMultiplier);
		setLapseMinutes(d.lapseMinutes);
		setAccentPalette(d.accentPalette);
		setAiChatEnabled(d.aiChatEnabled);
		setAiProvider(d.aiProvider);
		setAiEndpoint(d.aiEndpoint);
		setAiApiKey(d.aiApiKey);
		setAiModel(d.aiModel);
		document.documentElement.dataset.accent = d.accentPalette;
		updateSettings(d);
	}, [updateSettings]);

	// Reset AI chat window layout
	const handleResetAiWindow = useCallback(() => {
		try { localStorage.removeItem('ai900_ai_chat_layout_v1'); } catch {}
		window.dispatchEvent(new CustomEvent('ai-chat-layout-reset'));
	}, []);

	// Restore accent on close without save
	const handleOpenChange = useCallback((value: boolean) => {
		if (!value && storeSettings) {
			document.documentElement.dataset.accent = storeSettings.accentPalette || DEFAULT_SETTINGS.accentPalette;
		}
		onOpenChange(value);
	}, [onOpenChange, storeSettings]);

	// Keyboard shortcuts
	useHotkeys([], open);

	const accentLabels = ACCENT_LABELS[lang] || ACCENT_LABELS.en;

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col overflow-y-auto">
				<DialogHeader>
					<DialogTitle>{t.title}</DialogTitle>
					<DialogDescription className="sr-only">{t.title}</DialogDescription>
				</DialogHeader>

				{/* Spaced Repetition Settings */}
				<div className="grid gap-3">
					<SettingsRow label={t.newCardsDay}>
						<Input
							type="number" min={1} max={50}
							value={newCardsPerDay}
							onChange={(e) => setNewCardsPerDay(Number(e.target.value) || 1)}
							className="w-20 text-right"
						/>
					</SettingsRow>
					<SettingsRow label={t.newGlossaryDay}>
						<Input
							type="number" min={1} max={70}
							value={newGlossaryPerDay}
							onChange={(e) => setNewGlossaryPerDay(Number(e.target.value) || 1)}
							className="w-20 text-right"
						/>
					</SettingsRow>
					<SettingsRow label={t.maxReviews}>
						<Input
							type="number" min={10} max={500}
							value={maxReviewsPerDay}
							onChange={(e) => setMaxReviewsPerDay(Number(e.target.value) || 10)}
							className="w-20 text-right"
						/>
					</SettingsRow>
					<SettingsRow label={t.goodMultiplier}>
						<Input
							type="number" min={1.0} max={5.0} step={0.1}
							value={goodMultiplier}
							onChange={(e) => setGoodMultiplier(Number(e.target.value) || 1.0)}
							className="w-20 text-right"
						/>
					</SettingsRow>
					<SettingsRow label={t.easyMultiplier}>
						<Input
							type="number" min={1.5} max={7.0} step={0.1}
							value={easyMultiplier}
							onChange={(e) => setEasyMultiplier(Number(e.target.value) || 1.5)}
							className="w-20 text-right"
						/>
					</SettingsRow>
					<SettingsRow label={t.lapseMinutes}>
						<Input
							type="number" min={1} max={60}
							value={lapseMinutes}
							onChange={(e) => setLapseMinutes(Number(e.target.value) || 1)}
							className="w-20 text-right"
						/>
					</SettingsRow>

					{/* Accent Palette */}
					<SettingsRow label={t.accentPalette}>
						<div className="flex items-center gap-2">
							<span
								className="inline-block w-4 h-4 rounded-full shrink-0"
								style={{ background: ACCENT_PREVIEW_COLORS[accentPalette] || ACCENT_PREVIEW_COLORS.amber }}
								aria-hidden="true"
							/>
							<select
								value={accentPalette}
								onChange={(e) => handleAccentChange(e.target.value)}
								className="h-9 rounded-md border border-input bg-background px-3 text-sm"
							>
								{ACCENT_PALETTES.map((p) => (
									<option key={p} value={p}>{accentLabels[p]}</option>
								))}
							</select>
						</div>
					</SettingsRow>
					<p className="text-xs text-muted-foreground -mt-1">{t.accentHint}</p>
				</div>

				{/* AI Chat Section */}
				<div className="space-y-3 border-t pt-4 mt-2">
					<h3 className="text-sm font-semibold">{t.aiSectionTitle}</h3>
					<p className="text-xs text-muted-foreground">{t.aiSectionHint}</p>

					<SettingsRow label={t.aiEnabled}>
						<input
							type="checkbox"
							checked={aiChatEnabled}
							onChange={(e) => setAiChatEnabled(e.target.checked)}
							className="h-4 w-4 rounded border-input"
						/>
					</SettingsRow>
					<SettingsRow label={t.aiProvider} wide>
						<select
							value={aiProvider}
							onChange={(e) => setAiProvider(e.target.value)}
							className="h-9 rounded-md border border-input bg-background px-3 text-sm w-full"
						>
							<option value="azure-openai">Azure OpenAI</option>
						</select>
					</SettingsRow>
					<SettingsRow label={t.aiEndpoint} wide>
						<Input
							type="text"
							value={aiEndpoint}
							onChange={(e) => setAiEndpoint(e.target.value)}
							placeholder="https://your-resource.cognitiveservices.azure.com"
						/>
					</SettingsRow>
					<SettingsRow label={t.aiApiKey} wide>
						<Input
							type="password"
							value={aiApiKey}
							onChange={(e) => setAiApiKey(e.target.value)}
							autoComplete="off"
						/>
					</SettingsRow>
					<SettingsRow label={t.aiModel} wide>
						<Input
							type="text"
							value={aiModel}
							onChange={(e) => setAiModel(e.target.value)}
							placeholder="gpt-5.2"
						/>
					</SettingsRow>
					<p className="text-xs text-muted-foreground">{t.aiKeyHowTo}</p>
					<Button variant="outline" size="sm" onClick={handleResetAiWindow}>
						{t.aiWindowReset}
					</Button>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-2 border-t pt-4 mt-2">
					<Button onClick={handleSave}>{t.save}</Button>
					<Button variant="outline" onClick={handleReset}>{t.reset}</Button>
				</div>

				<p className="text-[0.7rem] text-muted-foreground/70">{t.shortcuts}</p>
			</DialogContent>
		</Dialog>
	);
}

/* -------------------------------------------------------------------------- */
/*  Sub-components                                                            */
/* -------------------------------------------------------------------------- */

function SettingsRow({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
	return (
		<label className={cn(
			'flex items-center justify-between gap-3 text-sm',
			wide && 'flex-col items-stretch gap-1',
		)}>
			<span className="text-muted-foreground shrink-0">{label}</span>
			{children}
		</label>
	);
}
