const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const router = new Router();

//这个请求中设置了cookie
router.get("/test", (ctx, next) => {
  //设置cookie，maxAge设置多少秒之后cookie消失，maxAge对应的是毫秒;
  /* set(name: string, value?: string | null, opts?: Cookies.SetOption) */
  ctx.cookies.set("name", "hello", {
    maxAge: 30 * 1000, //30秒之后cookie移除
  });

  ctx.body = "test";
});

//这个请求中读取cookie
router.get("/readCookie", (ctx, next) => {
  const cookie = ctx.cookies.get("name"); //因为刚刚设置了Name为name的cookie,所以通过name读取cookie的值value;
  ctx.body = cookie;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, () => {
  console.log("服务器启动成功");
});
