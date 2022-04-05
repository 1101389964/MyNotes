const Koa = require("koa");
const Router = require("koa-router"); //引用路由
const multer = require("multer");

const app = new Koa();
const loginRouter = new Router({ prefix: "/users" }); //创键路由
const upload = multer({
  dest: "./upload/", //指明上传文件保所存的位置
});

loginRouter.post("/img", upload.single("avatar"), (context, next) => {
  console.log(context.req.file);
  context.response.body = "Post Is Successful";
});

app.use(loginRouter.routes());

app.listen(8000, () => {
  console.log("服务启动成功");
});
