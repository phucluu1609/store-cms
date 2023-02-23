import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { BASE_URL } from '../../baseApi'
import { NotiError } from '../Notifications/actions'
import { invalidLogin, loadRequesting, reciveApiLogin } from './actions'
import { POST_API_LOGIN } from './constants'

function fetchData(config) {
  const url = `${BASE_URL}/phvn/account`
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
    // OK
    if (res?.status === 200 && res?.status !== 404) {
      yield put(loadRequesting())
      yield put(reciveApiLogin(res?.data))
    } else {
      // Failed
      yield put(invalidLogin())
    }
  } catch (err) {
    yield put(NotiError(`Api Login ${err.message}`))
  }
}

export default function* loginPageSaga() {
  yield takeLatest(POST_API_LOGIN, callApiLogin)
}
