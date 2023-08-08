import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page : Page;

Before(async function () {

    browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    pageFixture.page = page;

});

After(async function () {

    await pageFixture.page.close();
    await browser.close();

});