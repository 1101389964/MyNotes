import React, { PureComponent } from "react";
import Login from "../Login";
import Setting from "../Setting";
export default class index extends PureComponent {
  render() {
    return (
      /*
        以module导入css时，css文件名中间需要加module 
        优点：每个css文件可以相互独立
        缺点：不能获取state的状态
       */
      <div id="home">
        Home
        <Login />
        <Setting />
      </div>
    );
  }
}
