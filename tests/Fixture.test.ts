import Env from "../Environment/Env";
import test,{ expect } from "../Fixtures/basePages";


test.beforeEach(async({page})=>{
await page.goto(Env.test);
})
test('tc01',async({home})=>{
await home.enterUsetNAme("letcode.in");
})
test('tc01',async({home})=>{
    await home.enterUsetNAme("letcode.in");
    })