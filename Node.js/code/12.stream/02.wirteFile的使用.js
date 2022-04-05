const fs = require("fs");
const { writer } = require("repl");

fs.writeFile;
const wirter = fs.createWriteStream("./bar.txt", {
  flags: "a", //与writeFile的flag一样
  start: 4, //从哪个位置开始
});

wirter.write("hello", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});

wirter.write("World", (err) => {
  console.log("第二次写入");
});

//writer.close(); //得自己手动关闭，不会自己关闭
wirter.end(); //end方法可以传递参数，参数会写入wirter文件，并且会执行close方法；

wirter.on("close", () => {
  console.log("文件被关闭");
});
