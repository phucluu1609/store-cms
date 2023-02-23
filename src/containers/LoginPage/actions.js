import {
  POST_API_LOGIN,
  INVALID_LOGIN,
  RECEIVE_API_LOGIN,
  LOG_OUT,
  LOAD_REQUESTING,
  EXPIRE_COOKIE,
} from './constants'

export function loadRequesting() {
  return {
    type: LOAD_REQUESTING,
  }
}

export function postApiLogin(payload) {
  return {
    type: POST_API_LOGIN,
    payload,
  }
}

export function reciveApiLogin(payload) {
  return {
    type: RECEIVE_API_LOGIN,
    payload,
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

export function expireCookies() {
  return {
    type: EXPIRE_COOKIE,
  }
}

export function invalidLogin() {
  return {
    type: INVALID_LOGIN,
  }
}
