import React, { PureComponent } from "react";
import { Redirect } from "react-router";

export default class Redirt extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  render() {
    return this.state.isShow ? (
      <div>
        <h2>Redirect</h2>
      </div>
    ) : (
      <Redirect to="/notMatch" />
    ); //当isShow为flase则直接匹配到Redirect，并跳转到notMatch路径
  }
}
