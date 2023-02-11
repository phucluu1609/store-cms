import {
  GET_API_LOGIN,
  RECEIVE_API_LOGIN,
  LOG_OUT,
  LOGINED,
  EXPIRE_COOKIE,
  INVALID_LOGIN,
} from "./constants";

export function getApiLogin(data) {
  return {
    type: GET_API_LOGIN,
    payload: data,
  };
}

export function receiveApiLogin(data) {
  return {
    type: RECEIVE_API_LOGIN,
    payload: data,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
export function logined() {
  return {
    type: LOGINED,
  };
}

export function expireCookies() {
  return {
    type: EXPIRE_COOKIE,
  };
}

export function invalidLogin() {
  return {
    type: INVALID_LOGIN,
  };
}
