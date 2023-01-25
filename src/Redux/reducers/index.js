import { combineReducers } from "redux";
import { viewChangeReducer, notificationReducer } from "./neuportReducers";

export const reducers = combineReducers({
  view: viewChangeReducer,
  notification: notificationReducer,
});
