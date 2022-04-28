import React, { Component } from "react";

class Son extends Component {
  render() {
    const { add, reduce } = this.props;
    return (
      <div>
        <button onClick={reduce}>-1</button>
        <button onClick={add}>+1</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <hr />
        <Son
          reduce={() => {
            this.reduce();
          }}
          add={() => {
            this.add();
          }}
        />
      </div>
    );
  }
  add() {
    this.setState({
      message: this.state.message + 1,
    });
  }
  reduce() {
    this.setState({
      message: this.state.message - 1,
    });
  }
}
