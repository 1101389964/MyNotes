import React, { PureComponent } from "react";

import {
  addAction,
  incAction,
  getHomeMultidataAction,
} from "../store/actionCreators";

import { connect } from "react-redux";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数{this.props.counter}</h2>
        <button
          onClick={() => {
            this.props.increament();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.props.addNumber(5);
          }}
        >
          +{5}
        </button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    counter: state.counter,
  };
};

const mapDispachtoProp = (dispatch) => {
  return {
    increament: function () {
      dispatch(incAction());
    },
    addNumber: function (num) {
      dispatch(addAction(num));
    },
    getHomeMultidata() {
      /* getHomeMultidataAction不需要调用，中间件将自动调用，如果手动调用返回的不就是对象，进行dispatch会报错， */
      dispatch(getHomeMultidataAction);
    },
  };
};

export default connect(mapStateToProps, mapDispachtoProp)(Home);
