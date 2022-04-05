const EventEmitter = require("events"); //导入的EventEmitter是一个类

const eventBus = new EventEmitter(); //创建对象

//监听某个事件  on是addlistener的简写
eventBus.on("click", (args) => {
  console.log("监听一", args);
});
//eventBus.once也是监听事件，但只监听一次
eventBus.once("click", (args) => {
  console.log("监听二", args);
});

//发布事件
setTimeout(() => {
  eventBus.emit("click", "hello world!"); //两个监听都打印了
  eventBus.emit("click", "hello world!"); //只打印第一个监听
  eventBus.removeAllListeners(); //移除所有的监听器，下面的监听都监听不到了
  eventBus.emit("click", "hello world!");
  eventBus.emit("click", "hello world!");
}, 1000);
