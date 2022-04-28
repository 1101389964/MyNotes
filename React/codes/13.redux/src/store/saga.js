import { takeEvery, put, all } from "redux-saga/effects";

import { FTECH_HOME_MULTIDATA } from "./costants.js";

import { changeBannersAction, changeRedommendAction } from "./actionCreators";

import axios from "axios";

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  //console.log(res);
  /* 
  上面内部会做下面的操作,可以直接打印res
  fetchHomeMultidata.next().value.then(res => {
          console.log(res);
          test2.next(res);//会把resolve里面的结果赋值给yeild之后的result
      })
  */
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;
  /* yield put(changeBannersAction(banners));
  yield put(changeBannersAction(recommends)); */
  //等价于上面的写法
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRedommendAction(recommends)),
  ]);
  /* 该函数内部执行的是.next()的循环,只要done不为true则继续执行 */
}

function* mySage() {
  /* 
  第一个参数表示需要拦截的类型,第二个为生成器函数 
  一旦拦截到对应的action就会执行对应的生成器函数
  */
  yield takeEvery(FTECH_HOME_MULTIDATA, fetchHomeMultidata);
  //yield takeLatest(FTECH_HOME_MULTIDATA, fetchHomeMultidata);
  /* 
  takeEvery,takeLatest的区别：
  takeLatest只监听最后一个对应的action
  takeEvery：每一个都会执行
  */
}

//导入生成器函数
export default mySage;
