import React, { PureComponent, useState } from "react";
import { Route } from "react-router";

function LoginCmp() {
  return <div>登录界面</div>;
}

export default class login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flag: true,
    };
  }
  render() {
    return (
      <div>
        <h2>login</h2>
        <button
          onClick={() => {
            this.Login();
          }}
        >
          {this.state.flag ? "登录界面" : "退出登录"}
        </button>
        <Route path="/login/click" component={LoginCmp}></Route>
      </div>
    );
  }

  Login() {
    /* 
    该组件是由路由加载出来的，组件本来是没有history方法的，是由路由传递过来的，
    如果在App组件里面直接调用history则会定义为undefined 
    */
    if (this.state.flag) {
      this.setState({
        flag: !this.state.flag,
      });
      this.props.history.push("/login/click");
    } else {
      this.setState({
        flag: !this.state.flag,
      });
      this.props.history.push("/login");
    }
  }
}
