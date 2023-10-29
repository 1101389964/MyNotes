import redux from 'redux'

const initialState = {
  couter: 0,
  banners: [],
  recommends: [],
} 

export const INCREMENT = 'INCREMENT';
export const SUBTRACT = 'SUBTRACT';
export const MULTIOLICINE = 'MULTIOLICINE';
export const DIVSION = 'DIVSION';
export const CHANGE_BANNERS = 'CHANGE_BANNERS';
export const CHANGE_RECOMMEND = 'CHANGE_RECOMMEND';

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, couter: state.couter + action.couter }
    case SUBTRACT:
      return { ...state, couter: state.couter - action.couter }
    case MULTIOLICINE:
      return { ...state, couter: state.couter * action.couter }
    case DIVSION: 
      return { ...state, couter: state.couter / action.couter }
    case CHANGE_BANNERS:
        return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
        return { ...state, recommends: action.recommends };
    default:
      return state
  }
}

export const store = redux.createStore(reducer);

