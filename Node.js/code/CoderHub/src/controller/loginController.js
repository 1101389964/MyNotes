const jwt = require("jsonwebtoken");

const { PRIVATE_KEY } = require("../app/config");

const loginController = async function (ctx, next) {
  //根据用户的id和account创建token
  const { id, account } = ctx.user;
  //生成token
  const token = jwt.sign({ id, account }, PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24, //表示一天之后过期
    algorithm: "RS256", //通过RS256进行算法进行加密
  });
  ctx.body = {
    id,
    account,
    token,
  };
};

const Success = async function (ctx, next) {
  ctx.body = "验证成功";
};

module.exports = { loginController, Success };
