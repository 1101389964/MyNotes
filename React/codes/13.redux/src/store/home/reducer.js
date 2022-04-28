import * as actionTypes from "./costants.js";

const homeInfo = {
  banners: [],
  recommends: [],
};

function homeReducer(state = homeInfo, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
