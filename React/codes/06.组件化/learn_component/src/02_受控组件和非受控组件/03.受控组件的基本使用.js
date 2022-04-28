import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  render() {
    return (
      <div>
        {/* onSubmit监听提交事件 */}
        <form onSubmit={(e) => this.handleSubimt(e)}>
          <label htmlFor="userName">
            用户：
            <input
              type="text"
              id="userName"
              onChange={(e) => this.handleChange(e)}
              value={this.state.userName}
            />
            {/* 
                onChange监听input变化的事件,把变化的值赋值给state里面的username
                然后在把username里面的值再赋值给value 实现单项数据流绑定
            */}
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubimt(event) {
    // console.log(event);
    /* 调用合成事件的preveDefault方法阻止默认提交事件 */
    console.log(this.state.userName);
    event.preventDefault();
  }
  handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      userName: event.target.value,
    });
  }
}
