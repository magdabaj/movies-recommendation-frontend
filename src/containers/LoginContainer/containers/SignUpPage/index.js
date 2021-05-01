import React, { useState } from 'react'
import styled from 'styled-components'
// import { createStructuredSelector } from 'reselect'
import {connect, useDispatch} from 'react-redux'

import injectSaga from '../../../../utils/injectSaga'
// import Stepper from 'components/Stepper'
// import Popout from '../../../../components/Popout'
// import ConsentStep from './components/ConstentStep'
// import WelcomeStep from './components/WelcomeStep'
// import SignUpStep from './components/SignUpStep'
import { requestCreateNewUser } from './actions'
// import SignUpFinished from './components/SignUpFinished'
import SignUpForm from './components/SignUpForm'
// import saga from './saga'
import { containerModal } from '../../../../themes/commonCss/containerModal'
import {compose} from "rambda";

// const key = 'signUpPage'

const Wrapper = styled.div`
  ${containerModal}
`

// eslint-disable-next-line no-shadow
export const SignUpPage = () => {
  // injectSaga({key, saga})
  const [usernamePassword] = useState({
    username: '',
    password: '',
  })
  //
  const dispatch = useDispatch()
  const dispatchCreateNewUser = compose(dispatch, requestCreateNewUser)
  //
  // const handleFinished = (userNameAndPassword) => {
  //   setUsernamePassword(userNameAndPassword)
  //   // dispatch(requestCreateNewUser({
  //   //   username: userNameAndPassword.username,
  //   //   password: userNameAndPassword.password,
  //   // }))
  //   // dispatch(requestSetSession())
  // }

  return (
    <Wrapper>

      <SignUpForm
        initialValues={usernamePassword}
        submitHandler={dispatchCreateNewUser}
      />
    </Wrapper>
  )
}

SignUpPage.propTypes = {
}

export default SignUpPage
