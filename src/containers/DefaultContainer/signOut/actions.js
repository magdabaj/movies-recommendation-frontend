import { getClearSnackbarAction } from '../../../utils/actionHelpers'
import {
  REMOVE_SESSION_FAILED,
  REMOVE_SESSION_SUCCESS,
  REQUEST_REMOVE_SESSION,
} from './constants'

export const requestRemoveSession = () => ({
  type: REQUEST_REMOVE_SESSION,
})
export const removeSessionSuccess = () =>
  getClearSnackbarAction(REMOVE_SESSION_SUCCESS)

export const removeSessionFailed = error => ({
  type: REMOVE_SESSION_FAILED,
  error,
})
