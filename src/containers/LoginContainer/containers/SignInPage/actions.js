import {
  REQUEST_SET_SESSION,
  SET_SESSION_FAILED,
  SET_SESSION_SUCCESS,
} from './constants'

export const requestSetSession = ({ username, password, rememberMe }) => ({
  type: REQUEST_SET_SESSION,
  username,
  password,
  rememberMe,
})

export const setSessionSuccess = ({ session, user, refreshToken }) => ({
  type: SET_SESSION_SUCCESS,
  token: session,
  user,
  refreshToken,
})

export const setSessionFailed = error => ({
  type: SET_SESSION_FAILED,
  error,
})
