const http = require("http");

const server = http.createServer((req, res) => {
  //设置响应header
  //设置方式一：
  //res.setHeader("Content-Type", "text/plain;charset=utf8"); //text/plain代表文本类型，charset=utf8代表编码类型为utf-8；
  //设置方式二：
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  //res.end("你好啊"); //如果没有charset=utf8在游览器中可能会乱码
  res.end("<h2>Hello HTML</h2>"); //文本类型为text/html，在游览器中响应会以<h2>标签的方式显示
});

server.listen("8888", () => {
  console.log("服务启动成功！");
});
