import { cond, fromPairs, is, mergeAll, not, pipe, prop, T } from 'ramda'
import { isEmptyOrNil, iteratorToArray, returns } from '../fp'

export const isFormData = is(FormData)

export const isBodyFormData = pipe(
  prop('body'),
  isFormData,
)

export const hasBody = pipe(
  prop('body'),
  isEmptyOrNil,
  not,
)

const parseBody = pipe(
  prop('body'),
  JSON.parse,
)

const formBody = pipe(
  prop('body'),
  iteratorToArray,
  fromPairs,
  mergeAll,
)

export const getBody = cond([
  [isBodyFormData, formBody],
  [hasBody, parseBody],
  [T, returns('')],
])
