//注意函数名与变量名相同会覆盖掉变量
function fn(a, c) {
  console.log(a);
  var a = 123;
  console.log(a);
  console.log(c);
  function a() {}
  if (false) {
    var d = 678;
  }
  console.log(d);
  console.log(b);
  var b = function () {};
  console.log(b);
  function c() {}
  console.log(c);
}
fn(1, 2);
/* 
编译阶段：
1.由于是函数，所有创建AO对象
2.定义参数及变量，并将其值设置为undefined
3.将参数值设置为传入的值
3.定义函数变量，并将函数的AO对象的地址赋值给该变量，注意如果函数名与变量名相同会替代掉原变量
*/
