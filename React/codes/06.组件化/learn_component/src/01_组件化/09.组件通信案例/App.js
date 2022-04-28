import React, { Component } from "react";
import TableControl from "./TabControl.js";
import "./index.css";

export default class App extends Component {
  constructor() {
    super();
    this.message = ["新款", "精选", "流行"];
    this.state = {
      currentTitle: "新款",
    };
  }
  render() {
    return (
      <div>
        <TableControl
          currentClick={(index) => {
            this.currentClick(index);
          }}
          message={this.message}
        />
        <h2>{this.state.currentTitle}</h2>
      </div>
    );
  }
  currentClick(index) {
    this.setState({
      currentTitle: this.message[index],
    });
  }
}
