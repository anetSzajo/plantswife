import React from "react";
import { useAuth } from '../../../Context/auth';
import './styles.scss';


function LogoutButton(){

    const { setAuthTokens } = useAuth();

    function logOut(){
        setAuthTokens();
    }

    return(
        <div>
            <button className="logoutButton" onClick={logOut}>
                <img alt="" src="/../icons/logout.png" />
            </button>

        </div>
    )
}

export default LogoutButton;