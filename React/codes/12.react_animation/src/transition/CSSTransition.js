import React, { PureComponent } from "react";
//引入CSSTransition
import { CSSTransition } from "react-transition-group";

// 下面为ant_Design的引入
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <CSSTransition in={isShow} classNames={"card"} timeout={400}>
          {/* 
          当in里面的值为true时显示动画，为false则不显示 
          classNames里面的crad
          timeout动画显示的时间
          */}

          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
        <button
          onClick={() => {
            this.changeCardState();
          }}
        >
          显示/隐藏
        </button>
      </div>
    );
  }

  changeCardState() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}
