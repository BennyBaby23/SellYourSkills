import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI"; 
import sellyourskillslogo from "../assets/sellyourskillslogo1.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginComponent(){
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({});

    const login = async () => {
        try{
        let res = await LoginAPI(credentials.email, credentials.password);
       toast.success('success Login');
       navigate("/home")
        }catch(err){
            toast.err("Login Failed");

        }
    
    };

    const googleSignIn = () => {
        try{
            let response = GoogleSignInAPI();
            navigate("/home");
      
        }catch(err){
            toast.err("Login Failed");

        }
    
    };


    return (
        <div className= "login-wrapper">
            
            {/* logo */}
            <img src={sellyourskillslogo} className="sellyourskillslogo"/>
            {/* heading */}
            <div className="login-inner">
            <h1 className="heading">Sign In</h1>
            <p className="sub-heading">Stay connected with professional</p>

            <div className="auth-inputs">
            <input onChange={(event) => setCredentials({...credentials, email: event.target.value})} className= "common-input" placeholder="Email or Phone" type="email" />
            <input onChange={(event) => setCredentials({...credentials, password: event.target.value})} className= "common-input" placeholder="Password" type="password" />
            </div>

            <button onClick={login} className="login-btn"> Log in </button>
            <hr className="hr-text" data-content="OR" />
            <GoogleButton className="google-btn" onClick={ googleSignIn }/>
            <p className="go-to-signup">New to SellYourSkills? <span className="join-now" onClick={() => navigate('/register')}>Join Now</span></p>
            </div>
           
        </div>
   
    );
}