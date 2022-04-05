const Koa = require("koa");
//在koa中若要使用路由需要安装第三方库koa-router
const userRouter = require("./router/user.js");

const app = new Koa();

app.use(userRouter.routes()); //调用路由中routes会返回一个函数，并把该函数注册到中间件中
app.use(userRouter.allowedMethods());
/* 
注意:allowedMethods用于判断某一个method是否支持:
  如果我们请求get，那么是正常的请求，因为我们有实现get ;
  如果我们请求put、delete、patch，那么就自动报错:Method Not Allowed，状态码:405 ;
  如果我们请求link、copy、lock，那么久自动报错:Not Implemented，状态码:501;
*/

app.listen(8000, () => {
  console.log("服务器启动成功!");
});
