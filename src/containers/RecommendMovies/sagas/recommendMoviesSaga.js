import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_RECOMMEND_MOVIES} from "../constants";
import {recommendMoviesFailed, recommendMoviesSuccess} from "../actions";
import movies from "../../../utils/api/movies";

export function* recommendMovies() {
  try {
    const recommendedMovies = yield call(movies.recommend)
    console.log('recommended movies ', recommendedMovies)
    yield put(recommendMoviesSuccess(recommendedMovies))
  } catch (e) {
    yield put(recommendMoviesFailed(e.message))
  }
}

export default function* recommendMoviesSaga() {
  yield takeLatest(REQUEST_RECOMMEND_MOVIES, recommendMovies)
}

