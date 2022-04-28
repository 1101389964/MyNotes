import React, { useEffect, useState } from "react";

function Home() {
  useLoggingLife("Home");
  return <div>Home</div>;
}

function Login() {
  useLoggingLife("Login");
  return <div>Login</div>;
}

export default function APP() {
  const [flagOne, setFlagOne] = useState(true);
  const [flagTwo, setFlagTwo] = useState(true);
  return (
    <div>
      {flagOne && <Home />}
      {flagTwo && <Login />}
      <button
        onClick={() => {
          setFlagOne(!flagOne);
        }}
      >
        关闭/开启Home组件
      </button>
      <button
        onClick={() => {
          setFlagTwo(!flagTwo);
        }}
      >
        关闭/开启Login组件
      </button>
    </div>
  );
}

/* 
自定义Hook(就是把相同的hook语法抽取到同一个函数中)，
在非jsx语法的函数中使用hook语法，需要在函数名前面加use，否则会报错
注意：自定义hook只能在主函数组件中自己调用，不可以通过点击，触碰等方式调用
*/ function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`);
    return () => {
      console.log(`${name}组件被销毁`);
    };
  }, []);
}
