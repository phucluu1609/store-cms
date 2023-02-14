import { all } from "redux-saga/effects";
import loginPageSaga from "./containers/LoginPage/saga";

function* rootSaga() {
  yield all([loginPageSaga()]);
}

export default rootSaga;
