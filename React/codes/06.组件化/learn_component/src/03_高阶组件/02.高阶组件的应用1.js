import React, { PureComponent } from "react";

class Public extends PureComponent {
  render() {
    const { level, ground, country } = this.props;
    return (
      <div>
        Level:{level} Ground:{ground} Country:{country}
      </div>
    );
  }
}

/* class BeiJing extends PureComponent {
  render() {
    return <div>BeiJing</div>;
  }
}
class ShangHai extends PureComponent {
  render() {
    return <div>ShangHai</div>;
  }
} */

function higherOrderComponent(WrapComponent) {
  class HeighComponent extends PureComponent {
    render() {
      return <WrapComponent {...this.props} country={"中国"} />;
    }
  }
  return HeighComponent;
}

const HangZhou = higherOrderComponent(Public);
const BeiJing = higherOrderComponent(Public);
const ShangHai = higherOrderComponent(Public);

/* 
    每个组件都有一个共有的参数：country={'中国'} 
    但不能每一个都低效率的添加这个属性；
    可以通过高阶组件来添加这个属性
*/
export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <HangZhou level={2} ground={"杭州"} country={"中国"} />
        <BeiJing level={1} ground={"北京"} country={"中国"} />
        <ShangHai level={1} ground={"上海"} country={"中国"} /> */}
        <HangZhou level={2} ground={"杭州"} />
        <BeiJing level={1} ground={"北京"} />
        <ShangHai level={1} ground={"上海"} />
      </div>
    );
  }
}
