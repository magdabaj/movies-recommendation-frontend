// import { oAuthTokens } from 'utils/localstorage/oAuthTokens'
import { makeHttp } from './makeHttp'
import {
  makeLocalRefreshTokenHeaders,
} from './headers'
import { BASE_URL } from './constants'
import globalConfig from '../../globalConfig'
import { session } from '../session'
const { isCloud } = globalConfig

const REFRESH_TOKEN = 'refresh_token'
const OAUTH_TOKEN_ENDPOINT = isCloud
  ? 'authentication/oauth/token'
  : 'api/v1/refresh'

export function createFormData(data) {
  const form = new FormData()
  Object.entries(data).forEach(([key, value]) => form.append(key, value))
  return form
}

const createRefreshTokenPayload = () => {
  // if (isCloud) {
  //   const refreshToken = oAuthTokens.getRefreshToken()
  //   const credentials = {
  //     grant_type: REFRESH_TOKEN,
  //     refresh_token: refreshToken,
  //   }
  //   return createFormData(credentials)
  // }

  return {
    refresh_token: session.getRefreshToken(),
  }
}

const getHeaders =  makeLocalRefreshTokenHeaders

const basicAuthenticatedHttp = makeHttp({
  baseUrl: BASE_URL,
  getHeaders,
  useNormalizedDataResponse: !isCloud,
})

export const getRefreshedToken = () => {
  const options = { useNormalizedDataResponse: false }
  const payload = createRefreshTokenPayload()
  return basicAuthenticatedHttp.post(OAUTH_TOKEN_ENDPOINT, payload, options)
}
