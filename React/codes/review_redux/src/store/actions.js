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

export function changeBanners(banner) {
  return {
    type: actionTypes.CHANGE_BANNERS,
    banners,
  };
}
