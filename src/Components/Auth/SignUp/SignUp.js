import React, {useState} from 'react';
import SignUpForm from "../AuthForms/SignUpForm/SignUpForm";
import Footer from '../../Footer/Footer';
import {useAuth} from "../../../Context/auth";
import axios from "axios";
import {Redirect} from "react-router-dom";

function SignUp(){

    const [isSignedUp, setSignedUp] = useState(false);
    const [isError, setIsError] = useState(false);

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
                    setIsError(true);
                }
            })
            .catch(e => {
                setIsError(true);
            });
    }

    if (isSignedUp) {
        return <Redirect to="/" />;
    } else{
        return(
            <div>
                <SignUpForm onSubmit={postSignUp} />
                <Footer />
            </div>
        )
    }
}

export default SignUp;