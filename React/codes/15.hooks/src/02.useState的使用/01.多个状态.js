import React, { useState } from "react";

export default function App() {
  /* 快捷创建 打useState，tab键切换位置 */
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);
  const [num] = useState(1); //还可以传递一个值
  /* 多个数据就使用多个useState */
  const [hobby, setHobby] = useState(["游戏", "电影"]);
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>当前年龄:{age}</h2>
      <h2>num:{num}</h2>
      <h2>
        爱好：
        {hobby.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
