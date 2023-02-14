/*
 *
 * LoadingIndicator reducer
 *
 */

import { LOAD_REQUESTING, LOAD_SUCCESS, LOAD_ERROR } from "./constants";

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
export const loadingIndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUESTING:
      return {
        ...state,
        requesting: true,
        messages: [{ body: "Loading...", time: new Date() }],
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        successful: true,
        messages: [{ body: "Load successfully...", time: new Date() }],
      };

    case LOAD_ERROR:
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
