import {all, call, put, takeLatest} from "redux-saga/effects";
import signOutSaga from "./signOut/saga";

export default function *() {
  yield all([
    signOutSaga(),

  ])
}
