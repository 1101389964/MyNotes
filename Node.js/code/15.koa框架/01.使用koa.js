const Koa = require("koa"); //与express不同的是koa源码中导出的是一个类

const app = new Koa();

/* 
koa通过创建的app对象，注册中间件只能通过use方法:
Koa并没有提供methods的方式来注册中间件;例如app.get/post....
也没有提供path中间件来匹配路径;例如'/login'
也不支持链式注册中间件
*/
app.use((context, next) => {
  //一：koa框架中没有request与respones,这两个都是在context对象中
  //二：如果没有调用koa响应，koa自己会响应Not Found
  if (context.request.url === "/login") {
    if (context.request.method === "GET") {
      context.response.body = "Login Success~";
    }
  } else {
    context.response.body = "other request~";
  }
});

app.listen(8000, () => {
  console.log("服务器启动成功");
});
