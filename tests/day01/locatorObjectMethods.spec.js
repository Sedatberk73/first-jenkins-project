import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe('Test Group', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to a page before each test
    await page.goto("https://practice.cydeo.com/");
  });




  test('Check() methods checks the radio buttons and checkboxes if the havent been checked yet', async ({page}) => {
    // Add test logic here
    let checkboxesLink =page.locator("text='Checkboxes'");
    await checkboxesLink.click();
    let checkboxes = page.locator("#box1");
    await checkboxes.check();


  });

  test('Unchecked()  unchecks the radio buttons and checkboxes if they havent been unchecked yet', async ({page}) => {
    // Add test logic here
    let checkboxesLink =page.locator("text='Checkboxes'");
    await checkboxesLink.click();
    let checkboxes = page.locator("#box1");
    await checkboxes.uncheck();
  });

  test('selectOption() used for dropdown', async({page}) => {
    // Add test logic here
    let dropdownLink = page.locator("text='Dropdown'");
    await dropdownLink.click();
    let dropdown = page.locator("#dropdown");
    await dropdown.selectOption('Option 1');
    await dropdown.selectOption('Option 2');

  });


  
  test('InputValue(): only works with <input>, <textarea>, <select>', async({page}) => {
    // Add test logic here
   await page.getByText("Inputs").click();
   let inputBox = page.locator("//input[@type='number']");
   await inputBox.fill("123");
   await page.waitForTimeout(3000);
   let inputValue = await inputBox.inputValue();
   expect(inputValue).toBe("123");
   console.log(inputValue);

  });


  test.afterEach(async ({ page }) => {
    // Close the browser window after each test completes
    await page.close(); // Close the browser window after each test completes
  });


});