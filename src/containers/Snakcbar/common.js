import { equals, path } from 'rambda'
import { colorPlaces, SnackbarVariant } from './constants'
import { getColor } from '../../themes/color/getColor'

export const isErrorVariant = equals(SnackbarVariant.error)

export const handleVariant = colorPlace => props => {
  if (!colorPlaces.includes(colorPlace)) {
    // eslint-disable-next-line no-console
    return console.error('Hey, you did not pass any color place!')
  }

  const variant = path(['variant'], props)
  if (!variant) return getColor(SnackbarVariant.info[colorPlace])

  return getColor(variant[colorPlace])
}
