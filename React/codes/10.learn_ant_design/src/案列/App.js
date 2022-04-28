import React, { PureComponent } from "react";

import "antd/dist/antd.less"; //引入样式(已配置craco.config.js)
import "./components/style.css"; //导入自己的样式

import ComponentInput from "./components/ComponentInput";
import ComponentItem from "./components/ComponentItem";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      content: [], //保存ComponentInput添加的信息
    };
  }
  render() {
    return (
      <div style={{ width: "500px", padding: "20px" }}>
        {/* 根据每次增加的数组重新渲染ComponentItem组件 */}
        {this.state.content.map((item, index) => {
          return (
            <ComponentItem
              key={item.id}
              addMessage={item}
              remove={() => {
                this.deleteComment(index);
              }}
            />
          );
        })}
        <ComponentInput
          addComment={(message) => {
            this.addComment(message);
          }}
        />
      </div>
    );
  }

  /* 接收子组件发送的信息 */
  addComment(message) {
    const newArray = [...this.state.content];
    newArray.push(message);
    //console.log(newArray);
    this.setState({
      content: newArray,
    });
  }
  deleteComment(index) {
    console.log(index);
    let newContent = [...this.state.content];
    newContent.splice(index, 1);
    this.setState({
      content: newContent,
    });
  }
}
