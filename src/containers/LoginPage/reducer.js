import {
  EXPIRE_COOKIE,
  GET_API_LOGIN,
  INVALID_LOGIN,
  LOGINED,
  LOG_OUT,
  RECEIVE_API_LOGIN,
} from "./constants";

export const initialState = {
  isLogin: false,
  invalidLogin: false,
};

export const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case RECEIVE_API_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case INVALID_LOGIN:
      return {
        ...state,
        invalidLogin: true,
      };
    case LOGINED:
      localStorage.setItem("userLogin", "true");
      return {
        ...state,
        isLogin: true,
      };
    case LOG_OUT:
      sessionStorage.clear();
      localStorage.clear();

      localStorage.setItem("userLogin", "false");
      return {
        ...state,
      };
    case EXPIRE_COOKIE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
