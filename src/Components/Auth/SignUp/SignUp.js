import React, {useState} from 'react';
import {useAuth} from "../../../Context/auth";
import axios from "axios";
import {Redirect} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../../SharedComponents/Alert/Alert';
import SignUpForm from "../AuthForms/SignUpForm/SignUpForm";
import Footer from '../../Footer/Footer';

function SignUp(){

    const [isSignedUp, setSignedUp] = useState(false);
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

    function postSignUp(userName, userEmail, userPassword) {

        axios.post(`${process.env.REACT_APP_AXIOS_URL}/auth/register`,
            {
                "name": userName,
                "email": userEmail,
                "password": userPassword
            })
            .then(result => {
                if (result.status === 201) {
                    setAuthTokens(result.data);
                    setSignedUp(true);
                } else {
                    handleClick();
                }
            })
            .catch(e => {
                handleClick();
            });
    }

    if (isSignedUp) {
        return <Redirect to="/" />;
    } else{
        return(
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
                    <Alert onClose={handleClose} severity="error">
                        Email is already taken! Try with another email.
                    </Alert>
                </Snackbar>
                <SignUpForm onSubmit={postSignUp} />
                <Footer />
            </div>
        )
    }
}

export default SignUp;