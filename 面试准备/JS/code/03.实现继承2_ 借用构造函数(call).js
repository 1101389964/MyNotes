//2.借用构造函数实现继承(call)
function Father() {
  this.FatherVaue = "father";
}

//核心代码：调用call将所需继承的函数在自己的函数体内执行，这样就可以继承Father的属性和方法，而且不会影响Father的原型
function Son() {
  Father.call(this);
}

const objSon = new Son();
console.log(objSon.FatherVaue);
