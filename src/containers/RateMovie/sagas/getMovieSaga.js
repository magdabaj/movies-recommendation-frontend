import {call, put, takeLatest} from "redux-saga/effects";
import ratings from "../../../utils/api/ratings";
import {getMovieFailed, getMovieSuccess, sendRatingFailed, sendRatingSuccess} from "../actions";
import {REQUEST_GET_MOVIE, REQUEST_SEND_RATING} from "../constants";
import movies from "../../../utils/api/movies";

export function* getMovie(action) {
  try {
    const movie = yield call(movies.getOne, action.movieId)
    yield put(getMovieSuccess(movie))
  } catch (e) {
    yield put(getMovieFailed(e.message))
  }
}

export function* getMovieSaga() {
  yield takeLatest(REQUEST_GET_MOVIE, getMovie)
}

