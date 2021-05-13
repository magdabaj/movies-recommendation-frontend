import {call, put, takeLatest} from "redux-saga/effects";
import ratings from "../../../utils/api/ratings";
import {sendRatingFailed, sendRatingSuccess} from "../actions";
import {REQUEST_SEND_RATING} from "../constants";

export function* sendRating(action) {
  try {
    const rating = yield call(ratings.rate, action.movieId, action.rating)
    yield put(sendRatingSuccess(rating.value))
  } catch (e) {
    yield put(sendRatingFailed(e.message))
  }
}

export function* rateMovieSaga() {
  yield takeLatest(REQUEST_SEND_RATING, sendRating)
}

