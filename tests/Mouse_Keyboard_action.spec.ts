import { test, expect } from "@playwright/test"

test("mouse action", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay", {
        waitUntil: "domcontentloaded",     // this used because dom not loaded on use of await means in 30s
    })

    const toggle = page.locator('#toggleBtn')
    const toggleText1 = await toggle.textContent()  //STOP

    await toggle.click()
    //await toggle.click()
    const toggleText2 = await toggle.textContent()  //START
    expect(toggleText2).not.toBe(toggleText1)
    await page.pause()
    // await page.waitForTimeout(10000)

})
//------------------------Right click---------------------------------------------------

test("Mouse Right click", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay", {
        waitUntil: "domcontentloaded",     // this used because dom not loaded on use of await means in 30s
    })
    const rightclick = page.locator('#rightClickBtn')

    await rightclick.click({ button: 'right' })
    //const  all_text = await page.locator("#customContextMenu button").allInnerTexts()
    //console.log(all_text)
    const copy = page.getByRole('button', { name: 'Copy' , exact : true })
    page.on('dialog', dialog =>{
        dialog.accept()
    })
    await copy.click()
    page.pause()
    //await page.waitForTimeout(5000)

})
    //------------------------hover--------------------------

    
test("Mouse hover", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay", {
        waitUntil: "domcontentloaded",     // this used because dom not loaded on use of await means in 30s
    })
    
     const buttonHover = page.locator('span:has-text("Hover me")')
     await buttonHover.hover()
     await page.waitForTimeout(5000)
     await expect (buttonHover).toBeVisible()

    // const buttonHover = page.getByRole('button', { name: 'Hover me' })
    // await buttonHover.hover()
    // await expect(buttonHover).toBeVisible()

    console.log (await buttonHover.getAttribute('title'))
    expect (await buttonHover.getAttribute('title')).toBe("This is a tooltip")

})
//----------------------Double Clcik --------------------------

test("double click", async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay", {
        waitUntil: "domcontentloaded",     // this used because dom not loaded on use of await means in 30s
    })
const field1 = page.locator("#field1")
const field2 = page.locator("#field2")
const copytext = page.getByRole ('button', {name : 'Copy Text'})
await copytext.dblclick()

await expect (field2).toHaveValue("Hello World!")
await page.waitForTimeout(5000)
})

//--------------Drag and Drop----------------
test("Drag and Drop", async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

const drag = page.getByText("Drag me")
const drop = page .getByText("Drop zone")

await drag.dragTo(drop)

//await page.pause()
await page.waitForTimeout(5000)

})

//-------------------Keyboard action------------------

test.only("keyboard action" ,async({page})=>{

await page.goto("https://gotranscript.com/text-compare")

const input1 = page.locator("[name= 'text1']")

await input1.focus()   //to get a focus on text input box 
 await page.keyboard.insertText("TestAkash")   // inserttext --this insert text at one time 
 await page.keyboard.type("TestAkash")         // type --this method insert text char by char 


})