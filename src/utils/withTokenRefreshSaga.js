import { call, delay, put, takeLatest } from 'redux-saga/effects'
// import { oAuthTokens } from 'utils/localstorage/oAuthTokens'
import { getRefreshedToken } from './request/refreshToken'
import { doIfDev } from './dev'
import { requestRemoveSession } from '../containers/DefaultContainer/signOut/actions'
import { session } from './session'
import globalConfig from 'globalConfig'

const makeDevLogger = description => (...args) => {
  doIfDev(() => {
    // eslint-disable-next-line no-console
    console.warn(description, ...args)
  })
}

export const makeTokenRefresher = ({
                                     hasValidToken,
                                     refreshSaga,
                                     wait = 20,
                                   }) => {
  let sagaGettingToken = ''
  /**
   *
   * @description
   * used when we get a 401, but token is expiration date is still valid
   */
  let forceRefresh = false
  return function wrapper(saga) {
    const debug = makeDevLogger(saga.name)
    return function* watchRequests(...args) {
      // todo @chris.hoffman maybe use something other than saga name?
      if (!hasValidToken() || forceRefresh) {
        if (!sagaGettingToken) sagaGettingToken = saga.name
        // needs to refresh token
        debug('Needs to validate token', {
          anotherRequestIsGettingToken: sagaGettingToken,
        })
        const needsToWait = sagaGettingToken !== saga.name
        while (true) {
          if (forceRefresh) {
            debug('refreshing force')
            yield call(refreshSaga)
            sagaGettingToken = ''
            forceRefresh = false
            break
          }
          if (hasValidToken() && !forceRefresh) {
            debug('Other request got valid token')
            break
          } else if (needsToWait) {
            // refresh already in progress, wait for it
            if (!sagaGettingToken) {
              debug('breaking')
              break
            }
            yield delay(wait)
          } else {
            debug('refreshing')
            yield call(refreshSaga)
            sagaGettingToken = ''
            forceRefresh = false
            break
          }
        }
      }
      // continue with request
      try {
        yield call(saga, ...args)
      } catch (e) {
        forceRefresh = true
        yield watchRequests(...args)
      }
    }
  }
}

const { isCloud } = globalConfig

export function* refreshTokenSaga() {
  try {
    const tokens = yield call(getRefreshedToken)
    if (isCloud) {
      yield call(oAuthTokens.update, tokens)
    } else {
      yield call(session.update, {
        session: tokens.data.session,
        refreshToken: tokens.data.refresh_token,
      })
    }
  } catch (e) {
    window.location.href = globalConfig.loginPage
    yield put(requestRemoveSession())
  }
}

export function* takeLatestWithToken(action, saga) {
  const sagaToTake = withTokenRefreshSaga(saga)
  yield takeLatest(action, sagaToTake)
}

const withTokenRefreshSaga = makeTokenRefresher({
  hasValidToken: () =>
    isCloud ? !oAuthTokens.areExpired() : !session.isTokenExpired(),
  refreshSaga: refreshTokenSaga,
})

export default withTokenRefreshSaga
