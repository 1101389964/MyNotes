const fs = require("fs");

const content = "你好";

//文件的写入
fs.writeFile("test.txt", content, { flag: "a" }, (err) => {
  console.log(err);
});
/* 
{ flag: "a" }表示option参数，falg可有多个选项：a表示直接在原文件里面追加content的内容；

(err) => {
  console.log(err);
}//回调函数，但这个回调函数只返回失败的回调，没有成功的回调

*/

//文件的读取
fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});
/* 
默认获取到的data文件数据为16进制，需要标明合适的编码使其转化为正常的字符
{ encoding: "utf-8" }标明编码为UTF-8
*/
