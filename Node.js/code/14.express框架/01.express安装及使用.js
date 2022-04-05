/*
如何创建express服务
方式一：通过express提供的脚手架，直接创建应用的骨架；
        安装脚手架：npm i -g express-generator
        创建项目：express "项目名称"
        安装依赖：npm install 
        启动项目：node bin/www
方式二：从零搭建自己的express应用结构；
*/

//npm init //配置package.json文件
//npm i express //安装express
const express = require("express"); //express实际上是一个函数：createApplication,定义变量express为createApplication

const app = express(); //调用createApplication函数，返回值定位app

//app.get发送get请求回应，"/"代表监听默认路径,
app.get("/", (request, response, next) => {
  response.end("Hello Express GET");
});

//app.post发送post请求回应
app.post("/", (requset, response) => {
  response.end("Hello Express POST");
});

//“/login”路径发生变化
app.post("/login", (request, response) => {
  response.end("Welcome Back");
});

//开启监听：
app.listen(8888, () => {
  console.log("express服务器启动成功");
});
