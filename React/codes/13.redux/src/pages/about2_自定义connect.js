import React from "react";

import { connect } from "../utils/connect.js";
import { subAction, decAction } from "../store/actionCreators";

function About(props) {
  return (
    <div>
      <hr />
      <h2>About</h2>
      <h2>当前计数{props.counter}</h2>
      <button
        onClick={() => {
          props.decreament();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          props.subNumber(5);
        }}
      >
        -{5}
      </button>
    </div>
  );
}

const mapStateToProps = function (getState) {
  return {
    counter: getState.counter,
  };
};

const mapDispachtoProp = (dispatch) => {
  return {
    decreament: function () {
      dispatch(decAction());
    },
    subNumber: function (num) {
      dispatch(subAction(num));
    },
  };
};

/* connect是一个高阶函数，返回一个函数，返回的函数接收一个组件 */
export default connect(mapStateToProps, mapDispachtoProp)(About);
