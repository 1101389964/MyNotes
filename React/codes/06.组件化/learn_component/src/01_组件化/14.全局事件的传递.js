import React, { PureComponent } from "react";
// import { EventEmitter } from "events";
import EventEmitter from "./14.1.手写events事件总线.js";

//事件总线
const eventBus = new EventEmitter();

class GroundSon extends PureComponent {
  render() {
    //console.log("GroundSon被调用");
    return <div>GroundSon</div>;
  }
  //添加事件监听
  componentDidMount() {
    /* 
    注意：事件发送前，事件监听的组件必须存在才能监听到，
          如果发送后监听的组件才生成是监听不到生成前发送的消息的
    */
    eventBus.addListener("sayHello", this.handleLisenter);
  }
  //取消事件监听
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleLisenter);
  }
  handleLisenter(num, message) {
    console.log(num, message); //123 'Hello Home'
  }
}

class Son extends PureComponent {
  render() {
    //console.log("Son被调用");
    return (
      <div>
        Son
        <button onClick={(e) => this.emmitEvent()}>点击1</button>
        <button onClick={(e) => this.emmitEventOther()}>点击2</button>
      </div>
    );
  }
  /* 发送事件 */
  emmitEvent() {
    const result = eventBus.emit("sayHello", 123, "Hello Home");
    //这里的sayHello与上面的监听事件sayHello相对应，下面的代码不会通信
    /* eventBus.emit("Hello", 666, "你好"); */
    console.log(result); //打印布尔类型返回值
  }
  emmitEventOther() {
    //当发送第二条类型相同的消息时，会代替掉上一次发送的消息
    eventBus.emit("哈哈哈哈", { name: "tqa" });
  }
}

export default class App extends PureComponent {
  render() {
    //console.log("App被调用");
    return (
      <div>
        <GroundSon />
        <Son />
      </div>
    );
  }
}
