import React, { Component } from "react";
import ChildTwo from "./ChildTwo";
import ChildTwoFunComponent from "./ChildTwoFunComponent";

class ChildOne extends Component {
  render() {
    return (
      <div>
        <ChildTwo />
        <ChildTwoFunComponent />
      </div>
    );
  }
}

export default ChildOne;
