import {
  apply,
  complement,
  compose,
  converge,
  curry,
  equals,
  flip,
  forEach,
  identity,
  ifElse,
  includes,
  insert,
  is,
  isEmpty,
  isNil,
  join,
  match,
  not,
  objOf,
  omit,
  or,
  pick,
  pipe,
  prop,
  propEq,
  propOr,
  slice,
  tap,
  path,
} from 'ramda'

const unpack = ([arg]) => arg
const pack = arg => [arg]
const destructureArgs = (...args) => args

const applyN = (fn, count = 1, index = 0) => args =>
  insert(index, apply(fn, slice(0, count, args)), slice(count, Infinity, args))

const notEquals = arg =>
  compose(
    not,
    equals(arg),
  )

const splitObjectFromProps = (props, obj) => {
  const withoutProps = omit(props, obj)
  const onlyProps = pick(props, obj)
  return [onlyProps, withoutProps]
}

const omitArgs = (fn, ...argsIdx) => (...args) => {
  const filteredArgs = args.filter((arg, idx) => !argsIdx.includes(idx))
  return fn(...filteredArgs)
}

const returns = value => () => value

const startWith = x => () => x
const startWithFn = fn => fn

const spreadObj = f => (x = {}) => f({ ...x })

const callWith = curry((fn, arg) => () => fn(arg))
const isTruthy = identity
const isFalsy = complement(identity)

const debug = pipe(
  objOf('debug'),
  tap(console.log),
  prop('debug'),
)

const isFunction = is(Function)

const logError = tap(console.error)
const consoleLog = tap(console.log)
const consoleDebug = tap(console.debug)
const consoleLogProp = propName => tap(x => console.log(prop(propName, x)))

const callAll = functions => x => forEach(f => f(x), functions)

const objectLiteral = flip(prop)
const deepObjectLiteral = flip(path)

const reversedIncludes = flip(includes)

const propOrEmptyString = propOr('')

// eslint-disable-next-line no-shadow
const ifPropEq = curry((prop, value, val1, val2) =>
  ifElse(propEq(prop, value), returns(val1), returns(val2)),
)

const equalsIgnoreCase = curry(
  (str1, str2) => str1.toLowerCase() === str2.toLowerCase(),
)

const isOdd = i => i % 2
const isEven = complement(isOdd)
const isTrue = x => () => x
const returnJson = r => r.json()
const returnBlob = r => r.blob()
const returnText = r => r.text()
const skip = x => x
const returnInput = x => x

const flipOr = flip(or)

export const isEmptyOrNil = converge(or, [isEmpty, isNil])
export const isNotNil = complement(isNil)

const isNumericString = pipe(
  flipOr(''),
  match(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/),
  complement(isEmptyOrNil),
)

const addPrefix = curry((prefix, string) => `${prefix}${string}`)

const notPropEq = complement(propEq)

const iteratorToArray = f => [...f]

const makeUrlFrom = join('/')

export {
  makeUrlFrom,
  deepObjectLiteral,
  iteratorToArray,
  notPropEq,
  addPrefix,
  isNumericString,
  isFunction,
  isOdd,
  isEven,
  unpack,
  destructureArgs,
  applyN,
  notEquals,
  splitObjectFromProps,
  callWith,
  isTruthy,
  returns,
  startWith,
  spreadObj,
  omitArgs,
  isFalsy,
  debug,
  logError,
  consoleLog,
  consoleDebug,
  consoleLogProp,
  callAll,
  objectLiteral,
  reversedIncludes,
  propOrEmptyString,
  equalsIgnoreCase,
  ifPropEq,
  startWithFn,
  isTrue,
  skip,
  returnJson,
  returnBlob,
  returnInput,
  returnText,
  pack,
}
