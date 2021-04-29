import { takeLatest } from 'redux-saga/effects'
import handleActions from './handleActions'

function* snackbarSaga({ snackbar }) {
  yield takeLatest('*', handleActions, snackbar)
}

export { snackbarSaga }
