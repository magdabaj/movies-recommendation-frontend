/**
 *
 * Text
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FontWeight, Sizes } from './props'
import { withConditionalColor } from '../../themes/fromTheme/conditional'
import { fromThemeFromProps } from '../../themes/fromTheme'

const StyledSpan = styled.span`
  font-family: Roboto;
  font-style: normal;
  line-height: ${fromThemeFromProps('lineHeight', 'lineHeight')};
  color: ${withConditionalColor('secondary', 'secondaryText', 'text')};
  font-weight: ${fromThemeFromProps('fontWeight', 'weight')};
  font-size: ${fromThemeFromProps('fontSize', 'size')};
`
// todo remove this and use Content instead
const Text = ({ message, ...rest }) => (
  <StyledSpan {...rest}>
    {message}
  </StyledSpan>
)

Text.propTypes = {
  message: PropTypes.string,
  secondary: PropTypes.bool,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  lineHeight: PropTypes.string,
}

Text.defaultProps = {
  size: Sizes.medium,
  lineHeight: Sizes.medium,
  weight: FontWeight.normal,
}

export default Text
