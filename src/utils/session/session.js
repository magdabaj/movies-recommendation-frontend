import jwt from 'jsonwebtoken'
import { path, compose, prop, multiply } from 'rambda'
import localStorageItem from '../localStorage'
import { isEarlierThan, toDate, now } from '../date'
import { rememberMe } from '../localStorage/rememberMe'
import sessionStorageItem from '../sessionStorage'

const key = 'session'

const getSession = () => {
  const isRemembered = rememberMe.get()
  const getStorage = isRemembered ? localStorageItem : sessionStorageItem
  return getStorage(key)
}

const sessionStorage = {
  getCurrentValue: () => getSession().get(),
  setCurrentValue: value => getSession().set(value),
  removeCurrentValue: () => getSession().remove(),
}

const isEarlierThanNow = compose(
  isEarlierThan(now()),
  toDate,
)

const getExpirationDate = compose(
  multiply(1000),
  prop('exp'),
)

const getToken = compose(
  path(['session', 'token']),
  sessionStorage.getCurrentValue,
)

const getRefreshToken = compose(
  path(['session', 'refreshToken']),
  sessionStorage.getCurrentValue,
)

const update = ({ session, refreshToken }) => {
  const previousSession = sessionStorage.getCurrentValue()
  sessionStorage.setCurrentValue({
    session: { ...previousSession.session, token: session, refreshToken },
  })
}

const decodeJwt = token => jwt.decode(token)

const getDecodedJwt = compose(
  decodeJwt,
  getToken,
)

const isTokenExpired = compose(
  isEarlierThanNow,
  getExpirationDate,
  getDecodedJwt,
)

/**
 * @todo @chris.hoffman rename to localSession
 */
export const session = {
  set: sessionStorage.setCurrentValue,
  get: sessionStorage.getCurrentValue,
  remove: sessionStorage.removeCurrentValue,
  getToken,
  getRefreshToken,
  update,
  isTokenExpired,
}
