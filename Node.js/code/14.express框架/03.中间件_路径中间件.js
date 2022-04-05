const express = require("express");

const app = express();

//路径匹配中间件，只有'login'pathname路径可以匹配，但是不限于请求方式
app.use("/login", (res, rep, next) => {
  console.log("路劲匹配中间件响应");
  rep.end("HELLO USER");
});

app.listen("8000", () => {
  console.log("服务启动成功");
});
