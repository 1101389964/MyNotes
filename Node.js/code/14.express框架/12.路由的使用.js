const express = require("express");
const userRouter = require("./routers/users"); //导入已经配置好的路由

const app = express();

//将已创建好的路由生成中间件，'/user'表示这个路由匹配的路径为当前'http://localhost:8000'加上'/user'
app.use("/user", userRouter); //url路劲为'http://localhost:8000/user'

/*
若还需响应其他的请求，则创建新的路由即可，
例如创建http://localhost:8000/porducts
相关的请求，只需要再创建products相关的路由并生成中间件
*/

app.listen("8000", () => {
  console.log("服务器响应成功");
});
