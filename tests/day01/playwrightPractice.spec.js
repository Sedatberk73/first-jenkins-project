import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
    await page.goto('https://www.youtube.com');
    await page.waitForTimeout(3000);
   let search_query= await page.locator("//input[@name='search_query']");
    await search_query.fill('cydeo');
    await page.waitForTimeout(3000);
    await search_query.press('Enter');
    await page.waitForTimeout(3000);
    let firstResult = await page.locator("(//a[id='vidoe-title'])[1]");
    await firstResult.click();


});

