import React, { Component } from "react";

/* 创建Context对象 */
const MyContext = React.createContext({
  information: "Hello React",
    // 当组件容器没有被MyContext.Provider包裹，value 参数会直接取创建 context 时传递给 createContext 的 defaultValue。
});

/* 函数式组件没有this.context */
function Groundson() {
  return (
    <MyContext.Consumer>
      {(value) => {
        return <div>Groundson:{value.information}</div>;
      }}
    </MyContext.Consumer>
  );
}

class Son extends Component {
  render() {
    return (
      <div>
        Son
        <Groundson />
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      information: "App组件信息",
    };
  }
  render() {
    return (
      <div>
        App
        <MyContext.Provider value={this.state}>
          {/* this.state为组件所共享的数据 */}
          <Son />
          {/* <Son />一定要放在<MyContext.Provider>里面 */}
        </MyContext.Provider>
      </div>
    );
  }
}
