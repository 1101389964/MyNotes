import React, { Component } from "react";
import "./style.css";
export default class otherSolt extends Component {
  render() {
    function foo(props) {
      let result = [];
      for (let key in props) {
        // console.log(props[key]);
        result.push(props[key]);
      }
      return result;
    }
    return <div className="box">{foo(this.props)}</div>;
  }
}
