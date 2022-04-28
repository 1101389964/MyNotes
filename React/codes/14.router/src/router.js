import React, { PureComponent } from "react";
import "./index.css";

import { renderRoutes } from "react-router-config";

import routes from "./router/index";

import { NavLink, withRouter } from "react-router-dom";

class App extends PureComponent {
  render() {
    const info = {
      Firstname: "hello",
      Lastname: "world",
    };
    return (
      <div>
        <NavLink
          exact
          to="/"
          activeStyle={{ color: "red" }}
          activeClassName="link-active"
        >
          首页
        </NavLink>
        <NavLink to="/profile">我的</NavLink>
        <NavLink to="/login">登录</NavLink>
        <NavLink to={`/search?name=why&age=18`}>search方法</NavLink>
        <NavLink
          to={{
            pathname: "/link_to_object",
            search: "?name=why&age=18",
            state: { info },
          }}
        >
          link_to_object
        </NavLink>

        <button
          onClick={() => {
            this.showRedirt();
          }}
        >
          点击展示Redirt
        </button>

        {/* 使用renderRoutes需要在外层包裹一个 HashRouter或者BrowserRouter，
        由于整个组件在index.js里面包裹了BrowserRouter，所以不需要再包裹*/}
        {renderRoutes(routes)}
      </div>
    );
  }

  showRedirt() {
    this.props.history.push("/redirt");
  }
}

export default withRouter(App);
