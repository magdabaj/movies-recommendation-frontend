import { compose, always } from 'ramda'
import http from '../request/http'
import { applyN, destructureArgs, unpack } from '../fp'

export const makeHttpMethodFromUrlModifier = (urlModifier, count) => method =>
  compose(
    unpack,
    applyN(http[method], 2),
    applyN(urlModifier, count),
    destructureArgs,
  )

const restApiClient = ({
                         baseUrl,
                         includeCreate = true,
                         ...additionalActions
                       }) => {
  if (!baseUrl) throw new Error('Base url must be specified')

  const withId = id => `${baseUrl}/${id}`
  const withBaseUrl = always(baseUrl)

  const makeHttpMethodWithId = makeHttpMethodFromUrlModifier(withId)
  const makeHttpMethodBaseUrl = makeHttpMethodFromUrlModifier(withBaseUrl, 0)

  const client = {
    get: makeHttpMethodBaseUrl('get'),
    getById: makeHttpMethodWithId('get'),
    update: makeHttpMethodWithId('patch'),
    remove: makeHttpMethodWithId('delete'),
    ...additionalActions,
  }

  if (includeCreate) client.create = makeHttpMethodBaseUrl('post')

  console.log(client)

  return client
}

export default restApiClient
