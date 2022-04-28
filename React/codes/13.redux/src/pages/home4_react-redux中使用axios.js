import React, { PureComponent } from "react";
// http://123.207.32.32:8000/home/multidata
import {
  addAction,
  incAction,
  changeBannersAction,
  changeRedommendAction,
} from "../store/actionCreators";

// import { connect } from "../utils/connect.js";
import { connect } from "react-redux";

import axios from "axios";

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      const data = res.data.data;
      /* console.log("轮播图：", data.banner.list);
      console.log("推荐：", data.recommend.list); */
      this.props.changeBanner(data.banner.list);
      this.props.changeRedommen(data.recommend.list);
    });
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
    changeBanner: (banner) => {
      dispatch(changeBannersAction(banner));
    },
    changeRedommen: (recommend) => {
      dispatch(changeRedommendAction(recommend));
    },
  };
};

export default connect(mapStateToProps, mapDispachtoProp)(Home);
