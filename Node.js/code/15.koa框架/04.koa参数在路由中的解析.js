const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const userRouter = new Router({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  console.log(ctx.request.url);
  ctx.response.body = "User_Get";
});

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log("服务启动成功");
});
