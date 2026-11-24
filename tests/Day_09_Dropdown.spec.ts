import { test,expect } from "@playwright/test";

test.beforeEach(async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")
//await page.goto("https://practice.expandtesting.com/dropdown")
})

test.only("dropdown_handling",async({page})=>{
const allcountry = page.locator('#country')
await expect(allcountry).toBeVisible()
await expect(allcountry).toHaveValue('india')

// select by both label and value 
await allcountry.selectOption({value : 'france',label : 'France'})
await expect(allcountry).toHaveValue('france')


// to check count 
const countcntry = allcountry.locator('Option')
await expect (countcntry).toHaveCount(5)

// to get a text 
const alltext = await countcntry.allTextContents()
expect(alltext).toContain('France')

// to print all text 
for(const text of  alltext)
    console.log(text)

})

test("dropdown",async({page})=>{
const drp = page.locator('select#dropdown')
// await expect(drp).toBeVisible()
// await expect(drp).toHaveValue('')
// await expect(drp.locator('option:checked')).toHaveText('Please select an option');
// //await expect(drp.locator('option:checked')).toHaveText(/Please select\s+an option/); //to remove space use S+
// await drp.selectOption({ label: 'Option 1' }); 
// await page.waitForTimeout(3000)
// await expect(drp).toHaveValue('1');
//  //await expect(drp.locator('option:checked')).toHaveText('Option 1');

// ---------------- //select drop down by value 
//  await drp.selectOption({value :'2'})
//  await expect (drp).toHaveValue('2')

 //-----------------/select by index --------------
 await drp.selectOption({index :2})
 await expect (drp).toHaveValue('2')

 // 
})