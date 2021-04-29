import R, {
  always,
  any,
  compose,
  curry,
  ifElse,
  is,
  last,
  map,
  not,
  path,
  pathOr,
  pickBy,
  prop,
  propEq,
  props,
} from 'rambda'
import camelcaseKeys from 'camelcase-keys'
import { staticIfElse } from './conditionals'
// import lackOfDataPathOr from './lackOfDataPathOr'
// import { collectionIsTruthy } from './collection'

export const camelizeDeep = obj => camelcaseKeys(obj, { deep: true })

export const camelizeDeepFromProp = propName =>
  compose(
    ifElse(is(Array), map(camelizeDeep), camelizeDeep),
    prop(propName),
  )

export const ifProp = (
  propToCheck,
  { onTrueValue = null, onFalseValue = null } = {},
) =>
  compose(
    staticIfElse(onTrueValue, onFalseValue),
    prop(propToCheck),
  )
//
// export const ifProps = (
//   propsToCheck,
//   { onTrueValue = null, onFalseValue = null } = {},
// ) =>
//   compose(
//     staticIfElse(onTrueValue, onFalseValue),
//     collectionIsTruthy,
//     props(propsToCheck),
//   )
//
// export const pathOrZero = pathOr(0)
export const pathOrEmptyString = pathOr('')

// export const pathsOr = ({
//                           substituteValues,
//                           paths,
//                           objToRead,
//                           pathOrFunc = pathOr,
//                         }) => {
//   const data = {}
//
//   paths.forEach((pathToRead, i) => {
//     const orValue = path([i], substituteValues)
//     const propertyValue = pathOrFunc(orValue, pathToRead, objToRead)
//     const propertyName = last(pathToRead)
//     data[propertyName] = propertyValue
//   })
//
//   return data
// }

// export const lackOfDataPathsOr = (paths, objectToRead) =>
//   pathsOr({
//     paths,
//     objToRead: objectToRead,
//     pathOrFunc: (_, pathToRead, objToRead) =>
//       lackOfDataPathOr(pathToRead, objToRead),
//   })
//
// export const ifPropDefault = (propName, value, notValue = undefined) =>
//   ifElse(prop(propName), always(value), always(notValue))
//
// export const ifAnyProps = (propNames, value, notValue = undefined) => {
//   const hasProps = compose(
//     any(Boolean),
//     props(propNames),
//   )
//   return ifElse(hasProps, always(value), always(notValue))
// }
//
// export const ifNotAnyProps = (propNames, value, notValue = undefined) => {
//   const doesntHaveProps = compose(
//     not,
//     any(Boolean),
//     props(propNames),
//   )
//   return ifElse(doesntHaveProps, always(value), always(notValue))
// }
//
// export const propNotEq = curry(
//   compose(
//     not,
//     propEq,
//   ),
// )
//
// export const createInstanceOf = Class => (...args) => new Class(...args)
//
// export const reduceToObj = R.reduce(R.__, {})
//
// export const pickSetValues = pickBy(v => v !== undefined)
