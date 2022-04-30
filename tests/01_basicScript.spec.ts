import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://todomvc.com/examples/react/#/");
  //await page.screenshot({ path: `todo.png` });
  await page.waitForTimeout(3000);
});
