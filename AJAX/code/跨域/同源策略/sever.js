//1.引入express
const { request, response } = require("express");
const express = require("express");

//2.创建应用对象
const app = express();

app.get("/home", (request, response) => {
  //响应一个页面
  // response.sendFile("./index.html");
  //设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("AJAX GET");
});

app.get("/body", (request, response) => {
  response.setHeader("Access-Control-AlLow-Origin", "*");
  //设置响应体
  response.send("同源");
});

app.listen(9000, () => {
  console.log("服务已经启动");
});
