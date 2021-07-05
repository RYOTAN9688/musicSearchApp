import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthService';


const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            component={props =>
                user ? (
                    <Component {...props} />//trueの値
                ) : (
                    <Redirect to={'Login'} />//falseの値
                )
            }
        />
    )
}

export default LoggedInRoute;