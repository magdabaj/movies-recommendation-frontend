import { path, compose, prop } from 'rambda'
import hexToRgba from 'hex-to-rgba'
import Color from './constants'

const isValidOpacity = opacity => //inRange(opacity, 0, 1)
  opacity<=1 && opacity>=0

export const getColor = colorToken => ({ theme: { colorTokens } }) => {
  if (!colorTokens[colorToken])
    throw new Error(`Can't find token ${colorToken}`)

  const [color, value, opacity] = colorTokens[colorToken]
  const result = path([color, value], Color.carbon)
  if (result)
    return isValidOpacity(opacity)
      ? hexToRgba(result, opacity).replace(/ /g, '') // replace is for matching in tests
      : result

  throw new Error(`No such carbon color ${color}-${value}`)
}

export const getColorFromProp = compose(
  getColor,
  prop,
)
