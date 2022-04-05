const express = require("express");
const axios = require("axios"); //导入axios作为异步请求

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
};

const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};

const middleware3 = (req, res, next) => {
  axios({
    url: "http://123.207.32.32:9001/artist/desc",
    method: "GET",
    params: {
      id: 6452,
    },
  }).then((result) => {
    // console.log(result.data.introduction[0].txt);
    req.message += result.data.introduction[0].txt;
    res.end(req.message); //必须在异步执行代码中调用res.end才能追加异步代码片段
  });
};

app.use(middleware1, middleware2, middleware3);

app.listen(8000, () => {
  console.log("服务器启动成功");
});
