import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { BASE_URL } from '../../baseApi'
import { NotiError } from '../Notifications/actions'
import { invalidLogin, loadRequesting, reciveApiLogin } from './actions'
import { POST_API_LOGIN } from './constants'

function fetchData(config) {
  const url = `${BASE_URL}/api/authenticate`
  return axios.request(url, config)
}

function* callApiLogin(infoUser) {
  try {
    const config = {
      method: 'POST',
      data: {
        username: infoUser.payload.username,
        password: infoUser.payload.password,
      },
    }
    const res = yield call(fetchData, config)
    yield put(loadRequesting())
    // OK
    if (res?.status === 200) {
      if (res?.data?.code === 0) {
        yield put(reciveApiLogin(res?.data))
        return
      } else {
        // Failed
        yield put(invalidLogin())
      }
    }
  } catch (err) {
    yield put(NotiError(`Api login ${err.message}`))
  }
}

export default function* loginPageSaga() {
  yield takeLatest(POST_API_LOGIN, callApiLogin)
}
