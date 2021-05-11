import React, { Component } from "react";

class getDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favColor: "red",
    };
  }

  /*  static getDerivedStateFromProps = (props, state) => {
    return { favColor: props.favouriteColor };
  }; */

  onButtonClick = () => {
    this.setState({ favColor: "blue" });
  };

  render() {
    return (
      <div>
        <p>my Favourite color is::: {this.state.favColor}</p>
        <button onClick={this.onButtonClick}>clickme</button>
      </div>
    );
  }
}

export default getDerivedStateFromProps;
