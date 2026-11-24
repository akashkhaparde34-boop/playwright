import { test, expect } from "@playwright/test"

test("Dynamic table", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay")
    const dynamicrow = page.locator("#taskTable tbody tr").all   //all() method use to - locator which return value convert it in array format
    //to check value present or not in varible dynamictablerow
    expect(dynamicrow.length).toBeGreaterThan(0)


    let cpu;
    for (const row of dynamicrow) {
        const productname = await row.locator('td').nth(0).innerText()
        if (productname === 'Internet Explorer') {
            cpu = await row.locator('td', { hasText: '%' }).innerText()
        }

    }
    console.log(cpu)
    //await page.pause()    // just to check value on browser
})