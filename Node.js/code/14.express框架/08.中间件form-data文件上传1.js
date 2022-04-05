const express = require("express");
const multer = require("multer"); //安装multer库，并导入

const app = express();

const upload = multer({
  dest: "./upload/", //指明上传文件保所存的位置
});

// app.use(upload.any()); 不要使用全局的multer中间件

//upload.single表示上传单独的文件，upload.array表示上传多个文件，文件的key为file
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.end("Welcome coming");
});
//这样获取到的文件并没有后缀名

app.listen("8000", () => {
  console.log("服务器启动成功");
});
