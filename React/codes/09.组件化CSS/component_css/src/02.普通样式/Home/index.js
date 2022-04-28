import React, { PureComponent } from "react";
import Login from "../Login";
import Setting from "../Setting";
export default class index extends PureComponent {
  render() {
    return (
      <div id="home">
        Home
        <Login />
        <Setting />
      </div>
    );
  }
}
