const path = require("path");

//获取路劲的信息
const filepath = "D:\\Web_Developer\\JavaScript\\代码\\1.javascript基础.html";

console.log(path.dirname(filepath)); //文件路径  结果：D:\Web_Developer\JavaScript\代码
console.log(path.basename(filepath)); //文件名    结果：1.javascript基础.html
console.log(path.extname(filepath)); //文件扩展名  结果：.html
