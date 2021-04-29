import { createSelector } from 'reselect'
import { pathOr, path } from 'ramda'
// import globalConfig from 'globalConfig'
// import { changeCaseFp } from 'utils/changeCase'
// import { defaultConsent } from 'containers/App/session/constants'
import { initialState } from './reducer'

export const selectSession = pathOr(initialState, ['global', 'session'])

const makeSelectHasSession = () =>
  createSelector(
    selectSession,
    sessionState => !!sessionState.token
  )

export { makeSelectHasSession }
