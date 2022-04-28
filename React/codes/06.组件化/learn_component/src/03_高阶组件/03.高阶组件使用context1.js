import React, { PureComponent, createContext } from "react";

const Context = createContext({
  level: "Nan",
  ground: "none",
  country: "China",
});

/* 
无高阶组件时，每个组件都需要手动的配置context
*/

class HangZhou extends PureComponent {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          return (
            <div>
              HangZhou : Level:{value.level} Country:{value.country}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

class BeiJing extends PureComponent {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          return (
            <div>
              BeiJing: Level:{value.level} Country:{value.country}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      level: "0",
      ground: "none",
      country: "China",
    };
  }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          <HangZhou />
          <BeiJing />
        </Context.Provider>
      </div>
    );
  }
}
