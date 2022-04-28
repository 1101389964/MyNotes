import React, { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increament1() {
    console.log("执行increament1函数");
    setCount(count + 1);
  }

  //这样使用useCallback还是会执行后面的函数，没有起到性能优化
  const increament2 = useCallback(() => {
    console.log("执行increament2函数");
    console.log("count:", count);
    setCount(count + 1);
  }, [count]);
  /* 
    useCallback会返回一个memoized(有记忆的值)，在依赖不变的情况下，多次定义返回的值相同，也就是上一次返回的值
    当第二个参数为空，每次执行increament2，由于依赖没有改变，所以每次执行useCallback返回的函数都是上一个函数，
    而返回的函数的count的值是引用上一层作用域的count，不管count如何改变，该函数都是使用第一次使用的count，
    所以每次执行之后count值为1，下一次执行前又会变成0；
  */

  return (
    <div>
      <h2>useCallback:{count}</h2>
      <button
        onClick={() => {
          increament1();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          increament2();
        }}
      >
        +1
      </button>
    </div>
  );
}
