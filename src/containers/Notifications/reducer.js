/*
 *
 * Notifications reducer
 *
 */

import {
  NOTI_ERROR,
  NOTI_INFO,
  NOTI_SUCCESS,
  NOTI_WARING,
  RESET_NOTI,
} from './constants'

export const initialState = {
  status: '',
  content: '',
}

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTI_SUCCESS:
      return {
        status: 'success',
        content: action.payload,
      }

    case NOTI_WARING:
      return {
        status: 'warning',
        content: action.payload,
      }

    case NOTI_INFO:
      return {
        status: 'info',
        content: action.payload,
      }

    case NOTI_ERROR:
      return {
        status: 'error',
        content: action.payload,
      }

    case RESET_NOTI:
      return {
        ...state,
      }

    default:
      return state
  }
}
