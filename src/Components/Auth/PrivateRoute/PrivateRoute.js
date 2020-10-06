import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from "../../../Context/auth";

function PrivateRoute( {component: Component, ...rest} ) {

    const { authTokens } = useAuth(); //get tokens from context, having means that authenticated

    return(
        <Route
            {...rest}
            render={ props =>
                authTokens
                    ?
                    (
                    <Component {...props} />
                    )
                    :
                    (
                        <Redirect to={{ pathname: "/login", state: { referer: props.location } }} />
                    )
            }
        />
    );
}

export default PrivateRoute;