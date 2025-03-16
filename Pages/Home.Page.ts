import { promises } from "dns";
import { Locator, Page } from "playwright";
export default class Home{
private  page:Page
constructor(page:Page){
this.page=page;
}


//elements

public get eleLoginUserNAme(){
     const loginBtn = this.page.locator('xpath=//input[@id="username"]');
    if(loginBtn!=null){
        return loginBtn;
    }else throw Error ("no element ")
}

// funtions 
public async enterUsetNAme(name:string){
const ele= this.eleLoginUserNAme;
await ele?.fill(name);
}
public async launchUrl(url:string){
    this.page.goto(url);
}


}