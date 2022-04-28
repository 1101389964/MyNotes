import React, { useCallback, useState, memo } from "react";

/* mome类似与类组件里面的PureComponent，在更新组件前会进行浅层比较 */
const HYButton = memo((props) => {
  //注意！这个memo得写在函数组件外面才有效
  console.log(props.title + "被渲染");
  return <button onClick={props.increament}>+1</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  function increament1() {
    console.log("执行increament1函数");
    setCount(count + 1);
  }

  /*
  useCallback什么时候使用：将一个组件中的函数传递给子元素进行回调的时候，使用useCallback对函数进行处理
  为什么了？
  HYButton子组件使用了memo，会对传递的参数进行浅层比较，
  而直接定义函数函数在每次重新加载组件时与原来是不同的，会导致子组件也重新加载
  而使用了useCallback，及时组件重新加载了，当useCallback条件不变函数也不会重新加载，那么子组件也不会因此改变
  只有当条件改变才会重新加载函数
  */
  const increament2 = useCallback(() => {
    console.log("执行increament2函数");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>useCallback:{count}</h2>
      <HYButton increament={increament1} title={"btn1"}></HYButton>
      <HYButton increament={increament2} title={"btn2"}></HYButton>
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
