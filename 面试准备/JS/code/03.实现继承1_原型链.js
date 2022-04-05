//1.原型链实现继承
function Father() {
  this.fatherValue = "father";
}
Father.prototype.getFatherValue = function () {
  return this.fatherValue;
};

function Son() {
  this.sonValue = "son";
}

/*
将Son的原型直接指向Father的实例，这样可以使用Father的属性与方法
而father的原型链上存在Object原型，也可以继续使用Object上的方法
*/
Son.prototype = new Father();
Son.prototype.constructor = Son;
Son.prototype.getSonValue = function () {
  return this.sonValue;
};

let obj = new Son();
console.log(obj.getFatherValue());
