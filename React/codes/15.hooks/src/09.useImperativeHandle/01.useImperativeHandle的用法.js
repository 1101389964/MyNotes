import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Cpn = forwardRef((props, ref) => {
  const inputRef = useRef();

  /* 
  正常使用forwardRef时是把整个函数组件对象都返回给父组件了，
  那么父组件就可以对子组件做任何操作，而使用useImperativeHandle就可以解决这一问题
  useImperativeHandle获取到ref然后返回一个对象给ref，父组件使用该ref只能使用这个对象的ref
  */
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text"></input>;
});

export default function App() {
  const inputRef = useRef();

  return (
    <div>
      <Cpn ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef);
          return inputRef.current.focus();
        }}
      >
        点击子使组件获得焦距
      </button>
    </div>
  );
}
