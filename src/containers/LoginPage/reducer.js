import {
  EXPIRE_COOKIE,
  INVALID_LOGIN,
  LOAD_REQUESTING,
  LOG_OUT,
  RECEIVE_API_LOGIN,
} from './constants'

export const initialState = {
  infoUser: [],
  isLogin: false,
  invalidLogin: false,
  requesting: false,
  expireCookie: false,
}

export const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_REQUESTING:
      return {
        ...state,
        infoUser: [],
        isLogin: false,
        requesting: true,
        invalidLogin: false,
        expireCookie: false,
      }

    case RECEIVE_API_LOGIN:
      localStorage.setItem('userLogin', 'true')
      localStorage.setItem('onReload', true)
      return {
        ...state,
        infoUser: [payload],
        isLogin: true,
        requesting: false,
        invalidLogin: false,
        expireCookie: false,
      }

    case EXPIRE_COOKIE:
      localStorage.clear()
      localStorage.setItem('userLogin', 'true')
      localStorage.setItem('onReload', true)
      return {
        ...state,
        expireCookie: true,
        infoUser: [],
        isLogin: false,
        requesting: false,
      }

    case LOG_OUT:
      localStorage.clear()
      localStorage.setItem('userLogin', 'false')
      return {
        ...state,
        infoUser: [],
        isLogin: false,
        requesting: false,
        expireCookie: false,
      }

    case INVALID_LOGIN:
      return {
        ...state,
        invalidLogin: true,
        requesting: false,
        expireCookie: false,
      }

    default:
      return state
  }
}
