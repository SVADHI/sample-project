const initialState = {
    count: 20,
    users:[]
  };
  
  const SagaButtonReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT_SUCCESS":
        return {count: state.count + 1 };
      case "DECREMENT_SUCCESS":
        return { count: state.count - 1 };
    case "GETALL_USERS_SUCCESS":
        return { users: action.data };
        case "GETALL_USERS_FAILED":
            return { message: action.message };
      default:
        return state;
    }
  };
  
  export default SagaButtonReducer;