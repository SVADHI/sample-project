import React, { Component } from "react";

import ChildOne from "./ChildOne";
import { Provider } from "./SuriContext1";

export const Suricontext = React.createContext();

class ComponentOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "suri",
      age: 35,
    };
  }

  render() {
    return (
      <div>
        <p>This is component one</p>
        <Suricontext.Provider value={this.state}>
          <ChildOne />
        </Suricontext.Provider>
      </div>
    );
  }
}

export default ComponentOne;
