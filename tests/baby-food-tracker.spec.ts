import {test, expect } from '@playwright/test';

test.describe('Baby Food Tracker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/login');
        await page.fill('[type="email"]', 'test@example.com');
        await page.fill('[type="password"]', 'Password123');
        await page.click('button:text("Sign in")');
        // Wait for redirect to food tracker
        await expect(page.getByRole('heading', { name: 'Baby Food Tracker' })).toBeVisible();
      });

    test('should display title and food grid', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Baby Food Tracker' }))
         .toBeVisible();
        
        const foodCards = await page.getByTestId('food-card').all();
        expect(foodCards.length).toBeGreaterThan(0);
    });

    test('should open dialog when clicking a food card', async ({ page }) => {
        await page.getByTestId('food-card').first().click();
        await expect(page.getByRole('dialog')).toBeVisible();
        await expect(page.getByRole('dialog')).toContainText('nutrient-rich');
    });

    test('should mark food as tried and show checkmark', async ({ page }) => {
        await page.getByTestId('food-card').first().click();
        await page.getByRole('button', { name: 'Mark as Tried'}).click();
        await expect(page.getByRole('dialog')).not.toBeVisible();
        await expect(page.getByTestId('food-card').first()
                .getByTestId('tried-indicator')).toBeVisible();
    });

    test('should allow adding notes to tried foods', async ({ page }) => {
        await page.getByTestId('food-card').first().click();
        await page.getByRole('button', { name: 'Mark as Tried' }).click();
        await page.getByTestId('food-card').first().click();

        const testNote = 'Baby loved it';
        await page.getByPlaceholder('Add notes about reactions or preferences.').fill(testNote);
        await page.getByRole('button', { 'name': 'Close' }).click();

        await page.getByTestId('food-card').first().click();
        await expect(page.getByPlaceholder('Add notes about reactions or preferences.'))
            .toHaveValue(testNote);
    });

    test('should unmark food as tried', async ({ page }) => {
        await page.getByTestId('food-card').first().click();
        await page.getByRole('button', { name: 'Mark as Tried' }).click();
        await page.getByTestId('food-card').first().click();
        await page.getByRole('button', { name: 'Mark as Not Tried' }).click();
        await expect(page.getByTestId('food-card').first()
        .getByTestId('tried-indicator')).not.toBeVisible();
    });

    // test('should maintain state after page reload', async ({ page }) => {
    //     await page.getByTestId('food-card').first().click();
    //     await page.getByRole('button', { name: 'Mark as Tried'}).click();
    //     await page.getByTestId('food-card').first().click();
    //     await page.getByPlaceholder('Add notes about reactions or preferences.')
    //         .fill('Baby loved it.');
    //     await page.getByRole('button', { name: 'Close '}).click();
    //     await page.reload();

    //     await expect(page.getByTestId('food-card').first()
    //         .getByTestId('tried-indicator')).toBeVisible();
        
    //     await page.getByTestId('food-card').first().click();
    //     await expect(page.getByPlaceholder('Add notes about reactions or preferences.'))
    //         .toHaveValue('Baby loved it.');
    // })

    test('should handle multiple foods being marked as tried', async ({ page }) => {
        for (let i = 0; i < 2; i++) {
            await page.getByTestId('food-card').nth(i).click();
            await page.getByRole('button', { name: 'Mark as Tried'}).click();
        }
        const triedIndicators = await page.getByTestId('tried-indicator').all();
        expect(triedIndicators.length).toBe(2);
    });
    
    test('can add a new food', async ({ page }) => {
          await page.click('text="Add New Food"');
          
          await page.fill('[placeholder="Sweet Potato"]', 'Broccoli');
          await page.fill('textarea', 'Nutrient-rich green vegetable');
          await page.fill('[placeholder="6 months"]', '8 months');
          await page.fill('[placeholder="Low allergy risk"]', 'Low allergy risk');
          
          await page.click('button:text("Add Food")');
          
          await expect(page.getByText('Broccoli')).toBeVisible();
        });
    }
);

