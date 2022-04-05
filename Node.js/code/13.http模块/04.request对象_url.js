const http = require("http");
const url = require("url");
const qs = require("querystring");

const sever = http.createServer((req, res) => {
  //基本的使用方式：根据request.url来显示内容
  /* if (req.url === "/register") {
    res.end("欢迎注册");
  } else if (req.url === "/login") {
    res.end("欢迎登陆");
  } else {
    res.end("参数有误");
  } */

  //但是url参数一般很长不会仅像上面一样 列入：/login?username=tql&password:123456
  //这时候需要判断url前面是否有login参数，就需要用到url对象来判断
  // console.log(url.parse(req.url));
  /* 
  query: 'username=tql&password=123456',
  pathname: '/login',
  */
  const { pathname, query } = url.parse(req.url);
  const { username, password } = qs.parse(query);
  if (pathname === "/register") {
    console.log(username, password);
    res.end("欢迎注册");
  } else if (pathname === "/login") {
    console.log(query);
    res.end("欢迎登录");
  } else {
    res.end("参数有误");
  }
});

sever.listen("8888", () => {
  console.log("启动成功");
});
