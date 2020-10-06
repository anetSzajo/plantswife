import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";

import AppLogo from "../../../SharedComponents/AppLogo/AppLogo";
import '../authForm.scss';

function LoginForm(props) {

    const [isError, setIsError] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const { register, errors, handleSubmit } = useForm();

    return(
        <div className="authFormPage" style={{backgroundImage: `url(/plantsPhotos/homeJungle.jpg)` }}>

            <AppLogo />
            <div className="card">
                <div className="logoImgContainer">
                    <img alt="" src="/icons/user.png" />
                </div>
                <form onSubmit={handleSubmit(() => props.onSubmit(userEmail, userPassword))}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={ e => {
                            setUserEmail(e.target.value)
                        }}
                        ref={
                            register({
                                required: true,
                                pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/
                            })
                        }
                    />
                    {errors.email && errors.email.type === 'required' && (
                        <p>Required</p>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                        <p>Please enter valid email address (e.g. plantswife@gmail.com)</p>
                    )}
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={ e => {
                            setPassword(e.target.value)
                        }}
                        ref={
                            register({
                                required: true,
                                pattern: /^(?=.*\d).{4,8}$/
                            })
                        }
                    />
                    {errors.password && errors.password.type === 'required' && (
                        <p>Required</p>
                    )}
                    {errors.password && errors.password.type === 'pattern' && (
                        <p>Password must be between 4 and 8 digits long and include at least one numeric digit.</p>
                    )}

                    <button type="submit">Login</button>
                </form>
                <Link to="/signUp">Don't have an account?</Link>
                { isError ? <p>The username or password provided were incorrect!</p> : null}
            </div>
        </div>
    )
}

export default LoginForm;