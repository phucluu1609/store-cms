import { POST_API_LOGIN, INVALID_LOGIN, RECEIVE_API_LOGIN } from './constants'

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

export function invalidLogin() {
  return {
    type: INVALID_LOGIN,
  }
}
