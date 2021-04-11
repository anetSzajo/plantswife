import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../../Context/auth";


function PrivateRoute( {component: Component, ...rest} ) {

    const { authTokens } = useAuth();

    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('tokens');
        config.headers.common['Content-Type'] = 'application/json';

        if (token !=null ){
            config.headers.common.Authorization = `Bearer ${authTokens.access_token}`;
        }

        return config;
    }, function (err) {
        return Promise.reject(err)
    })


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