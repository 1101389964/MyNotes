const events = require("events");

//1.创建对象
const eventBus = new events();

//2.监听某个事件  on是addlistener的简写
eventBus.on("click", (args) => {
  console.log("监听一", args);
});

eventBus.on("move", (args) => {
  console.log(args);
});

//3.获取注册的事件
console.log(eventBus.eventNames()); //所有注册的事件名称：[ 'click', 'move' ]
console.log(eventBus.listenerCount("click")); //click 事件的个数：1
console.log(eventBus.listeners("move"));
