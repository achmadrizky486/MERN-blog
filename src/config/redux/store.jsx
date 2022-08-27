import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  dataBlog: [], //state dari home
  name: "HAI",
  umur: "22",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.payload,
    };
  }
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

const store = configureStore({ reducer });

export default store;
