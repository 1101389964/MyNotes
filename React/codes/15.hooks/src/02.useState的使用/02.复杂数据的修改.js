import React, { useState } from "react";

export default function App() {
  const [hobby, setHobby] = useState(["游戏", "电影"]);

  return (
    <div>
      <h2>
        爱好：
        {hobby.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </h2>
      {/* 通过setHobby方法浅拷贝添加数组 */}
      <button onClick={() => setHobby([...hobby, "前端"])}>添加爱好1</button>
      {/* 
        定义函数，通过push方法添加给hobby数组
        该方法并没有添加上数组，因为react会自动对比数据有没有变化然后才会添加数据；
        浅拷贝数据的指针就已经不一样了，所以可以更新出来，而push数组指针还是原来的
       */}
      <button
        onClick={() => {
          hobby.push("后端");
          return setHobby(hobby);
        }}
      >
        添加爱好2
      </button>
    </div>
  );
}
