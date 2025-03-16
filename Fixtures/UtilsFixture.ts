import utils from "../Common/Common";

import {test as baseClass} from "@playwright/test";

const test=baseClass.extend<{
    common:utils;

}
>({
    common:async({page},use)=>{
     await use(new utils(page));
    }
})
export default test;
export const expect1 =test.expect;