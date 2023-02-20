import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { BASE_URL } from '../../baseApi'
import { invalidLogin, reciveApiLogin } from './actions'
import { POST_API_LOGIN } from './constants'

function fetchData(config) {
  const url = `${BASE_URL}/phvn/accounts/login`
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
    // Error
    if (res?.code) {
      yield put(invalidLogin())
      return
    } else {
      // OK
      yield put(reciveApiLogin(res?.data))
      return
    }
  } catch (e) {
    yield put(invalidLogin())
  }
}

export default function* loginPageSaga() {
  yield takeLatest(POST_API_LOGIN, callApiLogin)
}
