import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Form from '../../../../../../components/Form'
import PasswordInput from '../../../../../../components/Form/components/Input/PasswordInput'
import ButtonContainer from '../../../../../../components/ButtonContainer'
import messages from '../../messages'
import schema from './schema'
import SubmitButton from '../../../SubmitButton'
import { requestSetSession } from '../../actions'
import UsernameInput from '../../../../components/UsernameInput'
import SwitchInput from '../../../../../../components/Form/components/Input/SwitchInput'
import { REQUEST_SET_SESSION } from '../../constants'
import {compose} from "redux";

export const SignInForm = ({ initialValues, submitHandler }) => {
  return (
    <Form
      schema={schema}
      onValidSubmit={submitHandler}
      initialValues={initialValues}
      Fields={form => (
        <>
          <UsernameInput/>
          <PasswordInput placeholder={messages.passwordPlaceholder}/>
          <SwitchInput name="rememberMe" labelMessage={messages.rememberMe}/>
          <ButtonContainer topSpacing={1}>
            <SubmitButton
              {...form}
              message={messages.signIn}
              requestActionName={REQUEST_SET_SESSION}
            />
          </ButtonContainer>
        </>
      )}
    />
  )
}

SignInForm.propTypes = {
  initialValues: PropTypes.exact({
    username: PropTypes.string,
    password: PropTypes.string,
    rememberMe: PropTypes.bool,
  }),
  submitHandler: PropTypes.func.isRequired,
}

SignInForm.defaultProps = {
  initialValues: {
    username: '',
    password: '',
    rememberMe: false,
  },
}

export const mapDispatchToProps = {
  submitHandler: requestSetSession,
}

const withConnect = connect(
  null,
  mapDispatchToProps,
)

export default compose(withConnect)(SignInForm)
