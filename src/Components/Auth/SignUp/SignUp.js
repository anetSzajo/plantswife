import React, {useState} from 'react';
import SignUpForm from "../AuthForms/SignUpForm/SignUpForm";
import Footer from '../../Footer/Footer';
import {useAuth} from "../../../Context/auth";
import axios from "axios";
import {Redirect} from "react-router-dom";

function SignUp(){

    const [isSignedUp, setSignedUp] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postSignUp() {
        axios.post("", {
            userName,
            userEmail,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setSignedUp(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    // if (isSignedUp) {
    //     return <Redirect to="/" />;
    // }

    return(
        <div>
            <SignUpForm onSubmit={postSignUp} />
            <Footer />
        </div>
    )
}

export default SignUp;