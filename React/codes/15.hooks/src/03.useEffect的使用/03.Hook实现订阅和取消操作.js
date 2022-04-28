import React, { useEffect, useState } from "react";

function Cpm() {
  const [count, setCount] = useState(0);

  /* 
    useEffect有两个参数： 
        第一个是传递的函数：该函数还返回一个函数，在返回的函数中可以取消事件的订阅
        第二个是数组：
  */
  useEffect(() => {
    console.log("订阅了一些事件");
    return () => {
      console.log("取消订阅事件");
    };
  }, []);

  return (
    <div>
      <h2>当期计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {flag && <Cpm></Cpm>}
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        卸载组件
      </button>
    </div>
  );
}
