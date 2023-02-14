/*
 *
 * LoadingIndicator reducer
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_MENU_REQUESTING,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
} from "./constants";

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
export const loadingIndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;

    case LOAD_MENU_REQUESTING:
      return {
        ...state,
        requesting: true,
        messages: [{ body: "Loading...", time: new Date() }],
      };

    case LOAD_MENU_SUCCESS:
      return {
        ...state,
        successful: true,
        messages: [{ body: "Load Menu successfully...", time: new Date() }],
      };

    case LOAD_MENU_ERROR:
      return {
        ...state,
        errors: state.errors.concat([
          {
            body: action.errors,
            time: new Date(),
          },
        ]),
      };

    default:
      return state;
  }
};
