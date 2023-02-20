/*
 *
 * Notifications actions
 *
 */

import { NOTI_ERROR, NOTI_SUCCESS, NOTI_WARING, RESET_NOTI } from './constants'

export function NotiSuccess(content) {
  return {
    type: NOTI_SUCCESS,
    payload: content,
  }
}

export function NotiWarning(content) {
  return {
    type: NOTI_WARING,
    payload: content,
  }
}

export function NotiError(content) {
  return {
    type: NOTI_ERROR,
    payload: content,
  }
}

export function ResetNoti() {
  return {
    type: RESET_NOTI,
  }
}
