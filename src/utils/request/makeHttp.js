import { compose, join, map, mergeRight, toPairs } from 'ramda'
import makeBaseRequest from './makeBaseRequest'
import isObject from 'lodash/isObject'
import { RequestType } from './constants'

export const createQuery = compose(
  join('&'),
  map(join('=')),
  toPairs,
)

const makeRequestOptions = (defaultOptions, options) => ({
  ...defaultOptions,
  ...options,
})

export const makeHttp = ({ baseUrl, getHeaders }) => {
  console.log('baseUrl', baseUrl)
  const defaultOptions = {
    getHeaders,
    useNormalizedDataResponse: true,
    requestType: RequestType.json,
  }

  const request = makeBaseRequest(baseUrl)
  const makeRequest = method => (endpoint, payload, options = {}) => {
    const requestOptions = makeRequestOptions(defaultOptions, options)

    return request(endpoint, method, mergeRight(requestOptions, { payload }))
  }

  const get = (url, options = {}) =>
    request(url, 'GET', makeRequestOptions(defaultOptions, options))

  const httpGet = (endpointUrl, params) => {
    if (params) {
      if (isObject(params)) {
        const paramsString = createQuery(params)
        return get(`${endpointUrl}?${paramsString}`)
      }

      throw new Error('Argument `params` is not a object in httpGet() ')
    }
    return get(endpointUrl)
  }

  const getBlob = url =>
    get(url, {
      requestType: RequestType.file,
      useNormalizedDataResponse: false,
    })

  const getText = url =>
    get(url, {
      requestType: RequestType.text,
      useNormalizedDataResponse: false,
    })

  return {
    getText,
    get: httpGet,
    getBlob,
    post: makeRequest('POST'),
    patch: makeRequest('PATCH'),
    put: makeRequest('PUT'),
    delete: makeRequest('DELETE'),
  }
}
