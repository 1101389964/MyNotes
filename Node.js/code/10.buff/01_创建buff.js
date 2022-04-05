const message = "Hello Buff";

//创建buff方式一
//const buffer1 = new Buffer(message); //这个方法已经不推荐了

//console.log(buffer1); //结果：<Buffer 48 65 6c 6c 6f 20 42 75 66 66>，每个16进制代表一个字符；

//创建方式二：
const buffer2 = Buffer.from(message);
console.log(buffer2); //结果：<Buffer 48 65 6c 6c 6f 20 42 75 66 66>
