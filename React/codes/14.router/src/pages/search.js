import React, { PureComponent } from "react";

export default class search extends PureComponent {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <h2>rearch</h2>
        <h3>Link传递的search：{this.props.location.search}</h3>
      </div>
    );
  }
}
