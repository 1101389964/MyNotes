const Koa = require("koa");

const app = new Koa();

app.use((cxt, next) => {
  //cxt.response.body = "Hello World";//响应结果为字符串
  // cxt.response.body = {
  //   name: "tqa",
  //   value: 1111,
  // };//响应结果为json
  //cxt.body = "这样也可以响应";调用cxt.body实际上是调用cxt.response.body方法
  //设置状态码：
  //cxt.response.status = 400;
  cxt.status = 400; //简写
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
