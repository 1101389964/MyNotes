import React, { createContext, useContext, PureComponent } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function Cpn() {
  // 直接通过useContext获取UserContext和ThemeContext
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user, theme);
  return <div></div>;
}

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {
        name: "hello",
        height: 180,
      },
      theme: {
        color: "red",
        fontSize: "18px",
      },
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={this.state.user}>
            <Cpn></Cpn>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}
