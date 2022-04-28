import React, { Component } from "react";

export default class TabControl extends Component {
  constructor() {
    super();
    this.state = {
      flag: 0, //默认值
    };
  }
  render() {
    const { message } = this.props;
    return (
      <div className="tab-control">
        {message.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "table-item " + (this.state.flag === index ? "active" : "")
              }
              onClick={() => {
                this.change(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
  change(index) {
    const { currentClick } = this.props;
    this.setState({
      flag: index,
    });
    currentClick(index);
  }
}
