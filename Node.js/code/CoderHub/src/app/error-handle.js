const errorType = require("../constants/errorTypes");

const errorHandle = (error, ctx) => {
  switch (error.message) {
    case errorType.ACCOUNT_OR_PASSWORD_IS_NECESSARY:
      ctx.status = 400; //bad request 错误请求，账户或密码为空
      ctx.body = error.message;
      break;
    case errorType.ACCOUT_IS_EXIST:
      ctx.status = 409; //conflict 冲突，用户名冲突
      ctx.body = error.message;
      break;
    case errorType.ACCOUNT_OR_PASSWORD_MISTAKE:
      ctx.status = 409; //conflict
      ctx.body = error.message;
      break;
    case errorType.UNAUTHORIZATION:
      ctx.status = 401; //状态码 401 Unauthorized 代表客户端错误，指的是由于缺乏目标资源要求的身份验证凭证，发送的请求未得到满足。
      ctx.body = error.message;
      break;
    default:
      ctx.status = 404; //not found
      ctx.body = "NOT FOUND";
  }
};

module.exports = errorHandle;
