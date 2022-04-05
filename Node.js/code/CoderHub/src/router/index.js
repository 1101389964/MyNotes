/**
 * 这个文件是将所有的路由注册在app里面的
 */
const fs = require("fs");

const routers = function (app) {
  //fs.readdirSync(__dirname) 读取当前目录所有文件名，返回值为一个数组；
  fs.readdirSync(__dirname).forEach((file) => {
    if (file !== "index.js") {
      const router = require(`./${file}`); //通过文件名获取路由
      app.use(router.routes()); //注册路由
      app.use(router.allowedMethods());
    }
  });
};

module.exports = routers;
