import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

export const AuthenticatedRoute = ({
                                       component: Component,
                                       hasSession,
                                       redirectTo,
                                       ...rest
                                   }) => (
    <Route
        {...rest}
        render={props =>
            hasSession ? <Component {...props} /> : <Redirect to={redirectTo} />
        }
    />
)

AuthenticatedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    hasSession: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
}

const mapStateToProps = createStructuredSelector({
    hasSession: makeSelectHasSession(),
})

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(AuthenticatedRoute)