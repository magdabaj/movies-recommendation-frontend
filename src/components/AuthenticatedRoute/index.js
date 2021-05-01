import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export const AuthenticatedRoute = ({
                                       component: Component,
                                       hasSession,
                                       redirectTo,
                                       ...rest
                                   }) => {
  console.log(hasSession, 'hasSession')
 return (<Route
    {...rest}
    render={props =>
      hasSession ? <Component {...props} /> : <Redirect to={redirectTo}/>
    }
  />)
}

AuthenticatedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    hasSession: PropTypes.bool,
    redirectTo: PropTypes.string.isRequired,
}

export default AuthenticatedRoute
