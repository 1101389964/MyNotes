const http = require("http");

//通过creteSever创建，http.createServer函数实际上是调用了new http.Server();
const sever1 = http.createServer((req, res) => {
  res.end("Sever1");
});

sever1.listen(8000, () => {
  console.log("Sever1服务启动成功");
});

//http.Server是一个类，直接通过new关键字创建服务
const sever2 = new http.Server((req, res) => {
  res.end("Server2");
});

sever2.listen(9000, () => {
  console.log("Sever2服务启动成功");
});
