import * as actionTypes from "./costants.js";

const defaultState = {
  counter: 0,
  banners: [],
  recommends: [],
};

/* 
  函数命名reducer源于数组方法中的reduce里面得到reducer回调函数 
  state的默认值源于reduce的initialValue,state每次变化然后层叠掉上一次的
  和reduce方法非常类似
*/
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

/* 
  拆解reduc；
  为什么要拆解reduce：
  当项目大了之后，需要的数据是非常多的
  switch可能达到上百行，
  拆解不同类型的action是非常有来提高代码的可读性，和后期的维护；
*/

/* const defaultState = {
  counterInfo: { counter: 0 },
  homeInfo: {
    banners: [],
    recommends: [],
  },
};

function counterReducer(state = defaultState.counterInfo, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

function homeReducer(state = defaultState.homeInfo, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

function reducer(state = defaultState, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.counterReducer, action),
  };
}
 */
export default reducer;
