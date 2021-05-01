import authentication from '../../../utils/api/authentication'
import { rememberMe } from '../../../utils/localStorage/rememberMe'
import {
  setSessionFailed,
  setSessionSuccess,
} from '../containers/SignInPage/actions'
import { getErrorFromResponseOrDefault } from '../../../utils/request/errors/helpers'
import { REQUEST_SET_SESSION } from '../containers/SignInPage/constants'
import { call, put, takeLatest } from 'redux-saga/effects'
import { throwIfUnauthorized } from '../../../utils/authorization'

export function* signIn({ username, password, rememberMe: rememberMeChecked }) {
  try {
    const userData = yield call(authentication.signIn, username, password)
    rememberMe.set(rememberMeChecked)
    console.log('user data', userData)
    yield put(setSessionSuccess(userData))
  } catch (e) {
    throwIfUnauthorized(e)
    const error = yield getErrorFromResponseOrDefault(e)
    yield put(setSessionFailed(error))
  }
}

export default function* signInSaga() {
  yield takeLatest(REQUEST_SET_SESSION, signIn)
}
