const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const test1 = async (ctx, next) => {
  await next(); //如果这里没加await  第二个中间件的ctx.body会没有响应
};

const test2 = async (ctx, next) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("test result");
    }, 10);
  });
  console.log(result);
  console.log("后打印");

  ctx.body = "hello";
};

router.get("/", test1, test2);

app.use(router.routes());

app.listen(8888, () => {
  console.log("服务启动成功");
});
