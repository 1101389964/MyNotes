import React, { PureComponent, Fragment } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      color: "red",
      fontSize: "20px",
    };
  }
  render() {
    const { color, fontSize } = this.state;
    return (
      <Fragment>
        {/* 
            内联式优点：1.可以动态获取state里面的数据
                       2.不会引起组件间样式干扰，是相对独立的
        */}
        <h2 style={{ fontSize: "30px", fontWeight: "700" }}>Title</h2>
        <ul>
          <li style={{ color: color, fontSize: fontSize }}>标题1</li>
          <li style={{ color: "green", fontSize: fontSize }}>标题2</li>
          <li style={{ color: "origin", fontSize: "20px" }}>标题3</li>
        </ul>
      </Fragment>
    );
  }
}
