import React from 'react';
import './authForm.scss';
import {Link} from "react-router-dom";
import AppLogo from "../../SharedComponents/AppLogo/AppLogo";

function AuthForm(props) {
    return(
        <div className="authFormPage" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <AppLogo />
            <div className="card">
                <div className="logoImgContainer">
                    <img alt="" src="/icons/user.png" />
                </div>
                <form onSubmit={props.onSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>

                    { props.signUp
                        ?
                        <input type="password" placeholder="Repeat password" />
                        :
                        null
                    }

                    <button onClick={props.onClick}>{props.name}</button>
                </form>
                <Link to={props.linkTo}>{props.linkText}</Link>
            </div>
        </div>
    )
}

export default AuthForm;