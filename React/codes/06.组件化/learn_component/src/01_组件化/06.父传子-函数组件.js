import React, { Component } from "react";

function Son(props) {
  console.log(props);
  const { name, year, height } = props;
  return (
    <div>
      <h2>
        name:{name} year:{year} height:{height}
      </h2>
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Son name="Ao" year="21" height="180" />
        <Son name="noName" year="0" height="0" />
      </div>
    );
  }
}
