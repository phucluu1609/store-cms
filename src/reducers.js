import { combineReducers } from "redux";
import { loadingIndicatorReducer } from "./containers/LoadingIndicator/reducer";
import { loginPageReducer } from "./containers/LoginPage/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    loginPageReducer,
    loadingIndicatorReducer,
  });

  return rootReducer;
}
