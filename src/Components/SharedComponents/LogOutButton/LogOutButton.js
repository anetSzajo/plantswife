import React from "react";
import { useAuth } from '../../../Context/auth';
import './styles.scss';


function LogOutButton(){

    const { setAuthTokens } = useAuth();

    function logOut(){
        setAuthTokens();
    }

    return(
        <button className="logOut-button" onClick={logOut}>Log out</button>
    )
}

export default LogOutButton;