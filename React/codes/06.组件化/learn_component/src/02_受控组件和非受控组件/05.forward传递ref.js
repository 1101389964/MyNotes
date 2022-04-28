import React, { PureComponent, createRef, forwardRef } from "react";
//导入forwardRef高阶组件

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
}

/* 
    一：函数组件没有实例化对象，不能使用ref
    二：ref不是参数，所以也不能通过参数想函数组件传递
    forward高阶组件的写法
    后面的函数为传递的参数
    函数的ref为forward从组件标签里面传递得到的ref
    然后可以直接在函数组件里面使用ref
*/
const Profile = forwardRef(function (props, ref) {
  return (
    <div>
      <h3 ref={ref}>fun</h3>
    </div>
  );
});

export default class App extends PureComponent {
  constructor() {
    super();
    this.AppRef = createRef();
    this.HomeRef = createRef();
    this.FunRef = createRef();
  }
  render() {
    return (
      <div>
        <h2 ref={this.AppRef}>hhh</h2>
        <Home ref={this.HomeRef} />
        <Profile ref={this.FunRef} />
        <button
          onClick={() => {
            this.checkout();
          }}
        >
          打印Ref
        </button>
      </div>
    );
  }
  checkout() {
    console.log(this.AppRef.current);
    console.log(this.HomeRef.current);
    console.log(this.FunRef.current);
  }
}
