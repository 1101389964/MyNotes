const express = require("express");

const app = express();

/* app.post("/product", (req, res, next) => {
  req.on("data", (data) => {
    console.log(JSON.parse(data.toString())); //data.toString()将buff转化为字符串，将json字符串转化为对象
  });
  req.on("end", () => {
    res.end("Welcome back!");
  });
});

app.post("/login", (req, res, next) => {
  req.on("data", (data) => {
    console.log(JSON.parse(data.toString()));
  });
  req.on("end", () => {
    res.end("Welcome back!");
  });
}); */

//由于两个不同的pathname请求，拿到的数据的代码是相同的，可以把相同代码抽取出来
//方式一：自定义解析
/* app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    //检查是否为JSON数据类型
    req.on("data", (data) => {
      const info = JSON.parse(data.toString());
      console.log(info);
      req.body = info; //获取到data中的数据，并保存在reqest对象中，在对应的请求中直接获取数据
    });
  }
  req.on("data", (data) => {
    let temp = JSON.parse(data.toString());
    req.body = temp; //获取到data中的数据，并保存在reqest对象中，在对应的请求中直接获取数据
  });
  next();
}); */

//方式二：使用内置方法解析
app.use(express.json()); //对JSON数据类型自动解析
/* 
 extended:
 true:对urlencoded解析使用的是第三方库qs
 false:对urlencoded解析是。使用的是Node内置模块：querstring
*/
app.use(express.urlencoded({ extended: true })); //对urlencoded数据类型自动解析

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("Welcome back!");
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.end("Welcome back!");
});

app.listen("8000", () => {
  console.log("服务启动成功");
});
