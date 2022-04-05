const app = require("./app/index.js");
const config = require("./app/config.js"); //导入端号

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${APP_PORT}端号启动成功`);
});
