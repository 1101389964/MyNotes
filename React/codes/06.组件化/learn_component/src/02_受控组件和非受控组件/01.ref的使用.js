import React, { PureComponent, createRef } from "react"; //导入ref

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef(); //使用createRef创建Ref对象
    this.titleEl = null; //
  }
  render() {
    return (
      <div>
        {/*1. ref传入字符串 */}
        <h2 ref="title">Hello React</h2>
        {/*2. ref传入对象 */}
        <h2 ref={this.titleRef}>hhh</h2>
        {/* 3.ref传入回调函数 */}
        <h2
          ref={(args) => {
            this.titleEl = args;
          }}
        >
          hhh
        </h2>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }
  changeText() {
    //console.log(this.refs.title);
    //1.ref使用字符串，refs官方不推荐，已被弃用
    this.refs.title.innerText = "你好";

    //2.ref使用对象,推荐使用
    console.log(this.titleRef.current);
    this.titleRef.current.innerHTML = "Hello World";

    //3.ref：回调函数获取DOM
    //console.log(this.titleEl);
    this.titleEl.innerHTML = "Hello Fun";
  }
}
