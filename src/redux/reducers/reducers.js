const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case "TEST":
      return {test: "it worked!"};
    default:
      return state;
  };
};

export default rootReducer;