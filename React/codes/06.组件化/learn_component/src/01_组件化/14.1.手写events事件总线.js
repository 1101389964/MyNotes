export default class events {
  constructor() {
    this.typesQueue = {};
  }

  emit(type) {
    if (this.typesQueue.hasOwnProperty(type)) {
      if (arguments.length === 2) {
        this.typesQueue[type].forEach((fun) => {
          fun(arguments[1]);
        });
      } else if (arguments.length > 2) {
        let arr = Array.from(arguments);
        arr = arr.filter((item, index) => index >= 1);
        this.typesQueue[type].forEach((fun) => {
          fun(...arr);
        });
      }
      return true;
    }
  }

  addListener(type, fun) {
    if (typeof fun !== "function") {
      throw new Error("第二个参数应为函数类型");
    }
    //如果该监听类型不存在则建立该消息队列
    if (!this.typesQueue.hasOwnProperty(type)) {
      this.typesQueue[type] = [];
    }
    //插入该类型
    this.typesQueue[type].push(fun);
  }

  removeListener(type, fun) {
    if (this.typesQueue.hasOwnProperty(type)) {
      /* >>>代表无符号数右移，当查找到该方法右移0位没有影响，
        但是当没有查到时，结果为-1,-1的补码为11111...1(js底层为32进制)
        那么该补码转化为无符号数时已经远远超出数组的范围,并不会删除队列中的方法
      */
      this.eventMap[type].splice(this.eventMap[type].indexOf(fun) >>> 0, 1);
      // delete this.eventMap[type];
    }
  }
}
