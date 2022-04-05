const Koa = require("koa"); //与express不同的是koa源码中导出的是一个类

const app = new Koa();

app.use((context, next) => {
  console.log(context.request.url);
  console.log(context.request.query);
  console.log(context.request.params); //undefined,koa中为定义
  context.response.body = "Hello Koa";
});

app.listen(8000, () => {
  console.log("服务器启动成功");
});
