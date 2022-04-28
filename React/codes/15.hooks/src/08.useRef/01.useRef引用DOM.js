import React, { useRef } from "react";

export default function App() {
  const titleRef = useRef();
  const inputRef = useRef();

  function changeDOM() {
    console.log("inputRef", inputRef.current.value);
    console.log("titleRef", titleRef.current.outerText);
    titleRef.current.innerHTML = inputRef.current.value;
    inputRef.current.focus(); //可以获取inputRef的焦点
  }

  return (
    <div>
      <h2 ref={titleRef}>useRef</h2>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          changeDOM();
        }}
      >
        修改标题
      </button>
    </div>
  );
}
