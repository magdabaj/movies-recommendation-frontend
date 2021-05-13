import {all} from "redux-saga/effects";
import getUserRatingsSaga from "./getUserRatingsSaga";
import recommendMoviesSaga from "./recommendMoviesSaga";

export default function*() {
  yield all([
    getUserRatingsSaga(),
    recommendMoviesSaga(),
  ])
}
