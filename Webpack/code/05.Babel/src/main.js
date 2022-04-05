//当使用useBuiltIns: "entry",必须引入此包
// import "core-js/stable";
// import "regenerator-runtime/runtime";

/* const promise = new Promise((resolve, reject) => {
  resolve("helllo");
});

const fun = async () => {
  const resolve = await promise;
  console.log(resolve);
};

console.log(fun()); */

import React from "react";
import ReactDom from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      message: "哈喽",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
