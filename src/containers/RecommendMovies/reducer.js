import { produce } from 'immer'
import {GET_USER_RATINGS_SUCCESS, RECOMMEND_MOVIES_SUCCESS} from "./constants";
export const initialState = {
  userRatings: [],
  recommendedMovies: []
}

/* eslint-disable default-case, no-param-reassign */
const recommendMoviesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_RATINGS_SUCCESS:
        draft.userRatings = action.ratings
        break
      case RECOMMEND_MOVIES_SUCCESS:
        draft.recommendedMovies = action.recommendedMovies
        break
    }
  })

export default recommendMoviesReducer
