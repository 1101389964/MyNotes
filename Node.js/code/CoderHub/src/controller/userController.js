const service = require("../service/userSever.js");

class UserControl {
  async create(ctx, next) {
    //获取用户请求传递的参数
    const data = ctx.request.body;
    //将用户数据放入数据库，具体的数据处理在service文件夹中
    const result = await service.create(data);
    //返回响应
    ctx.body = result;
  }
}

module.exports = new UserControl();
