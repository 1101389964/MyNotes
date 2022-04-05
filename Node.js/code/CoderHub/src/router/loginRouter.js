const Router = require("koa-router");

const { loginController, Success } = require("../controller/loginController");
const { verifyLogin, verifyAuth } = require("../middleware/loginMiddleware");

const loginRouter = new Router({ prefix: "/login" });

loginRouter.post("/", verifyLogin, loginController);
loginRouter.get("/test", verifyAuth, Success);

module.exports = loginRouter;
