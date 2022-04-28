import React, { PureComponent } from "react";

import styled from "styled-components"; //导入styled-components

const FaterBtn = styled.button`
  color: red;
  width: 100px;
  height: 50px;
`;

/* 直接在styled里面传递FaterBtn可以继承FaterSon的css样式 */
const SonBtn = styled(FaterBtn)`
  background-color: green;
`;

export default class index extends PureComponent {
  render() {
    return (
      <div>
        Login
        <FaterBtn>父按钮</FaterBtn>
        <SonBtn>子按钮</SonBtn>
      </div>
    );
  }
}
