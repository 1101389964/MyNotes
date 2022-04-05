const Koa = require("koa");
const axios = require("axios");

const app = new Koa();

/**
 * 需求：
 * 在最后一个中间件中把context.message追加异步代码操作
 * 并在第一个中间件中获取把context.message响应给客户端
 *
 *
 * 注意：
 * 这里koa可以结合async与await是因为koa中的next函数实现是用promise实现的,
 * awit结合promise可以实现排队效果
 * 而express的next方法是用同步代码实现的，同步代码结合await是没有任何意义的
 */

app.use(async (ctx, next) => {
  ctx.message = "aaa";
  await next();
  ctx.body = ctx.message;
});

app.use(async (ctx, next) => {
  ctx.message += "bbb";
  await next();
});

app.use(async (ctx, next) => {
  const result = await axios.get(
    "http://123.207.32.32:9001/artist/desc?id=6452"
  );
  ctx.message += result.data.introduction[0].txt;
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
