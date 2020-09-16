import React from 'react';
import AuthForm from "../AuthForm/AuthForm";
import Footer from '../../Footer/Footer';

function SignUp(){
    return(
        <div>
            <AuthForm signUp={true} name="Sign Up" linkTo="/login" linkText="Already have an account?" backgroundImage="/plantsPhotos/homeJungle2.jpg" />
            <Footer />
        </div>
    )
}

export default SignUp;