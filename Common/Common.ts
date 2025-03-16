import { chromium, Page } from "@playwright/test";

export default class utils{
     page:Page;
    constructor (page:Page){
        this.page=page;
    }
    public  async  launchPage(){
        const browser = await chromium.launch({ headless: false });  // Launch Chromium
        const context = await browser.newContext();  // Create a new browser context
         this.page = await context.newPage();
    }

    public async launchUrl(url:string):Promise<void>{
        this.page.goto(url);
     }
 
    public async enterText(locator:string,text:string):Promise<void>{
       const ele= await this.page.$(locator) 
       ele?.fill(text)  
    }


}