const express = require("express");

const app = express();

/*
app.use注册一个中间件：这个中间件没有表明任何的请求方式，但任意的请求都可以接受响应，任何的pathname也都可以响应
可以注册多个中间件
第一个中间件会最先响应，如果没有调用next()方法，后面的中间件就不会响应；
*/
app.use((res, rep, next) => {
  console.log("第1个中间件响应");
  next(); //会查找下一个能匹配上的中间件，第二个中间件也会响应
  rep.end("HELLO"); //结束了请求响应的周期，后面的中间件不能再调用next()方法了
});

app.use((res, rep, next) => {
  console.log("第2个中间件响应");
  // rep.end();//报错，第一个中间件已经结束了请求响应周期，不能再调用next方法了
  next();
});

app.use((res, rep, next) => {
  console.log("第3个中间件响应");
});

app.listen(8000, () => {
  console.log("服务器响应成功！");
});
