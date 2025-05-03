import React, { useState,useRef } from 'react'
import { BiShow } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './Login.css'
import MIRABOT from "./../assets/loginImage.avif";
const Login = () => {
    const [showPassword,setShowPassword]=useState(false);
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
}
  return (
    <>
    <div className='login-top-bg'></div>
    <div className='login-page'>
      <div className="login-page-main">
        <div className="login-page-main-form">
            <h2 className='text-center text-[20px] font-bold md:text-[30px]'>Login</h2>
            <label for="username" className='text-[#b8b7b7] text-[12px] md:text-[15px]'>Email ID</label>
            <input type="text" id="username" className='text-[12px] md:text-[15px]'></input>
            <div className="password-label"><label for="passcode" className='text-[#b8b7b7] text-[12px] pr-[40px] md:text-[15px]'>Password</label><a href='/'><span className='text-[12px] md:text-[15px]'>Forgot Password ?</span></a></div>
            <div className="password-input">
                <input type={showPassword?"text":"password"} id="passcode"></input>
                <button className='password-show-btn' onClick={handleShowPassword}>{showPassword?<GoEyeClosed/>:<BiShow/>}</button>
            </div>
            <div className="remember-me">
                <input type="checkbox" id="rem-me" name="rem-me" value="rem-me"></input>
                <label for="rem-me" className='text-[#b8b7b7] text-[13px] md:text-[17px]'>Remember Me</label>
            </div>
            <RouterLink to="/ai" className='log-in-form-btn text-center'>
            Login
            </RouterLink>
            <RouterLink to="/signup" className='log-in-form-btn btn-google text-center text-[13px]'>New User? Sign Up</RouterLink>
            <RouterLink to="/" className='log-in-form-btn text-center bg-[#8872F1]'>Return To Home</RouterLink>
        </div>
        <div className="login-page-form-image">
            <img src={MIRABOT} height="100%" width="100%"></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
