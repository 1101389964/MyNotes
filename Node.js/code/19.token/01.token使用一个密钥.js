const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("jsonwebtoken");

const app = new Koa();

const router = new Router();

const SERCET_KEY = "hahaha"; //密钥

//颁发token
router.post("/test", (ctx, next) => {
  //假设获取到用户的账号与密码
  const user = {
    account: "1101389964",
    password: "tqa3507016",
  };
  //生成token,通过header，payload,signature进行加密
  const token = jwt.sign(user, SERCET_KEY, {
    expiresIn: 100, //表示100s之后过期
  });
  ctx.body = token;
  //结果：由加密后的`header`+加密后的`payload`+`密钥组合`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMTEwMTM4OTk2NCIsInBhc3N3b3JkIjoidHFhMzUwNzAxNiIsImlhdCI6MTYzNzA2OTIzMSwiZXhwIjoxNjM3MDY5MjQxfQ.MoXLA1ymfoxktXbD1_0nQaOWGpLpniyAa0p-1BZxKhk
});

//验证验证token
router.get("/read", (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, SERCET_KEY); //当token过期会抛出异常的，所以需要捕获异常
    ctx.body = result;
  } catch (error) {
    console.log(error);
    ctx.body = "token是无效的";
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, () => {
  console.log("服务器启动成功");
});
