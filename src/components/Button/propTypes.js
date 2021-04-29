import PropTypes from 'prop-types'
import values from 'lodash/values'
import ButtonVariety from './buttonVariety'

export const varietyPropType = PropTypes.oneOf(values(ButtonVariety))
