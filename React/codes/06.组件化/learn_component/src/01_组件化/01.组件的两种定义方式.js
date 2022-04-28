/*
 * @Author: your name
 * @Date: 2021-04-23 15:31:04
 * @LastEditTime: 2021-04-23 16:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \06.组件化\learn_component\src\01_组件的定义方式\App.js
 */
import React from "react";

//类组件
export default class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      message: "类组件",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

/*
  函数组件的特点
  1.没有this指向
  2.没有内部状态（state）:
  3.没有生命周期
*/
/* export default function App() {
  return (
    <div>
      <h2>函数组件</h2>
    </div>
  );
} */
