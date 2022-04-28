import React, { memo } from "react";
// import { connect } from "react-redux";

import connect from "../utils/connect";
import { addNum, subNum } from "../store/actions";

const App = memo(function App(props) {
  const add = 5;
  const sub = 2;

  return (
    <div>
      <div>当前数字:{props.num}</div>
      <button
        onClick={() => {
          props.Add(add);
        }}
      >
        +{add}
      </button>
      <button
        onClick={() => {
          props.Sub(sub);
        }}
      >
        -{sub}
      </button>
    </div>
  );
});

const dispatchs = (dispatch) => {
  return {
    Add: (num) => dispatch(addNum(num)),
    Sub: (num) => dispatch(subNum(num)),
  };
};

const stateData = (getState) => {
  return {
    num: getState.num,
  };
};

export default connect(stateData, dispatchs)(App);
