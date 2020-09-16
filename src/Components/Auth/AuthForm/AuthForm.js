import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";

import AppLogo from "../../SharedComponents/AppLogo/AppLogo";
import './authForm.scss';

function AuthForm(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const { register, watch, getValues, handleSubmit, errors } = useForm();

    return(
        <div className="authFormPage" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <AppLogo />
            <div className="card">
                <div className="logoImgContainer">
                    <img alt="" src="/icons/user.png" />
                </div>
                <form onSubmit={ handleSubmit(props.onSubmit) }>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
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
                        ref={
                            register({
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

                    { props.signUp
                        ?
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
                        :
                        null
                    }
                    {errors.repeatPassword && <p>{ errors.repeatPassword.message }</p> }

                    <button onClick={props.onClick}>{props.name}</button>
                </form>
                <Link to={props.linkTo}>{props.linkText}</Link>
            </div>
        </div>
    )
}

export default AuthForm;