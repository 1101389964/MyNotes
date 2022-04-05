const fs = require("fs");

//传统复制文件内容操作
/* fs.readFile("./bar.txt", (err, data) => {
  fs.writeFile("./bat.txt", data, (err) => {
    console.log(err);
  });
}); */

//Stream的写法
const reader = fs.createReadStream("./bat.txt");
const wirte = fs.createWriteStream("./bar.txt");

reader.pipe(wirte); //直接将读取的流写入写入流中
