import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //useEffect函数不管是组件刚挂在还是组件更新都会执行
  useEffect(() => {
    document.title = count;
  });

  return (
    <div>
      <h2>当期计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
