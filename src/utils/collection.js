// import { sample, find, isArray, without } from 'lodash'
// import isArray from 'lodash/isArray'
import find from 'lodash/find'
import without from 'lodash/without'
import {
  add,
  all,
  compose,
  concat,
  isEmpty,
  length,
  reduce,
  values,
  map,
  curry,
  addIndex,
  equals,
  isNil,
  complement,
  pipe,
} from 'rambda'
// import { notEquals } from './fp'
import { isTrue } from './memoEquality'

export async function asyncForEach(items, action) {
  const results = []
  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    // eslint-disable-next-line no-await-in-loop
    const result = await action(item)
    if (result) results.push(result)
  }
  return results
}
//
// export function indexIsLast(collection, i) {
//   return collection.length - 1 === i
// }
//
// /**
//  * Note: does not work with primitives.
//  */
export const withoutFirst = (arr, predicate) =>
  without(arr, find(arr, predicate))

// export const lastIndex = compose(
//   add(-1),
//   length,
// )
// export const getNextElement = (arr, curr, n) => {
//   let index = arr.indexOf(curr) + n
//   const midIndex = arr.length / 2
//
//   if (index > arr.length) index = 0
//   if (index < 0) {
//     index = midIndex - 1
//   }
//
//   if (index === midIndex && n === 1) {
//     index = 0
//   }
//
//   if (arr.indexOf(curr) === midIndex && n === -1) {
//     index = arr.length - 1
//   }
//
//   if (index === arr.length && n === 1) {
//     index = midIndex
//   }
//
//   return arr[index]
// }
// export const changeRow = (arr, curr) => {
//   const index = arr.indexOf(curr)
//   const midIndex = arr.length / 2
//
//   const newIndex = index < midIndex ? index + midIndex : index - midIndex
//
//   return arr[newIndex]
// }
//
// export const collectionIsTruthy = argsArr => argsArr.every(isTrue)
// export const someAreTruthy = (...args) => args.some(isTrue)
export const filterTruthy = collection => collection.filter(isTrue)
//
// export const concatAll = reduce(concat, [])
//
// export const leaveArraySplitString = curry((divider, arg) =>
//   isArray(arg) ? arg : arg.split(divider),
// )
//
// export const mapIndexed = addIndex(map)
//
// export const hasEmptyValues = compose(
//   all(isEmpty),
//   values,
// )
//
// export const getSelectedItems = (items, item) => {
//   const existingItem = items.find(equals(item))
//   if (isNil(existingItem)) return [...items, item]
//   return items.filter(notEquals(item))
// }

// export const notEmpty = complement(isEmpty)
// export const areNotEmpty = all(notEmpty)
//
// export const randomFromEnum = pipe(
//   values,
//   sample,
// )
