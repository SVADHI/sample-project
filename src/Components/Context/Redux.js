import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/index";
const Redux = (props) => {
  //const [count, setcount] = useState(count);

  const { count, onIncrementData, onDecrementData } = props;
  const increment = () => {
    onIncrementData();
  };

  const decrement = () => {
    onDecrementData();
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
      <p> {count}</p>
      <button onClick={decrement}>derement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementData: () => dispatch(actions.incrementData()),
    onDecrementData: () => dispatch(actions.decrementData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
