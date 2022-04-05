const Koa = require("koa");

const app = new Koa();

app.use((cxt, next) => {
  let flag = true;
  if (flag) {
    //context中有app实例，通过context.app去拿app实例
    //因为一般都是在路由中做相关的操作，如果要直接得到app还需导入app，太麻烦，所以直接在context中加入app
    cxt.app.emit("error", new Error("您还没有登录！"), cxt);
  }
});

//回调函数中，第一个参数为错误信息，第二个参数为传递过来的context
app.on("error", (err, cxt) => {
  cxt.status = 401;
  cxt.body = err.message;
});

app.listen(8888, () => {
  console.log("服务启动成功");
});
