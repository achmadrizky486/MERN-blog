const initialState = {
  name: "HAI",
  umur: "22",
};

const globalReducer = (state = initialState, action) => {
  //initialState adalah default value dari state
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "APEM",
    };
  }
  if (action.type === "UPDATE_UMUR") {
    return {
      ...state,
      umur: "90",
    };
  }
  return state;
};

export default globalReducer;
