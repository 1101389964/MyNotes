import React, { Component } from "react";

class Son extends Component {
  /* 没有constructor也可以 */
  constructor(props) {
    super();
    console.log(this.props); //undefined
    this.props = props;
    console.log(this.props); //this.props
  }
  render() {
    //console.log("render调用props", this.props);
    const { name, year, height } = this.props;
    return (
      <div>
        name:{name} year:{year} height:{height}
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 里面的属性相当于传递参数 */}
        <Son name="Ao" year="21" height="180" />
        {/* 可以继续创建子组件 */}
        <Son name="noName" year="0" height="0" />
      </div>
    );
  }
}
