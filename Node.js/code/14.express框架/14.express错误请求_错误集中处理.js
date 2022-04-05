const { json } = require("express");
const express = require("express");

const app = express();

const err1 = "添加数据失败";
const err2 = "注册失败，已存在用户";

app.post("/user", (req, res, next) => {
  //增加数据时可能加入失败也可能加入成功，如果加入失败要有对应失败的响应
  const flag = false;
  if (flag) {
    res.json("添加成功");
  } else {
    next(new Error(err1)); //调用下一个中间件，并传入错误的回调；
  }
});

app.post("/register", (req, res, next) => {
  const flag = false;
  if (flag) {
    res.json("注册成功");
  } else {
    next(new Error(err2));
  }
});

app.use((err, req, res, next) => {
  console.log(err.message); //会将next中的错误信息传递过来
  let status = 400;
  let message = "";
  switch (err.message) {
    case err1:
      message = err1;
      break;
    case err2:
      message = err2;
      break;
    default:
      message = "未定义错误";
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessgae: message,
  });
});

app.listen("8000", () => {
  console.log("服务器响应成功");
});
