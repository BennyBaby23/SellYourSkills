import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI"; 
import sysLogo from "../assets/SYS3.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent(){
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({});

    const register = async () => {
        try{
        let res = await RegisterAPI(credentials.email, credentials.password);
       toast.success('Success Register');
       navigate("/home")
        }catch(err){
            toast.err("Register Failed");

        }
    
    };

    const googleSignIn = () => {
        try{
            let response = GoogleSignInAPI();
            navigate("/home");
      
        }catch(err){
            toast.err("Register Failed");

        }
    
    };


    return (
        <div className= "login-wrapper">
            
            {/* logo */}
            <img src={sysLogo} className="sysLogo"/>
            {/* heading */}
            <div className="login-inner">
            <h1 className="heading">Register</h1>
            <p className="sub-heading">Learn or Sell a Skill</p>

            <div className="auth-inputs">
            <input onChange={(event) => setCredentials({...credentials, email: event.target.value})} className= "common-input" placeholder="Email or Phone" type="email" />
            <input onChange={(event) => setCredentials({...credentials, password: event.target.value})} className= "common-input" placeholder="Password (6 or more characters)" type="password" />
            </div>

            <button onClick={register} className="login-btn"> Register </button>
            <hr className="hr-text" data-content="OR" />
            <GoogleButton className="google-btn" onClick={ googleSignIn }/>
            <p className="go-to-signup">Already have a Account? <span className="join-now" onClick={() => navigate('/')}>Log In</span></p>
            </div>
           
        </div>
   
    );
}
