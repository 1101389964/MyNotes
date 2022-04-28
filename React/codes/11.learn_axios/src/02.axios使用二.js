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
    //使用axios中的方法发送网路请求
    axios
      .get("http://toilethr.cn.utools.club/training/0/20")
      .then((res) => {
        console.log("axios.get", res);
        this.setState({
          message: res.data.trainingDTOList,
        });
      })
      .catch((res) => {
        console.error(res);
      });

    /* axios
      .post("http://httpbin.org/post", {
        name: "me",
        age: 20,
      })
      .then((res) => {
        console.log("axios.post", res);
      })
      .catch((res) => {
        console.error(res);
      }); */

    /* 先把两个请求定义好 */
    /* const request1 = axios({
      url: "http://httpbin.org/get",
      params: { name: "why", age: 18 },
    });
    const request2 = axios({
      url: "http://httpbin.org/post",
      data: { name: "me", age: 20 },
      method: "post",
    }); */

    /* axios接收的是一个数组 */
    /* axios
      .all([request1, request2])
      .then((res) => {
        console.log("axios.all", res); //接收到两个数组
      })
      .catch((err) => {
        console.log(err);
      }); */
  }
  render() {
    return (
      <div>
        {this.state.message.map((item) => (
          <span key={item.id}>{item.staffName} </span>
        ))}
      </div>
    );
  }
}
