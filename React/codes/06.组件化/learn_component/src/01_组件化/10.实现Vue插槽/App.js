import React, { Component } from "react";
import Solt from "./Solt";
import OtherSolt from "./otherSolt";

export default class App extends Component {
  render() {
    return (
      /* 
      需求：传递过去的组件，不限个数都可以在一行显示
            最外侧两个是固定宽度，中间平分宽度
      */
      <div className="main">
        {/* 在标签类部传递所需要渲染的模块，所传递的内容保存在propos.children数组里面 */}
        <Solt>
          <span className="left">leftSolt</span>
          <span className="center">centerSolt</span>
          <span className="center">centerSolt</span>
          <span className="center">centerSolt</span>
          <span className="center">centerSolt</span>
          <span className="right">rightSolt</span>
        </Solt>

        {/* 通过标签的属性传递,所传递的参数保存在props里面 */}
        <OtherSolt
          leftSolt={<span className="left">leftSolt</span>}
          mainSolt={<span className="center">mainSolt</span>}
          rightSolt={<span className="right">rightSolt</span>}
        />
      </div>
    );
  }
}
