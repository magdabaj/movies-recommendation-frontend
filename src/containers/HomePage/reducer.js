/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
import {RECEIVE_MOVIES_SUCCESS} from "./constants";

export const initialState = {
  // movies: [],
  // page: 1,
  // limit: 12,
  // search: ''
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
          // case RECEIVE_MOVIES_SUCCESS:
          //   draft.movies = action.movies;
          //   break
        }
    });

export default homePageReducer;
