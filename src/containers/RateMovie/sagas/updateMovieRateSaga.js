import {call, put, takeLatest} from "redux-saga/effects";
import ratings from "../../../utils/api/ratings";
import {sendRatingFailed, sendRatingSuccess, updateRatingFailed, updateRatingSuccess} from "../actions";
import {REQUEST_SEND_RATING, REQUEST_UPDATE_RATING} from "../constants";

export function* updateRating(action) {
  try {
    const rating = yield call(ratings.changeRating, action.movieId, action.rating)
    yield put(updateRatingSuccess(rating.value))
  } catch (e) {
    yield put(updateRatingFailed(e.message))
  }
}

export function* updateRatingSaga() {
  yield takeLatest(REQUEST_UPDATE_RATING, updateRating)
}

