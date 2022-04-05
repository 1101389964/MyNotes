const express = require("express");

const app = express();

app.use((res, rep, next) => {
  console.log("普通中间件响应");
  next();
});

app.get(
  "/login",
  (res, rep, next) => {
    console.log("第1个GET中间件响应");
    next(); //调用next，下面的代码也会响应
  },
  (res, rep, next) => {
    console.log("第2个GET中间件响应");
    next();
  },
  (res, rep, next) => {
    console.log("第3个GET中间件响应");
    rep.end("HELLO COMING");
  }
);

app.listen("8000", () => {
  console.log("服务启动成功");
});
