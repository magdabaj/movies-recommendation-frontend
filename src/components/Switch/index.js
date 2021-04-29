/**
 *
 * Switch
 *
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MSwitch from '@material-ui/core/Switch'
import { getColor } from '../../themes/color/getColor'
import Color from '../../themes/color/constants'
import { passNthArg } from '../../utils/function'
import Box from '@material-ui/core/Box'
import SwitchLoader from './components/SwitchLoader'

const StyledSwitch = styled(MSwitch)`
  .MuiSwitch-track {
    mix-blend-mode: normal;
    opacity: 0.9 !important;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.15);
    background-color: ${props =>
  getColor(
    props.checked ? Color.token.switchOn01 : Color.token.switchOff01,
  )}
`

/**
 * todo @anyone
 * When I'm adding data-testId to component it's not working in
 * tests. Because we pass dataTestId. It's confusing.
 */
const Switch = ({
                  checked,
                  handleChange,
                  dataTestId = 'switch',
                  containerTestId = 'switch-container',
                  showLoading,
                  ...rest
                }) => (
  <Box position="relative" data-testid={containerTestId}>
    {showLoading && <SwitchLoader checked={checked} />}
    <StyledSwitch
      inputProps={{ 'data-testid': dataTestId }}
      color="default"
      onChange={passNthArg(handleChange)}
      checked={checked}
      {...rest}
    />
  </Box>
)

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
  containerTestId: PropTypes.string,
  showLoading: PropTypes.bool,
}

export default Switch
