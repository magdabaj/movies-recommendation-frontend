import React, { useState } from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import injectSaga from 'utils/injectSaga'
import Stepper from 'components/Stepper'
import Popout from 'components/Popout'
import ConsentStep from 'containers/LoginContainer/containers/SignUpPage/components/ConstentStep'
import WelcomeStep from 'containers/LoginContainer/containers/SignUpPage/components/WelcomeStep'
import SignUpStep from 'containers/LoginContainer/containers/SignUpPage/components/SignUpStep'
import { requestCreateNewUser } from 'containers/LoginContainer/containers/SignUpPage/actions'
import SignUpFinished from 'containers/LoginContainer/containers/SignUpPage/components/SignUpFinished'
import SignUpForm from 'containers/LoginContainer/containers/SignUpPage/components/SignUpStep/components/Form'
import saga from 'containers/LoginContainer/containers/SignUpPage/saga'
import { requestSetSession } from 'containers/LoginContainer/containers/SignInPage/actions'
import { makeSelectHasUsers } from 'containers/LoginContainer/selectors'
import messages from 'containers/LoginContainer/containers/SignUpPage/messages'
import { containerModal } from 'themes/commonCss/containerModal'

const key = 'signUpPage'
const titles = [messages.welcome, messages.registration, messages.registration]

const Wrapper = styled.div`
  ${containerModal}
`

// eslint-disable-next-line no-shadow
export const SignUpPage = ({ requestCreateNewUser }) => {
  const [title, setTitle] = useState(messages.welcome)
  const [usernamePassword, setUsernamePassword] = useState({
    username: '',
    password: '',
    confirmedPassword: '',
  })

  const handleFinished = () => {
    requestCreateNewUser({
      username: usernamePassword.username,
      password: usernamePassword.password,
    })
    setTitle(messages.added)
  }

  return (
    <Wrapper>
      <Popout title={title}>
        <Stepper
          data-testid="sign-up-stepper"
          onStepChange={activeStepIndex => setTitle(titles[activeStepIndex])}
          onFinished={handleFinished}
          showWhenDone={<SignUpFinished setTitle={setTitle} />}
        >
          <WelcomeStep data-testid="welcome-step" />
          <SignUpStep
            data-testid="sign-up-step"
            form={handleNext => (
              <SignUpForm
                initialValues={usernamePassword}
                submitHandler={userNameAndPassword => {
                  setUsernamePassword(userNameAndPassword)
                  handleNext()
                }}
              />
            )}
          />
          <ConsentStep
            data-testid="consent-step"
            consents={consents}
            setConsents={setConsents}
          />
        </Stepper>
      </Popout>
    </Wrapper>
  )
}

SignUpPage.propTypes = {
  requestCreateNewUser: PropTypes.func.isRequired,
}

export const mapDispatchToProps = {
  requestSetSession,
  requestCreateNewUser,
}

const withConnect = connect(
  null,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  injectSaga({
    key,
    saga,
  }),
)(SignUpPage)
