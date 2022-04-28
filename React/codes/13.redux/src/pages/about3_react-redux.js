import React from "react";

// import { connect } from "../utils/connect.js";
import { connect } from "react-redux";

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

const mapStateToProps = function (state) {
  return {
    counter: state.counter,
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

export default connect(mapStateToProps, mapDispachtoProp)(About);
