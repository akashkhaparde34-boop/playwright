import { test, expect } from "@playwright/test"


test.beforeEach(async ({ page }) => {               // beforeEach method execute once before every test case run
    await page.goto("https://sdetqa.vercel.app/filters_practice")
})

// test.afterEach(async ({ page }) => {               // after each method execute once after each test case run
//     await page.close()
// })

//------------------OUT OF STOCK--------------------------------------------------

test("use hook for out stock", async ({ page }) => {           // use only keyword to execute specific test case
    const outstock = page.locator(".card").nth(1).getByRole('listitem').filter({ hasNotText: 'Out of stock' })
    await expect(outstock).toHaveCount(3)
})

//----------------IN STOCK--------------------------------------------------------

test("use hook for instock", async ({ page }) => {
    const instock = page.getByRole('listitem').filter({ hasText: 'In stock' })
    console.log('The count is ' + await instock.count());
    //await expect(instock).toHaveCount(3)
})

//------------------Check text by test id ------------------------------------

test("check text by test id", async ({ page }) => {
    const apple = page.getByTestId('apple')
    await expect(apple).toContainText('apple')
    await expect(apple).toBeVisible()
})
//-----------------------check count of elements with data-testid----------------------------
test("count of elements with data-testid", async ({ page }) => {
    const testid = page.locator('[data-testid]')
    const firstvalue = testid.first()               //use this method for first value 
    const lastvalue = testid.last()                  // use this method for last value 
    const anyvalue = testid.nth(3)                   // with .nth method we can get any nth value 
    console.log(await firstvalue.innerText(), await lastvalue.innerText(), await anyvalue.innerText())    // to print text use innertext method 
    await expect(testid).toHaveCount(5)                 //here we check the count of data-testid attribute 
    //await page.waitForTimeout(5000)
})


test("chaining filter", async ({ page }) => {
    const john = page.getByRole('listitem').filter({ hasText: 'john' }).getByRole('button').getByText("Say hello")
    await john.isVisible()
    console.log(await john.innerText())
    const mary = page.getByRole('listitem').filter({ hasText: 'Mary' }).getByRole('button').getByText('Say goodbye')
    await mary.isVisible()
    console.log(await mary.innerText())

})

//------------------combined locator--------------------------
test.only("combined locator", async ({ page }) => {
    const subscribe = page.getByRole('button').and(page.getByTitle('Subscribe', { exact: true }))     // to combined both locator use .and

    //await expect(subscribe).toHaveCount(2)
    console.log(await subscribe.first().innerText())
    //console.log(await subscribe.innerText())
    subscribe.isVisible
})

test("use hooks1", async ({ page }) => {
    const done = page.getByRole('listitem').filter({hasText : 'Task C'}).getByText('done')
    console.log(await done.innerText())
    await expect(done).toBeVisible()
     await done.click()

    const details = page.getByRole('listitem').filter({ hasText: 'Task C' }).filter({hasText:'done'}).getByRole('button',{name : 'details'})
    await expect(details).toBeVisible()
    console.log(await details.innerText())
    await done.click()
})

