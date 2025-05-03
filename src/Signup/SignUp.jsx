import React,{useState,useRef} from 'react'
import './SignUp.css'
import MIRABOT from "./../assets/loginImage.avif";
import { BiShow } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const SignUp = () => {
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    const handleSubmit=()=>{
        e.preventDefault();
        if(password!==confirmPassword) {
            setError('Passwords do not match!');
        }else{
      setError('');
      alert('Registered successfully!');
    }
    }
  return (
    <>
    <div className='login-top-bg'></div>
        <div className='login-page'>
          <div className="login-page-main">
            <div className="login-page-main-form">
                <h2 className='text-center text-[20px] md:text-[30px] font-bold'>Sign Up</h2>
                <label for="username" className='text-[#b8b7b7] text-[12px] md:[text-15px]'>Name</label>
                <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}} className='text-[12px] md:text-[15px]'></input>
                <label for="username" className='text-[#b8b7b7] text-[12px] md:text-[15px]'>Email ID</label>
                <input type="text" id="username" onChange={(e)=>{setEmail(e.target.value)}} className='text-[12px] md:text-[15px]'></input>
                <div className="password-label"><label for="passcode" className='text-[#b8b7b7] text-[12px] pr-[40px] md:[text-15px]'>Password</label></div>
                <div className="password-input">
                    <input type={showPassword?"text":"password"} id="passcode" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <button className='password-show-btn' onClick={handleShowPassword}>{showPassword?<GoEyeClosed/>:<BiShow/>}</button>
                </div>
                <div className="password-label"><label for="passcode" className='text-[#b8b7b7] text-[15px] pr-[40px] text-[12px] md:text-[15px]'>Confirm Password</label></div>
                <div className="password-input">
                    <input type={showPassword?"text":"password"} id="passcode" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
                    <button className='password-show-btn' onClick={handleShowPassword}>{showPassword?<GoEyeClosed/>:<BiShow/>}</button>
                </div>
                <RouterLink to="/login" className='log-in-form-btn text-center'>
                 Continue
                </RouterLink>
                <RouterLink to="/login" className='log-in-form-btn btn-google text-center text-[13px]'>Already Registred? Log In</RouterLink>
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

export default SignUp
