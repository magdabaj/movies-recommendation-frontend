import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import MButton from '@material-ui/core/Button'
import { varietyPropType } from './propTypes'
import ButtonVariety from './buttonVariety'
import colorCss from './colorCss'
import { prop } from 'rambda'
import {
  themeColor,
  themeLineHeight,
  themeSpacing,
  themeTypographyFontSize,
  themeShape,
} from '../../themes/fromTheme'
import { Sizes } from '../Text/props'
import Color from '../../themes/color/constants'
import { getColor } from '../../themes/color/getColor'
import { ifProp } from '../../utils/obj'
import withStyledWithoutProps from '../../utils/hoc/withStyledWithoutProps'
import Loader from '../Loader'

const fitContentCss = ({ fitContent }) =>
  fitContent &&
  css`
    &&& {
      width: fit-content;
      padding-left: ${themeSpacing(2)};
      padding-right: ${themeSpacing(2)};
    }
  `
const roundedCss = ({ rounded }) =>
  rounded &&
  css`
    &.MuiButton-root {
      border-radius: ${themeShape('borderRadiusXXL')};
    }
  `

const StyledButton = withStyledWithoutProps(MButton, ['fitContent', 'rounded'])`
  line-height: ${themeLineHeight(Sizes.x2p5)};
  border: 1px solid ${themeColor('default')};
  &.MuiButton-root {
    border-radius: ${themeShape('borderRadiusLarge')};
  }
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  width: 100%;
  padding: 0;
  height: 38px !important;
  overflow: hidden;
  white-space: ${ifProp('nowrap', { onTrueValue: 'nowrap' })};
  ${colorCss}
  ${fitContentCss}
  ${roundedCss}
`

const Text = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${themeTypographyFontSize('button')};
  line-height: ${themeSpacing(2.5)};
  opacity: ${ifProp('showSpinner', { onTrueValue: 0 })};
  display: flex;
  align-items: center;
  text-align: center;
`

const Progress = styled.div`
  background-color: ${getColor(Color.token.buttonProgressBar01)};
  position: absolute;
  height: 100%;
  width: ${prop('progress')}%;
  z-index: 1;
  left: 0;
`

const ButtonSpinner = styled(Loader)`
  z-index: 2;
`

const Button = ({ message, children, showSpinner, progress, ...rest }) => {
  const isSpinner = Boolean(showSpinner || progress)
  return (
    <StyledButton {...rest}>
      {isSpinner && (
        <ButtonSpinner position="absolute" size={20} thickness={5} />
      )}
      {message && (
           <Text showSpinner={isSpinner}>{message}</Text>
      )}
      {children}
      <Progress progress={progress} data-testid="button-progress" />
    </StyledButton>
  )
}

Button.propTypes = {
  message: PropTypes.string,
  showSpinner: PropTypes.bool,
  onClick: PropTypes.func,
  variety: varietyPropType,
  children: PropTypes.node,
  progress: PropTypes.number,
  fitContent: PropTypes.bool,
}

Button.defaultProps = {
  showSpinner: false,
  variety: ButtonVariety.primary,
  progress: 0,
}

export default Button
