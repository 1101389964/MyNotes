import React, { createContext, useContext } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function Cpn() {
  // 直接通过useContext获取UserContext和ThemeContext
  /* const user = useContext(UserContext);
  const theme = useContext(ThemeContext); */
  //每次使用context都需要导入，如果多个组件都需要使用context，那么都需要导入，显然效率很低，可以通过自定义hook封装调用
  const [user, theme] = useUserContext();
  console.log(user, theme);
  return <div></div>;
}

function useUserContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return [user, theme];
}

export default function App() {
  return (
    <UserContext.Provider value={{ name: "hello", height: 180 }}>
      <ThemeContext.Provider
        value={{
          color: "red",
          fontSize: "18px",
        }}
      >
        <Cpn></Cpn>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
