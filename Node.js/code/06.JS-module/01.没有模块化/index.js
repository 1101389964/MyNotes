const moduleSon = (function () {
  let name = "aa";
  let year = 20;
  let add = (a, b) => {
    return a + b;
  };
  return {
    name,
    year,
    add,
  };
})();
/* 
  通过函数实现作用域，当其他文件引用该js文件时，不会因为作用域污染到其他的文件变量名；只用调用moduleSon才能调用里面的变量及函数；
*/
