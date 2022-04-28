import React, { PureComponent } from "react";
import Login from "../Login";

import styled, { ThemeProvider } from "styled-components"; //导入styled-components

/*
  通过styled来使用css
  styled.div为函数，后面的模板字符串为传递的参数
  div为函数的类型，然后用一个变量接收
  在HTML中可以直接使用这个变量，会把传递的css嵌入到html中
*/

const HomeWrapper = styled.div.attrs({
  otherColor: "blue",
  Size: "15px",
})`
  font-size: 40px;
  color: red;
  .ul {
    /* 
    可以像less一样套用css语法
    这样该HomeWrapper嵌套的类名为ul的会显示该css
     */
    :hover {
      color: ${(props) => props.otherColor};
      //获取到attrs中的数据,接收格式为模板字符串的格式加一个函数
    }
    /* &表示在ul下::after */
    &::after {
      content: "aa";
    }
  }
`;

const H2Wrapper = styled.h2`
  /* 
  这个props里面的Asize为state里面传入的数据，props在styled里面具有穿透作用 
  如果还有attrs里面的数据，两个数据会拼接在一起
   */
  font-size: ${(props) => props.Asize};
  /* 获取到主题ThemeProvider里面的css样式 */
  color: ${(props) => props.theme.themeColor};
`;

export default class index extends PureComponent {
  constructor() {
    super();
    this.state = {
      Asize: "50px",
    };
  }
  render() {
    return (
      /* 定义主题样式，可以在任意子组件或节点里面使用，使用语法从props里面的theme属性里面获取themeColor */
      <ThemeProvider theme={{ themeColor: "yellow" }}>
        <HomeWrapper>
          <H2Wrapper Asize={this.state.Asize}>Home</H2Wrapper>
          <ul className="ul">
            {/* 还可以在此嵌套styled语法 */}
            <li>hhh</li>
            <li>eee</li>
            <li>aaa</li>
          </ul>

          <Login />
        </HomeWrapper>
      </ThemeProvider>
    );
  }
}
