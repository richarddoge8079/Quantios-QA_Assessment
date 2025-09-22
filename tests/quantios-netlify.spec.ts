import {test, expect, type Page} from '@playwright/test';
require('dotenv').config()

test.beforeEach(async ({ page }) => {
    await page.goto('https://qainterview.netlify.app/');
});

test('Login', async ({page}) => {

  await page.locator('#username').fill(process.env.EMAIL_ADDRESS!);
  await page.locator('#password').fill(process.env.PASSWORD!);
  await page.locator('#loginBtn').click();

  await expect(page).toHaveTitle('Stock Market Dashboard');
});