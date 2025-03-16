import { Browser, chromium, expect,Page,test } from "@playwright/test";
import Env from "../Environment/Env";
import { before, beforeEach, describe } from "node:test";
import Home from "../Pages/Home.Page";
import { Context } from "vm";

 
 
    let browser:Browser;
    let context:Context;
    // let page:Page;
    let home:Home;
   
test('open the letcode.in',async({page})=>{
browser = await chromium.launch({
  headless:false
}
 );
 context =await browser.newContext();
  page = await context.newPage();
  home = new Home( page);
 await home.launchUrl(Env.test);
 await home.enterUsetNAme("student");
 await page.pause();
 
})


