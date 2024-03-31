import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { PiIdentificationBadgeFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from 'react-toastify';

const Login = () => {

    const notify = () => {
        toast.success("Successfuly Log in");
    }

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

    const handleChangeId = (event) => {
        const value = event.target.value;
        setId(value);
      };

    const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    };


  return (
    <div className="screen-container">
        <img src="./abstract.svg" alt="" className='abstract'/>
        <div className="left">
            <div className="logo"><img src="./logo.png" alt="Logo" className='logo-image'/></div>
            <div className="login-image">
                <div className="login-image" id='main-login-image'>
                    <img src="./l-image.jpeg" alt="" />
                </div>
            </div>
        </div>
        <div className="right">
            <div className="title-container">
                <h3>Login</h3>
            </div>
            <div className="input-container">
                <div className="input-bar">
                    <label htmlFor="id">ID</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        className='l-input'
                        placeholder="Enter id"
                        value={id}
                        onChange={handleChangeId}
                    />
                    <PiIdentificationBadgeFill className='input-icon' id='l-specific-icon'/>
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            </div>

            <div className="input-bar">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        className='l-input'
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <RiLockPasswordFill className='input-icon' id='l-specific-icon'/>
            </div>

            <div className="input-bar">
                <p className='f-password'><Link to="">Forgot Password?</Link></p>
            </div>

            <div className="submit-container">
                <button onClick={notify}>Login</button>
            </div>

            <div className="input-bar">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login