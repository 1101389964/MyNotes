import {
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FTECH_HOME_MULTIDATA,
} from "./costants.js";

import axios from "axios";

//轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners: banners,
});

export const changeRedommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends: recommends,
});

//redux-thunk中定义的函数
export const getHomeMultidataAction = (dispatch, getState) => {
  //console.log("action", dispatch);
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
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
  type: FTECH_HOME_MULTIDATA,
};
