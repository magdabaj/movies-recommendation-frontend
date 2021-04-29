import React from 'react'
import PropTypes from 'prop-types'
import { Field, useFormikContext } from 'formik'
import InfoInput from '../../../../components/InfoWidget/InfoInput'
import { pathOrEmptyString } from '../../../../utils/obj'
import { isValidField } from './helpers'

const Input = ({
                 id,
                 iconDisabled,
                 disableOnValid = true,
                 disableOnInvalid = true,
                 fullWidth = true,
                 inputProps,
                 ...props
               }) => {
  const { values: formikValues, handleChange, ...form } = useFormikContext()
  const inputValue = pathOrEmptyString([id], formikValues)
  const { isValid, isInvalid } = isValidField(form, id)

  const inputPropsWithTestId = {
    'data-testid': id,
    'data-valid': isValid,
    'data-invalid': isInvalid,
    ...inputProps,
  }

  const propsWithTestId = {
    ...props,
    inputProps: inputPropsWithTestId,
  }

  return (
    <Field
      id={id}
      isValid={isValid}
      error={isInvalid}
      autoComplete="off"
      isIconButton
      variant="outlined"
      component={InfoInput}
      fullWidth={fullWidth}
      onChange={handleChange}
      value={inputValue}
      iconDisabled={
        (disableOnInvalid && isInvalid) ||
        iconDisabled ||
        (disableOnValid && isValid)
      }
      IconButtonProps={{
        type: 'submit',
      }}
      {...propsWithTestId}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  iconDisabled: PropTypes.bool,
  disableOnValid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disableOnInvalid: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.any),
}

export default Input
