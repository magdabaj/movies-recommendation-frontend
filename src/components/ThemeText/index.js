/**
 *
 * ThemeText
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'ramda'
import { getColor } from '../../themes/color/getColor'
import {
  themeFontWeight,
  themeSpacing,
  themeTypographyFontSize,
} from '../../themes/fromTheme'
import Color from '../../themes/color/constants'

const themeValueIfProp = (propName, func) => props =>
  props[propName] && func(props[propName])

const Container = styled.span`
  color: ${themeValueIfProp('color', getColor)};
  background-color: ${themeValueIfProp('backgroundColor', getColor)};
  font-size: ${themeValueIfProp('fontSize', themeTypographyFontSize)};
  line-height: ${themeValueIfProp('lineHeight', themeSpacing)};
  font-weight: ${themeValueIfProp('fontWeight', themeFontWeight)};
  ${props =>
  props.ellipsis &&
  css`
      &&& {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
  ${prop('css')};
`

const ThemeText = ({
                     message,
                     text,
                     values,
                     color = Color.token.text01,
                     ...rest
                   }) =>
  (
    <Container {...rest} color={color}>
      {message || text}
    </Container>
  )

ThemeText.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number,
  css: PropTypes.func,
  text: PropTypes.string,
  values: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ),
  ellipsis: PropTypes.bool,
}
ThemeText.defaultProps = {
  fontSize: '2',
}

// export const ThemeTextStep = dialogStep(ThemeText)
export default ThemeText
