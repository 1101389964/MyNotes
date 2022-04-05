process.argv.forEach((element, index) => {
  console.log(element, index);
}); //process为node中的对象，argv为里面的一个属性，可以接受到传递给node的参数
4;

console.log(process.argv);
