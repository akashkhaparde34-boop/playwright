import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {

    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})


test("hiddem dropdown", async ({ page }) => {

    /*
   await page.locator("input[name= 'username' ]").fill("Admin")
   await page.locator("input[name='password']").fill("admin123")
   await page.locator("button[type='submit']").click()
   */
    //find by get by placeholder 
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator("button[type='submit']").click()
    //await page.locator(".oxd-button").click                    // css by class 

    await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible()
    await (page.getByRole('link', { name: 'PIM' })).click()
    const jobtitlename = page.locator(".oxd-select-text--after").nth(2)
    await jobtitlename.click()

    const jobtitlelist = page.locator("div[role='listbox'] span")
    await expect(jobtitlelist.first()).toBeVisible()
    const jobtitlecount = await jobtitlelist.count()
    console.log(jobtitlelist, jobtitlecount)
    const alltext = await jobtitlelist.allTextContents()
    // const option = page.locator(".oxd-select-option").nth(2)
    // //await expect(option).toBeVisible()
    // await expect(option).toHaveText('Automaton Tester')
    // // for (const text of alltext)
    // //const optionText = await option.textContent()
    // console.log(await option.innerText())
    // await option.click()
    // await page.pause()
    
    for (let i =0;i<jobtitlecount;i++){
        const jobtitle2 = jobtitlelist.nth(i)
        const text2 = await jobtitle2.textContent()
        console.log(text2)
        if(text2=='Automaton Tester')
        {
          await jobtitle2.click()
            break;
        }
    }
    //await page.pause()
})

