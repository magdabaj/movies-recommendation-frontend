import { initialState } from './reducer'
import {pathOr} from "rambda";
import {createSelector} from "reselect";

export const selectNavigationPageDomain = state =>
  state.navigation || initialState

export const makeSelectLocationAppBar = () =>
  createSelector(
    selectNavigationPageDomain,
    navigationState => pathOr(null, ['appBar', 'location'], navigationState),
  )

