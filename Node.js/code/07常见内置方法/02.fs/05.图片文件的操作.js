const fs = require("fs");
const sharp = require("sharp"); //sharp库

//读取jpg格式文件，并复制该文件
fs.readFile("./19e6e8a2f4372816b2edaae3e2eac27e.jpg", (err, data) => {
  console.log(data); //一串buff16进制代码
  fs.writeFile("create.jpg", data, (err) => {
    console.log(err); //直接把buff写入新文件
  });
});

sharp("./create.jpg").resize(500, 300).toFile("tailorIMG.jpg"); //利用sharp库裁剪图片
