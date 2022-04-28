import React, { PureComponent } from "react";

//导入ReactDOM高阶组件
import ReactDOM from "react-dom";

/* 
    createPortal第一个参数为可渲染的React元素，当前为Modal中的h3标签
                 第二个参数是一个DOM元素，将前面的元素渲染到获取到的DOM元素上面
    然后就可以将Modal里面的标签插入到index.html里面的所选定的标签里面
*/
class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("moudle")
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h3>Home</h3>
        </Modal>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 ref={this.AppRef}>App</h2>
        <Home ref={this.HomeRef} />
      </div>
    );
  }
}
