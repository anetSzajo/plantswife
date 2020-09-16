import React from 'react';
import AuthForm from "../AuthForm/AuthForm";
import Footer from '../../Footer/Footer';


function Login(){
   return(
       <div>
           <AuthForm name="Login" linkTo="/signUp" linkText="Don't have an account?" backgroundImage="/plantsPhotos/homeJungle.jpg"/>
           <Footer />
        </div>
   )
}

export default Login;