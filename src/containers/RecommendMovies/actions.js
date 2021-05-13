import {
  GET_USER_RATINGS_FAILED,
  GET_USER_RATINGS_SUCCESS, RECOMMEND_MOVIES_FAILED, RECOMMEND_MOVIES_SUCCESS,
  REQUEST_GET_USER_RATINGS,
  REQUEST_RECOMMEND_MOVIES
} from "./constants";

export const requestGetUserRatings = () => ({
  type: REQUEST_GET_USER_RATINGS,
})

export const getUserRatingsSuccess = ratings => ({
  type: GET_USER_RATINGS_SUCCESS,
  ratings
})

export const getUserRatingsFailed = error => ({
  type: GET_USER_RATINGS_FAILED,
  error
})

export const requestRecommendMovies = () => ({
  type: REQUEST_RECOMMEND_MOVIES,
})

export const recommendMoviesSuccess = recommendedMovies => ({
  type: RECOMMEND_MOVIES_SUCCESS,
  recommendedMovies
})

export const recommendMoviesFailed = error => ({
  type: RECOMMEND_MOVIES_FAILED,
  error
})

