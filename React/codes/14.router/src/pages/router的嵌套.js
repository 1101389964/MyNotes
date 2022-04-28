import React, { PureComponent } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import { matchRoutes, renderRoutes } from "react-router-config";
import routes from "../router/index.js";

export class one extends PureComponent {
  render() {
    return <div>one</div>;
  }
}

export class two extends PureComponent {
  render() {
    return <div>two</div>;
  }
}

export class three extends PureComponent {
  render() {
    return <div>three</div>;
  }
}

export default class profile extends PureComponent {
  render() {
    //console.log(routes[5].routes);

    /* 通过renderRoutes渲染出来的路由有该方法，直接通过Switch Route渲染没有该方法 */
    console.log("this.props.route:", this.props.route);

    /* 可以在this.props.route.routes查找所有匹配/profile/listone的route */
    const branch = matchRoutes(this.props.route.routes, "/profile/listone");
    console.log(branch);

    return (
      <div>
        <NavLink to="/profile/listone">列表一</NavLink>
        <NavLink to="/profile/listtwo">列表二</NavLink>
        <NavLink to="/profile/listthree">列表三</NavLink>

        {/* 没有使用router渲染 */}
        {/* <Switch>
          <Route path="/profile/listone" component={one}></Route>
          <Route path="/profile/listtwo" component={two}></Route>
          <Route path="/profile/listthree" component={three}></Route>
        </Switch> */}

        {/* 使用router渲染 */}
        {/* {renderRoutes(routes[5].routes)} */}
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
