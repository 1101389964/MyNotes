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
    //发送网路请求，axios()型
    axios({
      url: "http://httpbin.org/get", //get请求
      //get请求传输的数据为params
      params: {
        name: "why",
        age: 18,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
    // then表示请求成功
    // catch表示请求失败

    // axios({
    //   url: "http://httpbin.org/post",
    //   //post传输的数据为data
    //   data: {
    //     name: "me",
    //     age: 20,
    //   },
    //   method: "post",
    //   /*
    //     上面get请求没有method因为method默认为get请求
    //     其他请求需要添加对应的请求是什么
    //   */
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((res) => {
    //     console.error(res);
    //   });

    //调用型

    axios
      .get("http://httpbin.org/get", {
        params: {
          name: "tqa",
          year: 22,
        },
      })
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );

    axios
      .post("http://httpbin.org/post", {
        name: "tqa",
        age: 20,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return <div>dd</div>;
  }
}
