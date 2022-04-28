import * as actionTypes from "./actionTypes.js";

const stateData = {
  num: 0,
  banners: [],
};

export function reducer(state = stateData, actions) {
  switch (actions.type) {
    case actionTypes.ADDNUM:
      return { ...state, num: state.num + actions.num };
    case actionTypes.SUBNUM:
      return { ...state, num: state.num - actions.num };
    case actionTypes.MULTINUM:
      return { ...state, num: state.num * actions.num };
    case actionTypes.DIVNUM:
      return { ...state, num: state.num / actions.num };
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: actions.banners };
    default:
      return { ...state };
  }
}
