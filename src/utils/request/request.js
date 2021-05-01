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
  statusInRange(200, 400),
  skip,
  response => {
    throw new RequestError(response, response.statusText)
  },
)

const handleFetchError = error => {
  throw new FetchError(error)
}

const request = (url, fetchOptions, useNormalizedDataResponse, requestType) =>
  fetch(url, fetchOptions)
    .catch(handleFetchError)
    .then(checkStatus)
    .then(/*res=>res.json())//*/makeParseResponse({ useNormalizedDataResponse, requestType }))
    // .then(res => console.log(res))

export default request
