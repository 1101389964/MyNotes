import React, { PureComponent } from "react";

import { Input, Button } from "antd";
import moment from "moment";

export default class ComponentInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      content: "", //保存添加评论的内容
    };
  }
  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          onChange={(event) => {
            this.inputChange(event);
          }}
          value={this.state.content}
        />
        <Button
          type="primary"
          className="addComment"
          onClick={() => {
            this.submitComment();
          }}
        >
          添加评论
        </Button>
      </div>
    );
  }

  /* 当Input.TextArea里面的数据发生变换时触发该方法 */
  inputChange(event) {
    //console.log(event.target.value);
    this.setState({
      content: event.target.value,
    });
  }

  /* 当点击添加评论按钮触发该方法 */
  submitComment() {
    //console.log(this.state.content);
    const commentInfo = {
      id: moment().valueOf(),
      avatar:
        "http://img.alicdn.com/imgextra/i3/1709365317/O1CN01KJERwK1p9ERkXoHLJ_!!1709365317-0-daren.jpg_180x180xzq90.jpg_.webp",
      nickname: "coder",
      datetime: moment(),
      content: this.state.content,
    };
    this.props.addComment(commentInfo);
    this.setState({
      content: "",
    });
  }
}
