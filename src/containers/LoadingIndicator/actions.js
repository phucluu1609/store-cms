/*
 *
 * LoadingIndicator actions
 *
 */

import { LOAD_REQUESTING, LOAD_SUCCESS, LOAD_ERROR } from "./constants";

export function loadRequesting() {
  return {
    type: LOAD_REQUESTING,
  };
}

export function loadSuccess() {
  return {
    type: LOAD_SUCCESS,
  };
}

export function loadError() {
  return {
    type: LOAD_ERROR,
  };
}
