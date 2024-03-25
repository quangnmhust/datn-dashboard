import React from 'react'
import './Register.css'
import '../../App.css'

//
import video from '../../LoginAssets/blossoms.mp4'
import picture from '../../LoginAssets/Lovepik.png'

//import icon
import { MdEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { PiPasswordFill } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";

import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='registerPage flex'>
        <div className='container flex'>

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className='title'>Creat and sell extraordinary products</h2>
                    <p>Adopt the peace of nature!</p>
                </div>

                <div className='footerDiv flex'>
                    <span className='text'>I have an account?</span>
                    <Link to={'/login'}>
                        <button className='btn'>Log In</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={picture} alt='Logo Image'/>
                    <h3>Let Us Know About You!</h3>
                </div>

                <form action='' className='form gird'>
                  <div className='inputDiv'>
                      <label htmlFor='Email'>Email</label>
                      <div className="input flex">
                          <MdEmail className='icon'/>
                          <input type="email" id='email' placeholder='Enter your email'/>
                      </div>
                  </div>

                  <div className='inputDiv'>
                      <label htmlFor='Username'>Username</label>
                      <div className="input flex">
                          <FaUserShield className='icon'/>
                          <input type="text" id='username' placeholder='Username'/>
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
                      <span>Register</span>
                      <CiLogin className='icon'/>
                  </button>

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

export default Register