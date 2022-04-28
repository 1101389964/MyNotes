import React, { Component } from "react";
import "./style.css";

export default class Solt extends Component {
  render() {
    function foo(props) {
      /*
      这个函数有点多此一举，主要是想添加key，但key属性只读不可修改，
      若要添加则需添加一个父标签包裹着，但vue里面的solt没有标签包裹着，
      所以只能父组件传递时添加key
      */
      if (props) {
        const result = [];
        props.forEach((item, index) => {
          // item.props.className = "margin"; //不能修改父组件传递下来的classname属性，该属性为只读属性
          // item.key = index; //key也是只读属性
          result[index] = item;
        });
        return result;
      }
      return null;
    }
    const solt = this.props.children; //父组件传递过来的为数组，可以直接在jsx语法上渲染出来
    return <div className="box">{foo(solt)}</div>;
  }
}
