import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export async function dismissWelcomeIfVisible(page: Page) {
	const welcomeOverlay = page.locator('#overlay-welcome');
	if (await welcomeOverlay.isVisible()) {
		await page.locator('#welcome-start').click();
		await expect(welcomeOverlay).toBeHidden();
	}
}
