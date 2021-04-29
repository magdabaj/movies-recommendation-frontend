import inRange from 'lodash/inRange'

const StatusCodes = {
  noContent: 204,
  resetContent: 205,
  notModified: 304,
}

export const statusIsOneOf = (...statuses) => response =>
  statuses.some(status => status === response.status)

export const statusInRange = (start, end) => response =>
  inRange(response.status, start, end)

export default StatusCodes
