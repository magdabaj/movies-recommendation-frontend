import React from 'react'
import {useInjectSaga} from "../../utils/injectSaga";
import saga from "./saga";
import {getColor} from "../../themes/color/getColor";
import Color from "../../themes/color/constants";
import Column from "../../components/Column";
import {Redirect} from "react-router-dom";
import styled from 'styled-components'
import {Breakpoint, themeBreakpoint, Type} from "../../themes/fromTheme/breakpoint";
import {themeSpacing} from "../../themes/fromTheme";
import {Route} from "react-router";
import SignInPage from './containers/SignInPage'

const key = 'loginContainer'

const Container = styled(Column)`
  background: linear-gradient(
    205.28deg,
    ${getColor(Color.token.appBackground01)} 14.05%,
    ${getColor(Color.token.appBackground02)} 102.1%
  );
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: auto;
`

const RouteContainer = styled.div`
  ${themeBreakpoint(Type.down, Breakpoint.xs)} {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: ${themeSpacing(2)};
  }
`

export const LoginContainer = ({ hasSession }) => {
  useInjectSaga({ key, saga })

  return (
    <Container>
      {hasSession && <Redirect to={"/"}/>}
      <RouteContainer>
        {/*<Route path="/forgot-password" component={ForgotPasswordPage} />*/}
        {/*<Route path="/sign-up" component={SignUpPage} />*/}
        <Route path="/sign-in" component={SignInPage} />
        <Route exact path="/" render={() => <Redirect to="/sign-in" />} />
      </RouteContainer>
    </Container>
  )
}
