import React, { useMemo, useState } from "react";

function calcNumber(count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += i;
  }
  return total;
}

export default function App() {
  const [count, setCount] = useState(10);
  const [flag, setFlag] = useState(true);

  //利用useMemo当count不发生变化的时候就不会执行calcNumber函数，useMemo返回的是函数执行的结果(也可以返回函数)
  //相比useCallback，useMemo是执行函数，而useCallback是定义函数
  const total = useMemo(() => calcNumber(count), [count]);

  return (
    <div>
      <h2>计算累加数字和{total}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        切换flag
      </button>
    </div>
  );
}
