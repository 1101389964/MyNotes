import React from "react";

// import { connect } from "../utils/connect.js";
import { connect } from "react-redux";

import { subAction, decAction } from "../store/actionCreators";

function About(props) {
  //console.log(props);
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
      <h2>Banner</h2>
      <ul>
        {props.banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <h2>Rcommond</h2>
      <ul>
        {props.recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
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
