const express = require("express");
const multer = require("multer"); //安装multer库，并导入

const app = express();
const upload = multer();

app.use(upload.any());

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("Welcome coming");
});

app.listen("8000", () => {
  console.log("服务器启动成功");
});
