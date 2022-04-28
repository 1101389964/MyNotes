import React, { useEffect, useState } from "react";

export default function App() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    if (num === 0) {
      setNum(Math.random() + 2);
      //useEffect是等待DOM加载完成之后才渲染useEffect，然后更新DOM,所以DOM显示的随机数应该是有延迟的，只是非常快
    }
  }, [num]);

  return (
    <div>
      <h2>当前计数：{num}</h2>
      <button
        onClick={() => {
          setNum(0);
        }}
      >
        更改num
      </button>
    </div>
  );
}
