const Router = require("koa-router");

const { verifyAuth } = require("../middleware/loginMiddleware");
const {
  createMoment,
  getMoment,
  getList,
} = require("../controller/momentController");

const momentRouter = new Router({ prefix: "/moment" }); //

/**
 * router只负责注册接口，具体的处理逻辑放入controller中
 * verifyUser中间件负责检测传递的账户和用户名是否符合规范
 * 当符合规范后调用next执行下一个中间件才会执行controller.create去创建该账户
 */
momentRouter.post("/", verifyAuth, createMoment); //添加评论
momentRouter.get("/", getList); //获取评论
momentRouter.get("/:momentId", getMoment); //获取某条用户的评论

module.exports = momentRouter;
