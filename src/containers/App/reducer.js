/*
 *
 * RecipesHomePage reducer
 *
 */
import produce from 'immer';
import sessionReducer, { initialState as session } from './session/reducer'
import {combineReducers} from "redux";

export const initialState = {
  session
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = combineReducers({
  session: sessionReducer
})

export default appReducer;
