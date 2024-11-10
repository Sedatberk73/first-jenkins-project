import { test } from '@playwright/test';

test.describe("@smoke Test group 1", () => {
    // Create beforeEach for test
    test.beforeEach(async ({ page }) => {
        // Navigate to a page before each test
        await page.goto("https://practice.cydeo.com/");
      });
    

    // Create afterEach for test
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

    test("Getting title of the page", async ({ page }) => {
        const title = await page.title();
        expect(title).toBe("Cydeo Practice Test");
    });

    test("", async ({ page }) => {
    });

    test("test gt", async ({ page }) => {
    });
});