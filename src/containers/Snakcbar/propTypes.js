import PropTypes from 'prop-types'
import { values } from 'rambda'
import { SnackbarVariant } from './constants'

export const snackbarVariantPropType = PropTypes.oneOf(values(SnackbarVariant))
