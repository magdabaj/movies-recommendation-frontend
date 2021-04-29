import { call, put, takeLatest } from 'redux-saga/effects'
import withTokenRefreshSaga from './withTokenRefreshSaga'

export default function* makeFetchSaga(
  requestAction,
  successAction,
  failedAction,
  callApi,
) {
  function* getApiResult(action) {
    try {
      const result = yield call(callApi, action)
      yield put(successAction(result))
    } catch (e) {
      yield put(failedAction(e.message))
    }
  }

  yield takeLatest(requestAction, withTokenRefreshSaga(getApiResult))
}
