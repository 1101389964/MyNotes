const message = "浙江科技学院";

//创建buff
const buffer8 = Buffer.from(message);
console.log(buffer8); //结果：<Buffer e6 b5 99 e6 b1 9f e7 a7 91 e6 8a 80 e5 ad a6 e9 99 a2>
//中文转为二进制，默认是UTF-8转换的，而UTF-8是编码汉子为3个字节，所有一个汉字为两个编码
console.log(buffer8.toString()); //对buff进行解码

const buffer16 = Buffer.from(message, "utf16le"); //更改默认UTF_8设置为UTF_16
console.log(buffer16);
console.log(buffer16.toString("utf16le")); //同样解码也需标明是什么类型的，否则会默认安装utf-8译码，那样会乱码
