import { combineReducers } from "redux";
import pagesReducer from "./pagesReducer";

const reducer = combineReducers({ pages: pagesReducer });

export default reducer;
