import React, { PureComponent, createContext } from "react";

const Context = createContext({
  level: "Nan",
  ground: "none",
  country: "China",
});

/* 定义高阶组件 */
function higherOrderComponent(WrapComponent) {
  class HeighComponent extends PureComponent {
    render() {
      return (
        /*
         在高阶组件里面使用context获取公共属性 
         该语法为函数组件里面的context写法
        */
        <Context.Consumer>
          {(value) => {
            //console.log(value);
            console.log({ ...value });
            return <WrapComponent {...value} />;
          }}
        </Context.Consumer>
      );
    }
  }
  return HeighComponent;
}

class hangzhou extends PureComponent {
  render() {
    return (
      <div>
        HangZhou : Level:{this.props.level} Country:{this.props.country}
      </div>
    );
  }
}

class beijing extends PureComponent {
  render() {
    return (
      <div>
        BeiJing: Level:{this.props.level} Country:{this.props.country}
      </div>
    );
  }
}

class shanghai extends PureComponent {
  render() {
    return (
      <ul>
        <li>ShangHai</li>
        <li>Level:{this.props.level}</li>
        <li>Country:{this.props.country}</li>
      </ul>
    );
  }
}

const HangZhou = higherOrderComponent(hangzhou);
const BeiJing = higherOrderComponent(beijing);
const ShangHai = higherOrderComponent(shanghai);

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      level: "1",
      country: "China",
    };
  }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          <HangZhou />
          <BeiJing />
          <ShangHai />
        </Context.Provider>
      </div>
    );
  }
}
