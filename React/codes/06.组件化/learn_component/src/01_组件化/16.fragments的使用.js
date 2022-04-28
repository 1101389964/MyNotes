import React, { PureComponent, Fragment } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      couter: 0,
    };
  }
  render() {
    return (
      /*
       Fragment在html页面中是不显示的，里面的子dom直接传递给所获取的DOM 
       <Fragment>  简写<> 注意：简写不能加属性
       */
      <Fragment>
        <h2>当前计数：{this.state.couter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +1
        </button>
      </Fragment>
    );
  }
  increment() {
    this.setState({
      couter: this.state.couter + 1,
    });
  }
}
