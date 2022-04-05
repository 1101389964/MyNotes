const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/upload") {
    if (req.method === "POST") {
      req.on("data", (data) => {
        // console.log(data.toString());
        //若要复制文件，不能直接使用writeFile流写入文件，因为二进制buff里面还包含了其他内容,还包括文件名，文件编码格式，文件类型等等；
        //处理body之后再复制
      });
    }
  }
  res.end("Hello Windows");
});

server.listen("8888", () => {
  console.log("服启动应成功");
});
