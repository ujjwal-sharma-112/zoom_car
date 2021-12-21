import { combineReducers } from "redux";
import dataReducer from "./data/data-reducer";

const rootReducer = combineReducers({
  // reducers go here
  data: dataReducer,
});

export default rootReducer;
