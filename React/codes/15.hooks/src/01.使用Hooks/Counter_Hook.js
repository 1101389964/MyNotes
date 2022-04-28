import React, { useState } from "react";

/* rfc快捷创建函数组件 */
export default function Counter_Hook() {
  /* 
        useState
        > 本身是一个函数，来自react包
        > 1.参数：是给创建出的第一个状态一个默认值
        > 2.返回值为数组：
            元素1：当前state的值
            元素2：设置新值时使用的函数
    */
  //   const arr = useState(0);
  //   const state = arr[0];
  //   const setState = arr[1];
  //等价于上面的操作
  const [state, setState] = useState(0);

  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
    </div>
  );
}
