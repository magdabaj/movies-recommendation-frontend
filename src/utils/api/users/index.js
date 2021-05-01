import restApiClient from '../index.js'
// import http from '../../request/http'

const baseUrl = 'user/signup'

export const users = restApiClient({
  baseUrl,
  includeCreate: true,
})

export default users
