import React, { PureComponent } from "react";

import axios from "axios";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: [],
    };
  }
  componentDidMount() {
    //请求拦截
    axios.interceptors.request.use(
      //第一个回调函数请求成功时执行
      (config) => {
        /* 
        1.发送网络请求时,在界面的中间位置显示Loading的组件(正在加载组件)
        2.某一些请求要求用户必须携带token,如果没有携带，那么直接跳转到登录页面，登录鉴权
        3.params/data序列化的操作
        */
        console.log("request请求拦截");
        return config;
      },
      //第二个回调函数为请求失败时执行
      (err) => {}
    );

    //响应拦截
    axios.interceptors.response.use(
      (res) => {
        console.log("响应拦截");
        return res.data;
      },
      (err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              console.log("请求错误");
              break;
            case 401:
              console.log("未授权访问");
              break;
            default:
              console.log("其他错误信息");
          }
          return err;
        }
      }
    );

    axios
      .get("http://httpbin.org/get", {
        params: {
          name: "why",
          age: 18,
        },
      })
      .then((res) => {
        console.log("axios.get", res);
      })
      .catch((res) => {
        console.error(res);
      });
  }
  render() {
    return <div>666</div>;
  }
}
