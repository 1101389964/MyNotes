const path = require("path");

const basePath = "../User/code";
const fileName = "背景渐变.html";

//目标拼接两个路径，合成为一个路径；

const operationPath = basePath + "/" + fileName; //利用字符创拼接，但是在不同系统上可能中间的拼接符号不一样，就可能不生效；

const filePathOne = path.join(basePath, fileName); //join拼接

const filePathTwo = path.resolve(basePath, fileName);
/* 
  resolve拼接利用path模块合成新的路径；及时在不同系统中也会根据当前的系统来修改中间的连接符;
  resolve会判断拼接路径字符串中是否以/或./或../开头的路径
  当basePath以“/”开头则会直接将两者拼接
  当basePath以“./”开头则会去寻找当前路径然后拼接
  当basePath以“../”开头则会去寻找上一级路劲然后拼接
  当fileName以"/"开头则只有filename
  可以一个个试一遍
*/

console.log(operationPath);
console.log("path.join:    " + filePathOne);
console.log("path.resolve: " + filePathTwo);
