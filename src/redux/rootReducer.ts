import { combineReducers } from "redux";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
  page: pageReducer
});

export default rootReducer;
