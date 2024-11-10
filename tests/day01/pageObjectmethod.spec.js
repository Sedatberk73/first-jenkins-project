import {expect, test } from '@playwright/test';

test("Getting a title of url", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let title = await page.title();
    console.log(`Page title: ${title}`);


});

test("Getting a current url of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let url = await page.url();
    console.log(`Current URL: ${url}`);

});

test("Set the windows size", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.setViewportSize({ width: 800, height: 600 });

    });