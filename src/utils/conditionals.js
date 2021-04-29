import { always, ifElse } from 'rambda'

export const staticIfElse = (value, notValue = undefined) =>
  ifElse(_ => _, always(value), always(notValue))
