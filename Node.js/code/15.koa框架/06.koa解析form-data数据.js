const Koa = require("koa");
const multer = require("koa-multer");
//解析form-data,安装koa-multer

const app = new Koa();

const upload = multer();

app.use(upload.any());

app.use((ctx, next) => {
  //解析客户端传来的form-data格式
  console.log(ctx.req.body); //解析form-data是在req中解析并不是在request中，request为koa自己封装的对象，req为http原生的对象
  ctx.response.body = "Hello World";
});

app.listen(8000, () => {
  console.log("服务启动成功");
});
