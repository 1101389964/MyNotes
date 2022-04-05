const Koa = require("koa");
//解析json/urlencoded格式需要安装第三方库，koa-bodyparser，不能解析form-data
const koaParser = require("koa-bodyparser");

const app = new Koa();

app.use(koaParser()); //使用koa-bodyparser

app.use((ctx, next) => {
  //解析客户端传来的json格式
  console.log(ctx.request.body);
  ctx.response.body = "Hello World";
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
