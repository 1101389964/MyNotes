const service = require("../service/momentSever");

class MomentControl {
  async createMoment(ctx, next) {
    //1获取到用户信息以及评论数据
    const id = ctx.textToken.id;
    const content = ctx.request.body.content;

    //将数据插入到数据库
    const result = await service.createMomet(id, content);
    ctx.body = result;
  }

  async getMoment(ctx, next) {
    // console.log(ctx.request.url);
    // console.log(ctx.params);
    // console.log(ctx.params.momentId);

    const id = ctx.params.momentId;
    const moments = await service.getMoment(id);
    ctx.body = moments;
  }

  async getList(ctx, next) {
    //查询列表评论是分页查询的，实际开发数据量大，不能把所有数据一起返回,所以使用分页查询；
    //moment?offset=****&size=****
    const { offset, size } = ctx.query;
    //查询数据
    const result = await service.getMomentList(offset, size);
    ctx.body = result;
  }
}

module.exports = new MomentControl();
