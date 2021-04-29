import { path } from 'rambda'

export const readErrorMessageFromAction = action =>
  action.error || path(['payload', 'error'], action)
