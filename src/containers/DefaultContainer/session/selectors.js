import { createSelector } from 'reselect'
import { pathOr } from 'ramda'
import { initialState } from './reducer'

export const selectSession = pathOr(initialState, ['global', 'session'])

const makeSelectHasSession = () =>
  createSelector(
    selectSession,
    sessionState => !!sessionState.token
  )

const makeSelectUser = () =>
  createSelector(
    selectSession,
    ({user}) => user,
  )

export { makeSelectHasSession, makeSelectUser }
