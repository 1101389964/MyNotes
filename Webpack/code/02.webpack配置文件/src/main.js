//src下的index.js文件为webpack打包的主入口，从此文件开始寻找其他模块
import "./js/addHTMLNode.js";
import { add, sub } from "./js/arithmeth.js";
const getTime = require("./js/messgae.js"); //goole游览器本身是不支持commonJS模块化的，但支持ESmodule模块化。

/* 
ES2015 中的 import 和 export 语句已经被标准化。
虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。如果你检查 dist/bundle.js，你可以看到 webpack 具体如何实现，
这是独创精巧的设计！除了 import 和 export，webpack 还能够很好地支持多种其他模块语法，更多信息请查看模块 API。

注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，
请确保你在 webpack 的 loader 系统中使用了一个像是 Babel 或 Bublé 的转译器。

*/

const a = add(1, 1);
const b = sub(1, 1);
console.log(a, b, getTime);
