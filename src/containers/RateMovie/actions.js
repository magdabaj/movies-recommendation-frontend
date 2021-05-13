import {
  GET_MOVIE_FAILED, GET_MOVIE_SUCCESS,
  GET_RATING_FAILED,
  GET_RATING_SUCCESS, REQUEST_CLEAR_RATING, REQUEST_GET_MOVIE,
  REQUEST_GET_RATING,
  REQUEST_SEND_RATING, REQUEST_UPDATE_RATING,
  SEND_RATING_FAILED,
  SEND_RATING_SUCCESS, UPDATE_RATING_FAILED, UPDATE_RATING_SUCCESS
} from "./constants";
import snackbarMessages from '../Snakcbar/messages'
import {getErrorActionWithoutPayload} from "../../utils/actionHelpers";

export const requestSendRating = (rating, movieId) => ({
  type: REQUEST_SEND_RATING,
  rating,
  movieId,
})

export const sendRatingSuccess = rating => ({
  type: SEND_RATING_SUCCESS,
  rating
})

export const sendRatingFailed = error =>
  getErrorActionWithoutPayload(
    SEND_RATING_FAILED,
    snackbarMessages.sendRatingError,
  )
//   ({
//   type: SEND_RATING_FAILED,
//   error
// })

export const requestGetRating = movieId => ({
  type: REQUEST_GET_RATING,
  movieId,
})

export const getRatingSuccess = rating => ({
  type: GET_RATING_SUCCESS,
  rating
})

export const getRatingFailed = error => ({
  type: GET_RATING_FAILED,
  error
})

export const requestUpdateRating = (rating, movieId) => ({
  type: REQUEST_UPDATE_RATING,
  rating,
  movieId,
})

export const updateRatingSuccess = rating => ({
  type: UPDATE_RATING_SUCCESS,
  rating
})

export const updateRatingFailed = error =>
  getErrorActionWithoutPayload(
    UPDATE_RATING_FAILED,
    snackbarMessages.sendRatingError,
  )

export const requestClearRating = () => ({
  type: REQUEST_CLEAR_RATING
})

export const requestGetMovie = movieId => ({
  type: REQUEST_GET_MOVIE,
  movieId,
})

export const getMovieSuccess = movie => ({
  type: GET_MOVIE_SUCCESS,
  movie
})

export const getMovieFailed = error =>
  getErrorActionWithoutPayload(
    GET_MOVIE_FAILED,
    snackbarMessages.getMovieFailed,
  )
