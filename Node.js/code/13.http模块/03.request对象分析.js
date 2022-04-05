const http = require("http");

const server = http.createServer((req, res) => {
  //request对象封装了客户端给我们的服务器传递过来的所有信息
  console.log("url:", req.url); //url
  console.log("method:", req.method); //请求方式
  console.log("headers:", req.headers); //请求头
  res.end("Hello World");
});

server.listen(8888, () => {
  console.log("服务启动成功");
});
