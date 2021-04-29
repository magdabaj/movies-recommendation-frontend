import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import { ColorPlace } from '../../constants'
import styled from 'styled-components'
import { handleVariant } from '../../common'
import { snackbarVariantPropType } from '../../propTypes'
import FontAwesomeIconBase from '../../../../components/Icons/FontAwesomeIconBase'

const Icon = styled(FontAwesomeIconBase)`
  color: ${handleVariant(ColorPlace.font)};
`

const SnackbarClose = ({ variant, close }) => (
  <IconButton onClick={close} data-testid="snackbar-close">
    <Icon iconClassName="fal fa-times" variant={variant} fontSize="text" />
  </IconButton>
)

SnackbarClose.propTypes = {
  variant: snackbarVariantPropType,
  close: PropTypes.func.isRequired,
}

export default SnackbarClose
