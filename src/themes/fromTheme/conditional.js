import isFunction from 'lodash/isFunction'
import { prop } from 'rambda'
import { logErrorIfAny } from './helpers'

export const fromThemeConditional = propertyName => (
  condition,
  propIfCondition,
  defaultProp,
) => ({ theme, ...props }) => {
  const themeProp = prop(propertyName, theme)
  const conditionMet = isFunction(condition)
    ? condition(props)
    : prop(condition, props)

  const result = conditionMet
    ? prop(propIfCondition, themeProp)
    : prop(defaultProp, themeProp)

  logErrorIfAny(
    theme,
    result,
    propertyName,
    conditionMet ? propIfCondition : defaultProp,
  )

  return result
}

export const withConditionalColor = fromThemeConditional('color')
