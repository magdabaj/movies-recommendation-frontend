import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MSnackBar from '@material-ui/core/Snackbar'
// import { isMessage } from 'utils/translations/helpers'
// import { injectIntl, intlShape } from 'react-intl'
// import { translationOrTextPropType } from 'utils/propTypes/translationPropType'
import styled from 'styled-components'
import { ColorPlace } from './constants'
import SnackbarClose from './components/SnackbarClose'
import { handleVariant, isErrorVariant } from './common'
import { useSnackbarContext } from './hooks/useSnackbarContext'
import { snackbarVariantPropType } from './propTypes'

const StyledSnackbar = styled(MSnackBar)`
  && {
    transform: none;
    bottom: auto;
    left: auto;
    position: static;
  }
  .MuiSnackbarContent-root {
    background-color: ${handleVariant(ColorPlace.background)};
    color: ${handleVariant(ColorPlace.font)};
    width: 100%;
    flex-wrap: nowrap;
  }
`

const Snackbar = ({ id, text, variant }) => {
  const { removeSnackbar } = useSnackbarContext()
  const [open, setOpen] = useState(true)
  const autoHideDuration = isErrorVariant(variant) ? null : 5e3
  const message = text

  const close = () => {
    setOpen(false)
    removeSnackbar(id)
  }

  const handleClose = (e, reason) => {
    if (reason !== 'clickaway') close() // 'clickaway' is reason from the SnackbarCloseReason (mui source code) type
  }

  return (
    <StyledSnackbar
      data-testid="snackbar"
      data-errorsnackbar={isErrorVariant(variant)}
      action={<SnackbarClose variant={variant} close={close} />}
      onClose={handleClose}
      open={open}
      variant={variant}
      message={message}
      autoHideDuration={autoHideDuration}
    />
  )
}

Snackbar.propTypes = {
  variant: snackbarVariantPropType,
  // intl: intlShape.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Snackbar
