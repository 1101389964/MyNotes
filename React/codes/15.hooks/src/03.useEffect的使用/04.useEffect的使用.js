import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  /* 
    1.useEffect可以被调用多次， 
    2.每次组件更新都会执行useEffect
    3.useEffect的第二个参数，传递的是需要更新的值，
      当该值更新就会渲染useEffect，否则不会更新useEffect
    4.当第二个参数为空数组,则只在组件加载时执行该useEffect
      当第二个参数为空，则无论组件加载还是更新都会加载useEffect
  */
  useEffect(() => {
    console.log("count被更新:", count);
  }, [count]);
  useEffect(() => {
    console.log("组件挂在完成");
  }, []);
  useEffect(() => {
    console.log("组件更新完成");
  });
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
    </div>
  );
}
