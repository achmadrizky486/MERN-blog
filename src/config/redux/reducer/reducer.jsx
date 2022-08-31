import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./HomeReducer";
import globalReducer from "./globalReducer";

const reducer = combineReducers({ homeReducer, globalReducer });

export default reducer;
