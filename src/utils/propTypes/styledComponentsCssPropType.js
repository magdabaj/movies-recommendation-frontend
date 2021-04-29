import PropTypes from 'prop-types'

export const styledComponentsCssPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])),
  PropTypes.func,
])
