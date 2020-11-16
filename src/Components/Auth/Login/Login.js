import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoginForm from "../AuthForms/LoginForm/LoginForm";
import Footer from '../../Footer/Footer';
import {useAuth} from "../../../Context/auth";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '../../SharedComponents/Alert/Alert';

function Login(props){

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

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
                handleClick();
            }
        }).catch(e => {
            handleClick();
        });
    }

        if (isLoggedIn) {
            return <Redirect to={referer} />;
        }

       return(
           <div>
               <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
                   <Alert onClose={handleClose} severity="error">
                       Email or password are incorrect! Try again.
                   </Alert>
               </Snackbar>
               <LoginForm onSubmit={postLogin}/>
               <Footer />
            </div>
       )
}

export default Login;