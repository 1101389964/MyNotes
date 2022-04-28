import React, { PureComponent } from "react";
import "./index.css";

import {
  HashRouter,
  Route,
  Link,
  NavLink,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/手动配置router";
import notMatch from "./pages/notMatch";
import Profile from "./pages/router的嵌套";
import Redirect from "./pages/Redirect";
import search from "./pages/search";
import Link_to_object from "./pages/Link_to_object";

class App extends PureComponent {
  render() {
    const info = {
      Firstname: "hello",
      Lastname: "world",
    };
    return (
      <div>
        {/* HashRouter通过改变hash实现路由的切换 */}
        {/* <HashRouter></HashRouter> */}

        {/* BrowserRouter通过改变history实现路由的切换 */}

        {/* Link会渲染出来，在html页面为a标签，当点击之后就会改变对应的路由 */}
        {/* <Link to="/">首页</Link>
          <Link to="/profile">我的</Link>
          <Link to="/about">登录</Link> */}

        {/* 
            1、NavLink与Link具有一样的功能：但比Link多一个activeStyle的功能 
              当NavLink匹配到当前路径时就会使当前的标签展示activeStyle的样式
            2、NavLink也是模糊匹配，所以也需要添加exact
            3、NavLink会默认给被选中状态添加active类名，可以通过给active类名添加css样式来改变
            4、可以通过activeClassName来改变被选中NavLink的类名
          */}
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
        {/* ?name=why&age=18称为query */}

        <NavLink
          to={{
            pathname: "/link_to_object",
            search: "?name=why&age=18",
            state: { info },
          }}
        >
          link_to_object
        </NavLink>
        {/* 
          在显示该路由的组件里面答应this.props.location可以查看到当前的to里面的对象
        */}

        <button
          onClick={() => {
            this.showRedirt();
          }}
        >
          点击展示Redirt
        </button>
        {/* <NavLink to="/redirt">Redirt</NavLink> */}

        {/* 
            1、当router与Link的路径匹配之后就会显示对应的组件
            2、没有exact(精确的)时是模糊匹配：只要含有"/"就会显示Home组件；
               当添加exact就会精准匹配：必须完全一样才显示 
            3、Route放到哪个位置到时候显示就会在哪个位置
          */}
        <Switch>
          {/* 
              Switch是排他的，如果没有switch则默认显示匹配到的路径和":/id",和没有路径的组件； 
              添加了switch则只显示其中匹配的一个，其他的不显示   
            */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/redirt" component={Redirect}></Route>

          <Route path="/search" component={search}></Route>
          <Route path="/link_to_object" component={Link_to_object}></Route>

          {/* path="/:id"表示不确定路径 */}
          <Route path="/:id" component={Profile}></Route>

          {/* 没有path则当匹配不到路径时显示该组件 */}
          <Route component={notMatch}></Route>
        </Switch>
      </div>
    );
  }
  /* 在App组件里面是没有history方法的，需要通过该withRouter传递给App组件该方法，并在index.js里面添加BrowserRouter */
  showRedirt() {
    this.props.history.push("/redirt");
  }
}

export default withRouter(App);
