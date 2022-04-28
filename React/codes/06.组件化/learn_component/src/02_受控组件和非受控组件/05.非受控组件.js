import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleChange(e);
          }}
        >
          姓名：
          <input ref={this.inputRef}></input>
          <button
            onClick={() => {
              this.submit();
            }}
          >
            提交
          </button>
        </form>
      </div>
    );
  }
  /* 阻止submit默认事件 */
  handleChange(event) {
    event.preventDefault();
  }
  /* 通过ref获取表单的值 */
  submit() {
    console.log(this.inputRef.current.value);
  }
}
