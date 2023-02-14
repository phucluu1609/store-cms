/*
 *
 * Notifications reducer
 *
 */
import produce from "immer";
import {
  DEFAULT_ACTION,
  NOTI_SUCCESS,
  NOTI_WARING,
  NOTI_ERROR,
  RESET_NOTI,
} from "./constants";

export const initialState = {
  status: "",
  content: "",
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTI_SUCCESS:
      return {
        status: "success",
        content: action.payload,
      };

    case NOTI_WARING:
      return {
        status: "warning",
        content: action.payload,
      };

    case NOTI_ERROR:
      return {
        status: "error",
        content: action.payload,
      };

    case RESET_NOTI:
      return {
        ...state,
      };

    case DEFAULT_ACTION:
      return state;
  }
};

export default notificationsReducer;
