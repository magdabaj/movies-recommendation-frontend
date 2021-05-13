import { produce } from 'immer'
import {
  GET_MOVIE_SUCCESS,
  GET_RATING_FAILED,
  GET_RATING_SUCCESS,
  REQUEST_CLEAR_RATING, REQUEST_GET_RATING, REQUEST_SEND_RATING, REQUEST_UPDATE_RATING, SEND_RATING_FAILED,
  SEND_RATING_SUCCESS, UPDATE_RATING_FAILED,
  UPDATE_RATING_SUCCESS
} from "./constants";
export const initialState = {
  movie: null,
  rating: null,
  isSending: false,
  isUpdating: false,
  isLoading: false,
}

/* eslint-disable default-case, no-param-reassign */
const rateMovieReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOVIE_SUCCESS:
        draft.movie = action.movie;
        break
      case REQUEST_GET_RATING:
        draft.isLoading = true
        break
      case GET_RATING_SUCCESS:
        draft.rating = action.rating
        draft.isLoading = false
        break
      case GET_RATING_FAILED:
        draft.isLoading = false
        break
      case REQUEST_SEND_RATING:
        draft.isSending = true
        break
      case SEND_RATING_SUCCESS:
        draft.rating = action.rating
        draft.isSending = false
        break
      case SEND_RATING_FAILED:
        draft.isSending = false
        break
      case REQUEST_UPDATE_RATING:
        draft.isUpdating = true
        break
      case UPDATE_RATING_SUCCESS:
        draft.rating = action.rating
        draft.isUpdating = false
        break
      case UPDATE_RATING_FAILED:
        draft.isUpdating = false
        break
      case REQUEST_CLEAR_RATING:
        draft.isLoading = null
    }
  })

export default rateMovieReducer
