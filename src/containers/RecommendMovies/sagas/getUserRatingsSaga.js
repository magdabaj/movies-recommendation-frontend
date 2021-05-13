import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_GET_USER_RATINGS} from "../constants";
import {getUserRatingsFailed, getUserRatingsSuccess} from "../actions";
import ratings from "../../../utils/api/ratings";

export function* getUserRatings() {
  try {
    const userRatings = yield call(ratings.getUserRatings)
    yield put(getUserRatingsSuccess(userRatings))
  } catch (e) {
    yield put(getUserRatingsFailed(e.message))
  }
}

export default function* getUserRatingsSaga() {
  yield takeLatest(REQUEST_GET_USER_RATINGS, getUserRatings)
}

