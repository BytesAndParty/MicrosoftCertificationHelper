import { expect, test } from '@playwright/test';

import { dismissWelcomeIfVisible } from './helpers';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await dismissWelcomeIfVisible(page);
});

test('keeps keyboard focus trapped in overlay and restores focus on close', async ({ page }) => {
	const quizMode = page.locator('[data-mode="quiz"]');
	await quizMode.focus();
	await quizMode.press('Enter');

	const overlay = page.locator('#overlay-quiz');
	const closeButton = page.locator('#overlay-quiz .overlay-close');
	const skipButton = page.locator('#quiz-skip');

	await expect(overlay).toBeVisible();
	await expect(closeButton).toBeFocused();

	await page.keyboard.press('Shift+Tab');
	await expect(skipButton).toBeFocused();

	await page.keyboard.press('Tab');
	await expect(closeButton).toBeFocused();

	await page.keyboard.press('Escape');
	await expect(overlay).toBeHidden();
	await expect(quizMode).toBeFocused();
});

test('supports global keyboard shortcuts without breaking input editing', async ({ page }) => {
	const root = page.locator('html');
	const languageToggle = page.locator('#language-toggle');
	const languageBefore = await languageToggle.textContent();
	const themeBefore = await root.getAttribute('data-theme');

	await page.keyboard.press('d');
	const themeAfter = await root.getAttribute('data-theme');
	expect(themeAfter).not.toBe(themeBefore);

	await page.locator('[data-mode="glossary"]').click();
	await expect(page.locator('#overlay-glossary')).toBeVisible();

	const glossarySearch = page.locator('#glossary-search');
	await glossarySearch.click();
	await glossarySearch.fill('ai');
	await page.keyboard.press('KeyL');
	await expect(glossarySearch).toHaveValue('ail');
	await expect(languageToggle).toHaveText(languageBefore ?? '');
});
