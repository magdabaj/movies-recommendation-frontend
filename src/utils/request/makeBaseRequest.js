import snakeCaseKeys from 'snakecase-keys'
import { getBody, isFormData } from './common'
import { isEmptyOrNil, returnInput, returns } from '../fp'
import { compose, cond, isNil, T } from 'ramda'
import { DEFAULT_FORM_HEADERS, DEFAULT_HEADERS } from './constants'
import request, {getFetchOptions} from './request'
import { doIfDev } from '../dev'
import {session} from "../redux/localStorage/session";

const debugInfo = ({ body, headers, method }, url) => {
  const parsedBody = getBody(body)

  // eslint-disable-next-line no-console
  if (!isEmptyOrNil(headers)) console.log({ headers })
  // eslint-disable-next-line no-console
  console.log(method, url, isEmptyOrNil(parsedBody) ? '' : parsedBody)
}

const makeHeaders = (getHeaders, isPayloadFormData) => {
  if (getHeaders) {
    return getHeaders()
  }
  return isPayloadFormData ? DEFAULT_FORM_HEADERS : DEFAULT_HEADERS
}

const snakeCaseStringify = compose(
  JSON.stringify,
  snakeCaseKeys,
)

const makeBody = cond([
  [isNil, returns(undefined)],
  [isFormData, returnInput],
  [T, snakeCaseStringify],
])

const makeOptions = ({ payload, getHeaders, method }) => {
  const isPayloadFormData = isFormData(payload)
  const body = makeBody(payload, isPayloadFormData)
  const headers = makeHeaders(getHeaders, isPayloadFormData)

  return {
    method,
    body,
    headers,
  }
}

const makeBaseRequest = baseUrl => async (
  endpointUrl,
  method = 'GET',
  {
    useNormalizedDataResponse = false,
    getHeaders = null,
    payload = null,
    requestType,
  } = {},
) => {
  const options = makeOptions({ getHeaders, method, payload })
  console.log('options', options)

  const sessionData = session.get()
  console.log('sessionData', sessionData)
  if (sessionData) {
    options.headers.Authorization = `Bearer ${sessionData.session.token}`
  }

  console.log('payload: ', payload)
  const url = `${baseUrl}/${endpointUrl}`

  doIfDev(() => {
    debugInfo(options, url)
  })

  return request(url, options, useNormalizedDataResponse, requestType)
}

export default makeBaseRequest
