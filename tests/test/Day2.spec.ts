import {test,expect} from "@playwright/test"
import { Day2} from "../page/Day2"

test("day2 test case",async ({page})=>
    {
const day2 = new Day2(page)

await day2.day2titlevalue()

    await expect(titlevalue).toBeVisible
})