//导入方式一：
import { age } from "./module.js";
console.log(age);

//导入方式二：把所有的变量都设为all对象导入
import * as all from "./module.js";

//导入方式三：重命名导入
import { s as school, p as profession } from "./module.js";
