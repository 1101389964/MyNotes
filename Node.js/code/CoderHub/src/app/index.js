const Koa = require("koa");
const koaParser = require("koa-bodyparser"); //解析json/urlencoded格式

//路由
/* const userRouter = require("../router/userRouter.js");
const loginRouter = require("../router/loginRouter"); */
const router = require("../router");

//错误处理的回调函数
const errorHandle = require("./error-handle");

const app = new Koa();

app.use(koaParser());
/* app.use(userRouter.routes()); //注册路由
app.use(userRouter.allowedMethods());
app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods()); */
router(app);
app.on("error", errorHandle);

module.exports = app;
