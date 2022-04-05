const express = require("express");

const app = express();

app.post("/user", (req, res, next) => {
  //增加数据时可能加入失败也可能加入成功，如果加入失败要有对应失败的响应
  const flag = true;
  if (flag) {
    res.json("添加成功");
  } else {
    res.type(400); //状态码
    res.json("添加数据失败");
  }
});

app.post("/register", (req, res, next) => {
  const flag = true;
  if (flag) {
    res.json("注册成功");
  } else {
    res.type(400); //状态码
    res.json("注册失败，已存在用户");
  }
});

app.listen("8000", () => {
  console.log("服务器响应成功");
});
