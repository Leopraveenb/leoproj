import Home from "../Pages/Home.Page";

import {test as baseTests} from "@playwright/test";

const test =baseTests.extend<
{
    home:Home;
}
>({
    home:async({page},use)=>{
        await use(new Home(page));
    }
})
export default test;
export const expect =test.expect;