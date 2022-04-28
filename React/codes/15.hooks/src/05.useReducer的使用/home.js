import React, { useReducer } from "react";

/* useReducer只能共享这个函数不能共享数据 */
function reducer(state, action) {
  switch (action.type) {
    case "increament":
      //return的数据是根据useReducer传递的第二个参数来定的，因为useReducer传递的是一个对象，所以返回的是一个对象
      return { ...state, counter: state.counter + 1 };
    case "decreament":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default function App() {
  /* 
    useReducer有三个参数：
      第一个：自定义的reducer函数
      第二个传递的数据
  */
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h2>当前计数:{state.counter}</h2>
      {/* dispatch传递的是一个action */}
      <button onClick={() => dispatch({ type: "increament" })}>+1</button>
      <button onClick={() => dispatch({ type: "decreament" })}>-1</button>
    </div>
  );
}
