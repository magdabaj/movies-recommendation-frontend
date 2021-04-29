import React from "react";
import {Route, Switch} from "react-router-dom";
import {AuthenticatedRoute} from "../../components/AuthenticatedRoute";
import App from "../App";
import {LoginContainer} from "../LoginContainer";
import GlobalErrorHandler from "../GlobalErrorHandler";

const DefaultContainer = () => (
    <>
        <Switch>
            <GlobalErrorHandler>
                <Route
                    exact
                    path="/:path(sign-in|sign-up|forgot-password)"
                    component={LoginContainer}
                />
                <AuthenticatedRoute
                    path={'/'}
                    component={App}
                    redirectTo={'/sign-in'}
                 />
            </GlobalErrorHandler>
        </Switch>
    </>
)

export default DefaultContainer
