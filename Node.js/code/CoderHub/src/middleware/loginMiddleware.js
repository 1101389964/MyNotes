const jwt = require("jsonwebtoken");

const md5password = require("../utils/password-handle"); //md5对密码进行加密
const errorType = require("../constants/errorTypes"); //错误类型
const loginSever = require("../service/loginSever");

const { PUBLIC_KEY } = require("../app/config");

const verifyLogin = async (ctx, next) => {
  let { account, password } = ctx.request.body; //由于password得重新复制所以使用let关键字

  //验证账户密码是否为空
  if (!account || !password || account === "" || password === "") {
    const error = new Error(errorType.ACCOUNT_OR_PASSWORD_IS_NECESSARY);
    return ctx.app.emit("error", error, ctx);
  }

  //对密码进行加密，用node自带的md5加密算法给原密码进行加密
  ctx.request.body.password = md5password(password);
  password = ctx.request.body.password; //这里需要将密码在传递给password,因为是通过加密后的命名查询的

  //在数据库中查询账户密码是否正确
  const user = await loginSever.loginCheck(account, password);
  //length是否为空，为空则证明该账户不存在
  if (user.length === 0) {
    const error = new Error(errorType.ACCOUNT_OR_PASSWORD_MISTAKE);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = user[0];
  await next();
};

const verifyAuth = async (ctx, next) => {
  // console.log("验证授权的middleware");
  const authorization = ctx.headers.authorization;
  //当没有token为空时
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //通过RS256算法进行解密,以数组的形式传递，当有多个算法时，如果第一个算法解密不成功，会接着使用下一个算法进行解密。
    });
    /* 
      注意这里
      登录后的每个接口都需要进行token验证，所以需要保持用户id，方便下一个中间件查找
      但是如果这个用户信息保持在上一个路由中，在下一个路由是查找不到的，每个路由都是单独的；
      但可以这样做，因为每次都需要token验证，在解码的中间件中把token解码后的信息赋值给textToken，
      token是存在存在游览器的，会不消失，所以每次都可以获取到用户信息
    */
    ctx.textToken = result;
    await next(); //??????????
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZATION);
    ctx.app.emit("error", error, ctx);
  }
};

module.exports = { verifyLogin, verifyAuth };
