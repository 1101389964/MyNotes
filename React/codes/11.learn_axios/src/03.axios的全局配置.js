import React, { PureComponent } from "react";

import axios from "axios";

/* 
    每次请求的时候需要大量配置信息，可以配置一个全局的axios默认配置：

*/
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 5000; // 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.headers.common["token"] = "hhhhh"; //common表示无论什么请求都会在header中配置token信息
//axios.defaults.headers.post["token"] = "hhhhh"; //post表示只在post请求中配置header信息，同理其他的请求也一样

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: [],
    };
  }
  componentDidMount() {
    /* 先把两个请求定义好 */
    const request1 = axios({
      url: "/get", //会默认在url前面添加baseURL
      params: { name: "why", age: 18 },
    });
    const request2 = axios({
      url: "/post",
      data: { name: "me", age: 20 },
      method: "post",
    });

    /* axios接收的是一个数组 */
    axios
      .all([request1, request2])
      .then((res) => {
        console.log("axios.all", res); //接收到两个数组
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>dd</div>;
  }
}
