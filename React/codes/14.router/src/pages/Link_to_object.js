import React, { PureComponent } from "react";

export default class Link_to_object extends PureComponent {
  render() {
    const location = this.props.location;
    console.log(location);
    return (
      <div>
        <h2>Link_to_object</h2>
      </div>
    );
  }
}
