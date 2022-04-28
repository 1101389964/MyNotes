import React, { PureComponent } from "react";

import { addAction, incAction } from "../store/actionCreators";
import { connect } from "../utils/connect.js";

class Home extends PureComponent {
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
  };
};

export default connect(mapStateToProps, mapDispachtoProp)(Home);
