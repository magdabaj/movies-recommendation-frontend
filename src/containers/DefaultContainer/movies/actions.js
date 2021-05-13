import {RECEIVE_MOVIES_FAILED, RECEIVE_MOVIES_SUCCESS, REQUEST_RECEIVE_MOVIES} from "./constants";

export const requestReceiveMovies = ({ page, limit, query }) => ({
  type: REQUEST_RECEIVE_MOVIES,
  page,
  limit,
  query,
})

export const receiveMoviesSuccess = movies => ({
  type: RECEIVE_MOVIES_SUCCESS,
  movies,
})
export const receiveMoviesFailed = error => ({
  type: RECEIVE_MOVIES_FAILED,
  error,
})
