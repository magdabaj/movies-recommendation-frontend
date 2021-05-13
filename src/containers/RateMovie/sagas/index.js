import {all} from "redux-saga/effects";
import {getMovieRatingSaga} from "./getMovieRatingSaga";
import {rateMovieSaga} from "./rateMovieSaga";
import {updateRatingSaga} from "./updateMovieRateSaga";
import {getMovieSaga} from "./getMovieSaga";

export default function* () {
  yield all([
    getMovieRatingSaga(),
    rateMovieSaga(),
    updateRatingSaga(),
    getMovieSaga(),
  ])
}
