const md5password = require("../utils/password-handle");
const errorType = require("../constants/errorTypes");
const userSever = require("../service/userSever");

const verifyUser = async (ctx, next) => {
  const { account, password } = ctx.request.body;
  //判断用户名和密码不能为空
  if (!account || !password || account === "" || password === "") {
    const error = new Error(errorType.ACCOUNT_OR_PASSWORD_IS_NECESSARY);
    return ctx.app.emit("error", error, ctx);
  }

  //对密码进行加密，用node自带的md5加密算法给原密码进行加密
  ctx.request.body.password = md5password(password);

  //检查用户名是否被创建
  const user = await userSever.getUserByName(account);
  if (user.length !== 0) {
    const error = new Error(errorType.ACCOUT_IS_EXIST);
    return ctx.app.emit("error", error, ctx);
  }

  //满足则会执行下一个中间件
  await next();
};

module.exports = { verifyUser };
