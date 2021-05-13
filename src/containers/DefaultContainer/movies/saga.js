import { call, put, takeLatest } from 'redux-saga/effects';
import {receiveMoviesFailed, receiveMoviesSuccess} from "./actions";
import {REQUEST_RECEIVE_MOVIES} from "./constants";
import movies from "../../../utils/api/movies";

export function* getMovies(action) {
  try {
    const data = yield call(movies.get, action)
    yield put(receiveMoviesSuccess(data))
  } catch (e) {
    yield put(receiveMoviesFailed(e))
  }
}

export default function* moviesDataSaga() {
  yield takeLatest(REQUEST_RECEIVE_MOVIES, getMovies)
}
