import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const [num, setNum] = useState(0)

  const numRef = useRef(num)
  // console.log(numRef);
  // useRef返回一个ref对象，返回的ref对象在整个生命周期中保持不变，并不随num的改变而改变

  useEffect(() => {
    console.log('执行useEffect', num)
    console.log(numRef)
    numRef.current = num
  }, [num])
  // useEffect是在组件更新之后执行useEffect，然后修改numRef，当numRef修改完成之后不会更新dom

  return (
    <div>
      <h2> num上一次的值： {numRef.current} </h2> 
      <h2> num当前的值: {num} </h2>
      <button
        onClick={() => {
          setNum(num + 10)
        }}
      >
        num + 10
      </button>
    </div>
  )
}
