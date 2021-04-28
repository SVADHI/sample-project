import React, { Component } from "react";
import { SurContext, Suricontext } from "./ComponentOne";
class ChildTwo extends Component {
  render() {
    return (
      <>
        <Suricontext.Consumer>
          {(value) => {
            return (
              <div>
                hello-{value.name} your age is =={value.age}
              </div>
            );
          }}
        </Suricontext.Consumer>
      </>
    );
  }
}

export default ChildTwo;
