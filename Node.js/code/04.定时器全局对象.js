setTimeout(() => {
  console.log("setTimeout");
}, 1000);

setInterval(() => {
  console.log("setInterval");
}, 1000);

setImmediate(() => {
  console.log("setImmdiate");
}); //立刻执行的定时器，感觉毫无意义

process.nextTick(() => {
  console.log("process.nextTick");
}); //procss对象中的方法，指下一时刻执行

//执行顺序：process.nextTick最先执行，setImmediate第二执行
