import { path } from 'ramda'
import isString from 'lodash/isString'
import { logErrorIfAny } from './helpers'

export const fromTheme = (...properties) => ({ theme }) => {
  const result = path(properties, theme)

  logErrorIfAny(theme, result, ...properties)
  return result
}

export const fromThemeFromProps = (themeProp, componentPropName) => ({
                                                                       theme,
                                                                       ...props
                                                                     }) => {
  const name = props[componentPropName]
  const result = theme[themeProp][name]

  logErrorIfAny(theme, result, themeProp, name)
  return result
}

/**
 1 returns 8px
 */
export const themeSpacing = spacing => ({ theme, [spacing]: otherProp }) => {
  const getThemeSpacing = path(['spacing'], theme)
  const spacingValue = isString(spacing) ? otherProp : spacing
  const spacingInPx = getThemeSpacing(spacingValue)
  return `${spacingInPx}px`
}

export const themeTypographyFontSize = fontSize => ({ theme }) => {
  // console.log('theme', theme)
  // console.log('fontSize', fontSize)
  return theme.typography[fontSize].fontSize
}

export const themeFontSize = themeTypographyFontSize

export const themeFontSizeDeprecated = typographyPropName => ({
                                                                theme,
                                                                [typographyPropName]: fontSize,
                                                              }) => {
  const typographyFontSize = theme.typography[fontSize]
  if (typographyFontSize) return typographyFontSize.fontSize
  throw new Error(`Couldn't find font size ${typographyPropName}`)
}

// @depracated, use getColor
export const themeColor = color => fromTheme('color', color)
// @deprecated, use themeBorderRadius instead
export const themeBorderRadiusDeprecated = size =>
  fromTheme('borderRadius', size)
export const themeBorderRadius = radius => themeShape(radius)
export const themePadding = size => fromTheme('padding', size)
export const themeMargin = size => fromTheme('margin', size)
export const themeLineHeight = size => fromTheme('lineHeight', size)
export const themeShape = prop => fromTheme('shape', prop)
export const themeFontWeight = prop => fromTheme('fontWeight', prop)
export const themeZIndex = prop => fromTheme('zIndex', prop)

export const themeFontWeightBold = () => themeFontWeight('bold')
