import {initialState} from "./reducer";
import {createSelector} from "reselect";

const selectPageDomain = state => state.rateMovie || initialState;


const makeSelectRating = () =>
  createSelector(
    selectPageDomain,
    substate => substate.rating,
  )

const makeSelectIsLoading = () =>
  createSelector(
    selectPageDomain,
    substate => substate.isLoading,
  )
const makeSelectIsSending = () =>
  createSelector(
    selectPageDomain,
    substate => substate.isSending,
  )
const makeSelectIsUpdating = () =>
  createSelector(
    selectPageDomain,
    substate => substate.isUpdating,
  )

const makeSelectMovie = () =>
  createSelector(
    selectPageDomain,
    substate => substate.movie,
  )

export {
  makeSelectRating,
  makeSelectIsLoading,
  makeSelectIsUpdating,
  makeSelectIsSending,
  makeSelectMovie,
}
