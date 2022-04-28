import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  /* 组件挂在完成 */
  componentDidMount() {
    document.title = this.state.count;
  }
  /* 更新完成 */
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
