import React, { PureComponent } from "react";

/* 引入css需要命名，然后在HTML标签里面使用 */
import setStyle from "./style.module.css";

export default class index extends PureComponent {
  render() {
    return (
      /* 类名前需要添加引入css文件名 */
      <div className={setStyle.setting}>
        Setting
        <ul className={setStyle.title}>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}
