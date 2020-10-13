import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginForm from "../AuthForms/LoginForm/LoginForm";
import Footer from '../../Footer/Footer';
import {useAuth} from "../../../Context/auth";


function Login(props){

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);

    const { setAuthTokens } = useAuth();

    const referer = props.location.state?.referer || '/';
    ///redirect to previously entered page or a home page

    function postLogin(userEmail, userPassword) {
        axios.post(`${process.env.REACT_APP_AXIOS_URL}/auth/login`, {
            "email": userEmail,
            "password": userPassword
        }).then(result => {
            if (result.status === 201) {
                setAuthTokens(result.data);
                setLoggedIn(true);
                console.log(result.data)
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

        if (isLoggedIn) {
            return <Redirect to={referer} />;
        }

       return(
           <div>
               <LoginForm onSubmit={postLogin}/>
               <Footer />
            </div>
       )
}

export default Login;