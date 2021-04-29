import { produce } from 'immer'
import { withoutFirst } from '../../../utils/collection'
import {
  actionTypeEndsInFailed,
  actionTypeStartsWithRequest,
  actionTypeCompletesApiCall,
  baseActionName,
  isActionCompleted,
} from '../../../utils/actionHelpers'
import { propEq, filter } from 'rambda'
import { readErrorMessageFromAction } from './common'
import { notPropEq } from '../../../utils/fp'
import {
  CLEAR_API_ERRORS,
  REMOVE_API_ERROR,
  REMOVE_API_ERRORS_OF_TYPE,
} from './constants'

export const initialState = {
  inProgress: [],
  errors: [],
}

/* eslint-disable default-case, no-param-reassign, indent */
const apiCallsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLEAR_API_ERRORS:
        draft.errors = []
        break
      case REMOVE_API_ERRORS_OF_TYPE:
        draft.errors = filter(notPropEq('type', action.errorType), state.errors)
        break
      case REMOVE_API_ERROR:
        draft.errors = withoutFirst(
          state.errors,
          propEq('type', action.errorType),
        )
    }

    if (actionTypeStartsWithRequest(action)) {
      draft.inProgress = [...draft.inProgress, baseActionName(action.type)]
    } else if (actionTypeCompletesApiCall(action)) {
      draft.inProgress = draft.inProgress.filter(actionInProgress =>
        isActionCompleted(actionInProgress, action.type),
      )
    }
    if (actionTypeEndsInFailed(action)) {
      draft.errors = [
        {
          type: action.type,
          code: action.errorCode,
          message: readErrorMessageFromAction(action),
        },
      ]
    }
  })

export default apiCallsReducer
