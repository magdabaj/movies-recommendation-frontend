import React from "react";
import {Route, Switch} from "react-router-dom";
import {AuthenticatedRoute} from "../../components/AuthenticatedRoute";
import App from "../App";
import {LoginContainer} from "../LoginContainer";
import GlobalErrorHandler from "../GlobalErrorHandler";
import HomePage from "../HomePage";
import Navigation from "../Navigation";
import {createStructuredSelector} from "reselect";
import {makeSelectHasSession} from "../App/session/selectors";
import {useSelector} from "react-redux";
import MainContainer from "./MainContainer";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "../App/apiCalls/reducer";
const makeStateSelector = () =>
  createStructuredSelector({
    hasSession: makeSelectHasSession(),
  })
const key = 'defaultContainer'
const DefaultContainer = () => {
  useInjectReducer({key, reducer})
  const { hasSession } = useSelector(makeStateSelector())
  return (
    <MainContainer>
      <Navigation/>
      <Switch>
        <GlobalErrorHandler>
          <Route exact path={'/'} component={HomePage}/>
          <Route
            exact
            path="/:path(sign-in|sign-up|forgot-password)"
            component={LoginContainer}
          />
          <AuthenticatedRoute
            path={'/user'}
            component={App}
            redirectTo={'/sign-in'}
            hasSession={hasSession}
          />
        </GlobalErrorHandler>
      </Switch>
    </MainContainer>
  )
}

export default DefaultContainer
