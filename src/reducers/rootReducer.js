import { combineReducers } from "redux";
import pagesReducer from "./pagesReducer";
import settingsReducer from "./settingsReducer";

const reducer = combineReducers({
  pages: pagesReducer,
  settingsPages: settingsReducer,
});

export default reducer;
