const Koa = require("koa");
//安装koa-static

const app = new Koa();

app.use((cxt, next) => {
  cxt.status = 400; //简写
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
