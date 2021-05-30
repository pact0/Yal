import { createStore } from "redux";
import reducer from "./reducers/rootReducer";

const store = createStore(reducer);

store.subscribe(() => console.log("store:", store.getState()));

export default store;
