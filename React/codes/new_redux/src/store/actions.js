import axios from "axios";

import * as actionTypes from "./actionTypes.js";

export function addNum(num) {
  return {
    type: actionTypes.ADDNUM,
    num,
  };
}

export function subNum(num) {
  return {
    type: actionTypes.SUBNUM,
    num,
  };
}

export function multiNum(num) {
  return {
    type: actionTypes.MULTINUM,
    num,
  };
}

export function divNum(num) {
  return {
    type: actionTypes.DIVNUM,
    num,
  };
}

export function changeBanners(banners) {
  return {
    type: actionTypes.CHANGE_BANNERS,
    banners,
  };
}

export function getBanners() {
  axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    console.log(res);
  });
}
