const EventEmitter = require("events"); //导入的EventEmitter是一个类

const eventBus = new EventEmitter(); //创建对象

//监听某个事件  on是addlistener的简写
eventBus.on("click", (args1, args2) => {
  console.log("监听一", args1, args2);
});
const Listen = (args1, args2) => {
  console.log("监听二", args1, args2);
};
eventBus.on("click", Listen);

//发布事件
setTimeout(() => {
  eventBus.emit("click", "hello world!", "JavaScript"); //两个监听都打印了
  eventBus.off("click", Listen); //取消第二个监听
  eventBus.emit("click", "hello world!"); //只打印第一个监听
}, 1000);
