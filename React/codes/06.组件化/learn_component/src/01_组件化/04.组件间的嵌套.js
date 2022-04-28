import React, { Component } from "react";
// 组件的命名必须大写开头
function Header() {
  return <div>header组件</div>;
}

function Main() {
  return <div>main组件</div>;
}

function Footer() {
  return <div>footer组件</div>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
