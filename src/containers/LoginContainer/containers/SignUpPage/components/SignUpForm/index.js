import React from 'react'
import PropTypes from 'prop-types'
import Form from '../../../../../../components/Form'
import PasswordInput from '../../../../../../components/Form/components/Input/PasswordInput'
import ButtonContainer from '../../../../../../components/ButtonContainer'
// import BackButton from 'components/Stepper/components/BackButton'
import commonMessages from '../../../../messages'
import signUpPageMessages from '../../messages'
import Input from '../../../../../../components/Form/components/Input'
import schema from "./schema";
import SubmitButton from "../../../SubmitButton";

const SignUpForm = ({ initialValues, submitHandler }) => (
  <Form
    testId="sign-up-form"
    schema={schema}
    onValidSubmit={submitHandler}
    initialValues={initialValues}
    Fields={form => (
      <>
        <Input
          id="username"
          label={commonMessages.username}
          placeholder={commonMessages.usernamePlaceHolder}
        />
        <PasswordInput />
        <PasswordInput
          id="confirmedPassword"
          label={commonMessages.confirmPassword}
          placeholder={commonMessages.confirmPasswordPlaceholder}
        />
        <ButtonContainer>
          {/*<BackButton />*/}
          <SubmitButton {...form} message={signUpPageMessages.next} />
        </ButtonContainer>
      </>
    )}
  />
)

SignUpForm.propTypes = {
  initialValues: PropTypes.exact({
    username: PropTypes.string,
    password: PropTypes.string,
    confirmedPassword: PropTypes.string,
  }),
  submitHandler: PropTypes.func.isRequired,
}

SignUpForm.defaultProps = {
  initialValues: {
    username: '',
    password: '',
    confirmedPassword: '',
  },
}

export default SignUpForm
