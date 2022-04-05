const http = require("http");
const url = require("url");

const sever = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/login") {
    if (req.method === "POST") {
      req.setEncoding("utf-8"); //说明获取到的数据为utf-8，就不需要使用toString方法
      req.on("data", (data) => {
        console.log(data); //获取到的数据为JSON格式
        const { username, password } = JSON.parse(data); //将JSON转化为对象，并解构
        console.log(username, password);
      });
      res.end("Hello http");
    }
  }
});

sever.listen("8888", () => {
  console.log("启动成功");
});
