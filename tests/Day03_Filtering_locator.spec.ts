//filer getby role
import { test, expect, Locator } from "@playwright/test"
/*
test("veify filter locator", async ({ page }) => {

    await page.goto("https://sdetqa.vercel.app/filters_practice")
    // const cart =page.getByRole('listitem').filter({hasText :'Product 2'}).getByRole('button',{name:'Add to cart'})
    //  await expect(cart).toBeVisible()
    // await cart.click()
    const details: Locator = page.getByRole('listitem').filter({ hasText: 'Task C' }).getByRole('button', { name: 'details'})
    await expect(details).toBeVisible()
    const done: Locator = page.getByRole('listitem').filter({ hasText: 'Task C' }).getByText('done')
   // await expect(done).toBeVisible()
    await done.click();
    //console.log(await done.count());
    // //console.log(await done.innerText());
    //console.log(await done.textContent());
})
    
    */
   //----------filter data with has not text ----------------------
   test ("verify filter locator with has not text",async({page})=>{
   await page.goto("https://sdetqa.vercel.app/filters_practice")
   //const stock =page.getByRole('listitem').filter({hasNotText:'Out of stock'})   ----here expect ot of stock which element are available on web page
  const stock =page.locator(".card").nth(2).getByRole('listitem').filter({hasNotText:'Out of stock'})
  await expect(stock).toHaveCount(3)
   })

