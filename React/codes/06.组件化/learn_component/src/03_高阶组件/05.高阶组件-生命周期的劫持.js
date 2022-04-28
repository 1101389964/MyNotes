import React, { PureComponent } from "react";

//测试Home组件加载消耗的时间
function computingTime(WrapComponent) {
  class NewCpn extends PureComponent {
    beginTime = 0;
    endTime = 0;

    //即将渲染前获取一个时间
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    render() {
      return <WrapComponent />;
    }

    //渲染完成获取后获取一个时间
    componentDidMount() {
      this.endTime = Date.now();
      console.log(
        `${WrapComponent.name}组件加载时间为:
        ${this.endTime - this.beginTime}`
      );
    }
  }
  return NewCpn;
}

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

class About extends PureComponent {
  render() {
    return <div>About</div>;
  }
}

const NewHome = computingTime(Home);
const NewAbout = computingTime(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <NewHome />
        <NewAbout />
      </div>
    );
  }
}
