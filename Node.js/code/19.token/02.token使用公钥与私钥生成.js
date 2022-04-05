const Koa = require("koa");
const Router = require("koa-router");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const app = new Koa();

const router = new Router();

//注意：使用相对路径读取文件时，相对的是在哪个文件夹启动项目，相对的就是哪个文件夹的路径
const PRIVATE_KEY = fs.readFileSync("./keys/private.key"); //密钥
const PUBLIC_KEY = fs.readFileSync("./keys/public.key"); //私钥

//颁发token
router.post("/test", (ctx, next) => {
  const user = {
    account: "1101389964",
    password: "tqa3507016",
  };
  //用私钥生成token
  const token = jwt.sign(user, PRIVATE_KEY, {
    expiresIn: 100, //表示100s之后过期
    algorithm: "RS256", //通过RS256进行算法进行加密
  });
  ctx.body = token;
});

//验证验证token
router.get("/read", (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //通过RS256算法进行解密,以数组的形式传递，当有多个算法时，如果第一个算法解密不成功，会接着使用下一个算法进行解密。
    });
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
