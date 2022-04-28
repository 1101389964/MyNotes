import React, { PureComponent } from "react";

import store from "../store/index"; //导入store

import { subAction, decAction } from "../store/actionCreators";

export default class About extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
      add: 6,
    };
  }

  //只需在组件加载完成是添加监听器即可，每当监听到dispatch时，会自动更新state里面的数据，并刷新组件
  componentDidMount() {
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
    return (
      <div>
        <hr />
        <h2>About</h2>
        <h2>当前计数{this.state.counter}</h2>
        <button
          onClick={() => {
            this.decreament();
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.subNumber(this.state.add);
          }}
        >
          -{this.state.add}
        </button>
      </div>
    );
  }

  decreament() {
    store.dispatch(decAction());
  }

  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
