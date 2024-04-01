import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";
import './LoginSecurity.css'
import '../Settings/Settings.css'

const LoginSecurity = ({updatedSetting, security}) => {
    const [currentpassword, setCurrentpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState(null);

  
    const handleChangeCurrentpassword = (event) => {
      const value = event.target.value;
      setCurrentpassword(value);
    };

    const handleChangeNewpassword = (event) => {
        const value = event.target.value;
        setNewpassword(value);
      };

    const handleChangeConfirmpassword = (event) => {
    const value = event.target.value;
    setConfirmpassword(value);
    };
  
  
    return (
      <div className="wrapper-container">
        <div className="intro-container">
          <span>Customize Here</span>
          <span className='refresh'>
            <span>Refresh</span>
            <span><LuRefreshCw className='refresh'/></span>
          </span>
        </div>
  
        <div className="title-container">
          <h2>Login Settings</h2>
        </div>

        <div className='settings-menu'>
            <span><Link to={security[0]}>Account Settings</Link></span>
            <span><Link to={security[1]}>Login & Secuity</Link></span>
            <span><Link to={security[2]}>Notifications</Link></span>
        </div>

        <div className="input-container" id='settings-container'>
  
          <div className="input-bar">
            <label htmlFor="currentpassword">Current Password</label>
            <input
              type="password"
              id="currentpassword"
              name="currentpassword"
              placeholder="Enter current password"
              value={currentpassword}
              onChange={handleChangeCurrentpassword}
            />
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>
  
          <div className="input-bar">
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password"
              id="newpassword"
              name="newpassword"
              placeholder="Enter new password"
              value={newpassword}
              onChange={handleChangeNewpassword}
            />
          </div>

          <div className="input-bar">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={handleChangeConfirmpassword}
            />
          </div>

        </div>

        <div className="submit-container" id='update-container'>
            <button onClick={updatedSetting}>Update Changes</button>
          </div>
  
      </div>
    )
}

export default LoginSecurity