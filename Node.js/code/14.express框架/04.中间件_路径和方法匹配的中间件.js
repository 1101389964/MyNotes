const express = require("express");

const app = express();

//路径请求方法都匹配的中间件，只有get方法，且路径为/home才匹配
// app.get("/home", (req, res, next) => {
//   const { callback } = res.query;
//   rep.end(callback + "('hello')");
// });

// app.get("/login", (req, res) => {
//   origin = req.headers.origin;
//   console.log(origin);
//   res.header("Access-Control-Allow-Origin", "*");
//   /* res.json({
//     name: "tqa",
//     year: "22",
//   }); */
//   res.end("hello");
// });
const whitList = ["http://127.0.0.1:5501"]; //设置白名单
app.use((req, res) => {
  origin = req.headers.origin; //获取源地址
  if (whitList.includes(origin)) {
    //检验该源是否在在白名单类
    // 设置哪个源可以访问
    res.setHeader("Access-Control-Allow-Origin", origin);
    // 允许携带哪个头访问我
    res.setHeader("Access-Control-Allow-Headers", "name");
    // 允许哪个方法访问我
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    // 允许携带cookie
    res.setHeader("Access-Control-Allow-Credentials", true);
    // 预检的存活时间
    res.setHeader("Access-Control-Max-Age", 6);
    // 允许返回的头
    res.setHeader("Access-Control-Expose-Headers", "name");
    if (req.method === "OPTIONS") {
      res.end(); // OPTIONS请求不做任何处理
    }
  }
  res.end("hello");
});
app.put("/getData", function (req, res) {
  console.log(req.headers);
  res.setHeader("name", "tqa"); //返回一个响应头，后台需设置
  res.end("hello");
});
app.get("/getData", function (req, res) {
  console.log(req.headers);
  res.end("HELLO");
});

app.listen("8000", () => {
  console.log("服务启动成功");
});
