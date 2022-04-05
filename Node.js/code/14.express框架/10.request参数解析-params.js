const express = require("express");

const app = express();

//req.params
//客户端的请求：http://localhost:8000/products/1234，1234代表后面的id
app.get("/products/:id", (req, res, next) => {
  console.log(req.params); //{ id: '1234' } req.params为一个对象
  res.end("请求products数据成功");
});

//后面可以有多个参数
app.get("/phones/:id/:name", (req, res, next) => {
  let { id, name } = req.params;
  console.log(id, name);
  res.end("请求phones数据成功");
});

//res,query
//http://localhost:8000/login?username=why&password=123456
app.get("/login", (req, res, next) => {
  console.log(req.query); //{ username: 'why', password: '123456' }
  res.end("用户登录成功！");
});

app.listen("8000", () => {
  console.log("服务器启动成功");
});
