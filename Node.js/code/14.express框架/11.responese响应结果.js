const express = require("express");

const app = express();

app.get("/login", (req, res, next) => {
  console.log(req.params);
  res.status(200); //设置响应码
  res.json({ name: "aozige", age: 21 }); //设置响应数据，数据类型为json
  res.end("Welcome on");
});

app.listen("8000", () => {
  console.log("服务器响应成功");
});
