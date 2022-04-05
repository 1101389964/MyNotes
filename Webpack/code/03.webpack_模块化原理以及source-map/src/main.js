//ESmodule导入
// const math = require("./js/arithmeth");
import math from "./js/arithmeth";

//CommonJS导入
// import { CURRENT_TIME } from "./js/messgae";
const message = require("./js/messgae.js");

const a = math.add(1, 1);
const b = math.sub(1, 1);
console.log("a:", a, "b:", b, "现在时间", message.CURRENT_TIME);
