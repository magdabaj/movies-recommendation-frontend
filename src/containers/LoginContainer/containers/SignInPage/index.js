import React from 'react'

import SignInForm from './components/Form'
import LinkToForgotPassword from './components/Form/LinkToForgotPassword'
import { containerModal } from '../../../../themes/commonCss/containerModal'
import FormContainer from '../FormContainer'

const SignInPage = () => (
  <FormContainer
    containerCss={containerModal}
    footer={<LinkToForgotPassword />}
  >
    <SignInForm />
  </FormContainer>
)

export default SignInPage
