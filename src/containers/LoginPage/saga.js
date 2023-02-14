import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  loadMenuRequesting,
  loadMenuSuccess,
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
    const url = `https://uatcmsapi.pizzahut.vn/api/login`;
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

    yield put(loadMenuRequesting());
    const response = yield call(fetchData, config);
    if (response.status === 200) {
      yield put(
        receiveApiLogin({
          ...response.data,
          username: infoUser.payload.username,
        })
      );
      yield put(loadMenuSuccess());
    } else {
      yield put(loadMenuSuccess());
    }
  } catch (error) {
    if (JSON.stringify(error).includes("400")) {
      yield put(invalidLogin());
    } else {
      alert("API login failed", error);
    }
  }
}

export default function* loginPageSaga() {
  yield takeLatest(GET_API_LOGIN, callApiLogin);
}
