const fs = require("fs");

//无promise
fs.readFile("./file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//使用promise
const p = new Promise((resolve, rejects) => {
  fs.readFile("./file.txt", (err, data) => {
    if (err) rejects(err);
    else resolve(data.toString());
  });
});
p.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

//封装为函数
const readFile = function (path) {
  return new Promise((resolve, rejects) => {
    fs.readFile(path, (err, data) => {
      if (err) rejects(err);
      else resolve(data.toString());
    });
  });
};

readFile("./file.txt").then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
