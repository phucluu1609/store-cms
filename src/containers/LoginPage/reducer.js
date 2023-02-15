import Cookies from "universal-cookie";
import {
  EXPIRED_COOKIE,
  GET_API_LOGIN,
  INVALID_LOGIN,
  LOGINED,
  LOG_OUT,
  RECEIVE_API_LOGIN,
} from "./constants";

const cookie = new Cookies();

export const initialState = {
  infoUser: [],
  isLogin: false,
  expireCookie: false,
  invalidLogin: false,
};

export const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_LOGIN:
      return {
        ...state,
        infoUser: [action.payload],
        isLogin: true,
      };

    case RECEIVE_API_LOGIN:
      cookie.set("profile", action.payload, {
        path: "/",
        expires: new Date(Date.now() + 86400000),
      });
      localStorage.setItem("userLogin", "true");
      localStorage.setItem("onReload", true);
      return {
        ...state,
        infoUser: [action.payload],
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
      cookie.remove("profile");
      Object.keys(cookie.getAll()).forEach(function (item) {
        cookie.remove(item, { path: "/" });
      });
      sessionStorage.clear();
      localStorage.clear();

      localStorage.setItem("userLogin", "false");
      return {
        ...state,
        infoUser: [],
      };

    case EXPIRED_COOKIE:
      Object.keys(cookie.getAll()).forEach(function (item) {
        cookie.remove(item, { path: "/" });
      });
      sessionStorage.clear();
      localStorage.clear();
      localStorage.setItem("userLogin", "true");
      localStorage.setItem("onReload", true);
      return {
        ...state,
        expireCookie: true,
        infoUser: [],
      };

    default:
      return state;
  }
};
