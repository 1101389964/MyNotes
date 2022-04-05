let name = "ao";
let year = 21;

function add(num1, num2) {
  return num1 + num2;
}

exports.name = name;
exports.year = year;
exports.add = add;

console.log(module.exports); //{ name: 'ao', year: 21, add: [Function: add] } 结果与exports相同
/* 
事实上node内部有这样的赋值：module.exports = exports; 
但是在导出的exports却是module.exports
*/

//修改module.exports,在father中查看exports的变化
module.exports = {
  name: "Tao",
  year: 20,
};
