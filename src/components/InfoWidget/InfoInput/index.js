import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import inputLikeStyles from '../styles/inputLikeStyles'
import withSkeleton from '../../../utils/hoc/WithSkeleton'
import InfoInputLabel from '../InfoInputLabel'
import { ifProp } from '../../../utils/obj'
import { omit } from 'rambda'
// import { getIcon } from 'components/InfoWidget/InfoInput/common'

export const StyledTextField = styled(({ fullWidth, ...rest }) => (
  <TextField {...rest} />
))`
  ${inputLikeStyles}
  &.MuiFormControl-root {
    width: ${ifProp('fullWidth', { onTrueValue: '100%' })};
  }
`

const InfoInput = ({
                     fullWidth,
                     intl,
                     placeholder,
                     icon: Icon,
                     InputProps,
                     isIconButton,
                     inputProps,
                     IconButtonProps = {},
                     label,
                     error,
                     isValid,
                     ...props
                   }) => {
  /* inputProps and InputProps are different objects https://material-ui.com/api/text-field/ */
  const InputPropsMerged = { ...InputProps }
  const inputPropsMerged = {
    'data-testid': 'settings-input-control',
    ...inputProps,
  }

  // const isErrorOrValid = error || isValid
  // if (Icon || isErrorOrValid) {
  //   InputPropsMerged.endAdornment = (
  //     <InfoInputIcon
  //       icon={getIcon(Icon, error, isValid)}
  //       isIconButton={isIconButton}
  //       IconButtonProps={IconButtonProps}
  //       error={error}
  //       isValid={isValid}
  //       {...props}
  //     />
  //   )
  // }

  return (
    <>
      {label && <InfoInputLabel label={label} />}
      <StyledTextField
        {...omit(['iconDisabled'], props)}
        error={error}
        fullWidth={fullWidth}
        placeholder={placeholder}
        data-testid="settings-input"
        InputProps={InputPropsMerged}
        /* eslint-disable-next-line react/jsx-no-duplicate-props */
        inputProps={inputPropsMerged}
      />
    </>
  )
}

InfoInput.propTypes = {
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  showSkeleton: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.elementType,
  InputProps: PropTypes.object, // can't specify
  inputProps: PropTypes.object,
  isIconButton: PropTypes.bool,
  IconButtonProps: PropTypes.object,
  label: PropTypes.string,
  isValid: PropTypes.bool,
}

export default withSkeleton(InfoInput, {
  width: 260,
  height: 38,
  radius: 'borderRadiusMediumSmall',
})
