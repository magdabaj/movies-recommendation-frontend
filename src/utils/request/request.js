import { andThen, ifElse, otherwise, pipe, when } from 'ramda'
import StatusCodes, {
  statusInRange,
  statusIsOneOf,
} from './statusCodes'
import {
  objectLiteral,
  returnBlob,
  returnJson,
  skip,
  startWith,
  returnText,
} from '../fp'
import { camelizeDeepFromProp } from '../obj'
import fetch from 'node-fetch'
import RequestError from './errors/RequestError'
import FetchError from './errors/FetchError'
import { resolveTo } from '../promise'
import { RequestType } from './constants'
import {isFormData} from "./common";
import {session} from "../redux/localStorage/session";

const hasValueAnd = cond => x => x && x.data && cond

const toRequestType = objectLiteral({
  [RequestType.json]: returnJson,
  [RequestType.file]: returnBlob,
  [RequestType.text]: returnText,
})

const makeParseResponse = ({
                             useNormalizedDataResponse,
                             requestType = RequestType.json,
                           }) =>
  pipe(
    ifElse(
      statusIsOneOf(
        StatusCodes.noContent,
        StatusCodes.resetContent,
        StatusCodes.notModified,
      ),
      resolveTo(null),
      toRequestType(requestType),
    ),
    andThen(
      when(
        hasValueAnd(useNormalizedDataResponse),
        camelizeDeepFromProp('data'),
      ),
    ),
    otherwise(startWith(null)),
  )

const checkStatus = ifElse(
  statusInRange(200, 405),
  skip,
  response => {
    console.log('error response ', response)
    // return  response
    throw new RequestError(response, response.statusText)

  },
)

const handleFetchError = error => {
  throw new FetchError(error)
}


export function getFetchOptions(opts) {
  const fetchOptions = {}
  fetchOptions.headers = {}

  const isPayloadFormData = isFormData(opts.payload)
  if (opts.payload) {
    fetchOptions.body =opts.payload
      // ? opts.payload
      // : JSON.stringify(snakeCaseKeys(opts.payload))
  }

  const contentType = isPayloadFormData // ? null : getContentType(opts)
  // has to be done mutable like this, null returns bad request I read some stack and I think it's kind of fetch issue
  if (contentType) fetchOptions.headers['Content-Type'] = contentType

  const sessionData = session.get()
  if (sessionData) {
    fetchOptions.headers.Authorization = `Bearer ${sessionData.token}`
  }

  return fetchOptions
}


const request = (url, fetchOptions, useNormalizedDataResponse, requestType) => {
  // const fetchOptions = {
  //   method,
  //   ...getFetchOptions(options),
  // }

  return fetch(url, fetchOptions)
    .catch(handleFetchError)
    .then(checkStatus)
    .then(/*res=>res.json())//*/makeParseResponse({useNormalizedDataResponse, requestType}))
  // .then(res => console.log(res))}
}
export default request
