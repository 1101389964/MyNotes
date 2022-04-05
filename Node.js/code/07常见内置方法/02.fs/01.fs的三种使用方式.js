const fs = require("fs");

const fileName = "./test.txt";

//读取文件信息
// 方式一：fs.statSync 同步操作，会阻塞后续代码
const info = fs.statSync(fileName);
console.log(info.isFile()); //判断是否为文件
console.log(info.isDirectory()); //判断是否为文件夹
console.log(info); //先打印
console.log("后续要执行的代码"); //后打印

/* //方式二：异步操作,不会阻塞后续代码
fs.stat(fileName, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info); //后打印
});
console.log("后续要执行的代码"); //先打印

//方式二_Promise
fs.promises.stat(fileName).then(
  (info) => {
    console.log(info); //后打印
  },
  (err) => {
    console.log(err);
  }
);
console.log("后续要执行的代码"); //先打印 */
