import React, { PureComponent } from "react";

import store from "../store/index"; //导入store

import { addAction, incAction } from "../store/actionCreators";

export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
      add: 5,
    };
  }

  componentDidMount() {
    // store.subscribe有返回值，返回值是个函数，执行该函数就会取消订阅
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  /* 当组件销毁时取消订阅 */
  componentWillUnmount() {
    this.unsubscribue();
  }

  render() {
    const { add } = this.state;
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数{this.state.counter}</h2>
        <button
          onClick={() => {
            this.increament();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.addNumber(add);
          }}
        >
          +{add}
        </button>
      </div>
    );
  }
  increament() {
    store.dispatch(incAction());
  }
  addNumber(num) {
    store.dispatch(addAction(num));
  }
}
