const message = require("./son");
//导入son.js导入的内容，导出的内容就是son.js的exports对象，只是把exports对象的地址引用过来;

console.log(message); //结果  { name: 'ao', year: 21, add: [Function: add] }

//修改message对象，然后查看原exports对象的改变
message.name = "Tao";
