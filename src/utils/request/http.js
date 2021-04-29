import { makeHttp } from './makeHttp'
import { makeLocalHeaders } from './headers'
import { BASE_API_URL } from './constants'

const http = makeHttp({
  baseUrl: BASE_API_URL,
  makeLocalHeaders,
})

export default http
