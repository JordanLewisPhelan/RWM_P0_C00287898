import { expect, test } from '@playwright/test';

test('Checklist page has expected title', async ({ page }) => {
	await page.goto('/checklist/');
	await expect(page.getByTestId('title')).toHaveText('Progress Checklist');
});
