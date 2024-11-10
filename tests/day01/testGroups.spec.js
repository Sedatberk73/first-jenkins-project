import {test} from '@playwright/test';

test.describe("Test groups", () => {
    test.beforeAll(() => {
        console.log("Before all tests");
    });

    test.afterAll(() => {
        console.log("After all tests");

    });

    test('Test case 1', async ({ page }) => {
    });
    
    test('Test case 2', async ({ page }) => {
    });
    
    test('Test case 3', async ({ page }) => {
    });

    
});
