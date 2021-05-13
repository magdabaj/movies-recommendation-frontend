/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
import sessionReducer, { initialState as session } from './session/reducer'
import windowReducer, {initialState as window } from './window/reducer'
import moviesReducer, {initialState as movies} from "./movies/reducer";
import {combineReducers} from "redux";

export const initialState = {
  session,
  window,
  movies
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = combineReducers({
  session: sessionReducer,
  window: windowReducer,
  movies: moviesReducer,
})

export default appReducer;
