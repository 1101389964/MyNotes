const http = require("http");

const server = http.createServer((req, res) => {
  //设置状态码
  //方式一：直接给属性赋值
  // res.statusCode = 200;
  //方式二：
  res.writeHead(401);

  //响应结果
  res.end("helloJS");
});

server.listen("8888", () => {
  console.log("服务器开启成功！");
});
