import { Input } from '../ui/input';

export default function SettingsDialogContent() {
	return (
		<>
			<div className="settings-form">
				<label className="settings-row">
					<span data-i18n="settings.newCardsDay">New flashcards / day</span>
					<Input id="setting-new-cards" type="number" min={1} max={50} defaultValue={20} />
				</label>
				<label className="settings-row">
					<span data-i18n="settings.newGlossaryDay">New glossary cards / day</span>
					<Input id="setting-new-glossary" type="number" min={1} max={70} defaultValue={10} />
				</label>
				<label className="settings-row">
					<span data-i18n="settings.maxReviews">Max reviews / day</span>
					<Input id="setting-max-reviews" type="number" min={10} max={500} defaultValue={100} />
				</label>
				<label className="settings-row">
					<span data-i18n="settings.goodMultiplier">Interval multiplier "Good"</span>
					<Input id="setting-good-mult" type="number" min={1.0} max={5.0} step={0.1} defaultValue={2.0} />
				</label>
				<label className="settings-row">
					<span data-i18n="settings.easyMultiplier">Interval multiplier "Easy"</span>
					<Input id="setting-easy-mult" type="number" min={1.5} max={7.0} step={0.1} defaultValue={3.0} />
				</label>
				<label className="settings-row">
					<span data-i18n="settings.lapseMinutes">Lapse interval (minutes)</span>
					<Input id="setting-lapse" type="number" min={1} max={60} defaultValue={10} />
				</label>
			</div>
			<section className="settings-section">
				<h3 data-i18n="settings.aiSectionTitle">AI chat (BYOK)</h3>
				<p className="settings-help" data-i18n="settings.aiSectionHint">
					Use your own Azure OpenAI key. The key stays only in your local browser storage.
				</p>
				<label className="settings-row settings-row-check">
					<span data-i18n="settings.aiEnabled">Enable AI chat</span>
					<Input id="setting-ai-enabled" type="checkbox" defaultChecked={false} />
				</label>
				<label className="settings-row settings-row-wide">
					<span data-i18n="settings.aiProvider">Provider</span>
					<select id="setting-ai-provider" defaultValue="azure-openai">
						<option value="azure-openai">Azure OpenAI</option>
					</select>
				</label>
					<label className="settings-row settings-row-wide">
						<span data-i18n="settings.aiEndpoint">Endpoint URL</span>
						<Input id="setting-ai-endpoint" type="text" placeholder="https://your-resource.cognitiveservices.azure.com" />
					</label>
					<label className="settings-row settings-row-wide">
						<span data-i18n="settings.aiApiKey">API key</span>
						<Input id="setting-ai-api-key" type="password" autoComplete="off" />
					</label>
					<label className="settings-row settings-row-wide">
						<span data-i18n="settings.aiModel">Model / deployment</span>
						<Input id="setting-ai-model" type="text" placeholder="gpt-5.2" defaultValue="gpt-5.2" />
					</label>
					<p className="settings-help" data-i18n="settings.aiKeyHowTo">
						Azure Portal - your Azure OpenAI resource - Deployments + Endpoint - copy endpoint and key.
					</p>
				</section>
			<div className="settings-actions">
				<button id="settings-save" type="button" className="primary" data-i18n="settings.save">
					Save
				</button>
				<button id="settings-reset" type="button" className="secondary" data-i18n="settings.reset">
					Reset defaults
				</button>
			</div>
		</>
	);
}
