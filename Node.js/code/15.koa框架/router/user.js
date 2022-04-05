const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

router.get("/", (ctx, next) => {
  ctx.response.body = "User Lists~";
});

router.post("/", (ctx, next) => {
  ctx.response.body = "Post Users Successful";
});

module.exports = router;
