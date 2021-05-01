import {all} from "redux-saga/effects";
import createNewUserSaga from "./signUpSaga";
import signInSaga from "./loginSaga";

export default function*() {
  yield all([createNewUserSaga(), signInSaga()])
}
