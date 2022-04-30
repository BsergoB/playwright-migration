//import { test, expect } from '@playwright/test';
const { test, expect } = require("@playwright/test");

test.describe("automation example of creating account at dev.asset.accountant", () => {
  test("First test case", async ({ page }) => {
    // Go to https://dev.asset.accountant/
    await page.goto("https://dev.asset.accountant/");
    // Click Create an account
    await page.locator("a.btn:nth-child(3)").click();
    // Click "Enter your first name" field
    await page.locator("#FirstName").click();
    // Fill this field
    await page.locator("#FirstName").fill("Ben"); 
    // Click "Enter your last name" field
    await page.locator("#LastName").click();
    // Fill Fill this field
    await page.locator("#LastName").fill("Richards");
    // Click "Enter your email" field
    await page.locator("#Email").click();
    // Fill Fill this field
    await page.locator("#Email").fill("lusequalityaqa1@gmail.com");
    // Click "Enter your phone" field
    await page.locator("#PhoneNumber").click();
    // Fill Fill this field
    await page.locator("#PhoneNumber").fill("+380999453535");
    // Click "Enter your Password" field
    await page.locator("#Password").click();
    // Fill Fill this field
    await page.locator("#Password").fill("Zasdfghjklq123");
    // Click "Re-enter your Password" field
    await page.locator("#Password").click();
    // Fill Fill this field
    await page.locator("#ConfirmPassword").fill("Zasdfghjklq123");
    //Click "Register" button
    await page.locator("button.btn").click();
    //await page.pause();
  });
});
