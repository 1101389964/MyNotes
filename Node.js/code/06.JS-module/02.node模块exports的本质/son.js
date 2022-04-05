let name = "ao";
let year = 21;

function add(num1, num2) {
  return num1 + num2;
}

//下面是导出上面的变量，导出的变量名不一定要和原变量名相同
exports.name = name;
exports.year = year;
exports.add = add;
//exports是一个原本就存在于node中的一个对象，通过给该对象添加属性就可以复制原来变量的值

//因为是father引用son，所以son会先执行。如果直接打印原来的name，name还会是没有修改之前的值，所以用定时器显示修改之后的值
setTimeout(() => {
  console.log(exports.name);
}, 100);
