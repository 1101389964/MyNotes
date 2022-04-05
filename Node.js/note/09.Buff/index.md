## Buff与二进制

对于前端开发来说，通常很少会和二进制打交道，但是对于服务器端为了做很多的功能，我们必须直接去操作其二进制的数据;
所以Node为了可以方便开发者完成更多功能，提供给了我们一个类Buffer，并且它是全局的。我们前面说过，Buffer中存储的是二进制数据，那么到底是如何存储呢?

* **我们可以将Buffer看成是一个存储二进制的数组;**
* **这个数组中的每一项，可以保存8位二进制:00000000**
* **但是在node中显示的buff是16进制，即8位二进制转化为2位16进制显示；**

## 创建buff

```js
const message = "Hello Buff";

//创建buff方式一
const buffer1 = new Buffer(message); //这个方法已经不推荐了
console.log(buffer1); //结果：<Buffer 48 65 6c 6c 6f 20 42 75 66 66>，每个16进制代表一个字符；

//创建方式二：
const buffer2 = Buffer.from(message);
console.log(buffer2); //结果：<Buffer 48 65 6c 6c 6f 20 42 75 66 66>
```

## Buff编码类型

```js
const message = "浙江科技学院";

//创建buff
const buffer8 = Buffer.from(message);
console.log(buffer8); //结果：<Buffer e6 b5 99 e6 b1 9f e7 a7 91 e6 8a 80 e5 ad a6 e9 99 a2>
//中文转为二进制，默认是UTF-8转换的，而UTF-8是编码汉子为3个字节，所有一个汉字为两个编码
console.log(buffer8.toString()); //对buff进行解码

const buffer16 = Buffer.from(message, "utf16le"); //更改默认UTF_8设置为UTF_16
console.log(buffer16);
console.log(buffer16.toString("utf16le")); //同样解码也需标明是什么类型的，否则会默认安装utf-8译码，那样会乱码
```

## Buff申请内存空间

**事实上我们创建Buffer时，并不会频繁的向操作系统申请内存，它会默认先申请一个8*1024个字节大小的内存，也就是8kb**