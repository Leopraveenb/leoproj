import test, { chromium, expect } from "@playwright/test";

test('jjjtc1',async({page})=>{
    await page.goto("https://letcode.in/edit");
    //fill normal
    await page.fill("input#fullName","leo");
    await page.waitForTimeout(3000);
    await page.fill("input[id='fullName']","leo");
    //Append with type methodenp
    await page.focus("input[id='join']");
    await page.keyboard.press("End");
    const ele=await page.$('#join');
    // ele?.type(" leo");
    const text=await page.getAttribute("#getMe","value");
    console.log(text);
    expect(text).toBe("ortonikc")
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
    //  await page.pause();
})