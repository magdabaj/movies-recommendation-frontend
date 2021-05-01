import { call, put } from 'redux-saga/effects'

import {
  createNewUserFailed,
  createNewUserSuccess,
} from '../containers/SignUpPage/actions'
import { REQUEST_CREATE_NEW_USER } from '../containers/SignUpPage/constants'
import users from '../../../utils/api/users'
import { getErrorFromResponseOrDefault } from '../../../utils/request/errors/helpers'
import { takeLatestWithToken } from '../../../utils/withTokenRefreshSaga'
import { throwIfUnauthorized } from '../../../utils/authorization'

export function* createNewUser({username, password}) {
  console.log('creating new user...')
  try {
    yield call(users.create, {
      email: username,
      password,
    })
    yield put(createNewUserSuccess())
  } catch (e) {
    throwIfUnauthorized(e)
    const error = yield getErrorFromResponseOrDefault(e)
    yield put(createNewUserFailed(error))
  }
}

export default function* createNewUserSaga() {
  yield takeLatestWithToken(REQUEST_CREATE_NEW_USER, createNewUser)
}
