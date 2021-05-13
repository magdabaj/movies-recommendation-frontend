import {initialState} from "./reducer";
import {createSelector} from "reselect";

const selectPageDomain = state => state.recommendMovies || initialState;


const makeSelectUserRatings = () =>
  createSelector(
    selectPageDomain,
    substate => substate.userRatings,
  )

const makeSelectRecommendedMovies = () =>
  createSelector(
    selectPageDomain,
    substate => substate.recommendedMovies,
  )


export {
  makeSelectUserRatings,
  makeSelectRecommendedMovies,
}
