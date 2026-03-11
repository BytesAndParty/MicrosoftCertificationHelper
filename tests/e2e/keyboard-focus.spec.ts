import { expect, test } from '@playwright/test';

import { dismissWelcomeIfVisible } from './helpers';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await dismissWelcomeIfVisible(page);
});

test('opens quiz dialog via keyboard shortcut and closes with Escape', async ({ page }) => {
	await page.keyboard.press('q');
	const quizDialog = page.locator('[data-testid="dialog-quiz"]');
	await expect(quizDialog).toBeVisible();

	await page.keyboard.press('Escape');
	await expect(quizDialog).toBeHidden();
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
	const glossaryDialog = page.locator('[data-testid="dialog-glossary"]');
	await expect(glossaryDialog).toBeVisible();

	const glossarySearch = glossaryDialog.locator('#glossary-search-react');
	await glossarySearch.click();
	await glossarySearch.fill('ai');
	await page.keyboard.press('KeyL');
	await expect(glossarySearch).toHaveValue('ail');
	await expect(languageToggle).toHaveText(languageBefore ?? '');
});
