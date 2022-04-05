//npm init --yes安装npm
//npm i express安装express

/*
 **自动管理服务(每次修改代码就会自动更新服务)：安装nodemon `npm i -g nodemon`
 * 然后不是用node命令启动服务
 * 使用：`nodemon 文件名`
 */

//1.引入express
const { request, response } = require("express");
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由,request是对请求报文的封装，response是对响应报文的封装
app.get("/server", (request, response) => {
  //设置响应头,设置允许跨域
  response.setHeader("Access-Control-AlLow-Origin", "*");
  //设置响应体
  response.send("AJAX GET");
});

app.post("/server", (request, response) => {
  //设置响应头,设置允许跨域
  response.setHeader("Access-Control-AlLow-Origin", "*");
  //设置响应体
  response.send("HELLO AJAX POST");
});

app.all("/json_server", (request, response) => {
  //设置响应头，设置允许跨域
  response.setHeader("Access-Control-AlLow-Origin", "*");
  //设置响应体
  const data = {
    message: "JSON",
  };
  //将对象转化成字符创对象
  let str = JSON.stringify(data);
  //设置响应体
  response.send(str);
});

//ie缓冲问题
app.get("/ie", (request, response) => {
  response.setHeader("Access-Control-AlLow-Origin", "*");
  response.send("HELLO IE.55");
});

//延迟响应
app.get("/later", (request, response) => {
  response.setHeader("Access-Control-AlLow-Origin", "*");
  setTimeout(() => {
    response.send("later");
  }, 3000);
});

//axios 服务
app.all("/axios-server", (request, response) => {
  //设置响应头允许跨域
  response.setHeader("Access-Control-AlLow-Origin", "*");
  //设置自定义响应头
  response.setHeader("Access-Control-AlLow-Headers", "*");
  const date = {
    message: "hello axios",
  };
  response.send(JSON.stringify(date));
});

//4.监听端口服务的启动
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中....");
});

//然后命令行 'node sever.js'即可启动服务，在http://127.0.0.1:8000可访问服务
