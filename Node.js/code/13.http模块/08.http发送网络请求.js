const http = require("http");

//http发送get请求
http.get("http://localhost:8888", (res) => {
  res.on("data", (data) => {
    console.log(data.toString());
  });
});
