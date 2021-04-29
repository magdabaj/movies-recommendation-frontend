import {REQUEST_REMOVE_SESSION} from "./constants";
//'redux-saga/effects'
import {put, takeLatest} from "@redux-saga/core/effects";
import {removeSessionFailed, removeSessionSuccess} from "./actions";

export function* signOut() {
  try {
    yield put(removeSessionSuccess())
  } catch (e) {
    yield put(removeSessionFailed(e.message))
  }
}

export default function* signOutSaga() {
  yield takeLatest(REQUEST_REMOVE_SESSION, signOut)
}
