const http = require("http");

//创建服务器
const sever = http.createServer((request, response) => {
  response.end("Hello Word");
});

//在游览器输入：http://localhost:8888 即可监听
sever.listen(8888, "0.0.0.0", () => {
  console.log("服务器启动成功了");
});

//由于每次修改了代码都需要重新启动服务，可以全局安装npm i -g nodemon，自动启动服务
//然后不需要通过node启动服务器，直接通过nodemon命令启动服务器即可
