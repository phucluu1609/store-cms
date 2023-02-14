/*
 *
 * LoadingIndicator actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_MENU_REQUESTING,
  LOAD_MENU_SUCCESS,
} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadMenuRequesting() {
  return {
    type: LOAD_MENU_REQUESTING,
  };
}

export function loadMenuSuccess() {
  return {
    type: LOAD_MENU_SUCCESS,
  };
}
