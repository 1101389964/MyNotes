import React, { useLayoutEffect, useState } from "react";

export default function App() {
  const [num, setNum] = useState(10);

  useLayoutEffect(() => {
    if (num === 0) {
      setNum(Math.random() + 2);
      //useLayoutEffect是先执行jsx然后再执行useLayoutEffect，最后更新DOM
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
