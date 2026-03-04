import { expect, test } from '@playwright/test';

import { dismissWelcomeIfVisible } from './helpers';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await dismissWelcomeIfVisible(page);
});

test('supports a fast daily learning flow across core modules', async ({ page }) => {
	const quizMode = page.locator('[data-mode="quiz"]');
	await quizMode.click();
	await expect(page.locator('#overlay-quiz')).toBeVisible();
	await expect(page.locator('#quiz-question')).not.toBeEmpty();

	const firstQuizOption = page.locator('#quiz-options button').first();
	await expect(firstQuizOption).toBeVisible();
	await firstQuizOption.click();
	await expect(page.locator('#quiz-feedback')).not.toBeEmpty();
	await page.locator('#overlay-quiz .overlay-close').click();
	await expect(page.locator('#overlay-quiz')).toBeHidden();

	const flashcardsMode = page.locator('[data-mode="flashcards"]');
	await flashcardsMode.click();
	await expect(page.locator('#overlay-flashcards')).toBeVisible();
	await page.locator('#flashcard-show').click();
	await expect(page.locator('#flashcard-back')).toBeVisible();
	await page.keyboard.press('2');
	await expect(page.locator('#flashcard-front')).not.toBeEmpty();
	await page.locator('#overlay-flashcards .overlay-close').click();
	await expect(page.locator('#overlay-flashcards')).toBeHidden();

	const glossaryMode = page.locator('[data-mode="glossary"]');
	await glossaryMode.click();
	await expect(page.locator('#overlay-glossary')).toBeVisible();
	await page.locator('#glossary-search').fill('model');
	await expect(page.locator('#glossary-card-front')).not.toBeEmpty();
	await page.locator('#overlay-glossary .overlay-close').click();
	await expect(page.locator('#overlay-glossary')).toBeHidden();
});
