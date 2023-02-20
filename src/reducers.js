import { combineReducers } from 'redux'
import { loginPageReducer } from './containers/LoginPage/reducer'
import { notificationsReducer } from './containers/Notifications/reducer'

export default function createReducer() {
  const rootReducer = combineReducers({
    loginPageReducer,
    notificationsReducer,
  })

  return rootReducer
}
