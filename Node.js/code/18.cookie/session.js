const Koa = require("koa");
const Router = require("koa-router");
const Session = require("koa-session");

const app = new Koa();

const router = new Router();

//创建session
const session = Session(
  {
    key: "sessionid",
    maxAge: 100 * 100,
    signed: true, //表示是否使用加密签名，请求会有两个session，必须联合才可以cookie才会有结果
  },
  app
);
app.keys = ["aaaa"]; //使用了签名就必须得使用keys

app.use(session);

router.get("/test", (ctx, next) => {
  const id = 110;
  const name = "tqa";
  //app.use(session);给context添加了session属性
  ctx.session.user = { id, name };
  ctx.body = "test";
});

router.get("/read", (ctx, next) => {
  console.log(ctx.session.user); //读取session
  ctx.body = "read";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, () => {
  console.log("服务器启动成功");
});
