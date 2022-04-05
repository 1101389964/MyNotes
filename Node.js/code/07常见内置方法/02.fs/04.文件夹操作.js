const fs = require("fs");
const path = require("path");

const dirname = "./file";

//01.首先判断该文件是否存在然后再对文件进行操作,fs.existsSync(文件名)可以判断文件是否存在
if (!fs.existsSync(dirname)) {
  //mkdir创建文件夹操作
  fs.mkdir(dirname, (err) => {
    console.log(err); //打印结果为数组
  });
}

//02.读取文件夹中的所有文件
/* fs.readdir(dirname, (err, files) => {
  console.log(files); //[ '01.txt', '02.txt', '03.txt' ]
}); */

//03.读取文件夹中的所有文件，包括子文件夹里面的文件
function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    //{ withFileTypes: true }，option可选参数，显示文件类型,打印files结果就为对象，该对象有个方法isDirectory()
    files.forEach((item) => {
      //根据文件名使用fs.statSync()方法获取文件的info信息,通过info.isDirectory()判断是否为文件夹，来递归里面的文件，但是这个方法需要加上路径
      if (item.isDirectory()) {
        const filepath = path.resolve(dirname, item.name);
        getFiles(filepath);
      } else {
        console.log(item.name);
      }
    });
  });
}

getFiles(dirname);

//重命名
/* fs.rename("./file", "./FILE", (err) => {
  console.log(err);
}); */
