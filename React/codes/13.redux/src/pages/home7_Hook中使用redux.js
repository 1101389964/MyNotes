import React, { memo, useEffect, useState } from "react";

import {
  addAction,
  incAction,
  fetchHomeMultidataAction,
} from "../store/actionCreators";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

export default memo(function Home(props) {
  const { counter } = useSelector(
    //下面函数的返回值会作为useSelector的返回值
    (state) => ({
      counter: state.counter,
    }),
    shallowEqual //传入shallowEqual useSelector
  ); //当没有第二个参数时，useSelector默认的是===比较，而不是浅层比较，由于函数每次都会重新调用，所以返回的对象肯定不是同一个对象，组件每次都会被更新
  /* 
    如何从hook中获取reducer中的数据，可以利用useSelector
    useSelector来自react-redux中,该函数返回有两个参数，
    第一个参数为回调函数，该回调函数有一个返回值，该返回值会作为useSelector的返回值
  */

  const dispatch = useDispatch(); //从Hook里面获取dispatch,useDispatch来自于react-redux

  //发送网络请求
  useEffect(() => {
    dispatch(fetchHomeMultidataAction);
  }, [dispatch]);

  function addNumber(num) {
    dispatch(addAction(num));
  }

  function increament() {
    dispatch(incAction());
  }

  return (
    <div>
      <h2>Home</h2>
      <h2>当前计数{counter}</h2>
      <button
        onClick={() => {
          increament();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          addNumber(5);
        }}
      >
        +{5}
      </button>
    </div>
  );
});
