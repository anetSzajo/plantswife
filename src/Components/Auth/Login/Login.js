import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginForm from "../AuthForms/LoginForm/LoginForm";
import Footer from '../../Footer/Footer';
import {useAuth} from "../../../Context/auth";


function Login(props){

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    // const referer = props.location.state.referer || '/';
    ///redirect to previously entered page or a home page

    function postLogin() {
        axios.post("", {
            userName,
            userEmail,
            userPassword
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

        // if (isLoggedIn) {
        //     return <Redirect to={ referer } />;
        // }

       return(
           <div>
               <LoginForm onSubmit={postLogin}/>
               <Footer />
            </div>
       )
}

export default Login;