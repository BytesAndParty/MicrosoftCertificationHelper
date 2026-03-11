import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export async function dismissWelcomeIfVisible(page: Page) {
	// Wait for the app to initialize — the welcome overlay appears after init()
	const welcomeStart = page.locator('#welcome-start');
	try {
		await welcomeStart.waitFor({ state: 'visible', timeout: 5000 });
		await welcomeStart.click();
		await expect(page.locator('#overlay-welcome')).toBeHidden();
	} catch {
		// Welcome overlay didn't appear (returning user with saved state)
	}
}
