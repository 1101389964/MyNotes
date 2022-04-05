const path = require("path");
const express = require("express");
const multer = require("multer"); //安装multer库，并导入

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //cb代指callback
    cb(null, "./upload/"); //指定文件路径
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //规定文件名称，使用时间戳与文件的后缀名拼接；
  },
});

const upload = multer({
  storage,
});

// app.use(upload.any());//不要将multer作为全局的中间件

app.post("/upload", upload.array("file"), (req, res, next) => {
  console.log(req.files[0]); //files为一个数组
  //前面使用了upload.array()所以为req.files,一般情况使用req.file就可以了
  res.end("文件上传成功！");
});

app.post("/login", upload.any("file"), (req, res, next) => {
  console.log(req.files);
  res.end("用户登录成功");
});

app.listen("8000", () => {
  console.log("服务器启动成功");
});
