const Koa = require("koa");

const app = new Koa();

//由于koa不能一次性注册多个中间件，所以得单个注册
app.use((ctx, next) => {
  ctx.message = "aaa";
  next();
  ctx.response.body = ctx.message; //aaabbbcccc
});

app.use((ctx, next) => {
  ctx.message += "bbb";
  next();
});

app.use((ctx, next) => {
  ctx.message += "ccc";
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
