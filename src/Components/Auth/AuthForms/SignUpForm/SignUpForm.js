import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";

import AppLogo from "../../../SharedComponents/AppLogo/AppLogo";
import '../authForm.scss';

function SignUpForm(props) {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const { register, getValues, errors, handleSubmit } = useForm();


    return(
        <div className="authFormPage" style={{backgroundImage: `url(/plantsPhotos/homeJungle2.jpg)`}}>
            <AppLogo />
            <div className="card">
                <div className="logoImgContainer">
                    <img alt="" src="/icons/user.png" />
                </div>
                <form onSubmit={handleSubmit(() => props.onSubmit(userName, userEmail, userPassword))}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={ e => {
                            setUserName(e.target.value)
                        }}
                        ref={
                            register({
                                required: true,
                                minLength: 4
                            })
                        }
                    />
                    {errors.name && errors.name.type === 'required' && (
                        <p>Required</p>
                    )}
                    {errors.name && errors.name.type === 'minLength' && (
                        <p role="alert">Name must be min 4 digits long.</p>
                    )}
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
                                // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                                // Password must be between 4 and 8 digits long and include at least one numeric digit.
                            })
                        }
                    />
                    {errors.password && errors.password.type === 'required' && (
                        <p>Required</p>
                    )}
                    {errors.password && errors.password.type === 'pattern' && (
                        <p>Password must be between 4 and 8 digits long and include at least one numeric digit.</p>
                    )}

                    <input
                        name="repeatPassword"
                        type="password"
                        placeholder="Repeat password"
                        ref={
                            register({
                                required: "Required",
                                validate: (value) => {
                                    if (value === getValues().password) {
                                        return true;
                                    } else {
                                        return "Passwords don't match.";
                                    }
                                }
                            })
                        }
                    />
                    {errors.repeatPassword && <p>{ errors.repeatPassword.message }</p> }

                    <button type="submit">Sign Up</button>
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        </div>
    )
}

export default SignUpForm;