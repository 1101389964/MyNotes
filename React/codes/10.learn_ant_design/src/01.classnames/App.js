import React, { PureComponent } from "react";
/* 
  安装classname库 yarn add classnames
*/
import classNames from "classnames"; //导入classname库
export default class App extends PureComponent {
  render() {
    let isActive = true;
    let isBar = false;
    let errClass = "hello";
    return (
      <div>
        {/* 原生react写法 */}
        <h2 className="aaa bbb ccc">标签0</h2>
        <h2 className={"aaa bbb ccc"}>标签1</h2>
        <h2 className={"aaa " + (isActive ? "bbb" : "")}>标签2</h2>
        <h2 className={["aaa", "bbb", "ccc"].join(" ")}>标签3</h2>

        {/* classnames库的添加class */}
        <h2 className={classNames("aaa", "bbb", "ccc")}>标签4</h2>
        {/* 属性的是为true则渲染，否则不渲染,中间的errClass则会按直接渲染其值,后面的title则直接渲染 */}
        <h2
          className={classNames(
            { active: isActive, bar: isBar },
            errClass,
            "title"
          )}
        >
          标签5
        </h2>
        {/* 可以直接渲染数组 */}
        <h2 className={classNames(["aaa", "bbb"])}>标签6</h2>
      </div>
    );
  }
}
