import { createSelector } from 'reselect'
import { isEmpty, isNil, pathOr } from 'rambda'
import { baseActionName } from '../../../utils/actionHelpers'
import { filterTruthy } from '../../../utils/collection'
import { initialState } from './reducer'

const selectApiCalls = pathOr(initialState, ['global', 'apiCalls'])

const makeSelectApiCallsInProgress = (...actions) =>
  createSelector(
    selectApiCalls,
    apiCallsState => {
      if (!actions.length) return apiCallsState.inProgress.length

      const actionsBaseNames = filterTruthy(actions).map(baseActionName)

      if (isEmpty(actionsBaseNames)) return 0

      const apiCallsInProgress = apiCallsState.inProgress.filter(
        inProgressAction => actionsBaseNames.includes(inProgressAction),
      )

      return apiCallsInProgress.length
    },
  )

const makeSelectHasApiCallsInProgress = (...actions) =>
  createSelector(
    makeSelectApiCallsInProgress(...actions),
    apiCallsInProgress => apiCallsInProgress > 0,
  )
const makeSelectApiErrors = () =>
  createSelector(
    selectApiCalls,
    apiCallsState => apiCallsState.errors,
  )

const makeSelectHasApiErrors = () =>
  createSelector(
    selectApiCalls,
    apiCallsState => apiCallsState.errors.length > 0,
  )

const makeSelectHasApiError = errorType =>
  createSelector(
    selectApiCalls,
    apiCallsState => {
      const errorFound = apiCallsState.errors.find(
        error => error.type === errorType,
      )
      return !isNil(errorFound)
    },
  )

export {
  makeSelectHasApiErrors,
  makeSelectApiErrors,
  makeSelectHasApiCallsInProgress,
  makeSelectApiCallsInProgress,
  makeSelectHasApiError,
  selectApiCalls,
}
