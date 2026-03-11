import { expect, test } from '@playwright/test';

import { dismissWelcomeIfVisible } from './helpers';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await dismissWelcomeIfVisible(page);
});

test('supports a fast daily learning flow across core modules', async ({ page }) => {
	// --- Quiz ---
	await page.locator('[data-mode="quiz"]').click();
	const quizDialog = page.locator('[data-testid="dialog-quiz"]');
	await expect(quizDialog).toBeVisible();
	await expect(quizDialog.locator('h4')).not.toBeEmpty();

	const firstQuizOption = quizDialog.locator('.option-btn').first();
	await expect(firstQuizOption).toBeVisible();
	await firstQuizOption.click();
	await expect(quizDialog.locator('.feedback')).toBeVisible();
	await quizDialog.locator('.overlay-close').click();
	await expect(quizDialog).toBeHidden();

	// --- Flashcards ---
	await page.locator('[data-mode="flashcards"]').click();
	const flashDialog = page.locator('[data-testid="dialog-flashcards"]');
	await expect(flashDialog).toBeVisible();

	const showAnswer = flashDialog.locator('.flash-actions button.secondary').first();
	await showAnswer.click();
	await expect(flashDialog.locator('.flashcard.is-revealed')).toBeVisible();
	await page.keyboard.press('2');
	await expect(flashDialog.locator('.flashcard h4')).not.toBeEmpty();
	await flashDialog.locator('.overlay-close').click();
	await expect(flashDialog).toBeHidden();

	// --- Glossary ---
	await page.locator('[data-mode="glossary"]').click();
	const glossaryDialog = page.locator('[data-testid="dialog-glossary"]');
	await expect(glossaryDialog).toBeVisible();
	await glossaryDialog.locator('#glossary-search-react').fill('model');
	await expect(glossaryDialog.locator('.flashcard h4')).not.toBeEmpty();
	await glossaryDialog.locator('.overlay-close').click();
	await expect(glossaryDialog).toBeHidden();
});
