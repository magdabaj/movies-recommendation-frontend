const DefaultContainer = () => (
    <>
        <Switch>
            <GlobalErrorHandler>
                <Route exact path={urls.shareTokens.index} component={ShareTokens} />
                <Route
                    exact
                    path="/:path(sign-in|sign-up|forgot-password)"
                    component={LoginContainer}
                />
                <AuthenticatedRoute
                    path={urls.dashboard.index}
                    component={App}
                    redirectTo={urls.signIn.index}
                />
            </GlobalErrorHandler>
        </Switch>
    </>
)

export default DefaultContainer