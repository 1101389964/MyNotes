import React, { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useLocalStorage("name");
  return (
    <div>
      <h2>CustomDataStoreHook:{name}</h2>
      <button
        onClick={() => {
          setName("hh");
        }}
      >
        设置name
      </button>
    </div>
  );
}

function useLocalStorage(key) {
  const [state, setState] = useState(() => {
    const state = window.localStorage.getItem(key); //读取
    console.log(state);
    return state;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state); //增加了一个数据项
  }, [state]);

  return [state, setState];
}
