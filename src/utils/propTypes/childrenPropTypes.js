import PropTypes, { elementType } from 'prop-types'

export const oneChildPropType = PropTypes.oneOfType([
    elementType,
    PropTypes.node,
])

export const multipleChildrenPropType = PropTypes.oneOfType([
    oneChildPropType,
    PropTypes.arrayOf(oneChildPropType),
])