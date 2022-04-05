// 1
function Setcount(count) {
  this.count = count;
}

Setcount.prototype.printCount = function () {
  console.log(this);
  console.log(this.count);
};

let a = new Setcount(100);
a.count = 200;
a.__proto__.count = 300;
a.__proto__.printCount(); //300  从原型对象上调用方法this指向的是原型对象
a.printCount(); //200  而直接调用this指向的是实例对象

// 2
/* Object.prototype.foo = 'Object';
Function.prototype.foo = 'Function';
function Animal() { };
var cat = new Animal();
console.log(cat.foo);
console.log(Animal.foo); */
