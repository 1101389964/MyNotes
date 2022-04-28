import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(() => 520);
  /* 
  useState不仅可以传递一个数据还可以传递一个函数：
  来自源码：function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]; 
  */

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 2);
        }}
      >
        +2
      </button>
      {/* 
      setCount也可以传递可以传递数据或者一个函数
      函数的第一个参数是第一个参数原来的值
      type SetStateAction<S> = S | ((prevState: S) => S);
       */}
      <button onClick={addCount}>+5</button>
      <button onClick={decream}>-10</button>
    </div>
  );
  function addCount() {
    setCount(count + 5);
    setCount(count + 5);
    setCount(count + 5);
    /* 调用了5次setCount但只加了一次5，
    因为在调用setCount会做一次合并 
    类似于setState的合并 
    */
  }
  function decream() {
    setCount((prevCount) => prevCount - 10);
    setCount((prevCount) => prevCount - 10);
    setCount((prevCount) => prevCount - 10);
    /* 使用setCount传递函数的方法可以调用3次不会做合并 */
  }
}
