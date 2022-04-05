import React from "react";

export default class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      message: "哈喽 React",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
