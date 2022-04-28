import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruits: "orange",
    };
  }
  render() {
    return (
      <div>
        {/* onSubmit监听提交事件 */}
        <form onSubmit={(e) => this.handleSubimt(e)}>
          <select
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={this.state.fruits}
          >
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubimt(event) {
    //console.log(event);
    /* 调用合成事件的preveDefault方法阻止默认提交事件 */
    console.log(this.state.fruits);
    event.preventDefault();
  }
  handleChange(event) {
    //console.log(event.target.value);
    this.setState({
      fruits: event.target.value,
    });
  }
}
