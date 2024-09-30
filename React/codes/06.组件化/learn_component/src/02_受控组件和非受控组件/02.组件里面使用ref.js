import React, { PureComponent, createRef } from "react"; //导入ref

/* 通过ref点击父组件控制子组件 */
class Son extends PureComponent {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  render() {
    return (
      <div>
        Son组价当前计数:
        <h2>{this.state.number}</h2>
        <button
          onClick={() => {
            this.addNumber();
          }}
        >
          +1
        </button>
      </div>
    );
  }
  addNumber() {
    this.setState({
      number: this.state.number + 1,
    });
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.refSon = createRef();
  }
  render() {
    return (
      <div>
        {/* 1、使用createRef创建ref */}
        <Son ref={this.refSon} />
        {/* 2、直接赋值 */}
        <Son ref={((ref) => {this.ontherRef = ref})} />
        <button
          onClick={() => {
            this.addSonNumber1();
          }}
        >
          1、子组件number+1
        </button>
        <button
          onClick={() => {
            this.addSonNumber2();
          }}
        >
          2、子组件number+1
        </button>
      </div>
    );
  }
  addSonNumber1() {
    /* 在父组件里面获取子组件里面的方法，实现子组件number自加 */
    this.refSon.current.addNumber();
  }
  addSonNumber2() {
    this.ontherRef.addNumber()
  }
}
