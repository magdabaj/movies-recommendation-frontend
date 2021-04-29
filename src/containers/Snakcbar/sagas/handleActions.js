import { call } from 'redux-saga/effects'
import { path } from 'rambda'
import snackbarMessages from '../messages'
import { getMessageFromErrorCode } from '../../../utils/request/errors/helpers'
import { actionTypeEndsInFailed } from '../../../utils/actionHelpers'
import { SnackbarToken } from '../constants'
const getActionMessage = (action, causedByError) => {
  let message = null

  // read backend err
  if (action.error) message = getMessageFromErrorCode(action.error)

  // read message from action
  const metaMsg = path(['meta', 'snackbarMessage'], action)
  if (metaMsg) message = metaMsg

  // default message
  if (!message && causedByError)
    message = snackbarMessages.unableToPerformAction

  return message
}

const getSnackbarType = action =>
  path(['meta', 'snackbarToken'], action) || SnackbarToken.info

const shouldClearSnackbars = path(['meta', 'clearSnackbars'])

/* eslint-disable consistent-return */
function* handleActions(
  { addErrorSnackbar, addSnackbar, clearSnackbars },
  action,
) {
  try {
    if (shouldClearSnackbars(action)) {
      clearSnackbars()
    }

    if (actionTypeEndsInFailed(action)) {
      const message = getActionMessage(action, true)
      return yield call(addErrorSnackbar, message)
    }

    const message = getActionMessage(action)
    if (!message) return

    const snackbarType = getSnackbarType(action)
    yield call(addSnackbar, snackbarType, message)
  } catch ({ message }) {
    // eslint-disable-next-line no-console
    console.error('Something went wrong during handling failed action')
  }
}

export default handleActions
