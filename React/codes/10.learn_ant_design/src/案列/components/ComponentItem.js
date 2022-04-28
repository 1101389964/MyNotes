import React, { PureComponent } from "react";

import { Comment, Avatar, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons"; //导入图标

export default class ComponetItem extends PureComponent {
  render() {
    const { nickname, avatar, datetime, content } = this.props.addMessage;
    return (
      <div>
        <Comment
          author={<span>{nickname}</span>}
          avatar={<Avatar src={avatar} alt={nickname} />}
          content={<p>{content}</p>}
          datetime={
            <Tooltip title={datetime.format("YYYY-MM-DD")}>
              <span>{datetime.fromNow()}</span>
            </Tooltip>
          }
          actions={[
            <span
              onClick={() => {
                this.deleteComment();
              }}
            >
              <DeleteOutlined />
              删除
            </span>,
          ]}
        />
      </div>
    );
  }
  deleteComment() {
    this.props.remove();
  }
}
