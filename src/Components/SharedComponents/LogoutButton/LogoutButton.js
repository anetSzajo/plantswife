import React from "react";
import { useAuth } from '../../../Context/auth';
import './styles.scss';


function LogoutButton(){

    const { setAuthTokens } = useAuth();

    function logOut(){
        setAuthTokens();
    }

    return(
        <button className="logoutButton" onClick={logOut}>Logout</button>
    )
}

export default LogoutButton;