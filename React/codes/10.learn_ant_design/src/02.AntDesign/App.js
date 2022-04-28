import React, { PureComponent } from "react";

import { Button } from "antd";
/* 
    PoweroffOutlined来自于@ant-design/icons库不在antd里面
    安装@ant-design/icons ：yarn add @ant-design/icons
 */
import { PoweroffOutlined } from "@ant-design/icons";

//import "antd/dist/antd.css"; //引入样式
import "antd/dist/antd.less"; //引入样式(已配置craco.config.js)

/* 
    安装AntDesign
    npm install antd --save
    yarn add antd
*/
/* 
考虑一个问题:Antd是否会将一些没有用的代码（组件或者逻辑代码）引入，造成包很大呢?
antd官网有提到: antd的JS代码默认支持基于ES modules的tree shaking，对于js部分，
直接引入import { Button }from 'antd'就会有按需加载的效果。
*/
export default class App extends PureComponent {
  render() {
    let loadings = [true];
    return (
      <>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => this.enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
      </>
    );
  }
}
