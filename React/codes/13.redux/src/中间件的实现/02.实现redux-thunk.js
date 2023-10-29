import axios from 'axios';
import { store, INCREMENT, SUBTRACT, MULTIOLICINE, DIVSION, CHANGE_BANNERS, CHANGE_RECOMMEND } from "./store.js"

function thunkMiddleware(store) {
  const dispatch = store.dispatch;
  store.dispatch = function(dispatchFun) {
    if (typeof dispatchFun === 'function') {
      dispatchFun(dispatch, store.getState)
      console.log('已执行');
    }else if(typeof dispatchFun === 'object' && dispatchFun instanceof Object) {
      dispatch(dispatchFun);
    }
  }
}

export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    // console.log("轮播图：", data.banner.list);
    // console.log("推荐：", data.recommend.list);
    dispatch({
      type: CHANGE_BANNERS,
      banners: data.banner.list
    })
    dispatch({
      type: CHANGE_RECOMMEND,
      recommends: data.recommend.list
    });
    console.log(getState());
  });
};

thunkMiddleware(store)
store.dispatch({type: INCREMENT, couter: 1})
store.dispatch(getHomeMultidataAction)