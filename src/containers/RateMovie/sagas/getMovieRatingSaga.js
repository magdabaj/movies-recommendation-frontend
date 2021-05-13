import {call} from "redux-saga/effects";
import ratings from "../../../utils/api/ratings";
import {put, takeLatest} from "@redux-saga/core/effects";
import {getRatingFailed, getRatingSuccess} from "../actions";
import {REQUEST_GET_RATING} from "../constants";

export function* getMovieRating({ movieId }) {
  try {
    const rating = yield call(ratings.getMovieRatingForUser, movieId)
    yield put(getRatingSuccess(rating.value))
  } catch (e) {
    // console.log(e.message)/
    yield put(getRatingFailed(e))
  }
}

export function* getMovieRatingSaga() {
  yield takeLatest(REQUEST_GET_RATING, getMovieRating)
}
