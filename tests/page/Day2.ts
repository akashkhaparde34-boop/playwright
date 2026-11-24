import {Locator,Page} from "@playwright/test"

export class Day2 
{

private readonly titlevalue : Locator


constructor(page: Page)
{
this.titlevalue = page.getByTitle('4,821 Total Runs')
}
async day2titlevalue(){
    await this.titlevalue.click()
}
}
