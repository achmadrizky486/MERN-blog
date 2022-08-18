import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  dataBlog: [], //state dari home
  name: "adsadada",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.payload,
    };
  }
  return state;
};

const store = configureStore({ reducer });

export default store;
