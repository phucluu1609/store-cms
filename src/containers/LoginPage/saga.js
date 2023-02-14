import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  loadError,
  loadRequesting,
  loadSuccess,
} from "../LoadingIndicator/actions";
import { invalidLogin, receiveApiLogin } from "./actions";
import { GET_API_LOGIN } from "./constants";

const qs = require("qs");

async function fetchData(config) {
  let res = await axios(config);
  return res;
}

function* callApiLogin(infoUser) {
  try {
    const url = ``;
    const data = qs.stringify({
      username: `${infoUser.payload.username}`,
      password: `${infoUser.payload.password}`,
      grant_type: "password",
    });
    const config = {
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    yield put(loadRequesting());
    const response = yield call(fetchData, config);
    if (response.status === 200) {
      yield put(
        receiveApiLogin({
          ...response.data,
          username: infoUser.payload.username,
        })
      );
      yield put(loadSuccess());
    } else {
      yield put(loadError());
    }
  } catch (error) {
    yield put(invalidLogin());
  }
}

export default function* loginPageSaga() {
  yield takeLatest(GET_API_LOGIN, callApiLogin);
}
