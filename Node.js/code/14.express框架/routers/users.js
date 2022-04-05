const express = require("express");

const router = express.Router(); //创建路由

//如果url为默认url，求请求为get请求，则响应下面的json
router.get("", (req, res, next) => {
  res.json({ user1: "TaoQingAo" });
});

//同理当url为默认url+"/:id"的形式，并且为post请求则会匹配下面代码
router.post("/:id", (req, res, next) => {
  res.json(`${req.params.id}用户信息`);
});

//默认路劲并为post请求
router.post("", (req, res, next) => {
  res.json("创建用户成功");
});

module.exports = router; //导出路由
