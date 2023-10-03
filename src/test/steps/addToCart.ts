import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"

import { Page, Browser, expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

let browser: Browser;
let page: Page;


// Given('User enter the username as {string}', async function (username) {

//     await pageFixture.page.locator("//input[@formcontrolname='username']").type(username)
  
//   });
  
  
//   Given('User enter the password as {string}', async function (password) {
  
//     await pageFixture.page.locator("//input[@formcontrolname='password']").type(password)
//   });

Given('User search for a {string}', async function (book) {

    await pageFixture.page.locator("input[type='search']").type(book);
    await pageFixture.page.waitForTimeout(3000);
    await pageFixture.page.locator("mat-option[role='option'] span").click();


});

When('User add the book to the cart', async function () {

    await pageFixture.page.locator("//button[@color='primary']").click();

});

Then('the cart badge should get updated', async function () {

    const badgeCount = await pageFixture.page.locator("#mat-badge-content-0").textContent();
    expect(Number(badgeCount?.length)).toBeGreaterThan(0);

});