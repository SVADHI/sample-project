import * as actionTypes from "./actionTypes";

const incrementByOne = (res) => {
  return {
    type: actionTypes.INCREMENT_COUNT,
    count: res,
  };
};

const decrementByone = (res) => {
  return {
    type: actionTypes.DECREMENT_COUNT,
    count: res,
  };
};

export const incrementData = () => {
  return (dispatch) => {
    dispatch(incrementByOne());
  };
};

export const decrementData = () => {
  return (dispatch) => {
    dispatch(decrementByone());
  };
};
