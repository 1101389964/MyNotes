//npm init --yes安装npm
//npm i express安装express

//1.引入express
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由,request是对请求报文的封装，response是对响应报文的封装
app.get("/", (request, response) => {
  //设置响应
  response.send("HELLO EXPRESS");
});

//4.监听端口服务的启动
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中....");
});

//然后命令行 'node express.js'即可启动服务，在http://127.0.0.1:8000可访问服务
