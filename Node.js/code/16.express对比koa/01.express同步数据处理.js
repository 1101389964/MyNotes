const express = require("express");

const app = express();

/**
 * 需求：
 * 创建三个中间件，向中间件req中添加message属性
 * 每个中间件都向message追加一个字符串
 * 要求在最后一个中间件追加完成之后在第一个中间件中发出响应message
 */

//把三个中间件的函数抽取出来，最后在一个app.use中调用，相当与response连续注册中间件
const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next(); //由于代码是同步执行的，所以调动后面的中间件，等后面的中间件执行完成，才会发出响应，这时message已经修改完成
  res.end(req.message);
};

const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};

const middleware3 = (req, res, next) => {
  req.message += "ccc";
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功");
});
