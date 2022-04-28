import React, { PureComponent } from "react";
import CSSTransition from "./transition/CSSTransition";
/* 
  安装：yarn add react-transition-group
*/
import "antd/dist/antd.css"; //引入样式
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CSSTransition />
      </div>
    );
  }
}
