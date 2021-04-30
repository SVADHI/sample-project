import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  count: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNT:
      return { count: state.count + 1 };
    case actionTypes.DECREMENT_COUNT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
