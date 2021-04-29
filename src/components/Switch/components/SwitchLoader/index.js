import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import { themeSpacing } from '../../../../themes/fromTheme'
import { ifProp } from '../../../../utils/obj'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import { getColor } from '../../../../themes/color/getColor'
import Color from '../../../../themes/color/constants'
import withStyledWithoutProps from '../../../../utils/hoc/withStyledWithoutProps'

const Rotor = withStyledWithoutProps(Box, ['checked'])`
  position: absolute;
  left: ${themeSpacing(1.125)};
  top: ${themeSpacing(1.125)};
  z-index: 1;
  transform: ${ifProp('checked', {
  onTrueValue: `translateX(20px) !important`,
})};
`
const StyledCircularProgress = styled(CircularProgress)`
  color: ${getColor(Color.token.switchLoad01)};
`
const SwitchLoader = ({ checked }) => (
  <Rotor checked={checked} data-testid="switch-loader">
    <StyledCircularProgress size={20} thickness={6} />
  </Rotor>
)

SwitchLoader.propTypes = {
  checked: PropTypes.bool,
}

export default SwitchLoader
