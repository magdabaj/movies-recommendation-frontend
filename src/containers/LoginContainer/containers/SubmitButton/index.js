import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Button from '../../../../components/Button'
import { makeSelectHasApiCallsInProgress } from '../../../App/apiCalls/selectors'

export const SubmitButton = ({
                               message,
                               disabled,
                               requestActionName,
                               'data-testid': testId = 'submit-button',
                             }) => {
  const isRequesting = useSelector(
    makeSelectHasApiCallsInProgress(requestActionName),
  )

  return (
    <Button
      data-testid={testId}
      type="submit"
      disabled={Boolean(disabled || isRequesting)}
      showSpinner={Boolean(isRequesting)}
      message={message}
    />
  )
}
SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  message: PropTypes.string.isRequired,
  'data-testid': PropTypes.string,
  requestActionName: PropTypes.string,
}

export default SubmitButton
