import React from "react";
import ReactDom from "react-dom";

import ReactApp from "./app.js";
import "./moudle.js";

const messgae = "hello Webpack";

console.log(messgae);

if (module.hot) {
  //开启模块更新时需要指定哪些模块发生更新时进行HMR；否则还是会直接刷新整个页面
  module.hot.accept("./moudle.js", () => {
    console.log("module.js更新了"); //该回调函数可以写也可以不写
  });
}

ReactDom.render(<ReactApp />, document.querySelector("#app"));
