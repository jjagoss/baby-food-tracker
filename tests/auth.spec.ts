// tests/food-and-auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('shows validation errors for invalid login', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    
    await page.click('button:text("Sign in")');
    await expect(page.getByText('Invalid email address')).toBeVisible();
    
    await page.fill('[type="email"]', 'invalid');
    await expect(page.getByText('Invalid email address')).toBeVisible();
    
    await page.fill('[type="email"]', 'test@example.com');
    await page.fill('[type="password"]', 'short');
    await expect(page.getByText('Password must be at least 8 characters')).toBeVisible();
  });

  test('can toggle between login and register', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    
    await expect(page.getByText('Sign in').first()).toBeVisible();
    await page.click('text="Don\'t have an account? Sign up"');
    await expect(page.getByText('Create an account').first()).toBeVisible();
    await expect(page.getByLabel('Confirm Password')).toBeVisible();
  });

  test('shows password mismatch error in registration', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.click('text="Don\'t have an account? Sign up"');
    
    await page.fill('[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'Password123');
    await page.fill('#confirmPassword', 'Password124');
    
    await page.click('button:text("Create account")');
    await expect(page.getByText('Passwords don\'t match')).toBeVisible();
  });
});