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

export const setSessionSuccess = ({ accessToken, user }) => ({
  type: SET_SESSION_SUCCESS,
  token: accessToken,
  user: user.email,
  // refreshToken,
})

export const setSessionFailed = error => ({
  type: SET_SESSION_FAILED,
  error,
})
