import React, { Component } from "react";

class Groundson extends Component {
  render() {
    console.log(this.props);
    return <div>Groundson:{this.props.message}</div>;
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        Son
        <Groundson {...this.props} />
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "App组件的信息message",
      num: 10,
    };
  }
  render() {
    return (
      <div>
        App
        {/* 
            等价于:<Son message={this.state.message} num={this.state.num} />
        */}
        <Son {...this.state} />
      </div>
    );
  }
}
