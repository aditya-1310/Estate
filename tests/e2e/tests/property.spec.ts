import { test, expect } from '@playwright/test';

test.describe('Property Management', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test
    await page.goto('/login');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'validPassword123');
    await page.click('button[type="submit"]');
    
    // Wait for login to complete
    await expect(page).toHaveURL('/dashboard');
  });

  test('should add a new property successfully', async ({ page }) => {
    // Navigate to add property page
    await page.click('text=Add Property');
    await expect(page).toHaveURL('/properties/add');

    // Fill in property details
    await page.fill('input[name="title"]', 'Luxury Villa');
    await page.fill('textarea[name="description"]', 'Beautiful 4-bedroom villa with pool');
    await page.fill('input[name="price"]', '750000');
    await page.fill('input[name="location"]', '123 Luxury Lane');
    await page.fill('input[name="bedrooms"]', '4');
    await page.fill('input[name="bathrooms"]', '3');
    await page.fill('input[name="area"]', '2500');
    await page.selectOption('select[name="type"]', 'Villa');

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify success message
    await expect(page.locator('.success-message')).toContainText('Property added successfully');

    // Verify property appears on homepage
    await page.goto('/');
    await expect(page.locator('text=Luxury Villa')).toBeVisible();
    await expect(page.locator('text=$750,000')).toBeVisible();
  });

  test('should show validation errors for invalid input', async ({ page }) => {
    await page.goto('/properties/add');

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Verify validation messages
    await expect(page.locator('text=Title is required')).toBeVisible();
    await expect(page.locator('text=Price is required')).toBeVisible();

    // Try invalid price
    await page.fill('input[name="price"]', '-1000');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Price must be positive')).toBeVisible();
  });

  test('should handle image upload', async ({ page }) => {
    await page.goto('/properties/add');

    // Upload property images
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.click('input[type="file"]');
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('path/to/property-image.jpg');

    // Verify image preview
    await expect(page.locator('.image-preview')).toBeVisible();
  });
}); 