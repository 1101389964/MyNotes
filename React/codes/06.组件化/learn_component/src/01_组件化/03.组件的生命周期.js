/*
 * @Author: your name
 * @Date: 2021-04-23 17:10:28
 * @LastEditTime: 2021-04-23 19:53:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \06.组件化\learn_component\src\01_组件化\03.组件的生命周期.js
 */
import React, { Component } from "react";

/*
通过 console.log查看生命周期的执行顺序
一、Mounting阶段
    首先执行constructor里面的内容
    然后再执行render()
    最后执行componentDidMount()
二、Updating阶段
    当Mounting加载完成之后，并不会立即执行Updating
    只有在更新时才会执行Updating
    所以当点击button之后就会触发Updating
    然后执行render再执行componentDidUpdate
三、Unmounting阶段
    当组件销毁时会触发componentWillUnmount方法
    在App组件里面引入另一个组件Cpn，通过在App组件里面切换Cpn，
    就会触发Cpn里面的componentWillUnmount方法
 */

class Cpn extends Component {
  render() {
    return <div>Cpn组件</div>;
  }
  componentWillUnmount() {
    console.log("调用了Cpn组件的componentWillUnmount");
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 1,
      flag: true,
    };
    console.log("指行了constructor");
  }
  render() {
    console.log("执行了render");
    return (
      <div>
        <h2>Hello component</h2>
        <div>{this.state.message}</div>
        <button
          onClick={() => {
            this.add();
          }}
        >
          +1
        </button>
        <hr />
        <button
          onClick={() => {
            this.checkout();
          }}
        >
          切换Cpn组件
        </button>
        {this.state.flag && <Cpn />}
      </div>
    );
  }
  add() {
    this.setState({
      message: this.state.message + 1,
    });
  }
  checkout() {
    this.setState({
      flag: !this.state.flag,
    });
  }
  componentDidMount() {
    console.log("执行了componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行了componentDidUpdate");
  }
}
