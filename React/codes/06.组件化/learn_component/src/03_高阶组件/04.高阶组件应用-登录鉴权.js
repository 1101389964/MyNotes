import React, { PureComponent } from "react";

class LoginPage extends PureComponent {
  render() {
    return <div>登录界面</div>;
  }
}

class CartPage extends PureComponent {
  render() {
    return <h2>首页</h2>;
  }
}

/* 需求：当App组件里面的flag显示为true则显示首页组件，否则显示登录组件 */
function register(WrapComponent) {
  class NewCpn extends PureComponent {
    render() {
      if (this.props.flag) return <WrapComponent />;
      else return <LoginPage />;
    }
  }
  return NewCpn;
}

const NewCartPage = register(CartPage);

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  render() {
    return (
      <div>
        <NewCartPage flag={this.state.flag} />
        <button
          onClick={() => {
            this.Change();
          }}
        >
          切换
        </button>
      </div>
    );
  }
  Change() {
    this.setState({
      flag: !this.state.flag,
    });
  }
}
