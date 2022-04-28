import React, { PureComponent } from "react";

import store from "../store/index";
import { multiNum, divNum } from "../store/actions";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  multi(num) {
    store.dispatch(multiNum(num));
  }

  div(num) {
    store.dispatch(divNum(num));
  }

  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().num,
      });
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <div>当前数字:{this.state.counter}</div>
        <button
          onClick={() => {
            this.multi(3);
          }}
        >
          *3
        </button>
        <button
          onClick={() => {
            this.div(2);
          }}
        >
          /2
        </button>
      </div>
    );
  }
}
