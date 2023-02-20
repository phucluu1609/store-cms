import { POST_API_LOGIN, INVALID_LOGIN, RECEIVE_API_LOGIN } from './constants'

export const initialState = {
  infoUser: [],
  isLogin: false,
  invalidLogin: false,
  successful: false,
  requesting: false,
}

export const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case POST_API_LOGIN:
      return {
        ...state,
        infoUser: payload,
        requesting: true,
      }

    case RECEIVE_API_LOGIN:
      return {
        ...state,
        infoUser: [payload],
        isLogin: true,
        successful: true,
        requesting: true,
      }

    case INVALID_LOGIN:
      return {
        ...state,
        invalidLogin: true,
      }

    default:
      return state
  }
}
