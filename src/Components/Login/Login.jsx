import React from 'react'
import './Login.css'
import '../../App.css'

//
import video from '../../LoginAssets/tree.mp4'
import picture from '../../LoginAssets/Lovepik.png'

//import icon
import { FaUserShield } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className='container flex'>

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className='title'>Creat and sell extraordinary products</h2>
                    <p>Adopt the peace of nature!</p>
                </div>

                <div className='footerDiv flex'>
                    <span className='text'>I don't have account?</span>
                    <Link to={'/register'}>
                        <button className='btn'>Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={picture} alt='Logo Image'/>
                    <h3>Welcome Back!</h3>
                </div>

                <form action='' className='form gird'>
                    <span className='showMessage'>Login status will go here</span>
                    <div className='inputDiv'>
                        <label htmlFor='Username or Email'>Username or Email</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Username or Email'/>
                        </div>
                    </div>
                    <div className='inputDiv'>
                        <label htmlFor='password'>Password</label>
                        <div className="input flex">
                            <PiPasswordFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter password'/>
                        </div>
                    </div>
                    <button type='submit' className='btn flex'>
                        <span>Login</span>
                        <CiLogin className='icon'/>
                    </button>
                    
                    <a href='/dashboard'>Dash board</a>

                    <span className='forgotPassword'> 
                        Forgot your password?   
                        <a href=''>Click here</a>
                    </span>
                </form>
            </div>

        </div>
    </div>
    )
}

export default Login