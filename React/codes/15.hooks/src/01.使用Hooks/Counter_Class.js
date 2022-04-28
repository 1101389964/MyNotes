import React, { PureComponent } from "react";

export default class Counter_Class extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    const counter = this.state.counter;
    return (
      <div>
        <h2>当前计数：{counter}</h2>
        <button onClick={this.addNum.bind(this)}>+1</button>
        <button
          onClick={() => {
            this.creamentNum();
          }}
        >
          -1
        </button>
      </div>
    );
  }
  addNum() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  creamentNum() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
