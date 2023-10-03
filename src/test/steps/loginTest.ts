import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"

import { Page, Browser, expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

let browser: Browser;
let page: Page;


Given('User navigates to the application', async function () {

  await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
  console.log("successfully logged in");

});

Given('User click on the login link.', async function () {
  await pageFixture.page.locator("//span[text()='Login']").click();

});

Given('User enter the username as {string}', async function (username) {

  await pageFixture.page.locator("//input[@formcontrolname='username']").type(username)

});


Given('User enter the password as {string}', async function (password) {

  await pageFixture.page.locator("//input[@formcontrolname='password']").type(password)
});


When('User click on the login button', async function () {

  await pageFixture.page.locator
    ("//button[@class='mat-focus-indicator mat-raised-button mat-button-base mat-primary']//span[text()='Login']").click();

  await pageFixture.page.waitForLoadState();
  // await pageFixture.page.waitForTimeout(3000);

});

Then('Login should be success', async function () {
  let text = await pageFixture.page.locator("//span[@class='mat-button-wrapper'][text()=' vignesh19 ']").textContent();
  console.log(text)
});

Then('Login should fail', async function () {
  const failureMesssage = pageFixture.page.locator("mat-error[role='alert']");
  await expect(failureMesssage).toBeVisible();

});