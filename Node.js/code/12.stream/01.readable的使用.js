const fs = require("fs");

fs.readFile("foo.txt", (err, data) => {
  console.log(data);
});

const reader = fs.createReadStream("./foo.txt", {
  start: 3, //开始读取的位置
  end: 6, //结束读取的位置
  highWaterMark: 2, //每次读取多少
});

//监听data事件才能读取数据，data事件时由reader发出的
reader.on("data", (data) => {
  console.log(data);
  // <Buffer 6c 6f>
  //{<Buffer 20 4e>
});

//监听文件被打开
reader.on("open", () => {
  console.log("文件被打开");
});

//监听文件被关闭
reader.on("close", () => {
  console.log("文件被关闭");
});
