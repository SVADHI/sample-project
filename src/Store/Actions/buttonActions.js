const INCREMENT_BUTTON = "INCREMENT_BUTTON";
const DECREMENT_BUTTON = "DECREMENT_BUTTON";

const initialState = {
  count: 11,
};

export const incrementCount = (res) => {
  return {
    type: INCREMENT_BUTTON,
    data: res,
  };
};

export const decrementCount = (res) => {
  return {
    type: DECREMENT_BUTTON,
    data: res,
  };
};

export const incrementButton = () => {
  return (dispatch) => {
    dispatch(incrementCount());
  };
};

export const decrementButon = () => {
  return (dispatch) => {
    dispatch(decrementCount());
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BUTTON:
      return { count: state.count + 1 };
    case DECREMENT_BUTTON:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
