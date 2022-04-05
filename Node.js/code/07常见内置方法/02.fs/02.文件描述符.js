const fs = require("fs");

/* 
  什么是文件描述符：
  在POSIX系统，对于每个进程，内核都维护这一张当前打开着的文件和资源表格。
  每个打开的文件都分配了一个称为文件描述符的数字标识；
  所有文件系统操作都使用这些文件描述符来标识和跟踪这些特定的文件
*/

fs.open("./test.txt", (err, fd) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(fd); //打印结果3，代表test.txt该文件的描述符

  //通过文件描述符来获取文件的信息
  fs.fstat(fd, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(info);
  });
});

fs.promises.open("./test.txt").then(
  (info) => {
    console.log(info);
  },
  (err) => {
    console.log(err);
  }
);
