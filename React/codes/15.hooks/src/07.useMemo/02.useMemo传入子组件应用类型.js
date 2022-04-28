import React, { memo, useMemo, useState } from "react";

const HYInfo = memo((props) => {
  console.log("HYInfo子组件被渲染");
  return (
    <h2>
      名字：{props.info.name} 年龄{props.info.age}
    </h2>
  );
});

export default function App() {
  const [flag, setFlag] = useState(true);

  console.log("父组件被渲染");
  //const info = { name: "澳子哥", age: 20 };//每次重新加载函数info对象就会被重新生成，成为一个新的对象，子组件会被重新渲染

  //使用useMemo可以解决该问题
  const Info = useMemo(() => {
    return { name: "澳子哥", age: 20 };
  }, []);

  return (
    <div>
      <HYInfo info={Info}></HYInfo>
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
