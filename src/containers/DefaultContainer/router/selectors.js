import { createSelector } from 'reselect'

const selectRouter = state => state.router

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  )

const makeSelectRouter = () =>
  createSelector(
    selectRouter,
    routerState => routerState,
  )

export { makeSelectLocation, makeSelectRouter }
