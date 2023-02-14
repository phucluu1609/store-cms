import { combineReducers } from "redux";
import { loginPageReducer } from "./containers/LoginPage/reducer";
import { loadingIndicatorReducer } from "./containers/LoadingIndicator/reducer";
import { notificationsReducer } from "./containers/Notifications/reducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    loginPageReducer,
    loadingIndicatorReducer,
    notificationsReducer,
  });

  return rootReducer;
}
