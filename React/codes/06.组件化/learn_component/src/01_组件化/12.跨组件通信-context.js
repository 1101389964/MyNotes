import React, { Component } from "react";
/* 创建Context对象 */
const MyContext = React.createContext({
  information: "Hello React",
  // 当组件容器没有被MyContext.Provider包裹，value 参数会直接取创建 context 时传递给 createContext 的 defaultValue。
});

class Groundson extends Component {
  render() {
    /*
     默认情况下 this.context为空对象 
     通过调用该类的contextType属性，
     把创建的Mycontext对象赋值过去
     就可以获得父组件传递过来的数据了
    */
    console.log("Groundson:", this.context);
    return <div>Groundson:{this.context.information}</div>;
  }
}

Groundson.contextType = MyContext;

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
      information: "App组件的信息",
      num: 10,
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
