const Router = require("koa-router");

const { verifyUser } = require("../middleware/userMiddleware");
const userController = require("../controller/userController");

const userRouter = new Router({ prefix: "/users" }); //

/**
 * router只负责注册接口，具体的处理逻辑放入controller中
 * verifyUser中间件负责检测传递的账户和用户名是否符合规范
 * 当符合规范后调用next执行下一个中间件才会执行controller.create去创建该账户
 */
userRouter.post("/", verifyUser, userController.create);

module.exports = userRouter;
