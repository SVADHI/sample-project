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
    let test = 5;
    test = 44;
    console.log(test);

    const user = {
      name: "suri",
      age: 34,
      sayName: function () {
        console.log(`my name is ${this.name}`);

        const fullName = () => {
          console.log(
            `my name is ${this.name} and age is ${this.age}`,
            "color:grey"
          );
        };
        fullName();
      },
    };

    user.sayName();

    return (
      <div>
        <p>my Favourite color is::: {this.state.favColor}</p>
        <button onClick={this.onButtonClick}>clickme</button>
      </div>
    );
  }
}

export default getDerivedStateFromProps;
