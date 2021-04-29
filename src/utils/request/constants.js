import protocol from '../protocol'
import globalConfig from '../../globalConfig'

export const RequestType = {
  json: 'json',
  file: 'file',
  text: 'text',
}

const { apiHostName: host, apiPort: port, apiUrl } = globalConfig

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' }
const DEFAULT_FORM_HEADERS = {}
const BASE_URL = `${protocol.makeHttp()}://${host}:${port}`
const BASE_API_URL = `${BASE_URL}${apiUrl}`

export { DEFAULT_HEADERS, DEFAULT_FORM_HEADERS, BASE_API_URL, BASE_URL }
