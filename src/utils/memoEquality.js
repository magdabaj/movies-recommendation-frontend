// import isEqual from 'lodash/isEqual'

// const devicePropsToCheck = ['id', 'name']

export const isTrue = value => value

// export const devicePropsAreEqual = (devicePropName = 'device') => (
//   props,
//   nextProps,
// ) =>
//   devicePropsToCheck
//     .map(
//       prop => props[devicePropName][prop] === nextProps[devicePropName][prop],
//     )
//     .every(isTrue)
//
// export const checkProp = propName => (props, nextProps) =>
//   isEqual(props[propName], nextProps[propName])
//
// export const arePropsEqual = (...equalityCheckers) => (props, nextProps) =>
//   equalityCheckers.map(checker => checker(props, nextProps)).every(isTrue)
