import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT, CHANGE_BANNERS, CHANGE_RECOMMEND, FTECH_HOME_MULTIDATA } from './costants.js';

import axios from 'axios';

// 要加小括号,表示返回一个对象,不加会被当做函数体
export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incAction = () => ({
  type: INCREMENT
});

export const decAction = () => ({
  type: DECREMENT
});

//轮播图和推荐的action
export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners: banners
});

export const changeRedommendAction = recommends => ({
  type: CHANGE_RECOMMEND,
  recommends: recommends
});

// 不能再action必须返回一个对象，对于异步任务需要借助中间件
/* export const otherChangeRedommendAction = () => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    console.log('data = ', data);
    return {
      type: CHANGE_RECOMMEND,
      recommends: data.recommend.list
    };
  });
}; */

//使用redux-thunk中间件可以dispatch函数,进行异步请求。
//redux-thunk感觉不使用中间件也可以，在返回对象的前面使用axios，但是两个action都需要在前面添加axios
//redux-thunk会自动调用该函数并传递dispatch和getState，当函数需要获取store中数据是就可以使用dispatch
export const getHomeMultidataAction = (dispatch, getState) => {
  //console.log("action", dispatch);
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    // console.log("轮播图：", data.banner.list);
    // console.log("推荐：", data.recommend.list);
    // this.props.changeBanner(data.banner.list);
    // this.props.changeRedommen(data.recommend.list);
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRedommendAction(data.recommend.list));
  });
};

//redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FTECH_HOME_MULTIDATA
};
