import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {pathOr} from "rambda";

/**
 * Direct selector to the recipesHomePage state domain
 */

const selectMovies = pathOr(initialState, ['global', 'movies'])

const makeSelectMovies = () =>
  createSelector(
    selectMovies,
    substate => substate.movies,
  )

export { makeSelectMovies }
